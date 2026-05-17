import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { getStripeServerClient } from "@/lib/server/stripe";
import {
  calculatePlanExpiration,
  parseBillingCycle,
  parsePaidPlanId,
  type PaidPlanId,
} from "@/lib/plans/config";

export const runtime = "nodejs";

async function activateUserPlan(
  uid: string,
  planId: PaidPlanId,
  cycleMonths: number,
  extras: Record<string, unknown> = {},
) {
  const now = new Date();
  const startDate = now.toISOString();
  const endDate = calculatePlanExpiration(now, cycleMonths as 1 | 3 | 6);

  await getFirebaseAdminDb()
    .collection("users")
    .doc(uid)
    .set(
      {
        plan: planId,
        planStartedAt: startDate,
        planExpiresAt: endDate,
        planActivatedAt: FieldValue.serverTimestamp(),
        lastPaymentStatus: "paid",
        lastPaymentProvider: "stripe",
        billingCycleMonths: cycleMonths,
        ...extras,
      },
      { merge: true },
    );
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Webhook no configurado correctamente." },
      { status: 400 },
    );
  }

  try {
    const rawBody = await request.text();
    const stripe = getStripeServerClient();
    const event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const uid = session.metadata?.uid;
      const planId = parsePaidPlanId(session.metadata?.plan);
      const cycle = parseBillingCycle(session.metadata?.cycle) ?? 1;

      if (uid && planId) {
        await activateUserPlan(uid, planId, cycle, {
          stripeCheckoutSessionId: session.id,
          stripeCustomerId: session.customer ?? null,
        });
      }
    }

    if (event.type === "invoice.paid") {
      const invoice = event.data.object as Stripe.Invoice;
      const subscriptionRef = (invoice as Stripe.Invoice & { subscription?: string | Stripe.Subscription | null })
        .subscription;
      const subscriptionId =
        typeof subscriptionRef === "string" ? subscriptionRef : subscriptionRef?.id;

      if (subscriptionId) {
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const uid = subscription.metadata?.uid;
        const planId = parsePaidPlanId(subscription.metadata?.plan);
        const cycle = parseBillingCycle(subscription.metadata?.cycle) ?? 1;

        if (uid && planId) {
          await activateUserPlan(uid, planId, cycle, {
            stripeSubscriptionId: subscription.id,
          });
        }
      }
    }

    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as Stripe.Subscription;
      const uid = subscription.metadata?.uid;

      if (uid) {
        await getFirebaseAdminDb().collection("users").doc(uid).set(
          {
            plan: "FREE",
            planExpiresAt: null,
            planStartedAt: null,
            lastPaymentStatus: "cancelled",
          },
          { merge: true },
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error procesando webhook de Stripe.", error);
    return NextResponse.json({ error: "Webhook inválido." }, { status: 400 });
  }
}

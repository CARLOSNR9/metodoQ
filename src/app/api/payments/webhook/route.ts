import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { getStripeServerClient } from "@/lib/server/stripe";

export const runtime = "nodejs";

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
      const plan = session.metadata?.plan === "PRO+" ? "PRO_PLUS" : "PRO";

      if (uid) {
        await getFirebaseAdminDb().collection("users").doc(uid).set(
          {
            plan,
            planActivatedAt: FieldValue.serverTimestamp(),
            lastPaymentStatus: "paid",
            lastPaymentProvider: "stripe",
            stripeCheckoutSessionId: session.id,
          },
          { merge: true },
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error procesando webhook de Stripe.", error);
    return NextResponse.json({ error: "Webhook invalido." }, { status: 400 });
  }
}

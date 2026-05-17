import { NextResponse } from "next/server";
import { getSafeCheckoutErrorMessage } from "@/lib/server/checkout-errors";
import { getFirebaseAdminAuth } from "@/lib/server/firebase-admin";
import { getStripeServerClient } from "@/lib/server/stripe";
import {
  getCheckoutMode,
  getStripePriceEnvKey,
  getStripePriceId,
  parseBillingCycle,
  parsePaidPlanId,
} from "@/lib/plans/config";

export const runtime = "nodejs";

function getBearerToken(request: Request) {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    return null;
  }
  return header.slice(7);
}

export async function POST(request: Request) {
  try {
    const token = getBearerToken(request);
    if (!token) {
      return NextResponse.json({ error: "No autorizado." }, { status: 401 });
    }

    const decodedToken = await getFirebaseAdminAuth().verifyIdToken(token);
    const body = (await request.json()) as { plan?: string; cycle?: number };
    const planId = parsePaidPlanId(body.plan);
    const cycle = parseBillingCycle(String(body.cycle ?? ""));

    if (!planId) {
      return NextResponse.json(
        { error: "Plan no válido. Usa BASICO o PRO." },
        { status: 400 },
      );
    }

    if (!cycle) {
      return NextResponse.json(
        { error: "Ciclo de facturación no válido. Usa 1, 3 o 6." },
        { status: 400 },
      );
    }

    const priceId = getStripePriceId(planId, cycle);
    if (!priceId) {
      return NextResponse.json(
        {
          error: `Falta configurar ${getStripePriceEnvKey(planId, cycle)} en variables de entorno.`,
        },
        { status: 500 },
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const stripe = getStripeServerClient();
    const mode = getCheckoutMode(cycle);

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${baseUrl}/success?plan=${planId}&cycle=${cycle}`,
      cancel_url: `${baseUrl}/checkout?plan=${planId.toLowerCase()}&cycle=${cycle}`,
      customer_email: decodedToken.email ?? undefined,
      metadata: {
        uid: decodedToken.uid,
        plan: planId,
        cycle: String(cycle),
      },
      ...(mode === "subscription"
        ? {
            subscription_data: {
              metadata: {
                uid: decodedToken.uid,
                plan: planId,
                cycle: String(cycle),
              },
            },
          }
        : {}),
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "No se pudo crear la sesión de checkout." },
        { status: 500 },
      );
    }

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error("Error creando checkout session.", error);
    const message = getSafeCheckoutErrorMessage(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

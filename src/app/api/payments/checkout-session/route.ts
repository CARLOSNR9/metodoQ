import { NextResponse } from "next/server";
import { getFirebaseAdminAuth } from "@/lib/server/firebase-admin";
import { getStripeServerClient } from "@/lib/server/stripe";

export const runtime = "nodejs";

type CheckoutPlan = "PRO" | "PRO+";

function getBearerToken(request: Request) {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    return null;
  }

  return header.slice(7);
}

function getPriceIdForPlan(plan: CheckoutPlan) {
  if (plan === "PRO+") {
    return process.env.STRIPE_PRICE_ID_PRO_PLUS;
  }

  return process.env.STRIPE_PRICE_ID_PRO;
}

export async function POST(request: Request) {
  try {
    const token = getBearerToken(request);
    if (!token) {
      return NextResponse.json({ error: "No autorizado." }, { status: 401 });
    }

    const decodedToken = await getFirebaseAdminAuth().verifyIdToken(token);
    const body = (await request.json()) as { plan?: CheckoutPlan };
    const plan = body.plan === "PRO+" ? "PRO+" : "PRO";
    const priceId = getPriceIdForPlan(plan);

    if (!priceId) {
      return NextResponse.json(
        { error: "Falta configurar el priceId del plan seleccionado." },
        { status: 500 },
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const stripe = getStripeServerClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/success?plan=${encodeURIComponent(plan)}`,
      cancel_url: `${baseUrl}/checkout?plan=${encodeURIComponent(plan)}`,
      metadata: {
        uid: decodedToken.uid,
        plan,
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "No se pudo crear la sesion de checkout." },
        { status: 500 },
      );
    }

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error("Error creando checkout session.", error);
    return NextResponse.json(
      { error: "No se pudo iniciar el proceso de pago." },
      { status: 500 },
    );
  }
}

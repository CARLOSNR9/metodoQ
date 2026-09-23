import { NextResponse } from "next/server";
import { getSafeCheckoutErrorMessage } from "@/lib/server/checkout-errors";
import { getFirebaseAdminAuth } from "@/lib/server/firebase-admin";
import { getStripeServerClient } from "@/lib/server/stripe";
import { MIR_PRODUCT_CODE, getMirStripePriceId } from "@/lib/mir/config";

export const runtime = "nodejs";

function getBearerToken(request: Request) {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    return null;
  }
  return header.slice(7);
}

/** Checkout dedicado del módulo MIR: pago único, independiente de los planes mensuales. */
export async function POST(request: Request) {
  try {
    const token = getBearerToken(request);
    if (!token) {
      return NextResponse.json({ error: "No autorizado." }, { status: 401 });
    }

    const decodedToken = await getFirebaseAdminAuth().verifyIdToken(token);

    const priceId = getMirStripePriceId();
    if (!priceId) {
      return NextResponse.json(
        { error: "Falta configurar STRIPE_PRICE_MIR en variables de entorno." },
        { status: 500 },
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const stripe = getStripeServerClient();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${baseUrl}/success?product=mir`,
      cancel_url: `${baseUrl}/mir`,
      customer_email: decodedToken.email ?? undefined,
      metadata: {
        uid: decodedToken.uid,
        product: MIR_PRODUCT_CODE,
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "No se pudo crear la sesión de checkout." },
        { status: 500 },
      );
    }

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error("Error creando checkout session de MIR.", error);
    const message = getSafeCheckoutErrorMessage(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

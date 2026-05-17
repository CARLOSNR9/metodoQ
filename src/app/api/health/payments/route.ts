import { NextResponse } from "next/server";
import { getStripePriceEnvKey, type BillingCycle, type PaidPlanId } from "@/lib/plans/config";

export const runtime = "nodejs";

const PAID_PLANS: PaidPlanId[] = ["BASICO", "PRO"];
const CYCLES: BillingCycle[] = [1, 3, 6];

function isAuthorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return false;
  }
  const header = request.headers.get("authorization");
  return header === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const prices: Record<string, boolean> = {};
  for (const planId of PAID_PLANS) {
    for (const cycle of CYCLES) {
      const key = getStripePriceEnvKey(planId, cycle);
      prices[key] = Boolean(process.env[key]);
    }
  }

  const firebaseAdmin =
    Boolean(process.env.FIREBASE_ADMIN_PROJECT_ID) &&
    Boolean(process.env.FIREBASE_ADMIN_CLIENT_EMAIL) &&
    Boolean(process.env.FIREBASE_ADMIN_PRIVATE_KEY);

  const checks = {
    stripeSecretKey: Boolean(process.env.STRIPE_SECRET_KEY),
    stripeWebhookSecret: Boolean(process.env.STRIPE_WEBHOOK_SECRET),
    firebaseAdmin,
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? null,
    prices,
  };

  const ok =
    checks.stripeSecretKey &&
    checks.firebaseAdmin &&
    Boolean(checks.appUrl) &&
    Object.values(prices).every(Boolean);

  return NextResponse.json({ ok, checks });
}

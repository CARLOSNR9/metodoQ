import { NextResponse } from "next/server";
import { getFirebaseAdminAuth } from "@/lib/server/firebase-admin";
import { recordReferral } from "@/lib/server/referrals";

export const runtime = "nodejs";

/**
 * Registra en servidor que el usuario autenticado (recién registrado) llegó
 * con un código de referido y, si el referente alcanza los referidos
 * necesarios, le otorga la recompensa una sola vez. Solo el servidor (Admin
 * SDK) puede modificar el campo `plan`. Ver src/lib/server/referrals.ts.
 */
export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let uid: string;
  try {
    uid = (await getFirebaseAdminAuth().verifyIdToken(authHeader.slice(7), true)).uid;
  } catch {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as { referralCode?: unknown } | null;

  try {
    const outcome = await recordReferral(uid, body?.referralCode);
    switch (outcome.status) {
      case "invalid_code":
        return NextResponse.json({ error: "Código de referido no válido." }, { status: 400 });
      case "not_eligible":
        return NextResponse.json({ recorded: false, reason: outcome.reason });
      case "already_recorded":
        return NextResponse.json({ recorded: true, rewarded: false });
      case "recorded":
        return NextResponse.json({ recorded: true, rewarded: outcome.rewarded });
    }
  } catch (error) {
    console.error("[referral-reward] Error:", error);
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}

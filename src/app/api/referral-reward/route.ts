import { NextResponse } from "next/server";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

/**
 * Procesa la recompensa de referido en el servidor.
 * Si el referente alcanza 3 referidos, se le otorgan 7 días de PRO.
 * Solo el servidor (Admin SDK) puede modificar el campo `plan`.
 */
export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  try {
    const token = authHeader.slice(7);
    await getFirebaseAdminAuth().verifyIdToken(token);

    const body = (await request.json()) as { referralCode?: string };
    const referralCode = body.referralCode?.trim();

    if (!referralCode) {
      return NextResponse.json({ error: "Código de referido requerido." }, { status: 400 });
    }

    const db = getFirebaseAdminDb();

    // Contar cuántos referidos tiene ahora el referente
    const referralSnapshot = await db
      .collection("users")
      .where("referredBy", "==", referralCode)
      .count()
      .get();
    const count = referralSnapshot.data().count;

    // Si llegó exactamente a 3, darle 7 días de PRO
    if (count === 3) {
      const referrerSnapshot = await db
        .collection("users")
        .where("referralCode", "==", referralCode)
        .limit(1)
        .get();

      if (!referrerSnapshot.empty) {
        const referrerDoc = referrerSnapshot.docs[0];
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        await referrerDoc.ref.update({
          plan: "PRO",
          planExpiresAt: expirationDate.toISOString(),
        });

        return NextResponse.json({
          rewarded: true,
          referrerId: referrerDoc.id,
        });
      }
    }

    return NextResponse.json({ rewarded: false, count });
  } catch (error) {
    console.error("[referral-reward] Error:", error);
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}

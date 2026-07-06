import { NextResponse } from "next/server";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

/**
 * Expira el plan de un usuario si su planExpiresAt ya pasó.
 * Solo el servidor (Admin SDK) puede modificar los campos `plan`, `planStartedAt`, `planExpiresAt`.
 */
export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  try {
    const token = authHeader.slice(7);
    const decodedToken = await getFirebaseAdminAuth().verifyIdToken(token);
    const uid = decodedToken.uid;

    const db = getFirebaseAdminDb();
    const userRef = db.collection("users").doc(uid);
    const userSnap = await userRef.get();

    if (!userSnap.exists) {
      return NextResponse.json({ error: "Usuario no encontrado." }, { status: 404 });
    }

    const data = userSnap.data()!;
    const plan = data.plan;
    const expiresAt = data.planExpiresAt;

    // Solo expirar si tiene plan de pago y fecha de expiración pasada
    if (!expiresAt || plan === "FREE") {
      return NextResponse.json({ expired: false, plan: plan ?? "FREE" });
    }

    if (new Date(expiresAt) < new Date()) {
      await userRef.update({
        plan: "FREE",
        planStartedAt: null,
        planExpiresAt: null,
      });
      return NextResponse.json({ expired: true, plan: "FREE" });
    }

    return NextResponse.json({ expired: false, plan });
  } catch (error) {
    console.error("[expire-plan] Error:", error);
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { getFirebaseAdminAuth } from "@/lib/server/firebase-admin";
import { sendWelcomeEmail } from "@/lib/server/email/send";

export const runtime = "nodejs";

function getBearerToken(request: Request) {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) return null;
  return header.slice(7);
}

export async function POST(request: Request) {
  const token = getBearerToken(request);
  if (!token) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  try {
    const decoded = await getFirebaseAdminAuth().verifyIdToken(token);
    const email = decoded.email;
    if (!email) {
      return NextResponse.json({ error: "Sin email en la cuenta." }, { status: 400 });
    }

    const body = (await request.json().catch(() => ({}))) as { displayName?: string };
    const result = await sendWelcomeEmail(email, body.displayName ?? decoded.name);

    if (!result.ok) {
      if ("skipped" in result && result.skipped) {
        return NextResponse.json({ ok: true, skipped: true });
      }
      const err = "error" in result ? result.error : "No enviado.";
      return NextResponse.json({ error: err ?? "No enviado." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, skipped: false });
  } catch (error) {
    console.error("welcome email", error);
    return NextResponse.json({ error: "Token inválido." }, { status: 401 });
  }
}

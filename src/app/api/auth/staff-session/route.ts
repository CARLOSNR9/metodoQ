import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import {
  STAFF_SESSION_COOKIE,
  STAFF_SESSION_MAX_AGE_SECONDS,
  verifyStaffSessionCookie,
} from "@/lib/server/staff-session";
import { isStaffUser } from "@/lib/roles";

export const runtime = "nodejs";

/**
 * Crea (POST) o borra (DELETE) la cookie de sesión de staff que usan las
 * páginas de /admin, /profesor y /moderador para renderizar datos en servidor.
 * Solo se emite a cuentas de staff, a partir de un ID token verificado.
 */

/** Solo peticiones del propio sitio: evita que otra web fije una sesión en el navegador. */
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

async function clearStaffSessionCookie() {
  (await cookies()).delete(STAFF_SESSION_COOKIE);
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Origen no permitido." }, { status: 403 });
  }

  const body = (await request.json().catch(() => null)) as { idToken?: unknown } | null;
  const idToken = typeof body?.idToken === "string" ? body.idToken : "";
  if (!idToken) {
    return NextResponse.json({ error: "Sesión no válida." }, { status: 401 });
  }

  let uid: string;
  try {
    const decoded = await getFirebaseAdminAuth().verifyIdToken(idToken, true);
    uid = decoded.uid;
    const snap = await getFirebaseAdminDb().collection("users").doc(uid).get();
    if (!isStaffUser(snap.data()?.role as string | undefined, decoded.email ?? null)) {
      await clearStaffSessionCookie();
      return NextResponse.json({ error: "No tienes acceso al panel." }, { status: 403 });
    }
  } catch {
    await clearStaffSessionCookie();
    return NextResponse.json({ error: "Sesión no válida." }, { status: 401 });
  }

  const cookieStore = await cookies();
  const current = await verifyStaffSessionCookie(cookieStore.get(STAFF_SESSION_COOKIE)?.value);
  if (current?.uid === uid) {
    return NextResponse.json({ ok: true, created: false });
  }

  try {
    const sessionCookie = await getFirebaseAdminAuth().createSessionCookie(idToken, {
      expiresIn: STAFF_SESSION_MAX_AGE_SECONDS * 1000,
    });
    cookieStore.set(STAFF_SESSION_COOKIE, sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: STAFF_SESSION_MAX_AGE_SECONDS,
    });
    return NextResponse.json({ ok: true, created: true });
  } catch (error) {
    console.error("[staff-session] No se pudo crear la sesión:", error);
    return NextResponse.json({ error: "No se pudo iniciar la sesión." }, { status: 500 });
  }
}

export async function DELETE() {
  await clearStaffSessionCookie();
  return NextResponse.json({ ok: true });
}

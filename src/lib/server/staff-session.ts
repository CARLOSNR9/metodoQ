import { cache } from "react";
import { cookies } from "next/headers";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { normalizeUserRole, type UserRole } from "@/lib/roles";
import { canAccessStaffArea, type StaffArea } from "@/lib/staff-access";

/**
 * Sesión de staff en servidor para las páginas de /admin, /profesor y
 * /moderador, que renderizan datos con el Admin SDK.
 *
 * Los guards de cliente solo deciden la interfaz: el HTML/RSC de una página
 * viaja al navegador aunque el guard lo oculte. Por eso cada página (y cada
 * componente de servidor que carga datos) llama a `requireStaffArea` antes de
 * leer nada, y no renderiza datos si no hay una sesión de staff válida.
 *
 * La cookie es una cookie de sesión de Firebase (httpOnly), creada por
 * /api/auth/staff-session a partir de un ID token verificado. El role se lee
 * de Firestore en cada petición, así que un cambio de rol surte efecto al
 * momento.
 */
export const STAFF_SESSION_COOKIE = "mq_staff_session";
/** Duración de la cookie de sesión de staff (Firebase admite de 5 min a 14 días). */
export const STAFF_SESSION_MAX_AGE_SECONDS = 8 * 60 * 60;

export type StaffSession = {
  uid: string;
  email: string | null;
  role: UserRole;
};

/** Verifica una cookie de sesión de Firebase y lee el role del uid. */
export async function verifyStaffSessionCookie(
  sessionCookie: string | null | undefined,
): Promise<StaffSession | null> {
  if (!sessionCookie) return null;
  try {
    // checkRevoked: rechaza sesiones de cuentas desactivadas o revocadas.
    const decoded = await getFirebaseAdminAuth().verifySessionCookie(sessionCookie, true);
    const snap = await getFirebaseAdminDb().collection("users").doc(decoded.uid).get();
    return {
      uid: decoded.uid,
      email: decoded.email ?? null,
      role: normalizeUserRole(snap.data()?.role as string | undefined),
    };
  } catch {
    return null;
  }
}

/** Sesión de la petición actual (se calcula una vez por petición). */
export const getStaffSession = cache(async (): Promise<StaffSession | null> => {
  const cookieStore = await cookies();
  return verifyStaffSessionCookie(cookieStore.get(STAFF_SESSION_COOKIE)?.value);
});

/**
 * Devuelve la sesión si puede acceder al área; si no, `null` y la página no
 * debe renderizar datos. Llamar antes de cualquier lectura con el Admin SDK.
 */
export async function requireStaffArea(area: StaffArea): Promise<StaffSession | null> {
  const session = await getStaffSession();
  if (!session || !canAccessStaffArea(area, session.role, session.email)) {
    return null;
  }
  return session;
}

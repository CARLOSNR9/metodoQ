import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import {
  canManageResidenteApplications,
  isAdminUser,
  normalizeUserRole,
  type UserRole,
} from "@/lib/roles";

export async function verifyStaffCaller(idToken: string | null | undefined) {
  if (!idToken) {
    return { ok: false as const, error: "Sesión no válida. Vuelve a iniciar sesión." };
  }

  try {
    const decoded = await getFirebaseAdminAuth().verifyIdToken(idToken);
    const db = getFirebaseAdminDb();
    const snap = await db.collection("users").doc(decoded.uid).get();
    const role = normalizeUserRole(snap.data()?.role as string | undefined);
    const email = decoded.email ?? null;

    return {
      ok: true as const,
      uid: decoded.uid,
      email,
      role,
      isAdmin: isAdminUser(role, email),
      canManageResidente: canManageResidenteApplications(role, email),
    };
  } catch {
    return { ok: false as const, error: "Token inválido o expirado." };
  }
}

export function canAssignRole(
  callerIsAdmin: boolean,
  targetRole: UserRole,
): boolean {
  if ((targetRole === "admin" || targetRole === "moderator") && !callerIsAdmin) {
    return false;
  }
  return true;
}

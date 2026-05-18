import type { Firestore } from "firebase-admin/firestore";
import type { Auth } from "firebase-admin/auth";

const BATCH_SIZE = 500;

export type UserCascadeDeleteSummary = {
  manualSales: number;
  results: number;
  notifications: number;
  analyticsEvents: number;
  residenteApplications: number;
};

async function deleteWhereEquals(
  db: Firestore,
  collectionName: string,
  field: string,
  value: string,
): Promise<number> {
  let deleted = 0;

  while (true) {
    const snap = await db
      .collection(collectionName)
      .where(field, "==", value)
      .limit(BATCH_SIZE)
      .get();

    if (snap.empty) {
      break;
    }

    const batch = db.batch();
    snap.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
    deleted += snap.size;

    if (snap.size < BATCH_SIZE) {
      break;
    }
  }

  return deleted;
}

/** Elimina todos los documentos de Firestore asociados a un usuario (excepto users/{uid}). */
export async function deleteUserFirestoreData(
  db: Firestore,
  userId: string,
  email?: string | null,
): Promise<UserCascadeDeleteSummary> {
  const trimmedEmail = email?.trim();

  const [
    manualSales,
    results,
    notifications,
    analyticsEvents,
    residenteByUserId,
    residenteByEmail,
  ] = await Promise.all([
    deleteWhereEquals(db, "manual_sales", "userId", userId),
    deleteWhereEquals(db, "results", "userId", userId),
    deleteWhereEquals(db, "notifications", "userId", userId),
    deleteWhereEquals(db, "analytics_events", "userId", userId),
    deleteWhereEquals(db, "residente_applications", "userId", userId),
    trimmedEmail
      ? deleteWhereEquals(db, "residente_applications", "email", trimmedEmail)
      : Promise.resolve(0),
  ]);

  return {
    manualSales,
    results,
    notifications,
    analyticsEvents,
    residenteApplications: residenteByUserId + residenteByEmail,
  };
}

/** Elimina la cuenta en Firebase Authentication por UID o, si falla, por correo. */
export async function deleteFirebaseAuthUser(
  auth: Auth,
  userId: string,
  email?: string | null,
): Promise<void> {
  try {
    await auth.deleteUser(userId);
    return;
  } catch (error) {
    const code = (error as { code?: string }).code;
    if (code !== "auth/user-not-found" || !email?.trim()) {
      throw error;
    }
  }

  const record = await auth.getUserByEmail(email.trim());
  await auth.deleteUser(record.uid);
}

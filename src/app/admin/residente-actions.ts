"use server";

import { revalidatePath } from "next/cache";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { verifyStaffCaller } from "@/lib/server/verify-staff";

const VALID_STATUSES = ["pending", "contacted", "approved", "rejected"] as const;

export type ResidenteApplicationStatus = (typeof VALID_STATUSES)[number];

export async function updateResidenteApplicationStatusAction(
  applicationId: string,
  status: ResidenteApplicationStatus,
  idToken: string | null | undefined,
) {
  const caller = await verifyStaffCaller(idToken);

  if (!caller.ok) {
    return { error: caller.error };
  }

  if (!caller.canManageResidente) {
    return { error: "No tienes permiso para gestionar postulaciones." };
  }

  if (!VALID_STATUSES.includes(status)) {
    return { error: "Estado no válido." };
  }

  try {
    await getFirebaseAdminDb()
      .collection("residente_applications")
      .doc(applicationId)
      .set({ status, updatedAt: new Date().toISOString() }, { merge: true });

    revalidatePath("/admin");
    revalidatePath("/moderador");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo actualizar el estado." };
  }
}

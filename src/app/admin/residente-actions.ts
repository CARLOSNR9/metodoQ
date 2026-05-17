"use server";

import { revalidatePath } from "next/cache";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

const VALID_STATUSES = ["pending", "contacted", "approved", "rejected"] as const;

export type ResidenteApplicationStatus = (typeof VALID_STATUSES)[number];

export async function updateResidenteApplicationStatusAction(
  applicationId: string,
  status: ResidenteApplicationStatus,
) {
  if (!VALID_STATUSES.includes(status)) {
    return { error: "Estado no válido." };
  }

  try {
    await getFirebaseAdminDb()
      .collection("residente_applications")
      .doc(applicationId)
      .set({ status, updatedAt: new Date().toISOString() }, { merge: true });

    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo actualizar el estado." };
  }
}

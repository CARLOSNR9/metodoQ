"use server";

import { revalidatePath } from "next/cache";
import {
  adminCreateClass,
  adminDeleteClass,
} from "@/lib/server/classes-admin";

export async function createClassAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const date = String(formData.get("date") ?? "");
  const time = String(formData.get("time") ?? "");
  const duration = Number(formData.get("duration") ?? 60);
  const meetingLink = String(formData.get("meetingLink") ?? "").trim();
  const recordingLink = String(formData.get("recordingLink") ?? "").trim();

  if (!title || !description || !date || !time || !meetingLink) {
    return { error: "Completa todos los campos obligatorios." };
  }

  if (!Number.isFinite(duration) || duration < 15) {
    return { error: "La duración mínima es 15 minutos." };
  }

  try {
    await adminCreateClass({
      title,
      description,
      dateIso: `${date}T${time}`,
      durationMinutes: duration,
      meetingLink,
      recordingLink: recordingLink || undefined,
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo crear la clase." };
  }
}

export async function deleteClassAction(classId: string) {
  if (!classId) return { error: "ID inválido." };

  try {
    await adminDeleteClass(classId);
    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo eliminar la clase." };
  }
}

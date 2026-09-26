"use server";

import { revalidatePath } from "next/cache";
import {
  adminCreateClass,
  adminDeleteClass,
} from "@/lib/server/classes-admin";
import { professorGetCourse } from "@/lib/server/courses-admin";
import { canManageCourses } from "@/lib/roles";
import { verifyStaffCaller } from "@/lib/server/verify-staff";

const CLASS_PATHS = ["/admin", "/profesor", "/profesor/clases", "/profesor/asistencia", "/dashboard"] as const;

function revalidateClassPaths() {
  for (const path of CLASS_PATHS) {
    revalidatePath(path);
  }
}

/** Solo profesores y admins pueden crear o eliminar clases (verificado en servidor). */
async function requireCourseManager(idToken: string | null | undefined) {
  const caller = await verifyStaffCaller(idToken);
  if (!caller.ok) {
    return { ok: false as const, error: caller.error };
  }
  if (!canManageCourses(caller.role, caller.email)) {
    return { ok: false as const, error: "No tienes permiso para gestionar clases." };
  }
  return { ok: true as const, uid: caller.uid };
}

export async function createClassAction(formData: FormData) {
  const idToken = String(formData.get("idToken") ?? "").trim() || null;
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) {
    return { error: auth.error };
  }

  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const date = String(formData.get("date") ?? "");
  const time = String(formData.get("time") ?? "");
  const duration = Number(formData.get("duration") ?? 60);
  const meetingLink = String(formData.get("meetingLink") ?? "").trim();
  const recordingLink = String(formData.get("recordingLink") ?? "").trim();
  const courseId = String(formData.get("courseId") ?? "").trim();
  const visibilityRaw = String(formData.get("visibility") ?? "").trim();

  if (!title || !description || !date || !time || !meetingLink) {
    return { error: "Completa todos los campos obligatorios." };
  }

  if (!Number.isFinite(duration) || duration < 15) {
    return { error: "La duración mínima es 15 minutos." };
  }

  let professorId: string | undefined;
  let courseName: string | undefined;
  let visibility: "all_pro" | "course" = "all_pro";
  let resolvedCourseId: string | null = null;

  if (courseId) {
    const course = await professorGetCourse(courseId, auth.uid);
    if (!course) {
      return { error: "Grupo no encontrado o no te pertenece." };
    }

    professorId = auth.uid;
    resolvedCourseId = courseId;
    courseName = course.name;
    visibility = "course";
  } else if (visibilityRaw === "all_pro") {
    visibility = "all_pro";
  }

  try {
    await adminCreateClass({
      title,
      description,
      dateIso: `${date}T${time}`,
      durationMinutes: duration,
      meetingLink,
      recordingLink: recordingLink || undefined,
      professorId,
      courseId: resolvedCourseId,
      courseName,
      visibility,
    });
    revalidateClassPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo crear la clase." };
  }
}

export async function deleteClassAction(classId: string, idToken: string | null | undefined) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) {
    return { error: auth.error };
  }
  if (!classId) return { error: "ID inválido." };

  try {
    await adminDeleteClass(classId);
    revalidateClassPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo eliminar la clase." };
  }
}


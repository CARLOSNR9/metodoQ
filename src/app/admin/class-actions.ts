"use server";

import { revalidatePath } from "next/cache";
import {
  adminCreateClass,
  adminDeleteClass,
} from "@/lib/server/classes-admin";
import { professorGetCourse } from "@/lib/server/courses-admin";
import { canManageCourses } from "@/lib/roles";
import { verifyStaffCaller } from "@/lib/server/verify-staff";

const CLASS_PATHS = ["/admin", "/profesor", "/profesor/clases", "/dashboard"] as const;

function revalidateClassPaths() {
  for (const path of CLASS_PATHS) {
    revalidatePath(path);
  }
}

export async function createClassAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const date = String(formData.get("date") ?? "");
  const time = String(formData.get("time") ?? "");
  const duration = Number(formData.get("duration") ?? 60);
  const meetingLink = String(formData.get("meetingLink") ?? "").trim();
  const recordingLink = String(formData.get("recordingLink") ?? "").trim();
  const courseId = String(formData.get("courseId") ?? "").trim();
  const visibilityRaw = String(formData.get("visibility") ?? "").trim();
  const idToken = String(formData.get("idToken") ?? "").trim() || null;

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
    if (!idToken) {
      return { error: "Sesión requerida para vincular la clase a un grupo." };
    }

    const caller = await verifyStaffCaller(idToken);
    if (!caller.ok || !canManageCourses(caller.role, caller.email)) {
      return { error: "No tienes permiso para programar clases por grupo." };
    }

    const course = await professorGetCourse(courseId, caller.uid);
    if (!course) {
      return { error: "Grupo no encontrado o no te pertenece." };
    }

    professorId = caller.uid;
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

export async function deleteClassAction(classId: string) {
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


"use server";

import { revalidatePath } from "next/cache";
import { canManageCourses } from "@/lib/roles";
import type { AttendanceStatus } from "@/lib/attendance/types";
import {
  getClassAttendanceSheet,
  getClassAttendanceStats,
  getProfessorAttendanceSummary,
  saveClassAttendanceRecords,
} from "@/lib/server/attendance-admin";
import { verifyStaffCaller } from "@/lib/server/verify-staff";

const PROFESSOR_PATHS = [
  "/profesor",
  "/profesor/clases",
  "/profesor/asistencia",
] as const;

function revalidateAttendancePaths(classId?: string) {
  for (const path of PROFESSOR_PATHS) {
    revalidatePath(path);
  }
  if (classId) {
    revalidatePath(`/profesor/clases/${classId}/asistencia`);
  }
}

async function requireCourseManager(idToken: string | null) {
  const caller = await verifyStaffCaller(idToken);
  if (!caller.ok) {
    return { ok: false as const, error: caller.error };
  }
  if (!canManageCourses(caller.role, caller.email)) {
    return { ok: false as const, error: "No tienes permiso para gestionar asistencia." };
  }
  return { ok: true as const, uid: caller.uid };
}

export async function getClassAttendanceSheetAction(idToken: string | null, classId: string) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error, sheet: null };

  if (!classId) return { error: "Clase inválida.", sheet: null };

  try {
    const sheet = await getClassAttendanceSheet(classId, auth.uid);
    if (!sheet) {
      return { error: "Clase no encontrada o sin permiso.", sheet: null };
    }
    return { sheet };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo cargar la lista de asistencia.", sheet: null };
  }
}

export async function saveClassAttendanceAction(
  idToken: string | null,
  classId: string,
  entries: { studentId: string; status: AttendanceStatus }[],
) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error };

  if (!classId || entries.length === 0) {
    return { error: "No hay registros para guardar." };
  }

  try {
    await saveClassAttendanceRecords(classId, auth.uid, entries);
    revalidateAttendancePaths(classId);
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: e instanceof Error ? e.message : "No se pudo guardar la asistencia." };
  }
}

export async function getProfessorAttendanceSummaryAction(idToken: string | null) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error, summary: [] };

  try {
    const summary = await getProfessorAttendanceSummary(auth.uid);
    return { summary };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo cargar el resumen de asistencia.", summary: [] };
  }
}

export async function getClassAttendanceStatsAction(idToken: string | null, classId: string) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error, stats: null };

  try {
    const stats = await getClassAttendanceStats(classId);
    return { stats };
  } catch {
    return { stats: { present: 0, absent: 0, total: 0 } };
  }
}

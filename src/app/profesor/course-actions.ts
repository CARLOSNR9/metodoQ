"use server";

import { revalidatePath } from "next/cache";
import { canManageCourses } from "@/lib/roles";
import {
  professorCreateCourse,
  professorDeleteCourse,
  professorEnrollStudent,
  professorListCourses,
  professorUnenrollStudent,
} from "@/lib/server/courses-admin";
import { verifyStaffCaller } from "@/lib/server/verify-staff";

const PROFESSOR_PATHS = [
  "/profesor",
  "/profesor/cursos",
  "/profesor/alumnos",
  "/profesor/clases",
] as const;

function revalidateProfessorPaths() {
  for (const path of PROFESSOR_PATHS) {
    revalidatePath(path);
  }
}

async function requireCourseManager(idToken: string | null) {
  const caller = await verifyStaffCaller(idToken);
  if (!caller.ok) {
    return { ok: false as const, error: caller.error };
  }
  if (!canManageCourses(caller.role, caller.email)) {
    return { ok: false as const, error: "No tienes permiso para gestionar cursos." };
  }
  return { ok: true as const, uid: caller.uid };
}

export async function listProfessorCoursesAction(idToken: string | null) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error, courses: [] };

  try {
    const courses = await professorListCourses(auth.uid);
    return { courses };
  } catch (e) {
    console.error(e);
    return { error: "No se pudieron cargar los cursos.", courses: [] };
  }
}

export async function createCourseAction(idToken: string | null, formData: FormData) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error };

  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  if (!name) {
    return { error: "El nombre del curso es obligatorio." };
  }

  try {
    await professorCreateCourse(auth.uid, { name, description });
    revalidateProfessorPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo crear el curso." };
  }
}

export async function enrollStudentAction(
  idToken: string | null,
  courseId: string,
  studentId: string,
) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error };

  if (!courseId || !studentId) {
    return { error: "Datos incompletos." };
  }

  try {
    await professorEnrollStudent(courseId, auth.uid, studentId);
    revalidateProfessorPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo matricular al alumno." };
  }
}

export async function unenrollStudentAction(
  idToken: string | null,
  courseId: string,
  studentId: string,
) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error };

  if (!courseId || !studentId) {
    return { error: "Datos incompletos." };
  }

  try {
    await professorUnenrollStudent(courseId, auth.uid, studentId);
    revalidateProfessorPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo quitar al alumno del curso." };
  }
}

export async function deleteCourseAction(idToken: string | null, courseId: string) {
  const auth = await requireCourseManager(idToken);
  if (!auth.ok) return { error: auth.error };

  if (!courseId) {
    return { error: "Curso inválido." };
  }

  try {
    await professorDeleteCourse(courseId, auth.uid);
    revalidateProfessorPaths();
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo eliminar el curso." };
  }
}

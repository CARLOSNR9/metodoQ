import { FieldValue, type DocumentData } from "firebase-admin/firestore";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import type { CourseInput, CourseRecord } from "@/lib/courses/types";

const COLLECTION = "courses";

function mapCourseDoc(id: string, data: DocumentData): CourseRecord {
  const created = data.createdAt;
  let createdAt: string | null = null;
  if (typeof created === "string") {
    createdAt = created;
  } else if (created?.toDate) {
    createdAt = created.toDate().toISOString();
  }

  return {
    id,
    name: String(data.name ?? ""),
    description: String(data.description ?? ""),
    professorId: String(data.professorId ?? ""),
    studentIds: Array.isArray(data.studentIds)
      ? data.studentIds.map(String)
      : [],
    isActive: data.isActive !== false,
    createdAt,
  };
}

export async function professorListCourses(professorId: string): Promise<CourseRecord[]> {
  const snap = await getFirebaseAdminDb()
    .collection(COLLECTION)
    .where("professorId", "==", professorId)
    .orderBy("createdAt", "desc")
    .limit(50)
    .get();

  return snap.docs.map((doc) => mapCourseDoc(doc.id, doc.data()));
}

export async function professorGetCourse(
  courseId: string,
  professorId: string,
): Promise<CourseRecord | null> {
  const doc = await getFirebaseAdminDb().collection(COLLECTION).doc(courseId).get();
  if (!doc.exists) return null;

  const course = mapCourseDoc(doc.id, doc.data()!);
  if (course.professorId !== professorId) return null;
  return course;
}

export async function professorCreateCourse(professorId: string, input: CourseInput) {
  const ref = await getFirebaseAdminDb().collection(COLLECTION).add({
    name: input.name.trim(),
    description: input.description.trim(),
    professorId,
    studentIds: [],
    isActive: true,
    createdAt: FieldValue.serverTimestamp(),
  });

  return ref.id;
}

export async function professorEnrollStudent(
  courseId: string,
  professorId: string,
  studentId: string,
) {
  const course = await professorGetCourse(courseId, professorId);
  if (!course) {
    throw new Error("Curso no encontrado.");
  }

  if (course.studentIds.includes(studentId)) {
    return;
  }

  await getFirebaseAdminDb()
    .collection(COLLECTION)
    .doc(courseId)
    .update({
      studentIds: FieldValue.arrayUnion(studentId),
    });
}

export async function professorUnenrollStudent(
  courseId: string,
  professorId: string,
  studentId: string,
) {
  const course = await professorGetCourse(courseId, professorId);
  if (!course) {
    throw new Error("Curso no encontrado.");
  }

  await getFirebaseAdminDb()
    .collection(COLLECTION)
    .doc(courseId)
    .update({
      studentIds: FieldValue.arrayRemove(studentId),
    });
}

export async function professorDeleteCourse(courseId: string, professorId: string) {
  const course = await professorGetCourse(courseId, professorId);
  if (!course) {
    throw new Error("Curso no encontrado.");
  }

  await getFirebaseAdminDb().collection(COLLECTION).doc(courseId).delete();
}

import { FieldValue, type DocumentData } from "firebase-admin/firestore";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { professorGetCourse } from "@/lib/server/courses-admin";
import type { AttendanceStatus, ClassAttendanceRecord, StudentAttendanceSummary } from "@/lib/attendance/types";
import type { ProfessorStudentRow } from "@/lib/server/professor-users";

const ATTENDANCE_COLLECTION = "class_attendance";
const CLASSES_COLLECTION = "classes";

export type ClassSessionForAttendance = {
  id: string;
  title: string;
  description: string;
  dateIso: string | null;
  duration: number;
  courseId: string | null;
  courseName: string | null;
  professorId: string | null;
  visibility: "all_pro" | "course";
};

function attendanceDocId(classId: string, studentId: string) {
  return `${classId}_${studentId}`;
}

function mapAttendanceDoc(id: string, data: DocumentData): ClassAttendanceRecord {
  const markedAt = data.markedAt;
  return {
    classId: String(data.classId ?? ""),
    studentId: String(data.studentId ?? ""),
    professorId: String(data.professorId ?? ""),
    courseId: data.courseId ? String(data.courseId) : null,
    status: data.status === "absent" ? "absent" : "present",
    classTitle: String(data.classTitle ?? ""),
    classDateIso: String(data.classDateIso ?? ""),
    markedAt:
      typeof markedAt === "string"
        ? markedAt
        : markedAt?.toDate?.()?.toISOString?.() ?? null,
  };
}

export async function getClassSessionForAttendance(
  classId: string,
): Promise<ClassSessionForAttendance | null> {
  const doc = await getFirebaseAdminDb().collection(CLASSES_COLLECTION).doc(classId).get();
  if (!doc.exists) return null;

  const data = doc.data()!;
  const date = data.date?.toDate?.() as Date | undefined;

  return {
    id: doc.id,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    dateIso: date ? date.toISOString() : null,
    duration: Number(data.duration ?? 60),
    courseId: data.courseId ? String(data.courseId) : null,
    courseName: data.courseName ? String(data.courseName) : null,
    professorId: data.professorId ? String(data.professorId) : null,
    visibility: data.visibility === "course" ? "course" : "all_pro",
  };
}

async function getStudentsByIds(studentIds: string[]): Promise<ProfessorStudentRow[]> {
  if (studentIds.length === 0) return [];

  const db = getFirebaseAdminDb();
  const chunks: string[][] = [];
  for (let i = 0; i < studentIds.length; i += 10) {
    chunks.push(studentIds.slice(i, i + 10));
  }

  const students: ProfessorStudentRow[] = [];
  for (const chunk of chunks) {
    const refs = chunk.map((id) => db.collection("users").doc(id));
    const snaps = await db.getAll(...refs);
    for (const snap of snaps) {
      if (!snap.exists) continue;
      const data = snap.data()!;
      students.push({
        uid: snap.id,
        email: String(data.email ?? ""),
        displayName: String(data.displayName ?? "—"),
        plan: String(data.plan ?? "FREE") as ProfessorStudentRow["plan"],
      });
    }
  }

  return students.sort((a, b) => a.displayName.localeCompare(b.displayName, "es"));
}

export async function professorCanManageClassAttendance(
  classSession: ClassSessionForAttendance,
  professorId: string,
): Promise<boolean> {
  if (classSession.professorId === professorId) {
    return true;
  }
  if (!classSession.courseId) {
    return false;
  }
  const course = await professorGetCourse(classSession.courseId, professorId);
  return Boolean(course);
}

export async function getClassAttendanceSheet(
  classId: string,
  professorId: string,
): Promise<{
  classSession: ClassSessionForAttendance;
  students: ProfessorStudentRow[];
  records: Record<string, AttendanceStatus>;
} | null> {
  const classSession = await getClassSessionForAttendance(classId);
  if (!classSession) return null;

  const allowed = await professorCanManageClassAttendance(classSession, professorId);
  if (!allowed) return null;

  if (!classSession.courseId) {
    return { classSession, students: [], records: {} };
  }

  const course = await professorGetCourse(classSession.courseId, professorId);
  if (!course) {
    return { classSession, students: [], records: {} };
  }

  const students = await getStudentsByIds(course.studentIds);
  const snap = await getFirebaseAdminDb()
    .collection(ATTENDANCE_COLLECTION)
    .where("classId", "==", classId)
    .get();

  const records: Record<string, AttendanceStatus> = {};
  for (const doc of snap.docs) {
    const record = mapAttendanceDoc(doc.id, doc.data());
    records[record.studentId] = record.status;
  }

  return { classSession, students, records };
}

export async function saveClassAttendanceRecords(
  classId: string,
  professorId: string,
  entries: { studentId: string; status: AttendanceStatus }[],
) {
  const classSession = await getClassSessionForAttendance(classId);
  if (!classSession) {
    throw new Error("Clase no encontrada.");
  }

  const allowed = await professorCanManageClassAttendance(classSession, professorId);
  if (!allowed) {
    throw new Error("No tienes permiso para registrar asistencia en esta clase.");
  }

  if (!classSession.courseId) {
    throw new Error("Solo puedes registrar asistencia en clases de un grupo.");
  }

  const course = await professorGetCourse(classSession.courseId, professorId);
  if (!course) {
    throw new Error("Grupo no encontrado.");
  }

  const allowedStudentIds = new Set(course.studentIds);
  const db = getFirebaseAdminDb();
  const batch = db.batch();

  for (const entry of entries) {
    if (!allowedStudentIds.has(entry.studentId)) continue;

    const ref = db.collection(ATTENDANCE_COLLECTION).doc(attendanceDocId(classId, entry.studentId));
    batch.set(ref, {
      classId,
      studentId: entry.studentId,
      professorId,
      courseId: classSession.courseId,
      status: entry.status,
      classTitle: classSession.title,
      classDateIso: classSession.dateIso,
      markedAt: FieldValue.serverTimestamp(),
    });
  }

  await batch.commit();
}

export async function getProfessorAttendanceSummary(
  professorId: string,
): Promise<StudentAttendanceSummary[]> {
  const snap = await getFirebaseAdminDb()
    .collection(ATTENDANCE_COLLECTION)
    .where("professorId", "==", professorId)
    .get();

  const byStudent = new Map<string, StudentAttendanceSummary>();

  for (const doc of snap.docs) {
    const record = mapAttendanceDoc(doc.id, doc.data());
    const current =
      byStudent.get(record.studentId) ??
      ({
        uid: record.studentId,
        email: "",
        displayName: "—",
        presentCount: 0,
        absentCount: 0,
        totalMarkedSessions: 0,
        recentAbsences: [],
      } satisfies StudentAttendanceSummary);

    current.totalMarkedSessions += 1;
    if (record.status === "present") {
      current.presentCount += 1;
    } else {
      current.absentCount += 1;
      current.recentAbsences.push({
        classId: record.classId,
        classTitle: record.classTitle,
        classDateIso: record.classDateIso,
      });
    }

    byStudent.set(record.studentId, current);
  }

  const students = await getStudentsByIds([...byStudent.keys()]);
  const studentMap = new Map(students.map((student) => [student.uid, student]));

  return [...byStudent.values()]
    .map((summary) => {
      const student = studentMap.get(summary.uid);
      return {
        ...summary,
        email: student?.email ?? "",
        displayName: student?.displayName ?? summary.displayName,
        recentAbsences: summary.recentAbsences.sort((a, b) =>
          String(b.classDateIso).localeCompare(String(a.classDateIso)),
        ),
      };
    })
    .sort((a, b) => b.absentCount - a.absentCount || b.totalMarkedSessions - a.totalMarkedSessions);
}

export async function deleteAttendanceForClass(classId: string) {
  const snap = await getFirebaseAdminDb()
    .collection(ATTENDANCE_COLLECTION)
    .where("classId", "==", classId)
    .get();

  if (snap.empty) return;

  const batch = getFirebaseAdminDb().batch();
  for (const doc of snap.docs) {
    batch.delete(doc.ref);
  }
  await batch.commit();
}

export async function getClassAttendanceStats(classId: string) {
  const snap = await getFirebaseAdminDb()
    .collection(ATTENDANCE_COLLECTION)
    .where("classId", "==", classId)
    .get();

  let present = 0;
  let absent = 0;
  for (const doc of snap.docs) {
    const status = doc.data().status;
    if (status === "absent") absent += 1;
    else present += 1;
  }

  return { present, absent, total: present + absent };
}

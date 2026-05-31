import { Timestamp } from "firebase/firestore";

export type ClassVisibility = "all_pro" | "course";

export interface Class {
  id?: string;
  title: string;
  description: string;
  date: Timestamp;
  duration: number;
  meetingLink: string;
  recordingLink?: string;
  createdAt?: Timestamp;
  /** Quién programó la clase (profesor o admin). */
  professorId?: string;
  /** Curso destino cuando visibility es "course". */
  courseId?: string | null;
  courseName?: string;
  /** all_pro = visible para todos PRO/Residente; course = solo matriculados. */
  visibility?: ClassVisibility;
}

export function isClassVisibleToStudent(
  cls: Class,
  enrolledCourseIds: string[],
): boolean {
  const visibility = cls.visibility ?? "all_pro";
  if (visibility === "all_pro") {
    return true;
  }
  if (!cls.courseId) {
    return true;
  }
  return enrolledCourseIds.includes(cls.courseId);
}


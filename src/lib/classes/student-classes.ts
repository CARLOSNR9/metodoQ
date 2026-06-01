import { Class, isClassVisibleToStudent } from "./types";

export type StudentClassView = Class & {
  id: string;
  classDate: Date;
  endDate: Date;
  isLiveNow: boolean;
  isPast: boolean;
  isUpcoming: boolean;
};

export function toStudentClassView(
  cls: Class & { id: string },
  now = new Date(),
): StudentClassView {
  const classDate = cls.date.toDate();
  const endDate = new Date(classDate.getTime() + cls.duration * 60000);

  return {
    ...cls,
    id: cls.id,
    classDate,
    endDate,
    isLiveNow: now >= classDate && now <= endDate,
    isPast: endDate < now,
    isUpcoming: endDate > now,
  };
}

export function buildStudentClassViews(
  classes: Class[],
  enrolledCourseIds: string[],
  now = new Date(),
): StudentClassView[] {
  return classes
    .filter((cls) => cls.id && isClassVisibleToStudent(cls, enrolledCourseIds))
    .map((cls) => toStudentClassView({ ...cls, id: cls.id! }, now))
    .sort((a, b) => a.classDate.getTime() - b.classDate.getTime());
}

export function formatClassDate(date: Date): string {
  return date.toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function formatClassTime(date: Date): string {
  return date.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function dateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

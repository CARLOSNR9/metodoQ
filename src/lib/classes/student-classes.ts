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

export function getRecordingLinkLabel(url: string): string {
  if (/youtube\.com|youtu\.be/i.test(url)) {
    return "Ver en YouTube";
  }
  return "Material complementario";
}

export function shouldShowClassCountdown(
  classDate: Date,
  endDate: Date,
  now = new Date(),
  windowHours = 2,
): boolean {
  if (now >= endDate) return false;
  if (now >= classDate) return true;
  return classDate.getTime() - now.getTime() <= windowHours * 60 * 60 * 1000;
}

export function formatClassCountdown(ms: number): string {
  if (ms <= 0) return "00:00";

  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
  }

  return `${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

export function getClassCountdownMessage(
  classDate: Date,
  endDate: Date,
  now = new Date(),
): string | null {
  if (!shouldShowClassCountdown(classDate, endDate, now)) {
    return null;
  }

  if (now >= classDate && now <= endDate) {
    return "Tu clase está en vivo ahora";
  }

  const msUntil = classDate.getTime() - now.getTime();
  return `Faltan ${formatClassCountdown(msUntil)} para tu clase`;
}

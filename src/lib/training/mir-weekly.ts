import { doc, getDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";

/**
 * Seguimiento semanal del módulo MIR: preguntas respondidas por día, en
 * `users/{uid}.mirAnsweredByDay` (YYYY-MM-DD local → respuestas). Lo suma
 * `recordMirSpecialtyStats` al guardar práctica, repaso o simulacro.
 */
export type MirAnsweredByDay = Record<string, number>;

export type MirWeekDay = { dateKey: string; count: number; isToday: boolean; isFuture: boolean };

export type MirWeekSummary = {
  /** Lunes a domingo de la semana actual. */
  days: MirWeekDay[];
  total: number;
  previousWeekTotal: number;
};

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getMonday(date: Date): Date {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return addDays(monday, -((monday.getDay() + 6) % 7));
}

export function buildMirWeekSummary(byDay: MirAnsweredByDay, now: Date = new Date()): MirWeekSummary {
  const todayKey = getLocalDateKey(now);
  const monday = getMonday(now);
  const countFor = (dateKey: string) => Math.max(0, Number(byDay[dateKey] ?? 0));

  const days = Array.from({ length: 7 }, (_, index) => {
    const dateKey = getLocalDateKey(addDays(monday, index));
    return { dateKey, count: countFor(dateKey), isToday: dateKey === todayKey, isFuture: dateKey > todayKey };
  });
  const previousWeekTotal = Array.from({ length: 7 }, (_, index) =>
    countFor(getLocalDateKey(addDays(monday, index - 7))),
  ).reduce((sum, count) => sum + count, 0);

  return { days, total: days.reduce((sum, day) => sum + day.count, 0), previousWeekTotal };
}

export async function getMirWeekSummary(userId: string): Promise<MirWeekSummary> {
  let byDay: MirAnsweredByDay = {};
  try {
    const data = (await getDoc(doc(getFirebaseDb(), "users", userId))).data();
    byDay = (data?.mirAnsweredByDay ?? {}) as MirAnsweredByDay;
  } catch (error) {
    console.error("No se pudo leer el seguimiento semanal MIR.", error);
  }
  return buildMirWeekSummary(byDay);
}

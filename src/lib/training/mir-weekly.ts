import { getLocalDateKey } from "@/lib/results";
import { getMirDailyAnswers } from "@/lib/training/mir-progress";

/**
 * Seguimiento semanal del módulo MIR: preguntas respondidas por día, en
 * `users/{uid}.mirAnsweredByDay` (YYYY-MM-DD local → respuestas). Lo suma
 * `recordMirSpecialtyStats` al guardar práctica, repaso o simulacro. Los
 * aciertos van en `users/{uid}.mirCorrectByDay`; los días anteriores a ese
 * campo no tienen clave y no cuentan como buenas ni malas.
 */
export type MirAnsweredByDay = Record<string, number>;

export type MirWeekDay = { dateKey: string; count: number; isToday: boolean; isFuture: boolean };

export type MirWeekSummary = {
  /** Lunes a domingo de la semana actual. */
  days: MirWeekDay[];
  total: number;
  /** Respuestas correctas e incorrectas de la semana (solo días con aciertos registrados). */
  correct: number;
  incorrect: number;
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

export function buildMirWeekSummary(
  byDay: MirAnsweredByDay,
  now: Date = new Date(),
  correctByDay: MirAnsweredByDay = {},
): MirWeekSummary {
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

  let correct = 0;
  let incorrect = 0;
  for (const day of days) {
    if (!(day.dateKey in correctByDay)) continue;
    const dayCorrect = Math.min(day.count, Math.max(0, Number(correctByDay[day.dateKey] ?? 0)));
    correct += dayCorrect;
    incorrect += day.count - dayCorrect;
  }

  return { days, total: days.reduce((sum, day) => sum + day.count, 0), correct, incorrect, previousWeekTotal };
}

export async function getMirWeekSummary(userId: string): Promise<MirWeekSummary> {
  const { byDay, correctByDay } = await getMirDailyAnswers(userId);
  return buildMirWeekSummary(byDay, new Date(), correctByDay);
}

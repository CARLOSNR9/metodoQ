import { doc, getDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";
import type { MirAnsweredByDay } from "@/lib/training/mir-weekly";

/**
 * Curva de progreso MIR: % de aciertos por día o por semana, a partir de
 * `users/{uid}.mirAnsweredByDay` y `mirCorrectByDay`. Solo cuentan los días
 * con aciertos registrados (los anteriores a `mirCorrectByDay` no los tienen).
 */
export type MirProgressGranularity = "day" | "week";

export type MirProgressPoint = {
  /** YYYY-MM-DD del día o del lunes de la semana. */
  dateKey: string;
  label: string;
  correct: number;
  incorrect: number;
  /** 0-100, null si no hubo respuestas con aciertos registrados. */
  accuracy: number | null;
};

export type MirProgressSeries = {
  points: MirProgressPoint[];
  correct: number;
  incorrect: number;
  accuracy: number | null;
};

export const MIR_PROGRESS_RANGE: Record<MirProgressGranularity, number> = { day: 30, week: 12 };

function addDays(date: Date, days: number): Date {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + days);
  return next;
}

function getMonday(date: Date): Date {
  return addDays(date, -((date.getDay() + 6) % 7));
}

function toAccuracy(correct: number, incorrect: number): number | null {
  const answered = correct + incorrect;
  return answered > 0 ? Math.round((correct / answered) * 100) : null;
}

function formatLabel(date: Date): string {
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

export function buildMirProgressSeries(
  byDay: MirAnsweredByDay,
  correctByDay: MirAnsweredByDay,
  granularity: MirProgressGranularity,
  now: Date = new Date(),
): MirProgressSeries {
  const tallyDay = (date: Date) => {
    const dateKey = getLocalDateKey(date);
    if (!(dateKey in correctByDay)) return { correct: 0, incorrect: 0 };
    const answered = Math.max(0, Number(byDay[dateKey] ?? 0));
    const correct = Math.min(answered, Math.max(0, Number(correctByDay[dateKey] ?? 0)));
    return { correct, incorrect: answered - correct };
  };

  const count = MIR_PROGRESS_RANGE[granularity];
  const daysPerPoint = granularity === "day" ? 1 : 7;
  const firstStart = granularity === "day" ? addDays(now, -(count - 1)) : addDays(getMonday(now), -7 * (count - 1));

  const points = Array.from({ length: count }, (_, index) => {
    const start = addDays(firstStart, index * daysPerPoint);
    let correct = 0;
    let incorrect = 0;
    for (let offset = 0; offset < daysPerPoint; offset += 1) {
      const tally = tallyDay(addDays(start, offset));
      correct += tally.correct;
      incorrect += tally.incorrect;
    }
    return {
      dateKey: getLocalDateKey(start),
      label: formatLabel(start),
      correct,
      incorrect,
      accuracy: toAccuracy(correct, incorrect),
    };
  });

  const correct = points.reduce((sum, point) => sum + point.correct, 0);
  const incorrect = points.reduce((sum, point) => sum + point.incorrect, 0);
  return { points, correct, incorrect, accuracy: toAccuracy(correct, incorrect) };
}

export async function getMirDailyAnswers(
  userId: string,
): Promise<{ byDay: MirAnsweredByDay; correctByDay: MirAnsweredByDay }> {
  try {
    const data = (await getDoc(doc(getFirebaseDb(), "users", userId))).data();
    return {
      byDay: (data?.mirAnsweredByDay ?? {}) as MirAnsweredByDay,
      correctByDay: (data?.mirCorrectByDay ?? {}) as MirAnsweredByDay,
    };
  } catch (error) {
    console.error("No se pudo leer el progreso MIR.", error);
    return { byDay: {}, correctByDay: {} };
  }
}

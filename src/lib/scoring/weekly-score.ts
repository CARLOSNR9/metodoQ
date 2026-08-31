import { toStandardizedScore } from "@/lib/scoring/cumulative-score";

export type WeeklyResultLike = {
  sessionType?: string;
  fechaDateKey?: string | null;
  fechaIso?: string | null;
  correctAnswers?: number;
  wrongAnswers?: number;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
};

export type WeeklyPracticeStats = {
  totalCorrect: number;
  totalQuestions: number;
  wrongAnswers: number;
  scorePercentage: number;
  standardizedScore: number;
  correctTopicsByName: Record<string, number>;
  wrongTopicsByName: Record<string, number>;
  weekStartKey: string;
  weekEndKey: string;
  weekLabel: string;
};

function toLocalDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function resultLocalDateKey(result: WeeklyResultLike): string | null {
  if (result.fechaDateKey) return result.fechaDateKey;
  if (!result.fechaIso) return null;
  return toLocalDateKey(new Date(result.fechaIso));
}

/** Inicio de la semana de medición: domingo 00:00 local. */
export function getSundayWeekStart(date: Date = new Date()): Date {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - start.getDay());
  return start;
}

export function formatSundayWeekLabel(start: Date = getSundayWeekStart()): string {
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const fmt = new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "short" });
  return `${fmt.format(start)} – ${fmt.format(end)}`;
}

export function isWeeklyPracticeSession(sessionType?: string): boolean {
  return sessionType !== "simulacro";
}

/** Agrega práctica de la semana domingo–domingo, excluyendo simulacros. */
export function computeWeeklyPracticeStats(
  results: WeeklyResultLike[],
  now: Date = new Date(),
): WeeklyPracticeStats {
  const start = getSundayWeekStart(now);
  const weekStartKey = toLocalDateKey(start);
  const endExclusive = new Date(start);
  endExclusive.setDate(endExclusive.getDate() + 7);
  const nextWeekStartKey = toLocalDateKey(endExclusive);
  const weekEnd = new Date(start);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const weekEndKey = toLocalDateKey(weekEnd);

  let totalCorrect = 0;
  let totalQuestions = 0;
  const correctTopicsByName: Record<string, number> = {};
  const wrongTopicsByName: Record<string, number> = {};

  for (const result of results) {
    if (!isWeeklyPracticeSession(result.sessionType)) continue;

    const dateKey = resultLocalDateKey(result);
    if (!dateKey || dateKey < weekStartKey || dateKey >= nextWeekStartKey) continue;

    const correct = result.correctAnswers ?? 0;
    const wrong = result.wrongAnswers ?? 0;
    totalCorrect += correct;
    totalQuestions += correct + wrong;

    if (result.correctTopics) {
      for (const [topic, count] of Object.entries(result.correctTopics)) {
        correctTopicsByName[topic] = (correctTopicsByName[topic] ?? 0) + count;
      }
    }
    if (result.wrongTopics) {
      for (const [topic, count] of Object.entries(result.wrongTopics)) {
        wrongTopicsByName[topic] = (wrongTopicsByName[topic] ?? 0) + count;
      }
    }
  }

  const wrongAnswers = totalQuestions - totalCorrect;
  const scorePercentage =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return {
    totalCorrect,
    totalQuestions,
    wrongAnswers,
    scorePercentage,
    standardizedScore: toStandardizedScore(scorePercentage),
    correctTopicsByName,
    wrongTopicsByName,
    weekStartKey,
    weekEndKey,
    weekLabel: formatSundayWeekLabel(start),
  };
}

import { getDaysUntilMirExam } from "@/lib/mir/config";
import { getLocalDateKey } from "@/lib/results";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import {
  MIR_FLASHCARD_DECK_SIZE,
  getMirFlashcardStatuses,
  type MirFlashcardStatuses,
} from "@/lib/training/mir-flashcards";
import {
  buildMirMastery,
  getMirSpecialtyStats,
  getWeakestSpecialty,
  type MirSpecialtyStats,
} from "@/lib/training/mir-mastery";
import { MIR_MIXED_SPECIALTY, MIR_PRACTICE_BLOCK_SIZE } from "@/lib/training/mir-practice";
import { getDueMirReviewIds, getMirReviewDeck, type MirReviewDeck } from "@/lib/training/mir-review";
import { getMirStudyLog } from "@/lib/training/mir-study-log";
import { getMirWeekSummary, type MirWeekSummary } from "@/lib/training/mir-weekly";

/**
 * «Tu plan de hoy» del panel MIR: qué conviene hacer hoy, calculado con lo
 * que ya se guarda (repaso de errores, preguntas respondidas por día, mapa de
 * dominio, tarjetas y «Mi estudio»). No guarda nada propio: cada paso se da
 * por hecho al cumplir su meta del día.
 *
 * - Repaso: vaciar los errores que tocan hoy (solo si el mazo tiene alguno).
 * - Práctica: responder la meta diaria, empezando por la especialidad más floja.
 * - Tarjetas: una ronda de tarjetas autoevaluadas hoy.
 */

/** La meta diaria nunca baja de un bloque ni sube de seis. */
const MIN_DAILY_TARGET = MIR_PRACTICE_BLOCK_SIZE;
const MAX_DAILY_TARGET = MIR_PRACTICE_BLOCK_SIZE * 6;

export type MirPlanPace = {
  daysLeft: number;
  /** Preguntas del banco que aún no ha contestado nunca. */
  unseenCount: number;
  /** Preguntas al día para ver todo el banco antes del examen (sin redondear a bloques). */
  perDay: number;
  /** Meta del día: `perDay` en bloques completos, entre MIN y MAX. */
  dailyTarget: number;
};

export type MirPlanStep =
  | { id: "review"; href: string; completed: boolean; pending: number }
  | {
      id: "practice";
      href: string;
      completed: boolean;
      answeredToday: number;
      goal: number;
      /** Especialidad sugerida; null si toca un bloque mixto. */
      specialty: { key: string; label: string; accuracy: number | null } | null;
    }
  | { id: "flashcards"; href: string; completed: boolean; ratedToday: number; goal: number };

export type MirDailyPlan = {
  pace: MirPlanPace;
  steps: MirPlanStep[];
  completedCount: number;
  /** Primer paso sin completar: a donde lleva el botón principal. */
  nextStep: MirPlanStep | null;
};

export type MirDailyPlanInput = {
  reviewDeck: MirReviewDeck;
  week: MirWeekSummary;
  specialtyStats: MirSpecialtyStats;
  flashcardStatuses: MirFlashcardStatuses;
  /** Ids de preguntas contestadas alguna vez. */
  answeredQuestionIds: Iterable<string>;
  totalQuestions?: number;
};

export function buildMirPlanPace(unseenCount: number, daysLeft: number): MirPlanPace {
  const perDay = Math.ceil(unseenCount / Math.max(1, daysLeft));
  const inBlocks = Math.ceil(perDay / MIR_PRACTICE_BLOCK_SIZE) * MIR_PRACTICE_BLOCK_SIZE;
  return {
    daysLeft,
    unseenCount,
    perDay,
    dailyTarget: Math.min(MAX_DAILY_TARGET, Math.max(MIN_DAILY_TARGET, inBlocks)),
  };
}

function countRatedOn(statuses: MirFlashcardStatuses, dateKey: string): number {
  return Object.values(statuses).filter(
    (entry) => entry?.updatedAt && getLocalDateKey(new Date(entry.updatedAt)) === dateKey,
  ).length;
}

export function buildMirDailyPlan(input: MirDailyPlanInput, now: Date = new Date()): MirDailyPlan {
  const todayKey = getLocalDateKey(now);
  const totalQuestions = input.totalQuestions ?? MIR_QUESTIONS.length;
  const seenCount = new Set(input.answeredQuestionIds).size;
  const pace = buildMirPlanPace(Math.max(0, totalQuestions - seenCount), getDaysUntilMirExam(now));

  const steps: MirPlanStep[] = [];

  const pending = getDueMirReviewIds(input.reviewDeck, now).length;
  if (Object.keys(input.reviewDeck.entries).length > 0) {
    steps.push({ id: "review", href: "/dashboard/mir/repaso", completed: pending === 0, pending });
  }

  const answeredToday = input.week.days.find((day) => day.dateKey === todayKey)?.count ?? 0;
  const weakest = getWeakestSpecialty(buildMirMastery(input.specialtyStats));
  steps.push({
    id: "practice",
    href: `/dashboard/mir/practica?especialidad=${encodeURIComponent(weakest?.key ?? MIR_MIXED_SPECIALTY)}`,
    completed: answeredToday >= pace.dailyTarget,
    answeredToday,
    goal: pace.dailyTarget,
    specialty: weakest ? { key: weakest.key, label: weakest.label, accuracy: weakest.accuracy } : null,
  });

  const ratedToday = countRatedOn(input.flashcardStatuses, todayKey);
  steps.push({
    id: "flashcards",
    href: "/dashboard/mir/tarjetas",
    completed: ratedToday >= MIR_FLASHCARD_DECK_SIZE,
    ratedToday,
    goal: MIR_FLASHCARD_DECK_SIZE,
  });

  return {
    pace,
    steps,
    completedCount: steps.filter((step) => step.completed).length,
    nextStep: steps.find((step) => !step.completed) ?? null,
  };
}

/** Lee todo lo que necesita el plan y devuelve también la semana, que el panel reutiliza. */
export async function getMirDailyPlan(
  userId: string,
): Promise<{ plan: MirDailyPlan; week: MirWeekSummary }> {
  const [reviewDeck, week, specialtyStats, flashcardStatuses, studyLog] = await Promise.all([
    getMirReviewDeck(userId),
    getMirWeekSummary(userId),
    getMirSpecialtyStats(userId),
    getMirFlashcardStatuses(userId),
    getMirStudyLog(userId),
  ]);
  const plan = buildMirDailyPlan({
    reviewDeck,
    week,
    specialtyStats,
    flashcardStatuses,
    answeredQuestionIds: [...Object.keys(studyLog), ...Object.keys(reviewDeck.entries)],
  });
  return { plan, week };
}

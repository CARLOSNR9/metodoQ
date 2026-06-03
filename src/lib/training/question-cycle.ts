import type { TrainingQuestion } from "@/lib/questions/types";
import { selectAdaptiveQuestions } from "@/lib/training/adaptive";

type UserLearningProfile = {
  weaknesses: string[];
  strengths: string[];
  topicStats: Record<string, { correct: number; wrong: number }>;
};

export function shouldTrackQuestionCycle(options: {
  isAct1: boolean;
  isDailyPill: boolean;
  isRepasoMode: boolean;
}): boolean {
  return !options.isAct1 && !options.isDailyPill && !options.isRepasoMode;
}

export function buildBankIdSet(questions: TrainingQuestion[]): Set<string> {
  return new Set(questions.map((question) => question.id));
}

export function countSeenInBank(seenIds: Set<string>, bankIds: Set<string>): number {
  let count = 0;
  for (const id of seenIds) {
    if (bankIds.has(id)) count += 1;
  }
  return count;
}

export function isBankCycleComplete(seenIds: Set<string>, bankIds: Set<string>): boolean {
  return bankIds.size > 0 && countSeenInBank(seenIds, bankIds) >= bankIds.size;
}

export function pruneSeenIdsForBank(seenIds: Set<string>, bankIds: Set<string>): string[] {
  return [...seenIds].filter((id) => !bankIds.has(id));
}

/**
 * Preguntas elegibles sin repetir hasta completar el banco.
 * 1) Solo no vistas en el pool filtrado.
 * 2) Si el pool está agotado, amplía a no vistas en todo el banco.
 * 3) Si el ciclo completo del banco terminó (cycleReset), permite todo el pool otra vez.
 */
export function resolveEligibleQuestions(
  pool: TrainingQuestion[],
  fullBank: TrainingQuestion[],
  seenIds: Set<string>,
  cycleReset: boolean,
): TrainingQuestion[] {
  if (cycleReset) {
    return pool;
  }

  const unseenInPool = pool.filter((question) => !seenIds.has(question.id));
  if (unseenInPool.length > 0) {
    return unseenInPool;
  }

  const unseenInBank = fullBank.filter((question) => !seenIds.has(question.id));
  if (unseenInBank.length > 0) {
    return unseenInBank;
  }

  return pool;
}

export function selectAdaptiveQuestionsWithCycle(
  pool: TrainingQuestion[],
  fullBank: TrainingQuestion[],
  desiredCount: number,
  profile: UserLearningProfile,
  seenIds: Set<string>,
  cycleReset: boolean,
): TrainingQuestion[] {
  const eligible = resolveEligibleQuestions(pool, fullBank, seenIds, cycleReset);
  return selectAdaptiveQuestions(eligible, desiredCount, profile);
}

import type { TrainingQuestion } from "@/lib/questions/types";
import {
  mapQuestionToRes108Axis,
  UCC_RES108_AXES,
  UCC_RES108_WEIGHTS,
  type UccRes108Axis,
} from "@/lib/diagnostic/ucc-res108-blueprint";
import { selectAdaptiveQuestions } from "@/lib/training/adaptive";

type UserLearningProfile = {
  weaknesses: string[];
  strengths: string[];
  topicStats: Record<string, { correct: number; wrong: number }>;
};

function groupByAxis(questions: TrainingQuestion[]): Record<UccRes108Axis, TrainingQuestion[]> {
  const groups = UCC_RES108_AXES.reduce(
    (acc, axis) => {
      acc[axis] = [];
      return acc;
    },
    {} as Record<UccRes108Axis, TrainingQuestion[]>,
  );

  for (const question of questions) {
    const axis = mapQuestionToRes108Axis(question);
    groups[axis].push(question);
  }

  return groups;
}

function pickFromAxis(
  pool: TrainingQuestion[],
  count: number,
  profile: UserLearningProfile,
): TrainingQuestion[] {
  if (count <= 0 || pool.length === 0) return [];
  return selectAdaptiveQuestions(pool, Math.min(count, pool.length), profile);
}

/** Selección ponderada Res. 108 para simulacros UCC. */
export function selectUccSimulacroQuestions(options: {
  questions: TrainingQuestion[];
  count: number;
  profile: UserLearningProfile;
}): TrainingQuestion[] {
  const { questions, count, profile } = options;
  const groups = groupByAxis(questions);
  const selected: TrainingQuestion[] = [];
  const usedIds = new Set<string>();

  for (const axis of UCC_RES108_AXES) {
    const axisCount = Math.max(1, Math.round((UCC_RES108_WEIGHTS[axis] / 100) * count));
    const picked = pickFromAxis(groups[axis], axisCount, profile).filter((q) => {
      if (usedIds.has(q.id)) return false;
      usedIds.add(q.id);
      return true;
    });
    selected.push(...picked);
  }

  if (selected.length >= count) {
    return selected.slice(0, count);
  }

  const remaining = questions.filter((q) => !usedIds.has(q.id));
  const filler = selectAdaptiveQuestions(remaining, count - selected.length, profile);
  return [...selected, ...filler].slice(0, count);
}

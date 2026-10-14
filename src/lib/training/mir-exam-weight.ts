import { MIR_OFFICIAL_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { MIR_MASTERY_MIN_ANSWERS, type MirSpecialtyMastery } from "@/lib/training/mir-mastery";
import { formatSpecialtyLabel, getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import { MIR_EXAM_QUESTIONS } from "@/lib/training/mir-scoring";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Peso de cada especialidad en el examen MIR, calculado con los exámenes
 * oficiales del banco: qué parte de las preguntas es de cada una (por su
 * especialidad principal, la primera de `examArea`) y cuántas supone eso en
 * un examen de 200. Cruzado con el acierto del alumno da dónde puede ganar
 * más: las preguntas de esa especialidad que hoy fallaría en un examen.
 */
export type MirSpecialtyWeight = {
  key: string;
  label: string;
  /** Preguntas del banco oficial con esta especialidad principal. */
  questionCount: number;
  /** Parte del examen (0-1). */
  share: number;
  /** Preguntas esperadas en un examen de 200. */
  perExam: number;
};

export type MirSpecialtyPriority = MirSpecialtyWeight & {
  accuracy: number | null;
  /** Preguntas de esta especialidad que fallaría hoy en un examen (null sin datos suficientes). */
  expectedMisses: number | null;
};

export function buildMirExamWeights(questions: TrainingQuestion[] = MIR_OFFICIAL_QUESTIONS): MirSpecialtyWeight[] {
  const counts = new Map<string, number>();
  let total = 0;
  for (const question of questions) {
    if (question.tags?.includes("anulada")) continue;
    const primary = getQuestionSpecialtyKeys(question)[0];
    if (!primary) continue;
    counts.set(primary, (counts.get(primary) ?? 0) + 1);
    total += 1;
  }
  return [...counts.entries()]
    .map(([key, questionCount]) => ({
      key,
      label: formatSpecialtyLabel(key),
      questionCount,
      share: questionCount / total,
      perExam: (questionCount / total) * MIR_EXAM_QUESTIONS,
    }))
    .sort((a, b) => b.share - a.share || a.label.localeCompare(b.label, "es"));
}

/** Años de examen oficial del banco con los que se calcula el peso. */
export function getMirWeightYears(questions: TrainingQuestion[] = MIR_OFFICIAL_QUESTIONS): number[] {
  return [...new Set(questions.map((question) => question.officialExam?.year).filter((year): year is number => Boolean(year)))].sort();
}

/**
 * Prioridad de estudio: el peso de cada especialidad por lo que aún falla en
 * ella. Las que no tienen respuestas suficientes van al final, ordenadas por
 * peso, porque su acierto aún no dice nada.
 */
export function buildMirStudyPriorities(
  weights: MirSpecialtyWeight[],
  mastery: MirSpecialtyMastery[],
): MirSpecialtyPriority[] {
  const byKey = new Map(mastery.map((item) => [item.key, item]));
  return weights
    .map((weight) => {
      const item = byKey.get(weight.key);
      const reliable = item && item.answered >= MIR_MASTERY_MIN_ANSWERS && item.accuracy !== null;
      return {
        ...weight,
        accuracy: item?.accuracy ?? null,
        expectedMisses: reliable ? weight.perExam * (1 - item.accuracy! / 100) : null,
      };
    })
    .sort((a, b) => {
      if (a.expectedMisses === null || b.expectedMisses === null) {
        return (a.expectedMisses === null ? 1 : 0) - (b.expectedMisses === null ? 1 : 0) || b.share - a.share;
      }
      return b.expectedMisses - a.expectedMisses || b.share - a.share;
    });
}

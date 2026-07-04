import type { QuestionOption, TrainingQuestion } from "@/lib/questions/types";

/**
 * Corrección editorial que un profesor guarda sobre una pregunta de convocatoria.
 * Se almacena en Firestore y se fusiona encima de la pregunta base del código,
 * de modo que la pregunta original queda intacta como respaldo restaurable.
 */
export type ConvocatoriaQuestionOverride = {
  statement?: string;
  options?: QuestionOption[];
  correctOptionId?: string;
  explanation?: string;
  keyPoints?: string[];
  updatedAt?: string;
  updatedBy?: string;
};

export type ConvocatoriaOverrideMap = Record<string, ConvocatoriaQuestionOverride>;

/** Aplica una corrección sobre la pregunta base (la corrección tiene prioridad). */
export function applyConvocatoriaOverride(
  base: TrainingQuestion,
  override: ConvocatoriaQuestionOverride | undefined,
): TrainingQuestion {
  if (!override) return base;

  return {
    ...base,
    statement: override.statement ?? base.statement,
    options:
      override.options && override.options.length > 0
        ? override.options
        : base.options,
    correctOptionId: override.correctOptionId ?? base.correctOptionId,
    explanation: override.explanation ?? base.explanation,
    keyPoints: override.keyPoints ?? base.keyPoints,
  };
}

/** Fusiona un banco base con el mapa de correcciones por id de pregunta. */
export function mergeConvocatoriaBank(
  base: TrainingQuestion[],
  overrides: ConvocatoriaOverrideMap,
): TrainingQuestion[] {
  return base.map((question) =>
    applyConvocatoriaOverride(question, overrides[question.id]),
  );
}

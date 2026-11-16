import type { TrainingQuestion } from "@/lib/questions/types";

type OptionLetter = "A" | "B" | "C" | "D";

/** Texto de la opción y, si es incorrecta, la retroalimentación al elegirla. */
type OptionInput = [text: string, incorrectFeedback?: string];

export type UnivalleQuestionInput = {
  id: string;
  examArea: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  tags?: string[];
  statement: string;
  options: [OptionInput, OptionInput, OptionInput, OptionInput];
  correct: OptionLetter;
  explanation: string;
  keyPoints: string[];
};

const LETTERS: OptionLetter[] = ["A", "B", "C", "D"];

/**
 * Área del mapa de dominio a partir del área del examen. El tema se guarda como
 * «ÁREA - TEMA» (convención de los bancos de convocatoria) para que el
 * progreso se agrupe en Dermatología, Salud Pública, etc.
 */
function getAreaPrefix(examArea: string): string {
  if (/DERMATOLOG/i.test(examArea)) return "DERMATOLOGÍA";
  if (/LEGISLACI/i.test(examArea)) return "LEGISLACIÓN";
  if (/SALUD PÚBLICA/i.test(examArea)) return "SALUD PÚBLICA";
  return examArea.split(" - ")[0].trim();
}

/** Construye una pregunta del banco Univalle (4 opciones, única respuesta). */
export function buildUnivalleQuestion(input: UnivalleQuestionInput): TrainingQuestion {
  return {
    id: input.id,
    university: "Univalle",
    examArea: input.examArea,
    topic: `${getAreaPrefix(input.examArea)} - ${input.topic}`,
    difficulty: input.difficulty,
    tags: ["univalle", ...(input.tags ?? [])],
    statement: input.statement,
    options: input.options.map(([text, incorrectFeedback], index) => {
      const letter = LETTERS[index];
      return {
        id: letter,
        label: letter,
        text,
        ...(letter !== input.correct && incorrectFeedback ? { incorrectFeedback } : {}),
      };
    }),
    correctOptionId: input.correct,
    explanation: input.explanation,
    keyPoints: input.keyPoints,
  };
}

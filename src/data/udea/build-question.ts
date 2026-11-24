import type { TrainingQuestion } from "@/lib/questions/types";

type OptionLetter = "A" | "B" | "C" | "D";

/** Texto de la opción y, si es incorrecta, la retroalimentación al elegirla. */
type OptionInput = [text: string, incorrectFeedback?: string];

export type UdeaQuestionInput = {
  id: string;
  examArea: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  tags?: string[];
  statement: string;
  /** El examen real de la UdeA trae preguntas de 3 y de 4 opciones. */
  options: [OptionInput, OptionInput, OptionInput] | [OptionInput, OptionInput, OptionInput, OptionInput];
  correct: OptionLetter;
  explanation: string;
  keyPoints: string[];
};

const LETTERS: OptionLetter[] = ["A", "B", "C", "D"];

/**
 * Área del mapa de dominio a partir del área del examen. El tema se guarda como
 * «ÁREA - TEMA» (convención de los bancos de convocatoria) para que el
 * progreso se agrupe por área.
 */
function getAreaPrefix(examArea: string): string {
  return examArea.split(" - ")[0].trim();
}

/** Construye una pregunta del banco UdeA (3 o 4 opciones, única respuesta). */
export function buildUdeaQuestion(input: UdeaQuestionInput): TrainingQuestion {
  const correctIndex = LETTERS.indexOf(input.correct);
  if (correctIndex >= input.options.length) {
    throw new Error(`${input.id}: la respuesta ${input.correct} no existe.`);
  }
  return {
    id: input.id,
    university: "UdeA",
    examArea: input.examArea,
    topic: `${getAreaPrefix(input.examArea)} - ${input.topic}`,
    difficulty: input.difficulty,
    tags: ["udea", ...(input.tags ?? [])],
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

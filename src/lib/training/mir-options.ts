import type { TrainingQuestion } from "@/lib/questions/types";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

/**
 * Devuelve una copia de la pregunta con las opciones en orden aleatorio y
 * reetiquetadas A, B, C… según su nueva posición. Los `id` de las opciones
 * y `correctOptionId` no cambian, así que las respuestas guardadas (por id)
 * siguen siendo válidas. Evita que la posición de la correcta sea
 * predecible (en el banco original la correcta era siempre la A).
 */
export function shuffleMirQuestionOptions(
  question: TrainingQuestion,
  random: () => number = Math.random,
): TrainingQuestion {
  const options = [...question.options];
  for (let i = options.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return {
    ...question,
    options: options.map((option, index) => ({ ...option, label: OPTION_LABELS[index] ?? option.label })),
  };
}

export function shuffleMirQuestionsOptions(questions: TrainingQuestion[]): TrainingQuestion[] {
  return questions.map((question) => shuffleMirQuestionOptions(question));
}

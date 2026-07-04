/** Extrae el número ordinal (1–100) del id de pregunta de convocatoria UCC. */
export function getConvocatoriaQuestionNumber(questionId: string): number {
  const match = questionId.match(/-(\d+)$/);
  return match ? Number.parseInt(match[1], 10) : 0;
}

export function sortConvocatoriaQuestions<T extends { id: string }>(questions: T[]): T[] {
  return [...questions].sort(
    (a, b) =>
      getConvocatoriaQuestionNumber(a.id) - getConvocatoriaQuestionNumber(b.id),
  );
}

type FallbackTheoryOption = {
  id: string;
  label: string;
  incorrectFeedback?: string;
};

/**
 * Píldora de respaldo para preguntas sin `theoryContent`: arma la lectura con
 * la explicación, los puntos clave y la retroalimentación de cada distractor,
 * para que la pregunta siempre se pueda abrir y guardar en Mi Estudio.
 */
export function buildFallbackTheoryContent(input: {
  explanation?: string;
  keyPoints?: string[];
  options?: FallbackTheoryOption[];
  correctOptionId?: string;
}): string | undefined {
  const explanation = input.explanation?.trim();
  if (!explanation) return undefined;

  const sections = [`EXPLICACIÓN DEL PROFE BY DR Q.\n\n${explanation}`];

  const keyPoints = (input.keyPoints ?? []).map((point) => point.trim()).filter(Boolean);
  if (keyPoints.length > 0) {
    sections.push(`### Puntos clave\n${keyPoints.map((point) => `• ${point}`).join("\n")}`);
  }

  const distractors = (input.options ?? []).filter(
    (option) => option.id !== input.correctOptionId && option.incorrectFeedback?.trim(),
  );
  if (distractors.length > 0) {
    sections.push(
      `### ¿Por qué fallan las otras opciones?\n${distractors
        .map((option) => `• Opción ${option.label}: ${option.incorrectFeedback!.trim()}`)
        .join("\n")}`,
    );
  }

  return sections.join("\n\n");
}

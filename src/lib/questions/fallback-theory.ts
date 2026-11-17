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

  const sections = [formatExplanationForTheory(explanation)];

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

const PROFESSOR_MARKER = /\*\*\s*EXPLICACI[OÓ]N DEL PROFE BY DR\.? Q\s*:?\s*\*\*/i;

/**
 * Convierte la explicación (con marcas `**…**` de los bancos) en bloques que
 * la píldora sabe pintar: «Trampa del examen» como advertencia y la explicación
 * del profe como su propio bloque, sin asteriscos sueltos ni encabezados vacíos.
 */
export function formatExplanationForTheory(explanation: string): string {
  const hasProfessorSection = PROFESSOR_MARKER.test(explanation);
  const body = explanation
    .replace(PROFESSOR_MARKER, "EXPLICACIÓN DEL PROFE BY DR Q.")
    .replace(/\*\*\s*Trampa del examen\s*:\s*\*\*/gi, "Trampa del examen:")
    .replace(/\*\*(.+?)\*\*/g, "$1");

  // Sin sección propia del profe, toda la explicación va bajo ese encabezado
  // (en el mismo bloque, para que el recuadro no quede vacío).
  return hasProfessorSection ? body : `EXPLICACIÓN DEL PROFE BY DR Q.\n${body}`;
}

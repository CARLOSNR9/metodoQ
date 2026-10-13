/**
 * Reportes de preguntas del módulo MIR. Comparten la colección
 * `question_reports` con los del Método Q, pero se guardan con
 * `module: "mir"` y el panel de admin los lista aparte.
 */

/** Todas las preguntas del banco MIR tienen IDs `mir-…` (p. ej. `mir-oficial-2024-013`). */
export function isMirQuestionId(questionId: string): boolean {
  return questionId.startsWith("mir-");
}

export type QuestionReportCategory = { id: string; label: string; desc: string };

/** Motivos de reporte para preguntas MIR (son preguntas oficiales: el enunciado no lo escribimos nosotros). */
export const MIR_REPORT_CATEGORIES: QuestionReportCategory[] = [
  { id: "wrong_answer", label: "Respuesta incorrecta", desc: "La opción marcada como correcta no lo es (o la pregunta fue impugnada)" },
  { id: "bad_question", label: "Pregunta mal planteada", desc: "El enunciado es ambiguo, le falta información o tiene varias respuestas válidas" },
  { id: "bad_feedback", label: "Explicación confusa o errónea", desc: "La explicación es incompleta, no se entiende o contradice la respuesta" },
  { id: "image", label: "Problema con la imagen", desc: "La imagen no carga, no se ve bien o no corresponde a la pregunta" },
  { id: "outdated", label: "Información desactualizada", desc: "Las guías o el criterio médico han cambiado desde el examen" },
  { id: "typo", label: "Error de transcripción", desc: "Faltas, opciones cortadas o texto distinto al del examen oficial" },
  { id: "other", label: "Otro motivo", desc: "Especifica el motivo en los comentarios" },
];

/** Tema legible para el panel: «CARDIOLOGÍA · MIR 2024 · P. 13». */
export function describeMirQuestion(question: {
  examArea?: string;
  officialExam?: { year: number; number: number };
}): string {
  const parts: string[] = [];
  if (question.examArea) parts.push(question.examArea);
  if (question.officialExam) {
    parts.push(`MIR ${question.officialExam.year} · P. ${question.officialExam.number}`);
  }
  return parts.join(" · ") || "MIR";
}

/** Lo que el panel de admin muestra de una pregunta MIR reportada. */
export type MirQuestionPreview = {
  statement: string;
  options: { label: string; text: string }[];
  correctLabel: string;
  explanation: string;
  imageSrc?: string;
};

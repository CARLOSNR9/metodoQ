/**
 * Preguntas reportadas por estudiantes que ya se corrigieron en el código.
 *
 * Al cargar el panel de «Preguntas reportadas», cada reporte pendiente de una
 * pregunta listada aquí, cuyo último reporte sea ANTERIOR a `resolvedAt`, se
 * marca automáticamente como «Revisada» (ver `question-reports-admin.ts`). Si
 * un estudiante la vuelve a reportar después de esa fecha, el reporte nuevo
 * sigue pendiente y la pregunta reaparece en el panel.
 *
 * `resolvedAt`: fecha ISO en que se integró la corrección.
 * `note`: qué se corrigió, en una línea (queda guardado en el reporte).
 */
export type ResolvedQuestionReport = {
  resolvedAt: string;
  note: string;
};

export const RESOLVED_QUESTION_REPORTS: Record<string, ResolvedQuestionReport> = {};

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

export const RESOLVED_QUESTION_REPORTS: Record<string, ResolvedQuestionReport> = {
  // Lote 1 · 28 nov 2026
  "ucc-conv-2025-07-05-61": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-29": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-54": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-75": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-70": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-62": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-86": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-63": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-82": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-47": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-53": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-57": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-71": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-85": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-83": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-64": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-66": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-94": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-50": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-74": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-99": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-55": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-93": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-60": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-68": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-73": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-58": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-92": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-65": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-59": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-90": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-76": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-81": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-84": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-97": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-79": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-56": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-96": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-67": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-52": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-78": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-95": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-77": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-98": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-88": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-05-89": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, retroalimentación por opción y guardado en Mi Estudio (píldora de teoría) corregidos en el PR #70.",
  },
  "ucc-conv-2025-07-19-18": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: explicación completa, teoría y guardado en Mi Estudio disponibles (PR #70).",
  },
  "ucc-conv-2025-07-19-95": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: texto sin caracteres dañados (el tema se veía como «NeurologÃ­a»), teoría y guardado en Mi Estudio disponibles (PR #70).",
  },
  "ucc-conv-2025-07-19-58": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Verificada: texto sin caracteres dañados (el tema se veía como «NeurologÃ­a»), teoría y guardado en Mi Estudio disponibles (PR #70).",
  },
  "ucc-conv-2025-06-21-11": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible. Se quitó un texto de error que tenía la opción correcta.",
  },
  "ucc-conv-2025-06-21-21": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-48": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-55": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-56": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-60": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-76": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-86": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-87": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-99": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "ucc-conv-2025-06-21-07": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Explicación ampliada con razonamiento, trampa del examen y explicación del profe; guardado en Mi Estudio disponible.",
  },
  "univalle-derm-01": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Revisada sin cambios: clave y dosis correctas (antimoniato de meglumina 20 mg/kg/día × 20 días, guía colombiana); explicación ya completa.",
  },
  "univalle-norma-01": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Revisada sin cambios: clave correcta (Ley 23 de 1981, art. 38, literal e); explicación ya completa.",
  },
  "univalle-derm-53": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Revisada sin cambios: clave correcta (alopecia areata, corticoide intralesional); explicación ya completa.",
  },
  "univalle-diag-04": {
    resolvedAt: "2026-11-28T15:00:00.000Z",
    note: "Revisada sin cambios: clave correcta (Tokio I-II, colecistectomía laparoscópica temprana); explicación ya completa.",
  },
};

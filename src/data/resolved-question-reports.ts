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
  // Lote 2 · dr-q (55) · 28 nov 2026
  "dr-q-84": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-235": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-143": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-135": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-245": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-183": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-220": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-253": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-219": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-157": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-196": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-200": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-206": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-195": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-247": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-170": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-251": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-172": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-194": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-212": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-162": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-236": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-137": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-232": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-133": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Clave corregida de D a A: lactante febril <3 meses con mal aspecto requiere estudio completo con punción lumbar, hospitalización y antibiótico IV. Explicación, teoría, puntos clave y retroalimentación reescritos.",
  },
  "dr-q-216": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-199": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-144": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-181": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-154": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-178": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-243": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-203": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Corregido el error de la explicación (la retirada vale 4, no 3); el enunciado ahora precisa flexión anormal (decorticación). Formato MIR y retroalimentación por opción.",
  },
  "dr-q-145": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-156": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-223": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-231": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-224": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-252": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-176": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-173": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-158": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-250": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Enunciado completado con los hallazgos que distinguen varicocele de hernia («bolsa de gusanos», cordón libre por encima). Formato MIR y retroalimentación por opción.",
  },
  "dr-q-179": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-146": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-147": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-159": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-165": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Eliminada la frase contradictoria de la explicación (llamaba incorrecta a la respuesta correcta). Formato MIR y retroalimentación por opción.",
  },
  "dr-q-234": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-155": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-218": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-166": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-169": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-240": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Explicación reescrita en formato MIR y retroalimentación en las 3 opciones incorrectas; clave verificada.",
  },
  "dr-q-244": {
    resolvedAt: "2026-11-28T15:22:48.000Z",
    note: "Reportada como desactualizada: contenido vigente (ganglio de Virchow = cáncer gástrico); explicación ampliada en formato MIR y retroalimentación por opción.",
  },
};

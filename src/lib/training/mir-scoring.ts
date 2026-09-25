/**
 * Puntuación del examen MIR: cada acierto suma 3 puntos y cada error resta 1
 * (es decir, cada error descuenta un tercio de acierto); las preguntas en
 * blanco no puntúan. Se expresa en «netas»: aciertos − errores / 3.
 *
 * La posición final en el MIR depende además del baremo académico y de los
 * resultados del resto de aspirantes, así que aquí solo se calcula lo que se
 * puede calcular con rigor: netas, puntos y su proyección a 200 preguntas.
 */
export const MIR_EXAM_QUESTIONS = 200;
export const MIR_POINTS_PER_CORRECT = 3;
export const MIR_POINTS_PER_WRONG = -1;

export type MirScoreInput = { correct: number; wrong: number; total: number };

export type MirScoreSummary = {
  correct: number;
  wrong: number;
  blank: number;
  total: number;
  /** Aciertos − errores / 3. */
  net: number;
  /** Netas escaladas a un examen de 200 preguntas. */
  projectedNet: number;
  /** 3 × aciertos − errores. */
  points: number;
  /** Netas que se perdieron por los errores (errores / 3). */
  netLostToErrors: number;
  /** Netas sobre el total de preguntas (0-100). */
  netPercentage: number;
};

export function getMirNet(correct: number, wrong: number): number {
  return correct - wrong / 3;
}

export function getMirScoreSummary({ correct, wrong, total }: MirScoreInput): MirScoreSummary {
  const net = getMirNet(correct, wrong);
  return {
    correct,
    wrong,
    blank: Math.max(0, total - correct - wrong),
    total,
    net,
    projectedNet: total > 0 ? (net / total) * MIR_EXAM_QUESTIONS : 0,
    points: correct * MIR_POINTS_PER_CORRECT + wrong * MIR_POINTS_PER_WRONG,
    netLostToErrors: wrong / 3,
    netPercentage: total > 0 ? (net / total) * 100 : 0,
  };
}

/** Netas con una cifra decimal y coma decimal: 63,7. */
export function formatMirNet(value: number): string {
  return value.toLocaleString("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

/**
 * Consejo sobre arriesgar según los errores. Con 4 opciones, responder al
 * azar tiene esperanza nula (1/4 − 3/4 × 1/3 = 0); descartar una opción ya
 * la hace positiva (1/3 − 2/3 × 1/3 = 1/9 de acierto).
 */
export function getMirGuessingAdvice(summary: MirScoreSummary): string {
  if (summary.total === 0) return "";
  const errorRate = summary.wrong / Math.max(1, summary.correct + summary.wrong);
  if (summary.blank > summary.total * 0.15 && errorRate < 0.2) {
    return "Dejas muchas en blanco y fallas poco: estás siendo demasiado prudente. Si puedes descartar al menos una opción, arriesga: de media suma.";
  }
  if (errorRate > 0.35) {
    return "Fallas muchas de las que respondes: cada error te resta un tercio de acierto. Si no puedes descartar ninguna opción, déjala en blanco.";
  }
  return "Buen equilibrio entre arriesgar y dejar en blanco. Recuerda: con una opción descartada, arriesgar suma de media; a ciegas, da igual.";
}

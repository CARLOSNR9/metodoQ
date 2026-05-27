/** Percentil mínimo exigido por UCC (Res. 108/2022) para evaluar hoja de vida. */
export const UCC_P75_CUTOFF = 75;

/**
 * Curva empírica calibrada para aspirantes a residencia MI en Colombia.
 * Mapea puntaje acumulado (%) → percentil estimado en cohorte de preparación.
 */
const SCORE_PERCENTILE_ANCHORS: Array<{ score: number; percentile: number }> = [
  { score: 35, percentile: 10 },
  { score: 45, percentile: 25 },
  { score: 55, percentile: 50 },
  { score: 65, percentile: 75 },
  { score: 72, percentile: 85 },
  { score: 80, percentile: 92 },
  { score: 88, percentile: 97 },
  { score: 95, percentile: 99 },
];

export type UccPercentileEstimate = {
  score: number;
  estimatedPercentile: number;
  passesP75: boolean;
  gapToP75: number;
  label: string;
  projectionWeeksToP75: number | null;
};

export function estimatePercentileFromScore(score: number): number {
  const clamped = Math.max(0, Math.min(100, score));
  const anchors = SCORE_PERCENTILE_ANCHORS;

  if (clamped <= anchors[0].score) {
    return Math.round((clamped / anchors[0].score) * anchors[0].percentile);
  }

  for (let i = 1; i < anchors.length; i += 1) {
    const prev = anchors[i - 1];
    const next = anchors[i];
    if (clamped <= next.score) {
      const ratio = (clamped - prev.score) / (next.score - prev.score);
      return Math.round(prev.percentile + ratio * (next.percentile - prev.percentile));
    }
  }

  return 99;
}

export function getPercentileLabel(percentile: number): string {
  if (percentile >= 90) return "Elite — Top 10%";
  if (percentile >= 75) return "Zona segura — P75+";
  if (percentile >= 50) return "Media cohorte";
  if (percentile >= 25) return "Por debajo de la media";
  return "Zona crítica";
}

/**
 * Proyecta semanas para alcanzar P75 asumiendo mejora lineal basada en ritmo diario.
 */
export function projectWeeksToP75(options: {
  currentScore: number;
  planWeekNumber: number;
  questionsPerWeek?: number;
}): number | null {
  const { currentScore, planWeekNumber, questionsPerWeek = 315 } = options;
  const targetScore = 65; // ~P75 en la curva calibrada

  if (currentScore >= targetScore) return 0;
  if (planWeekNumber <= 0) return null;

  const weeklyGain = Math.min(4, (questionsPerWeek / 300) * 2.5);
  const scoreGap = targetScore - currentScore;
  if (weeklyGain <= 0) return null;

  return Math.ceil(scoreGap / weeklyGain);
}

export function buildUccPercentileEstimate(options: {
  cumulativeScore: number;
  planWeekNumber?: number;
  questionsPerWeek?: number;
}): UccPercentileEstimate {
  const score = Math.round(options.cumulativeScore);
  const estimatedPercentile = estimatePercentileFromScore(score);
  const passesP75 = estimatedPercentile >= UCC_P75_CUTOFF;
  const gapToP75 = Math.max(0, UCC_P75_CUTOFF - estimatedPercentile);

  const p75ScoreAnchor =
    SCORE_PERCENTILE_ANCHORS.find((a) => a.percentile >= UCC_P75_CUTOFF)?.score ?? 65;

  return {
    score,
    estimatedPercentile,
    passesP75,
    gapToP75,
    label: getPercentileLabel(estimatedPercentile),
    projectionWeeksToP75: passesP75
      ? 0
      : projectWeeksToP75({
          currentScore: score,
          planWeekNumber: options.planWeekNumber ?? 1,
          questionsPerWeek: options.questionsPerWeek,
        }),
  };
}

/** Puntaje mínimo estimado para estar en P75. */
export function getScoreForP75(): number {
  return SCORE_PERCENTILE_ANCHORS.find((a) => a.percentile >= UCC_P75_CUTOFF)?.score ?? 65;
}

export function rankAmongScores(userScore: number, cohortScores: number[]): {
  percentile: number;
  rank: number;
  cohortSize: number;
} | null {
  if (cohortScores.length < 3) return null;

  const sorted = [...cohortScores].sort((a, b) => a - b);
  const below = sorted.filter((s) => s < userScore).length;
  const percentile = Math.round((below / sorted.length) * 100);

  return {
    percentile,
    rank: sorted.length - below,
    cohortSize: sorted.length,
  };
}

export type TopicStatLike = {
  correct: number;
  wrong: number;
};

export type CumulativePerformance = {
  totalCorrect: number;
  totalWrong: number;
  totalQuestions: number;
  scorePercentage: number;
  standardizedScore: number;
};

/** Escala 0–1000 usada en dashboards predictivos (equivalente al formato UNAL/UdeA). */
export function toStandardizedScore(scorePercentage: number): number {
  return Math.round(scorePercentage * 7.2 + 180);
}

export function computeCumulativePerformance(
  topicStats: Record<string, TopicStatLike> | null | undefined,
): CumulativePerformance {
  let totalCorrect = 0;
  let totalWrong = 0;

  if (topicStats) {
    for (const stat of Object.values(topicStats)) {
      totalCorrect += stat.correct ?? 0;
      totalWrong += stat.wrong ?? 0;
    }
  }

  const totalQuestions = totalCorrect + totalWrong;
  const scorePercentage =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return {
    totalCorrect,
    totalWrong,
    totalQuestions,
    scorePercentage,
    standardizedScore: toStandardizedScore(scorePercentage),
  };
}

/** Proyecta el promedio global tras sumar la sesión actual (antes de refrescar perfil). */
export function mergeTopicStatsWithSession(
  base: Record<string, TopicStatLike> | null | undefined,
  correctTopics: Record<string, number>,
  wrongTopics: Record<string, number>,
): Record<string, TopicStatLike> {
  const next: Record<string, TopicStatLike> = {};

  if (base) {
    for (const [topic, stat] of Object.entries(base)) {
      next[topic] = { correct: stat.correct ?? 0, wrong: stat.wrong ?? 0 };
    }
  }

  for (const [topic, count] of Object.entries(correctTopics)) {
    const prev = next[topic] ?? { correct: 0, wrong: 0 };
    next[topic] = { correct: prev.correct + count, wrong: prev.wrong };
  }

  for (const [topic, count] of Object.entries(wrongTopics)) {
    const prev = next[topic] ?? { correct: 0, wrong: 0 };
    next[topic] = { correct: prev.correct, wrong: prev.wrong + count };
  }

  return next;
}

type PerformanceProfile = {
  attemptsCount?: number;
  topicStats?: Record<string, { correct: number; wrong: number }>;
  cumulativeScore?: number | null;
  lastScore?: number | null;
  totalQuestionsAnswered?: number;
};

/** True si el usuario ya tiene datos de diagnóstico o entrenamiento para mostrar análisis. */
export function hasPerformanceData(
  profile: PerformanceProfile | null | undefined,
): boolean {
  if (!profile) return false;
  if ((profile.attemptsCount ?? 0) > 0) return true;
  if (profile.topicStats && Object.keys(profile.topicStats).length > 0) return true;
  if ((profile.totalQuestionsAnswered ?? 0) > 0) return true;
  if (typeof profile.cumulativeScore === "number") return true;
  if (typeof profile.lastScore === "number") return true;
  return false;
}

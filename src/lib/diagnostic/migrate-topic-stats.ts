import {
  formatStatsKeyAsSubject,
  getQuestionSubjectKey,
} from "@/lib/diagnostic/question-subject";
import { hasSessionReviewData, resolveSessionQuestions } from "@/lib/session-review";

export const TOPIC_STATS_VERSION = 2;

const LEGACY_TOPIC_STAT_KEYS = new Set([
  "Ciencias Básicas",
  "Clínica Adulto",
  "APS y Urgencias",
  "Comprensión Lectora",
  "Medicina Interna",
  "Cirugía",
  "Ginecología",
  "Pediatría",
  "Salud Pública / Tropical",
  "Urgencias",
  "Legislación / Ética",
  "Ciencias Clínicas",
  "Epidemiología",
  "Res. 3280",
  "Lectura Crítica",
  "Básicas",
  "Clínica",
  "APS/Urg.",
  "Lectura",
]);

export type TopicStat = {
  correct: number;
  wrong: number;
};

export type ResultForTopicMigration = {
  sessionQuestionIds?: string[];
  answersByQuestionId?: Record<string, string>;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
};

function addCount(
  stats: Record<string, TopicStat>,
  subjectKey: string,
  field: "correct" | "wrong",
  count: number,
) {
  if (count <= 0) return;
  const previous = stats[subjectKey] ?? { correct: 0, wrong: 0 };
  stats[subjectKey] = {
    correct: previous.correct + (field === "correct" ? count : 0),
    wrong: previous.wrong + (field === "wrong" ? count : 0),
  };
}

function accumulateLegacyTopics(
  stats: Record<string, TopicStat>,
  correctTopics: Record<string, number> = {},
  wrongTopics: Record<string, number> = {},
) {
  for (const [rawKey, count] of Object.entries(correctTopics)) {
    addCount(stats, formatStatsKeyAsSubject(rawKey), "correct", count);
  }
  for (const [rawKey, count] of Object.entries(wrongTopics)) {
    addCount(stats, formatStatsKeyAsSubject(rawKey), "wrong", count);
  }
}

function accumulateFromSession(
  stats: Record<string, TopicStat>,
  sessionQuestionIds: string[],
  answersByQuestionId: Record<string, string>,
) {
  const questions = resolveSessionQuestions(sessionQuestionIds);

  for (const question of questions) {
    const selected = answersByQuestionId[question.id];
    if (!selected) continue;

    const subjectKey = getQuestionSubjectKey(question);
    const isCorrect = selected === question.correctOptionId;
    addCount(stats, subjectKey, isCorrect ? "correct" : "wrong", 1);
  }
}

/** Recalcula topicStats por asignatura a partir del historial de sesiones. */
export function rebuildTopicStatsFromHistory(
  results: ResultForTopicMigration[],
): Record<string, TopicStat> {
  const stats: Record<string, TopicStat> = {};

  for (const result of results) {
    if (hasSessionReviewData(result.sessionQuestionIds, result.answersByQuestionId)) {
      accumulateFromSession(
        stats,
        result.sessionQuestionIds!,
        result.answersByQuestionId!,
      );
      continue;
    }

    accumulateLegacyTopics(stats, result.correctTopics, result.wrongTopics);
  }

  return stats;
}

export function getTopTopicsByMetric(
  topicStats: Record<string, TopicStat>,
  key: "correct" | "wrong",
  limit = 3,
): string[] {
  return Object.entries(topicStats)
    .filter(([, stat]) => stat[key] > 0)
    .sort((a, b) => b[1][key] - a[1][key])
    .slice(0, limit)
    .map(([topic]) => topic);
}

export function hasLegacyTopicStatsKeys(
  topicStats?: Record<string, TopicStat> | null,
): boolean {
  if (!topicStats) return false;
  return Object.keys(topicStats).some((key) => LEGACY_TOPIC_STAT_KEYS.has(key));
}

export function needsTopicStatsMigration(
  topicStatsVersion?: number | null,
  topicStats?: Record<string, TopicStat> | null,
): boolean {
  if ((topicStatsVersion ?? 1) < TOPIC_STATS_VERSION) return true;
  return hasLegacyTopicStatsKeys(topicStats);
}

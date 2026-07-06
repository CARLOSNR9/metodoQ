import type { DocumentData } from "firebase-admin/firestore";
import { computeCumulativePerformance } from "@/lib/scoring/cumulative-score";
import {
  getTopTopicsByMetric,
  hasLegacyTopicStatsKeys,
  rebuildTopicStatsFromHistory,
  TOPIC_STATS_VERSION,
  type ResultForTopicMigration,
} from "@/lib/diagnostic/migrate-topic-stats";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

function mapAdminResultDoc(data: DocumentData): ResultForTopicMigration {
  return {
    sessionQuestionIds: data.sessionQuestionIds as string[] | undefined,
    answersByQuestionId: data.answersByQuestionId as Record<string, string> | undefined,
    correctTopics: (data.correctTopics as Record<string, number> | undefined) ?? {},
    wrongTopics: (data.wrongTopics as Record<string, number> | undefined) ?? {},
  };
}

export async function migrateUserTopicStatsAdmin(userId: string): Promise<{
  subjectCount: number;
  totalQuestions: number;
}> {
  const db = getFirebaseAdminDb();
  const resultsSnap = await db.collection("results").where("userId", "==", userId).get();
  const results = resultsSnap.docs.map((docItem) => mapAdminResultDoc(docItem.data()));
  const nextTopicStats = await rebuildTopicStatsFromHistory(results);
  const cumulative = computeCumulativePerformance(nextTopicStats);
  const strengths = getTopTopicsByMetric(nextTopicStats, "correct");
  const weaknesses = getTopTopicsByMetric(nextTopicStats, "wrong");

  await db.collection("users").doc(userId).set(
    {
      topicStats: nextTopicStats,
      strengths,
      weaknesses,
      cumulativeScore: cumulative.scorePercentage,
      totalCorrectAnswers: cumulative.totalCorrect,
      totalQuestionsAnswered: cumulative.totalQuestions,
      lastScore: cumulative.scorePercentage,
      topicStatsVersion: TOPIC_STATS_VERSION,
      topicStatsMigratedAt: new Date().toISOString(),
      performanceProfileUpdatedAt: new Date().toISOString(),
    },
    { merge: true },
  );

  return {
    subjectCount: Object.keys(nextTopicStats).length,
    totalQuestions: cumulative.totalQuestions,
  };
}

export async function migrateAllUsersTopicStatsAdmin(): Promise<{
  migratedUsers: number;
  skippedUsers: number;
}> {
  const db = getFirebaseAdminDb();
  const usersSnap = await db.collection("users").get();

  let migratedUsers = 0;
  let skippedUsers = 0;

  for (const userDoc of usersSnap.docs) {
    const data = userDoc.data();
    const topicStatsVersion = Number(data.topicStatsVersion ?? 1);
    const topicStats = data.topicStats as Record<string, unknown> | undefined;
    const hasStats = topicStats && Object.keys(topicStats).length > 0;
    const needsMigration =
      hasStats &&
      (topicStatsVersion < TOPIC_STATS_VERSION ||
        hasLegacyTopicStatsKeys(topicStats as Record<string, { correct: number; wrong: number }>));

    if (!needsMigration) {
      skippedUsers += 1;
      continue;
    }

    await migrateUserTopicStatsAdmin(userDoc.id);
    migratedUsers += 1;
  }

  return { migratedUsers, skippedUsers };
}

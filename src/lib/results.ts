import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { checkAchievements } from "@/lib/achievements";
import { PRO_DAILY_MIN_QUESTIONS } from "@/lib/plans/limits";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";
import { buildElizabethTrainingResults, isElizabethDemoEmail } from "@/lib/demo/elizabeth-training-data";
import { getDemoTrainingResultsIfEligible } from "@/lib/demo/demo-training-data";
import { computeCumulativePerformance } from "@/lib/scoring/cumulative-score";

import type { UccMiBlockKind } from "@/lib/training/ucc-mi-daily-plan";

type SaveDemoResultInput = {
  userId: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  wrongTopics?: Record<string, number>;
  correctTopics?: Record<string, number>;
  avgResponseTime?: number;
  sessionType?:
    | "training"
    | "diagnostico"
    | "simulacro"
    | "daily-pill"
    | "repaso"
    | "repaso-cierre";
  uccBlockKind?: UccMiBlockKind | null;
};

export type SessionTypeLabel =
  | "training"
  | "diagnostico"
  | "simulacro"
  | "daily-pill"
  | "repaso"
  | "repaso-cierre";

export type DemoResultItem = {
  id: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  fechaLabel: string;
  fechaIso: string | null;
  wrongTopics: Record<string, number>;
  sessionType: SessionTypeLabel;
  uccBlockKind?: UccMiBlockKind | null;
};

export type WeakTopicItem = {
  topic: string;
  wrongCount: number;
};

type TopicStat = {
  correct: number;
  wrong: number;
};

type UserPerformanceProfile = {
  topicStats?: Record<string, TopicStat>;
  strengths?: string[];
  weaknesses?: string[];
  attemptsCount?: number;
  avgResponseTime?: number;
  lastScore?: number;
  lastSessionScore?: number;
  cumulativeScore?: number;
  totalCorrectAnswers?: number;
  totalQuestionsAnswered?: number;
};

function getTopTopicsByMetric(
  topicStats: Record<string, TopicStat>,
  key: "correct" | "wrong",
  limit = 3,
) {
  return Object.entries(topicStats)
    .filter(([, stat]) => stat[key] > 0)
    .sort((a, b) => b[1][key] - a[1][key])
    .slice(0, limit)
    .map(([topic]) => topic);
}

async function updateUserPerformanceProfile({
  userId,
  scorePercentage,
  wrongTopics = {},
  correctTopics = {},
  avgResponseTime = 0,
}: {
  userId: string;
  scorePercentage: number;
  wrongTopics?: Record<string, number>;
  correctTopics?: Record<string, number>;
  avgResponseTime?: number;
}) {
  const db = getFirebaseDb();
  const userRef = doc(db, "users", userId);

  await runTransaction(db, async (transaction) => {
    const userSnapshot = await transaction.get(userRef);
    const currentData = (userSnapshot.data() as UserPerformanceProfile | undefined) ?? {};
    const currentAttempts = currentData.attemptsCount ?? 0;
    const nextAttempts = currentAttempts + 1;
    const previousAvgResponseTime = currentData.avgResponseTime ?? 0;
    const nextAvgResponseTime =
      (previousAvgResponseTime * currentAttempts + avgResponseTime) / nextAttempts;
    const currentTopicStats = currentData.topicStats ?? {};
    const nextTopicStats: Record<string, TopicStat> = { ...currentTopicStats };
    const allTopics = new Set([...Object.keys(correctTopics), ...Object.keys(wrongTopics)]);

    for (const topic of allTopics) {
      const previousStats = currentTopicStats[topic] ?? { correct: 0, wrong: 0 };
      nextTopicStats[topic] = {
        correct: previousStats.correct + (correctTopics[topic] ?? 0),
        wrong: previousStats.wrong + (wrongTopics[topic] ?? 0),
      };
    }

    const strengths = getTopTopicsByMetric(nextTopicStats, "correct");
    const weaknesses = getTopTopicsByMetric(nextTopicStats, "wrong");
    const cumulative = computeCumulativePerformance(nextTopicStats);

    transaction.set(
      userRef,
      {
        topicStats: nextTopicStats,
        strengths,
        weaknesses,
        attemptsCount: nextAttempts,
        avgResponseTime: Number(nextAvgResponseTime.toFixed(2)),
        lastSessionScore: scorePercentage,
        cumulativeScore: cumulative.scorePercentage,
        totalCorrectAnswers: cumulative.totalCorrect,
        totalQuestionsAnswered: cumulative.totalQuestions,
        lastScore: cumulative.scorePercentage,
        performanceProfileUpdatedAt: serverTimestamp(),
        lastActiveAt: serverTimestamp(),
      },
      { merge: true },
    );
  });
}

export async function saveDemoResult({
  userId,
  scorePercentage,
  correctAnswers,
  wrongAnswers,
  wrongTopics = {},
  correctTopics = {},
  avgResponseTime = 0,
  sessionType = "training",
  uccBlockKind,
}: SaveDemoResultInput) {
  const db = getFirebaseDb();

  const docRef = await addDoc(collection(db, "results"), {
    userId,
    scorePercentage,
    correctAnswers,
    wrongAnswers,
    wrongTopics,
    correctTopics,
    avgResponseTime,
    sessionType,
    ...(uccBlockKind ? { uccBlockKind } : {}),
    fecha: serverTimestamp(),
  });

  await updateUserPerformanceProfile({
    userId,
    scorePercentage,
    wrongTopics,
    correctTopics,
    avgResponseTime,
  });

  // Verificar logros
  checkAchievements(userId).catch(console.error);

  return docRef;
}

function mapResultDoc(docItem: { id: string; data: () => Record<string, unknown> }): DemoResultItem {
  const data = docItem.data() as {
    scorePercentage?: number;
    correctAnswers?: number;
    wrongAnswers?: number;
    wrongTopics?: Record<string, number>;
    sessionType?: SessionTypeLabel;
    uccBlockKind?: UccMiBlockKind;
    fecha?: { toDate?: () => Date };
  };

  const date = data.fecha?.toDate ? data.fecha.toDate() : null;

  return {
    id: docItem.id,
    scorePercentage: data.scorePercentage ?? 0,
    correctAnswers: data.correctAnswers ?? 0,
    wrongAnswers: data.wrongAnswers ?? 0,
    wrongTopics: data.wrongTopics ?? {},
    fechaIso: date ? date.toISOString() : null,
    fechaLabel: date
      ? new Intl.DateTimeFormat("es-ES", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(date)
      : "Fecha no disponible",
    sessionType: data.sessionType ?? "training",
    uccBlockKind: data.uccBlockKind ?? null,
  };
}

async function getDemoResultsFallback(userId: string): Promise<DemoResultItem[] | null> {
  try {
    const userSnap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const email = userSnap.data()?.email as string | undefined;
    if (isElizabethDemoEmail(email)) {
      return buildElizabethTrainingResults();
    }
    const demoResults = getDemoTrainingResultsIfEligible(email);
    if (demoResults.length > 0) return demoResults;
  } catch (error) {
    console.error("No se pudo resolver historial demo.", error);
  }
  return null;
}

export async function getUserDemoResults(userId: string): Promise<DemoResultItem[]> {
  const db = getFirebaseDb();

  try {
    const resultsQuery = query(collection(db, "results"), where("userId", "==", userId));
    const snapshot = await getDocs(resultsQuery);

    if (snapshot.empty) {
      const fallback = await getDemoResultsFallback(userId);
      return fallback ?? [];
    }

    return snapshot.docs
      .map((docItem) => mapResultDoc(docItem))
      .sort(
        (a, b) =>
          new Date(b.fechaIso ?? 0).getTime() - new Date(a.fechaIso ?? 0).getTime(),
      );
  } catch (error) {
    console.error("Error al consultar historial en Firestore:", error);
    const fallback = await getDemoResultsFallback(userId);
    if (fallback) return fallback;
    throw error;
  }
}

export function getSessionTypeLabel(type: SessionTypeLabel): string {
  const labels: Record<SessionTypeLabel, string> = {
    training: "Entrenamiento",
    diagnostico: "Diagnóstico",
    simulacro: "Simulacro",
    "daily-pill": "Píldora diaria",
    repaso: "Refuerzo",
    "repaso-cierre": "Examen de cierre",
  };
  return labels[type] ?? "Entrenamiento";
}

export async function getUserWeakTopics(userId: string): Promise<WeakTopicItem[]> {
  const results = await getUserDemoResults(userId);
  const topicCounter: Record<string, number> = {};

  for (const result of results) {
    const topics = result.wrongTopics;
    for (const [topic, count] of Object.entries(topics)) {
      topicCounter[topic] = (topicCounter[topic] ?? 0) + (count ?? 0);
    }
  }

  return Object.entries(topicCounter)
    .map(([topic, wrongCount]) => ({ topic, wrongCount }))
    .sort((a, b) => b.wrongCount - a.wrongCount)
    .slice(0, 3);
}

export function getLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function countTodayQuestions(results: DemoResultItem[]): number {
  const todayKey = getLocalDateKey(new Date());
  let total = 0;
  for (const result of results) {
    if (!result.fechaIso) continue;
    if (getLocalDateKey(new Date(result.fechaIso)) !== todayKey) continue;
    total += result.correctAnswers + result.wrongAnswers;
  }
  return total;
}

export async function registerTrainingDay(userId: string) {
  const results = await getUserDemoResults(userId);
  const userRef = doc(getFirebaseDb(), "users", userId);
  const snapshot = await getDoc(userRef);
  const userData = snapshot.data() as
    | (LearningTrackProfile & {
        streakCount?: number;
        streakLastTrainingDate?: string | null;
        planStartedAt?: string | null;
      })
    | undefined;

  const goal = getDailyGoalForProfile(userData, userData?.planStartedAt);
  const todayCount = countTodayQuestions(results);

  if (todayCount < goal.streakMinimum) {
    return userData?.streakCount ?? 0;
  }

  const currentStreak = userData?.streakCount ?? 0;
  const lastTrainingDate = userData?.streakLastTrainingDate ?? null;

  const now = new Date();
  const todayKey = getLocalDateKey(now);

  if (lastTrainingDate === todayKey) {
    return currentStreak;
  }

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = getLocalDateKey(yesterday);

  const nextStreak = lastTrainingDate === yesterdayKey ? currentStreak + 1 : 1;

  await setDoc(
    userRef,
    {
      streakCount: nextStreak,
      streakLastTrainingDate: todayKey,
      streakUpdatedAt: serverTimestamp(),
      lastActiveAt: serverTimestamp(),
    },
    { merge: true },
  );

  // Verificar logros
  checkAchievements(userId).catch(console.error);

  return nextStreak;
}

export async function getUserAccumulatedStats(userId: string) {
  const results = await getUserDemoResults(userId);
  if (results.length === 0) {
    return {
      totalQuestions: 0,
      activeDays: 0,
      improvement: 0,
    };
  }

  const totalQuestions = results.reduce(
    (acc, item) => acc + item.correctAnswers + item.wrongAnswers,
    0,
  );

  const activeDaysSet = new Set<string>();
  results.forEach((item) => {
    if (item.fechaIso) {
      activeDaysSet.add(item.fechaIso.split("T")[0]);
    }
  });
  const activeDays = activeDaysSet.size;

  // Mejora: Comparamos el promedio de los últimos 3 vs los primeros 3 (o los que haya)
  const sortedByDate = [...results].sort(
    (a, b) => new Date(a.fechaIso!).getTime() - new Date(b.fechaIso!).getTime(),
  );

  const firstResults = sortedByDate.slice(0, Math.min(3, sortedByDate.length));
  const lastResults = sortedByDate.slice(Math.max(0, sortedByDate.length - 3));

  const initialAvg =
    firstResults.reduce((acc, item) => acc + item.scorePercentage, 0) / firstResults.length;
  const currentAvg =
    lastResults.reduce((acc, item) => acc + item.scorePercentage, 0) / lastResults.length;

  const improvement = Math.round(currentAvg - initialAvg);

  return {
    totalQuestions,
    activeDays,
    improvement,
  };
}

export async function completeDailyPill(userId: string, wasCorrect: boolean) {
  const db = getFirebaseDb();
  const userRef = doc(db, "users", userId);
  const now = new Date();
  const todayKey = getLocalDateKey(now);

  // Intentamos obtener el perfil actual para manejar rachas del reto
  const snapshot = await getDoc(userRef);
  const currentData = snapshot.data();
  const currentDailyPill = currentData?.dailyPillStatus;
  
  let nextStreak = 1;
  if (currentDailyPill?.lastCompletedDate) {
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = getLocalDateKey(yesterday);
    
    if (currentDailyPill.lastCompletedDate === yesterdayKey) {
      nextStreak = (currentDailyPill.streak ?? 0) + 1;
    } else if (currentDailyPill.lastCompletedDate === todayKey) {
      nextStreak = currentDailyPill.streak ?? 1;
    }
  }

  await setDoc(
    userRef,
    {
      dailyPillStatus: {
        lastCompletedDate: todayKey,
        wasCorrect,
        streak: nextStreak,
      }
    },
    { merge: true },
  );
  
  return nextStreak;
}

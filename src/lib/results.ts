import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { checkAchievements } from "@/lib/achievements";

type SaveDemoResultInput = {
  userId: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  wrongTopics?: Record<string, number>;
  correctTopics?: Record<string, number>;
  avgResponseTime?: number;
};

export type DemoResultItem = {
  id: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  fechaLabel: string;
  fechaIso: string | null;
  wrongTopics: Record<string, number>;
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

    transaction.set(
      userRef,
      {
        topicStats: nextTopicStats,
        strengths,
        weaknesses,
        attemptsCount: nextAttempts,
        avgResponseTime: Number(nextAvgResponseTime.toFixed(2)),
        lastScore: scorePercentage,
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

export async function getUserDemoResults(userId: string): Promise<DemoResultItem[]> {
  const db = getFirebaseDb();
  const resultsQuery = query(
    collection(db, "results"),
    where("userId", "==", userId),
    orderBy("fecha", "desc"),
  );

  const snapshot = await getDocs(resultsQuery);

  return snapshot.docs.map((docItem) => {
    const data = docItem.data() as {
      scorePercentage?: number;
      correctAnswers?: number;
      wrongAnswers?: number;
      wrongTopics?: Record<string, number>;
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
    };
  });
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

function getLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function registerTrainingDay(userId: string) {
  const db = getFirebaseDb();
  const userRef = doc(db, "users", userId);
  const snapshot = await getDoc(userRef);
  const userData = snapshot.data() as
    | { streakCount?: number; streakLastTrainingDate?: string | null }
    | undefined;

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

import type { DemoResultItem, SessionTypeLabel } from "@/lib/results";
import { getLocalDateKey } from "@/lib/results";
import { computeCumulativePerformance } from "@/lib/scoring/cumulative-score";
import type { UserProfile } from "@/hooks/use-user-profile";

const YEISI_TOPIC_STATS: Record<string, { correct: number; wrong: number }> = {
  Cardiología: { correct: 28, wrong: 9 },
  "Medicina Interna": { correct: 24, wrong: 11 },
  Semiología: { correct: 18, wrong: 14 },
  Pediatría: { correct: 15, wrong: 12 },
  Ginecología: { correct: 22, wrong: 7 },
  Epidemiología: { correct: 12, wrong: 10 },
  Urgencias: { correct: 19, wrong: 8 },
};

const YEISI_SESSION_SCORES: Array<{
  daysAgo: number;
  score: number;
  correct: number;
  wrong: number;
  sessionType: SessionTypeLabel;
  wrongTopics: Record<string, number>;
}> = [
  {
    daysAgo: 14,
    score: 58,
    correct: 7,
    wrong: 5,
    sessionType: "diagnostico",
    wrongTopics: { Semiología: 2, Epidemiología: 2, Pediatría: 1 },
  },
  {
    daysAgo: 12,
    score: 61,
    correct: 11,
    wrong: 7,
    sessionType: "training",
    wrongTopics: { Semiología: 3, Pediatría: 2, "Medicina Interna": 2 },
  },
  {
    daysAgo: 10,
    score: 64,
    correct: 14,
    wrong: 8,
    sessionType: "training",
    wrongTopics: { Epidemiología: 3, Semiología: 2, Urgencias: 2 },
  },
  {
    daysAgo: 8,
    score: 67,
    correct: 12,
    wrong: 6,
    sessionType: "simulacro",
    wrongTopics: { Pediatría: 2, "Medicina Interna": 2, Semiología: 2 },
  },
  {
    daysAgo: 6,
    score: 70,
    correct: 14,
    wrong: 6,
    sessionType: "training",
    wrongTopics: { Epidemiología: 2, Ginecología: 2, Semiología: 2 },
  },
  {
    daysAgo: 4,
    score: 72,
    correct: 18,
    wrong: 7,
    sessionType: "training",
    wrongTopics: { Semiología: 3, Pediatría: 2, Urgencias: 2 },
  },
  {
    daysAgo: 2,
    score: 75,
    correct: 15,
    wrong: 5,
    sessionType: "daily-pill",
    wrongTopics: { "Medicina Interna": 2, Epidemiología: 2, Semiología: 1 },
  },
  {
    daysAgo: 0,
    score: 78,
    correct: 14,
    wrong: 4,
    sessionType: "training",
    wrongTopics: { Pediatría: 2, Semiología: 1, Epidemiología: 1 },
  },
];

function buildSessionDate(daysAgo: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(18, 30, 0, 0);
  return date;
}

function formatResultLabel(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

export function getDemoTrainingProfilePatch(): Partial<UserProfile> {
  const cumulative = computeCumulativePerformance(YEISI_TOPIC_STATS);
  const todayKey = getLocalDateKey(new Date());
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return {
    goalSpecialty: "Medicina Interna",
    attemptedExam: true,
    usedCourses: true,
    onboardingCompleted: true,
    streakCount: 5,
    streakLastTrainingDate: getLocalDateKey(yesterday),
    attemptsCount: YEISI_SESSION_SCORES.length,
    topicStats: YEISI_TOPIC_STATS,
    cumulativeScore: cumulative.scorePercentage,
    lastScore: cumulative.scorePercentage,
    lastSessionScore: 78,
    totalCorrectAnswers: cumulative.totalCorrect,
    totalQuestionsAnswered: cumulative.totalQuestions,
    avgResponseTime: 42,
    strengths: ["Cardiología", "Ginecología", "Urgencias"],
    weaknesses: ["Semiología", "Pediatría", "Epidemiología"],
  };
}

export function buildDemoTrainingResults(): DemoResultItem[] {
  return YEISI_SESSION_SCORES.map((session, index) => {
    const date = buildSessionDate(session.daysAgo);
    return {
      id: `demo-yeisi-${index}`,
      scorePercentage: session.score,
      correctAnswers: session.correct,
      wrongAnswers: session.wrong,
      wrongTopics: session.wrongTopics,
      fechaIso: date.toISOString(),
      fechaLabel: formatResultLabel(date),
      sessionType: session.sessionType,
    };
  }).sort(
    (a, b) => new Date(b.fechaIso!).getTime() - new Date(a.fechaIso!).getTime(),
  );
}

const DEMO_TRAINING_EMAILS = new Set(["yeisi@gmail.com"]);

export function isDemoTrainingEmail(email: string | null | undefined): boolean {
  return DEMO_TRAINING_EMAILS.has(email?.trim().toLowerCase() ?? "");
}

export function getDemoTrainingResultsIfEligible(
  email: string | null | undefined,
): DemoResultItem[] {
  if (!isDemoTrainingEmail(email)) return [];
  return buildDemoTrainingResults();
}

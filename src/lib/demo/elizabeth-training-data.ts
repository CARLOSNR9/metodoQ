import type { DemoResultItem, SessionTypeLabel } from "@/lib/results";
import { getLocalDateKey } from "@/lib/results";
import { computeCumulativePerformance } from "@/lib/scoring/cumulative-score";
import type { UserProfile } from "@/hooks/use-user-profile";

/** Ejes del examen UCC Pasto — alineados al radar del blueprint. */
const ELIZABETH_TOPIC_STATS: Record<string, { correct: number; wrong: number }> = {
  "Ciencias Clínicas": { correct: 42, wrong: 13 },
  Epidemiología: { correct: 16, wrong: 18 },
  "Res. 3280": { correct: 6, wrong: 10 },
  "Lectura Crítica": { correct: 9, wrong: 6 },
};

const ELIZABETH_SESSION_SCORES: Array<{
  daysAgo: number;
  score: number;
  correct: number;
  wrong: number;
  sessionType: SessionTypeLabel;
  wrongTopics: Record<string, number>;
}> = [
  {
    daysAgo: 12,
    score: 60,
    correct: 6,
    wrong: 4,
    sessionType: "diagnostico",
    wrongTopics: { Epidemiología: 2, "Res. 3280": 2 },
  },
  {
    daysAgo: 10,
    score: 63,
    correct: 11,
    wrong: 7,
    sessionType: "training",
    wrongTopics: { Epidemiología: 3, "Res. 3280": 2, "Lectura Crítica": 2 },
  },
  {
    daysAgo: 8,
    score: 66,
    correct: 13,
    wrong: 7,
    sessionType: "training",
    wrongTopics: { Epidemiología: 3, "Res. 3280": 2, "Ciencias Clínicas": 2 },
  },
  {
    daysAgo: 6,
    score: 68,
    correct: 12,
    wrong: 6,
    sessionType: "simulacro",
    wrongTopics: { Epidemiología: 2, "Res. 3280": 2, "Ciencias Clínicas": 2 },
  },
  {
    daysAgo: 4,
    score: 71,
    correct: 14,
    wrong: 6,
    sessionType: "training",
    wrongTopics: { Epidemiología: 2, "Res. 3280": 2, "Lectura Crítica": 2 },
  },
  {
    daysAgo: 2,
    score: 74,
    correct: 15,
    wrong: 5,
    sessionType: "daily-pill",
    wrongTopics: { "Res. 3280": 2, Epidemiología: 2, "Ciencias Clínicas": 1 },
  },
  {
    daysAgo: 0,
    score: 76,
    correct: 14,
    wrong: 4,
    sessionType: "training",
    wrongTopics: { Epidemiología: 2, "Res. 3280": 1, "Lectura Crítica": 1 },
  },
];

function buildSessionDate(daysAgo: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(19, 0, 0, 0);
  return date;
}

function formatResultLabel(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

export function getElizabethTrainingProfilePatch(): Partial<UserProfile> {
  const cumulative = computeCumulativePerformance(ELIZABETH_TOPIC_STATS);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return {
    goalSpecialty: "Medicina Interna",
    attemptedExam: true,
    usedCourses: false,
    onboardingCompleted: true,
    streakCount: 6,
    streakLastTrainingDate: getLocalDateKey(yesterday),
    attemptsCount: ELIZABETH_SESSION_SCORES.length,
    topicStats: ELIZABETH_TOPIC_STATS,
    cumulativeScore: cumulative.scorePercentage,
    lastScore: cumulative.scorePercentage,
    lastSessionScore: 76,
    totalCorrectAnswers: cumulative.totalCorrect,
    totalQuestionsAnswered: cumulative.totalQuestions,
    avgResponseTime: 98,
    strengths: ["Ciencias Clínicas", "Lectura Crítica"],
    weaknesses: ["Epidemiología", "Res. 3280"],
  };
}

export function buildElizabethTrainingResults(): DemoResultItem[] {
  return ELIZABETH_SESSION_SCORES.map((session, index) => {
    const date = buildSessionDate(session.daysAgo);
    return {
      id: `demo-elizabeth-${index}`,
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

export const ELIZABETH_EMAIL = "elizabethdbh@gmail.com";

/** Cuentas de demo / ventas UCC Pasto (Elizabeth). */
const ELIZABETH_DEMO_EMAILS = new Set([ELIZABETH_EMAIL, "eliza@gmail.com"]);

export function isElizabethDemoEmail(email: string | null | undefined): boolean {
  return ELIZABETH_DEMO_EMAILS.has(email?.trim().toLowerCase() ?? "");
}

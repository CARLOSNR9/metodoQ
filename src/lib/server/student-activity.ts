import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import {
  resolveActivityStatus,
  type ActivityStatus,
} from "@/lib/activity-status";
import {
  buildLastNDays,
  countStudiedDays,
  type DailyHabitDay,
} from "@/lib/training/daily-activity";
import { getLocalDateKey } from "@/lib/results";
import type { DemoResultItem, SessionTypeLabel } from "@/lib/results";
import { PRO_DAILY_MIN_QUESTIONS } from "@/lib/plans/limits";

export type AdminStudentSession = {
  id: string;
  sessionType: SessionTypeLabel;
  sessionLabel: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  fechaLabel: string;
  fechaIso: string | null;
};

export type AdminStudentActivity = {
  uid: string;
  email: string;
  displayName: string;
  plan: string;
  role: string;
  goalUniversity: string | null;
  goalSpecialty: string | null;
  planStartedAt: string | null;
  planExpiresAt: string | null;
  createdAt: string | null;
  lastActiveAt: string | null;
  streakCount: number;
  streakLastTrainingDate: string | null;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  cumulativeScore: number | null;
  attemptsCount: number;
  avgResponseTime: number;
  strengths: string[];
  weaknesses: string[];
  activityStatus: ActivityStatus;
  studiedDaysLast30: number;
  questionsLast7Days: number;
  habitDays: DailyHabitDay[];
  recentSessions: AdminStudentSession[];
};

const SESSION_LABELS: Record<SessionTypeLabel, string> = {
  training: "Entrenamiento",
  diagnostico: "Diagnóstico",
  simulacro: "Simulacro",
  "daily-pill": "Píldora diaria",
  repaso: "Refuerzo",
  "repaso-cierre": "Examen de cierre",
};

function toIso(value: unknown): string | null {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (typeof (value as { toDate?: () => Date }).toDate === "function") {
    return (value as { toDate: () => Date }).toDate().toISOString();
  }
  return null;
}

function mapAdminResult(
  id: string,
  data: Record<string, unknown>,
): DemoResultItem {
  const fecha = data.fecha as { toDate?: () => Date } | undefined;
  const date = fecha?.toDate ? fecha.toDate() : null;

  return {
    id,
    scorePercentage: Number(data.scorePercentage ?? 0),
    correctAnswers: Number(data.correctAnswers ?? 0),
    wrongAnswers: Number(data.wrongAnswers ?? 0),
    wrongTopics: (data.wrongTopics as Record<string, number>) ?? {},
    fechaDateKey: (data.fechaDateKey as string) ?? null,
    fechaIso: date ? date.toISOString() : null,
    fechaLabel: date
      ? new Intl.DateTimeFormat("es-CO", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(date)
      : "Fecha no disponible",
    sessionType: (data.sessionType as SessionTypeLabel) ?? "training",
    uccBlockKind: (data.uccBlockKind as DemoResultItem["uccBlockKind"]) ?? null,
  };
}

function countQuestionsInLastNDays(
  results: DemoResultItem[],
  days: number,
): number {
  const today = new Date();
  const from = new Date(today);
  from.setDate(from.getDate() - (days - 1));
  const fromKey = getLocalDateKey(from);

  let total = 0;
  for (const result of results) {
    const key = result.fechaDateKey ?? (result.fechaIso ? getLocalDateKey(new Date(result.fechaIso)) : null);
    if (!key || key < fromKey) continue;
    total += result.correctAnswers + result.wrongAnswers;
  }
  return total;
}

export async function getAdminStudentActivity(
  uid: string,
): Promise<AdminStudentActivity | null> {
  const db = getFirebaseAdminDb();
  const userSnap = await db.collection("users").doc(uid).get();
  if (!userSnap.exists) return null;

  const data = userSnap.data() ?? {};
  const resultsSnap = await db
    .collection("results")
    .where("userId", "==", uid)
    .get();

  const results = resultsSnap.docs
    .map((doc) => mapAdminResult(doc.id, doc.data()))
    .sort(
      (a, b) =>
        new Date(b.fechaIso ?? 0).getTime() - new Date(a.fechaIso ?? 0).getTime(),
    );

  const planStartedAt = data.planStartedAt ? String(data.planStartedAt) : null;
  const lastActiveAt = toIso(data.lastActiveAt);
  const habitDays = buildLastNDays({
    results,
    planStartedAt,
    n: 14,
    minQuestions: PRO_DAILY_MIN_QUESTIONS,
    streakMinimum: PRO_DAILY_MIN_QUESTIONS,
  });
  const last30Days = buildLastNDays({
    results,
    planStartedAt,
    n: 30,
    minQuestions: PRO_DAILY_MIN_QUESTIONS,
    streakMinimum: PRO_DAILY_MIN_QUESTIONS,
  });

  const recentSessions: AdminStudentSession[] = results.slice(0, 20).map((result) => ({
    id: result.id,
    sessionType: result.sessionType,
    sessionLabel: SESSION_LABELS[result.sessionType] ?? "Entrenamiento",
    scorePercentage: result.scorePercentage,
    correctAnswers: result.correctAnswers,
    wrongAnswers: result.wrongAnswers,
    fechaLabel: result.fechaLabel,
    fechaIso: result.fechaIso,
  }));

  return {
    uid,
    email: String(data.email ?? ""),
    displayName: String(data.displayName ?? "—"),
    plan: String(data.plan ?? "FREE"),
    role: String(data.role ?? "student"),
    goalUniversity: data.goalUniversity ? String(data.goalUniversity) : null,
    goalSpecialty: data.goalSpecialty ? String(data.goalSpecialty) : null,
    planStartedAt,
    planExpiresAt: data.planExpiresAt ? String(data.planExpiresAt) : null,
    createdAt: toIso(data.createdAt),
    lastActiveAt,
    streakCount: Number(data.streakCount ?? 0),
    streakLastTrainingDate: data.streakLastTrainingDate
      ? String(data.streakLastTrainingDate)
      : null,
    totalQuestionsAnswered: Number(data.totalQuestionsAnswered ?? 0),
    totalCorrectAnswers: Number(data.totalCorrectAnswers ?? 0),
    cumulativeScore:
      typeof data.cumulativeScore === "number" ? data.cumulativeScore : null,
    attemptsCount: Number(data.attemptsCount ?? 0),
    avgResponseTime: Number(data.avgResponseTime ?? 0),
    strengths: Array.isArray(data.strengths) ? (data.strengths as string[]) : [],
    weaknesses: Array.isArray(data.weaknesses) ? (data.weaknesses as string[]) : [],
    activityStatus: resolveActivityStatus(lastActiveAt),
    studiedDaysLast30: countStudiedDays(last30Days),
    questionsLast7Days: countQuestionsInLastNDays(results, 7),
    habitDays,
    recentSessions,
  };
}

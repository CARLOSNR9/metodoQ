import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey, getUserDemoResults } from "@/lib/results";
import { getTrainingLimits } from "@/lib/plans/limits";
import { normalizeUserPlan } from "@/lib/plans/access";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import { getTodayQuestionsCount } from "@/lib/training/daily-activity";
import {
  canStartUccMiBonus,
  UCC_MI_DAILY_BONUS_MAX,
} from "@/lib/training/ucc-mi-daily-plan";

type DailyUsage = {
  date: string;
  sessions: number;
};

type MonthlyUsage = {
  month: string;
  simulacros: number;
};

type UserUsageDoc = {
  daily?: DailyUsage;
  monthly?: MonthlyUsage;
};

function getMonthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

export async function getUserUsage(userId: string) {
  const ref = doc(getFirebaseDb(), "users", userId);
  const snap = await getDoc(ref);
  const raw = snap.data() as { usage?: UserUsageDoc } | undefined;
  const data = raw?.usage ?? {};
  const today = getLocalDateKey(new Date());
  const month = getMonthKey(new Date());

  const daily =
    data.daily?.date === today ? data.daily : { date: today, sessions: 0 };
  const monthly =
    data.monthly?.month === month ? data.monthly : { month, simulacros: 0 };

  return { daily, monthly };
}

export type UsageBlockMeta = {
  dayClosed?: boolean;
  bonusAvailable?: boolean;
};

export type UsageCheckResult =
  | { allowed: true }
  | ({
      allowed: false;
      reason: string;
      upgradeHref?: string;
      dayClosed?: boolean;
      bonusAvailable?: boolean;
    });

export type SessionCheckOptions = {
  isBonusMode?: boolean;
  profile?: LearningTrackProfile | null;
  planStartedAt?: string | null;
};

export async function checkCanStartSession(
  userId: string,
  plan: string | null | undefined,
  sessionType: "training" | "diagnostico" | "simulacro",
  options?: SessionCheckOptions,
): Promise<UsageCheckResult> {
  const normalized = normalizeUserPlan(plan ?? undefined);
  const limits = getTrainingLimits(normalized);
  const goal = getDailyGoalForProfile(options?.profile, options?.planStartedAt);
  const { daily, monthly } = await getUserUsage(userId);

  if (sessionType === "simulacro") {
    if (limits.simulacrosPerMonth === 0) {
      return {
        allowed: false,
        reason: "Los simulacros completos están disponibles en los planes Básico y Pro.",
        upgradeHref: "/dashboard/planes",
      };
    }
    if (monthly.simulacros >= limits.simulacrosPerMonth) {
      return {
        allowed: false,
        reason: `Ya usaste tus ${limits.simulacrosPerMonth} simulacro(s) de este mes.`,
        upgradeHref: "/dashboard/planes",
      };
    }
    return { allowed: true };
  }

  if (sessionType === "diagnostico") {
    return { allowed: true };
  }

  const sessionsLimit = goal.isUccMiTrack ? goal.sessionsPerDay : limits.sessionsPerDay;

  if (goal.isUccMiTrack) {
    const results = await getUserDemoResults(userId);
    const todayQuestions = getTodayQuestionsCount(results);
    const bonusAnswered = Math.max(0, todayQuestions - goal.dailyTarget);

    if (options?.isBonusMode) {
      if (todayQuestions < goal.dailyTarget) {
        return {
          allowed: false,
          reason: "Primero completa tu misión del día antes de usar preguntas bonus.",
        };
      }
      if (bonusAnswered >= goal.bonusMax) {
        return {
          allowed: false,
          reason: `Ya usaste tus ${UCC_MI_DAILY_BONUS_MAX} preguntas bonus de hoy. Descansa hasta mañana.`,
          dayClosed: true,
        };
      }
    } else if (todayQuestions >= goal.dailyTarget) {
      const bonusAvailable = canStartUccMiBonus(
        todayQuestions,
        goal.dailyTarget,
        bonusAnswered,
      );
      return {
        allowed: false,
        reason: `Completaste tu misión de ${goal.dailyTarget} preguntas. Descansa; mañana te espera repaso espaciado.`,
        dayClosed: true,
        bonusAvailable,
      };
    }
  }

  if (daily.sessions >= sessionsLimit) {
    return {
      allowed: false,
      reason: goal.isUccMiTrack
        ? `Completaste tus ${sessionsLimit} bloques de hoy. Cierra el día o retoma mañana.`
        : `Alcanzaste el límite de ${sessionsLimit} entrenamiento(s) por hoy en tu plan.`,
      upgradeHref: goal.isUccMiTrack ? undefined : "/dashboard/planes",
    };
  }

  return { allowed: true };
}

export async function recordSessionStart(
  userId: string,
  sessionType: "training" | "diagnostico" | "simulacro",
) {
  const ref = doc(getFirebaseDb(), "users", userId);
  const { daily, monthly } = await getUserUsage(userId);

  const nextDaily = { ...daily, sessions: daily.sessions + 1 };
  const nextMonthly =
    sessionType === "simulacro"
      ? { ...monthly, simulacros: monthly.simulacros + 1 }
      : monthly;

  await setDoc(
    ref,
    {
      usage: {
        daily: nextDaily,
        monthly: nextMonthly,
      },
    },
    { merge: true },
  );
}

export async function getTodayTrainingStatus(
  userId: string,
  profile: LearningTrackProfile | null | undefined,
  planStartedAt?: string | null,
) {
  const goal = getDailyGoalForProfile(profile, planStartedAt);
  const results = await getUserDemoResults(userId);
  const todayQuestions = getTodayQuestionsCount(results);
  const bonusAnswered = Math.max(0, todayQuestions - goal.dailyTarget);
  const dayClosed = goal.isUccMiTrack && todayQuestions >= goal.dailyTarget;
  const bonusAvailable =
    goal.isUccMiTrack &&
    canStartUccMiBonus(todayQuestions, goal.dailyTarget, bonusAnswered);

  return {
    goal,
    todayQuestions,
    bonusAnswered,
    dayClosed,
    bonusAvailable,
    missionComplete: todayQuestions >= goal.dailyTarget,
  };
}

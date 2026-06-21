import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey, getUserDemoResults } from "@/lib/results";
import { getTrainingLimits } from "@/lib/plans/limits";
import { normalizeUserPlan } from "@/lib/plans/access";
import { getPlanUpgradeCta } from "@/lib/plans/upgrade-cta";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import {
  aggregateTodayUccBlockQuestions,
  getTodayMissionQuestionsCount,
} from "@/lib/training/daily-activity";
import {
  buildUccMiDailyBlocks,
  canStartUccBlock,
  canStartUccMiBonus,
  computeUccDailyMissionState,
  UCC_MI_DAILY_BONUS_MAX,
  type UccMiBlockKind,
} from "@/lib/training/ucc-mi-daily-plan";
import { getRepasoCierreStatus } from "@/lib/training/repaso-cierre";

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

/** Resetea sesiones fantasma: clics en "Comenzar" sin preguntas guardadas hoy. */
async function reconcileOrphanedDailySessions(
  userId: string,
  todayQuestions: number,
  daily: DailyUsage,
): Promise<DailyUsage> {
  if (todayQuestions > 0 || daily.sessions === 0) {
    return daily;
  }

  const resetDaily: DailyUsage = { date: daily.date, sessions: 0 };
  const ref = doc(getFirebaseDb(), "users", userId);
  await setDoc(ref, { usage: { daily: resetDaily } }, { merge: true });
  return resetDaily;
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
  /** La píldora diaria (1 pregunta) no cuenta contra la misión ni el cierre del día. */
  isDailyPill?: boolean;
  /** Repaso libre de fallas del día; no cuenta para la misión ni respeta cierre del día. */
  isRepasoPractice?: boolean;
  /** Examen final del día solo con preguntas fallidas pendientes. */
  isRepasoCierre?: boolean;
  profile?: LearningTrackProfile | null;
  planStartedAt?: string | null;
  uccBlockKind?: UccMiBlockKind | null;
};

export async function checkCanStartSession(
  userId: string,
  plan: string | null | undefined,
  sessionType: "training" | "diagnostico" | "simulacro" | "convocatoria",
  options?: SessionCheckOptions,
): Promise<UsageCheckResult> {
  if (sessionType === "convocatoria") {
    return { allowed: true };
  }

  const normalized = normalizeUserPlan(plan ?? undefined);
  const limits = getTrainingLimits(normalized);
  const goal = getDailyGoalForProfile(options?.profile, options?.planStartedAt);
  let { daily, monthly } = await getUserUsage(userId);

  if (sessionType === "simulacro") {
    if (limits.simulacrosPerMonth === 0) {
      const upgradeCta = getPlanUpgradeCta(normalized);
      return {
        allowed: false,
        reason: "Los simulacros completos están disponibles en los planes Básico y Pro.",
        ...(upgradeCta ? { upgradeHref: upgradeCta.href } : {}),
      };
    }
    if (monthly.simulacros >= limits.simulacrosPerMonth) {
      const upgradeCta = getPlanUpgradeCta(normalized);
      return {
        allowed: false,
        reason: `Ya usaste tus ${limits.simulacrosPerMonth} simulacro(s) de este mes.`,
        ...(upgradeCta ? { upgradeHref: upgradeCta.href } : {}),
      };
    }
    return { allowed: true };
  }

  if (sessionType === "diagnostico" || options?.isDailyPill) {
    return { allowed: true };
  }

  if (options?.isRepasoPractice) {
    return { allowed: true };
  }

  if (options?.isRepasoCierre) {
    const status = await getRepasoCierreStatus(
      userId,
      options.profile,
      options.planStartedAt,
    );
    if (!status.cierreAvailable) {
      return {
        allowed: false,
        reason:
          status.cierreLockedReason ??
          "El examen de cierre no está disponible en este momento.",
        dayClosed: status.missionComplete,
      };
    }
    return { allowed: true };
  }

  const sessionsLimit = goal.isUccMiTrack ? goal.sessionsPerDay : limits.sessionsPerDay;
  const needsQuestionCount = goal.isUccMiTrack || daily.sessions > 0;
  let todayQuestions = 0;
  const results = needsQuestionCount ? await getUserDemoResults(userId) : [];

  if (needsQuestionCount) {
    todayQuestions = getTodayMissionQuestionsCount(results);
    if (daily.sessions > 0 && todayQuestions === 0) {
      daily = await reconcileOrphanedDailySessions(userId, todayQuestions, daily);
    }
  }

  if (goal.isUccMiTrack) {
    const blocks = buildUccMiDailyBlocks(options?.planStartedAt);
    const blockCounts = aggregateTodayUccBlockQuestions(results);
    const mission = computeUccDailyMissionState(blocks, blockCounts);
    const bonusAnswered = mission.missionComplete
      ? Math.max(0, todayQuestions - goal.dailyTarget)
      : 0;

    if (
      options?.uccBlockKind &&
      !options.isBonusMode &&
      !options.isRepasoPractice &&
      !options.isRepasoCierre
    ) {
      const blockGate = canStartUccBlock(blocks, blockCounts, options.uccBlockKind);
      if (!blockGate.allowed) {
        return blockGate;
      }
    }

    if (options?.isBonusMode) {
      if (!mission.missionComplete) {
        return {
          allowed: false,
          reason: "Primero completa los 3 bloques de hoy antes de usar preguntas bonus.",
        };
      }
      if (bonusAnswered >= goal.bonusMax) {
        return {
          allowed: false,
          reason: `Ya usaste tus ${UCC_MI_DAILY_BONUS_MAX} preguntas bonus de hoy. Descansa hasta mañana.`,
          dayClosed: true,
        };
      }
      return { allowed: true };
    }

    if (mission.missionComplete) {
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

    return { allowed: true };
  }

  if (daily.sessions >= sessionsLimit) {
    return {
      allowed: false,
      reason: `Alcanzaste el límite de ${sessionsLimit} entrenamiento(s) por hoy en tu plan.`,
    };
  }

  return { allowed: true };
}

export async function recordSessionStart(
  userId: string,
  sessionType: "training" | "diagnostico" | "simulacro",
) {
  if (sessionType === "diagnostico") {
    return;
  }

  const ref = doc(getFirebaseDb(), "users", userId);
  const { daily, monthly } = await getUserUsage(userId);

  const nextDaily =
    sessionType === "training"
      ? { ...daily, sessions: daily.sessions + 1 }
      : daily;
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
  const todayQuestions = getTodayMissionQuestionsCount(results);
  const { daily } = await getUserUsage(userId);

  if (daily.sessions > 0 && todayQuestions === 0) {
    await reconcileOrphanedDailySessions(userId, todayQuestions, daily);
  }

  let structuredQuestions = todayQuestions;
  let missionComplete = todayQuestions >= goal.dailyTarget;
  let bonusAnswered = Math.max(0, todayQuestions - goal.dailyTarget);
  let dayClosed = goal.isUccMiTrack && missionComplete;

  if (goal.isUccMiTrack) {
    const blocks = buildUccMiDailyBlocks(planStartedAt);
    const blockCounts = aggregateTodayUccBlockQuestions(results);
    const mission = computeUccDailyMissionState(blocks, blockCounts);
    structuredQuestions = mission.structuredQuestionsDone;
    missionComplete = mission.missionComplete;
    bonusAnswered = missionComplete
      ? Math.max(0, todayQuestions - goal.dailyTarget)
      : 0;
    dayClosed = missionComplete;
  }

  const bonusAvailable =
    goal.isUccMiTrack &&
    canStartUccMiBonus(todayQuestions, goal.dailyTarget, bonusAnswered);

  return {
    goal,
    todayQuestions: structuredQuestions,
    totalQuestionsToday: todayQuestions,
    bonusAnswered,
    dayClosed,
    bonusAvailable,
    missionComplete,
  };
}

import type { DemoResultItem } from "@/lib/results";
import { hasProFeatures } from "@/lib/plans/access";
import { isUccPastoUniversity } from "@/lib/diagnostic/university-match";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import { getTodayQuestionsCount } from "@/lib/training/daily-activity";
import {
  buildUccSimulacroHref,
  buildWeeklySimulacroStatus,
} from "@/lib/training/ucc-weekly-simulacro";

export type UccCoachingProfile = {
  plan?: string | null;
  goalUniversity?: string | null;
  goalSpecialty?: string | null;
  planStartedAt?: string | null;
};

export type UccCoachingStatus = {
  isUccMiPro: boolean;
  dailyTarget: number;
  streakMinimum: number;
  todayQuestions: number;
  dailyMissionComplete: boolean;
  dailyMissionPending: boolean;
  simulacroStatus: ReturnType<typeof buildWeeklySimulacroStatus>;
  simulacroHref: string | null;
  simulacroDue: boolean;
  simulacroOverdue: boolean;
};

export function isUccMiProProfile(profile: UccCoachingProfile | null | undefined): boolean {
  if (!profile || !hasProFeatures(profile.plan)) return false;
  return isUccPastoUniversity(profile.goalUniversity);
}

export function buildUccCoachingStatus(options: {
  profile: UccCoachingProfile | null | undefined;
  results: DemoResultItem[];
  today?: Date;
}): UccCoachingStatus | null {
  const { profile, results } = options;
  if (!isUccMiProProfile(profile)) return null;

  const goal = getDailyGoalForProfile(profile, profile?.planStartedAt);
  const todayQuestions = getTodayQuestionsCount(results);
  const simulacroStatus = buildWeeklySimulacroStatus({
    results,
    planStartedAt: profile?.planStartedAt ?? null,
    today: options.today,
  });

  const dailyMissionComplete = todayQuestions >= goal.dailyTarget;
  const simulacroHref = simulacroStatus
    ? buildUccSimulacroHref(simulacroStatus.config)
    : null;

  const simulacroDue =
    Boolean(simulacroStatus?.isDue) &&
    (simulacroStatus?.simulacrosCompleted ?? 0) <
      (simulacroStatus?.simulacrosRequired ?? 0);

  const simulacroOverdue =
    Boolean(simulacroStatus?.isOverdue) &&
    (simulacroStatus?.simulacrosCompleted ?? 0) <
      (simulacroStatus?.simulacrosRequired ?? 0);

  return {
    isUccMiPro: true,
    dailyTarget: goal.dailyTarget,
    streakMinimum: goal.streakMinimum,
    todayQuestions,
    dailyMissionComplete,
    dailyMissionPending: !dailyMissionComplete,
    simulacroStatus,
    simulacroHref,
    simulacroDue,
    simulacroOverdue,
  };
}

export function shouldSendDailyMissionEmail(
  status: UccCoachingStatus,
  lastSentDate: string | null | undefined,
  todayKey: string,
): boolean {
  return status.dailyMissionPending && lastSentDate !== todayKey;
}

export function shouldSendSimulacroEmail(
  status: UccCoachingStatus,
  lastSentDate: string | null | undefined,
  todayKey: string,
): boolean {
  if (!status.simulacroStatus || status.simulacroStatus.simulacrosRequired === 0) {
    return false;
  }
  if (status.simulacroStatus.simulacrosCompleted >= status.simulacroStatus.simulacrosRequired) {
    return false;
  }
  return (status.simulacroDue || status.simulacroOverdue) && lastSentDate !== todayKey;
}

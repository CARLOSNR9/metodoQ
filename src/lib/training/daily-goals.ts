import { hasProFeatures } from "@/lib/plans/access";
import { PRO_DAILY_MIN_QUESTIONS } from "@/lib/plans/limits";
import {
  isUccPastoMedicinaInternaProUser,
  type LearningTrackProfile,
} from "@/lib/diagnostic/ucc-pasto-track";
import {
  getUccMiRampedDailyTarget,
  UCC_MI_DAILY_BONUS_MAX,
  UCC_MI_DAILY_STREAK_MIN,
  UCC_MI_SESSIONS_PER_DAY,
} from "@/lib/training/ucc-mi-daily-plan";

export type DailyGoalConfig = {
  dailyTarget: number;
  streakMinimum: number;
  bonusMax: number;
  sessionsPerDay: number;
  isUccMiTrack: boolean;
};

export function getDailyGoalForProfile(
  profile: LearningTrackProfile | null | undefined,
  planStartedAt?: string | null,
): DailyGoalConfig {
  if (isUccPastoMedicinaInternaProUser(profile)) {
    return {
      dailyTarget: getUccMiRampedDailyTarget(planStartedAt),
      streakMinimum: UCC_MI_DAILY_STREAK_MIN,
      bonusMax: UCC_MI_DAILY_BONUS_MAX,
      sessionsPerDay: UCC_MI_SESSIONS_PER_DAY,
      isUccMiTrack: true,
    };
  }

  if (hasProFeatures(profile?.plan)) {
    return {
      dailyTarget: PRO_DAILY_MIN_QUESTIONS,
      streakMinimum: PRO_DAILY_MIN_QUESTIONS,
      bonusMax: 0,
      sessionsPerDay: 999,
      isUccMiTrack: false,
    };
  }

  return {
    dailyTarget: PRO_DAILY_MIN_QUESTIONS,
    streakMinimum: PRO_DAILY_MIN_QUESTIONS,
    bonusMax: 0,
    sessionsPerDay: 2,
    isUccMiTrack: false,
  };
}

"use client";

import {
  useInterruptedExamDraft,
  InterruptedExamAlertView,
} from "./interrupted-exam-banner";
import {
  useSubscriptionExpirationAlert,
  SubscriptionExpirationAlertView,
} from "./subscription-expiration-alert";
import { useProStudyGapAlert, ProStudyGapAlertView } from "./pro-study-gap-banner";
import { getStreakReminderAlert, StreakReminderAlertView } from "./streak-reminder-banner";
import { useUccCoachingAlert, UccCoachingAlertView } from "./ucc-coaching-reminder-banner";
import type { UccCoachingProfile } from "@/lib/training/ucc-coaching-status";

type PriorityAlertBannerProps = {
  userId: string;
  planStartedAt?: string | null;
  streakCount: number;
  lastTrainingDate: string | null;
  dailyTarget: number;
  streakMinimum: number;
  trainHref: string;
  isPaidPlan: boolean;
  isUccMiPro: boolean;
  coachingProfile: UccCoachingProfile | null | undefined;
};

/**
 * Un estudiante Pro solía ver hasta 5 banners apilados a la vez. Aquí se
 * calculan todas las alertas candidatas pero solo se muestra la de mayor
 * prioridad, para no competir por atención con el resto del dashboard.
 */
export function PriorityAlertBanner({
  userId,
  planStartedAt,
  streakCount,
  lastTrainingDate,
  dailyTarget,
  streakMinimum,
  trainHref,
  isPaidPlan,
  isUccMiPro,
  coachingProfile,
}: PriorityAlertBannerProps) {
  const expiration = useSubscriptionExpirationAlert();
  const gap = useProStudyGapAlert(isPaidPlan, userId, planStartedAt);
  const examDraft = useInterruptedExamDraft(userId);
  const uccCoaching = useUccCoachingAlert(isUccMiPro, userId, coachingProfile, planStartedAt);
  const streak = getStreakReminderAlert({
    streakCount,
    lastTrainingDate,
    dailyTarget,
    streakMinimum,
    trainHref,
  });

  if (expiration) return <SubscriptionExpirationAlertView {...expiration} />;
  if (gap) return <ProStudyGapAlertView {...gap} />;
  if (examDraft) return <InterruptedExamAlertView draft={examDraft} />;
  if (uccCoaching) return <UccCoachingAlertView {...uccCoaching} />;
  if (streak) return <StreakReminderAlertView {...streak} />;
  return null;
}

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserDemoResults } from "@/lib/results";
import {
  buildLastNDays,
  countConsecutiveInactiveDays,
  PRO_DAILY_MIN_QUESTIONS,
} from "@/lib/training/daily-activity";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";

const INACTIVITY_ALERT_DAYS = 2;
const LOOKBACK_DAYS = 14;

export type StudyGapInfo = {
  inactiveDays: number;
  dailyTarget: number;
  isUrgent: boolean;
};

export function useProStudyGapAlert(
  enabled: boolean,
  userId: string,
  planStartedAt?: string | null,
): StudyGapInfo | null {
  const [inactiveDays, setInactiveDays] = useState(0);
  const [dailyTarget, setDailyTarget] = useState(PRO_DAILY_MIN_QUESTIONS);
  const [isLoading, setIsLoading] = useState(!enabled ? false : true);

  useEffect(() => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const [results, userSnap] = await Promise.all([
          getUserDemoResults(userId),
          getDoc(doc(getFirebaseDb(), "users", userId)),
        ]);
        if (!mounted) return;

        const profile = (userSnap.data() as LearningTrackProfile | undefined) ?? {};
        const goal = getDailyGoalForProfile(profile, planStartedAt);
        setDailyTarget(goal.dailyTarget);

        const days = buildLastNDays({
          results,
          planStartedAt: planStartedAt ?? null,
          n: LOOKBACK_DAYS,
          minQuestions: goal.dailyTarget,
          streakMinimum: goal.streakMinimum,
        });
        // Hoy todavía está en curso: solo cuentan días ya cerrados. Así un
        // usuario nuevo no ve "llevas 2 días sin cumplir" el día que llega.
        setInactiveDays(
          countConsecutiveInactiveDays(days.filter((day) => day.status !== "today_pending")),
        );
      } catch (error) {
        console.error("No se pudo evaluar el hueco de estudio.", error);
        if (mounted) setInactiveDays(0);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [enabled, userId, planStartedAt]);

  const showAlert = useMemo(
    () => enabled && !isLoading && inactiveDays >= INACTIVITY_ALERT_DAYS,
    [enabled, inactiveDays, isLoading],
  );

  if (!showAlert) return null;

  return { inactiveDays, dailyTarget, isUrgent: inactiveDays >= 3 };
}

export function ProStudyGapAlertView({
  inactiveDays,
  dailyTarget,
  isUrgent,
  trainHref = "/dashboard/entrenar",
}: StudyGapInfo & { trainHref?: string }) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-2xl border px-4 py-3 sm:flex-row sm:items-center sm:justify-between ${
        isUrgent
          ? "border-rose-500/40 bg-rose-500/15"
          : "border-amber-500/35 bg-amber-500/10"
      }`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle
          className={`mt-0.5 h-5 w-5 shrink-0 ${isUrgent ? "text-rose-400" : "text-amber-400"}`}
        />
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {inactiveDays === 2
              ? `Llevas 2 días sin cumplir tu meta de ${dailyTarget} preguntas`
              : `Llevas ${inactiveDays} días sin cumplir tu meta diaria`}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            Tu plan Pro exige {dailyTarget} preguntas al día. Cierra hoy tu cuota para
            retomar el ritmo.
          </p>
        </div>
      </div>
      <Link
        href={trainHref}
        className={`inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl px-4 text-xs font-bold text-white transition ${
          isUrgent ? "bg-rose-600 hover:bg-rose-700" : "bg-amber-600 hover:bg-amber-700"
        }`}
      >
        Retomar ahora
      </Link>
    </div>
  );
}

type ProStudyGapBannerProps = {
  userId: string;
  planStartedAt?: string | null;
};

export function ProStudyGapBanner({ userId, planStartedAt }: ProStudyGapBannerProps) {
  const info = useProStudyGapAlert(true, userId, planStartedAt);
  if (!info) return null;
  return <ProStudyGapAlertView {...info} />;
}

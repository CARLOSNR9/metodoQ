"use client";

import Link from "next/link";
import { Flame } from "lucide-react";
import { getLocalDateKey } from "@/lib/results";
import { PRO_DAILY_MIN_QUESTIONS } from "@/lib/plans/limits";

type StreakReminderBannerProps = {
  streakCount: number;
  lastTrainingDate: string | null;
  dailyTarget?: number;
  streakMinimum?: number;
  trainHref?: string;
};

function daysSinceLastTraining(lastTrainingDate: string | null): number | null {
  if (!lastTrainingDate) return null;
  const [year, month, day] = lastTrainingDate.split("-").map(Number);
  const last = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  last.setHours(0, 0, 0, 0);
  return Math.round((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
}

export function StreakReminderBanner({
  streakCount,
  lastTrainingDate,
  dailyTarget = PRO_DAILY_MIN_QUESTIONS,
  streakMinimum = PRO_DAILY_MIN_QUESTIONS,
  trainHref = "/dashboard/entrenar",
}: StreakReminderBannerProps) {
  if (streakCount <= 0) return null;
  if (lastTrainingDate === getLocalDateKey(new Date())) return null;

  const daysSince = daysSinceLastTraining(lastTrainingDate);
  if (daysSince === null || daysSince >= 2) return null;

  const targetLabel =
    streakMinimum < dailyTarget
      ? `${streakMinimum} preg (racha) · meta ${dailyTarget}`
      : `${dailyTarget} preguntas`;

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <Flame className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" fill="currentColor" />
        <div>
          <p className="text-sm font-semibold text-slate-900">
            No pierdas tu racha de {streakCount} día{streakCount === 1 ? "" : "s"}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            Completa hoy tu meta de {targetLabel} para mantener la racha.
          </p>
        </div>
      </div>
      <Link
        href={trainHref}
        className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl border border-orange-400/40 bg-orange-500/20 px-4 text-xs font-bold text-orange-100 transition hover:bg-orange-500/30"
      >
        Entrenar ahora
      </Link>
    </div>
  );
}

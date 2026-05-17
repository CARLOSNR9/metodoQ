"use client";

import Link from "next/link";
import { Flame } from "lucide-react";

type StreakReminderBannerProps = {
  streakCount: number;
  lastTrainingDate: string | null;
};

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function StreakReminderBanner({
  streakCount,
  lastTrainingDate,
}: StreakReminderBannerProps) {
  if (streakCount <= 0) return null;
  if (lastTrainingDate === todayKey()) return null;

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <Flame className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" fill="currentColor" />
        <div>
          <p className="text-sm font-semibold text-white">
            No pierdas tu racha de {streakCount} día{streakCount === 1 ? "" : "s"}
          </p>
          <p className="mt-0.5 text-xs text-mq-muted">
            Entrena hoy con al menos una sesión para mantener tu constancia.
          </p>
        </div>
      </div>
      <Link
        href="/dashboard/entrenar"
        className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl border border-orange-400/40 bg-orange-500/20 px-4 text-xs font-bold text-orange-100 transition hover:bg-orange-500/30"
      >
        Entrenar ahora
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { getUserDemoResults } from "@/lib/results";
import {
  buildLastNDays,
  countConsecutiveInactiveDays,
  PRO_DAILY_MIN_QUESTIONS,
} from "@/lib/training/daily-activity";

const INACTIVITY_ALERT_DAYS = 2;
const LOOKBACK_DAYS = 14;

type ProStudyGapBannerProps = {
  userId: string;
  planStartedAt?: string | null;
};

export function ProStudyGapBanner({ userId, planStartedAt }: ProStudyGapBannerProps) {
  const [inactiveDays, setInactiveDays] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const results = await getUserDemoResults(userId);
        if (!mounted) return;
        const days = buildLastNDays({
          results,
          planStartedAt: planStartedAt ?? null,
          n: LOOKBACK_DAYS,
        });
        setInactiveDays(countConsecutiveInactiveDays(days));
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
  }, [userId, planStartedAt]);

  const showAlert = useMemo(
    () => !isLoading && inactiveDays >= INACTIVITY_ALERT_DAYS,
    [inactiveDays, isLoading],
  );

  if (!showAlert) return null;

  const isUrgent = inactiveDays >= 3;

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
          <p className="text-sm font-semibold text-white">
            {inactiveDays === 2
              ? `Llevas 2 días sin cumplir tu meta de ${PRO_DAILY_MIN_QUESTIONS} preguntas`
              : `Llevas ${inactiveDays} días sin cumplir tu meta diaria`}
          </p>
          <p className="mt-0.5 text-xs text-mq-muted">
            Tu plan Pro exige {PRO_DAILY_MIN_QUESTIONS} preguntas al día. Cierra hoy tu cuota para
            retomar el ritmo.
          </p>
        </div>
      </div>
      <Link
        href="/dashboard/entrenar"
        className={`inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl border px-4 text-xs font-bold transition ${
          isUrgent
            ? "border-rose-400/40 bg-rose-500/25 text-rose-50 hover:bg-rose-500/35"
            : "border-amber-400/40 bg-amber-500/20 text-amber-100 hover:bg-amber-500/30"
        }`}
      >
        Retomar ahora
      </Link>
    </div>
  );
}

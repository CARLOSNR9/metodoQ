"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Target, Timer } from "lucide-react";
import { getUserDemoResults } from "@/lib/results";
import { buildUccCoachingStatus } from "@/lib/training/ucc-coaching-status";
import type { UccCoachingProfile } from "@/lib/training/ucc-coaching-status";

type UccCoachingReminderBannerProps = {
  userId: string;
  profile: UccCoachingProfile | null | undefined;
  planStartedAt?: string | null;
};

export function UccCoachingReminderBanner({
  userId,
  profile,
  planStartedAt,
}: UccCoachingReminderBannerProps) {
  const [status, setStatus] = useState<ReturnType<typeof buildUccCoachingStatus>>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const results = await getUserDemoResults(userId);
        if (!mounted) return;
        setStatus(
          buildUccCoachingStatus({
            profile: { ...profile, planStartedAt: planStartedAt ?? profile?.planStartedAt },
            results,
          }),
        );
      } catch (error) {
        console.error("No se pudo cargar recordatorios UCC.", error);
        if (mounted) setStatus(null);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId, profile, planStartedAt]);

  if (isLoading || !status) return null;

  const showDaily = status.dailyMissionPending;
  const showSimulacro = status.simulacroDue || status.simulacroOverdue;

  if (!showDaily && !showSimulacro) return null;

  const remaining = status.dailyTarget - status.todayQuestions;

  return (
    <div className="space-y-3">
      {showDaily && (
        <div className="flex flex-col gap-3 rounded-2xl border border-mq-accent/30 bg-mq-accent/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-mq-accent" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Misión del día pendiente</p>
              <p className="mt-0.5 text-xs text-slate-500">
                Llevas {status.todayQuestions}/{status.dailyTarget} preguntas · faltan{" "}
                {remaining} (~{remaining * 2} min) para cerrar hoy.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard#ucc-mission"
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl bg-mq-accent px-4 text-xs font-bold text-mq-accent-foreground"
          >
            Continuar misión
          </Link>
        </div>
      )}

      {showSimulacro && status.simulacroHref && (
        <div
          className={`flex flex-col gap-3 rounded-2xl border px-4 py-3 sm:flex-row sm:items-center sm:justify-between ${
            status.simulacroOverdue
              ? "border-rose-500/35 bg-rose-500/10"
              : "border-amber-500/35 bg-amber-500/10"
          }`}
        >
          <div className="flex items-start gap-3">
            <Timer
              className={`mt-0.5 h-5 w-5 shrink-0 ${
                status.simulacroOverdue ? "text-rose-400" : "text-amber-400"
              }`}
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {status.simulacroOverdue
                  ? "Simulacro UCC pendiente esta semana"
                  : "Simulacro UCC programado para hoy"}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {status.simulacroStatus?.config.questionCount} preg ·{" "}
                {status.simulacroStatus?.config.minutes} min · Res. 108
                {status.simulacroStatus
                  ? ` · ${status.simulacroStatus.simulacrosCompleted}/${status.simulacroStatus.simulacrosRequired} esta semana`
                  : ""}
              </p>
            </div>
          </div>
          <Link
            href={status.simulacroHref}
            className={`inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl border px-4 text-xs font-bold ${
              status.simulacroOverdue
                ? "border-rose-400/40 bg-rose-500/25 text-rose-50"
                : "border-amber-400/40 bg-amber-500/20 text-amber-100"
            }`}
          >
            Iniciar simulacro
          </Link>
        </div>
      )}
    </div>
  );
}

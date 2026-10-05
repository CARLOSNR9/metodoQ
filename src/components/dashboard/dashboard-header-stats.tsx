"use client";

import { CalendarDays, Flame } from "lucide-react";
import { useUserWeeklyStats, type WeeklyStats } from "@/hooks/use-user-weekly-stats";

/**
 * Cifras del encabezado del panel del Método Q, al estilo del panel MIR:
 * preguntas respondidas esta semana y días seguidos estudiando.
 */
export function DashboardHeaderStats({ userId, streakCount }: { userId: string; streakCount: number }) {
  const { weeklyStats, loading } = useUserWeeklyStats(userId);
  return <DashboardHeaderStatsContent weeklyStats={weeklyStats} loading={loading} streakCount={streakCount} />;
}

export function DashboardHeaderStatsContent({
  weeklyStats,
  loading,
  streakCount,
}: {
  weeklyStats: WeeklyStats | null;
  loading: boolean;
  streakCount: number;
}) {
  const weeklyQuestions = weeklyStats?.totalQuestions ?? 0;

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-mq-accent/20 bg-mq-accent/[0.06] p-5">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
          <CalendarDays className="h-3.5 w-3.5 text-mq-accent" />
          Preguntas esta semana
        </p>
        <p className="mt-1 text-4xl font-black text-mq-accent">{loading ? "—" : weeklyQuestions}</p>
        <p className="mt-1 text-xs text-slate-500">
          {weeklyStats && weeklyQuestions > 0
            ? `${weeklyStats.scorePercentage} % de acierto · ${weeklyStats.weekLabel}`
            : "Responde las preguntas que quieras: todo suma."}
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
          <Flame className="h-3.5 w-3.5 text-orange-500" />
          Días estudiando
        </p>
        <p className="mt-1 text-4xl font-black text-slate-900">
          {streakCount}
          <span className="text-base font-bold text-slate-500"> {streakCount === 1 ? "día" : "días"}</span>
        </p>
        <p className="mt-1 text-xs text-slate-500">
          {streakCount === 0 ? "¡Empieza hoy tu primera sesión!" : "Días seguidos con práctica."}
        </p>
      </div>
    </div>
  );
}

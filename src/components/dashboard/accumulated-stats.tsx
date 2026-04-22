"use client";

import { useEffect, useState } from "react";
import { getUserAccumulatedStats } from "@/lib/results";

type AccumulatedStatsProps = {
  userId: string;
};

export function AccumulatedStats({ userId }: AccumulatedStatsProps) {
  const [stats, setStats] = useState<{
    totalQuestions: number;
    activeDays: number;
    improvement: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadStats() {
      try {
        const data = await getUserAccumulatedStats(userId);
        if (isMounted) setStats(data);
      } catch (error) {
        console.error("Error cargando estadísticas acumuladas:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadStats();
    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 animate-pulse rounded-2xl bg-white/5" />
        ))}
      </div>
    );
  }

  if (!stats || stats.totalQuestions === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="group relative overflow-hidden rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-300 hover:border-mq-accent/50 hover:bg-mq-surface-raised">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-mq-muted">
            Impacto total
          </p>
          <p className="mt-2 text-xl font-bold text-white">
            Has respondido <span className="text-mq-accent">{stats.totalQuestions}</span> preguntas
          </p>
        </div>
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-mq-accent/5 blur-2xl transition-all duration-300 group-hover:bg-mq-accent/10" />
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-300 hover:border-emerald-500/50 hover:bg-mq-surface-raised">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-mq-muted">
            Crecimiento
          </p>
          <p className="mt-2 text-xl font-bold text-white">
            Has mejorado <span className="text-emerald-400">{stats.improvement}%</span>
          </p>
        </div>
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl transition-all duration-300 group-hover:bg-emerald-500/10" />
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-300 hover:border-indigo-500/50 hover:bg-mq-surface-raised">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-mq-muted">
            Consistencia
          </p>
          <p className="mt-2 text-xl font-bold text-white">
            Llevas <span className="text-indigo-400">{stats.activeDays}</span> días activos
          </p>
        </div>
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-300 group-hover:bg-indigo-500/10" />
      </div>
    </div>
  );
}

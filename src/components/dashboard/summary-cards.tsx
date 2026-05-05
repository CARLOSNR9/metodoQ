"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getUserDemoResults, type DemoResultItem } from "@/lib/results";
import { Trophy, Target, History, Sparkles, TrendingUp } from "lucide-react";

type SummaryCardsProps = {
  userId: string;
};

export function SummaryCards({ userId }: SummaryCardsProps) {
  const [results, setResults] = useState<DemoResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadSummaryData() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const items = await getUserDemoResults(userId);
        if (!isMounted) return;
        setResults(items);
      } catch {
        if (!isMounted) return;
        setErrorMessage("Sincronizando datos...");
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadSummaryData();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const metrics = useMemo(() => {
    const hasData = results.length > 0;
    const bestScore = hasData
      ? Math.max(...results.map((item) => item.scorePercentage))
      : 0;
    const averageScore = hasData
      ? Math.round(
          results.reduce((acc, item) => acc + item.scorePercentage, 0) /
            results.length,
        )
      : 0;
    const latestAttempt = hasData ? results[0] : null;

    return { bestScore, averageScore, latestAttempt, hasData };
  }, [results]);

  if (isLoading) {
    return (
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-32 animate-pulse rounded-3xl border border-mq-border-strong bg-white/[0.04]"
          />
        ))}
      </section>
    );
  }

  if (!metrics.hasData) {
    return null;
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <article className="mq-glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-mq-accent/50">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <Trophy size={20} />
          </div>
          <Sparkles size={14} className="opacity-0 transition-opacity group-hover:opacity-100 text-mq-accent" />
        </div>
        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Mejor Puntaje</p>
          <p className="mt-1 text-3xl font-bold text-white">{metrics.bestScore}%</p>
        </div>
        <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl" />
      </article>

      <article className="mq-glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-mq-accent/50">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
            <Target size={20} />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Promedio Total</p>
          <p className="mt-1 text-3xl font-bold text-white">{metrics.averageScore}%</p>
        </div>
        <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-mq-accent/5 blur-2xl" />
      </article>

      <article className="mq-glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-mq-accent/50">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white">
            <History size={20} />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Último Intento</p>
          <p className="mt-1 text-3xl font-bold text-white">{metrics.latestAttempt?.scorePercentage}%</p>
          <p className="mt-1 text-[10px] text-mq-muted">{metrics.latestAttempt?.fechaLabel}</p>
        </div>
      </article>
    </section>
  );
}

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
    return (
      <article className="mq-glass overflow-hidden rounded-[2rem] p-8 sm:p-10">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-mq-accent/10 text-mq-accent">
            <TrendingUp size={32} />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-bold text-white">Tu análisis de rendimiento está esperando</h3>
            <p className="max-w-xl text-sm text-mq-muted">
              Nuestra IA necesita al menos un entrenamiento para empezar a calcular tu probabilidad de éxito y detectar tus puntos débiles.
            </p>
          </div>
          <Link
            href="/demo"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-bold text-mq-accent-foreground transition-all hover:scale-105 active:scale-95"
          >
            Realizar primer diagnóstico
          </Link>
        </div>
      </article>
    );
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

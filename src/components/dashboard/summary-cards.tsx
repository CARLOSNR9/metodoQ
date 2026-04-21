"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getUserDemoResults, type DemoResultItem } from "@/lib/results";

type SummaryCardsProps = {
  userId: string;
};

function getPerformanceColor(score: number) {
  return score >= 80
    ? "border-emerald-400/35 bg-emerald-500/10 text-emerald-200"
    : "border-sky-400/35 bg-sky-500/10 text-sky-200";
}

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
        setErrorMessage("No se pudo cargar el resumen del usuario.");
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
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-32 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]"
          />
        ))}
      </section>
    );
  }

  if (errorMessage) {
    return (
      <p className="rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
        {errorMessage}
      </p>
    );
  }

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <article className="rounded-2xl border border-sky-400/35 bg-sky-500/10 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-200">
          Tu mejor puntaje
        </p>
        <p className="mt-3 text-3xl font-semibold text-white">
          {metrics.hasData ? `${metrics.bestScore}%` : "--"}
        </p>
      </article>

      <article
        className={`rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 ${getPerformanceColor(metrics.averageScore)}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em]">
          Promedio de rendimiento
        </p>
        <p className="mt-3 text-3xl font-semibold text-white">
          {metrics.hasData ? `${metrics.averageScore}%` : "--"}
        </p>
      </article>

      <article className="rounded-2xl border border-sky-400/35 bg-sky-500/10 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-200">
          Ultimo intento
        </p>
        <p className="mt-3 text-2xl font-semibold text-white">
          {metrics.latestAttempt ? `${metrics.latestAttempt.scorePercentage}%` : "--"}
        </p>
        <p className="mt-1 text-xs text-sky-100/80">
          {metrics.latestAttempt?.fechaLabel ?? "Sin intentos todavia"}
        </p>
      </article>
      {!metrics.hasData ? (
        <article className="sm:col-span-2 xl:col-span-3">
          <div className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5">
            <p className="text-sm text-mq-muted">Aun no tienes intentos. Empieza ahora</p>
            <Link
              href="/demo"
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground shadow-[0_14px_34px_-16px_rgb(0_209_255/0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Entrenar ahora
            </Link>
          </div>
        </article>
      ) : null}
    </section>
  );
}

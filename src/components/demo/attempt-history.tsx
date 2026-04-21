"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProgressSummary } from "@/components/demo/progress-summary";
import { getUserDemoResults, type DemoResultItem } from "@/lib/results";

type AttemptHistoryProps = {
  userId: string;
  refreshKey?: number;
};

function getScoreCardClasses(score: number) {
  if (score < 50) {
    return "border-rose-400/35 bg-rose-500/10";
  }

  if (score <= 75) {
    return "border-amber-400/35 bg-amber-500/10";
  }

  return "border-emerald-400/35 bg-emerald-500/10";
}

export function AttemptHistory({ userId, refreshKey = 0 }: AttemptHistoryProps) {
  const [results, setResults] = useState<DemoResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadHistory() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const items = await getUserDemoResults(userId);
        if (!isMounted) return;
        setResults(items);
      } catch {
        if (!isMounted) return;
        setErrorMessage("No se pudo cargar tu historial de intentos.");
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadHistory();

    return () => {
      isMounted = false;
    };
  }, [refreshKey, userId]);

  const bestScore =
    results.length > 0 ? Math.max(...results.map((item) => item.scorePercentage)) : 0;
  const averageScore =
    results.length > 0
      ? Math.round(
          results.reduce((acc, item) => acc + item.scorePercentage, 0) /
            results.length,
        )
      : 0;
  const recentResults = results.slice(0, 10);

  return (
    <section className="mt-8 rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-white">Historial de intentos</h3>

      {isLoading ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-28 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]"
            />
          ))}
        </div>
      ) : errorMessage ? (
        <p className="mt-3 rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
          {errorMessage}
        </p>
      ) : results.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-mq-border-strong bg-white/[0.03] p-4">
          <p className="text-sm text-mq-muted">Aun no tienes intentos. Empieza ahora</p>
          <Link
            href="/demo"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground shadow-[0_14px_34px_-16px_rgb(0_209_255/0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            Entrenar ahora
          </Link>
        </div>
      ) : (
        <>
          <ProgressSummary bestScore={bestScore} averageScore={averageScore} />
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {recentResults.map((result) => (
              <li
                key={result.id}
                className={`rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 ${getScoreCardClasses(result.scorePercentage)}`}
              >
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-mq-muted">
                    {result.fechaLabel}
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    {result.scorePercentage}%
                  </p>
                  <p className="text-xs text-foreground/80">
                    {result.correctAnswers} correctas · {result.wrongAnswers} incorrectas
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {results.length > 10 ? (
            <p className="mt-3 text-xs text-mq-muted">
              Mostrando los 10 intentos mas recientes.
            </p>
          ) : null}
        </>
      )}
    </section>
  );
}

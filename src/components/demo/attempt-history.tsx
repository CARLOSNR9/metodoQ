"use client";

import { useEffect, useState } from "react";
import { ProgressSummary } from "@/components/demo/progress-summary";
import { getUserDemoResults, type DemoResultItem } from "@/lib/results";

type AttemptHistoryProps = {
  userId: string;
  refreshKey?: number;
};

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

  return (
    <section className="mt-8 rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-white">Historial de intentos</h3>

      {isLoading ? (
        <p className="mt-3 text-sm text-mq-muted">Cargando intentos...</p>
      ) : errorMessage ? (
        <p className="mt-3 rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
          {errorMessage}
        </p>
      ) : results.length === 0 ? (
        <p className="mt-3 text-sm text-mq-muted">
          Aun no tienes intentos guardados.
        </p>
      ) : (
        <>
          <ProgressSummary bestScore={bestScore} averageScore={averageScore} />
          <ul className="mt-4 space-y-2">
            {results.map((result) => (
              <li
                key={result.id}
                className="flex items-center justify-between rounded-xl border border-mq-border bg-white/[0.03] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Score: {result.scorePercentage}%
                  </p>
                  <p className="text-xs text-mq-muted">
                    {result.correctAnswers} correctas · {result.wrongAnswers} incorrectas
                  </p>
                </div>
                <span className="text-xs text-mq-muted">{result.fechaLabel}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { getUserDemoResults, type DemoResultItem } from "@/lib/results";

type DynamicInsightCardProps = {
  userId: string;
};

type InsightTone = "positive" | "warning" | "neutral";

type InsightState = {
  message: string;
  tone: InsightTone;
};

const DEFAULT_INSIGHT: InsightState = {
  message: "Sigue entrenando para mantener el ritmo y consolidar tu progreso.",
  tone: "neutral",
};

function getDaysSince(date: Date) {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function parseResultDate(result: DemoResultItem) {
  if (!result.fechaIso) {
    return null;
  }

  const date = new Date(result.fechaIso);
  return Number.isNaN(date.getTime()) ? null : date;
}

function buildInsight(results: DemoResultItem[]): InsightState {
  if (results.length === 0) {
    return {
      message: "Tu progreso se enfria... vuelve hoy",
      tone: "warning",
    };
  }

  const latestDate = parseResultDate(results[0]);
  if (latestDate && getDaysSince(latestDate) >= 2) {
    return {
      message: "Tu progreso se enfria... vuelve hoy",
      tone: "warning",
    };
  }

  if (results.length >= 2) {
    const latestScore = results[0].scorePercentage;
    const previousScore = results[1].scorePercentage;

    if (latestScore > previousScore) {
      return {
        message: "Estas mejorando 📈",
        tone: "positive",
      };
    }

    if (latestScore < previousScore) {
      return {
        message: "Ojo, estas fallando mas en este tema",
        tone: "warning",
      };
    }
  }

  return DEFAULT_INSIGHT;
}

function getToneClasses(tone: InsightTone) {
  if (tone === "positive") {
    return "border-emerald-400/35 bg-emerald-500/10 text-emerald-100";
  }

  if (tone === "warning") {
    return "border-amber-400/35 bg-amber-500/10 text-amber-100";
  }

  return "border-mq-border-strong bg-white/[0.03] text-foreground";
}

export function DynamicInsightCard({ userId }: DynamicInsightCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [insight, setInsight] = useState<InsightState>(DEFAULT_INSIGHT);

  useEffect(() => {
    let isMounted = true;

    async function loadInsight() {
      setIsLoading(true);

      try {
        const results = await getUserDemoResults(userId);
        if (!isMounted) return;
        setInsight(buildInsight(results));
      } catch (error) {
        console.error("No se pudo calcular el mensaje dinamico.", error);
        if (!isMounted) return;
        setInsight(DEFAULT_INSIGHT);
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadInsight();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const cardClasses = useMemo(() => getToneClasses(insight.tone), [insight.tone]);

  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${cardClasses}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
        Mensaje para ti
      </p>
      <p className="mt-2 text-base font-semibold sm:text-lg">
        {isLoading ? "Analizando tu progreso..." : insight.message}
      </p>
    </section>
  );
}

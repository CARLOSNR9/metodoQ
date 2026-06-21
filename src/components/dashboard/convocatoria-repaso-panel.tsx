"use client";

import Link from "next/link";
import { AlertTriangle, ArrowRight, BookOpenCheck } from "lucide-react";
import { useMemo } from "react";
import { getUccRepasoInsights } from "@/lib/diagnostic/ucc-exam-blueprint";
import { resolveSessionQuestions } from "@/lib/session-review";
import type { UccConvocatoriaAttempt } from "@/lib/training/ucc-convocatoria";

type ConvocatoriaRepasoPanelProps = {
  attempt: UccConvocatoriaAttempt;
  questionCount: number;
  compact?: boolean;
  /** Oculta puntaje y CTAs cuando ya estás en la pantalla de retroalimentación. */
  insightsOnly?: boolean;
};

function buildReviewHref(resultId: string | undefined, filter?: "wrong") {
  if (!resultId) return "/dashboard/historial";
  const base = `/dashboard/historial/${resultId}`;
  return filter ? `${base}?filter=${filter}` : base;
}

export function ConvocatoriaRepasoPanel({
  attempt,
  questionCount,
  compact = false,
  insightsOnly = false,
}: ConvocatoriaRepasoPanelProps) {
  const insights = useMemo(() => {
    if (!attempt.sessionQuestionIds?.length || !attempt.answersByQuestionId) {
      return null;
    }
    const questions = resolveSessionQuestions(attempt.sessionQuestionIds);
    if (questions.length === 0) return null;
    return getUccRepasoInsights(questions, attempt.answersByQuestionId);
  }, [attempt.answersByQuestionId, attempt.sessionQuestionIds]);

  const weakestAxes = insights?.axes.filter((axis) => axis.wrong > 0).slice(0, compact ? 2 : 4) ?? [];
  const topTopics = insights?.topics.slice(0, compact ? 3 : 5) ?? [];
  const hasReviewData = Boolean(attempt.resultId && insights);
  const reviewHref = buildReviewHref(attempt.resultId);
  const wrongOnlyHref = buildReviewHref(attempt.resultId, "wrong");

  return (
    <div className="space-y-4">
      {!insightsOnly ? (
        <div
          className={`flex flex-wrap items-center gap-4 rounded-2xl border border-mq-accent/20 bg-mq-accent/5 px-5 py-4 ${
            compact ? "" : "sm:px-6"
          }`}
        >
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mq-muted">
              Tu resultado
            </p>
            <p className="mt-1 text-3xl font-black text-white">
              {attempt.correctAnswers}
              <span className="text-xl text-mq-muted">/{questionCount}</span>
              <span className="ml-3 text-lg font-bold text-mq-accent">
                {attempt.scorePercentage}%
              </span>
            </p>
            <p className="mt-1 text-xs text-mq-muted">
              {attempt.wrongAnswers} incorrectas · 1 intento registrado
            </p>
          </div>

          {hasReviewData ? (
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href={reviewHref}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-mq-accent px-5 text-sm font-black text-mq-accent-foreground transition hover:brightness-110"
              >
                <BookOpenCheck size={16} />
                Ver retroalimentación
              </Link>
              {attempt.wrongAnswers > 0 ? (
                <Link
                  href={wrongOnlyHref}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 text-sm font-bold text-white transition hover:bg-white/[0.08]"
                >
                  Solo fallidas
                  <ArrowRight size={14} />
                </Link>
              ) : null}
            </div>
          ) : attempt.resultId ? (
            <Link
              href={reviewHref}
              className="inline-flex min-h-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 text-sm font-bold text-white transition hover:bg-white/[0.08]"
            >
              Ver en historial
            </Link>
          ) : null}
        </div>
      ) : null}

      {weakestAxes.length > 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">
            <AlertTriangle size={12} />
            Áreas a repasar
          </p>
          <p className="mt-2 text-sm text-mq-muted">
            Prioriza estas áreas del examen UCC antes del simulacro real.
          </p>
          <ul className="mt-4 space-y-3">
            {weakestAxes.map((axis) => (
              <li key={axis.axis}>
                <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold text-white">{axis.label}</span>
                  <span className="text-mq-muted">
                    {axis.percentage}% · {axis.wrong} fallo{axis.wrong === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full transition-all ${
                      axis.percentage >= 70
                        ? "bg-emerald-500"
                        : axis.percentage >= 50
                          ? "bg-amber-400"
                          : "bg-rose-500"
                    }`}
                    style={{ width: `${Math.max(axis.percentage, 4)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {!compact && topTopics.length > 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-muted">
            Temas con más errores
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {topTopics.map((item) => (
              <span
                key={item.topic}
                className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-100"
              >
                {item.topic}
                <span className="text-rose-300">×{item.wrongCount}</span>
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BookOpenCheck,
  ClipboardCheck,
  Target,
} from "lucide-react";
import { getUccRepasoInsights } from "@/lib/diagnostic/ucc-exam-blueprint";
import {
  buildSessionErrorsTrainingHref,
  buildTopicTrainingHref,
  resolveSessionQuestions,
} from "@/lib/session-review";
import {
  getFeaturedConvocatoriaEditionForUser,
  resolveConvocatoriaAttempt,
  type UccConvocatoriaAttempt,
  type UccConvocatoriaEdition,
} from "@/lib/training/ucc-convocatoria";

type ConvocatoriaRepasoSummaryCardProps = {
  userId: string;
  planStartedAt?: string | null;
};

type LoadedState = {
  edition: UccConvocatoriaEdition;
  attempt: UccConvocatoriaAttempt;
};

function buildReviewHref(resultId: string | undefined, filter?: "wrong") {
  if (!resultId) return "/dashboard/historial";
  const base = `/dashboard/historial/${resultId}`;
  return filter ? `${base}?filter=${filter}` : base;
}

export function ConvocatoriaRepasoSummaryCard({ userId, planStartedAt }: ConvocatoriaRepasoSummaryCardProps) {
  const [loaded, setLoaded] = useState<LoadedState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const edition = getFeaturedConvocatoriaEditionForUser(planStartedAt);
        if (!edition) {
          if (mounted) setLoaded(null);
          return;
        }

        const attempt = await resolveConvocatoriaAttempt(userId, edition.code);
        if (!mounted) return;
        if (!attempt) {
          setLoaded(null);
          return;
        }
        setLoaded({ edition, attempt });
      } catch (error) {
        console.error("No se pudo cargar el resumen de convocatoria.", error);
        if (mounted) setLoaded(null);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId]);

  const [insights, setInsights] = useState<ReturnType<typeof getUccRepasoInsights> | null>(null);

  useEffect(() => {
    if (!loaded?.attempt.sessionQuestionIds?.length || !loaded.attempt.answersByQuestionId) {
      setInsights(null);
      return;
    }
    resolveSessionQuestions(loaded.attempt.sessionQuestionIds).then((questions) => {
      if (questions.length === 0) {
        setInsights(null);
      } else {
        setInsights(getUccRepasoInsights(questions, loaded.attempt.answersByQuestionId!));
      }
    });
  }, [loaded]);

  const [sessionErrorsHref, setSessionErrorsHref] = useState<string>("");

  useEffect(() => {
    if (!loaded?.attempt?.sessionQuestionIds) {
      setSessionErrorsHref("");
      return;
    }
    resolveSessionQuestions(loaded.attempt.sessionQuestionIds).then((questions) => {
      const href = buildSessionErrorsTrainingHref({
        resultId: loaded.attempt.resultId,
        questionIds: questions
          .filter((q) => loaded.attempt.answersByQuestionId?.[q.id] !== q.correctOptionId)
          .map((q) => q.id),
        count: Math.min(loaded.attempt.wrongAnswers, 25),
      });
      setSessionErrorsHref(href);
    });
  }, [loaded]);

  if (isLoading) {
    return (
      <div
        id="convocatoria-repaso-summary"
        className="h-52 animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.03]"
      />
    );
  }

  if (!loaded) return null;

  const { edition, attempt } = loaded;
  const weakestAxes = insights?.axes.filter((axis) => axis.wrong > 0).slice(0, 4) ?? [];
  const topTopics = insights?.topics.slice(0, 4) ?? [];
  const reviewHref = buildReviewHref(attempt.resultId);
  const wrongOnlyHref = buildReviewHref(attempt.resultId, "wrong");

  return (
    <motion.section
      id="convocatoria-repaso-summary"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[2rem] border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.07] via-white/[0.02] to-transparent p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-200">
                <ClipboardCheck size={12} />
                Post-convocatoria
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-mq-muted">
                {edition.label}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                Qué repasar antes del simulacro
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mq-muted">
                Basado en tu intento de la convocatoria UCC: prioriza las áreas y temas donde
                más fallaste.
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center lg:min-w-[180px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mq-muted">
              Tu puntaje
            </p>
            <p className="mt-1 text-4xl font-black text-white">
              {attempt.scorePercentage}
              <span className="text-lg text-mq-accent">%</span>
            </p>
            <p className="mt-1 text-xs text-mq-muted">
              {attempt.correctAnswers}/{edition.questionCount} aciertos
            </p>
          </div>
        </div>

        {(weakestAxes.length > 0 || topTopics.length > 0) && (
          <div className="grid gap-5 lg:grid-cols-2">
            {weakestAxes.length > 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">
                  <AlertTriangle size={12} />
                  Áreas del examen UCC
                </p>
                <ul className="mt-4 space-y-3">
                  {weakestAxes.map((axis, index) => (
                    <li key={axis.axis}>
                      <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                        <span className="flex items-center gap-2 font-semibold text-white">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-black ${
                              index === 0
                                ? "bg-rose-500/20 text-rose-300"
                                : "bg-white/10 text-mq-muted"
                            }`}
                          >
                            {index + 1}
                          </span>
                          {axis.label}
                        </span>
                        <span className="text-mq-muted">
                          {axis.percentage}% · {axis.wrong} fallo{axis.wrong === 1 ? "" : "s"}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${
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

            {topTopics.length > 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-muted">
                  <Target size={12} />
                  Temas prioritarios
                </p>
                <ul className="mt-4 space-y-3">
                  {topTopics.map((item, index) => (
                    <li
                      key={item.topic}
                      className="flex flex-col gap-3 rounded-xl bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                            index === 0
                              ? "bg-rose-500/20 text-rose-300"
                              : "bg-white/5 text-mq-muted"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white">{item.topic}</p>
                          <p className="text-[10px] font-medium text-rose-400">
                            {item.wrongCount} error{item.wrongCount === 1 ? "" : "es"} en el simulacro
                          </p>
                        </div>
                      </div>
                      <Link
                        href={buildTopicTrainingHref({ topic: item.topic, count: 15 })}
                        className="inline-flex min-h-9 items-center justify-center rounded-lg bg-mq-accent px-4 text-xs font-black text-mq-accent-foreground transition hover:brightness-110"
                      >
                        Reforzar
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {attempt.resultId ? (
            <>
              <Link
                href={reviewHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground transition hover:brightness-110"
              >
                <BookOpenCheck size={16} />
                Ver retroalimentación completa
              </Link>
              {attempt.wrongAnswers > 0 ? (
                <>
                  <Link
                    href={wrongOnlyHref}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-bold text-white transition hover:bg-white/[0.08]"
                  >
                    Solo preguntas fallidas
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={sessionErrorsHref}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-amber-500/25 bg-amber-500/10 px-6 text-sm font-bold text-amber-100 transition hover:bg-amber-500/15"
                  >
                    Entrenar mis errores del simulacro
                  </Link>
                </>
              ) : null}
            </>
          ) : null}
          <Link
            href="/dashboard/convocatorias"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-xs font-bold uppercase tracking-wider text-mq-muted transition hover:bg-white/[0.06] hover:text-white"
          >
            Ver convocatorias
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

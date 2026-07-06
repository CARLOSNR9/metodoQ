"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Info,
  Sparkles,
  Target,
  XCircle,
  Flag,
} from "lucide-react";
import {
  buildSessionErrorsTrainingHref,
  buildSessionReviewItems,
  buildTopicTrainingHref,
  getSessionWrongTopics,
  getWrongQuestionIds,
  type SessionReviewItem,
} from "@/lib/session-review";
import type { TrainingQuestion } from "@/lib/questions/types";
import { ReportQuestionModal } from "@/components/demo/report-question-modal";

type FilterMode = "all" | "correct" | "wrong";

type SessionQuestionReviewProps = {
  sessionQuestions: TrainingQuestion[];
  answersByQuestionId: Record<string, string>;
  title?: string;
  className?: string;
  defaultExpandedIndex?: number | null;
  savedResultId?: string | null;
  defaultFilter?: FilterMode;
  userId?: string | null;
};

function ReviewFilterButton({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
        active
          ? "border-mq-accent/40 bg-mq-accent/15 text-mq-accent"
          : "border-white/10 bg-white/[0.03] text-mq-muted hover:border-white/20 hover:text-white"
      }`}
    >
      {label} ({count})
    </button>
  );
}

function ReviewQuestionCard({
  item,
  isOpen,
  onToggle,
}: {
  item: SessionReviewItem;
  isOpen: boolean;
  onToggle: () => void;
  userId?: string | null;
}) {
  const { question, isCorrect } = item;
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-3 p-4 text-left transition hover:bg-white/[0.03] sm:p-5"
      >
        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
            isCorrect ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"
          }`}
        >
          {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-mq-muted">
              Pregunta {item.index}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                isCorrect
                  ? "bg-emerald-500/15 text-emerald-300"
                  : "bg-rose-500/15 text-rose-300"
              }`}
            >
              {isCorrect ? "Acertaste" : "Fallaste"}
            </span>
            {question.topic ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-mq-accent">
                {question.topic}
              </span>
            ) : null}
          </span>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/90">
            {question.statement}
          </p>
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-mq-muted transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/10 px-4 pb-5 pt-4 sm:px-5">
              <p className="text-sm leading-relaxed text-slate-200">{question.statement}</p>

              {!isCorrect && item.selectedOptionLabel ? (
                <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-rose-300">
                    Tu respuesta
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-rose-100">
                    {item.selectedOptionLabel}
                  </p>
                </div>
              ) : null}

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
                  Respuesta correcta
                </p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50">
                  {item.correctOptionLabel}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <p
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                      isCorrect ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <Sparkles className="h-3.5 w-3.5" />
                        Muy bien, acertaste
                      </>
                    ) : (
                      <>
                        <Info className="h-3.5 w-3.5" />
                        Por qué era correcta
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsReportModalOpen(true)}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-mq-muted transition hover:bg-white/10 hover:text-white"
                    title="Reportar pregunta"
                  >
                    <Flag className="h-3 w-3" />
                    <span className="hidden sm:inline">Reportar</span>
                  </button>
                </div>
                {item.incorrectFeedback ? (
                  <p className="mt-3 rounded-lg border border-rose-500/15 bg-rose-500/5 p-3 text-sm leading-relaxed text-rose-100">
                    {item.incorrectFeedback}
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {question.explanation}
                </p>
                {question.keyPoints.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {question.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-mq-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mq-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ReportQuestionModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        questionId={question.id}
        topic={question.topic}
        userId={userId}
      />
    </article>
  );
}

export function SessionQuestionReview({
  sessionQuestions,
  answersByQuestionId,
  title = "Retroalimentación pregunta por pregunta",
  className,
  defaultExpandedIndex = 1,
  savedResultId = null,
  defaultFilter = "all",
  userId = null,
}: SessionQuestionReviewProps) {
  const items = useMemo(
    () => buildSessionReviewItems(sessionQuestions, answersByQuestionId),
    [sessionQuestions, answersByQuestionId],
  );
  const wrongTopics = useMemo(
    () => getSessionWrongTopics(sessionQuestions, answersByQuestionId),
    [sessionQuestions, answersByQuestionId],
  );
  const wrongQuestionIds = useMemo(
    () => getWrongQuestionIds(sessionQuestions, answersByQuestionId),
    [sessionQuestions, answersByQuestionId],
  );
  const [filter, setFilter] = useState<FilterMode>(defaultFilter);
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultFilter === "wrong" && items.length > 0
      ? items.find((item) => !item.isCorrect)?.index ?? defaultExpandedIndex
      : defaultExpandedIndex,
  );

  const filteredItems = useMemo(() => {
    if (filter === "correct") return items.filter((item) => item.isCorrect);
    if (filter === "wrong") return items.filter((item) => !item.isCorrect);
    return items;
  }, [filter, items]);

  const correctCount = items.filter((item) => item.isCorrect).length;
  const wrongCount = items.length - correctCount;
  const sessionErrorsHref = buildSessionErrorsTrainingHref({
    resultId: savedResultId,
    questionIds: wrongQuestionIds,
    count: Math.min(wrongQuestionIds.length, 25),
  });

  const showOnlyWrong = () => {
    setFilter("wrong");
    const firstWrong = items.find((item) => !item.isCorrect);
    setOpenIndex(firstWrong?.index ?? null);
  };

  return (
    <section
      id="session-question-review"
      className={`relative z-10 mt-10 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-8 ${className ?? ""}`}
    >
      {wrongCount > 0 ? (
        <div className="mb-6 rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 to-mq-accent/5 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-rose-300">
                <Target className="h-3.5 w-3.5" />
                Plan de refuerzo
              </p>
              <h4 className="text-lg font-bold text-white">
                Tienes {wrongCount} pregunta{wrongCount === 1 ? "" : "s"} por reforzar
              </h4>
              <p className="max-w-xl text-sm leading-relaxed text-mq-muted">
                Repasa exactamente lo que fallaste en esta sesión o entrena por tema para
                cerrar la brecha más rápido.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col lg:min-w-[220px]">
              <button
                type="button"
                onClick={showOnlyWrong}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 text-sm font-bold text-white transition hover:bg-white/[0.08]"
              >
                Solo mis errores
              </button>
              <Link
                href={sessionErrorsHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-mq-accent px-5 text-sm font-black text-mq-accent-foreground transition hover:brightness-110"
              >
                Entrenar mis errores
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {wrongTopics.length > 0 ? (
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-mq-muted">
                Refuerzo por tema
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {wrongTopics.slice(0, 6).map((topicSummary) => (
                  <li key={topicSummary.topic}>
                    <Link
                      href={buildTopicTrainingHref({
                        topic: topicSummary.topic,
                        count: Math.min(topicSummary.wrongCount + 5, 20),
                      })}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white transition hover:border-mq-accent/30 hover:bg-mq-accent/10 hover:text-mq-accent"
                    >
                      {topicSummary.topic}
                      <span className="rounded-full bg-rose-500/15 px-1.5 py-0.5 text-[10px] font-bold text-rose-300">
                        {topicSummary.wrongCount}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-mq-accent">
            Revisión completa
          </p>
          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mq-muted">
            Revisa cada ítem con tu respuesta, la opción correcta y la explicación clínica.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ReviewFilterButton
            active={filter === "all"}
            label="Todas"
            count={items.length}
            onClick={() => setFilter("all")}
          />
          <ReviewFilterButton
            active={filter === "correct"}
            label="Aciertos"
            count={correctCount}
            onClick={() => setFilter("correct")}
          />
          <ReviewFilterButton
            active={filter === "wrong"}
            label="Solo errores"
            count={wrongCount}
            onClick={() => {
              setFilter("wrong");
              const firstWrong = items.find((item) => !item.isCorrect);
              setOpenIndex(firstWrong?.index ?? null);
            }}
          />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {filteredItems.map((item) => (
          <ReviewQuestionCard
            key={`${item.question.id}-${item.index}`}
            item={item}
            isOpen={openIndex === item.index}
            onToggle={() =>
              setOpenIndex((current) => (current === item.index ? null : item.index))
            }
            userId={userId}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, Loader2, RotateCcw, XCircle } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";
import {
  MIR_CONFIDENCE_LEVELS,
  countMirConfidenceAnswers,
  getMirConfidenceAdvice,
  getMirConfidenceFeedback,
  getMirConfidenceNet,
  getMirConfidenceStats,
  recordMirConfidenceStats,
  tallyMirConfidence,
  type MirConfidence,
  type MirConfidenceStats,
} from "@/lib/training/mir-confidence";
import { recordMirSpecialtyStats } from "@/lib/training/mir-mastery";
import { recordMirAnswers, type MirAnswerSource } from "@/lib/training/mir-review";
import { MIR_EXAM_QUESTIONS, formatMirNet, getMirScoreSummary } from "@/lib/training/mir-scoring";
import { recordMirStudyAnswers } from "@/lib/training/mir-study-log";
import { registerMirTrainingDay } from "@/lib/training/mir-streak";
import { MirDoctorMascot } from "./mir-doctor-mascot";
import { MirOfficialBadge, renderWithBold } from "./mir-rich-text";
import { MirQuestionReviewCard } from "./mir-question-review-card";
import { MirQuestionImage } from "./mir-question-image";
import { MirReportQuestionButton } from "./mir-report-question-button";

type ReviewFilter = "wrong" | "correct" | "all";

/** Color de cada nivel de seguridad (botón activo). */
const CONFIDENCE_ACTIVE: Record<MirConfidence, string> = {
  sure: "border-emerald-400/60 bg-emerald-400/15 text-emerald-200",
  doubt: "border-sky-400/60 bg-sky-400/15 text-sky-200",
  guess: "border-amber-400/60 bg-amber-400/15 text-amber-200",
};

function percent(tally: { answered: number; correct: number }): number {
  return Math.round((tally.correct / tally.answered) * 100);
}

/** Calibración del bloque: aciertos y netas por nivel de seguridad, más el histórico. */
function ConfidenceSummary({ session, history }: { session: MirConfidenceStats; history: MirConfidenceStats | null }) {
  const advice = getMirConfidenceAdvice(session) ?? (history ? getMirConfidenceAdvice(history) : null);
  const historyLevels = history ? MIR_CONFIDENCE_LEVELS.filter(({ value }) => history[value].answered > 0) : [];
  return (
    <div className="mx-auto mt-6 max-w-md rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left">
      <p className="flex items-center gap-2 text-sm font-bold text-white">
        <Gauge className="h-4 w-4 text-mq-premium-gold" aria-hidden />
        Tu seguridad al responder
      </p>
      <ul className="mt-3 space-y-1.5">
        {MIR_CONFIDENCE_LEVELS.filter(({ value }) => session[value].answered > 0).map(({ value, label }) => {
          const tally = session[value];
          const net = getMirConfidenceNet(tally);
          return (
            <li key={value} className="flex items-center justify-between gap-3 text-xs">
              <span className={`rounded-full border px-2.5 py-0.5 font-bold ${CONFIDENCE_ACTIVE[value]}`}>{label}</span>
              <span className="flex-1 text-slate-300">
                {tally.correct}/{tally.answered} aciertos ({percent(tally)} %)
              </span>
              <span className={`font-black tabular-nums ${net < -0.05 ? "text-rose-300" : "text-white"}`}>
                {net < -0.05 ? "−" : net > 0.05 ? "+" : ""}
                {formatMirNet(Math.abs(net))} netas
              </span>
            </li>
          );
        })}
      </ul>
      {advice ? <p className="mt-3 text-xs leading-relaxed text-slate-400">{advice}</p> : null}
      {historyLevels.length > 0 ? (
        <p className="mt-2 text-[11px] text-slate-500">
          Tu histórico:{" "}
          {historyLevels.map(({ value, label }) => `${label.toLowerCase()} ${percent(history![value])} %`).join(" · ")}
        </p>
      ) : null}
    </div>
  );
}

const SAVE_TIMEOUT_MS = 8000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)),
  ]);
}

type MirPracticeSessionProps = {
  userId: string;
  questions: TrainingQuestion[];
  /** Texto pequeño sobre cada pregunta, p. ej. "Práctica · Cardiología". */
  eyebrow: string;
  source: MirAnswerSource;
  /** Acción del botón principal al terminar (otro bloque, volver a elegir, etc.). */
  onRestart: () => void;
  restartLabel: string;
  /** Se llama cuando las respuestas ya están guardadas. */
  onSaved?: () => void;
};

function getSummaryMessage(correct: number, total: number, source: MirAnswerSource): string {
  const ratio = total > 0 ? correct / total : 0;
  if (source === "review") {
    if (ratio === 1) return "¡Repaso perfecto! Esas preguntas ya vuelven más tarde o quedan dominadas.";
    return "Las que fallaste vuelven mañana. Repetir es lo que fija el conocimiento: ¡sigue así!";
  }
  if (ratio >= 0.8) return "¡Excelente bloque! Se nota que dominas este tema.";
  if (ratio >= 0.5) return "¡Buen trabajo! Las que fallaste ya están en tu repaso de errores.";
  return "Cada error es una pregunta menos que fallarás en el MIR. Ya están en tu repaso.";
}

/**
 * Sesión corta de preguntas MIR con corrección inmediata: al elegir una
 * opción se muestra si es correcta, la explicación y los puntos clave. Al
 * terminar guarda las respuestas en el repaso de errores y en el mapa de
 * dominio, y cuenta el día para la racha MIR. Antes de responder se puede
 * marcar la seguridad (seguro, dudo, al azar); al final se ve la calibración.
 */
export function MirPracticeSession({
  userId,
  questions,
  eyebrow,
  source,
  onRestart,
  restartLabel,
  onSaved,
}: MirPracticeSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [confidences, setConfidences] = useState<Record<string, MirConfidence>>({});
  const [confidenceHistory, setConfidenceHistory] = useState<MirConfidenceStats | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("wrong");

  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const selectedOptionId = currentQuestion ? answers[currentQuestion.id] : undefined;
  const correctCount = questions.filter(
    (question) => answers[question.id] === question.correctOptionId,
  ).length;
  const answeredCount = questions.filter((question) => answers[question.id]).length;
  // Netas MIR: aciertos − errores / 3 (en la práctica no hay preguntas en blanco).
  const score = getMirScoreSummary({
    correct: correctCount,
    wrong: answeredCount - correctCount,
    total: answeredCount,
  });

  async function handleFinish() {
    setIsSaving(true);
    const outcomes = questions
      .filter((question) => answers[question.id])
      .map((question) => ({
        questionId: question.id,
        correct: answers[question.id] === question.correctOptionId,
      }));
    const confidenceStats = tallyMirConfidence(questions, answers, confidences);
    // Escrituras independientes: que falle una no impide las demás.
    const results = await Promise.allSettled([
      withTimeout(recordMirConfidenceStats(userId, confidenceStats), SAVE_TIMEOUT_MS),
      withTimeout(recordMirAnswers(userId, outcomes, source), SAVE_TIMEOUT_MS),
      withTimeout(recordMirSpecialtyStats(userId, outcomes), SAVE_TIMEOUT_MS),
      withTimeout(registerMirTrainingDay(userId), SAVE_TIMEOUT_MS),
      withTimeout(
        recordMirStudyAnswers(
          userId,
          outcomes.map((outcome) => ({ ...outcome, answer: answers[outcome.questionId] })),
        ),
        SAVE_TIMEOUT_MS,
      ),
    ]);
    for (const result of results) {
      if (result.status === "rejected") {
        console.error("No se pudo guardar la sesión de práctica MIR.", result.reason);
      }
    }
    if (countMirConfidenceAnswers(confidenceStats) > 0) {
      setConfidenceHistory(await getMirConfidenceStats(userId));
    }
    setIsSaving(false);
    setReviewFilter(outcomes.some((outcome) => !outcome.correct) ? "wrong" : "all");
    setIsFinished(true);
    onSaved?.();
  }

  function handleNext() {
    if (currentIndex + 1 < total) {
      setCurrentIndex((index) => index + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      void handleFinish();
    }
  }

  if (isFinished) {
    const sessionConfidence = tallyMirConfidence(questions, answers, confidences);
    const wrongQuestions = questions.filter(
      (question) => answers[question.id] && answers[question.id] !== question.correctOptionId,
    );
    const reviewQuestions = questions.filter((question) => {
      const given = answers[question.id];
      if (reviewFilter === "all") return true;
      if (reviewFilter === "correct") return given === question.correctOptionId;
      return Boolean(given) && given !== question.correctOptionId;
    });
    return (
      <div className="mx-auto w-full max-w-2xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center sm:p-9">
          <MirDoctorMascot className="mx-auto h-32 w-24" />
          <p className="mt-4 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
            {eyebrow}
          </p>
          <p className="mt-2 text-5xl font-black text-white">
            {correctCount}
            <span className="text-2xl font-bold text-slate-400">/{total}</span>
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-400">respuestas correctas</p>
          <div className="mx-auto mt-4 max-w-md rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <p className="text-2xl font-black text-mq-premium-gold">
              {formatMirNet(score.net)}
              <span className="text-sm font-bold text-slate-400"> netas</span>
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {score.wrong > 0
                ? `Tus ${score.wrong} ${score.wrong === 1 ? "error te restó" : "errores te restaron"} ${formatMirNet(score.netLostToErrors)} netas`
                : "Ningún error te restó netas"}
              {score.total > 0
                ? ` · equivale a ${formatMirNet(score.projectedNet)} en un examen de ${MIR_EXAM_QUESTIONS} preguntas.`
                : "."}
            </p>
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-300">
            {getSummaryMessage(correctCount, total, source)}
          </p>

          {countMirConfidenceAnswers(sessionConfidence) > 0 ? (
            <ConfidenceSummary session={sessionConfidence} history={confidenceHistory} />
          ) : null}

          {wrongQuestions.length > 0 ? (
            <ul className="mx-auto mt-5 max-w-md space-y-1.5 text-left">
              {wrongQuestions.map((question) => (
                <li key={question.id}>
                  <a
                    href={`#revisar-${question.id}`}
                    onClick={() => setReviewFilter("wrong")}
                    className="flex items-start gap-2 rounded-xl border border-rose-400/20 bg-rose-400/[0.05] px-3 py-2 text-xs text-slate-300 transition hover:border-rose-400/50"
                  >
                    <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400" />
                    <span className="flex-1 text-[11px] font-semibold uppercase tracking-wide">{question.topic}</span>
                    <span className="shrink-0 text-[10px] font-bold text-mq-premium-gold">Ver</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={onRestart}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-8 text-sm font-black text-[#0A1F44] transition hover:brightness-110 sm:w-auto"
            >
              <RotateCcw className="h-4 w-4" />
              {restartLabel}
            </button>
            <Link
              href="/dashboard/mir"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/20 px-8 text-sm font-bold text-white transition hover:border-white/40 sm:w-auto"
            >
              Volver al panel MIR
            </Link>
          </div>
        </div>

        <section className="mt-8" aria-labelledby="revisar-respuestas">
          <h2 id="revisar-respuestas" className="text-lg font-black text-white">
            Revisar respuestas
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            También las tienes guardadas en{" "}
            <Link href="/dashboard/mir/estudio" className="font-semibold text-mq-premium-gold hover:underline">
              Mi estudio
            </Link>
            .
          </p>
          <div className="mb-4 mt-3 flex flex-wrap gap-2">
            {(
              [
                ["wrong", `Falladas (${wrongQuestions.length})`],
                ["correct", `Correctas (${correctCount})`],
                ["all", `Todas (${total})`],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setReviewFilter(value)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                  reviewFilter === value
                    ? "bg-mq-premium-gold text-[#0A1F44]"
                    : "border border-white/15 text-slate-300 hover:border-white/30"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          {reviewQuestions.length === 0 ? (
            <p className="rounded-xl border border-dashed border-white/15 p-6 text-center text-sm text-slate-400">
              No hay preguntas en esta categoría.
            </p>
          ) : (
            <div className="space-y-4">
              {reviewQuestions.map((question) => (
                <MirQuestionReviewCard
                  key={question.id}
                  id={`revisar-${question.id}`}
                  question={question}
                  given={answers[question.id] ?? null}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const isAnswered = Boolean(selectedOptionId);
  const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
  const currentConfidence = confidences[currentQuestion.id];
  const confidenceFeedback = isAnswered ? getMirConfidenceFeedback(currentConfidence, isCorrect) : null;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-bold text-slate-300">
          Pregunta {currentIndex + 1} de {total}
        </p>
        <p className="text-xs font-semibold text-slate-400">
          <span className="text-emerald-400">{correctCount}</span> correctas ·{" "}
          <span className="text-mq-premium-gold">{formatMirNet(score.net)}</span> netas
        </p>
      </div>
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-mq-premium-gold transition-all"
          style={{ width: `${((currentIndex + (isAnswered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-premium-gold">
            {eyebrow}
            {/* En una práctica por especialidad el eyebrow ya la nombra; no se repite. */}
            {currentQuestion.examArea &&
            !eyebrow.toLocaleUpperCase("es").includes(currentQuestion.examArea) ? (
              <span className="text-slate-500"> · {currentQuestion.examArea}</span>
            ) : null}
          </p>
          <MirReportQuestionButton question={currentQuestion} />
        </div>
        {currentQuestion.officialExam ? (
          <div className="mt-2">
            <MirOfficialBadge officialExam={currentQuestion.officialExam} />
          </div>
        ) : null}
        <h2 className="mt-3 text-pretty text-base font-medium leading-relaxed text-white sm:text-lg">
          {renderWithBold(currentQuestion.statement)}
        </h2>
        {currentQuestion.image ? (
          <MirQuestionImage
            image={currentQuestion.image}
            number={currentQuestion.officialExam?.number}
            pending={currentQuestion.reviewStatus === "pending"}
          />
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="¿Cómo de seguro estás?">
          <span className="mr-1 text-xs font-semibold text-slate-400">
            {isAnswered ? "Tu seguridad:" : "¿Cómo de seguro estás?"}
          </span>
          {MIR_CONFIDENCE_LEVELS.map(({ value, label }) => {
            const isActive = currentConfidence === value;
            if (isAnswered && !isActive) return null;
            return (
              <button
                key={value}
                type="button"
                disabled={isAnswered}
                aria-pressed={isActive}
                onClick={() =>
                  setConfidences((prev) => {
                    const next = { ...prev };
                    if (next[currentQuestion.id] === value) delete next[currentQuestion.id];
                    else next[currentQuestion.id] = value;
                    return next;
                  })
                }
                className={`rounded-full border px-3 py-1 text-xs font-bold transition disabled:cursor-default ${
                  isActive ? CONFIDENCE_ACTIVE[value] : "border-white/15 text-slate-300 hover:border-white/30 hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
          {isAnswered && !currentConfidence ? <span className="text-xs text-slate-500">sin marcar</span> : null}
        </div>

        <div className="mt-3 grid gap-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrectOption = option.id === currentQuestion.correctOptionId;
            let tone =
              "border-white/15 bg-white/[0.03] text-slate-200 hover:border-white/30 hover:bg-white/[0.06]";
            let badgeTone = "border-white/20 text-slate-300";
            if (isAnswered && isCorrectOption) {
              tone = "border-emerald-400/60 bg-emerald-400/10 text-white";
              badgeTone = "border-emerald-400 bg-emerald-400 text-[#0A1F44]";
            } else if (isAnswered && isSelected) {
              tone = "border-rose-400/60 bg-rose-400/10 text-white";
              badgeTone = "border-rose-400 bg-rose-400 text-[#0A1F44]";
            } else if (isAnswered) {
              tone = "border-white/10 bg-white/[0.02] text-slate-400";
            }
            return (
              <button
                key={option.id}
                type="button"
                disabled={isAnswered}
                onClick={() => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.id }))}
                className={`touch-manipulation flex min-h-14 w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all disabled:cursor-default sm:text-base ${tone}`}
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${badgeTone}`}
                >
                  {option.label}
                </span>
                <span className="pt-0.5">{option.text}</span>
              </button>
            );
          })}
        </div>

        {isAnswered ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p
              className={`flex items-center gap-2 text-sm font-black ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}
            >
              {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              {isCorrect ? "¡Correcto!" : "Incorrecto"}
            </p>
            {confidenceFeedback ? (
              <p className="mt-2 rounded-lg border border-amber-400/25 bg-amber-400/[0.06] px-3 py-2 text-xs font-semibold text-amber-100">
                {confidenceFeedback}
              </p>
            ) : null}
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-300">
              {renderWithBold(currentQuestion.explanation)}
            </p>
            {currentQuestion.keyPoints?.length ? (
              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-mq-premium-gold">
                  Puntos clave
                </p>
                <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-slate-300">
                  {currentQuestion.keyPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mq-premium-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </article>

      {isAnswered ? (
        <button
          type="button"
          onClick={handleNext}
          disabled={isSaving}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110 disabled:opacity-60"
        >
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {currentIndex + 1 < total ? "Siguiente pregunta" : "Ver resultado"}
          {!isSaving ? <ArrowRight className="h-4 w-4" /> : null}
        </button>
      ) : null}
    </div>
  );
}

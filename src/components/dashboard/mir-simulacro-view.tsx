"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flag,
  HelpCircle,
  Loader2,
  XCircle,
} from "lucide-react";
import {
  MIR_EXAM_EDITIONS,
  buildMirSimulacroHref,
  getMirEdition,
  getMirAttempt,
  saveMirAttempt,
  selectMirExamQuestions,
  type MirExamAttempt,
} from "@/lib/training/mir-convocatoria";
import { recordMirSpecialtyStats } from "@/lib/training/mir-mastery";
import { recordMirAnswers } from "@/lib/training/mir-review";
import { registerMirTrainingDay } from "@/lib/training/mir-streak";
import type { TrainingQuestion } from "@/lib/questions/types";
import { renderWithBold } from "./mir-rich-text";

type Stage = "intro" | "exam" | "results";
type ReviewFilter = "wrong" | "blank" | "correct" | "all";


const SAVE_TIMEOUT_MS = 8000;

/** Evita que "Entregar examen" quede colgado indefinidamente si la conexión falla justo al guardar. */
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)),
  ]);
}

function formatClock(totalSeconds: number): string {
  const clamped = Math.max(0, totalSeconds);
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Simulacro completo del módulo MIR: cronometrado, en "modo examen" (sin
 * feedback instantáneo), navegable libremente entre preguntas hasta
 * entregar. Guarda el intento en la cuenta del usuario, alimenta la racha
 * MIR, suma al mapa de dominio y manda las falladas al repaso de errores
 * (ver mir-convocatoria.ts, mir-streak.ts, mir-mastery.ts y mir-review.ts
 * en src/lib/training).
 */
export function MirSimulacroView({ userId, editionCode }: { userId: string; editionCode?: string | null }) {
  const activeEdition = (editionCode ? getMirEdition(editionCode) : null) ?? MIR_EXAM_EDITIONS[0];
  const [stage, setStage] = useState<Stage>("intro");
  const [previousAttempt, setPreviousAttempt] = useState<MirExamAttempt | null>(null);
  const [isLoadingPrevious, setIsLoadingPrevious] = useState(true);

  const [questions, setQuestions] = useState<TrainingQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);

  const [attempt, setAttempt] = useState<MirExamAttempt | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("wrong");
  const submittedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    getMirAttempt(userId, activeEdition.code)
      .then((result) => {
        if (!cancelled) setPreviousAttempt(result);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingPrevious(false);
      });
    return () => {
      cancelled = true;
    };
  }, [userId, activeEdition.code]);

  useEffect(() => {
    if (stage !== "exam") return;
    const timer = setInterval(() => {
      setSecondsLeft((seconds) => (seconds > 0 ? seconds - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [stage]);

  async function handleSubmit() {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setIsSaving(true);

    let correct = 0;
    let wrong = 0;
    for (const question of questions) {
      const given = answers[question.id];
      if (!given) continue;
      if (given === question.correctOptionId) correct += 1;
      else wrong += 1;
    }
    const total = questions.length;
    const scorePercentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    const result: MirExamAttempt = {
      editionCode: activeEdition.code,
      scorePercentage,
      correctAnswers: correct,
      wrongAnswers: wrong,
      completedAt: new Date().toISOString(),
      sessionQuestionIds: questions.map((question) => question.id),
      answersByQuestionId: answers,
    };

    const outcomes = questions
      .filter((question) => answers[question.id])
      .map((question) => ({
        questionId: question.id,
        correct: answers[question.id] === question.correctOptionId,
      }));

    // Antes de guardar el intento: si aún no hay mapa de dominio, se arranca
    // desde los simulacros guardados y este contaría dos veces.
    try {
      await withTimeout(recordMirSpecialtyStats(userId, outcomes), SAVE_TIMEOUT_MS);
    } catch (error) {
      console.error("No se pudo actualizar el mapa de dominio MIR.", error);
    }

    try {
      await withTimeout(saveMirAttempt(userId, result), SAVE_TIMEOUT_MS);
      await withTimeout(registerMirTrainingDay(userId), SAVE_TIMEOUT_MS);
      await withTimeout(recordMirAnswers(userId, outcomes, "exam"), SAVE_TIMEOUT_MS);
    } catch (error) {
      console.error("No se pudo guardar el intento del simulacro MIR.", error);
    }

    setAttempt(result);
    setPreviousAttempt(result);
    setIsSaving(false);
    setStage("results");
  }

  useEffect(() => {
    if (stage === "exam" && secondsLeft === 0 && !submittedRef.current) {
      void handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, secondsLeft]);

  function handleStart() {
    const selected = selectMirExamQuestions(activeEdition);
    submittedRef.current = false;
    setQuestions(selected);
    setAnswers({});
    setCurrentIndex(0);
    setSecondsLeft(activeEdition.minutes * 60);
    setAttempt(null);
    setReviewFilter("wrong");
    setStage("exam");
  }

  function handleSelectOption(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  function handleRequestSubmit() {
    const unanswered = questions.length - Object.keys(answers).length;
    if (unanswered > 0) {
      const confirmed = window.confirm(
        `Te faltan ${unanswered} pregunta${unanswered === 1 ? "" : "s"} por responder. ¿Quieres entregar el examen de todas formas?`,
      );
      if (!confirmed) return;
    }
    void handleSubmit();
  }

  if (stage === "intro") {
    return (
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/dashboard/mir"
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al panel MIR
        </Link>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-9">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
            Simulacro cronometrado
          </p>
          {MIR_EXAM_EDITIONS.length > 1 ? (
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Elige simulacro">
              {MIR_EXAM_EDITIONS.map((edition) => (
                <Link
                  key={edition.code}
                  href={buildMirSimulacroHref(edition.code)}
                  replace
                  aria-current={edition.code === activeEdition.code ? "page" : undefined}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                    edition.code === activeEdition.code
                      ? "bg-mq-premium-gold text-[#0A1F44]"
                      : "border border-white/15 text-slate-300 hover:border-white/30"
                  }`}
                >
                  {edition.label}
                </Link>
              ))}
            </div>
          ) : null}
          <h1 className="mt-4 text-2xl font-black text-white sm:text-3xl">{activeEdition.label}</h1>
          <p className="mt-1 text-sm font-semibold text-slate-400">{activeEdition.description}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {activeEdition.questionCount} preguntas tipo MIR, cronometradas al ritmo real del examen
            oficial. Una vez comiences, el reloj corre sin pausas: puedes navegar libremente entre
            preguntas y cambiar tus respuestas hasta que entregues.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <p className="text-2xl font-black text-white">{activeEdition.questionCount}</p>
              <p className="text-[11px] font-semibold text-slate-400">preguntas</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <p className="text-2xl font-black text-white">{activeEdition.minutes}</p>
              <p className="text-[11px] font-semibold text-slate-400">minutos</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <p className="text-2xl font-black text-white">
                {isLoadingPrevious ? "—" : previousAttempt ? `${previousAttempt.scorePercentage}%` : "—"}
              </p>
              <p className="text-[11px] font-semibold text-slate-400">último intento</p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-mq-premium-gold/20 bg-mq-premium-gold/[0.06] p-4">
            <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-mq-premium-gold" />
            <p className="text-xs leading-relaxed text-slate-300">
              Modo examen: no verás si acertaste hasta entregar. Al terminar (o si se acaba el
              tiempo) verás tu puntaje y la revisión completa, pregunta por pregunta.
            </p>
          </div>

          <button
            type="button"
            onClick={handleStart}
            disabled={activeEdition.questionCount === 0}
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Comenzar simulacro <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  if (stage === "exam") {
    const total = questions.length;
    const currentQuestion = questions[currentIndex];
    const answeredCount = Object.keys(answers).length;
    const isLowTime = secondsLeft <= 300;

    if (!currentQuestion) return null;

    return (
      <div className="mx-auto w-full max-w-3xl pb-28">
        <div className="sticky top-0 z-10 -mx-4 mb-6 border-b border-white/10 bg-[#0A1F44]/95 px-4 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-bold text-slate-300">
              Pregunta {currentIndex + 1} de {total}
              <span className="ml-2 text-slate-500">· {answeredCount} respondidas</span>
            </p>
            <div
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-black ${
                isLowTime
                  ? "animate-pulse border-rose-400/50 bg-rose-400/10 text-rose-300"
                  : "border-white/15 bg-white/[0.04] text-white"
              }`}
            >
              <Clock className="h-3.5 w-3.5" />
              {formatClock(secondsLeft)}
            </div>
          </div>
          <div className="mt-3 flex gap-1 overflow-x-auto pb-1">
            {questions.map((question, index) => {
              const isAnswered = Boolean(answers[question.id]);
              const isCurrent = index === currentIndex;
              return (
                <button
                  key={question.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold transition ${
                    isCurrent
                      ? "bg-mq-premium-gold text-[#0A1F44]"
                      : isAnswered
                        ? "bg-mq-premium-gold/20 text-mq-premium-gold"
                        : "bg-white/[0.05] text-slate-400 hover:bg-white/10"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
          {currentQuestion.examArea ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-premium-gold">
              {currentQuestion.examArea}
            </p>
          ) : null}
          <h2 className="mt-3 text-pretty text-base font-medium leading-relaxed text-white sm:text-lg">
            {renderWithBold(currentQuestion.statement)}
          </h2>

          <div className="mt-6 grid gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectOption(currentQuestion.id, option.id)}
                  className={`touch-manipulation flex min-h-14 w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all sm:text-base ${
                    isSelected
                      ? "border-mq-premium-gold bg-mq-premium-gold/10 text-white"
                      : "border-white/15 bg-white/[0.03] text-slate-200 hover:border-white/30 hover:bg-white/[0.06]"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      isSelected
                        ? "border-mq-premium-gold bg-mq-premium-gold text-[#0A1F44]"
                        : "border-white/20 text-slate-300"
                    }`}
                  >
                    {option.label}
                  </span>
                  <span className="pt-0.5">{option.text}</span>
                </button>
              );
            })}
          </div>
        </article>

        <div className="fixed inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#0A1F44]/95 px-4 py-3 backdrop-blur-xl sm:px-8">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
              disabled={currentIndex === 0}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-white/15 px-4 text-sm font-bold text-white transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </button>

            {currentIndex + 1 === total ? (
              <button
                type="button"
                onClick={handleRequestSubmit}
                disabled={isSaving}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110 disabled:opacity-60"
              >
                {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Flag className="h-4 w-4" />}
                Entregar examen
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentIndex((index) => Math.min(total - 1, index + 1))}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-white/15 px-4 text-sm font-bold text-white transition hover:border-white/30"
              >
                Siguiente
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={handleRequestSubmit}
            disabled={isSaving}
            className="mx-auto mt-2 block text-[11px] font-semibold text-slate-500 underline-offset-4 hover:text-slate-300 hover:underline disabled:opacity-60"
          >
            Entregar en cualquier momento
          </button>
        </div>
      </div>
    );
  }

  // stage === "results"
  if (!attempt) return null;

  const blankCount = questions.length - attempt.correctAnswers - attempt.wrongAnswers;
  const filteredQuestions = questions.filter((question) => {
    const given = answers[question.id];
    if (reviewFilter === "all") return true;
    if (reviewFilter === "blank") return !given;
    if (reviewFilter === "correct") return given === question.correctOptionId;
    return Boolean(given) && given !== question.correctOptionId;
  });

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center sm:p-9">
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          Resultado del simulacro
        </p>
        <p className="mt-4 text-6xl font-black text-white">
          {attempt.scorePercentage}
          <span className="text-2xl font-bold text-slate-400">%</span>
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-3">
            <p className="text-xl font-black text-emerald-400">{attempt.correctAnswers}</p>
            <p className="text-[11px] font-semibold text-slate-400">correctas</p>
          </div>
          <div className="rounded-xl border border-rose-400/20 bg-rose-400/[0.06] p-3">
            <p className="text-xl font-black text-rose-400">{attempt.wrongAnswers}</p>
            <p className="text-[11px] font-semibold text-slate-400">falladas</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-xl font-black text-slate-300">{blankCount}</p>
            <p className="text-[11px] font-semibold text-slate-400">sin responder</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleStart}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-8 text-sm font-black text-[#0A1F44] transition hover:brightness-110 sm:w-auto"
          >
            Repetir simulacro
          </button>
          <Link
            href="/dashboard/mir"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 text-sm font-bold text-white transition hover:border-white/40 sm:w-auto"
          >
            Volver al panel MIR
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {(
            [
              ["wrong", "Falladas"],
              ["blank", "Sin responder"],
              ["correct", "Correctas"],
              ["all", "Todas"],
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

        {filteredQuestions.length === 0 ? (
          <p className="rounded-xl border border-dashed border-white/15 p-6 text-center text-sm text-slate-400">
            No hay preguntas en esta categoría.
          </p>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((question) => {
              const given = answers[question.id];
              const isCorrect = given === question.correctOptionId;
              const givenOption = question.options.find((option) => option.id === given);
              const correctOption = question.options.find(
                (option) => option.id === question.correctOptionId,
              );

              return (
                <article
                  key={question.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    {question.examArea ? (
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mq-premium-gold">
                        {question.examArea}
                      </p>
                    ) : (
                      <span />
                    )}
                    {given ? (
                      isCorrect ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      ) : (
                        <XCircle className="h-4 w-4 shrink-0 text-rose-400" />
                      )
                    ) : (
                      <span className="shrink-0 rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-bold text-slate-400">
                        Sin responder
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white">
                    {renderWithBold(question.statement)}
                  </p>

                  <div className="mt-4 space-y-1.5 text-sm">
                    {givenOption && !isCorrect ? (
                      <p className="text-rose-300">
                        Tu respuesta: {givenOption.label}. {givenOption.text}
                      </p>
                    ) : null}
                    {correctOption ? (
                      <p className="text-emerald-300">
                        Correcta: {correctOption.label}. {correctOption.text}
                      </p>
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {question.explanation}
                  </p>

                  {question.keyPoints?.length ? (
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-mq-premium-gold">
                        Puntos clave
                      </p>
                      <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-slate-300">
                        {question.keyPoints.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mq-premium-gold" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2, RotateCcw, XCircle } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";
import { recordMirSpecialtyStats } from "@/lib/training/mir-mastery";
import { recordMirAnswers, type MirAnswerSource } from "@/lib/training/mir-review";
import { registerMirTrainingDay } from "@/lib/training/mir-streak";
import { MirDoctorMascot } from "./mir-doctor-mascot";
import { renderWithBold } from "./mir-rich-text";

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
  /** Guardado adicional al terminar (p. ej. marcar el reto diario como hecho). */
  saveExtra?: (result: { correct: number; total: number }) => Promise<void>;
  /** Mensaje de la mascota en el resumen; por defecto, uno según el resultado. */
  summaryMessage?: (correct: number, total: number) => string;
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
 * dominio, y cuenta el día para la racha MIR.
 */
export function MirPracticeSession({
  userId,
  questions,
  eyebrow,
  source,
  onRestart,
  restartLabel,
  onSaved,
  saveExtra,
  summaryMessage,
}: MirPracticeSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const selectedOptionId = currentQuestion ? answers[currentQuestion.id] : undefined;
  const correctCount = questions.filter(
    (question) => answers[question.id] === question.correctOptionId,
  ).length;

  async function handleFinish() {
    setIsSaving(true);
    const outcomes = questions
      .filter((question) => answers[question.id])
      .map((question) => ({
        questionId: question.id,
        correct: answers[question.id] === question.correctOptionId,
      }));
    // Escrituras independientes: que falle una no impide las demás.
    const results = await Promise.allSettled([
      withTimeout(recordMirAnswers(userId, outcomes, source), SAVE_TIMEOUT_MS),
      withTimeout(recordMirSpecialtyStats(userId, outcomes), SAVE_TIMEOUT_MS),
      withTimeout(registerMirTrainingDay(userId), SAVE_TIMEOUT_MS),
      ...(saveExtra ? [withTimeout(saveExtra({ correct: correctCount, total }), SAVE_TIMEOUT_MS)] : []),
    ]);
    for (const result of results) {
      if (result.status === "rejected") {
        console.error("No se pudo guardar la sesión de práctica MIR.", result.reason);
      }
    }
    setIsSaving(false);
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
    const wrongQuestions = questions.filter(
      (question) => answers[question.id] && answers[question.id] !== question.correctOptionId,
    );
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
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-300">
            {summaryMessage
              ? summaryMessage(correctCount, total)
              : getSummaryMessage(correctCount, total, source)}
          </p>

          {wrongQuestions.length > 0 ? (
            <ul className="mx-auto mt-5 max-w-md space-y-1.5 text-left">
              {wrongQuestions.map((question) => (
                <li
                  key={question.id}
                  className="flex items-start gap-2 rounded-xl border border-rose-400/20 bg-rose-400/[0.05] px-3 py-2 text-xs text-slate-300"
                >
                  <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400" />
                  <span className="text-[11px] font-semibold uppercase tracking-wide">{question.topic}</span>
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
      </div>
    );
  }

  if (!currentQuestion) return null;

  const isAnswered = Boolean(selectedOptionId);
  const isCorrect = selectedOptionId === currentQuestion.correctOptionId;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-bold text-slate-300">
          Pregunta {currentIndex + 1} de {total}
        </p>
        <p className="text-xs font-semibold text-slate-400">
          <span className="text-emerald-400">{correctCount}</span> correctas
        </p>
      </div>
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-mq-premium-gold transition-all"
          style={{ width: `${((currentIndex + (isAnswered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-premium-gold">
          {eyebrow}
          {/* En una práctica por especialidad el eyebrow ya la nombra; no se repite. */}
          {currentQuestion.examArea &&
          !eyebrow.toLocaleUpperCase("es").includes(currentQuestion.examArea) ? (
            <span className="text-slate-500"> · {currentQuestion.examArea}</span>
          ) : null}
        </p>
        <h2 className="mt-3 text-pretty text-base font-medium leading-relaxed text-white sm:text-lg">
          {renderWithBold(currentQuestion.statement)}
        </h2>

        <div className="mt-6 grid gap-3">
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
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
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

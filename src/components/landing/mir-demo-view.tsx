"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, RotateCcw, XCircle } from "lucide-react";
import { MIR_EXAM_EDITIONS } from "@/lib/training/mir-convocatoria";
import { getMirWhatsAppUrl } from "@/lib/mir/config";
import type { TrainingQuestion } from "@/lib/questions/types";

const DEMO_QUESTION_COUNT = 5;

function pickRandomQuestions(pool: TrainingQuestion[], count: number): TrainingQuestion[] {
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

function renderWithBold(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/**
 * Demo gratuita del módulo MIR: sin selección de universidad ni especialidad
 * (irrelevante para este examen), con preguntas reales del banco MIR de
 * Método Q. Tema oscuro/dorado consistente con /mir y /dashboard/mir.
 */
export function MirDemoView() {
  const questions = useMemo(() => {
    const pool = MIR_EXAM_EDITIONS.flatMap((edition) => edition.questions);
    return pickRandomQuestions(pool, Math.min(DEMO_QUESTION_COUNT, pool.length));
  }, []);
  const whatsappUrl = getMirWhatsAppUrl();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const totalQuestions = questions.length;
  const isFinished = currentIndex >= totalQuestions;
  const currentQuestion = isFinished ? null : questions[currentIndex];
  const hasAnswered = Boolean(selectedOptionId);

  function handleSelect(optionId: string) {
    if (hasAnswered || !currentQuestion) return;
    setSelectedOptionId(optionId);
    if (optionId === currentQuestion.correctOptionId) {
      setCorrectCount((count) => count + 1);
    }
  }

  function handleNext() {
    setSelectedOptionId(null);
    setCurrentIndex((index) => index + 1);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setCorrectCount(0);
  }

  if (totalQuestions === 0) {
    return (
      <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-sm text-slate-300">
          El banco de preguntas aún se está cargando. Vuelve en unos días.
        </p>
        <Link
          href="/mir"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44]"
        >
          Volver al módulo MIR
        </Link>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center sm:p-10">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <Globe2 className="h-3.5 w-3.5" />
          Demo módulo MIR
        </p>
        <p className="mt-6 text-6xl font-black text-white">
          {correctCount}
          <span className="text-2xl font-bold text-slate-400">/{totalQuestions}</span>
        </p>
        <h1 className="mt-2 text-xl font-black text-white">Así fue tu demo</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
          Esto fue apenas una muestra de {totalQuestions} preguntas. El banco completo tiene 100
          preguntas de examen MIR con explicaciones detalladas por cada una, simulacros
          cronometrados y seguimiento de tu progreso por área.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-8 text-sm font-black text-[#0A1F44] transition hover:brightness-110 sm:w-auto"
          >
            Quiero el banco completo <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 text-sm font-bold text-white transition hover:border-white/40 sm:w-auto"
          >
            <RotateCcw className="h-4 w-4" />
            Repetir demo
          </button>
        </div>
        <Link
          href="/mir"
          className="mt-6 inline-block text-xs font-semibold text-slate-400 underline-offset-4 hover:text-slate-300 hover:underline"
        >
          Volver al módulo MIR
        </Link>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const isCorrectSelected = selectedOptionId === currentQuestion.correctOptionId;

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-xs font-bold text-slate-400">
        <span>
          Pregunta {currentIndex + 1} de {totalQuestions}
        </span>
        <span className="text-mq-premium-gold">Demo módulo MIR</span>
      </div>
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-mq-premium-gold transition-all duration-300"
          style={{ width: `${((currentIndex + (hasAnswered ? 1 : 0)) / totalQuestions) * 100}%` }}
        />
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
            const isSelected = selectedOptionId === option.id;
            const isCorrectOption = option.id === currentQuestion.correctOptionId;
            const showCorrectStyle = hasAnswered && isCorrectOption;
            const showIncorrectStyle = hasAnswered && isSelected && !isCorrectOption;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                disabled={hasAnswered}
                className={`touch-manipulation flex min-h-14 w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all sm:text-base ${
                  showCorrectStyle
                    ? "border-emerald-400/60 bg-emerald-400/10 text-white"
                    : showIncorrectStyle
                      ? "border-rose-400/60 bg-rose-400/10 text-white"
                      : "border-white/15 bg-white/[0.03] text-slate-200 hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                    showCorrectStyle
                      ? "border-emerald-400 bg-emerald-400 text-[#052e26]"
                      : showIncorrectStyle
                        ? "border-rose-400 bg-rose-400 text-[#3f0d1a]"
                        : "border-white/20 text-slate-300"
                  }`}
                >
                  {option.label}
                </span>
                <span className="pt-0.5">{option.text}</span>
                {showCorrectStyle ? (
                  <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-emerald-400" />
                ) : showIncorrectStyle ? (
                  <XCircle className="ml-auto h-5 w-5 shrink-0 text-rose-400" />
                ) : null}
              </button>
            );
          })}
        </div>

        {hasAnswered ? (
          <div className="mt-6 space-y-4">
            <p
              className={`text-sm font-bold ${isCorrectSelected ? "text-emerald-400" : "text-rose-400"}`}
            >
              {isCorrectSelected ? "¡Correcto!" : "No era esa."}
            </p>
            {currentQuestion.keyPoints?.length ? (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-mq-premium-gold">
                  Puntos clave
                </p>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-300">
                  {currentQuestion.keyPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mq-premium-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110 sm:w-auto"
            >
              {currentIndex + 1 === totalQuestions ? "Ver resultado" : "Siguiente pregunta"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </article>
    </div>
  );
}

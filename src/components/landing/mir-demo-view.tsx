"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, RotateCcw, XCircle } from "lucide-react";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { shuffleMirQuestionsOptions } from "@/lib/training/mir-options";
import { formatSpecialtyLabel, getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import { MirScoreBreakdown } from "@/components/dashboard/mir-score";
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
    const pool = MIR_QUESTIONS;
    return shuffleMirQuestionsOptions(
      pickRandomQuestions(pool, Math.min(DEMO_QUESTION_COUNT, pool.length)),
    );
  }, []);
  const whatsappUrl = getMirWhatsAppUrl();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const totalQuestions = questions.length;
  const isFinished = currentIndex >= totalQuestions;
  const currentQuestion = isFinished ? null : questions[currentIndex];
  const hasAnswered = Boolean(selectedOptionId);

  function handleSelect(optionId: string) {
    if (hasAnswered || !currentQuestion) return;
    setSelectedOptionId(optionId);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
    if (optionId === currentQuestion.correctOptionId) {
      setCorrectCount((count) => count + 1);
    }
  }

  function handleNext() {
    setSelectedOptionId(null);
    setCurrentIndex((index) => index + 1);
    if (currentIndex + 1 >= totalQuestions) window.scrollTo({ top: 0 });
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setCorrectCount(0);
    setAnswers({});
    window.scrollTo({ top: 0 });
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
      <MirDemoResults
        questions={questions}
        answers={answers}
        correctCount={correctCount}
        whatsappUrl={whatsappUrl}
        onRestart={handleRestart}
      />
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

function getQuestionSpecialty(question: TrainingQuestion): string {
  const keys = getQuestionSpecialtyKeys(question);
  return keys.length > 0 ? keys.map(formatSpecialtyLabel).join(" / ") : question.examArea ?? question.topic;
}

function DemoCtas({
  whatsappUrl,
  onRestart,
}: {
  whatsappUrl: string;
  onRestart: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
        onClick={onRestart}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 text-sm font-bold text-white transition hover:border-white/40 sm:w-auto"
      >
        <RotateCcw className="h-4 w-4" />
        Repetir demo
      </button>
    </div>
  );
}

/**
 * Resultado de la demo: nota MIR estimada (netas), aciertos por
 * especialidad y revisión completa de cada pregunta con su explicación,
 * para que quien prueba la demo vea todo lo que da el módulo.
 */
function MirDemoResults({
  questions,
  answers,
  correctCount,
  whatsappUrl,
  onRestart,
}: {
  questions: TrainingQuestion[];
  answers: Record<string, string>;
  correctCount: number;
  whatsappUrl: string;
  onRestart: () => void;
}) {
  const total = questions.length;
  const answeredCount = questions.filter((question) => answers[question.id]).length;
  const wrongCount = answeredCount - correctCount;

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center sm:p-10">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <Globe2 className="h-3.5 w-3.5" />
          Demo módulo MIR · resultado
        </p>
        <h1 className="mt-3 text-2xl font-black text-white">
          {correctCount} de {total} correctas
        </h1>
        <div className="mt-6">
          <MirScoreBreakdown correct={correctCount} wrong={wrongCount} total={total} />
        </div>

        <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Resultado por especialidad">
          {questions.map((question, index) => {
            const isCorrect = answers[question.id] === question.correctOptionId;
            return (
              <li
                key={question.id}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${
                  isCorrect
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-rose-400/30 bg-rose-400/10 text-rose-300"
                }`}
              >
                {isCorrect ? <CheckCircle2 className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
                {index + 1}. {getQuestionSpecialty(question)}
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-slate-300">
          Esto fue una muestra de {total} preguntas. El banco completo tiene {MIR_QUESTIONS.length} preguntas
          de examen MIR con explicación detallada, simulacros cronometrados con nota en netas, repaso de tus
          errores y un mapa de tu dominio por especialidad.
        </p>
        <div className="mt-6">
          <DemoCtas whatsappUrl={whatsappUrl} onRestart={onRestart} />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-black uppercase tracking-wide text-white">Revisión pregunta por pregunta</h2>
        <ol className="space-y-4">
          {questions.map((question, index) => {
            const givenId = answers[question.id];
            const isCorrect = givenId === question.correctOptionId;
            const given = question.options.find((option) => option.id === givenId);
            const correct = question.options.find((option) => option.id === question.correctOptionId);
            return (
              <li key={question.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-premium-gold">
                    {index + 1}. {getQuestionSpecialty(question)}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold ${
                      isCorrect ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                    {isCorrect ? "Correcta" : "Incorrecta"}
                  </span>
                </div>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-white sm:text-base">
                  {renderWithBold(question.statement)}
                </p>

                <div className="mt-4 space-y-2 text-sm">
                  {!isCorrect && given ? (
                    <p className="flex gap-2 rounded-xl border border-rose-400/30 bg-rose-400/[0.06] px-3 py-2 text-slate-200">
                      <span className="shrink-0 font-black text-rose-300">Tu respuesta · {given.label}</span>
                      <span>{given.text}</span>
                    </p>
                  ) : null}
                  {correct ? (
                    <p className="flex gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/[0.06] px-3 py-2 text-slate-200">
                      <span className="shrink-0 font-black text-emerald-300">Correcta · {correct.label}</span>
                      <span>{correct.text}</span>
                    </p>
                  ) : null}
                </div>

                {question.explanation ? (
                  <div className="mt-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-mq-premium-gold">
                      Explicación
                    </p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-300">
                      {renderWithBold(question.explanation)}
                    </p>
                  </div>
                ) : null}

                {question.keyPoints?.length ? (
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-mq-premium-gold">
                      Puntos clave
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-300">
                      {question.keyPoints.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mq-premium-gold" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="rounded-2xl border border-mq-premium-gold/25 bg-mq-premium-gold/[0.06] p-6 text-center">
        <p className="text-sm font-bold text-white">¿Quieres entrenar con el banco completo?</p>
        <div className="mt-4">
          <DemoCtas whatsappUrl={whatsappUrl} onRestart={onRestart} />
        </div>
        <Link
          href="/mir"
          className="mt-4 inline-block text-xs font-semibold text-slate-400 underline-offset-4 hover:text-slate-300 hover:underline"
        >
          Volver al módulo MIR
        </Link>
      </section>
    </div>
  );
}

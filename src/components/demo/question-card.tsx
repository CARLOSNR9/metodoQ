"use client";

import { useState } from "react";

export type QuestionOption = {
  id: string;
  label: string;
  text: string;
};

export type QuestionCardProps = {
  question: string;
  options: QuestionOption[];
  correctOptionId?: string;
  explanation?: string;
  keyPoints?: string[];
  dynamicFeedback?: string | null;
  onAnswerSelect?: (optionId: string, isCorrect: boolean) => void;
  className?: string;
};

const defaultQuestion =
  "Paciente con fiebre, hipotension y lactato elevado. Diagnostico mas probable?";

const defaultOptions: QuestionOption[] = [
  { id: "A", label: "A", text: "Shock hipovolemico" },
  { id: "B", label: "B", text: "Shock septico" },
  { id: "C", label: "C", text: "Shock cardiogenico" },
  { id: "D", label: "D", text: "Shock obstructivo" },
];

const defaultExplanation =
  "Shock septico se caracteriza por infeccion + disfuncion organica + lactato elevado.";

const defaultKeyPoints = [
  "Sospecha sepsis ante hipotension persistente y datos de hipoperfusion.",
  "Inicia reanimacion y antibiotico temprano para reducir mortalidad.",
];

export function QuestionCard({
  question = defaultQuestion,
  options = defaultOptions,
  correctOptionId = "B",
  explanation = defaultExplanation,
  keyPoints = defaultKeyPoints,
  dynamicFeedback = null,
  onAnswerSelect,
  className,
}: QuestionCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const hasAnswered = isConfirmed;
  const isCorrect = selectedOptionId === correctOptionId;

  const handleConfirm = () => {
    if (selectedOptionId && !isConfirmed) {
      setIsConfirmed(true);
      onAnswerSelect?.(selectedOptionId, selectedOptionId === correctOptionId);
    }
  };

  return (
    <article
      className={`w-full rounded-2xl border border-mq-border-strong bg-mq-surface p-5 shadow-[0_24px_60px_-36px_rgb(0_209_255/0.45)] sm:p-7 ${className ?? ""}`}
      aria-label="Tarjeta de pregunta"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-accent">
        Pregunta
      </p>
      <h2 className="mt-3 text-pretty text-base font-medium leading-relaxed text-foreground sm:text-lg">
        {question}
      </h2>

      <div className="mt-6 grid gap-3">
        {options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrectOption = option.id === correctOptionId;
          const showCorrectStyle = hasAnswered && isCorrectOption;
          const showIncorrectStyle = hasAnswered && isSelected && !isCorrect;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                if (hasAnswered) {
                  return;
                }
                setSelectedOptionId(option.id);
              }}
              disabled={hasAnswered}
              className={`touch-manipulation flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:min-h-16 sm:px-5 ${
                showCorrectStyle
                  ? "scale-[1.01] border-emerald-400/80 bg-emerald-500/15 text-white shadow-[0_0_0_1px_rgb(16_185_129/0.3)_inset]"
                  : showIncorrectStyle
                    ? "scale-[1.01] border-rose-400/80 bg-rose-500/15 text-white shadow-[0_0_0_1px_rgb(244_63_94/0.28)_inset]"
                    : isSelected
                      ? "scale-[1.01] border-mq-accent/70 bg-mq-accent/15 text-white shadow-[0_0_0_1px_rgb(0_209_255/0.24)_inset]"
                      : "border-mq-border bg-white/[0.03] text-foreground hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:border-mq-border disabled:hover:bg-white/[0.03]"
              }`}
              aria-pressed={isSelected}
            >
              <span
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                  showCorrectStyle
                    ? "border-emerald-300 bg-emerald-300 text-[#052e26]"
                    : showIncorrectStyle
                      ? "border-rose-300 bg-rose-300 text-[#3f0d1a]"
                      : isSelected
                        ? "border-mq-accent bg-mq-accent text-mq-accent-foreground"
                        : "border-mq-border-strong bg-white/[0.04] text-mq-muted"
                }`}
              >
                {option.label}
              </span>
              <span className="text-sm leading-snug sm:text-base">{option.text}</span>
            </button>
          );
        })}
      </div>

      {!isConfirmed && selectedOptionId && (
        <div className="mq-fade-up mt-6">
          <button
            type="button"
            onClick={handleConfirm}
            className="touch-manipulation flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground shadow-[0_8px_24px_-12px_rgb(0_209_255/0.5)] transition duration-200 hover:brightness-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:min-h-14 sm:text-base"
          >
            Confirmar Respuesta
          </button>
        </div>
      )}

      {hasAnswered ? (
        <section className="mq-fade-up mt-6 rounded-xl border border-mq-border-strong bg-background/60 p-4 sm:p-5">
          <p
            className={`inline-flex items-center gap-2 text-sm font-semibold ${
              isCorrect ? "text-emerald-300" : "text-rose-300"
            }`}
          >
            <span aria-hidden>{isCorrect ? "✅" : "❌"}</span>
            {isCorrect ? "Correcto" : "Incorrecto"}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
            {explanation}
          </p>
          {dynamicFeedback ? (
            <div className="mt-4 rounded-lg border border-indigo-300/35 bg-indigo-500/10 p-3">
              <p className="text-sm font-semibold text-indigo-100">{dynamicFeedback}</p>
            </div>
          ) : null}

          <div className="mt-5 rounded-lg border border-mq-border bg-white/[0.02] p-4">
            <p className="text-sm font-semibold text-mq-accent">
              🧠 Lo que debes saber
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mq-muted">
              {keyPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 text-mq-accent" aria-hidden>
                    •
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Info, Lock, ArrowRight, ExternalLink, ChevronRight, Flag } from "lucide-react";
import Link from "next/link";
import { isExternalTheoryLink } from "@/lib/questions/theory-link";
import { TheoryDeepDivePanel } from "@/components/demo/theory-deep-dive-panel";
import { ReportQuestionModal } from "@/components/demo/report-question-modal";

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
  questionId?: string;
  topic?: string;
  /** Texto largo para la píldora de profundización. */
  theoryContent?: string;
  /** Enlace a teoría completa (externa o `/teoria/...`). */
  theoryHref?: string | null;
  userId?: string | null;
  dynamicFeedback?: string | null;
  incorrectAnswerDetail?: string;
  examAreaLabel?: string;
  onAnswerSelect?: (optionId: string, isCorrect: boolean) => void;
  className?: string;
  isLocked?: boolean;
  /** Examen oficial: sin colores de acierto/error ni explicación hasta el final. */
  examMode?: boolean;
  /** Vista previa admin: muestra retroalimentación sin responder. */
  defaultSelectedOptionId?: string | null;
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
  questionId,
  topic,
  theoryContent,
  theoryHref = null,
  userId = null,
  dynamicFeedback = null,
  incorrectAnswerDetail,
  examAreaLabel,
  onAnswerSelect,
  className,
  isLocked = false,
  examMode = false,
  defaultSelectedOptionId = null,
}: QuestionCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(
    defaultSelectedOptionId,
  );
  const [isTheoryPanelOpen, setIsTheoryPanelOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  useEffect(() => {
    setSelectedOptionId(defaultSelectedOptionId);
    setIsTheoryPanelOpen(false);
  }, [defaultSelectedOptionId, questionId, question]);
  const hasAnswered = Boolean(selectedOptionId);
  const isCorrect = selectedOptionId === correctOptionId;
  const trimmedTheoryContent = theoryContent?.trim();
  const showTheoryPill =
    hasAnswered && Boolean(trimmedTheoryContent || theoryHref);

  return (
    <article
      className={`w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-36px_rgb(0_209_255/0.45)] sm:p-7 ${className ?? ""}`}
      aria-label="Tarjeta de pregunta"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-accent">
          {examAreaLabel ?? "Pregunta"}
        </p>
        <button
          type="button"
          onClick={() => setIsReportModalOpen(true)}
          className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          title="Reportar pregunta"
        >
          <Flag className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Reportar</span>
        </button>
      </div>
      <h2 className="mt-3 text-pretty text-base font-medium leading-relaxed text-foreground sm:text-lg">
        {question.split(/(\*\*.*?\*\*)/g).map((part, index) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={index} className="font-bold text-slate-900">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        })}
      </h2>

      <div className="mt-6 grid gap-3">
        {options.map((option, index) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrectOption = option.id === correctOptionId;
          const showCorrectStyle = hasAnswered && isCorrectOption && !examMode;
          const showIncorrectStyle = hasAnswered && isSelected && !isCorrect && !examMode;

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              type="button"
              onClick={() => {
                if (hasAnswered) {
                  return;
                }
                setSelectedOptionId(option.id);
                onAnswerSelect?.(option.id, option.id === correctOptionId);
              }}
              disabled={hasAnswered}
              className={`touch-manipulation relative flex min-h-14 w-full items-center gap-3 overflow-hidden rounded-xl border px-4 py-3 text-left transition-all duration-300 sm:min-h-16 sm:px-5 ${
                showCorrectStyle
                  ? "border-emerald-500/50 bg-emerald-500/10 text-slate-900 shadow-[0_0_20px_-5px_rgba(16,185_129,0.3)]"
                  : showIncorrectStyle
                    ? "border-rose-500/50 bg-rose-500/10 text-slate-900 shadow-[0_0_20px_-5px_rgba(244,63,94,0.3)]"
                    : isSelected
                      ? "border-mq-accent/50 bg-mq-accent/10 text-slate-900 shadow-[0_0_20px_-5px_rgba(0,209,255,0.3)]"
                      : "border-slate-200 bg-slate-50 text-foreground backdrop-blur-sm hover:border-slate-300 hover:bg-slate-100"
              }`}
              aria-pressed={isSelected}
            >
              {showCorrectStyle && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"
                />
              )}
              
              <span
                className={`relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors duration-300 ${
                  showCorrectStyle
                    ? "border-emerald-400 bg-emerald-400 text-[#052e26]"
                    : showIncorrectStyle
                      ? "border-rose-400 bg-rose-400 text-[#3f0d1a]"
                      : isSelected
                        ? "border-mq-accent bg-mq-accent text-mq-accent-foreground"
                        : "border-slate-300 bg-slate-50 text-slate-500"
                }`}
              >
                {option.label}
              </span>
              <span className="relative z-10 text-sm leading-snug sm:text-base">
                {option.text.split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <strong key={partIndex} className="font-bold">
                        {part.slice(2, -2)}
                      </strong>
                    );
                  }
                  return part;
                })}
              </span>
            </motion.button>
          );
        })}
      </div>


      <AnimatePresence>
        {hasAnswered && !examMode && (
          <motion.section
            initial={{ opacity: 0, height: 0, y: 20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className={`mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white/[0.03] p-5 backdrop-blur-md sm:p-6 relative ${isLocked ? "min-h-[300px]" : ""}`}
          >
            <div className={`transition-all duration-700 ${isLocked ? "blur-xl select-none pointer-events-none grayscale" : ""}`}>
              <div className="flex items-center justify-between">
                <p
                  className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${
                    isCorrect ? "text-emerald-600" : "text-rose-500"
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <Sparkles className="h-4 w-4" />
                      ¡Excelente! Respuesta Correcta
                    </>
                  ) : (
                    <>
                      <Info className="h-4 w-4" />
                      Sigue aprendiendo
                    </>
                  )}
                </p>
              </div>
              
              {!isCorrect && incorrectAnswerDetail && (
                <p className="mt-4 rounded-xl border border-rose-500/20 bg-rose-500/10 p-4 text-base leading-relaxed text-rose-800">
                  {incorrectAnswerDetail.split(/(\*\*.*?\*\*)/g).map((part, index) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              )}
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {explanation.split(/(\*\*.*?\*\*)/g).map((part, index) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </p>

              {showTheoryPill && (
                <div className="mt-5">
                  {trimmedTheoryContent && questionId ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsTheoryPanelOpen(true)}
                        className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-mq-accent/10 p-4 text-left transition hover:border-mq-accent/35 hover:from-slate-100 hover:to-mq-accent/15"
                      >
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mq-accent/15 text-mq-accent ring-1 ring-mq-accent/20">
                          <BookOpen className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-mq-accent">
                            {isCorrect ? "Repasar tema" : "Profundizar"}
                          </span>
                          <span className="mt-1 block text-sm font-bold text-slate-900">
                            {topic ?? "Leer explicación completa"}
                          </span>
                          <span className="mt-1 block text-xs text-slate-500">
                            Abre la píldora de teoría y guárdala en Mi Estudio
                          </span>
                        </span>
                        <ChevronRight className="h-5 w-5 shrink-0 text-mq-accent/80 transition group-hover:translate-x-0.5 group-hover:text-mq-accent" />
                      </button>
                      <TheoryDeepDivePanel
                        open={isTheoryPanelOpen}
                        onClose={() => setIsTheoryPanelOpen(false)}
                        questionId={questionId}
                        topic={topic ?? "Tema"}
                        statement={question}
                        theoryContent={trimmedTheoryContent}
                        examArea={examAreaLabel}
                        userId={userId}
                      />
                    </>
                  ) : theoryHref && isExternalTheoryLink(theoryHref) ? (
                    <a
                      href={theoryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center gap-3 rounded-2xl border border-mq-accent/40 bg-mq-accent/15 px-4 py-4 transition hover:border-mq-accent/60 hover:bg-mq-accent/20"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent">
                        <BookOpen className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-mq-accent">
                          Profundizar
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-semibold text-slate-900">
                          {topic ? `Teoría externa: ${topic}` : "Abrir teoría completa"}
                        </span>
                      </span>
                      <ExternalLink className="h-5 w-5 shrink-0 text-mq-accent" />
                    </a>
                  ) : theoryHref ? (
                    <Link
                      href={theoryHref}
                      className="group flex w-full items-center gap-3 rounded-2xl border border-mq-accent/40 bg-mq-accent/15 px-4 py-4 transition hover:border-mq-accent/60 hover:bg-mq-accent/20"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent">
                        <BookOpen className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-mq-accent">
                          Profundizar
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-semibold text-slate-900">
                          {topic ? `Píldora de teoría: ${topic}` : "Leer explicación completa del tema"}
                        </span>
                      </span>
                      <ArrowRight className="h-5 w-5 shrink-0 text-mq-accent" />
                    </Link>
                  ) : null}
                </div>
              )}
              
              {dynamicFeedback && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mt-5 rounded-xl border border-mq-accent/20 bg-mq-accent/5 p-4"
                >
                  <p className="text-sm font-medium text-mq-accent">{dynamicFeedback}</p>
                </motion.div>
              )}

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900/90">
                  <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-mq-accent/20 text-mq-accent">
                    🧠
                  </span>
                  Lo que debes saber para el examen
                </h4>
                <ul className="mt-4 space-y-3">
                  {keyPoints.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex gap-3 text-sm leading-relaxed text-slate-500"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mq-accent/60" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Zeigarnik Paywall Overlay */}
            {isLocked && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/40 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent shadow-[0_0_30px_rgba(0,209,255,0.3)]"
                >
                  <Lock size={32} />
                </motion.div>
                
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Explicación Bloqueada</h4>
                <p className="mt-2 text-sm text-slate-500 max-w-[280px]">
                  El 85% de los errores en este tema se deben a falta de bases moleculares. No te quedes con la duda.
                </p>
                
                <Link
                  href="/dashboard/planes"
                  className="mt-6 flex h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-xs font-black text-mq-accent-foreground transition-all hover:scale-105"
                >
                  DESBLOQUEAR ANÁLISIS PRO <ArrowRight size={14} />
                </Link>
                <p className="mt-4 text-[10px] font-bold text-mq-accent uppercase tracking-widest animate-pulse">
                  Efecto Zeigarnik Activado
                </p>
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      {questionId && (
        <ReportQuestionModal
          isOpen={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
          questionId={questionId}
          topic={topic}
          userId={userId}
        />
      )}
    </article>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  HelpCircle,
  Loader2,
  PauseCircle,
  PlayCircle,
  RotateCcw,
} from "lucide-react";
import {
  MIR_EXAM_EDITIONS,
  buildMirSimulacroHref,
  clearMirSimulacroProgress,
  getMirEdition,
  getMirAttempt,
  getMirSimulacroProgress,
  restoreMirSimulacro,
  saveMirAttempt,
  saveMirSimulacroProgress,
  selectMirExamQuestions,
  type MirExamAttempt,
  type MirSimulacroProgress,
} from "@/lib/training/mir-convocatoria";
import { recordMirSpecialtyStats } from "@/lib/training/mir-mastery";
import { recordMirAnswers } from "@/lib/training/mir-review";
import { recordMirStudyAnswers } from "@/lib/training/mir-study-log";
import { registerMirTrainingDay } from "@/lib/training/mir-streak";
import type { TrainingQuestion } from "@/lib/questions/types";
import { MirOfficialBadge, renderWithBold } from "./mir-rich-text";
import { MirQuestionReviewCard } from "./mir-question-review-card";
import { MirQuestionImage } from "./mir-question-image";
import { MirScoreBreakdown } from "./mir-score";
import { formatMirNet, getMirNet } from "@/lib/training/mir-scoring";

type Stage = "intro" | "exam" | "results";
type ReviewFilter = "wrong" | "blank" | "correct" | "all";


const SAVE_TIMEOUT_MS = 8000;
/** Espera tras responder o cambiar de pregunta antes de guardar el avance. */
const PROGRESS_SAVE_DELAY_MS = 1500;
/** Cada cuánto se guarda el reloj aunque no se responda nada. */
const PROGRESS_CLOCK_SAVE_MS = 30_000;

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

function formatRemaining(totalSeconds: number): string {
  const minutes = Math.max(0, Math.round(totalSeconds / 60));
  const hours = Math.floor(minutes / 60);
  return hours > 0 ? `${hours} h ${minutes % 60} min` : `${minutes} min`;
}

/**
 * Simulacro completo del módulo MIR: cronometrado, en "modo examen" (sin
 * feedback instantáneo), navegable libremente entre preguntas hasta
 * entregar. Guarda el intento en la cuenta del usuario, alimenta la racha
 * MIR, suma al mapa de dominio y manda las falladas al repaso de errores
 * (ver mir-convocatoria.ts, mir-streak.ts, mir-mastery.ts y mir-review.ts
 * en src/lib/training). Mientras no se entrega, el avance se guarda solo
 * y se puede pausar para seguir otro día desde la misma pregunta; el reloj
 * se detiene mientras está en pausa.
 */
export function MirSimulacroView({ userId, editionCode }: { userId: string; editionCode?: string | null }) {
  const router = useRouter();
  const activeEdition = (editionCode ? getMirEdition(editionCode) : null) ?? MIR_EXAM_EDITIONS[0];
  const [stage, setStage] = useState<Stage>("intro");
  const [previousAttempt, setPreviousAttempt] = useState<MirExamAttempt | null>(null);
  const [isLoadingPrevious, setIsLoadingPrevious] = useState(true);
  const [savedProgress, setSavedProgress] = useState<MirSimulacroProgress | null>(null);
  const [isPausing, setIsPausing] = useState(false);

  const [questions, setQuestions] = useState<TrainingQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);

  const [attempt, setAttempt] = useState<MirExamAttempt | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("wrong");
  const submittedRef = useRef(false);
  const navigatorRef = useRef<HTMLDivElement>(null);

  // Mantiene la pregunta actual centrada en el navegador horizontal sin mover la página.
  useEffect(() => {
    if (stage !== "exam") return;
    const container = navigatorRef.current;
    const chip = container?.querySelector<HTMLElement>(`[data-index="${currentIndex}"]`);
    if (!container || !chip) return;
    const target = chip.offsetLeft - container.clientWidth / 2 + chip.clientWidth / 2;
    container.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [stage, currentIndex]);

  function scrollNavigator(direction: 1 | -1) {
    const container = navigatorRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * container.clientWidth * 0.8, behavior: "smooth" });
  }

  useEffect(() => {
    let cancelled = false;
    Promise.all([getMirAttempt(userId, activeEdition.code), getMirSimulacroProgress(userId, activeEdition.code)])
      .then(([result, progress]) => {
        if (cancelled) return;
        setPreviousAttempt(result);
        setSavedProgress(progress);
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

  // Último estado del examen, para guardarlo desde temporizadores y al salir de la página.
  const latestRef = useRef({ questions, answers, currentIndex, secondsLeft });
  useEffect(() => {
    latestRef.current = { questions, answers, currentIndex, secondsLeft };
  }, [questions, answers, currentIndex, secondsLeft]);

  function buildProgress(): MirSimulacroProgress {
    const latest = latestRef.current;
    return {
      editionCode: activeEdition.code,
      questionIds: latest.questions.map((question) => question.id),
      answersByQuestionId: latest.answers,
      currentIndex: latest.currentIndex,
      secondsLeft: latest.secondsLeft,
      updatedAt: new Date().toISOString(),
    };
  }

  const pendingProgressSaveRef = useRef<Promise<void>>(Promise.resolve());

  function persistProgress(): Promise<void> {
    if (submittedRef.current || latestRef.current.questions.length === 0) return Promise.resolve();
    const save = withTimeout(saveMirSimulacroProgress(userId, buildProgress()), SAVE_TIMEOUT_MS).catch(
      (error) => console.error("No se pudo guardar el avance del simulacro MIR.", error),
    );
    pendingProgressSaveRef.current = save;
    return save;
  }

  // Guarda el avance poco después de cada respuesta o cambio de pregunta.
  useEffect(() => {
    if (stage !== "exam") return;
    const timeout = setTimeout(() => void persistProgress(), PROGRESS_SAVE_DELAY_MS);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, answers, currentIndex]);

  // Y el reloj cada cierto tiempo, y al ocultar o cerrar la pestaña.
  useEffect(() => {
    if (stage !== "exam") return;
    const interval = setInterval(() => void persistProgress(), PROGRESS_CLOCK_SAVE_MS);
    const handleHide = () => {
      if (document.visibilityState === "hidden") void persistProgress();
    };
    document.addEventListener("visibilitychange", handleHide);
    window.addEventListener("pagehide", handleHide);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleHide);
      window.removeEventListener("pagehide", handleHide);
      // Al salir del examen sin entregar (p. ej. desde el menú) también se guarda.
      void persistProgress();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  async function handlePause() {
    setIsPausing(true);
    await persistProgress();
    router.push("/dashboard/mir");
  }

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

    try {
      await withTimeout(
        recordMirStudyAnswers(
          userId,
          outcomes.map((outcome) => ({ ...outcome, answer: answers[outcome.questionId] })),
        ),
        SAVE_TIMEOUT_MS,
      );
    } catch (error) {
      console.error("No se pudieron guardar las respuestas en «Mi estudio» MIR.", error);
    }

    try {
      // Que un guardado de avance aún en curso no lo vuelva a crear después de borrarlo.
      await pendingProgressSaveRef.current;
      await withTimeout(clearMirSimulacroProgress(userId, activeEdition.code), SAVE_TIMEOUT_MS);
    } catch (error) {
      console.error("No se pudo borrar el avance guardado del simulacro MIR.", error);
    }
    setSavedProgress(null);

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
    if (savedProgress) {
      const confirmed = window.confirm(
        "Tienes este simulacro a medias. Si empiezas de nuevo se borrarán tus respuestas guardadas. ¿Continuar?",
      );
      if (!confirmed) return;
      setSavedProgress(null);
      void clearMirSimulacroProgress(userId, activeEdition.code).catch((error) =>
        console.error("No se pudo borrar el avance guardado del simulacro MIR.", error),
      );
    }
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

  function handleResume() {
    if (!savedProgress) return;
    const restored = restoreMirSimulacro(activeEdition, savedProgress);
    submittedRef.current = false;
    setQuestions(restored.questions);
    setAnswers(restored.answers);
    setCurrentIndex(restored.currentIndex);
    // Sin reloj guardado (o agotado) se da al menos un minuto para poder entregar.
    setSecondsLeft(Math.max(60, Math.round(savedProgress.secondsLeft ?? activeEdition.minutes * 60)));
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
            oficial. Puedes navegar libremente entre preguntas y cambiar tus respuestas hasta que
            entregues, y pausar para seguir otro día: el reloj se detiene mientras está en pausa.
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
                {isLoadingPrevious || !previousAttempt
                  ? "—"
                  : formatMirNet(getMirNet(previousAttempt.correctAnswers, previousAttempt.wrongAnswers))}
              </p>
              <p className="text-[11px] font-semibold text-slate-400">netas en tu último intento</p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-mq-premium-gold/20 bg-mq-premium-gold/[0.06] p-4">
            <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-mq-premium-gold" />
            <p className="text-xs leading-relaxed text-slate-300">
              Modo examen: no verás si acertaste hasta entregar. Como en el MIR real, cada error
              resta un tercio de acierto y las preguntas en blanco no puntúan. Al terminar verás tu
              nota estimada y la revisión completa, pregunta por pregunta.
            </p>
          </div>

          {savedProgress ? (
            (() => {
              const resumeAt = restoreMirSimulacro(activeEdition, savedProgress);
              const answeredSoFar = Object.keys(resumeAt.answers).length;
              return (
                <div className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-300/[0.06] p-5">
                  <p className="text-[11px] font-black uppercase tracking-wide text-amber-200">
                    Simulacro a medias
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Llevas <strong className="text-white">{answeredSoFar}</strong> de{" "}
                    {resumeAt.questions.length} preguntas respondidas. Te quedan{" "}
                    {formatRemaining(savedProgress.secondsLeft)} de reloj.
                  </p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                    <div
                      className="h-full rounded-full bg-amber-300"
                      style={{
                        width: `${resumeAt.questions.length > 0 ? (answeredSoFar / resumeAt.questions.length) * 100 : 0}%`,
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleResume}
                    className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Continuar en la pregunta {resumeAt.currentIndex + 1}
                  </button>
                  <button
                    type="button"
                    onClick={handleStart}
                    className="mt-2 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 text-xs font-bold text-slate-300 transition hover:border-white/30 hover:text-white"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Empezar de nuevo
                  </button>
                </div>
              );
            })()
          ) : (
            <button
              type="button"
              onClick={handleStart}
              disabled={activeEdition.questionCount === 0 || isLoadingPrevious}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Comenzar simulacro <ArrowRight className="h-4 w-4" />
            </button>
          )}
          <p className="mt-3 text-center text-[11px] text-slate-500">
            ¿Mucho para un día? Tu avance se guarda solo: pausa cuando quieras y sigue otro día
            desde la misma pregunta.
          </p>
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
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-mq-premium-gold transition-[width] duration-300"
              style={{ width: `${total > 0 ? (answeredCount / total) * 100 : 0}%` }}
            />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollNavigator(-1)}
              aria-label="Ver preguntas anteriores"
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-white/25 hover:text-white sm:flex"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div
              ref={navigatorRef}
              aria-label="Navegador de preguntas"
              className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto scroll-smooth py-0.5 [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <span aria-hidden className="w-2 shrink-0" />
              {questions.map((question, index) => {
                const isAnswered = Boolean(answers[question.id]);
                const isCurrent = index === currentIndex;
                return (
                  <button
                    key={question.id}
                    type="button"
                    data-index={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-current={isCurrent ? "step" : undefined}
                    aria-label={`Pregunta ${index + 1}${isAnswered ? ", respondida" : ""}`}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold tabular-nums transition ${
                      isCurrent
                        ? "bg-mq-premium-gold text-[#0A1F44]"
                        : isAnswered
                          ? "bg-mq-premium-gold/20 text-mq-premium-gold hover:bg-mq-premium-gold/30"
                          : "border border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <span aria-hidden className="w-2 shrink-0" />
            </div>
            <button
              type="button"
              onClick={() => scrollNavigator(1)}
              aria-label="Ver preguntas siguientes"
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-white/25 hover:text-white sm:flex"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
          {currentQuestion.examArea ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-premium-gold">
              {currentQuestion.examArea}
            </p>
          ) : null}
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
          <div className="mx-auto mt-2 flex max-w-3xl items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => void handlePause()}
              disabled={isSaving || isPausing}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 underline-offset-4 hover:text-white hover:underline disabled:opacity-60"
            >
              {isPausing ? <Loader2 className="h-3 w-3 animate-spin" /> : <PauseCircle className="h-3 w-3" />}
              Pausar y seguir otro día
            </button>
            <button
              type="button"
              onClick={handleRequestSubmit}
              disabled={isSaving || isPausing}
              className="text-[11px] font-semibold text-slate-500 underline-offset-4 hover:text-slate-300 hover:underline disabled:opacity-60"
            >
              Entregar en cualquier momento
            </button>
          </div>
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
        <MirScoreBreakdown
          correct={attempt.correctAnswers}
          wrong={attempt.wrongAnswers}
          total={questions.length}
        />
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
            {filteredQuestions.map((question) => (
              <MirQuestionReviewCard
                key={question.id}
                question={question}
                given={answers[question.id] ?? null}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

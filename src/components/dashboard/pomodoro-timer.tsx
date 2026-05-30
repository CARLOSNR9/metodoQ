"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Pause, Play, RotateCcw, Timer } from "lucide-react";
import { usePomodoroTimer } from "@/hooks/use-pomodoro-timer";
import {
  POMODORO_BREAK_MINUTES,
  POMODORO_CYCLES,
  POMODORO_STUDY_MINUTES,
  POMODORO_TOTAL_MINUTES,
} from "@/lib/study/pomodoro-config";
import {
  getBreakMessage,
  getSessionCompleteMessage,
  getStudyResumeMessage,
} from "@/lib/study/pomodoro-messages";

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function PomodoroTimer() {
  const {
    phase,
    secondsLeft,
    cycle,
    overlay,
    startSession,
    continueToNextStudy,
    pauseAndReset,
    dismissComplete,
    totalCycles,
    isRunning,
  } = usePomodoroTimer();

  const overlayContent = useMemo(() => {
    if (overlay === "break") return getBreakMessage();
    if (overlay === "resume") return getStudyResumeMessage();
    if (overlay === "complete") return getSessionCompleteMessage();
    return null;
  }, [overlay]);

  const phaseLabel = useMemo(() => {
    if (phase === "study") return "Estudio";
    if (phase === "break") return "Descanso";
    if (phase === "resume-prompt") return "Listo para seguir";
    if (phase === "complete") return "Sesión completa";
    return "Pomodoro";
  }, [phase]);

  const progressPercent = useMemo(() => {
    if (phase === "study") {
      return ((POMODORO_STUDY_MINUTES * 60 - secondsLeft) / (POMODORO_STUDY_MINUTES * 60)) * 100;
    }
    if (phase === "break") {
      return ((POMODORO_BREAK_MINUTES * 60 - secondsLeft) / (POMODORO_BREAK_MINUTES * 60)) * 100;
    }
    return 0;
  }, [phase, secondsLeft]);

  const showOverlay = overlay !== "none" && overlayContent !== null;

  return (
    <>
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
              <Timer className="h-3.5 w-3.5" />
              Técnica Pomodoro
            </p>
            <h2 className="mt-2 text-lg font-black text-white sm:text-xl">
              {phase === "idle"
                ? "3 horas de foco amigable"
                : `${phaseLabel} · bloque ${Math.min(cycle, totalCycles)} de ${totalCycles}`}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-mq-muted">
              {phase === "idle" ? (
                <>
                  {POMODORO_CYCLES} ciclos de {POMODORO_STUDY_MINUTES} min estudio +{" "}
                  {POMODORO_BREAK_MINUTES} min descanso ({POMODORO_TOTAL_MINUTES} min en
                  total). Te avisamos con cariño cuando toque pausa.
                </>
              ) : phase === "break" ? (
                <>Descansa estos {POMODORO_BREAK_MINUTES} minutos — lo mereces.</>
              ) : phase === "complete" ? (
                <>¡Sesión terminada! Puedes empezar otra cuando quieras.</>
              ) : (
                <>Mantén el ritmo; al terminar los {POMODORO_STUDY_MINUTES} min te cuidamos.</>
              )}
            </p>
          </div>

          {phase !== "idle" && phase !== "complete" && (
            <button
              type="button"
              onClick={pauseAndReset}
              className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-xs font-bold uppercase tracking-wider text-mq-muted transition hover:bg-white/5 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reiniciar
            </button>
          )}
        </div>

        <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex h-36 w-36 items-center justify-center">
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-white/10"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 44}`}
                strokeDashoffset={`${2 * Math.PI * 44 * (1 - progressPercent / 100)}`}
                className={
                  phase === "break" ? "text-amber-400/90" : "text-mq-accent transition-all duration-1000"
                }
              />
            </svg>
            <div className="text-center">
              <p className="text-3xl font-black tabular-nums text-white">
                {phase === "idle" ? formatClock(POMODORO_STUDY_MINUTES * 60) : formatClock(secondsLeft)}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-mq-muted">
                {phase === "idle" ? "por bloque" : phaseLabel}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[200px]">
            {phase === "idle" && (
              <button
                type="button"
                onClick={startSession}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110"
              >
                <Play className="h-4 w-4 fill-current" />
                Empezar sesión
              </button>
            )}

            {phase === "resume-prompt" && (
              <button
                type="button"
                onClick={continueToNextStudy}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110"
              >
                <Play className="h-4 w-4 fill-current" />
                Siguiente bloque
              </button>
            )}

            {phase === "complete" && (
              <button
                type="button"
                onClick={dismissComplete}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110"
              >
                Cerrar
              </button>
            )}

            {isRunning && (
              <p className="flex items-center justify-center gap-2 text-center text-xs text-mq-muted sm:justify-start">
                {phase === "study" ? (
                  <Pause className="h-3.5 w-3.5 text-mq-accent" />
                ) : (
                  <Coffee className="h-3.5 w-3.5 text-amber-400" />
                )}
                {phase === "study"
                  ? "Enfócate en tus notas — te avisamos al terminar."
                  : "Relájate — el cronómetro vuelve solo al estudio."}
              </p>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showOverlay && overlayContent ? (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            <motion.button
              type="button"
              aria-label="Cerrar aviso"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={
                overlay === "resume"
                  ? continueToNextStudy
                  : overlay === "complete"
                    ? dismissComplete
                    : undefined
              }
              disabled={overlay === "break"}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="pomodoro-modal-title"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#0A1F44] p-6 shadow-2xl shadow-black/40 sm:p-8"
            >
              <p className="text-4xl" aria-hidden>
                {overlayContent.emoji}
              </p>
              <h2
                id="pomodoro-modal-title"
                className="mt-4 text-xl font-black leading-snug text-white sm:text-2xl"
              >
                {overlayContent.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {overlayContent.subtitle}
              </p>

              {overlay === "break" && (
                <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-4 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-200/90">
                    Descanso · {POMODORO_BREAK_MINUTES} minutos
                  </p>
                  <p className="mt-2 text-4xl font-black tabular-nums text-amber-100">
                    {formatClock(secondsLeft)}
                  </p>
                  <p className="mt-2 text-xs text-amber-200/70">
                    Tómate un café, pasea, mira el cielo — lo que quieras.
                  </p>
                </div>
              )}

              {overlay === "resume" && (
                <button
                  type="button"
                  onClick={continueToNextStudy}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-accent text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Empezar bloque {cycle + 1}
                </button>
              )}

              {overlay === "complete" && (
                <button
                  type="button"
                  onClick={dismissComplete}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110"
                >
                  ¡Genial!
                </button>
              )}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

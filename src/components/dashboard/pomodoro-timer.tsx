"use client";

import { useMemo } from "react";
import { Coffee, Pause, Play, Square, Timer } from "lucide-react";
import { usePomodoro } from "@/contexts/pomodoro-context";
import {
  POMODORO_BREAK_MINUTES,
  POMODORO_CYCLES,
  POMODORO_STUDY_MINUTES,
  POMODORO_TOTAL_MINUTES,
} from "@/lib/study/pomodoro-config";

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
    startSession,
    continueToNextStudy,
    stopSession,
    dismissComplete,
    totalCycles,
    isRunning,
  } = usePomodoro();

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

  return (
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
                Al iniciar sesión arranca solo. Son {POMODORO_CYCLES} ciclos de{" "}
                {POMODORO_STUDY_MINUTES} min estudio + {POMODORO_BREAK_MINUTES} min descanso (
                {POMODORO_TOTAL_MINUTES} min). Puedes detenerlo cuando quieras.
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

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px]">
          {phase === "idle" && (
            <button
              type="button"
              onClick={startSession}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110"
            >
              <Play className="h-4 w-4 fill-current" />
              Iniciar Pomodoro
            </button>
          )}

          {isRunning && (
            <button
              type="button"
              onClick={stopSession}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-rose-500/35 bg-rose-500/10 px-6 text-sm font-black uppercase tracking-wider text-rose-100 transition hover:bg-rose-500/20"
            >
              <Square className="h-4 w-4 fill-current" />
              Detener Pomodoro
            </button>
          )}

          {phase === "resume-prompt" && (
            <>
              <button
                type="button"
                onClick={continueToNextStudy}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110"
              >
                <Play className="h-4 w-4 fill-current" />
                Siguiente bloque
              </button>
              <button
                type="button"
                onClick={stopSession}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-500/30 px-5 text-xs font-bold uppercase tracking-wider text-rose-200/90 transition hover:bg-rose-500/10"
              >
                <Square className="h-3.5 w-3.5 fill-current" />
                Detener
              </button>
            </>
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
  );
}

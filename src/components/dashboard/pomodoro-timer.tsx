"use client";

import { useMemo, useState } from "react";
import { Coffee, Pause, Play, Square, Timer } from "lucide-react";
import { usePomodoro } from "@/contexts/pomodoro-context";
import {
  POMODORO_BREAK_MINUTES,
  POMODORO_CYCLES,
  POMODORO_STUDY_MINUTES,
  POMODORO_TOTAL_MINUTES,
} from "@/lib/study/pomodoro-config";

import { Settings } from "lucide-react"; // Import Settings optionally for the config toggle

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
    config,
    updateConfig,
  } = usePomodoro();

  const [showConfig, setShowConfig] = useState(false);

  const phaseLabel = useMemo(() => {
    if (phase === "study") return "Estudio";
    if (phase === "break") return "Descanso";
    if (phase === "resume-prompt") return "Listo para seguir";
    if (phase === "complete") return "Sesión completa";
    return "Pomodoro";
  }, [phase]);

  const progressPercent = useMemo(() => {
    if (phase === "study") {
      return ((config.studyMinutes * 60 - secondsLeft) / (config.studyMinutes * 60)) * 100;
    }
    if (phase === "break") {
      return ((config.breakMinutes * 60 - secondsLeft) / (config.breakMinutes * 60)) * 100;
    }
    return 0;
  }, [phase, secondsLeft, config]);

  const totalMinutes = config.cycles * (config.studyMinutes + config.breakMinutes);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/[0.03] p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
            <Timer className="h-3.5 w-3.5" />
            Técnica Pomodoro
          </p>
          <div className="flex items-center gap-2">
            <h2 className="mt-2 text-lg font-black text-slate-900 sm:text-xl">
              {phase === "idle"
                ? "Foco amigable personalizable"
                : `${phaseLabel} · bloque ${Math.min(cycle, totalCycles)} de ${totalCycles}`}
            </h2>
            {phase === "idle" && (
              <button
                onClick={() => setShowConfig(!showConfig)}
                className="mt-2 p-1 text-slate-500 hover:text-slate-900 transition-colors"
                title="Configurar Pomodoro"
              >
                <Settings size={18} />
              </button>
            )}
          </div>
          <p className="mt-1 max-w-xl text-sm text-slate-500">
            {phase === "idle" ? (
              <>
                Al iniciar sesión arranca solo. Son {config.cycles} ciclos de{" "}
                {config.studyMinutes} min estudio + {config.breakMinutes} min descanso (
                {totalMinutes} min). Puedes detenerlo cuando quieras.
              </>
            ) : phase === "break" ? (
              <>Descansa estos {config.breakMinutes} minutos — lo mereces.</>
            ) : phase === "complete" ? (
              <>¡Sesión terminada! Puedes empezar otra cuando quieras.</>
            ) : (
              <>Mantén el ritmo; al terminar los {config.studyMinutes} min te cuidamos.</>
            )}
          </p>
        </div>
      </div>

      {phase === "idle" && showConfig && (
        <div className="mt-4 flex flex-wrap gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500">Minutos Estudio</label>
            <input
              type="number"
              min="1"
              value={config.studyMinutes}
              onChange={(e) =>
                updateConfig({ ...config, studyMinutes: parseInt(e.target.value) || 1 })
              }
              className="w-20 rounded bg-slate-50 px-2 py-1 text-slate-900 border border-slate-200 outline-none focus:border-mq-accent"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500">Minutos Descanso</label>
            <input
              type="number"
              min="1"
              value={config.breakMinutes}
              onChange={(e) =>
                updateConfig({ ...config, breakMinutes: parseInt(e.target.value) || 1 })
              }
              className="w-20 rounded bg-slate-50 px-2 py-1 text-slate-900 border border-slate-200 outline-none focus:border-mq-accent"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-500">Ciclos</label>
            <input
              type="number"
              min="1"
              value={config.cycles}
              onChange={(e) =>
                updateConfig({ ...config, cycles: parseInt(e.target.value) || 1 })
              }
              className="w-20 rounded bg-slate-50 px-2 py-1 text-slate-900 border border-slate-200 outline-none focus:border-mq-accent"
            />
          </div>
        </div>
      )}

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
              className="text-slate-900/10"
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
            <p className="text-3xl font-black tabular-nums text-slate-900">
              {phase === "idle" ? formatClock(config.studyMinutes * 60) : formatClock(secondsLeft)}
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-6 text-sm font-black uppercase tracking-wider text-rose-600 transition hover:bg-rose-100"
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
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 px-5 text-xs font-bold uppercase tracking-wider text-rose-600 transition hover:bg-rose-50"
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
            <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 sm:justify-start">
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

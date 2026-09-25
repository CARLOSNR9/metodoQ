"use client";

import { Coffee, Play, Square, Timer } from "lucide-react";
import { usePomodoro, type PomodoroConfig } from "@/contexts/pomodoro-context";

/** Duraciones rápidas pensadas para el estudio MIR. */
const MIR_POMODORO_PRESETS: Array<{ id: string; label: string; detail: string; config: PomodoroConfig }> = [
  {
    id: "classic",
    label: "Clásico",
    detail: "25 min + 5 de pausa · 4 bloques",
    config: { studyMinutes: 25, breakMinutes: 5, cycles: 4 },
  },
  {
    id: "focus",
    label: "Foco largo",
    detail: "50 min + 10 de pausa · 3 bloques",
    config: { studyMinutes: 50, breakMinutes: 10, cycles: 3 },
  },
  {
    id: "exam",
    label: "Ritmo examen",
    detail: "90 min + 15 de pausa · 2 bloques",
    config: { studyMinutes: 90, breakMinutes: 15, cycles: 2 },
  },
];

function formatClock(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function isSameConfig(a: PomodoroConfig, b: PomodoroConfig) {
  return a.studyMinutes === b.studyMinutes && a.breakMinutes === b.breakMinutes && a.cycles === b.cycles;
}

/** Anillo de progreso de la fase actual (0-1). */
function ProgressRing({ progress, tone }: { progress: number; tone: string }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
      <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        className={`${tone} transition-[stroke-dashoffset] duration-1000 ease-linear motion-reduce:transition-none`}
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress)}
      />
    </svg>
  );
}

/**
 * Pomodoro del módulo MIR (tema oscuro/dorado). Usa el mismo temporizador
 * global de la app (PomodoroProvider en el shell del dashboard), así que la
 * sesión sigue corriendo al navegar entre práctica, repaso o tarjetas, se
 * ve en la cabecera y avisa de pausas y bloques con PomodoroGlobalOverlay.
 */
export function MirPomodoroCard() {
  const {
    phase,
    secondsLeft,
    cycle,
    config,
    totalCycles,
    startSession,
    continueToNextStudy,
    stopSession,
    dismissComplete,
    updateConfig,
  } = usePomodoro();

  const phaseSeconds =
    phase === "break" ? config.breakMinutes * 60 : phase === "study" ? config.studyMinutes * 60 : 0;
  const progress = phaseSeconds > 0 ? (phaseSeconds - secondsLeft) / phaseSeconds : 0;
  const totalMinutes = config.cycles * (config.studyMinutes + config.breakMinutes);

  if (phase === "idle") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="lg:w-64 lg:shrink-0">
            <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
              <Timer className="h-3.5 w-3.5" />
              Pomodoro
            </p>
            <p className="mt-2 text-lg font-black text-white">Sesión de foco</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Estudia por bloques con pausas. El reloj sigue aunque cambies de pantalla.
            </p>
          </div>
          <div className="grid flex-1 gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Duración de la sesión">
            {MIR_POMODORO_PRESETS.map((preset) => {
              const isSelected = isSameConfig(preset.config, config);
              return (
                <button
                  key={preset.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => updateConfig(preset.config)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    isSelected
                      ? "border-mq-premium-gold bg-mq-premium-gold/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/30"
                  }`}
                >
                  <span className="block text-sm font-black text-white">{preset.label}</span>
                  <span className="block text-[11px] text-slate-400">{preset.detail}</span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={startSession}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
          >
            <Play className="h-4 w-4 fill-current" />
            Empezar · {totalMinutes} min
          </button>
        </div>
      </div>
    );
  }

  const isBreak = phase === "break";
  const label =
    phase === "study"
      ? "Estudiando"
      : phase === "break"
        ? "Pausa"
        : phase === "resume-prompt"
          ? "Pausa terminada"
          : "¡Sesión completa!";

  return (
    <div
      className={`rounded-2xl border p-6 ${
        isBreak ? "border-amber-300/30 bg-amber-300/[0.05]" : "border-mq-premium-gold/30 bg-mq-premium-gold/[0.05]"
      }`}
    >
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
          <ProgressRing progress={progress} tone={isBreak ? "text-amber-300" : "text-mq-premium-gold"} />
          <div className="text-center">
            <p className="text-2xl font-black tabular-nums text-white" aria-live="off">
              {phase === "complete" ? "✓" : formatClock(secondsLeft)}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Bloque {Math.min(cycle, totalCycles)}/{totalCycles}
            </p>
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <p
            className={`inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] ${
              isBreak ? "text-amber-300" : "text-mq-premium-gold"
            }`}
          >
            {isBreak ? <Coffee className="h-3.5 w-3.5" /> : <Timer className="h-3.5 w-3.5" />}
            {label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {phase === "study"
              ? "Aprovecha este bloque: reto del día, un bloque de práctica o una ronda de tarjetas."
              : phase === "break"
                ? "Levántate, bebe agua y descansa la vista. Te aviso cuando toque volver."
                : phase === "resume-prompt"
                  ? `Cuando quieras, empieza el bloque ${cycle + 1} de ${totalCycles}.`
                  : "Has completado todos los bloques. ¡Así se prepara el MIR!"}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
            {phase === "resume-prompt" ? (
              <button
                type="button"
                onClick={continueToNextStudy}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
              >
                <Play className="h-4 w-4 fill-current" />
                Empezar bloque {cycle + 1}
              </button>
            ) : null}
            {phase === "complete" ? (
              <button
                type="button"
                onClick={dismissComplete}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
              >
                ¡Genial!
              </button>
            ) : (
              <button
                type="button"
                onClick={stopSession}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-bold text-white transition hover:border-rose-400/50 hover:text-rose-200"
              >
                <Square className="h-3.5 w-3.5" />
                Detener
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

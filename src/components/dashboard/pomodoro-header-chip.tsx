"use client";

import Link from "next/link";
import { Hourglass } from "lucide-react";
import { usePomodoro } from "@/contexts/pomodoro-context";

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function PomodoroHeaderChip() {
  const { phase, secondsLeft, cycle, isRunning, isActive } = usePomodoro();

  if (!isActive) return null;

  const phaseShort =
    phase === "study"
      ? "Estudio"
      : phase === "break"
        ? "Pausa"
        : phase === "resume-prompt"
          ? "Listo"
          : "Listo";

  const accentClass =
    phase === "break"
      ? "text-amber-300/90 border-amber-400/15 bg-amber-400/[0.06]"
      : "text-mq-accent/90 border-mq-accent/15 bg-mq-accent/[0.06]";

  return (
    <Link
      href="/dashboard/estudio"
      title="Ver sesión Pomodoro en Estudio"
      className={`group inline-flex max-w-[7.5rem] items-center gap-1 rounded-lg border px-1.5 py-0.5 transition hover:bg-white/[0.04] sm:max-w-none sm:gap-1.5 sm:px-2 sm:py-1 ${accentClass}`}
    >
      <Hourglass
        size={11}
        strokeWidth={2}
        className={
          isRunning
            ? "animate-[spin_3s_linear_infinite] opacity-90"
            : "opacity-70"
        }
        aria-hidden
      />
      <span className="text-[10px] font-bold tabular-nums tracking-tight">
        {formatClock(secondsLeft)}
      </span>
      <span className="hidden text-[9px] font-semibold uppercase tracking-wider opacity-60 min-[400px]:inline">
        {phaseShort}
      </span>
      {phase === "study" || phase === "break" ? (
        <span className="hidden text-[9px] opacity-40 sm:inline">·{cycle}/3</span>
      ) : null}
    </Link>
  );
}

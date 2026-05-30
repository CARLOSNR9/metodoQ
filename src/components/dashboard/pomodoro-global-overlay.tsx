"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { usePomodoro } from "@/contexts/pomodoro-context";
import {
  POMODORO_BREAK_MINUTES,
} from "@/lib/study/pomodoro-config";
import {
  getBreakMessage,
  getSessionCompleteMessage,
  getStudyResumeMessage,
} from "@/lib/study/pomodoro-messages";

type PomodoroGlobalOverlayProps = {
  greetingName?: string;
};

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function PomodoroGlobalOverlay({ greetingName }: PomodoroGlobalOverlayProps) {
  const {
    overlay,
    secondsLeft,
    cycle,
    continueToNextStudy,
    stopSession,
    dismissComplete,
  } = usePomodoro();

  const overlayContent = useMemo(() => {
    if (overlay === "break") return getBreakMessage(new Date(), greetingName);
    if (overlay === "resume") return getStudyResumeMessage(greetingName);
    if (overlay === "complete") return getSessionCompleteMessage(greetingName);
    return null;
  }, [overlay, greetingName]);

  const showOverlay = overlay !== "none" && overlayContent !== null;

  return (
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
              <>
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
                <button
                  type="button"
                  onClick={stopSession}
                  className="mt-4 w-full text-center text-xs font-semibold text-rose-300/80 transition hover:text-rose-200"
                >
                  Detener Pomodoro
                </button>
              </>
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
  );
}

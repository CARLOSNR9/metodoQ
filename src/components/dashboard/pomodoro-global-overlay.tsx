"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { usePomodoro } from "@/contexts/pomodoro-context";
import {
  getBreakMessage,
  getSessionCompleteMessage,
  getStudyResumeMessage,
} from "@/lib/study/pomodoro-messages";
import { MirDoctorMascot } from "./mir-doctor-mascot";

type PomodoroGlobalOverlayProps = {
  greetingName?: string;
  /** "mir": tema oscuro/dorado con la mascota doctora del módulo MIR. */
  variant?: "default" | "mir";
};

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function PomodoroGlobalOverlay({ greetingName, variant = "default" }: PomodoroGlobalOverlayProps) {
  const isMir = variant === "mir";
  const {
    overlay,
    secondsLeft,
    cycle,
    config,
    continueToNextStudy,
    stopSession,
    dismissComplete,
  } = usePomodoro();

  const overlayContent = useMemo(() => {
    if (overlay === "break") return getBreakMessage(new Date(), greetingName, config);
    if (overlay === "resume") return getStudyResumeMessage(greetingName, config);
    if (overlay === "complete") return getSessionCompleteMessage(greetingName, config);
    return null;
  }, [overlay, greetingName, config]);

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
            className={`relative z-10 w-full max-w-md rounded-3xl border p-6 shadow-2xl shadow-black/40 sm:p-8 ${
              isMir ? "border-white/10 bg-[#11285a]" : "border-slate-200 bg-slate-50"
            }`}
          >
            {isMir ? (
              <MirDoctorMascot className="h-24 w-[4.5rem]" />
            ) : (
              <p className="text-4xl" aria-hidden>
                {overlayContent.emoji}
              </p>
            )}
            <h2
              id="pomodoro-modal-title"
              className={`mt-4 text-xl font-black leading-snug sm:text-2xl ${isMir ? "text-white" : "text-slate-900"}`}
            >
              {overlayContent.title}
            </h2>
            <p className={`mt-3 text-sm leading-relaxed ${isMir ? "text-slate-300" : "text-slate-600"}`}>
              {overlayContent.subtitle}
            </p>

            {overlay === "break" && (
              <>
                <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-4 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-200/90">
                    Descanso · {config.breakMinutes} minutos
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
                className={`mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110 ${isMir ? "bg-mq-premium-gold" : "bg-mq-accent"}`}
              >
                <Play className="h-4 w-4 fill-current" />
                Empezar bloque {cycle + 1}
              </button>
            )}

            {overlay === "complete" && (
              <button
                type="button"
                onClick={dismissComplete}
                className={`mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl text-sm font-black uppercase tracking-wider text-[#0A1F44] transition hover:brightness-110 ${isMir ? "bg-mq-premium-gold" : "bg-mq-accent"}`}
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

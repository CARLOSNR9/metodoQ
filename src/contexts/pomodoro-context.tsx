"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  POMODORO_BREAK_SECONDS,
  POMODORO_CYCLES,
  POMODORO_STUDY_SECONDS,
} from "@/lib/study/pomodoro-config";
import {
  consumePomodoroAutostart,
  clearPomodoroPersisted,
  POMODORO_STORAGE_KEY,
} from "@/lib/study/pomodoro-session";

export type PomodoroPhase = "idle" | "study" | "break" | "resume-prompt" | "complete";

export type PomodoroOverlay = "none" | "break" | "resume" | "complete";

type TimerState = {
  phase: PomodoroPhase;
  secondsLeft: number;
  cycle: number;
  overlay: PomodoroOverlay;
};

const DEFAULT_STATE: TimerState = {
  phase: "idle",
  secondsLeft: POMODORO_STUDY_SECONDS,
  cycle: 1,
  overlay: "none",
};

function loadPersisted(): TimerState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(POMODORO_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TimerState;
    if (
      parsed.phase === "idle" ||
      parsed.phase === "complete" ||
      (parsed.cycle >= 1 &&
        parsed.cycle <= POMODORO_CYCLES &&
        parsed.secondsLeft >= 0)
    ) {
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function getInitialTimerState(): TimerState {
  const saved = loadPersisted();
  if (saved && saved.phase !== "idle") return saved;

  if (typeof window !== "undefined" && consumePomodoroAutostart()) {
    return ACTIVE_STUDY_STATE;
  }

  return DEFAULT_STATE;
}

function savePersisted(state: TimerState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(POMODORO_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function advanceAfterPhaseEnd(prev: TimerState): TimerState {
  if (prev.phase === "study") {
    return {
      ...prev,
      phase: "break",
      secondsLeft: POMODORO_BREAK_SECONDS,
      overlay: "break",
    };
  }

  if (prev.phase === "break") {
    if (prev.cycle >= POMODORO_CYCLES) {
      clearPomodoroPersisted();
      return {
        ...prev,
        phase: "complete",
        secondsLeft: 0,
        overlay: "complete",
      };
    }
    return {
      ...prev,
      phase: "resume-prompt",
      secondsLeft: POMODORO_STUDY_SECONDS,
      overlay: "resume",
    };
  }

  return prev;
}

const ACTIVE_STUDY_STATE: TimerState = {
  phase: "study",
  secondsLeft: POMODORO_STUDY_SECONDS,
  cycle: 1,
  overlay: "none",
};

type PomodoroContextValue = {
  phase: PomodoroPhase;
  secondsLeft: number;
  cycle: number;
  overlay: PomodoroOverlay;
  startSession: () => void;
  continueToNextStudy: () => void;
  stopSession: () => void;
  dismissComplete: () => void;
  totalCycles: number;
  isRunning: boolean;
  isActive: boolean;
};

const PomodoroContext = createContext<PomodoroContextValue | null>(null);

export function PomodoroProvider({ children }: { children: ReactNode }) {
  const [timer, setTimer] = useState<TimerState>(getInitialTimerState);

  useEffect(() => {
    if (timer.phase === "idle") return;
    savePersisted(timer);
  }, [timer]);

  useEffect(() => {
    if (timer.phase !== "study" && timer.phase !== "break") return;

    const id = window.setInterval(() => {
      setTimer((t) => {
        if (t.phase !== "study" && t.phase !== "break") return t;
        if (t.secondsLeft > 1) {
          return { ...t, secondsLeft: t.secondsLeft - 1 };
        }
        return advanceAfterPhaseEnd(t);
      });
    }, 1000);

    return () => clearInterval(id);
  }, [timer.phase]);

  const startSession = useCallback(() => {
    setTimer(ACTIVE_STUDY_STATE);
  }, []);

  const continueToNextStudy = useCallback(() => {
    setTimer((t) => ({
      phase: "study",
      secondsLeft: POMODORO_STUDY_SECONDS,
      cycle: t.cycle + 1,
      overlay: "none",
    }));
  }, []);

  const stopSession = useCallback(() => {
    clearPomodoroPersisted();
    setTimer(DEFAULT_STATE);
  }, []);

  const dismissComplete = useCallback(() => {
    clearPomodoroPersisted();
    setTimer(DEFAULT_STATE);
  }, []);

  const value = useMemo<PomodoroContextValue>(
    () => ({
      phase: timer.phase,
      secondsLeft: timer.secondsLeft,
      cycle: timer.cycle,
      overlay: timer.overlay,
      startSession,
      continueToNextStudy,
      stopSession,
      dismissComplete,
      totalCycles: POMODORO_CYCLES,
      isRunning: timer.phase === "study" || timer.phase === "break",
      isActive: timer.phase !== "idle",
    }),
    [timer, startSession, continueToNextStudy, stopSession, dismissComplete],
  );

  return (
    <PomodoroContext.Provider value={value}>{children}</PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  const ctx = useContext(PomodoroContext);
  if (!ctx) {
    throw new Error("usePomodoro debe usarse dentro de PomodoroProvider");
  }
  return ctx;
}

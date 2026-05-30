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
  loadPomodoroPersisted,
  peekPomodoroAutostart,
  savePomodoroPersisted,
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

const ACTIVE_STUDY_STATE: TimerState = {
  phase: "study",
  secondsLeft: POMODORO_STUDY_SECONDS,
  cycle: 1,
  overlay: "none",
};

function isValidPersisted(state: TimerState): boolean {
  return (
    state.phase !== "idle" &&
    state.phase !== "complete" &&
    state.cycle >= 1 &&
    state.cycle <= POMODORO_CYCLES &&
    state.secondsLeft >= 0
  );
}

function getInitialTimerState(userId?: string): TimerState {
  const saved = loadPomodoroPersisted(userId);
  if (saved && isValidPersisted(saved as TimerState)) {
    return saved as TimerState;
  }
  if (saved?.phase === "complete" || saved?.phase === "resume-prompt") {
    return saved as TimerState;
  }
  return DEFAULT_STATE;
}

function advanceAfterPhaseEnd(prev: TimerState, userId?: string): TimerState {
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
      clearPomodoroPersisted(userId);
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

type PomodoroProviderProps = {
  children: ReactNode;
  userId?: string;
  isProUser?: boolean;
};

export function PomodoroProvider({
  children,
  userId,
  isProUser = false,
}: PomodoroProviderProps) {
  const [timer, setTimer] = useState<TimerState>(() => getInitialTimerState(userId));

  useEffect(() => {
    setTimer(getInitialTimerState(userId));
  }, [userId]);

  useEffect(() => {
    if (!userId || !isProUser) return;

    setTimer((current) => {
      if (current.phase !== "idle") return current;
      if (!peekPomodoroAutostart()) return current;

      consumePomodoroAutostart();
      savePomodoroPersisted(ACTIVE_STUDY_STATE, userId);
      return ACTIVE_STUDY_STATE;
    });
  }, [userId, isProUser]);

  useEffect(() => {
    if (timer.phase === "idle" || !userId) return;
    savePomodoroPersisted(timer, userId);
  }, [timer, userId]);

  useEffect(() => {
    if (timer.phase !== "study" && timer.phase !== "break") return;

    const id = window.setInterval(() => {
      setTimer((t) => {
        if (t.phase !== "study" && t.phase !== "break") return t;
        if (t.secondsLeft > 1) {
          return { ...t, secondsLeft: t.secondsLeft - 1 };
        }
        return advanceAfterPhaseEnd(t, userId);
      });
    }, 1000);

    return () => clearInterval(id);
  }, [timer.phase, userId]);

  const startSession = useCallback(() => {
    if (!userId) return;
    savePomodoroPersisted(ACTIVE_STUDY_STATE, userId);
    setTimer(ACTIVE_STUDY_STATE);
  }, [userId]);

  const continueToNextStudy = useCallback(() => {
    setTimer((t) => ({
      phase: "study",
      secondsLeft: POMODORO_STUDY_SECONDS,
      cycle: t.cycle + 1,
      overlay: "none",
    }));
  }, []);

  const stopSession = useCallback(() => {
    clearPomodoroPersisted(userId);
    setTimer(DEFAULT_STATE);
  }, [userId]);

  const dismissComplete = useCallback(() => {
    clearPomodoroPersisted(userId);
    setTimer(DEFAULT_STATE);
  }, [userId]);

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

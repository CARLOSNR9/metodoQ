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
  type PomodoroConfig,
} from "@/lib/study/pomodoro-session";

export type { PomodoroConfig } from "@/lib/study/pomodoro-session";

export type PomodoroPhase = "idle" | "study" | "break" | "resume-prompt" | "complete";

export type PomodoroOverlay = "none" | "break" | "resume" | "complete";

type TimerState = {
  phase: PomodoroPhase;
  secondsLeft: number;
  cycle: number;
  overlay: PomodoroOverlay;
  config: PomodoroConfig;
};

const DEFAULT_CONFIG: PomodoroConfig = {
  studyMinutes: POMODORO_STUDY_MINUTES,
  breakMinutes: POMODORO_BREAK_MINUTES,
  cycles: POMODORO_CYCLES,
};

const DEFAULT_STATE: TimerState = {
  phase: "idle",
  secondsLeft: DEFAULT_CONFIG.studyMinutes * 60,
  cycle: 1,
  overlay: "none",
  config: DEFAULT_CONFIG,
};

function createActiveStudyState(config: PomodoroConfig): TimerState {
  return {
    phase: "study",
    secondsLeft: config.studyMinutes * 60,
    cycle: 1,
    overlay: "none",
    config,
  };
}

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
    return { ...DEFAULT_STATE, ...saved } as TimerState;
  }
  if (saved?.phase === "complete" || saved?.phase === "resume-prompt") {
    return { ...DEFAULT_STATE, ...saved } as TimerState;
  }
  return DEFAULT_STATE;
}

function advanceAfterPhaseEnd(prev: TimerState, userId?: string): TimerState {
  const config = prev.config;
  if (prev.phase === "study") {
    return {
      ...prev,
      phase: "break",
      secondsLeft: config.breakMinutes * 60,
      overlay: "break",
    };
  }

  if (prev.phase === "break") {
    if (prev.cycle >= config.cycles) {
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
      secondsLeft: config.studyMinutes * 60,
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
  config: PomodoroConfig;
  startSession: () => void;
  continueToNextStudy: () => void;
  stopSession: () => void;
  dismissComplete: () => void;
  updateConfig: (newConfig: PomodoroConfig) => void;
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
      const activeState = createActiveStudyState(current.config || DEFAULT_CONFIG);
      savePomodoroPersisted(activeState, userId);
      return activeState;
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
    setTimer((t) => {
      const activeState = createActiveStudyState(t.config);
      savePomodoroPersisted(activeState, userId);
      return activeState;
    });
  }, [userId]);

  const continueToNextStudy = useCallback(() => {
    setTimer((t) => ({
      ...t,
      phase: "study",
      secondsLeft: t.config.studyMinutes * 60,
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
    setTimer((t) => ({ ...DEFAULT_STATE, config: t.config }));
  }, [userId]);

  const updateConfig = useCallback((newConfig: PomodoroConfig) => {
    setTimer((t) => {
      // If we are currently idle, we can update the secondsLeft right away to reflect the new config
      if (t.phase === "idle") {
        return {
          ...t,
          config: newConfig,
          secondsLeft: newConfig.studyMinutes * 60,
        };
      }
      return { ...t, config: newConfig };
    });
  }, []);

  const value = useMemo<PomodoroContextValue>(
    () => ({
      phase: timer.phase,
      secondsLeft: timer.secondsLeft,
      cycle: timer.cycle,
      overlay: timer.overlay,
      config: timer.config,
      startSession,
      continueToNextStudy,
      stopSession,
      dismissComplete,
      updateConfig,
      totalCycles: timer.config.cycles,
      isRunning: timer.phase === "study" || timer.phase === "break",
      isActive: timer.phase !== "idle",
    }),
    [timer, startSession, continueToNextStudy, stopSession, dismissComplete, updateConfig],
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

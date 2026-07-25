import type { PomodoroPhase } from "@/contexts/pomodoro-context";

export const POMODORO_STORAGE_KEY = "mq-pomodoro-v1";
export const POMODORO_AUTOSTART_KEY = "mq-pomodoro-autostart";

export type PomodoroConfig = {
  studyMinutes: number;
  breakMinutes: number;
  cycles: number;
};

export type PersistedPomodoroState = {
  phase: PomodoroPhase;
  secondsLeft: number;
  cycle: number;
  overlay: "none" | "break" | "resume" | "complete";
  config?: PomodoroConfig;
};

export function getPomodoroStorageKey(userId?: string): string {
  return userId ? `${POMODORO_STORAGE_KEY}:${userId}` : POMODORO_STORAGE_KEY;
}

export function markPomodoroAutostartOnLogin() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(POMODORO_AUTOSTART_KEY, "1");
}

export function peekPomodoroAutostart(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(POMODORO_AUTOSTART_KEY) === "1";
}

export function consumePomodoroAutostart(): boolean {
  if (typeof window === "undefined") return false;
  if (sessionStorage.getItem(POMODORO_AUTOSTART_KEY) !== "1") return false;
  sessionStorage.removeItem(POMODORO_AUTOSTART_KEY);
  return true;
}

export function clearPomodoroAutostart() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(POMODORO_AUTOSTART_KEY);
}

export function loadPomodoroPersisted(userId?: string): PersistedPomodoroState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(getPomodoroStorageKey(userId));
    if (!raw) return null;
    return JSON.parse(raw) as PersistedPomodoroState;
  } catch {
    return null;
  }
}

export function savePomodoroPersisted(state: PersistedPomodoroState, userId?: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getPomodoroStorageKey(userId), JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function clearPomodoroPersisted(userId?: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(getPomodoroStorageKey(userId));
    if (!userId) {
      localStorage.removeItem(POMODORO_STORAGE_KEY);
    }
  } catch {
    /* ignore */
  }
}

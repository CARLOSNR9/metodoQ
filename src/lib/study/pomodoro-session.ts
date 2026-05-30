export const POMODORO_STORAGE_KEY = "mq-pomodoro-v1";
export const POMODORO_AUTOSTART_KEY = "mq-pomodoro-autostart";

export function markPomodoroAutostartOnLogin() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(POMODORO_AUTOSTART_KEY, "1");
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

export function clearPomodoroPersisted() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(POMODORO_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

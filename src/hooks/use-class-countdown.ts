"use client";

import { useEffect, useState } from "react";
import {
  formatClassCountdown,
  getClassCountdownMessage,
  shouldShowClassCountdown,
} from "@/lib/classes/student-classes";

export function useClassCountdown(classDate: Date | null, endDate: Date | null) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    if (!classDate || !endDate) return;

    const tick = () => setNow(new Date());
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [classDate, endDate]);

  if (!classDate || !endDate) {
    return { active: false, message: null, remainingMs: 0, formatted: "00:00" };
  }

  const active = shouldShowClassCountdown(classDate, endDate, now);
  const message = getClassCountdownMessage(classDate, endDate, now);
  const remainingMs =
    now >= classDate && now <= endDate
      ? endDate.getTime() - now.getTime()
      : Math.max(0, classDate.getTime() - now.getTime());

  return {
    active,
    message,
    remainingMs,
    formatted: formatClassCountdown(remainingMs),
  };
}

"use client";

import { useEffect } from "react";
import { buildUccCoachingStatus } from "@/lib/training/ucc-coaching-status";
import type { UccCoachingProfile } from "@/lib/training/ucc-coaching-status";
import { getUserDemoResults } from "@/lib/results";

const STORAGE_KEY = "mq_ucc_browser_nudge_date";

type UseUccBrowserReminderOptions = {
  userId: string | undefined;
  profile: UccCoachingProfile | null | undefined;
  planStartedAt?: string | null;
  browserNudgeOptIn?: boolean;
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function useUccBrowserReminder({
  userId,
  profile,
  planStartedAt,
  browserNudgeOptIn = false,
}: UseUccBrowserReminderOptions) {
  useEffect(() => {
    if (!userId || !browserNudgeOptIn) return;
    if (typeof window === "undefined" || !("Notification" in window)) return;
    if (Notification.permission !== "granted") return;
    if (sessionStorage.getItem(STORAGE_KEY) === todayKey()) return;

    let mounted = true;

    async function maybeNotify() {
      try {
        const results = await getUserDemoResults(userId!);
        if (!mounted) return;

        const status = buildUccCoachingStatus({
          profile: { ...profile, planStartedAt: planStartedAt ?? profile?.planStartedAt },
          results,
        });

        if (!status) return;

        if (status.dailyMissionPending) {
          const remaining = status.dailyTarget - status.todayQuestions;
          new Notification("Método Q · Misión UCC", {
            body: `Te faltan ${remaining} preguntas para cerrar hoy (${status.todayQuestions}/${status.dailyTarget}).`,
            tag: "ucc-daily-mission",
          });
          sessionStorage.setItem(STORAGE_KEY, todayKey());
          return;
        }

        if ((status.simulacroDue || status.simulacroOverdue) && status.simulacroStatus) {
          new Notification("Método Q · Simulacro UCC", {
            body: `${status.simulacroStatus.config.questionCount} preg · ${status.simulacroStatus.config.minutes} min programados.`,
            tag: "ucc-simulacro",
          });
          sessionStorage.setItem(STORAGE_KEY, todayKey());
        }
      } catch (error) {
        console.error("Recordatorio del navegador UCC:", error);
      }
    }

    void maybeNotify();
    return () => {
      mounted = false;
    };
  }, [userId, profile, planStartedAt, browserNudgeOptIn]);
}

export async function requestBrowserNotificationPermission(): Promise<NotificationPermission | "unsupported"> {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return "unsupported";
  }
  if (Notification.permission === "granted") return "granted";
  if (Notification.permission === "denied") return "denied";
  return Notification.requestPermission();
}

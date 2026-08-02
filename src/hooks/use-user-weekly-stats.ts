"use client";

import { useEffect, useState } from "react";
import { getUserWeeklyStats } from "@/lib/results";

export interface WeeklyStats {
  totalCorrect: number;
  totalQuestions: number;
  wrongAnswers: number;
  scorePercentage: number;
  correctTopicsByName: Record<string, number>;
  wrongTopicsByName: Record<string, number>;
}

export function useUserWeeklyStats(userId: string | undefined) {
  const [weeklyStats, setWeeklyStats] = useState<WeeklyStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const uid = userId;
    let mounted = true;

    async function load() {
      try {
        const stats = await getUserWeeklyStats(uid);
        if (!mounted) return;
        setWeeklyStats(stats);
      } catch (e) {
        console.error("Error loading weekly stats:", e);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId]);

  return { weeklyStats, loading };
}

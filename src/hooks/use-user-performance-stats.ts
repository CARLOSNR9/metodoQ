"use client";

import { useEffect, useState } from "react";
import { getUserAccumulatedStats, getUserDemoResults } from "@/lib/results";

export function useUserPerformanceStats(userId: string | undefined) {
  const [improvement, setImprovement] = useState<number | null>(null);
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [percentileLabel, setPercentileLabel] = useState<string | null>(null);
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
        const [stats, results] = await Promise.all([
          getUserAccumulatedStats(uid),
          getUserDemoResults(uid),
        ]);

        if (!mounted) return;

        setImprovement(stats.improvement);

        const latest = results[0];
        if (latest) {
          setLastScore(latest.scorePercentage);
          if (latest.scorePercentage >= 85) {
            setPercentileLabel("Top 10%");
          } else if (latest.scorePercentage >= 70) {
            setPercentileLabel("Top 25%");
          } else if (latest.scorePercentage >= 55) {
            setPercentileLabel("En progreso");
          } else {
            setPercentileLabel("Zona de mejora");
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId]);

  return { improvement, lastScore, percentileLabel, loading };
}

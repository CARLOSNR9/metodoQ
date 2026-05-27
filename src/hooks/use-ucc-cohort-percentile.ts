"use client";

import { useEffect, useState } from "react";
import type { UccCohortStats } from "@/lib/diagnostic/ucc-cohort-types";

export function useUccCohortPercentile(userScore: number, enabled = true) {
  const [stats, setStats] = useState<UccCohortStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!enabled || userScore <= 0) {
      setStats(null);
      setLoading(false);
      return;
    }

    let mounted = true;
    setLoading(true);

    async function load() {
      try {
        const response = await fetch(
          `/api/training/ucc-cohort?score=${encodeURIComponent(String(Math.round(userScore)))}`,
        );
        if (!response.ok) throw new Error("cohort fetch failed");
        const data = (await response.json()) as UccCohortStats;
        if (mounted) setStats(data);
      } catch (error) {
        console.error("No se pudo cargar percentil de cohorte.", error);
        if (mounted) setStats(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userScore, enabled]);

  return { stats, loading };
}

"use client";

import { useEffect, useState } from "react";

type PublicStats = {
  registeredUsers: number;
  completedSessions: number;
  displayUsers: number;
};

const FALLBACK: PublicStats = {
  registeredUsers: 0,
  completedSessions: 0,
  displayUsers: 50,
};

export function usePublicStats() {
  const [stats, setStats] = useState<PublicStats>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/public/stats");
        const data = (await res.json()) as PublicStats;
        if (mounted) setStats(data);
      } catch {
        if (mounted) setStats(FALLBACK);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, []);

  return { stats, loading };
}

export function formatUserCount(n: number): string {
  if (n >= 1000) {
    return `${Math.floor(n / 100) / 10}k+`.replace(".0k", "k");
  }
  if (n >= 100) return `${Math.floor(n / 50) * 50}+`;
  return `${Math.max(n, 50)}+`;
}

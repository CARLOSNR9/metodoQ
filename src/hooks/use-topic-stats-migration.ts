"use client";

import { useEffect, useRef } from "react";
import {
  hasLegacyTopicStatsKeys,
  needsTopicStatsMigration,
} from "@/lib/diagnostic/migrate-topic-stats";
import { migrateUserTopicStats } from "@/lib/results";

type UseTopicStatsMigrationOptions = {
  userId?: string;
  topicStatsVersion?: number | null;
  topicStats?: Record<string, { correct: number; wrong: number }> | null;
  enabled?: boolean;
};

/** Recalcula topicStats por asignatura una vez por usuario (v1 → v2). */
export function useTopicStatsMigration({
  userId,
  topicStatsVersion,
  topicStats,
  enabled = true,
}: UseTopicStatsMigrationOptions) {
  const startedRef = useRef(false);

  useEffect(() => {
    if (!enabled || !userId || startedRef.current) return;
    if (!needsTopicStatsMigration(topicStatsVersion, topicStats)) return;

    startedRef.current = true;
    void migrateUserTopicStats(userId).catch((error) => {
      startedRef.current = false;
      console.error("No se pudo migrar topicStats por asignatura.", error);
    });
  }, [enabled, topicStats, topicStatsVersion, userId]);
}

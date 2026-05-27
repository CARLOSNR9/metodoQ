import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import type { UccCohortStats } from "@/lib/diagnostic/ucc-cohort-types";

export type { UccCohortStats };

function normalizeUniversity(value: string | null | undefined): string {
  return (value ?? "").toLowerCase();
}

function isUccPastoUser(data: FirebaseFirestore.DocumentData): boolean {
  const university = normalizeUniversity(data.goalUniversity as string | undefined);
  return (
    (university.includes("cooperativa") && university.includes("pasto")) ||
    university.includes("ucc pasto") ||
    (university.includes("ucc") && university.includes("pasto"))
  );
}

function percentileFromSorted(sorted: number[], value: number): number {
  if (sorted.length === 0) return 0;
  const below = sorted.filter((s) => s < value).length;
  return Math.round((below / sorted.length) * 100);
}

function pickPercentile(sorted: number[], pct: number): number | null {
  if (sorted.length === 0) return null;
  const index = Math.min(
    sorted.length - 1,
    Math.max(0, Math.ceil((pct / 100) * sorted.length) - 1),
  );
  return sorted[index];
}

export async function fetchUccCohortStats(userScore: number): Promise<UccCohortStats> {
  const db = getFirebaseAdminDb();
  const snapshot = await db.collection("users").get();

  const scores = snapshot.docs
    .map((doc) => doc.data())
    .filter(isUccPastoUser)
    .map((data) => {
      const score = data.cumulativeScore;
      return typeof score === "number" && score > 0 ? Math.round(score) : null;
    })
    .filter((score): score is number => score !== null);

  if (scores.length < 3) {
    return {
      cohortSize: scores.length,
      percentile: null,
      rank: null,
      p50: null,
      p75: null,
      p90: null,
      userScore,
      source: "estimated",
    };
  }

  const sorted = [...scores].sort((a, b) => a - b);
  const percentile = percentileFromSorted(sorted, userScore);
  const below = sorted.filter((s) => s < userScore).length;

  return {
    cohortSize: sorted.length,
    percentile,
    rank: sorted.length - below,
    p50: pickPercentile(sorted, 50),
    p75: pickPercentile(sorted, 75),
    p90: pickPercentile(sorted, 90),
    userScore,
    source: "cohort",
  };
}

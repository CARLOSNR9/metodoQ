export type UccCohortStats = {
  cohortSize: number;
  percentile: number | null;
  rank: number | null;
  p50: number | null;
  p75: number | null;
  p90: number | null;
  userScore: number;
  source: "cohort" | "estimated";
};

import { NextResponse } from "next/server";
import { fetchUccCohortStats } from "@/lib/server/ucc-cohort";

export const runtime = "nodejs";
export const revalidate = 300;

function hasFirebaseAdminConfig(): boolean {
  return Boolean(
    process.env.FIREBASE_ADMIN_PROJECT_ID &&
      process.env.FIREBASE_ADMIN_CLIENT_EMAIL &&
      process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  );
}

export async function GET(request: Request) {
  if (!hasFirebaseAdminConfig()) {
    return NextResponse.json({
      cohortSize: 0,
      percentile: null,
      rank: null,
      p50: null,
      p75: null,
      p90: null,
      userScore: 0,
      source: "estimated" as const,
    });
  }

  try {
    const { searchParams } = new URL(request.url);
    const scoreParam = searchParams.get("score");
    const userScore = Math.max(0, Math.min(100, parseInt(scoreParam ?? "0", 10) || 0));

    const stats = await fetchUccCohortStats(userScore);
    return NextResponse.json(stats);
  } catch (error) {
    console.error("ucc-cohort API error:", error);
    return NextResponse.json({ error: "No se pudo calcular la cohorte." }, { status: 500 });
  }
}

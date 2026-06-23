import { NextResponse } from "next/server";
import { migrateAllUsersTopicStatsAdmin } from "@/lib/server/migrate-topic-stats-admin";

export const runtime = "nodejs";
export const maxDuration = 300;

function authorizeCron(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = request.headers.get("authorization");
  return header === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!authorizeCron(request)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  try {
    const result = await migrateAllUsersTopicStatsAdmin();
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("migrate-topic-stats cron", error);
    return NextResponse.json({ error: "Error en la migración." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { runEngagementEmailBatch } from "@/lib/server/email/send";

export const runtime = "nodejs";

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
    const result = await runEngagementEmailBatch();
    return NextResponse.json(result);
  } catch (error) {
    console.error("engagement-emails cron", error);
    return NextResponse.json({ error: "Error en el cron." }, { status: 500 });
  }
}

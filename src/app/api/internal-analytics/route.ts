import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

type InternalAnalyticsPayload = {
  eventName?: string;
  userId?: string;
  score?: number;
};

const ALLOWED_EVENTS = new Set([
  "landing_visit",
  "click_demo",
  "start_demo",
  "finish_demo",
  "view_paywall",
  "click_upgrade",
  "payment",
  "demo_question_answered",
]);

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as InternalAnalyticsPayload;
    const eventName = payload.eventName;

    if (!eventName || !ALLOWED_EVENTS.has(eventName)) {
      return NextResponse.json({ error: "Evento no permitido." }, { status: 400 });
    }

    await getFirebaseAdminDb().collection("analytics_events").add({
      eventName,
      userId: payload.userId ?? null,
      score: typeof payload.score === "number" ? payload.score : null,
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("No se pudo guardar evento interno de analytics.", error);
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}

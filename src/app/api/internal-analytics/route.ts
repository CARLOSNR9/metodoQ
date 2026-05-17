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

function hasFirebaseAdminConfig(): boolean {
  return Boolean(
    process.env.FIREBASE_ADMIN_PROJECT_ID &&
      process.env.FIREBASE_ADMIN_CLIENT_EMAIL &&
      process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  );
}

export async function POST(request: Request) {
  if (!hasFirebaseAdminConfig()) {
    console.error("internal-analytics: faltan variables FIREBASE_ADMIN_*.");
    return NextResponse.json({ error: "Servicio no configurado." }, { status: 503 });
  }

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

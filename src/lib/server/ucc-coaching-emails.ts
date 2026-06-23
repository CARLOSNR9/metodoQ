import type { Timestamp } from "firebase-admin/firestore";
import { FieldValue } from "firebase-admin/firestore";
import type { DemoResultItem, SessionTypeLabel } from "@/lib/results";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { hasProFeatures } from "@/lib/plans/access";
import { isUccPastoUniversity } from "@/lib/diagnostic/university-match";
import {
  buildUccCoachingStatus,
  shouldSendDailyMissionEmail,
  shouldSendSimulacroEmail,
} from "@/lib/training/ucc-coaching-status";
import { isEmailConfigured, sendEmail } from "@/lib/server/email/client";
import {
  uccDailyMissionReminderEmail,
  uccSimulacroReminderEmail,
} from "@/lib/server/email/templates";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function mapAdminResult(
  id: string,
  data: FirebaseFirestore.DocumentData,
): DemoResultItem {
  const fecha = data.fecha as Timestamp | undefined;
  const date = fecha?.toDate?.() ?? null;

  return {
    id,
    scorePercentage: (data.scorePercentage as number) ?? 0,
    correctAnswers: (data.correctAnswers as number) ?? 0,
    wrongAnswers: (data.wrongAnswers as number) ?? 0,
    wrongTopics: (data.wrongTopics as Record<string, number>) ?? {},
    correctTopics: (data.correctTopics as Record<string, number>) ?? {},
    fechaIso: date ? date.toISOString() : null,
    fechaLabel: date
      ? date.toLocaleDateString("es-CO", { dateStyle: "medium" })
      : "—",
    sessionType: (data.sessionType as SessionTypeLabel) ?? "training",
  };
}

async function fetchUserResults(userId: string): Promise<DemoResultItem[]> {
  const db = getFirebaseAdminDb();
  const snap = await db.collection("results").where("userId", "==", userId).get();
  return snap.docs.map((doc) => mapAdminResult(doc.id, doc.data()));
}

function isUccMiProUserData(data: FirebaseFirestore.DocumentData): boolean {
  if (!hasProFeatures(data.plan as string | undefined)) return false;
  return isUccPastoUniversity(data.goalUniversity as string | undefined);
}

async function createInAppNotification(userId: string, message: string, type: string) {
  const db = getFirebaseAdminDb();
  await db.collection("notifications").add({
    userId,
    type,
    message,
    read: false,
    createdAt: FieldValue.serverTimestamp(),
  });
}

export async function runUccCoachingEmailBatch() {
  if (!isEmailConfigured()) {
    return { sent: 0, skipped: true, reason: "email_not_configured" };
  }

  const db = getFirebaseAdminDb();
  const usersSnap = await db.collection("users").limit(300).get();
  let sent = 0;
  const today = todayKey();

  for (const userDoc of usersSnap.docs) {
    const data = userDoc.data();
    if (data.emailOptIn === false) continue;
    if (!isUccMiProUserData(data)) continue;

    const email = data.email as string | undefined;
    const displayName = (data.displayName as string | undefined) ?? "Doc";
    if (!email) continue;

    const results = await fetchUserResults(userDoc.id);
    const status = buildUccCoachingStatus({
      profile: {
        plan: data.plan as string,
        goalUniversity: data.goalUniversity as string,
        goalSpecialty: data.goalSpecialty as string,
        planStartedAt: data.planStartedAt as string | null,
      },
      results,
    });

    if (!status) continue;

    const lastDailyEmail = data.lastDailyMissionEmailAt as string | undefined;
    if (shouldSendDailyMissionEmail(status, lastDailyEmail, today)) {
      const remaining = status.dailyTarget - status.todayQuestions;
      const tpl = uccDailyMissionReminderEmail({
        displayName,
        todayQuestions: status.todayQuestions,
        dailyTarget: status.dailyTarget,
        remaining,
      });
      const result = await sendEmail({
        to: email,
        subject: tpl.subject,
        html: tpl.html,
        text: tpl.text,
      });
      if (result.ok) {
        await userDoc.ref.set({ lastDailyMissionEmailAt: today }, { merge: true });
        await createInAppNotification(
          userDoc.id,
          `Te faltan ${remaining} preguntas para cerrar tu misión UCC de hoy.`,
          "UCC_DAILY_MISSION",
        );
        sent += 1;
      }
    }

    const lastSimulacroEmail = data.lastSimulacroEmailAt as string | undefined;
    if (shouldSendSimulacroEmail(status, lastSimulacroEmail, today)) {
      const config = status.simulacroStatus!.config;
      const tpl = uccSimulacroReminderEmail({
        displayName,
        questionCount: config.questionCount,
        minutes: config.minutes,
        overdue: status.simulacroOverdue,
      });
      const result = await sendEmail({
        to: email,
        subject: tpl.subject,
        html: tpl.html,
        text: tpl.text,
      });
      if (result.ok) {
        await userDoc.ref.set({ lastSimulacroEmailAt: today }, { merge: true });
        await createInAppNotification(
          userDoc.id,
          status.simulacroOverdue
            ? `Simulacro UCC pendiente: ${config.questionCount} preg · ${config.minutes} min.`
            : `Hoy toca simulacro UCC: ${config.questionCount} preg · ${config.minutes} min.`,
          "UCC_SIMULACRO",
        );
        sent += 1;
      }
    }
  }

  return { sent, skipped: false };
}

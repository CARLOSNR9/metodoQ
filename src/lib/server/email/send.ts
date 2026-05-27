import { getPlanDisplayName } from "@/lib/plans/config";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { getAdminNotificationEmail, isEmailConfigured, sendEmail } from "./client";
import {
  paymentConfirmationEmail,
  planExpiryReminderEmail,
  residenteApplicationAdminEmail,
  residenteApplicationUserEmail,
  streakReminderEmail,
  welcomeEmail,
} from "./templates";
import { runUccCoachingEmailBatch } from "@/lib/server/ucc-coaching-emails";
import { hasProFeatures } from "@/lib/plans/access";
import { isUccPastoUniversity } from "@/lib/diagnostic/university-match";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";

export async function sendWelcomeEmail(to: string, displayName?: string) {
  if (!isEmailConfigured()) return { ok: false, skipped: true };
  const tpl = welcomeEmail(displayName);
  return sendEmail({ to, subject: tpl.subject, html: tpl.html, text: tpl.text });
}

export async function sendPaymentConfirmationEmail(
  to: string,
  planId: string,
  cycleMonths: number,
  expiresAt: string,
) {
  if (!isEmailConfigured()) return { ok: false, skipped: true };
  const tpl = paymentConfirmationEmail(getPlanDisplayName(planId), cycleMonths, expiresAt);
  return sendEmail({ to, subject: tpl.subject, html: tpl.html, text: tpl.text });
}

export async function sendPlanExpiryReminder(to: string, planId: string, daysRemaining: number) {
  if (!isEmailConfigured()) return { ok: false, skipped: true };
  const tpl = planExpiryReminderEmail(getPlanDisplayName(planId), daysRemaining);
  return sendEmail({ to, subject: tpl.subject, html: tpl.html, text: tpl.text });
}

export async function sendStreakReminder(
  to: string,
  streakCount: number,
  dailyTarget = 10,
) {
  if (!isEmailConfigured()) return { ok: false, skipped: true };
  const tpl = streakReminderEmail(streakCount, dailyTarget);
  return sendEmail({ to, subject: tpl.subject, html: tpl.html, text: tpl.text });
}

export async function sendResidenteApplicationEmails(input: {
  name: string;
  email: string;
  phone: string;
  university: string;
  message: string;
}) {
  if (!isEmailConfigured()) return { ok: false, skipped: true };

  const userTpl = residenteApplicationUserEmail(input.name);
  await sendEmail({
    to: input.email,
    subject: userTpl.subject,
    html: userTpl.html,
    text: userTpl.text,
  });

  const adminEmail = getAdminNotificationEmail();
  if (adminEmail) {
    const adminTpl = residenteApplicationAdminEmail(input);
    await sendEmail({
      to: adminEmail,
      subject: adminTpl.subject,
      html: adminTpl.html,
      text: adminTpl.text,
    });
  }

  return { ok: true };
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export async function runEngagementEmailBatch() {
  if (!isEmailConfigured()) {
    return { sent: 0, skipped: true, reason: "email_not_configured" };
  }

  const db = getFirebaseAdminDb();
  const usersSnap = await db.collection("users").limit(200).get();
  let sent = 0;
  const today = todayKey();

  for (const doc of usersSnap.docs) {
    const data = doc.data();
    if (data.emailOptIn === false) continue;

    const email = data.email as string | undefined;
    if (!email) continue;

    const plan = data.plan as string | undefined;
    const expiresAt = data.planExpiresAt as string | undefined;
    const streakCount = (data.streakCount as number) ?? 0;
    const lastTraining = data.streakLastTrainingDate as string | null | undefined;

    if (expiresAt && plan && plan !== "FREE") {
      const days = Math.ceil(
        (new Date(expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
      );
      const lastExpiryEmail = data.lastExpiryEmailAt as string | undefined;
      if (days >= 0 && days <= 3 && lastExpiryEmail !== today) {
        const result = await sendPlanExpiryReminder(email, plan, days);
        if (result.ok) {
          await doc.ref.set({ lastExpiryEmailAt: today }, { merge: true });
          sent += 1;
        }
        continue;
      }
    }

    const lastStreakEmail = data.lastStreakEmailAt as string | undefined;
    if (
      streakCount > 0 &&
      lastTraining !== today &&
      lastStreakEmail !== today
    ) {
      const isUccMi =
        hasProFeatures(plan) && isUccPastoUniversity(data.goalUniversity as string);
      const dailyTarget = isUccMi
        ? getDailyGoalForProfile(
            {
              plan: data.plan as string,
              goalUniversity: data.goalUniversity as string,
              goalSpecialty: data.goalSpecialty as string,
            },
            data.planStartedAt as string | null,
          ).streakMinimum
        : 10;
      const result = await sendStreakReminder(email, streakCount, dailyTarget);
      if (result.ok) {
        await doc.ref.set({ lastStreakEmailAt: today }, { merge: true });
        sent += 1;
      }
    }
  }

  const uccResult = await runUccCoachingEmailBatch();
  sent += uccResult.sent ?? 0;

  return { sent, skipped: false, uccCoaching: uccResult };
}

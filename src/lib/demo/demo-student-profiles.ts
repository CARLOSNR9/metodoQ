import type { UserProfile } from "@/hooks/use-user-profile";
import {
  ELIZABETH_EMAIL,
  getElizabethTrainingProfilePatch,
  isElizabethDemoEmail,
} from "@/lib/demo/elizabeth-training-data";
import {
  getDemoTrainingProfilePatch,
  isDemoTrainingEmail,
} from "@/lib/demo/demo-training-data";
import { ensureSubscriptionDates } from "@/lib/plans/subscription-display";

/**
 * Perfiles de demostración: rellenan campos faltantes en Firestore para usuarios de prueba.
 * Los datos reales del documento tienen prioridad cuando ya existen.
 */
const DEMO_STUDENT_PATCHES: Record<string, Partial<UserProfile>> = {
  "yeisi@gmail.com": {
    displayName: "Yeisi",
    plan: "PRO",
    planBillingCycle: 6,
    goalUniversity: "Universidad de Antioquia (UdeA)",
    manualSale: {
      negotiatedPriceCOP: 1_000_000,
      listPriceCOP: 1_600_000,
      negotiatorName: null,
      notes: "Venta manual de prueba — Pro 6 meses",
      recordedAt: new Date().toISOString(),
      recordedByUid: "demo",
    },
  },
  [ELIZABETH_EMAIL]: {
    displayName: "Elizabeth",
    plan: "PRO",
    planBillingCycle: 6,
    goalUniversity: "Universidad Cooperativa (Pasto)",
    manualSale: {
      negotiatedPriceCOP: 1_000_000,
      listPriceCOP: 1_600_000,
      negotiatorName: "Juan José",
      notes: "Primera venta — Pro 6 meses · Medicina Interna UCC Pasto",
      recordedAt: new Date().toISOString(),
      recordedByUid: "demo",
    },
  },
};

function isEmpty(value: unknown): boolean {
  return value == null || value === "";
}

function hasTopicStats(stats: UserProfile["topicStats"]): boolean {
  return stats != null && Object.keys(stats).length > 0;
}

export function applyDemoStudentProfileEnhancements(
  profile: UserProfile,
  email: string | null | undefined,
): UserProfile {
  const patch = DEMO_STUDENT_PATCHES[email?.trim().toLowerCase() ?? ""];
  if (!patch) return profile;

  const merged: UserProfile = { ...profile };
  for (const [key, value] of Object.entries(patch) as [keyof UserProfile, unknown][]) {
    if (isEmpty(merged[key])) {
      merged[key] = value as never;
    }
  }

  if (isElizabethDemoEmail(email)) {
    const trainingPatch = getElizabethTrainingProfilePatch();
    for (const [key, value] of Object.entries(trainingPatch) as [keyof UserProfile, unknown][]) {
      if (key === "topicStats") {
        if (!hasTopicStats(merged.topicStats)) {
          merged.topicStats = value as UserProfile["topicStats"];
        }
        continue;
      }
      if (key === "attemptsCount") {
        if (!merged.attemptsCount) merged.attemptsCount = value as number;
        continue;
      }
      if (isEmpty(merged[key])) {
        merged[key] = value as never;
      }
    }
  } else if (isDemoTrainingEmail(email)) {
    const trainingPatch = getDemoTrainingProfilePatch();
    for (const [key, value] of Object.entries(trainingPatch) as [keyof UserProfile, unknown][]) {
      if (key === "topicStats") {
        if (!hasTopicStats(merged.topicStats)) {
          merged.topicStats = value as UserProfile["topicStats"];
        }
        continue;
      }
      if (key === "attemptsCount") {
        if (!merged.attemptsCount) merged.attemptsCount = value as number;
        continue;
      }
      if (isEmpty(merged[key])) {
        merged[key] = value as never;
      }
    }
  }

  if (merged.plan === "PRO" || merged.plan === "BASICO" || merged.plan === "RESIDENTE") {
    const cycle = (merged.planBillingCycle ?? 6) as 1 | 3 | 6;
    return ensureSubscriptionDates(merged, cycle) as UserProfile;
  }

  return merged;
}

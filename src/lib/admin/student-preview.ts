import type { UserProfile } from "@/hooks/use-user-profile";
import { isAdminUser } from "@/lib/roles";
import { ensureSubscriptionDates } from "@/lib/plans/subscription-display";

export const ADMIN_STUDENT_PREVIEW_PLAN = "PRO" as const;

export type AdminPreviewUniversity = "ucc" | "umng" | "univalle";

export function isAdminPreviewUniversity(value: string | null | undefined): value is AdminPreviewUniversity {
  return value === "ucc" || value === "umng" || value === "univalle";
}

export function isAdminStudentPreview(
  role: string | null | undefined,
  email: string | null | undefined,
): boolean {
  return isAdminUser(role, email);
}

/** Simula plan Pro al revisar el panel estudiante sin modificar Firestore. */
export function applyAdminStudentPreviewProfile(
  profile: UserProfile,
  role?: string | null,
  previewUni?: AdminPreviewUniversity | null
): UserProfile {
  const effectiveRole =
    role ?? (profile as UserProfile & { role?: string }).role ?? null;

  if (!isAdminStudentPreview(effectiveRole, profile.email)) {
    return profile;
  }

  const withPro: UserProfile = {
    ...profile,
    plan: ADMIN_STUDENT_PREVIEW_PLAN,
    planBillingCycle: 6,
    onboardingCompleted: profile.onboardingCompleted ?? true,
    attemptedExam: profile.attemptedExam ?? true,
  };

  if (previewUni === "ucc") {
    withPro.goalUniversity = "Universidad Cooperativa (Pasto)";
    withPro.goalSpecialty = "Medicina Interna";
  } else if (previewUni === "umng") {
    withPro.goalUniversity = "Universidad Militar Nueva Granada";
  } else if (previewUni === "univalle") {
    withPro.goalUniversity = "Universidad del Valle (Univalle)";
    withPro.goalSpecialty = "Dermatología";
  }

  return ensureSubscriptionDates(withPro, 6) as UserProfile;
}

export function getAdminStudentPreviewPlan(
  role: string | null | undefined,
  email: string | null | undefined,
  actualPlan: string | null | undefined,
): string {
  if (isAdminStudentPreview(role, email)) {
    return ADMIN_STUDENT_PREVIEW_PLAN;
  }
  return actualPlan ?? "FREE";
}

export function getAdminStudentPreviewExpiresAt(
  role: string | null | undefined,
  email: string | null | undefined,
  actualExpiresAt: string | null | undefined,
): string | null {
  if (!isAdminStudentPreview(role, email)) {
    return actualExpiresAt ?? null;
  }

  const preview = new Date();
  preview.setFullYear(preview.getFullYear() + 1);
  preview.setHours(23, 59, 59, 999);
  return preview.toISOString();
}

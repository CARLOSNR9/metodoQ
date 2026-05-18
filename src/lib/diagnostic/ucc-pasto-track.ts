import { hasProFeatures } from "@/lib/plans/access";
import {
  resolveSpecialtyFromProfile,
  resolveUniversityFromProfile,
} from "@/lib/diagnostic/resolve-profile-target";
import {
  isMedicinaInternaSpecialty,
  isUccPastoUniversity,
} from "@/lib/diagnostic/university-match";

export type LearningTrackProfile = {
  plan?: string | null;
  goalUniversity?: string | null;
  goalSpecialty?: string | null;
};

/** Especialidad efectiva: UCC Pasto sin specialty explícita → Medicina Interna (única batería dedicada). */
export function getEffectiveGoalSpecialty(
  goalUniversity?: string | null,
  goalSpecialty?: string | null,
): string {
  if (goalSpecialty) {
    return resolveSpecialtyFromProfile(goalSpecialty);
  }
  if (isUccPastoUniversity(goalUniversity)) {
    return "Medicina Interna";
  }
  return resolveSpecialtyFromProfile(goalSpecialty);
}

export function getEffectiveGoalUniversity(
  goalUniversity?: string | null,
): string | null {
  if (!goalUniversity || goalUniversity === "Otra") return null;
  return resolveUniversityFromProfile(goalUniversity);
}

/** Usuario en la ruta UCC Pasto · Medicina Interna (cualquier plan). */
export function isUccPastoMedicinaInternaTrack(
  goalUniversity?: string | null,
  goalSpecialty?: string | null,
): boolean {
  return (
    isUccPastoUniversity(goalUniversity) &&
    isMedicinaInternaSpecialty(getEffectiveGoalSpecialty(goalUniversity, goalSpecialty))
  );
}

/** Plan Pro (o Residente) + UCC Pasto · Medicina Interna. */
export function isUccPastoMedicinaInternaProUser(
  profile: LearningTrackProfile | null | undefined,
): boolean {
  if (!profile) return false;
  return (
    hasProFeatures(profile.plan) &&
    isUccPastoMedicinaInternaTrack(profile.goalUniversity, profile.goalSpecialty)
  );
}

/** Perfil con universidad (y specialty inferida si aplica) para saltar selección en Act1. */
export function hasCalibratedLearningTrack(
  goalUniversity?: string | null,
  goalSpecialty?: string | null,
): boolean {
  return Boolean(getEffectiveGoalUniversity(goalUniversity));
}

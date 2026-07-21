import { hasProFeatures } from "@/lib/plans/access";
import {
  resolveSpecialtyFromProfile,
  resolveUniversityFromProfile,
} from "@/lib/diagnostic/resolve-profile-target";
import {
  isCirugiaPlasticaSpecialty,
  isUmngUniversity,
} from "@/lib/diagnostic/university-match";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";

/**
 * Constantes paramétricas del Examen de Admisión UMNG
 */
export const UMNG_EXAM_CONFIG = {
  totalQuestions: 140,
  timeLimitMinutes: 180,
  optionsPerQuestion: 5,
  passingScorePercentage: 60,
};

export function getEffectiveGoalSpecialtyUMNG(
  goalUniversity?: string | null,
  goalSpecialty?: string | null,
): string {
  if (goalSpecialty) {
    return resolveSpecialtyFromProfile(goalSpecialty);
  }
  if (isUmngUniversity(goalUniversity)) {
    return "Cirugía Plástica";
  }
  return resolveSpecialtyFromProfile(goalSpecialty);
}

/** Usuario en la ruta UMNG · Cirugía Plástica (cualquier plan). */
export function isUmngCirugiaPlasticaTrack(
  goalUniversity?: string | null,
  goalSpecialty?: string | null,
): boolean {
  return (
    isUmngUniversity(goalUniversity) &&
    isCirugiaPlasticaSpecialty(getEffectiveGoalSpecialtyUMNG(goalUniversity, goalSpecialty))
  );
}

/** Plan Pro (o Residente) + UMNG · Cirugía Plástica. */
export function isUmngCirugiaPlasticaProUser(
  profile: LearningTrackProfile | null | undefined,
): boolean {
  if (!profile) return false;
  return (
    hasProFeatures(profile.plan) &&
    isUmngCirugiaPlasticaTrack(profile.goalUniversity, profile.goalSpecialty)
  );
}

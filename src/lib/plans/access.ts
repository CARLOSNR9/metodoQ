import type { PlanId } from "./config";

/** Planes legacy en Firestore */
const LEGACY_PRO_PLUS = "PRO_PLUS";

export type StoredUserPlan = PlanId | typeof LEGACY_PRO_PLUS | string;

export function normalizeUserPlan(plan: string | null | undefined): PlanId {
  if (!plan || plan === "FREE") return "FREE";
  if (plan === LEGACY_PRO_PLUS) return "RESIDENTE";
  if (plan === "BASICO" || plan === "PRO" || plan === "RESIDENTE") return plan;
  return "FREE";
}

export function hasPaidPlan(plan: StoredUserPlan | null | undefined): boolean {
  const normalized = normalizeUserPlan(plan ?? undefined);
  return normalized === "BASICO" || normalized === "PRO" || normalized === "RESIDENTE";
}

/** Clases en vivo, comunidad PRO, análisis avanzado */
export function hasProFeatures(plan: StoredUserPlan | null | undefined): boolean {
  const normalized = normalizeUserPlan(plan ?? undefined);
  return normalized === "PRO" || normalized === "RESIDENTE";
}

/** Entrenamiento sin límite estricto del free tier */
export function hasUnlimitedTraining(plan: StoredUserPlan | null | undefined): boolean {
  return hasPaidPlan(plan);
}

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

const PLAN_RANK: Record<PlanId, number> = {
  FREE: 0,
  BASICO: 1,
  PRO: 2,
  RESIDENTE: 3,
};

export type PlanCardState = "upgrade" | "current" | "included" | "renewal";

export function getPlanCardState(
  userPlan: StoredUserPlan | null | undefined,
  cardPlanId: PlanId,
  options?: { renewalEligible?: boolean },
): PlanCardState {
  const userRank = PLAN_RANK[normalizeUserPlan(userPlan ?? undefined)];
  const cardRank = PLAN_RANK[cardPlanId];
  if (cardRank === userRank && options?.renewalEligible) return "renewal";
  if (cardRank === userRank) return "current";
  if (cardRank < userRank) return "included";
  return "upgrade";
}

export function getVisiblePlanIds(
  userPlan: PlanId,
  renewalEligible: boolean,
): PlanId[] {
  if (userPlan === "RESIDENTE") return ["RESIDENTE"];
  if (userPlan === "PRO") {
    return renewalEligible ? ["PRO", "RESIDENTE"] : ["RESIDENTE"];
  }
  if (userPlan === "BASICO") {
    return renewalEligible ? ["BASICO", "PRO", "RESIDENTE"] : ["PRO", "RESIDENTE"];
  }
  return ["BASICO", "PRO", "RESIDENTE"];
}

export function getRecommendedUpgradePlanId(
  userPlan: StoredUserPlan | null | undefined,
): PlanId | null {
  const normalized = normalizeUserPlan(userPlan ?? undefined);
  if (normalized === "FREE" || normalized === "BASICO") return "PRO";
  if (normalized === "PRO") return "RESIDENTE";
  return null;
}

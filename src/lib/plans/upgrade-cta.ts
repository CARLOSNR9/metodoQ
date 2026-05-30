import { getRecommendedUpgradePlanId, type StoredUserPlan } from "./access";

export type PlanUpgradeCta = {
  planId: "PRO" | "RESIDENTE";
  href: string;
  label: string;
  shortLabel: string;
};

/** CTA de upgrade según plan actual. Null si ya está en Residente (tope). */
export function getPlanUpgradeCta(
  userPlan: StoredUserPlan | null | undefined,
): PlanUpgradeCta | null {
  const upgradePlanId = getRecommendedUpgradePlanId(userPlan);
  if (upgradePlanId === "PRO") {
    return {
      planId: "PRO",
      href: "/dashboard/planes",
      label: "Ver beneficios PRO",
      shortLabel: "Ver planes PRO",
    };
  }
  if (upgradePlanId === "RESIDENTE") {
    return {
      planId: "RESIDENTE",
      href: "/residente",
      label: "Postular a Residente",
      shortLabel: "Plan Residente",
    };
  }
  return null;
}

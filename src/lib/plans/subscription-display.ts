import type { BillingCycle } from "./config";
import { calculatePlanExpiration, formatCOP, getPlanDisplayName } from "./config";
import { getCatalogListPrice } from "./manual-sale";
import type { PlanId } from "./config";

export type ManualSaleInfo = {
  negotiatedPriceCOP: number;
  listPriceCOP: number;
  negotiatorName?: string | null;
  notes?: string | null;
  recordedAt?: string;
  recordedByUid?: string;
};

export type UserGender = "male" | "female";

export type SubscriptionProfile = {
  plan?: string | null;
  planStartedAt?: string | null;
  planExpiresAt?: string | null;
  planBillingCycle?: number | null;
  manualSale?: ManualSaleInfo | null;
  displayName?: string | null;
  email?: string | null;
  gender?: UserGender | null;
};

export function getUserGreetingName(profile: SubscriptionProfile | null | undefined): string {
  if (profile?.displayName?.trim()) {
    return profile.displayName.trim().split(/\s+/)[0] ?? "Doc";
  }
  const email = profile?.email ?? "";
  const local = email.split("@")[0]?.trim();
  if (local) {
    return local.charAt(0).toUpperCase() + local.slice(1);
  }
  return "Doc";
}

export function getDoctorGreetingName(profile: SubscriptionProfile | null | undefined): string {
  const name = getUserGreetingName(profile);
  if (name === "Doc") return "Doc";
  const honorific = profile?.gender === "female" ? "Dra." : "Dr.";
  return `${honorific} ${name}`;
}

export function formatSubscriptionDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const RENEWAL_WINDOW_DAYS = 30;
export const RENEWAL_DISCOUNT_PERCENT = 10;

export function getDaysUntilExpiration(expiresAt: string | null | undefined): number | null {
  if (!expiresAt) return null;
  const expirationDate = new Date(expiresAt);
  if (Number.isNaN(expirationDate.getTime())) return null;
  const diffMs = expirationDate.getTime() - Date.now();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function isRenewalEligible(
  expiresAt: string | null | undefined,
  windowDays = RENEWAL_WINDOW_DAYS,
): boolean {
  const days = getDaysUntilExpiration(expiresAt);
  if (days === null) return false;
  return days <= windowDays;
}

export function applyRenewalDiscount(
  amount: number,
  percent = RENEWAL_DISCOUNT_PERCENT,
): number {
  return Math.round(amount * (1 - percent / 100));
}

export function formatDaysRemainingLabel(days: number | null): string | null {
  if (days === null) return null;
  if (days <= 0) return "Vence hoy";
  if (days === 1) return "1 día restante";
  return `${days} días restantes`;
}

export function getNegotiatedPrice(profile: SubscriptionProfile | null | undefined): number | null {
  const fromSale = profile?.manualSale?.negotiatedPriceCOP;
  if (typeof fromSale === "number" && fromSale >= 0) return fromSale;
  return null;
}

export function getSubscriptionProgressPercent(
  startedAt: string | null | undefined,
  expiresAt: string | null | undefined,
): number | null {
  if (!startedAt || !expiresAt) return null;
  const start = new Date(startedAt).getTime();
  const end = new Date(expiresAt).getTime();
  if (Number.isNaN(start) || Number.isNaN(end) || end <= start) return null;
  const elapsed = Date.now() - start;
  const total = end - start;
  return Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
}

export function buildBillingCycleLabel(cycle: number | null | undefined): string {
  if (cycle === 1) return "1 mes";
  if (cycle === 3) return "3 meses";
  if (cycle === 6) return "6 meses";
  return "—";
}

export type SubscriptionSummary = {
  planName: string;
  billingCycleLabel: string;
  startedLabel: string;
  expiresLabel: string;
  daysRemaining: number | null;
  progressPercent: number | null;
  negotiatedPrice: number | null;
  listPrice: number | null;
  priceLabel: string;
};

export function buildSubscriptionSummary(
  profile: SubscriptionProfile | null | undefined,
): SubscriptionSummary | null {
  const plan = profile?.plan;
  if (!plan || plan === "FREE") return null;

  const cycle = profile?.planBillingCycle ?? null;
  const negotiated = getNegotiatedPrice(profile);
  const listFromSale = profile?.manualSale?.listPriceCOP;
  const listPrice =
    typeof listFromSale === "number" && listFromSale > 0
      ? listFromSale
      : cycle && (plan === "BASICO" || plan === "PRO" || plan === "RESIDENTE")
        ? getCatalogListPrice(plan as PlanId, cycle as BillingCycle)
        : null;

  return {
    planName: getPlanDisplayName(plan),
    billingCycleLabel: buildBillingCycleLabel(cycle),
    startedLabel: formatSubscriptionDate(profile?.planStartedAt),
    expiresLabel: formatSubscriptionDate(profile?.planExpiresAt),
    daysRemaining: getDaysUntilExpiration(profile?.planExpiresAt),
    progressPercent: getSubscriptionProgressPercent(
      profile?.planStartedAt,
      profile?.planExpiresAt,
    ),
    negotiatedPrice: negotiated,
    listPrice,
    priceLabel: negotiated != null ? formatCOP(negotiated) : "—",
  };
}

export function ensureSubscriptionDates(
  profile: SubscriptionProfile,
  cycle: BillingCycle,
  startDate = new Date(),
): SubscriptionProfile {
  const start = profile.planStartedAt
    ? new Date(profile.planStartedAt)
    : new Date(startDate);
  start.setHours(0, 0, 0, 0);

  return {
    ...profile,
    planBillingCycle: profile.planBillingCycle ?? cycle,
    planStartedAt: profile.planStartedAt ?? start.toISOString(),
    planExpiresAt:
      profile.planExpiresAt ?? calculatePlanExpiration(start, cycle),
  };
}

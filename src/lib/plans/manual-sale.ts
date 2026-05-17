import {
  calculatePlanExpiration,
  getPlanById,
  parseBillingCycle,
  type BillingCycle,
  type PlanId,
} from "./config";

export type ManualSaleRecord = {
  negotiatedPriceCOP: number;
  listPriceCOP: number;
  negotiatorName: string | null;
  notes: string | null;
  recordedAt: string;
  recordedByUid: string;
};

export function getCatalogListPrice(planId: PlanId, cycle: BillingCycle): number {
  const plan = getPlanById(planId);
  if (!plan) return 0;
  const price = plan.prices[cycle];
  return cycle === 1 ? price.monthly : price.total;
}

export function parsePlanStartDate(value: string | null | undefined): Date | null {
  if (!value?.trim()) return null;
  const parsed = new Date(`${value.trim()}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function parseNegotiatedPrice(value: string | null | undefined): number | null {
  if (value == null || value === "") return null;
  const digits = String(value).replace(/\D/g, "");
  if (!digits) return null;
  const amount = Number(digits);
  return Number.isFinite(amount) && amount >= 0 ? amount : null;
}

export function buildManualPlanDates(
  startDate: Date,
  cycle: BillingCycle,
): { planStartedAt: string; planExpiresAt: string } {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  return {
    planStartedAt: start.toISOString(),
    planExpiresAt: calculatePlanExpiration(start, cycle),
  };
}

export function parseManualSaleFromForm(
  formData: FormData,
  plan: PlanId,
): {
  ok: true;
  cycle: BillingCycle;
  startDate: Date;
  negotiatedPriceCOP: number;
  listPriceCOP: number;
  negotiatorName: string | null;
  notes: string | null;
  planStartedAt: string;
  planExpiresAt: string;
} | { ok: false; error: string } {
  if (plan === "FREE") {
    return { ok: false, error: "Plan gratis no requiere venta manual." };
  }

  const cycle = parseBillingCycle(String(formData.get("planBillingCycle") ?? ""));
  if (!cycle) {
    return { ok: false, error: "Selecciona un período válido (1, 3 o 6 meses)." };
  }

  const startDate = parsePlanStartDate(String(formData.get("planStartDate") ?? ""));
  if (!startDate) {
    return { ok: false, error: "Indica la fecha de inicio del plan." };
  }

  const negotiatedPriceCOP = parseNegotiatedPrice(
    String(formData.get("negotiatedPriceCOP") ?? ""),
  );
  if (negotiatedPriceCOP === null) {
    return { ok: false, error: "Indica el precio negociado (puede ser 0 si aplica)." };
  }

  const listPriceCOP = getCatalogListPrice(plan, cycle);
  const negotiatorName =
    String(formData.get("negotiatorName") ?? "").trim() || null;
  const notes = String(formData.get("saleNotes") ?? "").trim() || null;
  const dates = buildManualPlanDates(startDate, cycle);

  return {
    ok: true,
    cycle,
    startDate,
    negotiatedPriceCOP,
    listPriceCOP,
    negotiatorName,
    notes,
    ...dates,
  };
}

export function discountPercent(list: number, negotiated: number): number {
  if (list <= 0) return 0;
  return Math.round(((list - negotiated) / list) * 100);
}

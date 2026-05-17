/**
 * Fuente única de verdad para planes, precios y features de Método Q.
 */

export type BillingCycle = 1 | 3 | 6;

export type PaidPlanId = "BASICO" | "PRO" | "RESIDENTE";

export type PlanId = "FREE" | PaidPlanId;

export interface PlanPrice {
  monthly: number;
  total: number;
  savings?: string;
  originalTotal?: number;
}

export interface PlanDefinition {
  id: PlanId;
  slug: string;
  name: string;
  description: string;
  prices: Record<BillingCycle, PlanPrice>;
  features: string[];
  cta: string;
  highlighted?: boolean;
  popular?: boolean;
  /** Plan vendible vía Stripe (no FREE ni flujo manual) */
  checkoutEnabled: boolean;
}

export const BILLING_CYCLES: BillingCycle[] = [1, 3, 6];

export const PLANS: PlanDefinition[] = [
  {
    id: "FREE",
    slug: "free",
    name: "Gratis",
    description: "Para quienes quieren probar el método antes de comprometerse.",
    prices: {
      1: { monthly: 0, total: 0 },
      3: { monthly: 0, total: 0 },
      6: { monthly: 0, total: 0 },
    },
    features: [
      "Diagnóstico adaptativo de 10 preguntas",
      "Perfil de rendimiento básico",
      "Ideal para probar el método",
      "Sin simulacros completos",
    ],
    cta: "Empezar Gratis",
    checkoutEnabled: false,
  },
  {
    id: "BASICO",
    slug: "basico",
    name: "Básico",
    description: "Para quienes buscan validar su conocimiento con práctica real.",
    prices: {
      1: { monthly: 300000, total: 300000 },
      3: { monthly: 166667, total: 500000, savings: "44%" },
      6: { monthly: 141667, total: 850000, savings: "53%" },
    },
    features: [
      "Entrena con preguntas tipo examen real",
      "Tu perfil de rendimiento (debilidades y fortalezas)",
      "Simulaciones de examen (limitadas)",
      "Acceso a la plataforma 24/7",
    ],
    cta: "Elegir Básico",
    checkoutEnabled: true,
  },
  {
    id: "PRO",
    slug: "pro",
    name: "Pro",
    description: "El camino directo para dominar el examen con mentoría experta.",
    prices: {
      1: { monthly: 500000, total: 500000 },
      3: { monthly: 333333, total: 1000000, savings: "33%" },
      6: { monthly: 266667, total: 1600000, savings: "46%" },
    },
    features: [
      "Todo lo del plan Básico",
      "Clases en vivo con el Doctor Q",
      "Análisis avanzado de tus errores por tema",
      "Tu plan de estudio personalizado",
      "Comunidad privada de estudio",
    ],
    cta: "Elegir plan PRO",
    highlighted: true,
    popular: true,
    checkoutEnabled: true,
  },
  {
    id: "RESIDENTE",
    slug: "residente",
    name: "Residente",
    description: "Acompañamiento élite para asegurar tu plaza de especialidad.",
    prices: {
      1: { monthly: 1000000, total: 1000000 },
      3: { monthly: 666667, total: 2000000, savings: "33%" },
      6: { monthly: 583333, total: 3500000, savings: "41%" },
    },
    features: [
      "Todo lo del plan PRO",
      "Seguimiento 1 a 1 con el equipo médico",
      "Preparación intensiva para entrevistas",
      "Acompañamiento personalizado en trámites",
      "Soporte prioritario 24/7",
    ],
    cta: "Postular a Residente",
    checkoutEnabled: false,
  },
];

export const PAID_PLANS = PLANS.filter(
  (p): p is PlanDefinition & { id: PaidPlanId } => p.checkoutEnabled,
);

export function formatCOP(amount: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getPlanById(id: PlanId): PlanDefinition | undefined {
  return PLANS.find((p) => p.id === id);
}

export function getPlanBySlug(slug: string): PlanDefinition | undefined {
  return PLANS.find((p) => p.slug === slug.toLowerCase());
}

export function parsePaidPlanId(value: string | null | undefined): PaidPlanId | null {
  const normalized = value?.toUpperCase().replace("+", "_PLUS");
  if (normalized === "PRO_PLUS" || normalized === "PRO+") {
    return "RESIDENTE";
  }
  if (normalized === "BASICO" || normalized === "PRO" || normalized === "RESIDENTE") {
    return normalized;
  }
  return null;
}

export function parseBillingCycle(value: string | null | undefined): BillingCycle | null {
  const n = Number(value);
  if (n === 1 || n === 3 || n === 6) {
    return n;
  }
  return null;
}

/**
 * Variable de entorno: STRIPE_PRICE_BASICO_1M, STRIPE_PRICE_PRO_3M, etc.
 */
export function getStripePriceEnvKey(planId: PaidPlanId, cycle: BillingCycle) {
  return `STRIPE_PRICE_${planId}_${cycle}M`;
}

export function getStripePriceId(planId: PaidPlanId, cycle: BillingCycle): string | undefined {
  const key = getStripePriceEnvKey(planId, cycle);
  return process.env[key];
}

/** Plan mensual usa suscripción recurrente; 3 y 6 meses son pago único anticipado */
export function getCheckoutMode(cycle: BillingCycle): "subscription" | "payment" {
  return cycle === 1 ? "subscription" : "payment";
}

export function calculatePlanExpiration(startDate: Date, cycle: BillingCycle): string {
  const end = new Date(startDate);
  end.setMonth(end.getMonth() + cycle);
  return end.toISOString();
}

export function getPlanDisplayName(planId: PlanId | string | null | undefined): string {
  if (!planId) return "Gratis";
  if (planId === "PRO_PLUS") return "Residente";
  const plan = getPlanById(planId as PlanId);
  return plan?.name ?? String(planId);
}

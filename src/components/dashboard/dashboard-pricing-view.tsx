"use client";

import { useState, useEffect } from "react";
import { Check, Clock, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {
  BILLING_CYCLES,
  formatCOP,
  PLANS,
  type BillingCycle,
  type PlanId,
} from "@/lib/plans/config";
import {
  getPlanCardState,
  getRecommendedUpgradePlanId,
  getVisiblePlanIds,
  normalizeUserPlan,
  type PlanCardState,
} from "@/lib/plans/access";
import {
  applyRenewalDiscount,
  formatDaysRemainingLabel,
  formatSubscriptionDate,
  getDaysUntilExpiration,
  isRenewalEligible,
  RENEWAL_DISCOUNT_PERCENT,
} from "@/lib/plans/subscription-display";
import { PlanCtaButton } from "@/components/pricing/plan-cta-button";
import { useUserPlan } from "@/hooks/use-user-plan";

const ctaClass = (highlighted?: boolean) =>
  `flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all active:scale-[0.98] lg:text-base ${
    highlighted
      ? "bg-mq-accent text-mq-accent-foreground hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)]"
      : "bg-slate-100 text-slate-900 hover:bg-white/15 border border-white/5"
  }`;

const paidPlans = PLANS.filter((p) => p.id !== "FREE");

function getPageCopy(
  userPlan: PlanId,
  renewalEligible: boolean,
  expiresAt: string | null,
) {
  if (userPlan === "PRO" && renewalEligible) {
    const expiryLabel = formatSubscriptionDate(expiresAt);
    return {
      title: "Renueva tu plan Pro",
      subtitle: `Tu acceso vence el ${expiryLabel}. Renueva con ${RENEWAL_DISCOUNT_PERCENT}% de descuento o da el salto al plan Residente.`,
    };
  }
  if (userPlan === "PRO") {
    return {
      title: "Da el salto al plan Residente",
      subtitle:
        "Ya tienes PRO activo. El siguiente paso es acompañamiento 1 a 1 con el equipo médico para asegurar tu plaza.",
    };
  }
  if (userPlan === "BASICO" && renewalEligible) {
    const expiryLabel = formatSubscriptionDate(expiresAt);
    return {
      title: "Renueva tu plan Básico",
      subtitle: `Tu acceso vence el ${expiryLabel}. Renueva con ${RENEWAL_DISCOUNT_PERCENT}% de descuento o sube al plan Pro.`,
    };
  }
  if (userPlan === "BASICO") {
    return {
      title: "Sube al plan Pro",
      subtitle:
        "Desbloquea clases en vivo, análisis avanzado y tu plan de estudio personalizado.",
    };
  }
  if (userPlan === "RESIDENTE") {
    return {
      title: "Tu membresía Residente",
      subtitle: "Tienes acceso al nivel más completo de Método Q.",
    };
  }
  return {
    title: "Pasa al siguiente nivel hoy mismo",
    subtitle: "Elige el plan que mejor se adapta a tu preparación para la residencia médica.",
  };
}

function getGridClass(count: number) {
  if (count === 1) return "grid-cols-1 max-w-lg mx-auto";
  if (count === 2) return "grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto";
  return "grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto";
}

function PlanCardAction({
  cardState,
  plan,
  cycle,
  highlighted,
}: {
  cardState: PlanCardState;
  plan: (typeof paidPlans)[number];
  cycle: BillingCycle;
  highlighted?: boolean;
}) {
  if (cardState === "current") {
    return (
      <div
        className={`${ctaClass(highlighted)} cursor-default border-emerald-500/30 bg-emerald-500/10 text-emerald-300`}
      >
        <Check className="h-4 w-4" />
        Tu plan actual
      </div>
    );
  }

  if (cardState === "included") {
    return (
      <div className={`${ctaClass(false)} cursor-default opacity-60`}>
        Incluido en tu plan
      </div>
    );
  }

  if (cardState === "renewal") {
    return (
      <PlanCtaButton
        plan={plan}
        cycle={cycle}
        className={ctaClass(true)}
        label={`Renovar con ${RENEWAL_DISCOUNT_PERCENT}% dto.`}
      />
    );
  }

  return <PlanCtaButton plan={plan} cycle={cycle} className={ctaClass(highlighted)} />;
}

function PlanPriceDisplay({
  cardState,
  currentPrice,
  cycle,
}: {
  cardState: PlanCardState;
  currentPrice: { monthly: number; total: number; savings?: string };
  cycle: BillingCycle;
}) {
  const isRenewal = cardState === "renewal";
  const discountedMonthly = applyRenewalDiscount(currentPrice.monthly);
  const discountedTotal = applyRenewalDiscount(currentPrice.total);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-4xl font-bold text-slate-900">
          {formatCOP(isRenewal ? discountedMonthly : currentPrice.monthly)}
        </span>
        {isRenewal ? (
          <span className="text-lg text-slate-500 line-through">
            {formatCOP(currentPrice.monthly)}
          </span>
        ) : null}
        <span className="text-slate-500 text-sm">/mes</span>
      </div>
      {isRenewal ? (
        <p className="mt-2 text-sm font-medium text-yellow-400">
          {RENEWAL_DISCOUNT_PERCENT}% de descuento por renovación anticipada
        </p>
      ) : null}
      {cycle > 1 && (
        <p className="mt-2 text-sm text-mq-accent font-medium">
          Pago total: {formatCOP(isRenewal ? discountedTotal : currentPrice.total)}
          {!isRenewal && currentPrice.savings ? ` · Ahorra ${currentPrice.savings}` : ""}
        </p>
      )}
    </div>
  );
}

export function DashboardPricingView() {
  const { plan: rawPlan, loading, expiresAt } = useUserPlan();
  const userPlan = normalizeUserPlan(rawPlan ?? undefined);
  const daysRemaining = getDaysUntilExpiration(expiresAt);
  const renewalEligible = !loading && isRenewalEligible(expiresAt);
  const visiblePlanIds = getVisiblePlanIds(userPlan, renewalEligible);
  const visiblePlans = paidPlans.filter((plan) => visiblePlanIds.includes(plan.id));
  const recommendedPlanId = getRecommendedUpgradePlanId(userPlan);
  const pageCopy = getPageCopy(userPlan, renewalEligible, expiresAt);
  const showPromoCountdown = userPlan === "FREE";
  const showRenewalBanner = renewalEligible && (userPlan === "PRO" || userPlan === "BASICO");
  const showResidenteBanner = userPlan === "PRO" && !renewalEligible;
  const [cycle, setCycle] = useState<BillingCycle>(3);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    if (!showPromoCountdown) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [showPromoCountdown]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-12 pb-12">
      {showRenewalBanner ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-4 px-6 shadow-sm gap-4"
        >
          <div className="flex items-center gap-3">
            <Clock className="text-amber-600 w-6 h-6 animate-pulse" />
            <div>
              <p className="text-sm font-bold text-amber-900">
                Tu plan vence pronto —{" "}
                <span className="text-orange-600 font-black">
                  {RENEWAL_DISCOUNT_PERCENT}% DE DESCUENTO
                </span>{" "}
                al renovar
              </p>
              <p className="text-xs text-amber-800/80">
                {formatDaysRemainingLabel(daysRemaining)}. Renueva ahora y no pierdas tu progreso.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white rounded-xl px-4 py-2 border border-amber-200 min-w-[120px] shadow-sm">
            <span className="text-xl font-mono font-bold text-amber-600 tracking-wider">
              {daysRemaining != null && daysRemaining > 0 ? `${daysRemaining}d` : "Hoy"}
            </span>
          </div>
        </motion.div>
      ) : showResidenteBanner ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 px-6 shadow-sm"
        >
          <Sparkles className="text-mq-accent w-6 h-6 shrink-0" />
          <p className="text-sm text-slate-800">
            Tienes <span className="font-bold text-mq-accent">PRO activo</span>. El plan Residente
            incluye seguimiento 1 a 1 con el equipo médico para asegurar tu plaza.
          </p>
        </motion.div>
      ) : showPromoCountdown ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-4 px-6 shadow-sm gap-4"
        >
          <div className="flex items-center gap-3">
            <Clock className="text-red-500 w-6 h-6 animate-pulse" />
            <div>
              <p className="text-sm font-bold text-red-900">
                Oferta exclusiva:{" "}
                <span className="text-orange-600 font-black">{RENEWAL_DISCOUNT_PERCENT}% DE DESCUENTO</span>
              </p>
              <p className="text-xs text-red-800/80">
                Los precios vuelven a la normalidad cuando termine el contador.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white rounded-xl px-4 py-2 border border-red-200 min-w-[120px] shadow-sm">
            <span className="text-xl font-mono font-bold text-red-600 tracking-wider">
              {formatTime(timeLeft)}
            </span>
          </div>
        </motion.div>
      ) : null}

      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {pageCopy.title}
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">{pageCopy.subtitle}</p>
      </div>

      {visiblePlans.length > 1 || userPlan === "FREE" ? (
        <div className="flex justify-center">
          <div className="relative flex rounded-full bg-slate-50 p-1 backdrop-blur-sm border border-slate-200">
            {BILLING_CYCLES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCycle(c)}
                className={`relative px-6 py-2 text-sm font-medium transition-colors ${
                  cycle === c ? "text-mq-accent-foreground" : "text-slate-900/70 hover:text-slate-900"
                }`}
              >
                {cycle === c && (
                  <motion.div
                    layoutId="dashboard-cycle"
                    className="absolute inset-0 rounded-full bg-mq-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {c} {c === 1 ? "Mes" : "Meses"}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className={`grid gap-6 lg:gap-8 ${getGridClass(visiblePlans.length)}`}>
        {visiblePlans.map((plan, index) => {
          const currentPrice = plan.prices[cycle];
          const cardState: PlanCardState = loading
            ? "upgrade"
            : getPlanCardState(userPlan, plan.id, { renewalEligible });
          const isRenewalCard = cardState === "renewal";
          const isRecommended = !isRenewalCard && recommendedPlanId === plan.id;
          const isHighlighted =
            isRenewalCard || isRecommended || (loading && plan.highlighted && userPlan === "FREE");

          return (
            <motion.div
              key={plan.id}
              id={plan.id === "RESIDENTE" ? "residente" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-6 lg:p-8 ${
                isHighlighted
                  ? "bg-gradient-to-b from-white/10 to-white/5 ring-2 ring-mq-accent shadow-[0_0_40px_-10px_rgba(0,209,255,0.3)] lg:scale-[1.02] z-10"
                  : "bg-white/[0.03] ring-1 ring-white/10"
              }`}
            >
              {isRenewalCard ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  Renueva con {RENEWAL_DISCOUNT_PERCENT}% dto.
                </span>
              ) : isRecommended ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-mq-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-mq-accent-foreground">
                  {userPlan === "PRO" ? "Siguiente paso" : "Recomendado"}
                </span>
              ) : null}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{plan.description}</p>
              </div>

              <PlanPriceDisplay
                cardState={cardState}
                currentPrice={currentPrice}
                cycle={cycle}
              />

              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mq-accent/10">
                      <Check className="h-3 w-3 text-mq-accent" />
                    </div>
                    <span className="text-sm leading-snug text-slate-900/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <PlanCardAction
                cardState={cardState}
                plan={plan}
                cycle={cycle}
                highlighted={isHighlighted}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center pt-8">
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <motion.div className="flex items-center gap-2">
            <ShieldAlert size={16} />
            <span>Pago 100% seguro con Stripe</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-green-500" />
            <span>Acceso inmediato</span>
          </div>
        </div>
      </div>
    </div>
  );
}

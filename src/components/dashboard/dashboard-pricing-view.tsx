"use client";

import { useState, useEffect } from "react";
import { Check, Clock, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import {
  BILLING_CYCLES,
  formatCOP,
  PLANS,
  type BillingCycle,
} from "@/lib/plans/config";
import { PlanCtaButton } from "@/components/pricing/plan-cta-button";

const ctaClass = (highlighted?: boolean) =>
  `flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all active:scale-[0.98] lg:text-base ${
    highlighted
      ? "bg-mq-accent text-mq-accent-foreground hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)]"
      : "bg-white/10 text-white hover:bg-white/15 border border-white/5"
  }`;

const paidPlans = PLANS.filter((p) => p.id !== "FREE");

export function DashboardPricingView() {
  const [cycle, setCycle] = useState<BillingCycle>(3);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-12 pb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 p-4 px-6 backdrop-blur-md gap-4"
      >
        <div className="flex items-center gap-3">
          <Clock className="text-red-400 w-6 h-6 animate-pulse" />
          <div>
            <p className="text-sm font-bold text-red-100">
              Oferta exclusiva: <span className="text-yellow-400 font-black">10% DE DESCUENTO</span>
            </p>
            <p className="text-xs text-red-200/80">Los precios vuelven a la normalidad cuando termine el contador.</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-black/40 rounded-xl px-4 py-2 border border-red-500/20 min-w-[120px]">
          <span className="text-xl font-mono font-bold text-red-400 tracking-wider">{formatTime(timeLeft)}</span>
        </div>
      </motion.div>

      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Pasa al siguiente nivel hoy mismo
        </h1>
        <p className="text-mq-muted text-lg max-w-2xl mx-auto">
          Elige el plan que mejor se adapta a tu preparación para la residencia médica.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative flex rounded-full bg-white/5 p-1 backdrop-blur-sm border border-white/10">
          {BILLING_CYCLES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCycle(c)}
              className={`relative px-6 py-2 text-sm font-medium transition-colors ${
                cycle === c ? "text-mq-accent-foreground" : "text-white/70 hover:text-white"
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
        {paidPlans.map((plan, index) => {
          const currentPrice = plan.prices[cycle];
          return (
            <motion.div
              key={plan.id}
              id={plan.id === "RESIDENTE" ? "residente" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-6 lg:p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-white/10 to-white/5 ring-2 ring-mq-accent shadow-[0_0_40px_-10px_rgba(0,209,255,0.3)] lg:scale-105 z-10"
                  : "bg-white/[0.03] ring-1 ring-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-mq-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-mq-accent-foreground">
                  Recomendado
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-mq-muted leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{formatCOP(currentPrice.monthly)}</span>
                  <span className="text-mq-muted text-sm">/mes</span>
                </div>
                {cycle > 1 && (
                  <p className="mt-2 text-sm text-mq-accent font-medium">
                    Pago total: {formatCOP(currentPrice.total)}
                    {currentPrice.savings ? ` · Ahorra ${currentPrice.savings}` : ""}
                  </p>
                )}
              </div>

              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mq-accent/10">
                      <Check className="h-3 w-3 text-mq-accent" />
                    </div>
                    <span className="text-sm leading-snug text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <PlanCtaButton plan={plan} cycle={cycle} className={ctaClass(plan.highlighted)} />
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center pt-8">
        <div className="flex items-center gap-6 text-sm text-mq-muted">
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

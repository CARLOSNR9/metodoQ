"use client";

import { useState } from "react";
import { Check, Info, Ticket, Users } from "lucide-react";
import { motion } from "framer-motion";
import {
  BILLING_CYCLES,
  formatCOP,
  PLANS,
  type BillingCycle,
} from "@/lib/plans/config";
import { PlanCtaButton } from "@/components/pricing/plan-cta-button";

const ctaClass = (highlighted?: boolean) =>
  `flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold transition-all active:scale-[0.98] lg:h-14 lg:text-base ${
    highlighted
      ? "bg-mq-accent text-white hover:brightness-110 hover:shadow-lg"
      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm"
  }`;

export function PricingSection({ id = "precios" }: { id?: string }) {
  const [cycle, setCycle] = useState<BillingCycle>(3);

  return (
    <section id={id} className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-mq-accent/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-mq-accent"
          >
            Inversión en tu Futuro
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Elige el plan que te llevará a la <span className="text-mq-accent">Residencia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Empieza gratis. Mejora primero. Paga cuando veas resultados reales en tu simulacro.
          </motion.p>
        </div>

        {/* Cycle Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex rounded-full bg-white p-1 shadow-sm border border-slate-200">
            {BILLING_CYCLES.map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`relative px-6 py-2 text-sm font-bold transition-colors duration-200 ${
                  cycle === c ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cycle === c && (
                  <motion.div
                    layoutId="active-cycle"
                    className="absolute inset-0 rounded-full bg-mq-accent shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{c} {c === 1 ? 'Mes' : 'Meses'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {PLANS.map((plan, index) => {
            const currentPrice = plan.prices[cycle];
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-6 transition-all duration-300 lg:p-8 ${
                  plan.highlighted
                    ? "bg-white ring-2 ring-mq-accent shadow-xl lg:scale-105 z-10"
                    : "bg-white ring-1 ring-slate-200 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-mq-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Más Elegido
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 flex flex-col gap-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {plan.id === "FREE" ? "$0" : formatCOP(currentPrice.monthly)}
                    </span>
                    {plan.id !== "FREE" && <span className="text-slate-500 text-sm font-medium">/mes</span>}
                  </div>
                  {plan.id === "FREE" ? (
                    <p className="text-sm text-mq-accent font-bold">
                      Pruébalo por 7 días
                    </p>
                  ) : (
                    cycle > 1 && (
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-mq-accent font-bold">
                          Pago total: {formatCOP(currentPrice.total)}
                        </p>
                        {currentPrice.savings && (
                          <span className="rounded-md bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 uppercase">
                            Ahorra {currentPrice.savings}
                          </span>
                        )}
                      </div>
                    )
                  )}
                </div>

                <ul className="mb-10 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mq-accent/10">
                        <Check className="h-3 w-3 text-mq-accent" />
                      </div>
                      <span className="text-sm leading-snug text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <PlanCtaButton plan={plan} cycle={cycle} className={ctaClass(plan.highlighted)} />
                <p className="mt-4 text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  {plan.id === "FREE" ? "Sin tarjeta de crédito" : "Pago seguro con Stripe"}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Marketing Extra Sections */}
        <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row lg:justify-between border-t border-slate-200 pt-16">
          {/* Coupon Space */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-mq-accent/10">
              <Ticket className="h-6 w-6 text-slate-400 group-hover:text-mq-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">¿Tienes un cupón?</p>
              <p className="text-xs text-slate-500">Agrégalo en el siguiente paso de tu inscripción.</p>
            </div>
          </div>

          {/* Referral Space */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-mq-accent/10">
              <Users className="h-6 w-6 text-slate-400 group-hover:text-mq-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Recomienda y Gana</p>
              <p className="text-xs text-slate-500">Gana un 10% por cada compañero que se una al método.</p>
            </div>
          </div>

          {/* Free Start Info */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mq-accent/10">
              <Info className="h-6 w-6 text-mq-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Prueba de Nivel Gratuita</p>
              <p className="text-xs text-slate-500">Descubre tus puntos débiles antes de invertir un peso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

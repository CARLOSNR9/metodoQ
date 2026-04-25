"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Info, Ticket, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackClickDemo } from "@/lib/analytics/events";

type BillingCycle = 1 | 3 | 6;

interface PlanPrice {
  monthly: number;
  total: number;
  savings?: string;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  prices: Record<BillingCycle, PlanPrice>;
  features: string[];
  cta: string;
  highlighted?: boolean;
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    description: "Para quienes buscan validar su conocimiento con práctica real.",
    prices: {
      1: { monthly: 300000, total: 300000 },
      3: { monthly: 166667, total: 500000, savings: "44%" },
      6: { monthly: 166667, total: 1000000, savings: "44%" },
    },
    features: [
      "Entrena con preguntas tipo examen real",
      "Tu perfil de rendimiento (debilidades y fortalezas)",
      "Simulaciones de examen (limitadas)",
      "Acceso a la plataforma 24/7",
    ],
    cta: "Empezar entrenamiento Básico",
  },
  {
    id: "pro",
    name: "Pro",
    description: "El camino directo para dominar el examen con mentoría experta.",
    prices: {
      1: { monthly: 500000, total: 500000 },
      3: { monthly: 333333, total: 1000000, savings: "33%" },
      6: { monthly: 333333, total: 2000000, savings: "33%" },
    },
    features: [
      "Todo lo del plan Básico",
      "Clases en vivo con el Dr. Juan José",
      "Análisis avanzado de tus errores por tema",
      "Tu plan de estudio personalizado",
      "Comunidad privada de estudio",
    ],
    cta: "Elegir plan PRO",
    highlighted: true,
    popular: true,
  },
  {
    id: "residente",
    name: "Residente",
    description: "Acompañamiento élite para asegurar tu plaza de especialidad.",
    prices: {
      1: { monthly: 1000000, total: 1000000 },
      3: { monthly: 666667, total: 2000000, savings: "33%" },
      6: { monthly: 833333, total: 5000000, savings: "16%" }, // Nota: El CEO puso 6m 5M, lo cual es más caro mensual que 3m (2M). Podría ser un typo, pero seguiré su orden.
    },
    features: [
      "Todo lo del plan PRO",
      "Seguimiento 1 a 1 con el equipo médico",
      "Preparación intensiva para entrevistas",
      "Acompañamiento personalizado en trámites",
      "Soporte prioritario 24/7",
    ],
    cta: "Postular a Residente",
  },
];

const formatCOP = (amount: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
};

export function PricingSection({ id = "precios" }: { id?: string }) {
  const [cycle, setCycle] = useState<BillingCycle>(3);

  return (
    <section id={id} className="relative overflow-hidden bg-[#0a1f44] py-24 lg:py-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-mq-accent/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-mq-accent/5 blur-[100px]" />
      </div>

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
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Elige el plan que te llevará a la <span className="text-mq-accent">Residencia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-mq-muted"
          >
            Empieza gratis. Mejora primero. Paga cuando veas resultados reales en tu simulacro.
          </motion.p>
        </div>

        {/* Cycle Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex rounded-full bg-white/5 p-1 backdrop-blur-sm border border-white/10">
            {( [1, 3, 6] as BillingCycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                  cycle === c ? "text-mq-accent-foreground" : "text-white/70 hover:text-white"
                }`}
              >
                {cycle === c && (
                  <motion.div
                    layoutId="active-cycle"
                    className="absolute inset-0 rounded-full bg-mq-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{c} {c === 1 ? 'Mes' : 'Meses'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PLANS.map((plan, index) => {
            const currentPrice = plan.prices[cycle];
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-white/10 to-white/5 ring-2 ring-mq-accent shadow-[0_0_40px_-10px_rgba(0,209,255,0.3)] scale-105 z-10"
                    : "bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-mq-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-mq-accent-foreground">
                    Más Elegido
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-mq-muted leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 flex flex-col gap-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {formatCOP(currentPrice.monthly)}
                    </span>
                    <span className="text-mq-muted text-sm">/mes</span>
                  </div>
                  {cycle > 1 && (
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-mq-accent font-medium">
                        Pago total: {formatCOP(currentPrice.total)}
                      </p>
                      {currentPrice.savings && (
                        <span className="rounded-md bg-green-500/20 px-2 py-0.5 text-[10px] font-bold text-green-400 uppercase">
                          Ahorra {currentPrice.savings}
                        </span>
                      )}
                    </div>
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

                <Link
                  href={plan.id === "pro" ? "/register" : plan.id === "basico" ? "/demo" : "/contact"}
                  onClick={() => plan.id === "basico" && trackClickDemo()}
                  className={`flex h-14 w-full items-center justify-center rounded-2xl text-base font-bold transition-all active:scale-[0.98] ${
                    plan.highlighted
                      ? "bg-mq-accent text-mq-accent-foreground hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)]"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
                <p className="mt-4 text-center text-[10px] text-mq-muted uppercase tracking-widest font-semibold">
                  Sin tarjeta de crédito
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Marketing Extra Sections */}
        <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row lg:justify-between border-t border-white/10 pt-16">
          {/* Coupon Space */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-colors group-hover:bg-mq-accent/10">
              <Ticket className="h-6 w-6 text-mq-muted group-hover:text-mq-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">¿Tienes un cupón?</p>
              <p className="text-xs text-mq-muted">Agrégalo en el siguiente paso de tu inscripción.</p>
            </div>
          </div>

          {/* Referral Space */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 transition-colors group-hover:bg-mq-accent/10">
              <Users className="h-6 w-6 text-mq-muted group-hover:text-mq-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Recomienda y Gana</p>
              <p className="text-xs text-mq-muted">Gana un 10% por cada compañero que se una al método.</p>
            </div>
          </div>

          {/* Free Start Info */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mq-accent/10">
              <Info className="h-6 w-6 text-mq-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Prueba de Nivel Gratuita</p>
              <p className="text-xs text-mq-muted">Descubre tus puntos débiles antes de invertir un peso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

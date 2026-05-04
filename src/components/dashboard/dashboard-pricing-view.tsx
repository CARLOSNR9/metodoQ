"use client";

import { useState, useEffect } from "react";
import { Check, Clock, ArrowRight, ShieldAlert, Star } from "lucide-react";
import { motion } from "framer-motion";

type BillingCycle = 1 | 3 | 6;

interface PlanPrice {
  monthly: number;
  total: number;
  savings?: string;
  originalTotal?: number;
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

const formatCOP = (amount: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
};

// 10% discount applied to the original prices
const PLANS: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    description: "Para quienes buscan validar su conocimiento con práctica real.",
    prices: {
      1: { monthly: 270000, total: 270000, originalTotal: 300000 },
      3: { monthly: 150000, total: 450000, savings: "44%", originalTotal: 500000 },
      6: { monthly: 127500, total: 765000, savings: "53%", originalTotal: 850000 },
    },
    features: [
      "Entrena con preguntas tipo examen real",
      "Tu perfil de rendimiento",
      "Simulaciones de examen (limitadas)",
      "Acceso a la plataforma 24/7",
    ],
    cta: "Elegir Básico",
  },
  {
    id: "pro",
    name: "Pro",
    description: "El camino directo para dominar el examen con mentoría experta.",
    prices: {
      1: { monthly: 450000, total: 450000, originalTotal: 500000 },
      3: { monthly: 300000, total: 900000, savings: "33%", originalTotal: 1000000 },
      6: { monthly: 240000, total: 1440000, savings: "46%", originalTotal: 1600000 },
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
      1: { monthly: 900000, total: 900000, originalTotal: 1000000 },
      3: { monthly: 600000, total: 1800000, savings: "33%", originalTotal: 2000000 },
      6: { monthly: 525000, total: 3150000, savings: "41%", originalTotal: 3500000 },
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
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Urgency Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 p-4 px-6 backdrop-blur-md gap-4"
      >
        <div className="flex items-center gap-3">
          <Clock className="text-red-400 w-6 h-6 animate-pulse" />
          <div>
            <p className="text-sm font-bold text-red-100">
              Oferta exclusiva por tu registro: <span className="text-yellow-400 font-black">10% DE DESCUENTO ADICIONAL</span>
            </p>
            <p className="text-xs text-red-200/80">
              Solo por hoy. Los precios volverán a la normalidad en cuanto termine el contador.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-black/40 rounded-xl px-4 py-2 border border-red-500/20 min-w-[120px]">
          <span className="text-xl font-mono font-bold text-red-400 tracking-wider">
            {formatTime(timeLeft)}
          </span>
        </div>
      </motion.div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Pasa al siguiente nivel hoy mismo
        </h1>
        <p className="text-mq-muted text-lg max-w-2xl mx-auto">
          Sabes que tu nivel actual puede mejorar. Elige el <strong className="text-mq-accent">Plan Pro</strong>, nuestra opción más recomendada, y asegura las herramientas que te diferenciarán del resto.
        </p>
      </div>

      {/* Cycle Toggle */}
      <div className="flex justify-center">
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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
        {PLANS.map((plan, index) => {
          const currentPrice = plan.prices[cycle];
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-6 transition-all duration-300 lg:p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-white/10 to-white/5 ring-2 ring-mq-accent shadow-[0_0_40px_-10px_rgba(0,209,255,0.3)] lg:scale-105 z-10"
                  : "bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-mq-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-mq-accent-foreground flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Recomendado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-mq-muted leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex flex-col gap-2">
                <div className="flex flex-col">
                  {currentPrice.originalTotal && (
                    <span className="text-sm font-medium text-mq-muted line-through">
                      {formatCOP(currentPrice.originalTotal)} / total
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {formatCOP(currentPrice.monthly)}
                    </span>
                    <span className="text-mq-muted text-sm">/mes</span>
                  </div>
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

              <button
                className={`flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all active:scale-[0.98] lg:text-base ${
                  plan.highlighted
                    ? "bg-mq-accent text-mq-accent-foreground hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/5"
                }`}
              >
                {plan.cta} <ArrowRight size={18} />
              </button>
            </motion.div>
          );
        })}
      </div>
      
      {/* Guarantees */}
      <div className="flex justify-center pt-8">
         <div className="flex items-center gap-6 text-sm text-mq-muted">
            <div className="flex items-center gap-2">
               <ShieldAlert size={16} />
               <span>Pago 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
               <Check size={16} className="text-green-500" />
               <span>Acceso inmediato</span>
            </div>
         </div>
      </div>
    </div>
  );
}

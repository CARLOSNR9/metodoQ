"use client";

import { useState } from "react";
import { Check, Info, Ticket, Users, Link as LinkIcon, Gift, GraduationCap, Rocket, Crown, ArrowRight, Lock, ShieldCheck, Clock, MousePointerClick, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";
import {
  BILLING_CYCLES,
  formatCOP,
  PLANS,
  type BillingCycle,
} from "@/lib/plans/config";
import { PlanCtaButton } from "@/components/pricing/plan-cta-button";

export function PricingSection({ id = "precios" }: { id?: string }) {
  const [cycle, setCycle] = useState<BillingCycle>(3);

  const getPlanIcon = (planId: string) => {
    switch (planId) {
      case "FREE": return <Gift className="w-7 h-7 text-green-500" />;
      case "BASIC": return <GraduationCap className="w-7 h-7 text-blue-500" />;
      case "PRO": return <Rocket className="w-7 h-7 text-purple-500" />;
      case "RESIDENTE": return <Crown className="w-7 h-7 text-orange-500" />;
      default: return null;
    }
  };

  const getPlanButtonStyle = (planId: string, highlighted: boolean = false) => {
    const base = "flex h-12 w-full items-center justify-center rounded-xl text-[15px] font-bold transition-all active:scale-[0.98] lg:h-14";
    
    if (planId === "FREE") {
      return `${base} bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 group`;
    }
    if (planId === "BASIC") {
      return `${base} bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 group`;
    }
    if (planId === "PRO") {
      return `${base} bg-blue-600 text-white hover:bg-blue-700 shadow-md group`;
    }
    if (planId === "RESIDENTE") {
      return `${base} bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 group`;
    }
    
    return `${base} bg-white text-slate-700 border border-slate-200`;
  };

  return (
    <section id={id} className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/img/grid-pattern.svg')] opacity-[0.02] -z-10" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-600"
          >
            <LinkIcon className="w-3.5 h-3.5" />
            Inversión en tu Futuro
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[4rem] leading-[1.1]"
          >
            Elige el plan que te llevará <br/> a la <span className="text-blue-600">Residencia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[1.1rem] leading-snug text-slate-500 font-medium max-w-xl mx-auto"
          >
            Empieza gratis, mejora cada día y alcanza tu mejor versión. <br/>
            Tú enfocado en tu meta, nosotros en tu preparación.
          </motion.p>
        </div>

        {/* Cycle Toggle */}
        <div className="mt-14 flex justify-center items-center gap-4 flex-col sm:flex-row">
          <div className="relative flex rounded-full bg-white p-1 shadow-sm border border-slate-200">
            {BILLING_CYCLES.map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`relative px-8 py-2.5 text-[15px] font-bold transition-colors duration-200 ${
                  cycle === c ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cycle === c && (
                  <motion.div
                    layoutId="active-cycle"
                    className="absolute inset-0 rounded-full bg-blue-600 shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{c} {c === 1 ? 'Mes' : 'Meses'}</span>
              </button>
            ))}
          </div>
          
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
            <Check className="w-3.5 h-3.5" />
            Ahorra hasta 33%
          </div>
        </div>

        {/* Plans Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 items-end">
          {PLANS.map((plan, index) => {
            const currentPrice = plan.prices[cycle];
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] p-6 transition-all duration-300 lg:p-8 ${
                  plan.highlighted
                    ? "bg-white ring-[3px] ring-blue-600 shadow-2xl lg:scale-105 z-10"
                    : "bg-white border border-slate-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)] hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3 h-3 fill-white" />
                    Más Elegido
                  </div>
                )}

                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center mb-6 shadow-sm">
                    {getPlanIcon(plan.id)}
                  </div>
                  <h3 className="text-[1.35rem] font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-2 text-[13px] text-slate-500 leading-relaxed font-medium min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 flex flex-col gap-1 min-h-[90px]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">
                      {plan.id === "FREE" ? "$0" : formatCOP(currentPrice.monthly)}
                    </span>
                    {plan.id !== "FREE" && <span className="text-slate-500 text-xs font-semibold">/mes</span>}
                  </div>
                  {plan.id === "FREE" ? (
                    <p className="text-[11px] text-green-600 font-bold mt-2">
                      Pruébalo por 7 días
                    </p>
                  ) : (
                    cycle > 1 && (
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-[11px] text-slate-600 font-bold">
                          Pago total: {formatCOP(currentPrice.total)}
                        </p>
                        {currentPrice.savings && (
                          <span className="rounded-md bg-green-50 px-1.5 py-0.5 text-[9px] font-bold text-green-700 uppercase border border-green-100">
                            Ahorra {currentPrice.savings}
                          </span>
                        )}
                      </div>
                    )
                  )}
                </div>

                <ul className="mb-10 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-200">
                        <Check className={`h-2.5 w-2.5 ${plan.highlighted ? 'text-blue-600' : 'text-slate-400'}`} strokeWidth={3} />
                      </div>
                      <span className="text-[13px] font-medium leading-snug text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <PlanCtaButton 
                  plan={plan} 
                  cycle={cycle} 
                  className={getPlanButtonStyle(plan.id, plan.highlighted)}
                >
                  {plan.id === "FREE" ? "Empezar gratis" : plan.id === "BASIC" ? "Elegir Básico" : plan.id === "PRO" ? "Elegir plan PRO" : "Postular a Residente"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </PlanCtaButton>
                
                <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                  {plan.id !== "FREE" && <Lock className="w-3 h-3" />}
                  {plan.id === "FREE" ? "Sin tarjeta de crédito" : "Pago seguro con Stripe"}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Marketing Trust Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Left Side */}
          <div className="flex items-center gap-5 max-w-sm">
            <div className="w-14 h-14 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Tu inversión hoy, tu especialidad mañana</h4>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                Miles de médicos ya están más cerca de su plaza con Método Q Pro.
              </p>
            </div>
          </div>

          {/* Right Side - Mini features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full lg:w-auto">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900 mb-0.5">Sin permanencias</p>
                <p className="text-[10px] text-slate-400 font-medium">Cancela cuando quieras</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-blue-500 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900 mb-0.5">Pago 100% seguro</p>
                <p className="text-[10px] text-slate-400 font-medium">Con Stripe</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MousePointerClick className="w-5 h-5 text-purple-500 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900 mb-0.5">Acceso inmediato</p>
                <p className="text-[10px] text-slate-400 font-medium">Empieza al instante</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <LifeBuoy className="w-5 h-5 text-blue-500 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900 mb-0.5">Soporte real</p>
                <p className="text-[10px] text-slate-400 font-medium">Un equipo que te acompaña</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

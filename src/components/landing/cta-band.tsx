"use client";

import Link from "next/link";
import { Zap, CreditCard, Lock, ShieldCheck, ArrowRight, CheckCircle2, Clock, Headphones, Target, Sparkles, Shield } from "lucide-react";
import { trackClickDemo } from "@/lib/analytics/events";
import { motion } from "framer-motion";

export type CtaBandProps = {
  className?: string;
};

export function CtaBand({ className }: CtaBandProps) {
  return (
    <div className={`relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-32 ${className ?? ""}`}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 sm:p-12 lg:p-16 mb-12 flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          {/* Left: Copy & Button */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-8">
              <Zap className="w-3.5 h-3.5 fill-blue-600" />
              Último paso
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              Tu residencia <br />
              <span className="text-blue-600">empieza hoy</span>
            </h2>
            
            <p className="text-[1.1rem] leading-relaxed text-slate-500 font-medium mb-10">
              No dejes tu preparación para el último mes. Haz tu diagnóstico gratuito y descubre en qué nivel estás en solo 10 minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/demo"
                onClick={() => trackClickDemo()}
                className="group flex h-14 items-center justify-center rounded-xl bg-blue-600 px-8 text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] transition-all hover:bg-blue-700 hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <Zap className="mr-2 w-4 h-4 fill-white" />
                Iniciar mi prueba gratis de 10 min
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-bold text-slate-500">
              <span className="flex items-center gap-1.5">
                <CreditCard className="h-4 w-4 text-blue-600" />
                Sin tarjeta
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-blue-600" />
                Acceso inmediato
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                100% confidencial
              </span>
            </div>
          </div>
          
          {/* Right: Mockup */}
          <div className="flex-1 w-full max-w-[500px]">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-8">
              
              {/* Circular Chart */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" className="text-slate-200" strokeWidth="12" stroke="currentColor" fill="transparent" />
                    <circle 
                      cx="64" cy="64" r="56" 
                      className="text-blue-600 drop-shadow-md" 
                      strokeWidth="12" stroke="currentColor" fill="transparent" strokeLinecap="round" 
                      strokeDasharray="351" strokeDashoffset={351 * 0.18} 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-slate-900">82%</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-500 text-center max-w-[80px] leading-tight mb-3">Probabilidad de aprobación</span>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-[10px] font-bold border border-green-100">
                  <span className="text-[10px]">↑</span> 12% <span className="text-slate-400 font-medium ml-1">vs. última semana</span>
                </div>
              </div>

              {/* Study Plan List */}
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-900 mb-5">Plan de estudio inteligente</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                        <Target className="w-3 h-3 text-red-500" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">Cardiología</span>
                    </div>
                    <span className="px-2 py-0.5 bg-red-50 text-red-600 rounded text-[9px] font-bold border border-red-100">Prioridad alta</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-yellow-500" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">Farmacología</span>
                    </div>
                    <span className="px-2 py-0.5 bg-yellow-50 text-yellow-700 rounded text-[9px] font-bold border border-yellow-100">En progreso</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                        <Shield className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">Ginecología</span>
                    </div>
                    <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-[9px] font-bold border border-green-100">Fortaleza</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-5 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-blue-600 flex items-center gap-1 cursor-pointer hover:text-blue-700">
                    Ver plan completo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>

        {/* Trust Banner Below CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4"
        >
          {/* Trust 1 */}
          <div className="flex items-start gap-4 max-w-[280px]">
            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">Tu información está 100% protegida</h4>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                Cumplimos con los más altos estándares de seguridad y privacidad.
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          {/* Trust 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-0.5">Pago 100% seguro</h4>
              <p className="text-[11px] text-slate-500 font-medium">Con Stripe</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          {/* Trust 3 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-0.5">Cancela cuando quieras</h4>
              <p className="text-[11px] text-slate-500 font-medium">Sin permanencias</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          {/* Trust 4 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-0.5">Soporte real</h4>
              <p className="text-[11px] text-slate-500 font-medium">Un equipo que te acompaña</p>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}

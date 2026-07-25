"use client";

import Link from "next/link";
import { Star, TrendingUp, AlertCircle, CheckCircle2, BookOpen, Target, ArrowRight } from "lucide-react";
import { trackClickDemo } from "@/lib/analytics/events";
import { formatUserCount, usePublicStats } from "@/hooks/use-public-stats";
import { motion } from "framer-motion";

function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-xl mx-auto lg:max-w-none"
    >
      {/* Decorative background blurs for the mockup */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/50 via-teal-50/50 to-transparent blur-3xl rounded-3xl -z-10" />
      
      <div className="relative rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* Mockup Header (Browser-like) */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-white/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <div className="mx-auto w-32 h-2 rounded-full bg-slate-100" />
        </div>

        {/* Mockup Content */}
        <div className="p-6 space-y-6">
          {/* Top Row: Probability & Score */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <Target className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-semibold uppercase tracking-wider">Probabilidad</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold text-slate-900">89%</span>
                <span className="flex items-center text-xs font-bold text-green-600 mb-1">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> +4%
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "89%" }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  className="h-full bg-teal-500 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold uppercase tracking-wider">Último Simulacro</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-extrabold text-slate-900">78</span>
                <span className="text-sm font-semibold text-slate-400 mb-1">/100</span>
              </div>
              <p className="mt-2 text-[10px] font-semibold text-slate-500">Percentil 85</p>
            </motion.div>
          </div>

          {/* Middle Row: Strengths & Weaknesses */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs font-bold text-slate-700">Temas Fuertes</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-[10px] font-bold border border-green-100">Pediatría</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-[10px] font-bold border border-green-100">Ginecología</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-bold text-slate-700">Por Reforzar</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 bg-red-50 text-red-700 rounded-md text-[10px] font-bold border border-red-100">Cirugía Gral.</span>
                <span className="px-2 py-1 bg-red-50 text-red-700 rounded-md text-[10px] font-bold border border-red-100">Cardiología</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row: Smart Study Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="p-4 rounded-xl border border-slate-100 bg-slate-50/50"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-800">Plan de Estudio Generado</span>
              <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Hoy</span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Repasar Trauma Abdominal", done: true },
                { label: "Mini-simulacro de Cardiología", done: false },
                { label: "Micro-cápsula: ECG Básico", done: false },
              ].map((task, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  key={i} 
                  className="flex items-center gap-2 group cursor-default"
                >
                  <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${task.done ? 'bg-teal-500 border-teal-500' : 'border-slate-300 bg-white group-hover:border-teal-400'}`}>
                    {task.done && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <span className={`text-xs font-medium transition-colors ${task.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                    {task.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const { stats, loading } = usePublicStats();
  const userCount = loading ? "+1,000" : `+${formatUserCount(stats.displayUsers)}`;

  return (
    <section className="relative isolate overflow-hidden min-h-[calc(100vh-5rem)] flex items-center pt-24 pb-16 lg:pt-0 bg-white">
      {/* Subtle abstract background forms */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent blur-3xl opacity-60 rounded-full" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-teal-50/50 blur-[100px] rounded-full opacity-80" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 items-center">
        {/* Left Column: Copy & CTA */}
        <div className="flex flex-col items-start text-left z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            La plataforma inteligente para médicos
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.75rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Tu residencia médica, asegurada con IA.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600"
          >
            Personaliza tu estudio en tiempo real. Deja de perder el tiempo y estudia exactamente lo que necesitas para aprobar.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4"
          >
            <Link
              href="/demo"
              onClick={() => trackClickDemo()}
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-slate-900 px-8 text-base font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Haz tu prueba gratuita
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0"
            >
              Ver cómo funciona
              <ArrowRight className="ml-2 w-4 h-4 text-slate-400" />
            </Link>
          </motion.div>

          {/* Trust Elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-700">
                4.9/5 <span className="text-slate-500 font-medium ml-1">Valoración Promedio</span>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-200 mx-2" />
            <div className="text-sm text-slate-500 font-medium">
              Con la confianza de <span className="font-bold text-slate-900">{userCount} médicos</span> preparados
            </div>
          </motion.div>
        </div>

        {/* Right Column: UI Mockup */}
        <div className="w-full relative z-10 lg:pl-8">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

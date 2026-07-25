"use client";

import Link from "next/link";
import { Star, ArrowRight, Play, CheckCircle2, TrendingUp, BookOpen, Clock, Activity, MessageSquare, Settings, Home, BarChart2, Bell, ShieldCheck, HelpCircle } from "lucide-react";
import { trackClickDemo } from "@/lib/analytics/events";
import { formatUserCount, usePublicStats } from "@/hooks/use-public-stats";
import { motion } from "framer-motion";

function SidebarMockup() {
  return (
    <div className="w-16 flex flex-col items-center py-6 bg-white border-r border-slate-100 gap-8 h-full rounded-l-3xl shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)] z-10 relative">
      <div className="w-8 h-8 rounded-full bg-mq-accent flex items-center justify-center font-bold text-white text-sm shadow-md mb-4">
        Q
      </div>
      <div className="flex flex-col gap-6 items-center flex-1 w-full">
        <div className="p-2.5 rounded-xl bg-mq-accent/10 text-mq-accent cursor-pointer relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-mq-accent rounded-r-full -ml-[1px]" />
          <Home className="w-5 h-5" />
        </div>
        <div className="p-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
          <BarChart2 className="w-5 h-5" />
        </div>
        <div className="p-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
          <Activity className="w-5 h-5" />
        </div>
        <div className="p-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
          <BookOpen className="w-5 h-5" />
        </div>
        <div className="p-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
          <MessageSquare className="w-5 h-5" />
        </div>
      </div>
      <div className="p-2.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer mt-auto">
        <Settings className="w-5 h-5" />
      </div>
    </div>
  );
}

function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[115%] -ml-[5%] lg:w-full lg:ml-0 lg:max-w-none shadow-2xl rounded-3xl"
    >
      {/* Decorative background blurs for the mockup */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-mq-accent/20 via-blue-200/40 to-transparent blur-3xl rounded-3xl -z-10" />
      
      <div className="relative rounded-3xl border border-white/40 bg-slate-50/50 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex overflow-hidden ring-1 ring-slate-900/5">
        
        <SidebarMockup />

        {/* Main Mockup Content Area */}
        <div className="flex-1 p-6 md:p-8 bg-white/60">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">¡Hola, Dr. Andrés!</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Este es tu progreso actual</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 shadow-sm">
                Este mes <span className="ml-1 text-[10px]">▼</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shadow-sm border border-slate-100">
                <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Top Row: Probability & Score */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-600">Probabilidad de aprobación</span>
                  <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">Muy Alta</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-extrabold text-slate-900">89%</span>
                </div>
                <div className="flex items-center text-[10px] font-bold text-green-600 mb-4">
                  <TrendingUp className="w-3 h-3 mr-1" /> 
                  <span className="text-green-600 font-extrabold">+14%</span>
                  <span className="text-slate-400 ml-1 font-medium">vs. semana pasada</span>
                </div>
                {/* SVG Line Chart */}
                <svg className="w-full h-12 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--mq-accent)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--mq-accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,30 L0,25 C10,25 15,20 25,18 C35,16 40,22 50,15 C60,8 65,12 75,5 C85,-2 90,0 100,2 L100,30 Z" fill="url(#gradient)" />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M0,25 C10,25 15,20 25,18 C35,16 40,22 50,15 C60,8 65,12 75,5 C85,-2 90,0 100,2" 
                    fill="none" 
                    stroke="var(--mq-accent)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />
                  <circle cx="100" cy="2" r="3" fill="white" stroke="var(--mq-accent)" strokeWidth="2" className="drop-shadow-md" />
                </svg>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-600">Último simulacro</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-slate-900">78</span>
                  <span className="text-sm font-semibold text-slate-400">/100</span>
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-500 mb-6">Percentil 85</p>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                    className="h-full bg-mq-accent rounded-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Middle Row: Strengths & Weaknesses */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="flex items-center gap-1.5 mb-3">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-[11px] font-bold text-slate-700">Temas fuertes</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-[10px] font-bold border border-green-100">Pediatría</span>
                  <span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-[10px] font-bold border border-green-100">Ginecología</span>
                  <span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-[10px] font-bold border border-green-100">Farmacología</span>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="flex items-center gap-1.5 mb-3">
                  <Play className="w-3.5 h-3.5 text-red-500 rotate-90" />
                  <span className="text-[11px] font-bold text-slate-700">Temas por reforzar</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-[10px] font-bold border border-red-100/50">Cardiología</span>
                  <span className="px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-[10px] font-bold border border-red-100/50">Cirugía Gral.</span>
                  <span className="px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-[10px] font-bold border border-red-100/50">Neurología</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom Row: Smart Study Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-[1fr_200px] gap-4"
            >
              <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-800">Plan de estudio generado</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Reforzar Cardiología", time: "Hoy", active: true },
                      { label: "Micro-simulacro: Farmacología", time: "Mañana", active: false },
                      { label: "Repaso: Ginecología", time: "Viernes", active: false },
                    ].map((task, i) => (
                      <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${task.active ? 'border-mq-accent bg-mq-accent/10' : 'border-slate-200'}`}>
                            {task.active && <div className="w-1.5 h-1.5 rounded-full bg-mq-accent" />}
                          </div>
                          <span className="text-xs font-semibold text-slate-700">
                            {task.label}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold ${task.active ? 'text-green-600' : 'text-slate-400'}`}>{task.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <span className="text-xs font-bold text-mq-accent hover:text-blue-700 cursor-pointer flex items-center gap-1">
                    Ver plan completo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
              
              <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col items-center justify-center text-center">
                <div className="relative w-20 h-20 flex items-center justify-center mb-3">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="36" className="text-slate-100" strokeWidth="8" stroke="currentColor" fill="transparent" />
                    <motion.circle 
                      initial={{ strokeDasharray: "0 1000" }}
                      animate={{ strokeDasharray: `${65 * 2.26} 1000` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      cx="40" cy="40" r="36" className="text-mq-accent drop-shadow-md" strokeWidth="8" stroke="currentColor" fill="transparent" strokeLinecap="round" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-extrabold text-slate-900">65%</span>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-400 mb-0.5 uppercase tracking-wider">Progreso del plan</p>
                <p className="text-[11px] font-bold text-slate-800 mb-3">12 de 18 temas</p>
                <span className="text-[10px] font-bold text-mq-accent hover:text-blue-700 cursor-pointer">
                  Ver progreso detallado
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const { stats, loading } = usePublicStats();
  const userCount = loading ? "+1,000" : `+${formatUserCount(stats.displayUsers)}`;

  return (
    <section className="relative isolate overflow-hidden bg-[#FAFBFF]">
      
      {/* Decorative subtle grid & gradients */}
      <div className="absolute inset-0 z-0 bg-[url('/img/grid-pattern.svg')] opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-mq-accent/5 blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/5 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTA */}
          <div className="flex flex-col items-start text-left max-w-xl">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 mb-6 shadow-sm"
            >
              <Star className="h-3.5 w-3.5 text-mq-accent fill-mq-accent/20" />
              La plataforma inteligente para médicos
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2.75rem] font-black leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]"
            >
              Tu residencia médica, <br/>
              <span className="text-mq-accent">asegurada con inteligencia artificial</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-[1.1rem] leading-relaxed text-slate-600 font-medium"
            >
              Método Q Pro analiza tus fortalezas y debilidades, crea un plan de estudio personalizado y te acompaña hasta que consigas tu plaza.
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
                className="group inline-flex h-[3.25rem] w-full sm:w-auto items-center justify-center rounded-xl bg-mq-accent px-8 text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] transition-all hover:bg-blue-700 hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Haz tu prueba gratuita
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex h-[3.25rem] w-full sm:w-auto items-center justify-center rounded-xl border border-slate-200/80 bg-white px-8 text-[15px] font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Play className="mr-2 w-4 h-4 text-slate-400" />
                Ver cómo funciona
              </Link>
            </motion.div>

            {/* Trust Elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-4"
            >
              <div className="flex -space-x-2.5">
                {[11, 32, 44, 25, 65].map((id) => (
                  <div key={id} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${id}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-mq-yellow text-mq-yellow" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900 text-sm">4.9/5</span>
                </div>
                <div className="mt-1 text-[13px] text-slate-500 font-medium text-center sm:text-left leading-snug">
                  Más de {userCount} médicos ya preparan <br className="hidden sm:block"/> su residencia con Método Q
                </div>
              </div>
            </motion.div>

            {/* 4 Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 w-full pt-8 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4"
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-mq-accent"><ShieldCheck className="w-4 h-4" /></div>
                  <span className="font-extrabold text-slate-900">{userCount}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">Médicos preparados</span>
              </div>
              <div className="flex flex-col items-start relative">
                <div className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 w-px h-8 bg-slate-200" />
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-mq-accent"><HelpCircle className="w-4 h-4" /></div>
                  <span className="font-extrabold text-slate-900">100K+</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">Preguntas respondidas</span>
              </div>
              <div className="flex flex-col items-start relative">
                <div className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 w-px h-8 bg-slate-200" />
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-mq-accent"><Star className="w-4 h-4" /></div>
                  <span className="font-extrabold text-slate-900">95%</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">Satisfacción</span>
              </div>
              <div className="flex flex-col items-start relative">
                <div className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 w-px h-8 bg-slate-200" />
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-mq-accent"><Clock className="w-4 h-4" /></div>
                  <span className="font-extrabold text-slate-900">24/7</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">IA siempre disponible</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: UI Mockup */}
          <div className="w-full relative z-10 lg:pl-12 flex justify-center lg:justify-end">
            <HeroMockup />
          </div>
        </div>
      </div>
      
      {/* Logos Section - Confían en nosotros */}
      <div className="w-full border-t border-slate-200/60 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-bold text-slate-800 mb-8">Confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-1.5 font-black text-slate-800 text-xl tracking-tighter">
              <span className="text-green-700">U</span>de<span className="text-green-700">A</span>
            </div>
            <div className="flex items-center gap-2 font-serif font-bold text-slate-800 text-xl tracking-wide">
              JAVERIANA
            </div>
            <div className="flex items-center gap-1.5 font-extrabold text-red-700 text-lg uppercase tracking-widest">
              Univalle
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
              <ShieldCheck className="w-6 h-6 text-blue-800" /> San Ignacio
            </div>
            <div className="flex items-center gap-1 font-semibold text-slate-800 text-2xl tracking-tight">
              <span className="text-blue-900">Uni</span>Sabana
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

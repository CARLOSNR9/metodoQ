"use client";

import { Brain, Target, ClipboardCheck, Clock, FileText, BarChart, ChevronRight, Trophy, Users, ShieldCheck, HeartPulse, Stethoscope, FileClock, Sparkles, Home, User, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function DashboardMockup() {
  return (
    <div className="absolute left-0 top-10 w-[340px] bg-white rounded-3xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 z-10 hidden sm:block">
      <h4 className="text-sm font-bold text-slate-800 mb-6">Tu progreso</h4>
      
      <div className="flex gap-4 mb-6">
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle cx="48" cy="48" r="42" className="text-blue-50" strokeWidth="8" stroke="currentColor" fill="transparent" />
            <circle cx="48" cy="48" r="42" className="text-blue-600 drop-shadow-sm" strokeWidth="8" stroke="currentColor" fill="transparent" strokeDasharray="264" strokeDashoffset={264 - (264 * 0.82)} strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-slate-900">82%</span>
          </div>
          <span className="text-[9px] font-medium text-slate-500 text-center leading-tight mt-2 max-w-[80px]">Probabilidad de aprobación</span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="inline-flex items-center self-start gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-lg text-[10px] font-bold mb-1 border border-green-100/50">
            <span className="text-xs">↑</span> 12%
          </div>
          <span className="text-[10px] text-slate-400 font-medium mb-3">vs. última semana</span>
          <svg className="w-full h-10 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,30 L0,25 C10,25 20,20 30,22 C40,24 50,15 60,18 C70,21 80,5 100,5 L100,30 Z" fill="url(#lineGrad)" />
            <path d="M0,25 C10,25 20,20 30,22 C40,24 50,15 60,18 C70,21 80,5 100,5" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="100" cy="5" r="3" fill="white" stroke="#2563eb" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <h5 className="text-[11px] font-bold text-slate-800 mb-4">Áreas por reforzar</h5>
      <div className="space-y-3">
        {[
          { name: "Cardiología", percent: "42%", icon: HeartPulse, color: "text-red-500" },
          { name: "Farmacología", percent: "58%", icon: Sparkles, color: "text-orange-500" },
          { name: "Ginecología", percent: "71%", icon: Users, color: "text-yellow-500" },
        ].map((area, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`p-1.5 rounded-lg bg-slate-50 ${area.color}`}>
                <area.icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold text-slate-700">{area.name}</span>
            </div>
            <span className={`text-xs font-bold ${area.color}`}>{area.percent}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-5 pt-4 border-t border-slate-50">
        <span className="text-[11px] font-bold text-blue-600 flex items-center gap-1 cursor-pointer">
          Ver todas las áreas <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative z-20 sm:ml-[180px] sm:-mt-10 mx-auto w-[280px] bg-slate-100 p-2.5 rounded-[40px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] border-[4px] border-slate-100 ring-1 ring-slate-200">
      {/* Notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-100 rounded-b-2xl z-30" />
      
      <div className="bg-[#0B1527] w-full h-[580px] rounded-[32px] overflow-hidden flex flex-col relative border border-slate-200/50">
        {/* Header */}
        <div className="px-6 pt-12 pb-6 bg-[#0B1527] text-white">
          <h4 className="text-base font-bold mb-1">Plan de estudio de hoy</h4>
          <p className="text-[11px] text-slate-400 font-medium">3 actividades pendientes</p>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-slate-50 rounded-t-3xl px-4 pt-6 pb-20 space-y-3 overflow-hidden">
          {[
            { type: "Micro-simulacro", title: "Cardiología", detail: "20 preguntas", active: true },
            { type: "Repaso inteligente", title: "Farmacología", detail: "15 temas", active: false },
            { type: "Simulacro corto", title: "Ginecología", detail: "40 preguntas", active: true },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group">
              <div>
                <h5 className="text-[11px] font-bold text-slate-800 mb-0.5">{item.type}</h5>
                <p className="text-[10px] text-slate-400 mb-2">{item.title}</p>
                <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{item.detail}</span>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${item.active ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-400'}`}>
                {item.active ? <ArrowRight className="w-4 h-4" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white border-t border-slate-100 flex items-center justify-around px-2 pb-2">
          <div className="p-2 text-mq-accent"><Home className="w-5 h-5" /></div>
          <div className="p-2 text-slate-300"><User className="w-5 h-5" /></div>
          <div className="p-2 text-slate-300"><MessageSquare className="w-5 h-5" /></div>
          <div className="p-2 text-slate-300"><ShieldCheck className="w-5 h-5" /></div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection({ id = "como-funciona" }: { id?: string }) {
  const steps = [
    {
      title: "Diagnóstico Inteligente",
      description: "Identifica tus fortalezas y debilidades en 10 minutos con nuestra prueba inicial adaptativa.",
      tag: "10 min",
      icon: Brain,
      tagIcon: Clock,
    },
    {
      title: "Entrenamiento Adaptativo",
      description: "Responde preguntas tipo examen con retroalimentación inmediata. La IA adapta el plan de estudio a lo que necesitas mejorar.",
      tag: "Plan personalizado",
      icon: Target,
      tagIcon: FileText,
    },
    {
      title: "Simulacros Reales",
      description: "Mídete contra el tiempo en condiciones idénticas al examen de admisión y mejora tu estrategia.",
      tag: "Resultados detallados",
      icon: ClipboardCheck,
      tagIcon: BarChart,
    },
  ];

  return (
    <section id={id} className="scroll-mt-14 bg-white overflow-hidden py-24 relative">
      
      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[url('/img/grid-pattern.svg')] opacity-[0.03] rounded-full -z-10" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 font-bold text-[10px] uppercase tracking-widest mb-6">
            El Método
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            El camino directo a tu especialidad
          </h2>
          <p className="text-[1.1rem] text-slate-500 font-medium leading-relaxed">
            Un método probado por miles de médicos que combina inteligencia artificial, práctica deliberada y simulacros reales.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-8 items-center mb-24">
          
          {/* Left: Timeline */}
          <div className="relative">
            {/* Timeline dashed line */}
            <div className="absolute left-[19px] top-[40px] bottom-[40px] w-px border-l-2 border-dashed border-slate-200 z-0 hidden sm:block" />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  key={index} 
                  className="flex gap-6 sm:gap-8 relative z-10"
                >
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-[38px] h-[38px] rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_0_8px_white]">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white">
                    <div className="flex gap-5 sm:gap-6">
                      <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center text-blue-600">
                        <step.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4 max-w-sm">
                          {step.description}
                        </p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-md text-[11px] font-bold border border-green-100">
                          <step.tagIcon className="w-3.5 h-3.5" />
                          {step.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Mockups */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            <DashboardMockup />
            <PhoneMockup />
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6"
        >
          <div className="flex items-center gap-6 max-w-lg text-center lg:text-left">
            <div className="hidden sm:flex w-16 h-16 shrink-0 rounded-full bg-blue-100 text-blue-600 items-center justify-center">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Un método respaldado por resultados</h4>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                Miles de médicos han transformado su preparación y ya están ejerciendo su especialidad soñada.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">+50K</span>
              <span className="text-[11px] font-bold text-slate-600">Médicos preparados</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500 mb-1">95%</span>
              <span className="text-[11px] font-bold text-slate-600">Satisfacción</span>
            </div>
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-1">24/7</span>
              <span className="text-[11px] font-bold text-slate-600">Acompañamiento</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

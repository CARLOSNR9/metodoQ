"use client";

import { Zap, Target, Lock, ArrowRight, Sparkles, Clock, Users, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { 
  ReferralCard, 
  LiveClasses, 
  PastClasses, 
  DailyPlanCard,
  SummaryCards,
  AccumulatedStats
} from "@/components/dashboard";
import { motion } from "framer-motion";

interface FreeDashboardViewProps {
  user: any;
  referralCode: string | null;
  referralCount: number;
  isLoadingReferrals: boolean;
  expiresAt: string | null;
}

export function FreeDashboardView({ 
  user, 
  referralCode, 
  referralCount, 
  isLoadingReferrals,
  expiresAt 
}: FreeDashboardViewProps) {
  
  // Calcular días restantes (25 días desde el registro para plan FREE)
  let daysRemaining = 25;
  
  if (expiresAt) {
    daysRemaining = Math.max(0, Math.ceil((new Date(expiresAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)));
  } else if (user?.createdAt) {
    // Convertir Timestamp de Firestore o fecha ISO a objeto Date
    const createdDate = typeof user.createdAt.toDate === 'function' 
      ? user.createdAt.toDate() 
      : new Date(user.createdAt);
      
    const trialExpiration = new Date(createdDate.getTime());
    trialExpiration.setDate(trialExpiration.getDate() + 25);
    
    const diff = trialExpiration.getTime() - new Date().getTime();
    daysRemaining = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }

  return (
    <div className="space-y-10 pb-12">
      {/* 5. SISTEMA DE TIEMPO (URGENTE) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between rounded-2xl bg-red-500/10 border border-red-500/20 p-4 px-6 backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <Clock className="text-red-400 w-5 h-5 animate-pulse" />
          <p className="text-sm font-bold text-red-100">
            Tu acceso gratis expira en: <span className="text-red-400">{daysRemaining} días</span>
          </p>
        </div>
        <p className="hidden sm:block text-xs font-medium text-red-200/60 uppercase tracking-wider">
          Después de esto pierdes tu progreso
        </p>
      </motion.div>

      {/* 1. HERO (ARRIBA) — MEJORADO */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-mq-border-strong bg-gradient-to-br from-red-500/10 via-mq-surface to-transparent p-8 sm:p-12">
        <div className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 backdrop-blur-md">
              <ShieldAlert size={14} className="text-red-400" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                Alerta de Rendimiento
              </span>
            </div>
            
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl leading-[1.1]">
              {user?.attemptedExam 
                ? <>Tu estrategia actual <span className="text-red-500 italic">necesita un ajuste</span> <br className="hidden sm:block" /> para pasar.</>
                : <>Tu nivel actual <span className="text-red-500 italic">NO es suficiente</span> <br className="hidden sm:block" /> para pasar.</>
              }
            </h1>
            
            <p className="text-lg leading-relaxed text-mq-muted sm:text-xl max-w-xl">
              {user?.goalUniversity && user.goalUniversity !== "Otra"
                ? `Haz tu diagnóstico y descubre qué te separa de tu plaza en la ${user.goalUniversity}. No dejes tu futuro al azar.`
                : "Haz tu diagnóstico y descubre qué te está costando la plaza en la residencia médica. No dejes tu futuro al azar."
              }
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="/demo"
                className="mq-premium-glow group inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-base font-black text-mq-accent-foreground transition-all hover:-translate-y-1 hover:brightness-110 active:scale-95"
              >
                <Target size={20} fill="currentColor" />
                <span>Empezar diagnóstico ahora</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/dashboard/perfil"
                className="inline-flex h-16 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:bg-white/10"
              >
                Ver planes PRO
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decorative elements */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-red-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 p-12 opacity-10 select-none pointer-events-none hidden lg:block">
           <Zap size={300} className="text-white" />
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* 2. BLOQUE PRINCIPAL - DIAGNÓSTICO */}
        <div className="lg:col-span-2 space-y-10">
          <section className="relative overflow-hidden rounded-[2rem] border-2 border-mq-accent/30 bg-mq-surface p-8 sm:p-10 shadow-2xl">
             <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-black text-white">Diagnóstico Inicial</h2>
                  <p className="text-mq-muted leading-relaxed">
                    Simulacro real de <span className="text-white font-bold">10 preguntas</span> basado en los estándares de {user?.goalUniversity && user.goalUniversity !== "Otra" ? `la ${user.goalUniversity}` : "tu universidad"}. Descubre tus puntos débiles en minutos.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold text-mq-muted uppercase tracking-widest pt-2">
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-mq-accent" /> Duración: 2 min</span>
                    <span className="flex items-center gap-1.5"><Target size={14} className="text-mq-accent" /> IA Adaptativa</span>
                  </div>
                </div>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-mq-accent px-8 text-sm font-black text-mq-accent-foreground transition-all hover:scale-105"
                >
                  Empezar ahora
                </Link>
             </div>
             <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-mq-accent/5 to-transparent pointer-events-none" />
          </section>

          {/* 6. PLAN DIARIO (TU MISIÓN DE HOY) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-2">
              <div className="h-2 w-2 rounded-full bg-mq-accent" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-mq-muted">Tu misión de hoy</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
               <div className="group rounded-2xl border border-mq-border-strong bg-white/[0.03] p-6 transition-all hover:bg-white/[0.05]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mq-accent/20 text-mq-accent">
                      <Zap size={20} />
                    </div>
                    <span className="text-lg font-bold text-white">10 Preguntas rápidas</span>
                  </div>
                  <p className="text-sm text-mq-muted mb-6">Mantén tu racha y entrena tu agilidad mental con el simulacro diario.</p>
                  <Link href="/demo" className="text-xs font-bold text-mq-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                    IR A ENTRENAR <ArrowRight size={14} />
                  </Link>
               </div>
               <div className="group rounded-2xl border border-mq-border-strong bg-white/[0.03] p-6 transition-all hover:bg-white/[0.05]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                      <Sparkles size={20} />
                    </div>
                    <span className="text-lg font-bold text-white">Revisión de errores</span>
                  </div>
                  <p className="text-sm text-mq-muted mb-6">Analiza por qué fallaste y evita cometer el mismo error en el examen real.</p>
                  <button disabled className="text-xs font-bold text-mq-muted flex items-center gap-2 cursor-not-allowed">
                    <Lock size={14} /> DESBLOQUEAR EN PRO
                  </button>
               </div>
            </div>
          </div>

          {/* 7. REFERIDOS */}
          <ReferralCard 
            referralCode={referralCode} 
            referralCount={referralCount} 
            loading={isLoadingReferrals} 
          />

          {/* IDEA BRUTAL: SIMULACRO BLOQUEADO */}
          <section className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-black/40 p-8 transition-all hover:bg-black/60">
             <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                   <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-mq-muted group-hover:text-mq-accent transition-colors">
                      <ShieldAlert size={32} />
                   </div>
                   <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white">
                        Simulacro {user?.goalUniversity && user.goalUniversity !== "Otra" ? user.goalUniversity : "Universidad Nacional de Colombia"}
                      </h3>
                      <p className="text-sm text-mq-muted">
                        {user?.goalUniversity && user.goalUniversity !== "Otra" 
                          ? `Banco de preguntas oficial para el examen de la ${user.goalUniversity}`
                          : "80 preguntas reales actualizadas al 2024"
                        }
                      </p>
                   </div>
                </div>
                <Link
                  href="/dashboard/perfil"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white/10 px-6 text-xs font-black text-white transition-all hover:bg-white/20"
                >
                  <Lock size={14} /> DESBLOQUEAR COMPLETO
                </Link>
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-mq-accent/0 via-mq-accent/5 to-mq-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </section>
        </div>

        {/* SIDEBAR: 3. RESULTADO BLOQUEADO (CLAVE DE VENTA) */}
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-mq-border-strong bg-white/[0.02] p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lock size={100} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-black text-white">Lo que vas a desbloquear</h3>
              <p className="text-sm text-mq-muted">Al completar tu diagnóstico Pro:</p>
            </div>

            <ul className="space-y-6">
              {[
                { label: "% de probabilidad de pasar", sub: "Algoritmo basado en años de datos" },
                { label: "Mapa crítico de errores", sub: "Identifica qué temas te están hundiendo" },
                { label: "Plan ultra-personalizado", sub: "Qué estudiar minuto a minuto" },
                { label: "Ranking vs otros médicos", sub: "Sabe dónde estás parado realmente" },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-mq-muted">
                    <Lock size={18} className="group-hover:text-mq-accent transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white/80">{item.label}</p>
                    <p className="text-[10px] text-mq-muted leading-tight">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/dashboard/perfil"
              className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white/10 text-xs font-bold text-white transition-all hover:bg-white/20"
            >
              Ver demo de reportes
            </Link>
          </div>

          <div className="rounded-[2rem] border border-mq-accent/20 bg-mq-accent/5 p-6 text-center space-y-4">
             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent">
                <Sparkles size={24} />
             </div>
             <p className="text-sm font-bold text-white italic">
               {user?.goalUniversity && user.goalUniversity !== "Otra"
                 ? `"La ${user.goalUniversity} te espera, Doc. La diferencia entre un médico y un residente es la estrategia."`
                 : `"La diferencia entre un médico y un residente es la estrategia."`
               }
             </p>
             <p className="text-[10px] uppercase tracking-widest text-mq-muted">- Dr. Q</p>
          </div>
        </aside>
      </div>

      {/* 4. BLOQUE DE CONTENIDO BLOQUEADO */}
      <section className="space-y-8 pt-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-white">Esto es lo que te falta para competir de verdad</h2>
          <p className="text-mq-muted">El plan Pro te da las armas que los demás ya están usando.</p>
        </div>
        
        <div className="grid gap-6 opacity-60 pointer-events-none grayscale-[0.5]">
          <LiveClasses />
          <PastClasses />
        </div>
        
        <div className="flex justify-center pt-4">
          <Link
            href="/dashboard/perfil"
            className="group inline-flex items-center gap-2 rounded-full border border-mq-accent bg-mq-accent/10 px-8 py-3 text-sm font-bold text-mq-accent transition-all hover:bg-mq-accent hover:text-mq-accent-foreground"
          >
            DESBLOQUEAR TODO EL ARSENAL <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      
      {/* 8. ELIMINAR RUIDO (Ocultar estados vacíos que no aportan valor) */}
    </div>
  );
}

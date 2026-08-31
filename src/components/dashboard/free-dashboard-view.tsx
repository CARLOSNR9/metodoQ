"use client";

import { Zap, Target, Lock, ArrowRight, Sparkles, Clock, Users, ShieldAlert, Star } from "lucide-react";
import Link from "next/link";
import { 
  ReferralCard, 
  LiveClasses, 
  PastClasses, 
  DailyPlanCard,
  SummaryCards,
  AccumulatedStats,
  WeakTopicsCard,
  ProgressSimulator,
  StudyBoardPreviewCard,
} from "@/components/dashboard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Act1DiagnosticModal } from "./act1-diagnostic-modal";
import { Act2PredictiveDashboard } from "@/components/demo/act2-predictive-dashboard";
import { computeCumulativePerformance } from "@/lib/scoring/cumulative-score";
import { useTopicStatsMigration } from "@/hooks/use-topic-stats-migration";

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
  const [isAct1Open, setIsAct1Open] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    setMounted(true);
    
    const calculateTargetDate = () => {
      // 1. Prioridad: Fecha de expiración explícita (del plan)
      if (expiresAt) {
        return new Date(expiresAt);
      }

      // 2. Intentamos obtener la fecha de creación del perfil (Firestore)
      const firestoreCreatedAt = user?.createdAt;
      if (firestoreCreatedAt) {
        const createdDate = typeof firestoreCreatedAt.toDate === 'function' 
          ? firestoreCreatedAt.toDate() 
          : new Date(firestoreCreatedAt);
        const target = new Date(createdDate.getTime());
        target.setDate(target.getDate() + 7);
        return target;
      }

      // 3. Intentamos obtener de los metadatos de Auth (Firebase Auth)
      // Nota: user.metadata.creationTime es un string
      const authCreationTime = user?.metadata?.creationTime;
      if (authCreationTime) {
        const createdDate = new Date(authCreationTime);
        const target = new Date(createdDate.getTime());
        target.setDate(target.getDate() + 7);
        return target;
      }

      // 4. Fallback: 7 días desde ahora (esto es lo que causa el reset si falla lo anterior)
      const fallbackTarget = new Date();
      fallbackTarget.setDate(fallbackTarget.getDate() + 7);
      return fallbackTarget;
    };

    const targetDate = calculateTargetDate();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [expiresAt, user?.createdAt, user?.metadata?.creationTime]);

  const cumulative = computeCumulativePerformance(user?.topicStats);
  useTopicStatsMigration({
    userId: user?.uid,
    topicStatsVersion: user?.topicStatsVersion,
    topicStats: user?.topicStats,
    enabled: Boolean(user?.uid && user?.topicStats && Object.keys(user.topicStats).length > 0),
  });
  const displayScore =
    user?.cumulativeScore ??
    (cumulative.totalQuestions > 0
      ? cumulative.scorePercentage
      : user?.lastScore ?? 0);
  const lastSessionScore =
    typeof user?.lastSessionScore === "number" ? user.lastSessionScore : null;
  const totalQuestions =
    user?.totalQuestionsAnswered ?? cumulative.totalQuestions;

  return (
    <motion.div className="space-y-10 pb-12">
      {/* 5. SISTEMA DE TIEMPO (URGENTE) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white border border-slate-200/60 p-4 sm:px-6 shadow-sm"
      >
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
            <Clock className="text-mq-accent w-5 h-5 animate-pulse shrink-0" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800 text-center sm:text-left">
              Tu acceso de prueba está activo
            </p>
            <p className="text-xs text-slate-500">Desbloquea tu potencial antes de que expire</p>
          </div>
        </div>

        {mounted ? (
          <div className="flex items-center gap-2 text-slate-700 font-mono font-black text-xl tracking-wider bg-slate-50 px-6 py-2.5 rounded-xl border border-slate-200/50 shadow-inner">
            <span>{String(timeLeft.days).padStart(2, '0')}d</span>
            <span className="animate-[pulse_1s_ease-in-out_infinite] opacity-50 text-slate-400">:</span>
            <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
            <span className="animate-[pulse_1s_ease-in-out_infinite] opacity-50 text-slate-400">:</span>
            <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
            <span className="animate-[pulse_1s_ease-in-out_infinite] opacity-50 text-slate-400">:</span>
            <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>
        ) : (
          <div className="h-11 w-48 bg-slate-100 rounded-xl animate-pulse" />
        )}

        <Link href="/dashboard/planes" className="hidden lg:flex items-center gap-2 text-xs font-bold text-mq-accent hover:text-blue-700 transition-colors uppercase tracking-wider text-right group">
          Hazte PRO <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* 1. HERO (ARRIBA) — MEJORADO */}
      <header className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-[#FAFBFF] p-8 sm:p-12 shadow-sm isolate">
        
        {/* Decorative subtle grid & gradients (Matching Landing) */}
        <div className="absolute inset-0 z-0 bg-[url('/img/grid-pattern.svg')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-mq-accent/5 blur-[120px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/5 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-3 py-1.5 shadow-sm">
              <Star className="h-3.5 w-3.5 text-mq-accent fill-mq-accent/20" />
              <span className="text-[11px] font-bold text-slate-600">
                Bienvenido al Método Q
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-slate-900 leading-[1.15]">
              {user?.attemptsCount > 0
                ? <>Análisis de <span className="text-mq-accent italic">Supervivencia</span> <br className="hidden sm:block" /> Completado.</>
                : user?.attemptedExam 
                  ? <>Tu estrategia actual <span className="text-mq-accent italic">necesita un ajuste</span> <br className="hidden sm:block" /> para pasar.</>
                  : <>Descubre qué te separa <br className="hidden sm:block" /> de tu <span className="text-mq-accent italic">residencia médica.</span></>
              }
            </h1>
            
            <p className="text-lg leading-relaxed text-slate-600 font-medium sm:text-xl max-w-xl mt-6">
              {user?.goalUniversity && user.goalUniversity !== "Otra"
                ? `Haz tu diagnóstico inicial y obtén una radiografía exacta de lo que necesitas para asegurar tu plaza en la ${user.goalUniversity}.`
                : "Haz tu diagnóstico inicial y obtén una radiografía exacta de lo que necesitas para asegurar tu plaza. No dejes tu futuro al azar."
              }
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto items-center">
              {user?.attemptsCount > 0 ? (
                <div className="group inline-flex h-[3.25rem] w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-slate-100 border border-slate-200 px-8 text-[15px] font-bold text-slate-400 cursor-not-allowed">
                  <Lock size={18} />
                  <span>Diagnóstico Completado</span>
                </div>
              ) : (
                <button
                  onClick={() => setIsAct1Open(true)}
                  className="group inline-flex h-[3.25rem] w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-mq-accent px-8 text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] transition-all hover:bg-blue-700 hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Target size={18} />
                  <span>Empezar diagnóstico ahora</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              )}
              
              <Link
                href="/dashboard/planes"
                className="inline-flex h-[3.25rem] w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white px-8 text-[15px] font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0"
              >
                Ver planes PRO
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decorative elements - right side symbol */}
        <div className="absolute bottom-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none hidden lg:block">
           <Zap size={300} className="text-slate-900" />
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* 2. BLOQUE PRINCIPAL - DIAGNÓSTICO O RESULTADOS */}
        <div className="lg:col-span-2 space-y-10">
          {/* 3. LA REVELACIÓN: Resultados del Diagnóstico o Invitación */}
          {user?.attemptsCount > 0 ? (
            <div className="space-y-10">
              <SummaryCards userId={user.uid} />
              
              <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                <div className="mb-8 space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1">
                    <Sparkles size={14} className="text-mq-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">Análisis de Desempeño IA</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">Tu Realidad Académica</h2>
                  <p className="text-slate-500 text-sm">
                    Total semanal de domingo a domingo: diagnóstico, retos diarios y
                    entrenamiento. Los simulacros no se incluyen.
                  </p>
                </div>
                
                <Act2PredictiveDashboard 
                    scorePercentage={displayScore}
                    lastSessionScore={lastSessionScore}
                    university={user?.goalUniversity || "Universidad Nacional"}
                    specialty={user?.goalSpecialty || "Tu Especialidad"}
                    totalQuestionsAnswered={totalQuestions}
                    correctTopics={user?.topicStats ? Object.fromEntries(Object.entries(user.topicStats).map(([k, v]: [string, any]) => [k, v.correct])) : {}}
                    wrongTopics={user?.topicStats ? Object.fromEntries(Object.entries(user.topicStats).map(([k, v]: [string, any]) => [k, v.wrong])) : {}}
                    userId={user?.uid}
                />
              </section>

              <WeakTopicsCard userId={user.uid} />

              <StudyBoardPreviewCard userId={user.uid} />
              
              <ProgressSimulator currentScore={cumulative.standardizedScore || 468} />

              <div className="rounded-[2.5rem] border border-mq-accent/20 bg-mq-accent/5 p-8 text-center space-y-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent">
                    <Sparkles size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 italic">"Doc, los números no mienten, pero no definen tu final."</h3>
                  <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                    {displayScore < 60 
                      ? "Tu base actual tiene fugas críticas que te dejarían fuera en la primera ronda. Necesitas dejar de 'estudiar' y empezar a 'entrenar' bajo presión."
                      : "Tienes un potencial real, pero en la UNAL la diferencia entre un residente y un médico general es de apenas 1.5 puntos. No te confíes."
                    }
                  </p>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-mq-accent font-black">- DR. Q</p>
                
                <div className="pt-4">
                  <Link
                    href="/dashboard/planes"
                    className="mq-premium-glow inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-sm font-black text-mq-accent-foreground transition-all hover:scale-105"
                  >
                    ACCEDER AL ARSENAL COMPLETO <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <section className="relative overflow-hidden rounded-[2rem] border-2 border-mq-accent/30 bg-white p-8 sm:p-10 shadow-2xl">
               <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-black text-slate-900">Tu Análisis de Rendimiento está esperando</h2>
                    <p className="text-slate-500 leading-relaxed">
                      Nuestra IA necesita al menos un entrenamiento para calcular tu probabilidad de éxito y detectar tus puntos débiles.
                    </p>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest pt-2">
                      <span className="flex items-center gap-1.5"><Clock size={14} className="text-mq-accent" /> Duración: 2 min</span>
                      <span className="flex items-center gap-1.5"><Target size={14} className="text-mq-accent" /> IA Adaptativa</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsAct1Open(true)}
                    className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-mq-accent px-8 text-sm font-black text-mq-accent-foreground transition-all hover:scale-105"
                  >
                    Realizar primer diagnóstico
                  </button>
               </div>
               <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-mq-accent/5 to-transparent pointer-events-none" />
            </section>
          )}

          {/* 6. PLAN DIARIO (TU MISIÓN DE HOY) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-2">
              <div className="h-2 w-2 rounded-full bg-mq-accent" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Tu misión de hoy</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
               <div className="group rounded-2xl border border-slate-200 bg-white/[0.03] p-6 transition-all hover:bg-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mq-accent/20 text-mq-accent">
                      <Zap size={20} />
                    </div>
                    <span className="text-lg font-bold text-slate-900">10 Preguntas rápidas</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">Mantén tu racha y entrena tu agilidad mental con el simulacro diario.</p>
                  <button 
                    onClick={() => {
                      if (user?.attemptsCount > 0) {
                        // Si ya lo hizo, redirigir a planes o mostrar que está bloqueado
                        window.location.href = "/dashboard/planes";
                      } else {
                        setIsAct1Open(true);
                      }
                    }}
                    className={`text-xs font-bold flex items-center gap-2 group-hover:gap-3 transition-all ${user?.attemptsCount > 0 ? "text-slate-500" : "text-mq-accent"}`}
                  >
                    {user?.attemptsCount > 0 ? <><Lock size={14} /> DESBLOQUEAR EN PRO</> : <>IR A ENTRENAR <ArrowRight size={14} /></>}
                  </button>
               </div>
               <div className="group rounded-2xl border border-slate-200 bg-white/[0.03] p-6 transition-all hover:bg-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                      <Sparkles size={20} />
                    </div>
                    <span className="text-lg font-bold text-slate-900">Revisión de errores</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">Analiza por qué fallaste y evita cometer el mismo error en el examen real.</p>
                  <button disabled className="text-xs font-bold text-slate-500 flex items-center gap-2 cursor-not-allowed">
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
                   <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-500 group-hover:text-mq-accent transition-colors">
                      <ShieldAlert size={32} />
                   </div>
                   <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900">
                        Simulacro {user?.goalUniversity && user.goalUniversity !== "Otra" ? user.goalUniversity : "Universidad Nacional de Colombia"}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {user?.goalUniversity && user.goalUniversity !== "Otra" 
                          ? `Banco de preguntas oficial para el examen de la ${user.goalUniversity}`
                          : "80 preguntas reales actualizadas al 2024"
                        }
                      </p>
                   </div>
                </div>
                <Link
                  href="/dashboard/planes"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 text-xs font-black text-slate-900 transition-all hover:bg-white/20"
                >
                  <Lock size={14} /> DESBLOQUEAR COMPLETO
                </Link>
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-mq-accent/0 via-mq-accent/5 to-mq-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </section>
        </div>

        {/* SIDEBAR: 3. RESULTADO BLOQUEADO (CLAVE DE VENTA) */}
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lock size={100} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900">
                {user?.attemptsCount > 0 ? "Lleva tu análisis al siguiente nivel" : "Lo que vas a desbloquear"}
              </h3>
              <p className="text-sm text-slate-500">
                {user?.attemptsCount > 0 ? "Tu perfil PRO incluye:" : "Al completar tu diagnóstico Pro:"}
              </p>
            </div>

            <ul className="space-y-6">
              {[
                { label: "% de probabilidad de pasar", sub: "Algoritmo basado en años de datos" },
                { label: "Mapa crítico de errores", sub: "Identifica qué temas te están hundiendo" },
                { label: "Plan ultra-personalizado", sub: "Qué estudiar minuto a minuto" },
                { label: "Ranking vs otros médicos", sub: "Sabe dónde estás parado realmente" },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                    <Lock size={18} className="group-hover:text-mq-accent transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900/80">{item.label}</p>
                    <p className="text-[10px] text-slate-500 leading-tight">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/dashboard/planes"
              className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-900 transition-all hover:bg-white/20"
            >
              Ver demo de reportes
            </Link>
          </div>

          <div className="rounded-[2rem] border border-mq-accent/20 bg-mq-accent/5 p-6 text-center space-y-4">
             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent">
                <Sparkles size={24} />
             </div>
             <p className="text-sm font-bold text-slate-900 italic">
               {user?.goalUniversity && user.goalUniversity !== "Otra"
                 ? `"La ${user.goalUniversity} te espera, Doc. La diferencia entre un médico y un residente es la estrategia."`
                 : `"La diferencia entre un médico y un residente es la estrategia."`
               }
             </p>
             <p className="text-[10px] uppercase tracking-widest text-slate-500">- Dr. Q</p>
          </div>
        </aside>
      </div>

      {/* 4. BLOQUE DE CONTENIDO BLOQUEADO */}
      <section className="space-y-8 pt-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900">Esto es lo que te falta para competir de verdad</h2>
          <p className="text-slate-500">El plan Pro te da las armas que los demás ya están usando.</p>
        </div>
        
        <div className="grid gap-6 opacity-60 pointer-events-none grayscale-[0.5]">
          <LiveClasses />
          <PastClasses />
        </div>
        
        <div className="flex justify-center pt-4">
          <Link
            href="/dashboard/planes"
            className="group inline-flex items-center gap-2 rounded-full border border-mq-accent bg-mq-accent/10 px-8 py-3 text-sm font-bold text-mq-accent transition-all hover:bg-mq-accent hover:text-mq-accent-foreground"
          >
            DESBLOQUEAR TODO EL ARSENAL <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      
      {/* 8. ELIMINAR RUIDO (Ocultar estados vacíos que no aportan valor) */}
      {/* Act 1 Diagnostic Modal */}
      <Act1DiagnosticModal 
        isOpen={isAct1Open} 
        onClose={() => setIsAct1Open(false)} 
        user={user}
      />
    </motion.div>
  );
}

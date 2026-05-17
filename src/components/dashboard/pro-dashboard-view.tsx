"use client";

import { Zap, Sparkles, Target, ArrowRight, MessageSquare, ShieldCheck, TrendingUp, Trophy } from "lucide-react";
import Link from "next/link";
import { 
  ReferralCard, 
  LiveClasses, 
  PastClasses, 
  DailyPlanCard,
  SummaryCards,
  AccumulatedStats,
  WeakTopicsCard,
  ProgressChart,
  DailyPillCard,
} from "@/components/dashboard";
import { Act2PredictiveDashboard } from "@/components/demo/act2-predictive-dashboard";
import { motion } from "framer-motion";
import { getPlanDisplayName } from "@/lib/plans/config";
import { hasProFeatures } from "@/lib/plans/access";

interface ProDashboardViewProps {
  user: any;
  profile: any;
  referralCode: string | null;
  referralCount: number;
  isLoadingReferrals: boolean;
}

export function ProDashboardView({ 
  user, 
  profile,
  referralCode, 
  referralCount, 
  isLoadingReferrals 
}: ProDashboardViewProps) {
  const planLabel = getPlanDisplayName(profile?.plan);
  const showLiveClasses = hasProFeatures(profile?.plan);

  return (
    <div className="space-y-10 pb-12">
      {/* 1. PREMIUM HEADER */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-mq-border-strong bg-gradient-to-br from-white/[0.05] via-mq-surface to-transparent p-8 sm:p-12 shadow-2xl"
      >
        <div className="relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1.5 backdrop-blur-md">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-mq-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-mq-accent">
                    Plan {planLabel} Activo
                  </span>
                </div>
                
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    IA: Rendimiento Óptimo
                  </span>
                </div>
              </div>

              <div>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                  Bienvenido, <span className="text-mq-accent">Doc.</span>
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-mq-muted sm:text-xl">
                  {profile?.goalUniversity && profile.goalUniversity !== "Otra"
                    ? `Tu camino hacia la residencia en la ${profile.goalUniversity} está siendo optimizado por nuestra IA.`
                    : "Tu camino hacia la residencia médica está siendo optimizado por nuestra IA. Tienes nuevas metas para hoy."
                  }
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Link
                  href="/demo"
                  className="mq-premium-glow group inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-base font-black text-mq-accent-foreground transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  <Zap size={20} fill="currentColor" />
                  <span>ENTRENAR AHORA</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* QUICK STATS CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-1/3">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 rounded-2xl bg-white/[0.03] p-5 backdrop-blur-md border border-white/5 transition-colors hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-mq-muted">Tendencia</p>
                  <p className="text-sm font-bold text-white">+12% vs ayer</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 rounded-2xl bg-white/[0.03] p-5 backdrop-blur-md border border-white/5 transition-colors hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <Trophy size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-mq-muted">Ranking</p>
                  <p className="text-sm font-bold text-white">Top 5% Médicos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative elements */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-mq-accent/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
      </motion.header>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          {/* DAILY MISSION */}
          <DailyPlanCard userId={user.uid} />
          
          {/* IA STATUS REPORT */}
          {profile?.attemptsCount > 0 && (
            <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10 shadow-2xl backdrop-blur-md">
              <div className="mb-8 space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1">
                  <Sparkles size={14} className="text-mq-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">Análisis IA en Tiempo Real</span>
                </div>
                <h2 className="text-3xl font-black text-white">Tu Realidad Competitiva</h2>
                <p className="text-mq-muted text-sm">Este es el estado actual de tu preparación comparado con el estándar de admisión.</p>
              </div>
              
              <Act2PredictiveDashboard 
                  scorePercentage={profile?.lastScore || 0}
                  university={profile?.goalUniversity || "Universidad Nacional"}
                  specialty={profile?.goalSpecialty || "Tu Especialidad"}
                  correctTopics={profile?.topicStats ? Object.fromEntries(Object.entries(profile.topicStats).map(([k, v]: [string, any]) => [k, v.correct])) : {}}
                  wrongTopics={profile?.topicStats ? Object.fromEntries(Object.entries(profile.topicStats).map(([k, v]: [string, any]) => [k, v.wrong])) : {}}
              />
            </section>
          )}

          {/* CORE ANALYTICS */}
          <SummaryCards userId={user.uid} />
          <ProgressChart userId={user.uid} />
          <AccumulatedStats userId={user.uid} />

          {showLiveClasses && (
            <>
              <LiveClasses />
              <PastClasses />
            </>
          )}
        </div>

        <aside className="space-y-8">
          {/* DAILY PILL (SITUATION AWARE) */}
          <DailyPillCard topic="Semiología" />

          {/* WEAK TOPICS / IA ANALYTICS */}
          <WeakTopicsCard userId={user.uid} />

          {/* PRIVATE COMMUNITY CARD */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-[2rem] border border-mq-accent/20 bg-mq-accent/5 p-8 transition-all hover:bg-mq-accent/10 shadow-xl"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mq-accent/20 text-mq-accent shadow-[0_0_20px_rgba(0,209,255,0.2)]">
                <MessageSquare size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-white">Comunidad Privada</h3>
                <p className="text-sm leading-relaxed text-mq-muted">
                  Conéctate con otros aspirantes y resuelve dudas con el Doctor Q en nuestro canal exclusivo.
                </p>
              </div>
              <a 
                href="https://t.me/metodoq_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground transition-all hover:brightness-110 active:scale-95"
              >
                UNIRME A TELEGRAM
              </a>
            </div>
            <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <MessageSquare size={160} />
            </div>
          </motion.div>

          {/* REFERRAL CARD */}
          <ReferralCard 
            referralCode={referralCode} 
            referralCount={referralCount} 
            loading={isLoadingReferrals} 
          />

          {/* MOTIVATIONAL QUOTE */}
          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-center border-dashed">
            <p className="text-lg font-bold text-white italic leading-relaxed">
              "El éxito en la residencia no es cuestión de suerte, es cuestión de datos y disciplina."
            </p>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-mq-accent">- DR. Q</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

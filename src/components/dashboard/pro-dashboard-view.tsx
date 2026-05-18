"use client";

import { useState } from "react";
import { Zap, Sparkles, Target, ArrowRight, MessageSquare, ShieldCheck, TrendingUp, Trophy, Brain } from "lucide-react";
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
import { Act1DiagnosticModal } from "./act1-diagnostic-modal";
import { Act2PredictiveDashboard } from "@/components/demo/act2-predictive-dashboard";
import { motion } from "framer-motion";
import { getPlanDisplayName } from "@/lib/plans/config";
import { hasProFeatures } from "@/lib/plans/access";
import { getUserGreetingName } from "@/lib/plans/subscription-display";
import {
  getEffectiveGoalSpecialty,
  isUccPastoMedicinaInternaProUser,
} from "@/lib/diagnostic/ucc-pasto-track";
import { UccPastoInsightCard } from "./ucc-pasto-insight-card";
import { SubscriptionStatusCard } from "./subscription-status-card";
import { useUserPerformanceStats } from "@/hooks/use-user-performance-stats";
import { computeCumulativePerformance } from "@/lib/scoring/cumulative-score";

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
  const greetingName = getUserGreetingName(profile);
  const showLiveClasses = hasProFeatures(profile?.plan);
  const [isAct1Open, setIsAct1Open] = useState(false);
  const { improvement, percentileLabel, loading: statsLoading } = useUserPerformanceStats(user?.uid);
  const needsDiagnostic = !profile?.attemptsCount || profile.attemptsCount === 0;
  const diagnosticUser = {
    ...user,
    ...profile,
    goalUniversity: profile?.goalUniversity,
    goalSpecialty: profile?.goalSpecialty,
  };
  const isUccMiPro = isUccPastoMedicinaInternaProUser(profile);
  const effectiveSpecialty = getEffectiveGoalSpecialty(
    profile?.goalUniversity,
    profile?.goalSpecialty,
  );
  const dailyPillTopic =
    profile?.weaknesses?.[0] ?? (isUccMiPro ? "Epidemiología" : "Semiología");

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
                
                {needsDiagnostic ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
                    <Brain size={12} className="text-amber-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      IA: Pendiente de calibración
                    </span>
                  </div>
                ) : (
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    IA: Rendimiento Óptimo
                  </span>
                </div>
                )}
              </div>

              <div>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                  Hola, <span className="text-mq-accent">{greetingName}.</span>
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-mq-muted sm:text-xl">
                  {needsDiagnostic
                    ? profile?.goalUniversity && profile.goalUniversity !== "Otra"
                      ? `Tu plan Pro está activo. Completa tu diagnóstico de 10 preguntas para calibrar la IA hacia la ${profile.goalUniversity}.`
                      : "Tu plan Pro está activo. Completa tu diagnóstico de 10 preguntas para activar tu hoja de ruta personalizada."
                    : isUccMiPro
                      ? "Tu plan Pro está calibrado para el examen UCC Pasto · Medicina Interna: 50% clínica, 30% epidemiología y Res. 3280. La IA ya identificó tus brechas."
                      : profile?.goalUniversity && profile.goalUniversity !== "Otra"
                        ? `Tu camino hacia la residencia en la ${profile.goalUniversity} está siendo optimizado por nuestra IA.`
                        : "Tu camino hacia la residencia médica está siendo optimizado por nuestra IA. Tienes nuevas metas para hoy."
                  }
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                {needsDiagnostic ? (
                  <button
                    type="button"
                    onClick={() => setIsAct1Open(true)}
                    className="mq-premium-glow group inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-base font-black text-mq-accent-foreground transition-all hover:-translate-y-1 hover:brightness-110 active:scale-95"
                  >
                    <Target size={20} fill="currentColor" />
                    <span>Empezar diagnóstico</span>
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <Link
                    href="/demo"
                    className="mq-premium-glow group inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-base font-black text-mq-accent-foreground transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
                  >
                    <Zap size={20} fill="currentColor" />
                    <span>ENTRENAR AHORA</span>
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
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
                  <p className="text-sm font-bold text-white">
                    {statsLoading
                      ? "..."
                      : improvement !== null && improvement !== 0
                        ? `${improvement > 0 ? "+" : ""}${improvement}% vs inicio`
                        : needsDiagnostic ? "Pendiente de diagnóstico" : "Sin datos aún"}
                  </p>
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
                  <p className="text-[10px] font-black uppercase tracking-widest text-mq-muted">Nivel</p>
                  <p className="text-sm font-bold text-white">
                    {statsLoading ? "..." : needsDiagnostic ? "Calibra tu IA" : percentileLabel ?? "Entrena hoy"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative elements */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-mq-accent/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
      </motion.header>

      {needsDiagnostic && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 sm:px-6 backdrop-blur-md"
        >
          <Brain className="h-5 w-5 shrink-0 text-amber-400" />
          <p className="text-sm font-medium text-amber-100">
            El diagnóstico inicial calibra tu radar, retos diarios y entrenamiento adaptativo.
            {profile?.goalUniversity && profile.goalUniversity !== "Otra"
              ? ` Ya tenemos registrada tu meta: ${profile.goalUniversity}.`
              : ""}
          </p>
        </motion.div>
      )}

      <SubscriptionStatusCard profile={profile} />

      {isUccMiPro && !needsDiagnostic && <UccPastoInsightCard />}

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
                  scorePercentage={
                    profile?.cumulativeScore ??
                    (profile?.topicStats
                      ? computeCumulativePerformance(profile.topicStats).scorePercentage
                      : profile?.lastScore ?? 0)
                  }
                  lastSessionScore={profile?.lastSessionScore ?? null}
                  totalQuestionsAnswered={
                    profile?.totalQuestionsAnswered ??
                    (profile?.topicStats
                      ? computeCumulativePerformance(profile.topicStats).totalQuestions
                      : 0)
                  }
                  university={profile?.goalUniversity || "Universidad Nacional"}
                  specialty={effectiveSpecialty}
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
          <DailyPillCard topic={dailyPillTopic} isLocked={needsDiagnostic} />

          {/* WEAK TOPICS / IA ANALYTICS */}
          <WeakTopicsCard userId={user.uid} isProUser={showLiveClasses} />

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
            userPlan={profile?.plan}
          />

          {/* MOTIVATIONAL QUOTE */}
          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-center border-dashed">
            <p className="text-lg font-bold text-white italic leading-relaxed">
              {isUccMiPro
                ? '"En la UCC Pasto no gana quien más leyó, sino quien más simuló con el formato correcto."'
                : '"El éxito en la residencia no es cuestión de suerte, es cuestión de datos y disciplina."'}
            </p>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-mq-accent">- DR. Q</p>
          </div>
        </aside>
      </div>

      <Act1DiagnosticModal
        isOpen={isAct1Open}
        onClose={() => setIsAct1Open(false)}
        user={diagnosticUser}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Zap,
  Sparkles,
  Target,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Trophy,
  Brain,
  CheckCircle2,
} from "lucide-react";
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
  StudyBoardPreviewCard,
  NextClassBanner,
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
import { UccDailyMissionCard } from "./ucc-daily-mission-card";
import { UccPercentileTrackerCard } from "./ucc-percentile-tracker-card";
import { UccWeeklySimulacroCard } from "./ucc-weekly-simulacro-card";
import { UccConvocatoriaCard } from "./ucc-convocatoria-card";
import { ConvocatoriaRepasoSummaryCard } from "./convocatoria-repaso-summary-card";
import { UccPhase2SimulatorCard } from "./ucc-phase2-simulator-card";
import { SubscriptionStatusCard } from "./subscription-status-card";
import { StudyStreakSummary } from "./study-streak-summary";
import { useUserPerformanceStats } from "@/hooks/use-user-performance-stats";
import { computeCumulativePerformance } from "@/lib/scoring/cumulative-score";
import { hasPerformanceData } from "@/lib/profile/has-performance-data";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import { buildUccPercentileEstimate } from "@/lib/diagnostic/ucc-percentile";
import { getPlanWeekNumber } from "@/lib/training/ucc-mi-daily-plan";
import { useTopicStatsMigration } from "@/hooks/use-topic-stats-migration";

interface ProDashboardViewProps {
  user: any;
  profile: any;
  referralCode: string | null;
  referralCount: number;
  isLoadingReferrals: boolean;
}

type TopicStat = { correct: number; wrong: number };

function mapTopicStats(
  topicStats: Record<string, TopicStat> | undefined,
  field: keyof TopicStat,
): Record<string, number> {
  if (!topicStats) return {};
  return Object.fromEntries(
    Object.entries(topicStats).map(([topic, stat]) => [topic, stat[field]]),
  );
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
  const hasDiagnosticData = hasPerformanceData(profile);
  const needsDiagnostic = !hasDiagnosticData;
  useTopicStatsMigration({
    userId: user?.uid,
    topicStatsVersion: profile?.topicStatsVersion,
    topicStats: profile?.topicStats,
    enabled: hasDiagnosticData,
  });
  const cumulative = computeCumulativePerformance(profile?.topicStats);
  const displayScore =
    profile?.cumulativeScore ??
    (cumulative.totalQuestions > 0
      ? cumulative.scorePercentage
      : profile?.lastScore ?? 0);
  const lastSessionScore =
    typeof profile?.lastSessionScore === "number" ? profile.lastSessionScore : null;
  const totalQuestions =
    profile?.totalQuestionsAnswered ?? cumulative.totalQuestions;
  const diagnosticUser = {
    ...user,
    ...profile,
    goalUniversity: profile?.goalUniversity,
    goalSpecialty: profile?.goalSpecialty,
  };
  const isUccMiPro = isUccPastoMedicinaInternaProUser(profile);
  const dailyGoal = getDailyGoalForProfile(profile, profile?.planStartedAt);
  const uccPercentileEstimate =
    isUccMiPro && hasDiagnosticData
      ? buildUccPercentileEstimate({
          cumulativeScore: displayScore,
          planWeekNumber: getPlanWeekNumber(profile?.planStartedAt),
        })
      : null;
  const effectiveSpecialty = getEffectiveGoalSpecialty(
    profile?.goalUniversity,
    profile?.goalSpecialty,
  );
  const dailyPillTopic =
    profile?.weaknesses?.[0] ?? (isUccMiPro ? "Epidemiología" : "Semiología");
  const goalUniversityLabel =
    profile?.goalUniversity && profile.goalUniversity !== "Otra"
      ? profile.goalUniversity
      : null;

  const calibratedSubtitle = isUccMiPro
    ? "Ya completaste tu diagnóstico de 10 preguntas. Con esos resultados calibramos Método Q para UCC Pasto · Medicina Interna (50% clínica, 30% epidemiología y Res. 3280). Sigue entrenando para cerrar tus brechas."
    : goalUniversityLabel
      ? `Ya completaste tu diagnóstico inicial. Con tus respuestas calibramos Método Q hacia la ${goalUniversityLabel}: entrenamiento adaptativo, retos diarios y radar de debilidades.`
      : "Ya completaste tu diagnóstico inicial. Con esos resultados calibramos tu entrenamiento y el radar de debilidades. Sigue practicando para subir tu puntaje.";

  return (
    <div className="space-y-10 pb-12">
      {showLiveClasses && user?.uid ? <NextClassBanner userId={user.uid} /> : null}

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
                  <>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-4 py-1.5 backdrop-blur-md">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                        Diagnóstico completado
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1.5 backdrop-blur-md">
                      <ShieldCheck size={12} className="text-mq-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-mq-accent">
                        Método Q calibrado
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                  Hola, <span className="text-mq-accent">{greetingName}.</span>
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-mq-muted sm:text-xl">
                  {needsDiagnostic
                    ? goalUniversityLabel
                      ? `Tu plan Pro está activo. Completa tu diagnóstico de 10 preguntas para calibrar la IA hacia la ${goalUniversityLabel}.`
                      : "Tu plan Pro está activo. Completa tu diagnóstico de 10 preguntas para activar tu hoja de ruta personalizada."
                    : calibratedSubtitle}
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
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href={isUccMiPro ? "/dashboard#ucc-mission" : "/dashboard/entrenar"}
                      className="mq-premium-glow group inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-base font-black text-mq-accent-foreground transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
                    >
                      <Zap size={20} fill="currentColor" />
                      <span>{isUccMiPro ? "CONTINUAR MISIÓN" : "ENTRENAR AHORA"}</span>
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href={
                        goalUniversityLabel && effectiveSpecialty
                          ? `/dashboard/diagnostico?source=act1&university=${encodeURIComponent(goalUniversityLabel)}&specialty=${encodeURIComponent(effectiveSpecialty)}`
                          : "/dashboard/diagnostico?source=act1"
                      }
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 text-sm font-bold text-white/80 transition-all hover:bg-white/10 hover:text-white"
                    >
                      Repetir diagnóstico
                    </Link>
                  </div>
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
                    {statsLoading
                      ? "..."
                      : needsDiagnostic
                        ? "Calibra tu IA"
                        : uccPercentileEstimate
                          ? `P${uccPercentileEstimate.estimatedPercentile}${uccPercentileEstimate.passesP75 ? " ✓" : ""}`
                          : percentileLabel ?? "Entrena hoy"}
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

      <StudyStreakSummary
        userId={user.uid}
        planStartedAt={profile?.planStartedAt}
        streakCount={profile?.streakCount ?? 0}
        dailyTarget={dailyGoal.dailyTarget}
        streakMinimum={dailyGoal.streakMinimum}
        isUccMiTrack={dailyGoal.isUccMiTrack}
      />

      {showLiveClasses && user?.uid ? (
        <>
          <UccConvocatoriaCard userId={user.uid} />
          <ConvocatoriaRepasoSummaryCard userId={user.uid} />
        </>
      ) : null}

      {hasDiagnosticData && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 backdrop-blur-md"
        >
          <div className="flex items-start gap-3 sm:items-center">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400 sm:mt-0" />
            <p className="text-sm leading-relaxed text-emerald-50">
              <span className="font-bold text-white">Tu diagnóstico ya está hecho.</span> Con esa batería
              inicial calibramos Método Q
              {goalUniversityLabel ? ` para ${goalUniversityLabel}` : ""}
              {totalQuestions > 0 ? (
                <>
                  {" "}
                  (promedio actual <span className="font-bold text-emerald-200">{displayScore}%</span> en{" "}
                  {totalQuestions} preguntas)
                </>
              ) : null}
              . Cada entrenamiento nuevo afina tu radar.
            </p>
          </div>
        </motion.div>
      )}

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

      {hasDiagnosticData && (
        <div id="diagnostico-pro" className="space-y-10">
          <section
            id="diagnostico-pro-radar"
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md sm:p-10"
          >
            <div className="mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1">
                <Sparkles size={14} className="text-mq-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
                  Análisis de desempeño IA
                </span>
              </div>
              <h2 className="text-3xl font-black text-white">Tu realidad competitiva</h2>
              <p className="text-sm text-mq-muted">
                Promedio acumulado de diagnóstico, retos diarios y entrenamiento.
                {totalQuestions > 0 ? ` Basado en ${totalQuestions} preguntas.` : ""}
              </p>
            </div>

            <Act2PredictiveDashboard
              scorePercentage={displayScore}
              lastSessionScore={lastSessionScore}
              totalQuestionsAnswered={totalQuestions}
              university={profile?.goalUniversity || "Universidad Nacional"}
              specialty={effectiveSpecialty}
              correctTopics={mapTopicStats(profile?.topicStats, "correct")}
              wrongTopics={mapTopicStats(profile?.topicStats, "wrong")}
            />
          </section>
        </div>
      )}

      <SubscriptionStatusCard profile={profile} />

      {isUccMiPro && hasDiagnosticData && (
        <>
          <UccPercentileTrackerCard
            cumulativeScore={displayScore}
            totalQuestions={totalQuestions}
            planStartedAt={profile?.planStartedAt}
            correctTopics={mapTopicStats(profile?.topicStats, "correct")}
            wrongTopics={mapTopicStats(profile?.topicStats, "wrong")}
          />
          <UccWeeklySimulacroCard
            userId={user.uid}
            planStartedAt={profile?.planStartedAt}
          />
          <UccPhase2SimulatorCard
            userId={user.uid}
            cumulativeScore={displayScore}
            uccPhase2Progress={profile?.uccPhase2Progress}
          />
        </>
      )}

      {isUccMiPro && hasDiagnosticData && (
        <UccPastoInsightCard
          totalQuestions={totalQuestions}
          totalCorrect={cumulative.totalCorrect}
          totalWrong={cumulative.totalWrong}
          correctTopics={mapTopicStats(profile?.topicStats, "correct")}
          wrongTopics={mapTopicStats(profile?.topicStats, "wrong")}
        />
      )}

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          {isUccMiPro && hasDiagnosticData ? (
            <UccDailyMissionCard
              userId={user.uid}
              planStartedAt={profile?.planStartedAt}
              weakTopic={dailyPillTopic}
            />
          ) : (
            <DailyPlanCard userId={user.uid} />
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

          <StudyBoardPreviewCard userId={user.uid} />

          {/* WEAK TOPICS / IA ANALYTICS */}
          <WeakTopicsCard
            userId={user.uid}
            isProUser={showLiveClasses}
            userPlan={profile?.plan}
          />

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

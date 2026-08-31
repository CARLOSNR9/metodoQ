"use client";

import { useState } from "react";
import {
  Zap,
  Sparkles,
  Target,
  ArrowRight,
  MessageSquare,
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
  StudyBoardPreviewCard,
  NextClassBanner,
  DrQRetoBanner,
} from "@/components/dashboard";
import { Act1DiagnosticModal } from "./act1-diagnostic-modal";
import { Act2PredictiveDashboard } from "@/components/demo/act2-predictive-dashboard";
import { motion } from "framer-motion";
import { getPlanDisplayName } from "@/lib/plans/config";
import { hasProFeatures } from "@/lib/plans/access";
import { getDoctorGreetingName } from "@/lib/plans/subscription-display";
import {
  getEffectiveGoalSpecialty,
  isUccPastoMedicinaInternaProUser,
} from "@/lib/diagnostic/ucc-pasto-track";
import { isUmngUniversity } from "@/lib/diagnostic/university-match";
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
  isLoadingReferrals,
}: ProDashboardViewProps) {
  const planLabel = getPlanDisplayName(profile?.plan);
  const greetingName = getDoctorGreetingName(profile);
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
  const trainHref = isUccMiPro
    ? "/dashboard#ucc-mission"
    : "/dashboard/entrenar";

  const briefing = needsDiagnostic
    ? goalUniversityLabel
      ? `Tu plan está activo. El primer paso hacia ${goalUniversityLabel} es un diagnóstico de 10 preguntas para ver qué te puede dejar por fuera.`
      : "Tu plan está activo. El primer paso es un diagnóstico de 10 preguntas: así dejamos de estudiar a ciegas y apuntamos al examen de residencia."
    : goalUniversityLabel
      ? `Hoy cierra tu cupo diario rumbo a ${goalUniversityLabel}${effectiveSpecialty ? ` · ${effectiveSpecialty}` : ""}. La residencia se gana en las brechas, no en el capítulo extra.`
      : "Hoy cierra tu cupo diario. La residencia se gana tapando brechas, no leyendo más capítulos.";

  return (
    <div className="space-y-8 pb-12">
      {showLiveClasses && user?.uid ? (
        <NextClassBanner userId={user.uid} hideEmpty />
      ) : null}

      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-mq-accent">
            Plan {planLabel}
          </span>
          {goalUniversityLabel ? (
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
              {goalUniversityLabel}
              {effectiveSpecialty ? ` · ${effectiveSpecialty}` : ""}
            </span>
          ) : null}
          {needsDiagnostic ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700">
              <Brain size={11} />
              Falta calibrar
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
              <CheckCircle2 size={11} />
              Diagnóstico listo
            </span>
          )}
        </div>

        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Hola, <span className="text-mq-accent">{greetingName}.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {briefing}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          {needsDiagnostic ? (
            <button
              type="button"
              onClick={() => setIsAct1Open(true)}
              className="mq-premium-glow group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-7 text-sm font-black text-mq-accent-foreground transition-all hover:brightness-110 active:scale-95"
            >
              <Target size={18} />
              <span>Empezar diagnóstico</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <>
              <Link
                href={trainHref}
                className="mq-premium-glow group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-7 text-sm font-black text-mq-accent-foreground transition-all hover:brightness-110 active:scale-95"
              >
                <Zap size={18} fill="currentColor" />
                <span>{isUccMiPro ? "Continuar misión" : "Entrenar ahora"}</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm font-medium text-slate-500">
                {statsLoading
                  ? "Cargando tu nivel…"
                  : [
                      totalQuestions > 0 ? `${displayScore}% acumulado` : null,
                      improvement ? `${improvement > 0 ? "+" : ""}${improvement}% vs inicio` : null,
                      uccPercentileEstimate
                        ? `P${uccPercentileEstimate.estimatedPercentile}`
                        : percentileLabel,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
              </p>
            </>
          )}
        </div>
      </motion.header>

      <StudyStreakSummary
        userId={user.uid}
        planStartedAt={profile?.planStartedAt}
        streakCount={profile?.streakCount ?? 0}
        dailyTarget={dailyGoal.dailyTarget}
        streakMinimum={dailyGoal.streakMinimum}
        isUccMiTrack={dailyGoal.isUccMiTrack}
      />

      {showLiveClasses && user?.uid && !isUmngUniversity(profile?.goalUniversity) ? (
        <>
          <UccConvocatoriaCard
            userId={user.uid}
            planStartedAt={profile?.planStartedAt}
            trackName={isUmngUniversity(profile?.goalUniversity) ? "UMNG" : "UCC"}
          />
          <ConvocatoriaRepasoSummaryCard userId={user.uid} planStartedAt={profile?.planStartedAt} />
        </>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {isUccMiPro && hasDiagnosticData ? (
            <UccDailyMissionCard
              userId={user.uid}
              planStartedAt={profile?.planStartedAt}
              weakTopic={dailyPillTopic}
            />
          ) : (
            <DailyPlanCard
              userId={user.uid}
              dailyTarget={dailyGoal.dailyTarget}
              weakTopic={profile?.weaknesses?.[0] ?? null}
              universityLabel={goalUniversityLabel}
              trainHref="/dashboard/entrenar"
              needsDiagnostic={needsDiagnostic}
              onStartDiagnostic={() => setIsAct1Open(true)}
            />
          )}

          <WeakTopicsCard
            userId={user.uid}
            isProUser={showLiveClasses}
            userPlan={profile?.plan}
            limit={2}
          />

          {hasDiagnosticData ? (
            <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-3 py-1">
                  <Sparkles size={14} className="text-mq-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
                    Mapa para tu residencia
                  </span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">
                  {goalUniversityLabel
                    ? `Dónde estás vs. el corte de ${goalUniversityLabel}`
                    : "Dónde estás vs. el corte"}
                </h2>
                <p className="text-sm text-slate-500">
                  Diagnóstico, retos diarios y entrenamiento. Los simulacros no se incluyen.
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
                userId={profile?.uid}
              />
            </section>
          ) : null}

          {isUccMiPro && hasDiagnosticData ? (
            <>
              <UccPercentileTrackerCard
                cumulativeScore={displayScore}
                totalQuestions={totalQuestions}
                planStartedAt={profile?.planStartedAt}
                correctTopics={mapTopicStats(profile?.topicStats, "correct")}
                wrongTopics={mapTopicStats(profile?.topicStats, "wrong")}
              />
              <UccWeeklySimulacroCard userId={user.uid} planStartedAt={profile?.planStartedAt} />
              <UccPhase2SimulatorCard
                userId={user.uid}
                cumulativeScore={displayScore}
                uccPhase2Progress={profile?.uccPhase2Progress}
              />
              <UccPastoInsightCard
                totalQuestions={totalQuestions}
                totalCorrect={cumulative.totalCorrect}
                totalWrong={cumulative.totalWrong}
                correctTopics={mapTopicStats(profile?.topicStats, "correct")}
                wrongTopics={mapTopicStats(profile?.topicStats, "wrong")}
              />
            </>
          ) : null}

          <SummaryCards userId={user.uid} />
          <ProgressChart userId={user.uid} />
          <AccumulatedStats userId={user.uid} />

          {showLiveClasses ? (
            <>
              <LiveClasses />
              <PastClasses />
            </>
          ) : null}
        </div>

        <aside className="space-y-6">
          <DrQRetoBanner profile={profile} />
          <StudyBoardPreviewCard userId={user.uid} />

          <div className="group relative overflow-hidden rounded-[1.75rem] border border-mq-accent/20 bg-mq-accent/5 p-6">
            <div className="relative z-10 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mq-accent/20 text-mq-accent">
                <MessageSquare size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-slate-900">Comunidad de aspirantes</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  Dudas de casos y perlas de examen con el Dr. Q y otros médicos rumbo a residencia.
                </p>
              </div>
              <a
                href="https://t.me/metodoq_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground transition-all hover:brightness-110 active:scale-95"
              >
                Unirme a Telegram
              </a>
            </div>
          </div>

          <ReferralCard
            referralCode={referralCode}
            referralCount={referralCount}
            loading={isLoadingReferrals}
            userPlan={profile?.plan}
          />
        </aside>
      </div>

      <SubscriptionStatusCard profile={profile} />

      <Act1DiagnosticModal
        isOpen={isAct1Open}
        onClose={() => setIsAct1Open(false)}
        user={diagnosticUser}
      />
    </div>
  );
}

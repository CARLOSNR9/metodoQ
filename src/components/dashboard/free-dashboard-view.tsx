"use client";

import { Target, ArrowRight, Sparkles, Clock, Star } from "lucide-react";
import Link from "next/link";
import {
  ReferralCard,
  DailyPlanCard,
  SummaryCards,
  WeakTopicsCard,
  StudyBoardPreviewCard,
} from "@/components/dashboard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Act1DiagnosticModal } from "./act1-diagnostic-modal";
import { Act2PredictiveDashboard } from "@/components/demo/act2-predictive-dashboard";
import { computeCumulativePerformance } from "@/lib/scoring/cumulative-score";
import { useTopicStatsMigration } from "@/hooks/use-topic-stats-migration";
import { hasPerformanceData } from "@/lib/profile/has-performance-data";
import { getDoctorGreetingName } from "@/lib/plans/subscription-display";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import { getEffectiveGoalSpecialty } from "@/lib/diagnostic/ucc-pasto-track";

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
  expiresAt,
}: FreeDashboardViewProps) {
  const [isAct1Open, setIsAct1Open] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const calculateTargetDate = () => {
      if (expiresAt) {
        return new Date(expiresAt);
      }

      const firestoreCreatedAt = user?.createdAt;
      if (firestoreCreatedAt) {
        const createdDate =
          typeof firestoreCreatedAt.toDate === "function"
            ? firestoreCreatedAt.toDate()
            : new Date(firestoreCreatedAt);
        const target = new Date(createdDate.getTime());
        target.setDate(target.getDate() + 7);
        return target;
      }

      const authCreationTime = user?.metadata?.creationTime;
      if (authCreationTime) {
        const createdDate = new Date(authCreationTime);
        const target = new Date(createdDate.getTime());
        target.setDate(target.getDate() + 7);
        return target;
      }

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
          seconds: Math.floor((difference / 1000) % 60),
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
  const totalQuestions = user?.totalQuestionsAnswered ?? cumulative.totalQuestions;
  const hasDiagnostic = hasPerformanceData(user);
  const greetingName = getDoctorGreetingName(user);
  const dailyGoal = getDailyGoalForProfile(user, user?.planStartedAt);
  const goalUniversityLabel =
    user?.goalUniversity && user.goalUniversity !== "Otra" ? user.goalUniversity : null;
  const effectiveSpecialty = getEffectiveGoalSpecialty(
    user?.goalUniversity,
    user?.goalSpecialty,
  );

  const briefing = hasDiagnostic
    ? goalUniversityLabel
      ? `Hoy practica el método rumbo a ${goalUniversityLabel}. Tu prueba sirve para entrenar; el cupo se cierra repitiendo casos, no viendo más teoría.`
      : "Hoy practica el método. Tu prueba sirve para entrenar; el cupo de residencia se cierra repitiendo casos."
    : goalUniversityLabel
      ? `Empieza con un diagnóstico de 10 preguntas. Así sabemos qué te puede dejar por fuera en ${goalUniversityLabel}.`
      : "Empieza con un diagnóstico de 10 preguntas. Así sabemos qué te puede dejar por fuera el día del examen de residencia.";

  return (
    <motion.div className="space-y-8 pb-12">
      <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:flex-row sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
            <Clock className="h-4 w-4 shrink-0 text-mq-accent" />
          </div>
          <p className="text-sm font-semibold text-slate-700">Prueba activa</p>
        </div>

        {mounted ? (
          <p className="font-mono text-sm font-bold tracking-wide text-slate-700">
            {String(timeLeft.days).padStart(2, "0")}d · {String(timeLeft.hours).padStart(2, "0")}h ·{" "}
            {String(timeLeft.minutes).padStart(2, "0")}m
          </p>
        ) : (
          <div className="h-6 w-28 animate-pulse rounded-lg bg-slate-100" />
        )}

        <Link
          href="/dashboard/planes"
          className="hidden text-xs font-bold uppercase tracking-wider text-mq-accent transition-colors hover:text-blue-700 lg:inline"
        >
          Ver planes Pro
        </Link>
      </div>

      <header className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
          <Star className="h-3.5 w-3.5 text-mq-accent" />
          <span className="text-[11px] font-bold text-slate-600">
            {goalUniversityLabel
              ? `Rumbo a ${goalUniversityLabel}`
              : "Rumbo a tu residencia"}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Hola, <span className="text-mq-accent">{greetingName}.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {briefing}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {hasDiagnostic ? (
            <Link
              href="/dashboard/entrenar"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-7 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] transition-all hover:bg-blue-700"
            >
              <span>Entrenar ahora</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setIsAct1Open(true)}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-7 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] transition-all hover:bg-blue-700"
            >
              <Target size={16} />
              <span>Empezar diagnóstico</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          )}
          <Link
            href="/dashboard/planes"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50"
          >
            Ver planes Pro
          </Link>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <DailyPlanCard
            userId={user.uid}
            dailyTarget={dailyGoal.dailyTarget}
            weakTopic={user?.weaknesses?.[0] ?? null}
            universityLabel={goalUniversityLabel}
            trainHref="/dashboard/entrenar"
            needsDiagnostic={!hasDiagnostic}
            onStartDiagnostic={() => setIsAct1Open(true)}
            isTrial
          />

          {hasDiagnostic ? (
            <>
              <WeakTopicsCard userId={user.uid} limit={2} />
              <SummaryCards userId={user.uid} />
              <StudyBoardPreviewCard userId={user.uid} />

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
                </div>
                <Act2PredictiveDashboard
                  scorePercentage={displayScore}
                  lastSessionScore={lastSessionScore}
                  university={user?.goalUniversity || "Universidad Nacional"}
                  specialty={effectiveSpecialty || user?.goalSpecialty || "Tu Especialidad"}
                  totalQuestionsAnswered={totalQuestions}
                  correctTopics={
                    user?.topicStats
                      ? Object.fromEntries(
                          Object.entries(user.topicStats).map(([k, v]: [string, any]) => [
                            k,
                            v.correct,
                          ]),
                        )
                      : {}
                  }
                  wrongTopics={
                    user?.topicStats
                      ? Object.fromEntries(
                          Object.entries(user.topicStats).map(([k, v]: [string, any]) => [
                            k,
                            v.wrong,
                          ]),
                        )
                      : {}
                  }
                  userId={user?.uid}
                />
              </section>
            </>
          ) : null}

          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-black text-slate-900">
              Cuando pases a Pro
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Simulacros del formato de{" "}
              {goalUniversityLabel ?? "tu universidad"}, banco completo y plan diario sin el tope de
              la prueba. Úsalo cuando ya hayas sentido el método.
            </p>
            <Link
              href="/dashboard/planes"
              className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Ver qué incluye Pro
              <ArrowRight size={16} />
            </Link>
          </section>

          <ReferralCard
            referralCode={referralCode}
            referralCount={referralCount}
            loading={isLoadingReferrals}
          />
        </div>

        <aside className="space-y-6">
          <div className="rounded-[1.75rem] border border-mq-accent/20 bg-mq-accent/5 p-6 text-center">
            <p className="text-sm font-bold italic text-slate-900">
              {goalUniversityLabel
                ? `"${goalUniversityLabel} no pregunta si estudiaste. Pregunta si aguantas el formato del examen."`
                : `"La residencia no pregunta si estudiaste. Pregunta si aguantas el formato del examen."`}
            </p>
            <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-mq-accent">
              — Dr. Q
            </p>
          </div>
        </aside>
      </div>

      <Act1DiagnosticModal
        isOpen={isAct1Open}
        onClose={() => setIsAct1Open(false)}
        user={user}
      />
    </motion.div>
  );
}

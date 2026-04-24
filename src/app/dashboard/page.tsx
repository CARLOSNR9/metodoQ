"use client";

import {
  DailyPlanCard,
  DailyRecommendationCard,
  DynamicInsightCard,
  ProgressChart,
  StreakCard,
  SummaryCards,
  TrainingReminderCard,
  WeakTopicsCard,
  ReferralCard,
  LiveClasses,
  PastClasses,
  ActivityReminder,
  MotivationalReminder,
  SubscriptionExpirationAlert,
  AccumulatedStats,
  OnboardingModal,
} from "@/components/dashboard";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserPlan } from "@/hooks/use-user-plan";
import { useReferralStats } from "@/hooks/use-referral-stats";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { plan, loading: isLoadingPlan, expiresAt } = useUserPlan();
  const { referralCode, referralCount, loading: isLoadingReferrals } = useReferralStats(user?.uid);

  const effectivePlan = plan ?? "FREE";
  const planLabel = effectivePlan === "PRO_PLUS" ? "PRO+" : effectivePlan;

  if (isCheckingAuth || !user) {
    return (
      <section className="space-y-4">
        <div className="h-24 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-28 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <OnboardingModal userId={user.uid} />
      <ActivityReminder />
      <MotivationalReminder />
      <SubscriptionExpirationAlert />
      <header>
        <div className="mb-4 rounded-2xl border border-mq-border-strong bg-mq-surface p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-mq-border bg-white/[0.03] px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-mq-accent" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-accent">
                  Plan actual: {isLoadingPlan ? "Cargando..." : planLabel}
                </p>
              </div>
              
              {!isLoadingReferrals && (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-100">
                    Has invitado a {referralCount} personas
                  </p>
                </div>
              )}
            </div>
            {!isLoadingPlan && effectivePlan === "FREE" ? (
              <Link
                href="/dashboard/perfil"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-accent px-4 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110"
              >
                Mejorar a Pro
              </Link>
            ) : null}
            {!isLoadingPlan && expiresAt && effectivePlan === "PRO" ? (
              <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-3 py-1.5 text-xs font-semibold text-yellow-200">
                🚀 Recompensa activa: PRO hasta el {new Date(expiresAt).toLocaleDateString()}
              </div>
            ) : null}
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <p className="rounded-lg border border-indigo-300/30 bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-100 sm:text-sm">
              Te estamos ayudando a mejorar en tiempo real
            </p>
            <p className="rounded-lg border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100 sm:text-sm">
              Tu progreso es personalizado
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-mq-muted sm:text-base">
          Bienvenido a tu panel principal. Desde aqui puedes entrenar, revisar tu
          historial y gestionar tu perfil.
        </p>
          </div>
          <Link
            href="/demo"
            className="inline-flex min-h-13 items-center justify-center rounded-xl bg-mq-accent px-6 text-base font-semibold text-mq-accent-foreground shadow-[0_14px_34px_-16px_rgb(0_209_255/0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            Entrenar ahora
          </Link>
        </div>
      </header>

      <SummaryCards userId={user.uid} />
      <AccumulatedStats userId={user.uid} />
      
      <ReferralCard 
        referralCode={referralCode} 
        referralCount={referralCount} 
        loading={isLoadingReferrals} 
      />

      <LiveClasses />
      <PastClasses />

      <DailyRecommendationCard userId={user.uid} />
      <TrainingReminderCard userId={user.uid} />
      <StreakCard userId={user.uid} />
      <DynamicInsightCard userId={user.uid} />
      <WeakTopicsCard userId={user.uid} />
      <DailyPlanCard userId={user.uid} />
      <ProgressChart userId={user.uid} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mq-border-strong hover:bg-mq-surface-raised">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
            Demo / Entrenar
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Practicar preguntas
          </h2>
          <p className="mt-2 text-sm text-mq-muted">
            Inicia una nueva sesion con foco en tus temas de mayor impacto.
          </p>
        </article>

        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mq-border-strong hover:bg-mq-surface-raised">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
            Historial
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Resultados recientes
          </h2>
          <p className="mt-2 text-sm text-mq-muted">
            Visualiza tus intentos anteriores y detecta areas de mejora en segundos.
          </p>
        </article>

        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mq-border-strong hover:bg-mq-surface-raised sm:col-span-2 xl:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
            Perfil
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Configuracion de cuenta
          </h2>
          <p className="mt-2 text-sm text-mq-muted">
            Actualiza tus datos personales y preferencias de uso.
          </p>
        </article>
      </div>
    </section>
  );
}

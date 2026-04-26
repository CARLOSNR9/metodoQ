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
  FreeDashboardView,
} from "@/components/dashboard";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { useReferralStats } from "@/hooks/use-referral-stats";
import Link from "next/link";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

export default function DashboardPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading: isLoadingProfile } = useUserProfile();
  const { referralCode, referralCount, loading: isLoadingReferrals } = useReferralStats(user?.uid);

  const effectivePlan = profile?.plan ?? "FREE";
  const expiresAt = profile?.planExpiresAt ?? null;
  const planLabel = effectivePlan === "PRO_PLUS" ? "PRO+" : effectivePlan;

  if (isCheckingAuth || isLoadingProfile || !user) {
    return (
      <section className="space-y-6">
        <div className="h-32 animate-pulse rounded-3xl border border-mq-border-strong bg-white/[0.04]" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-40 animate-pulse rounded-3xl border border-mq-border-strong bg-white/[0.04]"
            />
          ))}
        </div>
      </section>
    );
  }

  if (effectivePlan === "FREE") {
    return (
      <>
        <OnboardingModal userId={user.uid} />
        <FreeDashboardView 
          user={profile || user}
          referralCode={referralCode}
          referralCount={referralCount}
          isLoadingReferrals={isLoadingReferrals}
          expiresAt={expiresAt}
        />
      </>
    );
  }

  return (
    <section className="space-y-10 pb-12">
      <OnboardingModal userId={user.uid} />
      <ActivityReminder />
      <MotivationalReminder />
      <SubscriptionExpirationAlert />

      <header className="relative overflow-hidden rounded-[2.5rem] border border-mq-border-strong bg-gradient-to-br from-white/[0.05] to-transparent p-8 sm:p-10">
        <div className="relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1.5 backdrop-blur-md">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-mq-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-mq-accent">
                    {isLoadingProfile ? "Validando..." : `Plan ${planLabel}`}
                  </span>
                </div>
                
                {!isLoadingReferrals && referralCount > 0 && (
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md">
                    <Sparkles size={12} className="text-purple-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      {referralCount} Referidos
                    </span>
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Bienvenido, <span className="text-mq-accent">Doc.</span>
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-mq-muted sm:text-lg">
                  {profile?.goalUniversity && profile.goalUniversity !== "Otra"
                    ? `Tu camino hacia la residencia en la ${profile.goalUniversity} está en marcha. Tienes metas pendientes.`
                    : "Tu camino hacia la residencia médica está en marcha. Tienes metas pendientes para hoy."
                  }
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="mq-premium-glow group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-10 text-sm font-bold text-mq-accent-foreground transition-all hover:-translate-y-1 hover:brightness-110 active:scale-95"
              >
                <Zap size={18} fill="currentColor" />
                <span>Entrenar ahora</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl bg-white/[0.03] p-4 backdrop-blur-sm transition-colors hover:bg-white/[0.06]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mq-accent/20 text-mq-accent">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Estado IA</p>
                <p className="text-sm font-semibold text-white">Rendimiento Óptimo</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white/[0.03] p-4 backdrop-blur-sm transition-colors hover:bg-white/[0.06]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Sugerencia</p>
                <p className="text-sm font-semibold text-white">Repasar Cardiología</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mq-accent/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />
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
    </section>
  );
}

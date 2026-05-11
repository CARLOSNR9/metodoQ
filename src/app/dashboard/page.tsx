"use client";

import {
  OnboardingModal,
  FreeDashboardView,
  ProDashboardView,
} from "@/components/dashboard";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { useReferralStats } from "@/hooks/use-referral-stats";
import { useState, useEffect } from "react";
import { Settings, Shield, User as UserIcon } from "lucide-react";

export default function DashboardPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading: isLoadingProfile } = useUserProfile();
  const { referralCode, referralCount, loading: isLoadingReferrals } = useReferralStats(user?.uid);
  
  // Dev simulation state
  const [simulatedPlan, setSimulatedPlan] = useState<string | null>(null);

  // AUTO-PRO OVERRIDE para pruebas del CEO
  const isAutoPro = user?.email === "pro@gmail.com";
  
  const effectivePlan = isAutoPro ? "PRO" : (simulatedPlan || profile?.plan || "FREE");
  const expiresAt = profile?.planExpiresAt ?? null;

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

  return (
    <>
      <OnboardingModal userId={user.uid} />
      
      {/* Dev Plan Toggle (Only visible in development or for testing) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/80 p-2 backdrop-blur-xl shadow-2xl">
          <button
            onClick={() => setSimulatedPlan("FREE")}
            className={`flex h-10 items-center gap-2 rounded-xl px-4 text-xs font-black transition-all ${
              effectivePlan === "FREE" 
                ? "bg-white/10 text-white" 
                : "text-mq-muted hover:text-white"
            }`}
          >
            <UserIcon size={14} />
            FREE
          </button>
          <button
            onClick={() => setSimulatedPlan("PRO")}
            className={`flex h-10 items-center gap-2 rounded-xl px-4 text-xs font-black transition-all ${
              effectivePlan === "PRO" || effectivePlan === "PRO_PLUS"
                ? "bg-mq-accent text-mq-accent-foreground" 
                : "text-mq-muted hover:text-mq-accent"
            }`}
          >
            <Shield size={14} />
            PRO
          </button>
        </div>
        <p className="text-[10px] font-bold text-center text-mq-muted uppercase tracking-widest bg-black/40 py-1 rounded-full border border-white/5">
          Simulador de Plan
        </p>
      </div>

      {effectivePlan === "FREE" ? (
        <FreeDashboardView 
          user={profile ? { ...user, ...profile } : user}
          referralCode={referralCode}
          referralCount={referralCount}
          isLoadingReferrals={isLoadingReferrals}
          expiresAt={expiresAt}
        />
      ) : (
        <ProDashboardView 
          user={user}
          profile={profile ? { ...profile, plan: effectivePlan } : { plan: effectivePlan }}
          referralCode={referralCode}
          referralCount={referralCount}
          isLoadingReferrals={isLoadingReferrals}
        />
      )}
    </>
  );
}

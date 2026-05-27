"use client";

import {
  OnboardingModal,
  FreeDashboardView,
  ProDashboardView,
  SubscriptionExpirationAlert,
  StreakReminderBanner,
  ProStudyGapBanner,
  UccCoachingReminderBanner,
} from "@/components/dashboard";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { useUccBrowserReminder } from "@/hooks/use-ucc-browser-reminder";
import { isUccPastoMedicinaInternaProUser } from "@/lib/diagnostic/ucc-pasto-track";
import { useReferralStats } from "@/hooks/use-referral-stats";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { hasPaidPlan } from "@/lib/plans/access";
import { getPostLoginPath } from "@/lib/roles";
import { useUserRole } from "@/hooks/use-user-role";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";

export default function DashboardPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading: isLoadingProfile } = useUserProfile();
  const { referralCode, referralCount, loading: isLoadingReferrals } = useReferralStats(user?.uid);
  const { role, email, loading: isLoadingRole } = useUserRole();
  const router = useRouter();

  useEffect(() => {
    if (!user || isLoadingRole) {
      return;
    }
    const staffPath = getPostLoginPath(role, email);
    if (staffPath !== "/dashboard") {
      router.replace(staffPath);
    }
  }, [user, role, email, isLoadingRole, router]);

  const effectivePlan = profile?.plan ?? "FREE";
  const expiresAt = profile?.planExpiresAt ?? null;
  const showPaidDashboard = hasPaidPlan(effectivePlan);
  const dailyGoal = getDailyGoalForProfile(profile, profile?.planStartedAt);
  const isUccMiPro = isUccPastoMedicinaInternaProUser(profile);

  useUccBrowserReminder({
    userId: user?.uid,
    profile,
    planStartedAt: profile?.planStartedAt,
    browserNudgeOptIn: profile?.browserNudgeOptIn === true,
  });

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

      <div className="mb-6 space-y-3">
        <SubscriptionExpirationAlert />
        {showPaidDashboard ? (
          <ProStudyGapBanner
            userId={user.uid}
            planStartedAt={profile?.planStartedAt}
          />
        ) : null}
        <StreakReminderBanner
          streakCount={profile?.streakCount ?? 0}
          lastTrainingDate={profile?.streakLastTrainingDate ?? null}
          dailyTarget={dailyGoal.dailyTarget}
          streakMinimum={dailyGoal.streakMinimum}
        />
        {isUccMiPro ? (
          <UccCoachingReminderBanner
            userId={user.uid}
            profile={profile}
            planStartedAt={profile?.planStartedAt}
          />
        ) : null}
      </div>

      {showPaidDashboard ? (
        <ProDashboardView
          user={user}
          profile={profile ?? { plan: effectivePlan }}
          referralCode={referralCode}
          referralCount={referralCount}
          isLoadingReferrals={isLoadingReferrals}
        />
      ) : (
        <FreeDashboardView
          user={profile ? { ...user, ...profile } : user}
          referralCode={referralCode}
          referralCount={referralCount}
          isLoadingReferrals={isLoadingReferrals}
          expiresAt={expiresAt}
        />
      )}
    </>
  );
}

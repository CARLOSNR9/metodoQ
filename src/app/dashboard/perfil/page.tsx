"use client";

import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import {
  SubscriptionStatusCard,
  StudyHabitCalendar,
  EmailPreferencesCard,
} from "@/components/dashboard";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { getFirebaseDb } from "@/lib/firebase";
import { getPlanDisplayName } from "@/lib/plans/config";
import { getDoctorGreetingName, getUserGreetingName } from "@/lib/plans/subscription-display";
import type { UserGender } from "@/lib/plans/subscription-display";
import { hasPaidPlan } from "@/lib/plans/access";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import { isUccPastoMedicinaInternaProUser } from "@/lib/diagnostic/ucc-pasto-track";

export default function PerfilPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading } = useUserProfile();
  const [gender, setGender] = useState<UserGender | undefined>(undefined);
  const [savingGender, setSavingGender] = useState(false);

  if (isCheckingAuth || loading || !user) {
    return (
      <section className="h-40 animate-pulse rounded-2xl border border-slate-200 bg-white/[0.04]" />
    );
  }

  const currentGender = gender ?? profile?.gender;
  const emailOptIn = profile?.emailOptIn !== false;
  const browserNudgeOptIn = profile?.browserNudgeOptIn === true;
  const isUccMiPro = isUccPastoMedicinaInternaProUser(profile);
  const greetingName = getUserGreetingName(profile);
  const doctorGreetingName = getDoctorGreetingName({ ...profile, gender: currentGender });
  const showSubscription = hasPaidPlan(profile?.plan);
  const dailyGoal = getDailyGoalForProfile(profile, profile?.planStartedAt);

  const handleGenderChange = async (next: UserGender) => {
    if (next === currentGender || savingGender) return;
    setSavingGender(true);
    try {
      await updateDoc(doc(getFirebaseDb(), "users", user.uid), { gender: next });
      setGender(next);
    } catch (error) {
      console.error(error);
    } finally {
      setSavingGender(false);
    }
  };

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Perfil{greetingName !== "Doc" ? ` · ${greetingName}` : ""}
        </h1>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-slate-500">Email</dt>
            <dd className="font-medium text-slate-900">{profile?.email ?? user.email}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Plan actual</dt>
            <dd className="font-medium text-slate-900">{getPlanDisplayName(profile?.plan)}</dd>
          </div>
          {profile?.goalUniversity ? (
            <div>
              <dt className="text-slate-500">Universidad objetivo</dt>
              <dd className="font-medium text-slate-900">{profile.goalUniversity}</dd>
            </div>
          ) : null}
          <div>
            <dt className="text-slate-500">Tratamiento en Pomodoro</dt>
            <dd className="mt-2 space-y-2">
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { value: "male" as const, label: "Dr." },
                    { value: "female" as const, label: "Dra." },
                  ] as const
                ).map((option) => {
                  const isActive = currentGender === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      disabled={savingGender}
                      onClick={() => handleGenderChange(option.value)}
                      className={`rounded-xl border px-4 py-2 text-sm font-semibold transition disabled:opacity-50 ${
                        isActive
                          ? "border-mq-accent/40 bg-mq-accent/15 text-mq-accent"
                          : "border-slate-200 bg-white/[0.03] text-slate-500 hover:border-slate-300 hover:text-slate-900"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-slate-500">
                {doctorGreetingName !== "Doc"
                  ? `Te saludaremos como «${doctorGreetingName}» en los descansos del Pomodoro.`
                  : "Agrega tu nombre para personalizar los mensajes del Pomodoro."}
              </p>
            </dd>
          </div>
        </dl>
      </section>

      {showSubscription ? <SubscriptionStatusCard profile={profile} /> : null}

      {showSubscription ? (
        <StudyHabitCalendar
          userId={user.uid}
          planStartedAt={profile?.planStartedAt}
          streakCount={profile?.streakCount ?? 0}
          dailyTarget={dailyGoal.dailyTarget}
          streakMinimum={dailyGoal.streakMinimum}
        />
      ) : null}

      <EmailPreferencesCard
        userId={user.uid}
        emailOptIn={emailOptIn}
        browserNudgeOptIn={browserNudgeOptIn}
        isUccMiPro={isUccMiPro}
      />
    </div>
  );
}

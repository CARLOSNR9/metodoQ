"use client";

import { EmailPreferencesCard } from "@/components/dashboard/email-preferences-card";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { getPlanDisplayName } from "@/lib/plans/config";

export default function PerfilPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading } = useUserProfile();

  if (isCheckingAuth || loading || !user) {
    return (
      <section className="h-40 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
    );
  }

  const emailOptIn = profile?.emailOptIn !== false;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
        <h1 className="text-2xl font-semibold text-white">Perfil</h1>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-mq-muted">Email</dt>
            <dd className="font-medium text-white">{profile?.email ?? user.email}</dd>
          </div>
          <div>
            <dt className="text-mq-muted">Plan actual</dt>
            <dd className="font-medium text-white">{getPlanDisplayName(profile?.plan)}</dd>
          </div>
          {profile?.goalUniversity ? (
            <div>
              <dt className="text-mq-muted">Universidad objetivo</dt>
              <dd className="font-medium text-white">{profile.goalUniversity}</dd>
            </div>
          ) : null}
        </dl>
      </section>

      <EmailPreferencesCard userId={user.uid} emailOptIn={emailOptIn} />
    </div>
  );
}

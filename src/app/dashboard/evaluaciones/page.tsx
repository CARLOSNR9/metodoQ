"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { DrQRetosView } from "@/components/dashboard/dr-q-retos-view";

export default function DrQEvaluacionesPage() {
  const { isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading: isLoadingProfile } = useUserProfile();

  if (isCheckingAuth || isLoadingProfile) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-yellow-400" />
      </div>
    );
  }

  return <DrQRetosView drQChallenges={profile?.drQChallenges} />;
}

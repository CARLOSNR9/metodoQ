"use client";

import { RefuerzoView } from "@/components/dashboard/refuerzo-view";
import { useAuthGuard } from "@/hooks/use-auth-guard";

export default function RefuerzoPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");

  if (isCheckingAuth || !user) {
    return (
      <section className="h-48 animate-pulse rounded-2xl border border-slate-200 bg-white/[0.04]" />
    );
  }

  return <RefuerzoView userId={user.uid} />;
}

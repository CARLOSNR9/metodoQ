"use client";

import Link from "next/link";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { hasMirAccess } from "@/lib/mir/access";
import { MirDashboardView } from "@/components/dashboard/mir-dashboard-view";

export default function MirDashboardPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile } = useUserProfile();

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
      </div>
    );
  }

  if (!hasMirAccess(profile?.mirAccess)) {
    return (
      <div className="mx-auto max-w-xl rounded-[2rem] border border-slate-200 bg-white/[0.03] p-8 text-center">
        <h1 className="text-2xl font-black text-slate-900">Simulacro MIR</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Este es un módulo aparte de tu plan actual, con banco de preguntas y
          simulacros dedicados a la convocatoria MIR.
        </p>
        <Link
          href="/mir"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground"
        >
          Ver módulo MIR
        </Link>
      </div>
    );
  }

  if (!user) return null;

  return <MirDashboardView userId={user.uid} />;
}

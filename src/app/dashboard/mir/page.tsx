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
      <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-[#0A1F44] p-8 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
          Módulo internacional
        </p>
        <h1 className="mt-2 text-2xl font-black text-white">Simulacro MIR</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Este es un módulo aparte de tu plan actual, con banco de preguntas y
          simulacros dedicados a la convocatoria MIR.
        </p>
        <Link
          href="/mir"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44]"
        >
          Ver módulo MIR
        </Link>
      </div>
    );
  }

  if (!user) return null;

  return <MirDashboardView userId={user.uid} />;
}

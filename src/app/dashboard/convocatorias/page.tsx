"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { hasProFeatures } from "@/lib/plans/access";
import Link from "next/link";
import { UccConvocatoriasView } from "@/components/dashboard/ucc-convocatorias-view";
import { isUmngUniversity } from "@/lib/diagnostic/university-match";

export default function ConvocatoriasPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile } = useUserProfile();
  const isProUser = hasProFeatures(profile?.plan);
  const trackName = isUmngUniversity(profile?.goalUniversity) ? "UMNG" : "UCC";

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
      </div>
    );
  }

  if (!isProUser) {
    return (
      <div className="mx-auto max-w-xl rounded-[2rem] border border-slate-200 bg-white/[0.03] p-8 text-center">
        <h1 className="text-2xl font-black text-slate-900">Convocatorias {trackName}</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Los exámenes oficiales quincenales están disponibles en el plan PRO. Tu
          entrenamiento libre y simulacros semanales siguen en Entrenar y Simulacro.
        </p>
        <Link
          href="/dashboard/planes"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground"
        >
          Ver plan PRO
        </Link>
      </div>
    );
  }

  if (!user) return null;

  return <UccConvocatoriasView userId={user.uid} planStartedAt={profile?.planStartedAt} trackName={trackName} />;
}

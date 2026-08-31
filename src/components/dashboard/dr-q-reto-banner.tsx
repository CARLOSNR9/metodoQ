"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { hasPerformanceData } from "@/lib/profile/has-performance-data";
import { getEffectiveGoalSpecialty } from "@/lib/diagnostic/ucc-pasto-track";

type DrQRetoBannerProps = {
  profile: {
    attemptsCount?: number;
    topicStats?: Record<string, { correct: number; wrong: number }>;
    cumulativeScore?: number | null;
    lastScore?: number | null;
    totalQuestionsAnswered?: number;
    goalUniversity?: string;
    goalSpecialty?: string;
  } | null;
};

function getRetoHref(profile: DrQRetoBannerProps["profile"]): string {
  const university =
    profile?.goalUniversity && profile.goalUniversity !== "Otra"
      ? profile.goalUniversity
      : null;
  const specialty = getEffectiveGoalSpecialty(
    profile?.goalUniversity,
    profile?.goalSpecialty,
  );

  if (university && specialty) {
    return `/dashboard/diagnostico?source=act1&university=${encodeURIComponent(university)}&specialty=${encodeURIComponent(specialty)}`;
  }

  return "/dashboard/diagnostico?source=act1";
}

export function DrQRetoBanner({ profile }: DrQRetoBannerProps) {
  if (hasPerformanceData(profile)) {
    return null;
  }

  return (
    <section className="relative overflow-hidden rounded-2xl bg-[#0B1527] px-4 py-4 text-white shadow-lg sm:px-5 sm:py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-start gap-3 sm:items-center">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071018] text-mq-premium-gold">
            <Sparkles size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-mq-premium-gold">
              Nuevo módulo premium
            </p>
            <h2 className="mt-0.5 text-lg font-black leading-tight sm:text-xl">
              El Reto del Dr. Q
            </h2>
            <p className="mt-0.5 text-sm text-white/85">
              Primera Evaluación interactiva con tips y perlas de examen.
            </p>
          </div>
        </div>
        <Link
          href={getRetoHref(profile)}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-slate-950 transition hover:brightness-110"
        >
          Iniciar Reto
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

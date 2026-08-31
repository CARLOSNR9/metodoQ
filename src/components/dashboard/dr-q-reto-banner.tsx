"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { hasPerformanceData } from "@/lib/profile/has-performance-data";

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

export function DrQRetoBanner({ profile }: DrQRetoBannerProps) {
  if (!hasPerformanceData(profile)) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-sm">
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-400">
        Reto del Dr. Q
      </p>
      <h2 className="mt-1 text-lg font-black leading-tight">Primera evaluación</h2>
      <p className="mt-1 text-sm leading-relaxed text-white/80">
        Casos con perlas de examen. Úsalo cuando ya hayas cerrado el cupo diario.
      </p>
      <Link
        href="/dashboard/evaluaciones/primera"
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 text-sm font-black text-slate-950 transition hover:bg-yellow-300"
      >
        Abrir evaluación
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}

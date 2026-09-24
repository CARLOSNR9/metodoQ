"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Flame, Globe2, XCircle } from "lucide-react";
import { MIR_EXAM_EDITIONS, getMirAttempt, type MirExamAttempt } from "@/lib/training/mir-convocatoria";
import { getMirStreakInfo, type MirStreakInfo } from "@/lib/training/mir-streak";

function formatAttemptDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("es-CO", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

/**
 * Historial del módulo MIR: intentos reales del simulacro (no mezcla con
 * el historial de exámenes colombianos, que no aplica a este ecosistema).
 * Tema oscuro/dorado, consistente con /dashboard/mir.
 */
export function MirHistorialView({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [streak, setStreak] = useState<MirStreakInfo | null>(null);
  const [attempts, setAttempts] = useState<Array<{ editionLabel: string; attempt: MirExamAttempt }>>([]);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      getMirStreakInfo(userId),
      Promise.all(
        MIR_EXAM_EDITIONS.map((edition) =>
          getMirAttempt(userId, edition.code).then((attempt) =>
            attempt ? { editionLabel: edition.label, attempt } : null,
          ),
        ),
      ),
    ]).then(([streakInfo, editionAttempts]) => {
      if (cancelled) return;
      setStreak(streakInfo);
      setAttempts(editionAttempts.filter((item): item is { editionLabel: string; attempt: MirExamAttempt } => item !== null));
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
              <Globe2 className="h-3.5 w-3.5" />
              Módulo internacional
            </p>
            <h1 className="mt-1 text-2xl font-black text-white">Historial MIR</h1>
            <p className="mt-2 text-sm text-slate-300">
              Tus intentos del simulacro cronometrado MIR.
            </p>
          </div>
          <Link
            href="/dashboard/mir/simulacro"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
          >
            Practicar simulacro
          </Link>
        </div>
      </section>

      {!isLoading && streak ? (
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Flame className="h-5 w-5 text-mq-premium-gold" />
            <div>
              <p className="text-2xl font-black text-white">
                {streak.count}
                <span className="ml-1 text-sm font-bold text-slate-400">
                  {streak.count === 1 ? "día" : "días"} de racha
                </span>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {isLoading ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {[1, 2].map((item) => (
            <div key={item} className="h-28 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />
          ))}
        </div>
      ) : attempts.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-8 text-center">
          <p className="text-sm font-semibold text-slate-300">
            Aún no has hecho tu primer simulacro MIR.
          </p>
          <Link
            href="/dashboard/mir/simulacro"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
          >
            Comenzar ahora
          </Link>
        </section>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {attempts.map(({ editionLabel, attempt }) => (
            <article
              key={editionLabel}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mq-premium-gold">
                {editionLabel}
              </p>
              <p className="mt-2 text-3xl font-black text-white">
                {attempt.scorePercentage}
                <span className="text-base font-bold text-slate-400">%</span>
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  {attempt.correctAnswers} correctas
                </span>
                <span className="inline-flex items-center gap-1.5 text-rose-400">
                  <XCircle className="h-4 w-4" />
                  {attempt.wrongAnswers} falladas
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-500">{formatAttemptDate(attempt.completedAt)}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

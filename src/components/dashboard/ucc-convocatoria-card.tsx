"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Lock,
  Trophy,
} from "lucide-react";
import {
  buildConvocatoriaEditionStatus,
  buildConvocatoriaExamHref,
  getConvocatoriaAttempt,
  getFeaturedConvocatoriaEdition,
  type UccConvocatoriaEditionStatus,
} from "@/lib/training/ucc-convocatoria";

type UccConvocatoriaCardProps = {
  userId: string;
};

export function UccConvocatoriaCard({ userId }: UccConvocatoriaCardProps) {
  const [status, setStatus] = useState<UccConvocatoriaEditionStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const featured = getFeaturedConvocatoriaEdition();
        if (!featured) {
          if (mounted) setStatus(null);
          return;
        }

        const attempt = await getConvocatoriaAttempt(userId, featured.code);
        if (!mounted) return;
        setStatus(buildConvocatoriaEditionStatus({ edition: featured, attempt }));
      } catch (error) {
        console.error("No se pudo cargar la convocatoria UCC.", error);
        if (mounted) setStatus(null);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId]);

  if (isLoading) {
    return (
      <div
        id="ucc-convocatoria"
        className="h-44 animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.03]"
      />
    );
  }

  if (!status) return null;

  const { edition, attempt, canStart, phase } = status;
  const completed = Boolean(attempt);
  const examHref = buildConvocatoriaExamHref(edition.code);

  return (
    <motion.section
      id="ucc-convocatoria"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-8 ${
        completed
          ? "border-emerald-500/30 bg-emerald-500/5"
          : canStart
            ? "border-mq-accent/35 bg-gradient-to-br from-mq-accent/10 via-white/[0.02] to-transparent"
            : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mq-accent/10 blur-[80px]" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/25 bg-mq-accent/10 px-3 py-1">
              <ClipboardCheck size={14} className="text-mq-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
                Examen oficial · PRO
              </span>
            </div>
            {completed ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                <CheckCircle2 size={12} />
                Completada
              </span>
            ) : canStart ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-200">
                Abierta · 1 intento
              </span>
            ) : null}
          </div>

          <div>
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Convocatoria UCC · {edition.label}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-mq-muted sm:text-base">
              Simulacro tipo admisión: banco exclusivo de esta edición, cronómetro de 3 horas
              y resultado al final sin feedback durante el examen.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-mq-muted sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock size={14} className="text-mq-accent" />
              {edition.questionCount} preg · {edition.minutes} min
            </span>
            <span className="inline-flex items-center gap-2">
              <Lock size={14} className="text-mq-accent" />
              Un solo intento
            </span>
            <span>{status.opensLabel}</span>
          </div>

          {attempt ? (
            <div className="inline-flex items-center gap-2 rounded-xl border border-mq-accent/20 bg-mq-accent/5 px-4 py-2 text-sm text-white">
              <Trophy size={16} className="text-mq-accent" />
              Tu resultado: {attempt.correctAnswers}/{edition.questionCount} aciertos (
              {attempt.scorePercentage}%)
            </div>
          ) : null}
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:min-w-[220px]">
          {canStart ? (
            <Link
              href={examHref}
              className="mq-premium-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground transition hover:brightness-110"
            >
              Iniciar convocatoria
              <ArrowRight size={16} />
            </Link>
          ) : completed ? (
            <Link
              href="/dashboard/historial"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-bold text-white transition hover:bg-white/[0.08]"
            >
              Ver en historial
            </Link>
          ) : phase === "upcoming" ? (
            <div className="inline-flex min-h-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/5 px-6 text-sm font-semibold text-amber-100">
              Próximamente
            </div>
          ) : (
            <div className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-mq-muted">
              Ventana cerrada
            </div>
          )}

          <Link
            href="/dashboard/convocatorias"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-xs font-bold uppercase tracking-wider text-mq-muted transition hover:bg-white/[0.06] hover:text-white"
          >
            Ver calendario
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

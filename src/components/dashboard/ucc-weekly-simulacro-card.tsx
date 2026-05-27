"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock, Timer } from "lucide-react";
import { getUserDemoResults } from "@/lib/results";
import {
  buildUccSimulacroHref,
  buildWeeklySimulacroStatus,
  type UccWeeklySimulacroStatus,
} from "@/lib/training/ucc-weekly-simulacro";

type UccWeeklySimulacroCardProps = {
  userId: string;
  planStartedAt?: string | null;
};

export function UccWeeklySimulacroCard({ userId, planStartedAt }: UccWeeklySimulacroCardProps) {
  const [status, setStatus] = useState<UccWeeklySimulacroStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const results = await getUserDemoResults(userId);
        if (!mounted) return;
        setStatus(
          buildWeeklySimulacroStatus({
            results,
            planStartedAt: planStartedAt ?? null,
          }),
        );
      } catch (error) {
        console.error("No se pudo cargar el simulacro semanal.", error);
        if (mounted) setStatus(null);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId, planStartedAt]);

  if (isLoading) {
    return (
      <div className="h-40 animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.03]" />
    );
  }

  if (!status) return null;

  const completed =
    status.simulacrosRequired > 0 &&
    status.simulacrosCompleted >= status.simulacrosRequired;
  const href = buildUccSimulacroHref(status.config);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-[2rem] border p-6 sm:p-8 ${
        completed
          ? "border-emerald-500/30 bg-emerald-500/5"
          : status.isOverdue
            ? "border-rose-500/30 bg-rose-500/5"
            : status.isDue
              ? "border-mq-accent/30 bg-mq-accent/5"
              : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/25 bg-mq-accent/10 px-3 py-1">
            <Timer size={14} className="text-mq-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
              Simulacro programado · Sem. {status.planWeek}
            </span>
          </div>
          <h2 className="text-xl font-black text-white">{status.config.label}</h2>
          <p className="text-sm text-mq-muted">
            {status.config.questionCount} preguntas · {status.config.minutes} min · distribución
            Res. 108 (20/50/20/10)
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">Esta semana</p>
          <p className="text-2xl font-black text-white">
            {status.simulacrosCompleted}/{status.simulacrosRequired || "—"}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-mq-muted">
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} className="text-mq-accent" />
          {status.nextDueLabel ?? "Según fase del plan"}
        </span>
        <span>
          Fase:{" "}
          {status.planWeek >= 23
            ? "Ultra-repaso (2/sem)"
            : status.planWeek >= 19
              ? "Simulacros semanales"
              : "Consolidación mensual"}
        </span>
      </div>

      {completed ? (
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <p className="text-sm text-emerald-100">
            Simulacro de la semana completado. El lunes revisa tu banco de errores.
          </p>
        </div>
      ) : status.simulacrosRequired === 0 ? (
        <p className="mt-5 text-sm text-mq-muted">
          Esta semana no hay simulacro obligatorio (fase de consolidación mensual). Puedes
          practicar uno opcional.
        </p>
      ) : status.isOverdue ? (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-rose-500/25 bg-rose-500/10 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
          <p className="text-sm text-rose-100">
            Simulacro pendiente de esta semana. Entrena resistencia y gestión de tiempo bajo
            condiciones reales.
          </p>
        </div>
      ) : null}

      <div className="mt-5">
        <Link
          href={href}
          className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-black transition sm:w-auto sm:px-8 ${
            completed
              ? "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              : "bg-mq-accent text-mq-accent-foreground hover:brightness-110"
          }`}
        >
          {completed ? "Repetir simulacro" : "Iniciar simulacro UCC"}
        </Link>
      </div>
    </motion.section>
  );
}

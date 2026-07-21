"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import {
  buildConvocatoriaEditionStatus,
  buildConvocatoriaExamHref,
  getUserConvocatoriaSchedule,
  resolveConvocatoriaAttempt,
  UCC_CONVOCATORIA_EDITIONS,
  type UccConvocatoriaEditionStatus,
} from "@/lib/training/ucc-convocatoria";
import { ConvocatoriaRepasoPanel } from "@/components/dashboard/convocatoria-repaso-panel";

type UccConvocatoriasViewProps = {
  userId: string;
  planStartedAt?: string | null;
};

export function UccConvocatoriasView({ userId, planStartedAt }: UccConvocatoriasViewProps) {
  const [statuses, setStatuses] = useState<UccConvocatoriaEditionStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const schedule = getUserConvocatoriaSchedule(planStartedAt);
        const nextStatuses = await Promise.all(
          schedule.map(async (edition) => {
            const attempt = await resolveConvocatoriaAttempt(userId, edition.code);
            return buildConvocatoriaEditionStatus({ edition, attempt, schedule });
          }),
        );
        if (mounted) setStatuses(nextStatuses);
      } catch (error) {
        console.error("No se pudieron cargar las convocatorias.", error);
        if (mounted) setStatuses([]);
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
      <div className="h-56 animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.03]" />
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-mq-accent">
          Exámenes oficiales
        </p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Convocatorias UCC
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-mq-muted sm:text-base">
          Simulacros quincenales exclusivos para plan PRO: 100 preguntas, 3 horas,
          un solo intento por edición y retroalimentación al finalizar.
        </p>
      </header>

      <div className="grid gap-5">
        {statuses.map((status) => (
          <EditionCard key={status.edition.code} status={status} />
        ))}
      </div>
    </div>
  );
}

function EditionCard({ status }: { status: UccConvocatoriaEditionStatus }) {
  const { edition, phase, attempt, canStart } = status;
  const href = buildConvocatoriaExamHref(edition.code);
  const completed = Boolean(attempt);

  const phaseLabel = completed
    ? "Completada"
    : phase === "upcoming"
      ? "Próximamente"
      : phase === "open"
        ? "Abierta"
        : "Cerrada";

  const phaseClass = completed
    ? "border-mq-accent/30 bg-mq-accent/10 text-mq-accent"
    : phase === "open"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
      : phase === "upcoming"
        ? "border-amber-500/30 bg-amber-500/10 text-amber-200"
        : "border-white/10 bg-white/[0.03] text-mq-muted";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div
        className={`flex flex-col gap-6 ${
          completed ? "" : "lg:flex-row lg:items-center lg:justify-between"
        }`}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${phaseClass}`}
            >
              {phaseLabel}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-mq-muted">
              {edition.code}
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">{edition.label}</h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-mq-muted">
              <Calendar size={14} />
              {status.opensLabel}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-mq-muted">
            <span className="inline-flex items-center gap-2">
              <Clock size={14} className="text-mq-accent" />
              {edition.questionCount} preg · {edition.minutes} min
            </span>
            <span className="inline-flex items-center gap-2">
              <Lock size={14} className="text-mq-accent" />
              1 intento por edición
            </span>
          </div>

          {attempt ? (
            <ConvocatoriaRepasoPanel attempt={attempt} questionCount={edition.questionCount} />
          ) : null}
        </div>

        {!completed ? (
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:min-w-[220px]">
            {canStart ? (
              <Link
                href={href}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground transition hover:scale-[1.02]"
              >
                Iniciar examen
              </Link>
            ) : phase === "upcoming" ? (
              <div className="inline-flex min-h-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/5 px-6 text-sm font-semibold text-amber-100">
                Disponible el {status.opensLabel}
              </div>
            ) : (
              <div className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-mq-muted">
                <CheckCircle2 size={16} />
                Ventana cerrada
              </div>
            )}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

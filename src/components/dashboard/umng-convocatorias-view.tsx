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
  UMNG_CONVOCATORIA_EDITIONS,
  type UmngConvocatoriaEditionStatus,
} from "@/lib/training/umng-convocatoria";
import { ConvocatoriaRepasoPanel } from "@/components/dashboard/convocatoria-repaso-panel";

type UmngConvocatoriasViewProps = {
  userId: string;
  planStartedAt?: string | null;
  trackName?: string;
};

export function UmngConvocatoriasView({ userId, planStartedAt, trackName = "UMNG" }: UmngConvocatoriasViewProps) {
  const [statuses, setStatuses] = useState<UmngConvocatoriaEditionStatus[]>([]);
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
      <div className="h-56 animate-pulse rounded-[2rem] border border-slate-200 bg-white/[0.03]" />
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-mq-accent">
          Exámenes oficiales
        </p>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Convocatorias {trackName}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Simulacros quincenales exclusivos para plan PRO: 100 preguntas, 2 horas,
          un solo intento por edición y retroalimentación al finalizar.
        </p>
      </header>

      <div className="grid gap-5">
        {statuses.map((status) => (
          <EditionCard key={status.edition.code} status={status} trackName={trackName} />
        ))}
      </div>
    </div>
  );
}

function EditionCard({ status, trackName = "UMNG" }: { status: UmngConvocatoriaEditionStatus; trackName?: string }) {
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
    ? "border-blue-200 bg-blue-50 text-blue-700"
    : phase === "open"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : phase === "upcoming"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-slate-200 bg-slate-50 text-slate-500";

  const displayCode = trackName !== "UMNG" ? edition.code.replace("UMNG", trackName) : edition.code;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-slate-200 bg-white/[0.03] p-6 sm:p-8"
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
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              {displayCode}
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900">{edition.label.replace("Edición", "Simulacro")}</h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <Calendar size={14} />
              {status.opensLabel}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
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
                Iniciar simulacro
              </Link>
            ) : phase === "upcoming" ? (
              <div className="inline-flex min-h-12 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-6 text-sm font-semibold text-amber-700">
                Disponible el {status.opensLabel}
              </div>
            ) : (
              <div className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-6 text-sm font-semibold text-slate-500">
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

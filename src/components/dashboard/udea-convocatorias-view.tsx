"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Lock, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import {
  buildConvocatoriaEditionStatus,
  buildConvocatoriaExamHref,
  getUserConvocatoriaSchedule,
  resolveConvocatoriaAttempt,
  type UdeaConvocatoriaEditionStatus,
  UDEA_REAL_EXAM_EDITION_CODE,
} from "@/lib/training/udea-convocatoria";
import { ConvocatoriaRepasoPanel } from "@/components/dashboard/convocatoria-repaso-panel";
import { UDEA_EXAM_INFO } from "@/lib/diagnostic/udea-track";

type UdeaConvocatoriasViewProps = {
  userId: string;
};

export function UdeaConvocatoriasView({ userId }: UdeaConvocatoriasViewProps) {
  const [statuses, setStatuses] = useState<UdeaConvocatoriaEditionStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const schedule = getUserConvocatoriaSchedule();
        const nextStatuses = await Promise.all(
          schedule.map(async (edition) => {
            const attempt = await resolveConvocatoriaAttempt(userId, edition.code);
            return buildConvocatoriaEditionStatus({ edition, attempt, schedule });
          }),
        );
        if (mounted) setStatuses(nextStatuses);
      } catch (error) {
        console.error("No se pudieron cargar los simulacros UdeA.", error);
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
    return <div className="h-56 animate-pulse rounded-[2rem] border border-slate-200 bg-white" />;
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">
          Universidad de Antioquia · Posgrados Clínicos
        </p>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Simulacros UdeA
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
          El examen de la UdeA es el mismo para todas las especialidades clínicas: medicina general
          completa. Arrancas con un <strong>examen real de admisión de la UdeA</strong> (70
          preguntas, en su orden original) y luego cinco simulacros de 70 preguntas con la misma
          mezcla de áreas. Cada uno: {UDEA_EXAM_INFO.realExamQuestions} preguntas en 105 minutos
          (1,5 min por pregunta), un solo intento y retroalimentación al final. Se habilitan de
          forma progresiva hasta el examen de {UDEA_EXAM_INFO.estimatedExamLabel}.
        </p>
        <p className="max-w-2xl rounded-xl bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-500">
          El examen real no trae hoja de respuestas: la clave y las explicaciones las elaboró el
          equipo académico de Método Q. Si una respuesta te genera dudas, repórtala desde la
          pregunta.
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

function EditionCard({ status }: { status: UdeaConvocatoriaEditionStatus }) {
  const { edition, phase, attempt, canStart } = status;
  const completed = Boolean(attempt);
  const isFinal = edition.code === "UDEA-ED6";
  const isReal = edition.code === UDEA_REAL_EXAM_EDITION_CODE;

  const phaseLabel = completed ? "Completado" : phase === "open" ? "Disponible" : "Próximamente";
  const phaseClass = completed
    ? "border-blue-200 bg-blue-50 text-blue-700"
    : phase === "open"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-amber-200 bg-amber-50 text-amber-700";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-[2rem] border bg-white p-6 shadow-sm sm:p-8 ${
        isFinal || isReal ? "border-emerald-200" : "border-slate-200"
      }`}
    >
      <div className={`flex flex-col gap-6 ${completed ? "" : "lg:flex-row lg:items-center lg:justify-between"}`}>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${phaseClass}`}
            >
              {phaseLabel}
            </span>
            {isFinal || isReal ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                <Sparkles size={11} />
                {isReal ? "Examen oficial UdeA" : "Ensayo general"}
              </span>
            ) : null}
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900">{edition.label}</h2>
            <p className="mt-1 text-sm font-medium text-slate-600">{edition.subtitle}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <Calendar size={14} />
              {phase === "open" ? "Disponible desde el " : "Se habilita el "}
              {status.opensLabel}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Clock size={14} className="text-mq-accent" />
              {edition.questionCount} preg · {edition.minutes} min
            </span>
            <span className="inline-flex items-center gap-2">
              <Lock size={14} className="text-mq-accent" />1 intento
            </span>
          </div>

          {attempt ? (
            <ConvocatoriaRepasoPanel
              attempt={attempt}
              questionCount={edition.questionCount}
              track="UDEA"
            />
          ) : null}
        </div>

        {!completed ? (
          <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[220px] lg:flex-col">
            {canStart ? (
              <Link
                href={buildConvocatoriaExamHref(edition.code)}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground transition hover:scale-[1.02]"
              >
                Iniciar simulacro
              </Link>
            ) : (
              <div className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-6 text-center text-sm font-semibold text-amber-700">
                <CheckCircle2 size={16} />
                Muy pronto
              </div>
            )}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, ExternalLink, Info } from "lucide-react";
import {
  MIR_MEDICINE_PLACES,
  MIR_NON_RESIDENT_QUOTA,
  MIR_ROADMAP_SOURCE,
  MIR_ROADMAP_STEPS,
  type MirRoadmapStep,
} from "@/lib/mir/spain-roadmap";
import {
  getMirRoadmapProgress,
  setMirRoadmapStepDone,
  type MirRoadmapProgress,
} from "@/lib/training/mir-roadmap-progress";

const numberFormat = new Intl.NumberFormat("es-ES", { useGrouping: "always" });

function StepRow({
  step,
  index,
  done,
  isNext,
  onToggle,
}: {
  step: MirRoadmapStep;
  index: number;
  done: boolean;
  isNext: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={`rounded-xl border px-4 py-3 ${
        isNext ? "border-mq-premium-gold/40 bg-mq-premium-gold/[0.06]" : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          type="button"
          role="checkbox"
          aria-checked={done}
          aria-label={`${done ? "Desmarcar" : "Marcar como hecho"}: ${step.title}`}
          onClick={onToggle}
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-black transition ${
            done
              ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-300"
              : "border-white/20 text-slate-300 hover:border-mq-premium-gold/60 hover:text-white"
          }`}
        >
          {done ? <Check className="h-4 w-4" /> : index + 1}
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className={`text-sm font-bold ${done ? "text-slate-400 line-through decoration-slate-500" : "text-white"}`}>
              {step.title}
            </p>
            {isNext ? (
              <span className="rounded-full bg-mq-premium-gold px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-[#0A1F44]">
                Tu siguiente paso
              </span>
            ) : null}
          </div>
          <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-mq-premium-gold/80">{step.when}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-300">{step.summary}</p>
          <details className="group mt-2">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1 text-xs font-bold text-slate-400 hover:text-white [&::-webkit-details-marker]:hidden">
              <ChevronDown className="h-3.5 w-3.5 transition group-open:rotate-180" aria-hidden />
              <span className="group-open:hidden">Ver detalles</span>
              <span className="hidden group-open:inline">Ocultar detalles</span>
            </summary>
            <ul className="mt-2 space-y-1.5 pl-1">
              {step.details.map((detail) => (
                <li key={detail} className="flex gap-2 text-xs leading-relaxed text-slate-300">
                  <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                  {detail}
                </li>
              ))}
            </ul>
            {step.links?.length ? (
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {step.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-mq-premium-gold hover:brightness-110"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                ))}
              </div>
            ) : null}
          </details>
        </div>
      </div>
    </li>
  );
}

/**
 * «Tu camino a España»: los pasos de un médico formado en Colombia hasta su
 * plaza MIR, que el alumno marca a medida que los completa, más el aviso del
 * cupo para quien no tiene autorización de residencia en España.
 */
export function MirSpainRoadmap({ userId }: { userId: string }) {
  const [progress, setProgress] = useState<MirRoadmapProgress | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getMirRoadmapProgress(userId).then((result) => {
      if (!cancelled) setProgress(result);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  async function toggleStep(stepId: string) {
    if (!progress) return;
    const done = !progress[stepId];
    const previous = progress;
    const next = { ...progress };
    if (done) next[stepId] = new Date().toISOString();
    else delete next[stepId];
    setProgress(next);
    setError(false);
    try {
      await setMirRoadmapStepDone(userId, stepId, done);
    } catch (saveError) {
      console.error("No se pudo guardar «Tu camino a España».", saveError);
      setProgress(previous);
      setError(true);
    }
  }

  if (!progress) {
    return <div className="h-72 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }

  const doneCount = MIR_ROADMAP_STEPS.filter((step) => progress[step.id]).length;
  const nextStepId = MIR_ROADMAP_STEPS.find((step) => !progress[step.id])?.id ?? null;
  const quotaPercent = Math.round((MIR_NON_RESIDENT_QUOTA / MIR_MEDICINE_PLACES) * 100);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-black text-white">Del título colombiano a tu plaza en España</h3>
          <p className="mt-1 text-xs text-slate-400">
            Marca cada paso cuando lo tengas: así sabrás siempre qué te toca.
          </p>
        </div>
        <div className="w-full sm:w-44">
          <p className="text-right text-xs font-bold text-slate-300">
            {doneCount} de {MIR_ROADMAP_STEPS.length} pasos
          </p>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
            <div
              className="h-full rounded-full bg-mq-premium-gold transition-all"
              style={{ width: `${(doneCount / MIR_ROADMAP_STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3 rounded-xl border border-sky-400/25 bg-sky-400/[0.06] p-4">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
        <p className="text-xs leading-relaxed text-slate-300">
          <span className="font-bold text-white">El cupo para no residentes:</span> en esta convocatoria, como
          máximo {numberFormat.format(MIR_NON_RESIDENT_QUOTA)} de las {numberFormat.format(MIR_MEDICINE_PLACES)}{" "}
          plazas de Medicina ({quotaPercent} %) pueden ser para personas sin autorización de residencia en España.
          Cuanto mejor sea tu número de orden, antes eliges y más lejos quedas de que se agote. No te afecta si
          tienes nacionalidad de la UE o residencia en España.
        </p>
      </div>

      <ol className="mt-4 space-y-2">
        {MIR_ROADMAP_STEPS.map((step, index) => (
          <StepRow
            key={step.id}
            step={step}
            index={index}
            done={Boolean(progress[step.id])}
            isNext={step.id === nextStepId}
            onToggle={() => void toggleStep(step.id)}
          />
        ))}
      </ol>

      {error ? (
        <p className="mt-3 text-xs font-semibold text-rose-300">No se pudo guardar el cambio. Inténtalo de nuevo.</p>
      ) : null}

      <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
        Información orientativa según la{" "}
        <a
          href={MIR_ROADMAP_SOURCE.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-400 underline underline-offset-2 hover:text-white"
        >
          {MIR_ROADMAP_SOURCE.label}
        </a>
        . Las fechas «aprox.» se basan en la convocatoria anterior: confírmalas siempre en el BOE y en la web del
        Ministerio de Sanidad.
      </p>
    </div>
  );
}

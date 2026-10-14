"use client";

import Link from "next/link";
import { ArrowRight, Scale, Target } from "lucide-react";
import type { MirMasteryLevel, MirSpecialtyMastery } from "@/lib/training/mir-mastery";
import {
  buildMirExamWeights,
  buildMirStudyPriorities,
  getMirWeightYears,
  type MirSpecialtyWeight,
} from "@/lib/training/mir-exam-weight";

const WEIGHTS = buildMirExamWeights();
const YEARS = getMirWeightYears();
const PRIORITY_COUNT = 5;

/** Color del acierto según el nivel del mapa de dominio. */
const ACCURACY_TONE: Record<MirMasteryLevel, string> = {
  weak: "text-rose-300",
  progress: "text-amber-200",
  mastered: "text-emerald-300",
  not_started: "text-slate-500",
};

const formatQuestions = (value: number) =>
  value.toLocaleString("es-ES", { minimumFractionDigits: value < 10 ? 1 : 0, maximumFractionDigits: value < 10 ? 1 : 0 });

/** Preguntas por examen de una especialidad, para las fichas del mapa. */
export function getMirSpecialtyWeight(key: string): MirSpecialtyWeight | undefined {
  return WEIGHTS.find((weight) => weight.key === key);
}

export function formatMirPerExam(weight: MirSpecialtyWeight): string {
  return `~${formatQuestions(weight.perExam)} preg./examen`;
}

/**
 * «Peso en el examen»: cuántas preguntas cae de media de cada especialidad y
 * dónde puede ganar más el alumno (peso × lo que aún falla).
 */
export function MirExamWeightSection({ mastery }: { mastery: MirSpecialtyMastery[] }) {
  const byKey = new Map(mastery.map((item) => [item.key, item]));
  const priorities = buildMirStudyPriorities(WEIGHTS, mastery)
    .filter((item) => item.expectedMisses !== null && item.expectedMisses >= 0.5)
    .slice(0, PRIORITY_COUNT);
  const maxPerExam = WEIGHTS[0]?.perExam ?? 1;

  return (
    <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-8" aria-labelledby="peso-examen">
      <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
        <Scale className="h-3.5 w-3.5" aria-hidden />
        Peso en el examen
      </p>
      <h2 id="peso-examen" className="mt-2 text-xl font-black text-white">
        No todas las especialidades valen lo mismo
      </h2>
      <p className="mt-1 text-xs leading-relaxed text-slate-400">
        Preguntas que cae de media de cada especialidad en un examen de 200, según los MIR oficiales{" "}
        {YEARS.length > 1 ? `${YEARS[0]}–${YEARS[YEARS.length - 1]}` : YEARS[0]} del banco.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,20rem)_1fr]">
        <div className="rounded-2xl border border-mq-premium-gold/25 bg-mq-premium-gold/[0.05] p-4">
          <p className="flex items-center gap-2 text-sm font-bold text-white">
            <Target className="h-4 w-4 text-mq-premium-gold" aria-hidden />
            Dónde más puedes ganar
          </p>
          {priorities.length === 0 ? (
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Responde al menos unas preguntas de cada especialidad y aquí verás cuáles te hacen perder más
              preguntas en el examen.
            </p>
          ) : (
            <>
              <p className="mt-1 text-[11px] text-slate-400">Preguntas que hoy fallarías en un examen, por especialidad.</p>
              <ol className="mt-3 space-y-2">
                {priorities.map((item, index) => (
                  <li key={item.key}>
                    <Link
                      href={`/dashboard/mir/practica?especialidad=${encodeURIComponent(item.key)}`}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#0A1F44]/40 px-3 py-2 transition hover:border-mq-premium-gold/50"
                    >
                      <span className="w-4 shrink-0 text-xs font-black text-mq-premium-gold">{index + 1}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold text-white">{item.label}</span>
                        <span className="block text-[11px] text-slate-400">
                          {formatMirPerExam(item)} · {item.accuracy} % de acierto
                        </span>
                      </span>
                      <span className="shrink-0 text-right">
                        <span className="block text-sm font-black text-rose-300">
                          −{formatQuestions(item.expectedMisses!)}
                        </span>
                        <span className="block text-[10px] text-slate-500">preg.</span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-500 group-hover:text-mq-premium-gold" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>

        <ol className="min-w-0 space-y-1.5" aria-label="Preguntas por examen de cada especialidad">
          {WEIGHTS.map((weight) => {
            const item = byKey.get(weight.key);
            return (
              <li key={weight.key} className="grid grid-cols-[minmax(0,6.5rem)_1fr_auto] items-center gap-2 text-xs sm:grid-cols-[minmax(0,9.5rem)_1fr_auto] sm:gap-3">
                <span className="truncate font-semibold text-slate-200" title={weight.label}>
                  {weight.label}
                </span>
                <span className="flex min-w-0 items-center gap-2">
                  <span className="h-3 min-w-0 flex-1 overflow-hidden rounded-r bg-white/[0.04]">
                    <span
                      className="block h-full rounded-r bg-mq-premium-gold"
                      style={{ width: `${(weight.perExam / maxPerExam) * 100}%` }}
                    />
                  </span>
                  <span className="w-7 shrink-0 text-right font-black tabular-nums text-white sm:w-9">
                    {formatQuestions(weight.perExam)}
                  </span>
                </span>
                <span
                  className={`w-10 shrink-0 text-right font-bold tabular-nums sm:w-12 ${ACCURACY_TONE[item?.level ?? "not_started"]}`}
                  title="Tu acierto en esta especialidad"
                >
                  {item?.accuracy !== null && item?.accuracy !== undefined ? `${item.accuracy} %` : "—"}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
      <p className="mt-4 text-[11px] text-slate-500">
        Barra: preguntas por examen. A la derecha, tu acierto (en rojo, a reforzar; en verde, dominada).
      </p>
    </section>
  );
}

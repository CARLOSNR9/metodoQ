"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Lightbulb, Minus } from "lucide-react";
import {
  getMirAttemptLog,
  getMirEdition,
  type MirAttemptLogEntry,
} from "@/lib/training/mir-convocatoria";
import {
  MIR_EXAM_QUESTIONS,
  formatMirNet,
  getMirGuessingAdvice,
  getMirScoreSummary,
  type MirScoreInput,
} from "@/lib/training/mir-scoring";

/** Nota estimada de un simulacro con la puntuación real del MIR. */
export function MirScoreBreakdown(input: MirScoreInput) {
  const summary = getMirScoreSummary(input);
  const accuracy = input.total > 0 ? Math.round((input.correct / input.total) * 100) : 0;

  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
        Nota MIR estimada
      </p>
      <p className="mt-3 text-6xl font-black text-white">
        {formatMirNet(summary.net)}
        <span className="text-2xl font-bold text-slate-400"> netas</span>
      </p>
      <p className="mt-2 text-sm text-slate-300">
        de {summary.total} preguntas · {summary.points} puntos (+3 por acierto, −1 por error) ·{" "}
        {accuracy}% de aciertos
      </p>
      {summary.total !== MIR_EXAM_QUESTIONS ? (
        <p className="mt-1 text-sm font-semibold text-white">
          Equivale a {formatMirNet(summary.projectedNet)} netas en un examen de {MIR_EXAM_QUESTIONS} preguntas
        </p>
      ) : null}

      <div className="mx-auto mt-6 max-w-xl rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left">
        <p className="text-sm text-slate-200">
          {summary.wrong > 0
            ? `Tus ${summary.wrong} errores te restaron ${formatMirNet(summary.netLostToErrors)} netas.`
            : "No fallaste ninguna de las que respondiste: ningún error te restó netas."}
        </p>
        <p className="mt-2 flex gap-2 text-xs leading-relaxed text-slate-400">
          <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mq-premium-gold" />
          {getMirGuessingAdvice(summary)}
        </p>
      </div>
    </div>
  );
}

function formatAttemptDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}

function Delta({ value }: { value: number }) {
  if (Math.abs(value) < 0.05) {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-bold text-slate-400">
        <Minus className="h-3.5 w-3.5" aria-hidden />
        igual
      </span>
    );
  }
  const isUp = value > 0;
  const Icon = isUp ? ArrowUpRight : ArrowDownRight;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-bold ${isUp ? "text-emerald-400" : "text-rose-400"}`}>
      <Icon className="h-3.5 w-3.5" aria-hidden />
      {isUp ? "+" : "−"}
      {formatMirNet(Math.abs(value))}
      <span className="sr-only">{isUp ? " netas más" : " netas menos"}</span>
    </span>
  );
}

/**
 * Evolución de la nota estimada entre simulacros, proyectada a 200
 * preguntas para comparar ediciones de distinto tamaño.
 */
export function MirScoreTrend({ userId }: { userId: string }) {
  const [log, setLog] = useState<MirAttemptLogEntry[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getMirAttemptLog(userId).then((entries) => {
      if (!cancelled) setLog(entries);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (!log) {
    return <div className="h-32 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }
  return <MirScoreTrendContent log={log} />;
}

export function MirScoreTrendContent({ log }: { log: MirAttemptLogEntry[] }) {
  const rows = log.map((entry) => ({ entry, summary: getMirScoreSummary(entry) }));

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <h2 className="text-sm font-black uppercase tracking-wide text-white">Evolución de tu nota MIR</h2>
      <p className="mt-1 text-xs text-slate-400">
        Netas de cada simulacro proyectadas a {MIR_EXAM_QUESTIONS} preguntas (cada error resta un tercio de acierto).
      </p>

      {rows.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-white/15 p-5 text-center text-sm text-slate-400">
          Cuando entregues tu primer simulacro verás aquí tu nota estimada y cómo evoluciona.
        </p>
      ) : (
        <ol className="mt-4 space-y-2">
          {[...rows].reverse().map(({ entry, summary }, index, reversed) => {
            const previous = reversed[index + 1]?.summary;
            const percent = Math.max(0, Math.min(100, (summary.projectedNet / MIR_EXAM_QUESTIONS) * 100));
            return (
              <li
                key={`${entry.editionCode}-${entry.completedAt}`}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">
                      {getMirEdition(entry.editionCode)?.label ?? "Simulacro"}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {formatAttemptDate(entry.completedAt)} · {entry.correct} aciertos · {entry.wrong} errores
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-black text-white">
                      {formatMirNet(summary.projectedNet)}
                      <span className="text-xs font-bold text-slate-400"> / {MIR_EXAM_QUESTIONS}</span>
                    </p>
                    {previous ? <Delta value={summary.projectedNet - previous.projectedNet} /> : null}
                  </div>
                </div>
                <div
                  className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
                  role="meter"
                  aria-label="Netas proyectadas sobre 200"
                  aria-valuemin={0}
                  aria-valuemax={MIR_EXAM_QUESTIONS}
                  aria-valuenow={Math.round(summary.projectedNet)}
                >
                  <div className="h-full rounded-full bg-mq-premium-gold" style={{ width: `${percent}%` }} />
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}

"use client";

import { CalendarCheck, Check, Target, X } from "lucide-react";
import { formatMirNet, getMirNet } from "@/lib/training/mir-scoring";
import type { MirWeekSummary } from "@/lib/training/mir-weekly";

const WEEKDAY_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

function getComparison({ total, previousWeekTotal }: MirWeekSummary): string {
  if (previousWeekTotal === 0) {
    return total === 0 ? "" : "Sigue así: todo lo que respondes suma.";
  }
  const diff = total - previousWeekTotal;
  if (diff > 0) return `${diff} más que la semana pasada (${previousWeekTotal}).`;
  if (diff === 0) return `Igual que la semana pasada (${previousWeekTotal}).`;
  return `Te faltan ${-diff} para igualar la semana pasada (${previousWeekTotal}).`;
}

/**
 * Seguimiento semanal del panel MIR: preguntas respondidas esta semana, con
 * una barra por día y la meta diaria del plan de hoy. Sin actividad en la
 * semana muestra un estado vacío en lugar de un gráfico a cero. El botón de
 * acción vive en «Tu plan de hoy».
 */
export function MirWeeklyCard({ week, dailyTarget }: { week: MirWeekSummary | null; dailyTarget?: number }) {
  if (!week) {
    return <div className="h-32 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }
  return <MirWeeklyCardContent week={week} dailyTarget={dailyTarget} />;
}

export function MirWeeklyCardContent({ week, dailyTarget }: { week: MirWeekSummary; dailyTarget?: number }) {
  const daysOnTarget = dailyTarget ? week.days.filter((day) => day.count >= dailyTarget).length : 0;
  const comparison = getComparison(week);

  if (week.total === 0) {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
          <CalendarCheck className="h-5 w-5 text-mq-premium-gold" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-white">Aún no has respondido preguntas esta semana</p>
          <p className="mt-0.5 text-xs text-slate-400">
            {week.previousWeekTotal > 0
              ? `La semana pasada respondiste ${week.previousWeekTotal}. Tu plan de hoy es el mejor punto de partida.`
              : "Cada pregunta que respondas aparecerá aquí, día a día."}
          </p>
        </div>
      </div>
    );
  }

  // La meta cuenta para la escala para que la línea siempre quepa en el gráfico.
  const maxCount = Math.max(1, dailyTarget ?? 0, ...week.days.map((day) => day.count));
  const BAR_AREA_PX = 64;

  return (
    <div className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-end">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Preguntas esta semana</p>
        <p className="mt-1 text-3xl font-black text-mq-premium-gold">{week.total}</p>
        <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold">
          <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/15 px-2.5 py-1 text-emerald-300">
            <Check className="h-3.5 w-3.5" />
            {week.correct} {week.correct === 1 ? "buena" : "buenas"}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg bg-rose-500/15 px-2.5 py-1 text-rose-300">
            <X className="h-3.5 w-3.5" />
            {week.incorrect} {week.incorrect === 1 ? "mala" : "malas"}
          </span>
          <span
            className="inline-flex items-center gap-1 rounded-lg bg-mq-premium-gold/15 px-2.5 py-1 text-mq-premium-gold"
            title="Netas MIR: aciertos − errores / 3"
          >
            <Target className="h-3.5 w-3.5" />
            {formatMirNet(getMirNet(week.correct, week.incorrect))} netas
          </span>
        </div>
        {comparison ? <p className="mt-2 text-xs text-slate-400">{comparison}</p> : null}
        {dailyTarget ? (
          <p className="mt-1 text-xs text-slate-400">
            Meta de {dailyTarget}/día cumplida {daysOnTarget} {daysOnTarget === 1 ? "día" : "días"}.
          </p>
        ) : null}
      </div>

      <div className="relative">
        {dailyTarget ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 border-t border-dashed border-mq-premium-gold/40"
            style={{ bottom: `${20 + (dailyTarget / maxCount) * BAR_AREA_PX}px` }}
          />
        ) : null}
        <ol className="flex items-end gap-2" aria-label="Preguntas por día esta semana">
          {week.days.map((day, index) => {
            const onTarget = dailyTarget !== undefined && day.count >= dailyTarget;
            return (
              <li key={day.dateKey} className="flex flex-1 flex-col items-center justify-end gap-1">
                <span className={`text-[10px] font-bold ${day.count > 0 ? "text-white" : "text-slate-600"}`}>
                  {day.isFuture || day.count === 0 ? "" : day.count}
                </span>
                <div
                  className={`w-full rounded-md ${
                    day.count === 0
                      ? day.isFuture
                        ? "bg-white/[0.03]"
                        : "bg-white/[0.08]"
                      : onTarget
                        ? "bg-mq-premium-gold"
                        : "bg-mq-premium-gold/50"
                  }`}
                  style={{ height: `${Math.max(4, (day.count / maxCount) * BAR_AREA_PX)}px` }}
                  title={`${day.count} ${day.count === 1 ? "pregunta" : "preguntas"}`}
                />
                <span className={`h-4 text-[10px] font-bold ${day.isToday ? "text-mq-premium-gold" : "text-slate-500"}`}>
                  {WEEKDAY_LABELS[index]}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

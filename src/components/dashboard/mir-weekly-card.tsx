"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMirWeekSummary, type MirWeekSummary } from "@/lib/training/mir-weekly";

const WEEKDAY_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

function getComparison({ total, previousWeekTotal }: MirWeekSummary): string {
  if (previousWeekTotal === 0) {
    return total === 0 ? "Empieza cuando quieras: cualquier especialidad suma." : "Sigue así: todo lo que respondes suma.";
  }
  const diff = total - previousWeekTotal;
  if (diff > 0) return `${diff} más que la semana pasada (${previousWeekTotal}).`;
  if (diff === 0) return `Igual que la semana pasada (${previousWeekTotal}).`;
  return `La semana pasada respondiste ${previousWeekTotal}.`;
}

/**
 * Seguimiento semanal del panel MIR: preguntas respondidas esta semana, con
 * una barra por día. Sin tareas diarias: el estudiante practica lo que
 * quiera y aquí ve cuánto lleva.
 */
export function MirWeeklyCard({ userId }: { userId: string }) {
  const [week, setWeek] = useState<MirWeekSummary | null>(null);

  useEffect(() => {
    let cancelled = false;
    getMirWeekSummary(userId).then((summary) => {
      if (!cancelled) setWeek(summary);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (!week) {
    return <div className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }
  return <MirWeeklyCardContent week={week} />;
}

export function MirWeeklyCardContent({ week }: { week: MirWeekSummary }) {
  const maxCount = Math.max(1, ...week.days.map((day) => day.count));

  return (
    <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-[1fr_1.4fr] sm:items-end">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Preguntas esta semana</p>
        <p className="mt-1 text-4xl font-black text-mq-premium-gold">{week.total}</p>
        <p className="mt-1 text-xs text-slate-400">{getComparison(week)}</p>
        <Link
          href="/dashboard/mir/practica"
          className="mt-4 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
        >
          Practicar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <ol className="flex h-28 items-end gap-2" aria-label="Preguntas por día esta semana">
        {week.days.map((day, index) => (
          <li key={day.dateKey} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
            <span className={`text-[10px] font-bold ${day.count > 0 ? "text-white" : "text-slate-600"}`}>
              {day.isFuture ? "" : day.count}
            </span>
            <div
              className={`w-full rounded-md ${
                day.count > 0 ? "bg-mq-premium-gold" : day.isFuture ? "bg-white/[0.03]" : "bg-white/[0.08]"
              }`}
              style={{ height: `${Math.max(6, (day.count / maxCount) * 72)}px` }}
              title={`${day.count} ${day.count === 1 ? "pregunta" : "preguntas"}`}
            />
            <span className={`text-[10px] font-bold ${day.isToday ? "text-mq-premium-gold" : "text-slate-500"}`}>
              {WEEKDAY_LABELS[index]}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

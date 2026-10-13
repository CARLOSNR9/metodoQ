"use client";

import { useEffect, useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  buildMirProgressSeries,
  getMirDailyAnswers,
  MIR_PROGRESS_RANGE,
  type MirProgressGranularity,
  type MirProgressPoint,
} from "@/lib/training/mir-progress";
import type { MirAnsweredByDay } from "@/lib/training/mir-weekly";

const GOLD = "#facc15";
const AXIS_TICK = { fill: "rgb(148 163 184)", fontSize: 11 };

const GRANULARITY_OPTIONS: Array<{ value: MirProgressGranularity; label: string }> = [
  { value: "day", label: `${MIR_PROGRESS_RANGE.day} días` },
  { value: "week", label: `${MIR_PROGRESS_RANGE.week} semanas` },
];

function ProgressTooltip({
  active,
  payload,
  granularity,
}: {
  active?: boolean;
  payload?: Array<{ payload: MirProgressPoint }>;
  granularity: MirProgressGranularity;
}) {
  const point = payload?.[0]?.payload;
  if (!active || !point || point.accuracy === null) return null;
  return (
    <div className="rounded-xl border border-white/15 bg-[#0A1F44]/95 px-3 py-2 text-xs shadow-lg">
      <p className="font-bold text-slate-300">
        {granularity === "week" ? `Semana del ${point.label}` : point.label}
      </p>
      <p className="mt-1 text-base font-black text-white">{point.accuracy}% de aciertos</p>
      <p className="mt-0.5 text-slate-300">
        <span className="font-bold text-emerald-300">{point.correct} buenas</span> ·{" "}
        <span className="font-bold text-rose-300">{point.incorrect} malas</span>
      </p>
    </div>
  );
}

/**
 * Curva del % de aciertos MIR por día o por semana, con las buenas y malas
 * de cada punto en el tooltip.
 */
export function MirProgressChart({ userId }: { userId: string }) {
  const [answers, setAnswers] = useState<{ byDay: MirAnsweredByDay; correctByDay: MirAnsweredByDay } | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;
    getMirDailyAnswers(userId).then((result) => {
      if (!cancelled) setAnswers(result);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (!answers) {
    return <div className="h-72 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }
  return <MirProgressChartContent byDay={answers.byDay} correctByDay={answers.correctByDay} />;
}

export function MirProgressChartContent({
  byDay,
  correctByDay,
}: {
  byDay: MirAnsweredByDay;
  correctByDay: MirAnsweredByDay;
}) {
  const [granularity, setGranularity] = useState<MirProgressGranularity>("day");
  const series = useMemo(
    () => buildMirProgressSeries(byDay, correctByDay, granularity),
    [byDay, correctByDay, granularity],
  );

  const pointsWithData = series.points.filter((point) => point.accuracy !== null).length;
  const periodLabel =
    granularity === "day" ? `los últimos ${MIR_PROGRESS_RANGE.day} días` : `las últimas ${MIR_PROGRESS_RANGE.week} semanas`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">% de aciertos</p>
          <p className="mt-1 text-4xl font-black text-white">
            {series.accuracy === null ? "—" : `${series.accuracy}%`}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            En {periodLabel}:{" "}
            <span className="font-bold text-emerald-300">{series.correct} buenas</span> ·{" "}
            <span className="font-bold text-rose-300">{series.incorrect} malas</span>
          </p>
        </div>
        <div className="flex gap-1 rounded-full border border-white/15 p-1" role="group" aria-label="Periodo">
          {GRANULARITY_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setGranularity(option.value)}
              aria-pressed={granularity === option.value}
              className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                granularity === option.value ? "bg-mq-premium-gold text-[#0A1F44]" : "text-slate-300 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {pointsWithData === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-white/15 p-6 text-center text-sm text-slate-400">
          Responde preguntas en práctica, repaso o simulacro y aquí verás cómo evoluciona tu % de aciertos.
        </p>
      ) : (
        <div className="mt-6 h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series.points} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid stroke="rgb(255 255 255 / 0.08)" vertical={false} />
              <XAxis
                dataKey="label"
                tick={AXIS_TICK}
                axisLine={{ stroke: "rgb(255 255 255 / 0.15)" }}
                tickLine={false}
                minTickGap={24}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tickFormatter={(value) => `${value}%`}
                tick={AXIS_TICK}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ stroke: "rgb(255 255 255 / 0.25)", strokeWidth: 1 }}
                content={<ProgressTooltip granularity={granularity} />}
              />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke={GOLD}
                strokeWidth={2}
                connectNulls
                dot={{ r: 4, fill: GOLD, stroke: "#0A1F44", strokeWidth: 2 }}
                activeDot={{ r: 6, fill: GOLD, stroke: "#0A1F44", strokeWidth: 2 }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

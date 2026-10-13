"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  buildMirProgressSeries,
  getMirDailyAnswers,
  MIR_PROGRESS_RANGE,
  type MirProgressGranularity,
  type MirProgressPoint,
} from "@/lib/training/mir-progress";
import { formatMirNet } from "@/lib/training/mir-scoring";
import type { MirAnsweredByDay } from "@/lib/training/mir-weekly";

const GOLD = "#facc15";
const NET_BLUE = "#0284c7";
const NET_DASH = "6 4";
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
      <p className="text-slate-300">
        Netas: <span className="font-bold text-white">{formatMirNet(point.net)}</span> ({point.netPercentage}%)
      </p>
      <p className="mt-0.5 text-slate-300">
        <span className="font-bold text-emerald-300">{point.correct} buenas</span> ·{" "}
        <span className="font-bold text-rose-300">{point.incorrect} malas</span>
      </p>
    </div>
  );
}

function LegendItem({ color, dashed, label }: { color: string; dashed?: boolean; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="20" height="8" aria-hidden="true">
        <line x1="0" y1="4" x2="20" y2="4" stroke={color} strokeWidth="2" strokeDasharray={dashed ? NET_DASH : undefined} />
      </svg>
      {label}
    </span>
  );
}

/**
 * Curva del % de aciertos y de las netas MIR (por cada 100 respondidas) por
 * día o por semana, con las netas y las buenas y malas de cada punto en el
 * tooltip.
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
  // Las netas bajan de 0 cuando hay más de un error por cada 3 aciertos.
  const minNet = Math.min(0, ...series.points.map((point) => point.netPercentage ?? 0));
  const yMin = minNet < 0 ? -50 : 0;
  const yTicks = yMin < 0 ? [-50, -25, 0, 25, 50, 75, 100] : [0, 25, 50, 75, 100];
  const periodLabel =
    granularity === "day" ? `los últimos ${MIR_PROGRESS_RANGE.day} días` : `las últimas ${MIR_PROGRESS_RANGE.week} semanas`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex gap-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">% de aciertos</p>
              <p className="mt-1 text-4xl font-black text-white">
                {series.accuracy === null ? "—" : `${series.accuracy}%`}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Netas</p>
              <p className="mt-1 text-4xl font-black text-white">
                {series.netPercentage === null ? "—" : formatMirNet(series.net)}
              </p>
            </div>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            En {periodLabel}:{" "}
            <span className="font-bold text-emerald-300">{series.correct} buenas</span> ·{" "}
            <span className="font-bold text-rose-300">{series.incorrect} malas</span>
            {series.netPercentage === null ? null : ` · ${series.netPercentage} netas por cada 100`}
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
        <>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
            <LegendItem color={GOLD} label="% de aciertos" />
            <LegendItem color={NET_BLUE} dashed label="Netas por cada 100 respondidas" />
          </div>
          <div className="mt-3 h-56 w-full">
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
                  domain={[yMin, 100]}
                  ticks={yTicks}
                  tickFormatter={(value) => `${value}%`}
                  tick={AXIS_TICK}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ stroke: "rgb(255 255 255 / 0.25)", strokeWidth: 1 }}
                  content={<ProgressTooltip granularity={granularity} />}
                />
                {yMin < 0 ? <ReferenceLine y={0} stroke="rgb(255 255 255 / 0.3)" /> : null}
                <Line
                  type="monotone"
                  dataKey="netPercentage"
                  name="Netas por cada 100"
                  stroke={NET_BLUE}
                  strokeWidth={2}
                  strokeDasharray={NET_DASH}
                  connectNulls
                  dot={{ r: 4, fill: NET_BLUE, stroke: "#0A1F44", strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: NET_BLUE, stroke: "#0A1F44", strokeWidth: 2 }}
                  isAnimationActive={false}
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
        </>
      )}
    </div>
  );
}

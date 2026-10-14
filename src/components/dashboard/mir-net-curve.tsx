"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Minus, TrendingUp } from "lucide-react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  getMirAttemptLog,
  getMirEdition,
  type MirAttemptLogEntry,
} from "@/lib/training/mir-convocatoria";
import { buildMirNetTrend, type MirNetTrendPoint } from "@/lib/training/mir-net-trend";
import { MIR_EXAM_QUESTIONS, formatMirNet } from "@/lib/training/mir-scoring";

/** Dorado de la marca (--color-mq-premium-gold) y superficie de las tarjetas MIR. */
const GOLD = "#facc15";
const CARD_SURFACE = "#132a4d";
const AXIS_TEXT = "rgb(148 163 184)";
const GRID = "rgb(255 255 255 / 0.08)";

function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <div className="mt-0.5 text-xl font-black text-white">{children}</div>
    </div>
  );
}

function Change({ value }: { value: number }) {
  if (Math.abs(value) < 0.05) {
    return (
      <span className="inline-flex items-center gap-1 text-slate-300">
        <Minus className="h-4 w-4" aria-hidden />
        igual
      </span>
    );
  }
  const isUp = value > 0;
  const Icon = isUp ? ArrowUpRight : ArrowDownRight;
  return (
    <span className="inline-flex items-center gap-1">
      <Icon className={`h-4 w-4 ${isUp ? "text-emerald-400" : "text-rose-400"}`} aria-hidden />
      {isUp ? "+" : "−"}
      {formatMirNet(Math.abs(value))}
      <span className="sr-only">{isUp ? " netas más" : " netas menos"}</span>
    </span>
  );
}

function CurveTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: MirNetTrendPoint }> }) {
  const point = active ? payload?.[0]?.payload : undefined;
  if (!point) return null;
  return (
    <div className="rounded-xl border border-white/15 bg-[#0A1F44]/95 px-3 py-2 text-xs shadow-lg">
      <p className="font-bold text-white">{getMirEdition(point.editionCode)?.label ?? "Simulacro"}</p>
      <p className="text-slate-400">
        Simulacro {point.attempt} · {formatShortDate(point.completedAt)}
      </p>
      <p className="mt-1 text-sm font-black text-white">
        {formatMirNet(point.projectedNet)} <span className="text-xs font-bold text-slate-400">netas / {MIR_EXAM_QUESTIONS}</span>
      </p>
      <p className="text-slate-400">
        {point.correct} aciertos · {point.wrong} errores · {point.total} preguntas
      </p>
    </div>
  );
}

/**
 * Curva de evolución de netas (proyectadas a 200) de todos los simulacros
 * entregados, con la última nota, la mejor y el cambio desde el primero.
 */
export function MirNetCurve({ log, showHistoryLink = false }: { log: MirAttemptLogEntry[]; showHistoryLink?: boolean }) {
  const trend = buildMirNetTrend(log);
  const { points, last, best, changeSinceFirst, domain, ticks } = trend;

  if (!last || !best) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
            <TrendingUp className="h-5 w-5 text-mq-premium-gold" />
          </span>
          <div>
            <p className="text-sm font-bold text-white">Tu curva de netas empieza con tu primer simulacro</p>
            <p className="mt-0.5 text-xs text-slate-400">
              Cada simulacro que entregues será un punto, proyectado a {MIR_EXAM_QUESTIONS} preguntas.
            </p>
          </div>
        </div>
        <Link
          href="/dashboard/mir/simulacro"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-white/20 px-4 text-sm font-black text-white transition hover:border-white/40"
        >
          Hacer un simulacro
        </Link>
      </div>
    );
  }

  const lastIndex = points.length - 1;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="grid grid-cols-3 gap-4">
        <Stat label="Última">{formatMirNet(last.projectedNet)}</Stat>
        <Stat label="Mejor">{formatMirNet(best.projectedNet)}</Stat>
        <Stat label="Desde el primero">
          {changeSinceFirst === null ? <span className="text-slate-500">—</span> : <Change value={changeSinceFirst} />}
        </Stat>
      </div>

      <div
        className="mt-5 h-56 w-full"
        role="img"
        aria-label={`Netas proyectadas de ${points.length} ${points.length === 1 ? "simulacro" : "simulacros"}: la última ${formatMirNet(last.projectedNet)} y la mejor ${formatMirNet(best.projectedNet)} de ${MIR_EXAM_QUESTIONS}.`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={points} margin={{ top: 22, right: 28, left: -12, bottom: 0 }}>
            <defs>
              <linearGradient id="mirNetArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={GOLD} stopOpacity={0.14} />
                <stop offset="100%" stopColor={GOLD} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis
              dataKey="attempt"
              tickFormatter={(attempt: number) => `#${attempt}`}
              tick={{ fill: AXIS_TEXT, fontSize: 11 }}
              axisLine={{ stroke: GRID }}
              tickLine={false}
              interval="preserveStartEnd"
              padding={{ left: 12, right: 12 }}
            />
            <YAxis
              domain={domain}
              ticks={ticks}
              tick={{ fill: AXIS_TEXT, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={44}
            />
            <Tooltip
              content={<CurveTooltip />}
              cursor={{ stroke: "rgb(255 255 255 / 0.25)", strokeWidth: 1 }}
            />
            <Area type="monotone" dataKey="projectedNet" stroke="none" fill="url(#mirNetArea)" isAnimationActive={false} />
            <Line
              type="monotone"
              dataKey="projectedNet"
              stroke={GOLD}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              dot={{ r: 4, fill: GOLD, stroke: CARD_SURFACE, strokeWidth: 2 }}
              activeDot={{ r: 6, fill: GOLD, stroke: CARD_SURFACE, strokeWidth: 2 }}
              isAnimationActive={false}
            >
              {/* Solo se rotula el último punto: el resto queda en el tooltip y en el historial. */}
              <LabelList
                dataKey="projectedNet"
                content={({ x, y, value, index }) =>
                  index === lastIndex ? (
                    <text
                      x={Number(x)}
                      y={Number(y) - 12}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize={12}
                      fontWeight={800}
                    >
                      {formatMirNet(Number(value))}
                    </text>
                  ) : null
                }
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] text-slate-500">
          {points.length === 1
            ? "Entrega otro simulacro para ver hacia dónde va tu curva."
            : `Netas de cada simulacro proyectadas a ${MIR_EXAM_QUESTIONS} preguntas (cada error resta un tercio).`}
        </p>
        {showHistoryLink ? (
          <Link
            href="/dashboard/historial"
            className="inline-flex items-center gap-1 text-xs font-bold text-mq-premium-gold hover:brightness-110"
          >
            Ver todos los simulacros
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

/** Carga el registro de simulacros y pinta la curva (para el panel MIR). */
export function MirNetCurveCard({ userId }: { userId: string }) {
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
    return <div className="h-72 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }
  return <MirNetCurve log={log} showHistoryLink />;
}

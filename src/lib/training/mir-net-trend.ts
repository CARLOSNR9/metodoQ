import type { MirAttemptLogEntry } from "@/lib/training/mir-convocatoria";
import { MIR_EXAM_QUESTIONS, getMirScoreSummary } from "@/lib/training/mir-scoring";

/**
 * Curva de evolución de netas: un punto por simulacro entregado, en orden
 * cronológico, con las netas proyectadas a 200 preguntas para que ediciones
 * de distinto tamaño (100, ~180 o 200 preguntas) se puedan comparar.
 */
export type MirNetTrendPoint = {
  /** 1, 2, 3… en orden de entrega. */
  attempt: number;
  editionCode: string;
  completedAt: string;
  correct: number;
  wrong: number;
  total: number;
  projectedNet: number;
};

export type MirNetTrend = {
  points: MirNetTrendPoint[];
  last: MirNetTrendPoint | null;
  best: MirNetTrendPoint | null;
  /** Último − primero; null con menos de dos simulacros. */
  changeSinceFirst: number | null;
  /** Rango del eje Y alineado a `ticks`, con aire por encima y por debajo. */
  domain: [number, number];
  /** Marcas del eje Y a paso fijo (10, 20 o 50). */
  ticks: number[];
};

const DOMAIN_PADDING = 10;
const TICK_STEPS = [10, 20, 50];
const MAX_TICK_INTERVALS = 6;

export function buildMirNetTrend(log: MirAttemptLogEntry[]): MirNetTrend {
  const points = [...log]
    .filter((entry) => entry.total > 0)
    .sort((a, b) => a.completedAt.localeCompare(b.completedAt))
    .map((entry, index) => ({
      attempt: index + 1,
      editionCode: entry.editionCode,
      completedAt: entry.completedAt,
      correct: entry.correct,
      wrong: entry.wrong,
      total: entry.total,
      projectedNet: getMirScoreSummary(entry).projectedNet,
    }));

  const last = points.at(-1) ?? null;
  const best = points.reduce<MirNetTrendPoint | null>(
    (top, point) => (!top || point.projectedNet > top.projectedNet ? point : top),
    null,
  );

  const values = points.map((point) => point.projectedNet);
  const low = values.length > 0 ? Math.min(...values) : 0;
  const high = values.length > 0 ? Math.max(...values) : MIR_EXAM_QUESTIONS / 2;
  const rawLow = low - DOMAIN_PADDING;
  const rawHigh = high + DOMAIN_PADDING;
  const step =
    TICK_STEPS.find((candidate) => Math.ceil(rawHigh / candidate) - Math.floor(rawLow / candidate) <= MAX_TICK_INTERVALS) ??
    TICK_STEPS[TICK_STEPS.length - 1];
  const lower = Math.floor(rawLow / step) * step;
  // Solo baja de 0 si alguna nota es negativa (más errores que aciertos × 3).
  const domain: [number, number] = [
    low >= 0 ? Math.max(0, lower) : lower,
    Math.min(MIR_EXAM_QUESTIONS, Math.ceil(rawHigh / step) * step),
  ];
  const ticks = Array.from({ length: (domain[1] - domain[0]) / step + 1 }, (_, index) => domain[0] + index * step);

  return {
    points,
    last,
    best,
    changeSinceFirst: points.length >= 2 && last ? last.projectedNet - points[0].projectedNet : null,
    domain,
    ticks,
  };
}

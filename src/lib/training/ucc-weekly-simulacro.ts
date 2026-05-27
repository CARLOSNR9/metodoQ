import type { DemoResultItem } from "@/lib/results";
import { getPlanWeekNumber } from "@/lib/training/ucc-mi-daily-plan";

export type UccSimulacroConfig = {
  questionCount: number;
  minutes: number;
  label: string;
};

export type UccWeeklySimulacroStatus = {
  planWeek: number;
  simulacrosRequired: number;
  simulacrosCompleted: number;
  isDue: boolean;
  isOverdue: boolean;
  nextDueLabel: string | null;
  config: UccSimulacroConfig;
};

function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getLocalDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getUccSimulacroConfig(planWeek: number): UccSimulacroConfig {
  if (planWeek >= 23) {
    return {
      questionCount: 100,
      minutes: 180,
      label: "Simulacro completo tipo UCC",
    };
  }
  if (planWeek >= 19) {
    return {
      questionCount: 80,
      minutes: 120,
      label: "Simulacro semanal cronometrado",
    };
  }
  return {
    questionCount: 60,
    minutes: 90,
    label: "Simulacro de consolidación",
  };
}

function countSimulacrosInWeek(
  results: DemoResultItem[],
  weekStart: Date,
): number {
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);

  return results.filter((result) => {
    if (result.sessionType !== "simulacro" || !result.fechaIso) return false;
    const date = new Date(result.fechaIso);
    return date >= weekStart && date < weekEnd;
  }).length;
}

function isMonthlySimulacroDue(planWeek: number, today: Date): boolean {
  if (planWeek < 7 || planWeek >= 19) return false;
  return today.getDate() <= 7;
}

export function buildWeeklySimulacroStatus(options: {
  planStartedAt?: string | null;
  results: DemoResultItem[];
  today?: Date;
}): UccWeeklySimulacroStatus | null {
  const today = options.today ?? new Date();
  const planWeek = getPlanWeekNumber(options.planStartedAt);

  if (planWeek < 7) return null;

  const config = getUccSimulacroConfig(planWeek);
  const weekStart = getWeekStart(today);
  const simulacrosCompleted = countSimulacrosInWeek(options.results, weekStart);

  let simulacrosRequired = 0;
  let nextDueLabel: string | null = null;

  if (planWeek >= 23) {
    simulacrosRequired = 2;
    nextDueLabel = "Domingo y miércoles";
  } else if (planWeek >= 19) {
    simulacrosRequired = 1;
    nextDueLabel = "Domingo";
  } else if (isMonthlySimulacroDue(planWeek, today)) {
    simulacrosRequired = 1;
    nextDueLabel = "Primera semana del mes";
  }

  const day = today.getDay();
  const isDueWindow =
    planWeek >= 23
      ? day === 0 || day === 3
      : planWeek >= 19
        ? day === 0
        : isMonthlySimulacroDue(planWeek, today);

  const isDue =
    simulacrosRequired > 0 &&
    simulacrosCompleted < simulacrosRequired &&
    isDueWindow;

  const isOverdue =
    simulacrosRequired > 0 &&
    simulacrosCompleted < simulacrosRequired &&
    ((planWeek >= 19 && day > 0 && day !== 3) ||
      (planWeek >= 7 && planWeek < 19 && today.getDate() > 7));

  return {
    planWeek,
    simulacrosRequired,
    simulacrosCompleted,
    isDue,
    isOverdue,
    nextDueLabel,
    config,
  };
}

export function getAverageSimulacroScore(results: DemoResultItem[]): number | null {
  const simulacros = results.filter((r) => r.sessionType === "simulacro");
  if (simulacros.length === 0) return null;
  const total = simulacros.reduce((sum, r) => sum + r.scorePercentage, 0);
  return Math.round(total / simulacros.length);
}

/** Desbloqueo Fase II: promedio simulacros ≥50 o score acumulado ≥50. */
export function isUccPhase2Unlocked(options: {
  cumulativeScore: number;
  results: DemoResultItem[];
}): boolean {
  if (options.cumulativeScore >= 50) return true;
  const avgSim = getAverageSimulacroScore(options.results);
  return avgSim !== null && avgSim >= 50;
}

export function buildUccSimulacroHref(config: UccSimulacroConfig): string {
  const params = new URLSearchParams();
  params.set("mode", "simulacro");
  params.set("ucc", "1");
  params.set("count", String(config.questionCount));
  params.set("minutes", String(config.minutes));
  return `/dashboard/entrenar?${params.toString()}`;
}

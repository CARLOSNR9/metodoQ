"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Flag } from "lucide-react";
import { getLocalDateKey } from "@/lib/results";
import {
  buildMirMastery,
  getMirSpecialtyStats,
  getSpecialtiesToReinforce,
  type MirSpecialtyMastery,
} from "@/lib/training/mir-mastery";
import { formatSpecialtyLabel } from "@/lib/training/mir-practice";
import {
  getOrCreateMirStudyPlan,
  getPlanWeek,
  type MirPlanPhase,
  type MirPlanWeek,
  type MirStudyPlan,
} from "@/lib/training/mir-study-plan";
import { buildMirPracticeHref } from "./mir-mastery-map";
import { MirDoctorMascot } from "./mir-doctor-mascot";
import { MirPomodoroCard } from "./mir-pomodoro-card";

const PHASE_META: Record<MirPlanPhase, { label: string; description: string; badge: string }> = {
  first_pass: {
    label: "Primera vuelta",
    description: "Recorres todas las especialidades; las de más peso se llevan más días.",
    badge: "border-sky-300/30 bg-sky-300/10 text-sky-200",
  },
  second_pass: {
    label: "Segunda vuelta",
    description: "Cada semana, tus especialidades más débiles según el mapa de dominio.",
    badge: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  },
  final_sprint: {
    label: "Sprint final",
    description: "Bloques mixtos y simulacros completos para llegar en forma al examen.",
    badge: "border-mq-premium-gold/40 bg-mq-premium-gold/10 text-mq-premium-gold",
  },
};

type WeekPlan = {
  plan: MirStudyPlan;
  todayKey: string;
  week: MirPlanWeek | null;
  mastery: MirSpecialtyMastery[];
  reinforceKeys: string[];
};

function formatShortDate(dateKey: string): string {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

function useMirWeekPlan(userId: string): WeekPlan | null {
  const [state, setState] = useState<WeekPlan | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([getOrCreateMirStudyPlan(userId), getMirSpecialtyStats(userId)]).then(([plan, stats]) => {
      if (cancelled) return;
      const todayKey = getLocalDateKey(new Date());
      const mastery = buildMirMastery(stats);
      setState({
        plan,
        todayKey,
        week: getPlanWeek(plan, todayKey),
        mastery,
        reinforceKeys: getSpecialtiesToReinforce(mastery),
      });
    });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return state;
}

function PhaseBadge({ phase }: { phase: MirPlanPhase }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide ${PHASE_META[phase].badge}`}
    >
      {PHASE_META[phase].label}
    </span>
  );
}

/** Especialidades sugeridas para la semana: el estudiante elige cuáles y cuándo. */
function getWeekFocusKeys(week: MirPlanWeek, reinforceKeys: string[]): string[] {
  if (week.phase === "first_pass") return week.specialtyKeys;
  if (week.phase === "second_pass") return reinforceKeys.slice(0, 2);
  return [];
}

function FocusChips({ keys, mastery }: { keys: string[]; mastery: MirSpecialtyMastery[] }) {
  const masteryByKey = new Map(mastery.map((item) => [item.key, item]));
  return (
    <div className="flex flex-wrap gap-2">
      {keys.map((key) => {
        const item = masteryByKey.get(key);
        return (
          <Link
            key={key}
            href={buildMirPracticeHref(key)}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-white transition hover:border-mq-premium-gold/40"
          >
            {formatSpecialtyLabel(key)}
            {item?.accuracy !== null && item?.accuracy !== undefined ? (
              <span className="font-semibold text-slate-400">{item.accuracy} %</span>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}

function getWeekTitle(week: MirPlanWeek, reinforceKeys: string[]): string {
  if (week.phase === "first_pass") return week.specialtyKeys.map(formatSpecialtyLabel).join(" · ");
  if (week.containsExam) return "Semana del examen: repaso ligero con bloques mixtos";
  if (week.phase === "final_sprint") return "Bloques mixtos y simulacros";
  return reinforceKeys.length > 0
    ? `Refuerzo: ${reinforceKeys.slice(0, 2).map(formatSpecialtyLabel).join(" · ")}`
    : "Refuerzo de tus especialidades más débiles";
}

function getPlanMessage({ plan, week, todayKey }: WeekPlan): string {
  if (todayKey === plan.examDate) return "¡Hoy es el día! Confía en todo lo que has trabajado. ¡Mucha suerte!";
  if (todayKey > plan.examDate) return "El MIR ya pasó. ¡Enhorabuena por todo el camino recorrido!";
  if (!week) return "Practica a tu ritmo: elige especialidad, bloque mixto o simulacro cuando quieras.";
  return `Semana ${week.number} de ${plan.weeks.length}, en la ${PHASE_META[week.phase].label.toLowerCase()}. El foco de la semana es una guía: practica lo que quieras, a tu ritmo.`;
}

/** Tarjeta del panel MIR: fase, semana del plan y foco sugerido de la semana. */
export function MirStudyPlanCard({ userId }: { userId: string }) {
  const weekPlan = useMirWeekPlan(userId);
  if (!weekPlan) {
    return <div className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }

  const { plan, week, mastery, reinforceKeys } = weekPlan;
  const focusKeys = week ? getWeekFocusKeys(week, reinforceKeys) : [];

  return (
    <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[1fr_1.4fr]">
      <div>
        {week ? (
          <>
            <div className="flex flex-wrap items-center gap-2">
              <PhaseBadge phase={week.phase} />
              <span className="text-xs font-bold text-slate-400">
                Semana {week.number} de {plan.weeks.length}
              </span>
            </div>
            <p className="mt-3 text-lg font-black text-white">{getWeekTitle(week, reinforceKeys)}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">{PHASE_META[week.phase].description}</p>
            <div
              className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
              role="meter"
              aria-label="Avance del plan"
              aria-valuemin={0}
              aria-valuemax={plan.weeks.length}
              aria-valuenow={week.number}
            >
              <div
                className="h-full rounded-full bg-mq-premium-gold"
                style={{ width: `${(week.number / plan.weeks.length) * 100}%` }}
              />
            </div>
          </>
        ) : (
          <p className="text-sm text-slate-300">{getPlanMessage(weekPlan)}</p>
        )}
        <Link
          href="/dashboard/mir/plan"
          className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-mq-premium-gold hover:underline"
        >
          Ver plan completo
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div>
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">Foco de esta semana</p>
        {focusKeys.length > 0 ? (
          <FocusChips keys={focusKeys} mastery={mastery} />
        ) : (
          <p className="text-sm text-slate-300">Bloques mixtos y simulacros de todas las especialidades.</p>
        )}
        <p className="mt-3 text-xs leading-relaxed text-slate-400">
          Es una guía, no una obligación: practica las preguntas que quieras, cuando quieras.
        </p>
        <Link
          href="/dashboard/mir/practica"
          className="mt-4 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
        >
          Practicar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

/** Página completa del plan MIR (/dashboard/mir/plan). */
export function MirStudyPlanView({ userId }: { userId: string }) {
  const weekPlan = useMirWeekPlan(userId);

  if (!weekPlan) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-premium-gold border-t-transparent" />
      </div>
    );
  }

  const { plan, week: currentWeek, mastery, reinforceKeys, todayKey } = weekPlan;
  const focusKeys = currentWeek ? getWeekFocusKeys(currentWeek, reinforceKeys) : [];

  return (
    <div className="mx-auto w-full max-w-4xl">
      <Link
        href="/dashboard/mir"
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al panel MIR
      </Link>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-9">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <CalendarDays className="h-3.5 w-3.5" />
          Plan hasta el examen
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">
          {plan.weeks.length} semanas hasta el MIR
        </h1>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="flex items-end gap-3">
            <MirDoctorMascot className="h-32 w-24 shrink-0" />
            <div className="rounded-2xl rounded-bl-none border border-white/10 bg-white/[0.06] px-4 py-3">
              <p className="text-sm leading-relaxed text-slate-200">{getPlanMessage(weekPlan)}</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">Foco de esta semana</p>
            {focusKeys.length > 0 ? (
              <FocusChips keys={focusKeys} mastery={mastery} />
            ) : (
              <p className="text-sm text-slate-300">Bloques mixtos y simulacros de todas las especialidades.</p>
            )}
          </div>
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          {(Object.keys(PHASE_META) as MirPlanPhase[]).map((phase) => (
            <div key={phase} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <PhaseBadge phase={phase} />
              <p className="mt-2 text-[11px] leading-relaxed text-slate-400">{PHASE_META[phase].description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <MirPomodoroCard />
      </div>

      <ol className="mt-6 space-y-2">
        {plan.weeks.map((week) => {
          const isCurrent = week.number === currentWeek?.number;
          const isPast = week.endDate < todayKey;
          return (
            <li
              key={week.number}
              className={`rounded-2xl border p-4 ${
                isCurrent
                  ? "border-mq-premium-gold/50 bg-mq-premium-gold/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              } ${isPast ? "opacity-60" : ""}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  {isPast ? <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-label="Semana pasada" /> : null}
                  <span className="text-sm font-black text-white">Semana {week.number}</span>
                  <span className="text-xs text-slate-400">
                    {formatShortDate(week.startDate)} – {formatShortDate(week.endDate)}
                  </span>
                  {isCurrent ? (
                    <span className="rounded-full bg-mq-premium-gold px-2 py-0.5 text-[10px] font-black text-[#0A1F44]">
                      Esta semana
                    </span>
                  ) : null}
                </div>
                <PhaseBadge phase={week.phase} />
              </div>

              {week.phase === "first_pass" ? (
                <div className="mt-3">
                  <FocusChips keys={week.specialtyKeys} mastery={mastery} />
                </div>
              ) : (
                <p className="mt-2 text-xs text-slate-300">{getWeekTitle(week, reinforceKeys)}</p>
              )}

              {week.containsExam ? (
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-mq-premium-gold">
                  <Flag className="h-3.5 w-3.5" />
                  Examen MIR: sábado {formatShortDate(plan.examDate)}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

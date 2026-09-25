"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Circle,
  Flag,
  Layers,
  Stethoscope,
  Target,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { getLocalDateKey } from "@/lib/results";
import { MIR_EXAM_EDITIONS, getMirAttempt } from "@/lib/training/mir-convocatoria";
import { getMirDailyChallengeState } from "@/lib/training/mir-daily-challenge";
import {
  buildMirMastery,
  getMirSpecialtyStats,
  getSpecialtiesToReinforce,
  type MirSpecialtyMastery,
} from "@/lib/training/mir-mastery";
import { MIR_MIXED_SPECIALTY, formatSpecialtyLabel } from "@/lib/training/mir-practice";
import { getDueMirReviewIds, getMirReviewDeck } from "@/lib/training/mir-review";
import {
  getOrCreateMirStudyPlan,
  getPlanDayTask,
  getPlanWeek,
  type MirPlanDayTask,
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
    description: "Bloques mixtos a diario y simulacro completo los sábados.",
    badge: "border-mq-premium-gold/40 bg-mq-premium-gold/10 text-mq-premium-gold",
  },
};

type ChecklistItem = {
  id: string;
  icon: LucideIcon;
  label: string;
  detail: string;
  href: string;
  done: boolean;
};

type TodayPlan = {
  plan: MirStudyPlan;
  todayKey: string;
  week: MirPlanWeek | null;
  task: MirPlanDayTask;
  checklist: ChecklistItem[];
  mastery: MirSpecialtyMastery[];
  reinforceKeys: string[];
};

function formatShortDate(dateKey: string): string {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

function describeTask(task: MirPlanDayTask): { label: string; detail: string; href: string } | null {
  switch (task.kind) {
    case "specialty":
      return {
        label: `Bloque de ${formatSpecialtyLabel(task.specialtyKey)}`,
        detail: "10 preguntas de la especialidad de hoy",
        href: buildMirPracticeHref(task.specialtyKey),
      };
    case "mixed":
      return {
        label: "Bloque mixto",
        detail: "10 preguntas de todas las especialidades",
        href: buildMirPracticeHref(MIR_MIXED_SPECIALTY),
      };
    case "simulacro":
      return {
        label: "Simulacro completo",
        detail: "Examen cronometrado al ritmo real del MIR",
        href: "/dashboard/mir/simulacro",
      };
    default:
      return null;
  }
}

function useMirTodayPlan(userId: string): TodayPlan | null {
  const [today, setToday] = useState<TodayPlan | null>(null);

  useEffect(() => {
    let cancelled = false;
    const edition = MIR_EXAM_EDITIONS[0];

    Promise.all([
      getOrCreateMirStudyPlan(userId),
      getMirSpecialtyStats(userId),
      getMirDailyChallengeState(userId),
      getMirReviewDeck(userId),
      edition ? getMirAttempt(userId, edition.code) : Promise.resolve(null),
    ]).then(([planData, stats, challengeState, deck, attempt]) => {
      if (cancelled) return;
      const todayKey = getLocalDateKey(new Date());
      const mastery = buildMirMastery(stats);
      const reinforceKeys = getSpecialtiesToReinforce(mastery);
      const { plan, lastPracticeBySpecialty } = planData;
      const task = getPlanDayTask(plan, todayKey, reinforceKeys);
      const dueCount = getDueMirReviewIds(deck).length;

      const checklist: ChecklistItem[] = [
        {
          id: "challenge",
          icon: Target,
          label: "Reto del día",
          detail: "5 preguntas con la doctora",
          href: "/dashboard/mir/reto",
          done: Boolean(challengeState.today?.completedAt),
        },
      ];
      const main = describeTask(task);
      if (main) {
        let done = false;
        if (task.kind === "specialty") done = lastPracticeBySpecialty[task.specialtyKey] === todayKey;
        if (task.kind === "mixed") done = lastPracticeBySpecialty[MIR_MIXED_SPECIALTY] === todayKey;
        if (task.kind === "simulacro") {
          done = Boolean(attempt?.completedAt) && getLocalDateKey(new Date(attempt!.completedAt)) === todayKey;
        }
        checklist.push({
          id: "main",
          icon: task.kind === "simulacro" ? Timer : Stethoscope,
          ...main,
          done,
        });
      }
      checklist.push({
        id: "review",
        icon: Layers,
        label: "Repaso de errores",
        detail: dueCount > 0 ? `${dueCount} ${dueCount === 1 ? "pregunta pendiente" : "preguntas pendientes"}` : "Nada pendiente hoy",
        href: "/dashboard/mir/repaso",
        done: dueCount === 0,
      });

      setToday({
        plan,
        todayKey,
        week: getPlanWeek(plan, todayKey),
        task,
        checklist,
        mastery,
        reinforceKeys,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return today;
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

function Checklist({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition ${
                item.done
                  ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                  : "border-white/10 bg-white/[0.03] hover:border-mq-premium-gold/40 hover:bg-white/[0.06]"
              }`}
            >
              {item.done ? (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" aria-label="Hecho" />
              ) : (
                <Circle className="h-5 w-5 shrink-0 text-slate-500" aria-label="Pendiente" />
              )}
              <Icon className="h-4 w-4 shrink-0 text-mq-premium-gold" />
              <span className="min-w-0 flex-1">
                <span className={`block text-sm font-bold ${item.done ? "text-slate-400 line-through" : "text-white"}`}>
                  {item.label}
                </span>
                <span className="block text-[11px] text-slate-400">{item.detail}</span>
              </span>
              {!item.done ? <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" /> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function getWeekTitle(week: MirPlanWeek, reinforceKeys: string[]): string {
  if (week.phase === "first_pass") return week.specialtyKeys.map(formatSpecialtyLabel).join(" · ");
  if (week.containsExam) return "Semana del examen: repaso ligero con bloques mixtos";
  if (week.phase === "final_sprint") return "Bloques mixtos y simulacro el sábado";
  return reinforceKeys.length > 0
    ? `Refuerzo: ${reinforceKeys.slice(0, 2).map(formatSpecialtyLabel).join(" · ")}`
    : "Refuerzo de tus especialidades más débiles";
}

function getPlanMessage(today: TodayPlan): string {
  const { task, week, checklist } = today;
  if (task.kind === "exam") return "¡Hoy es el día! Confía en todo lo que has trabajado. ¡Mucha suerte!";
  if (task.kind === "rest") return "El MIR ya pasó. ¡Enhorabuena por todo el camino recorrido!";
  const pending = checklist.filter((item) => !item.done).length;
  if (pending === 0) return "¡Plan de hoy completado! Así, día a día, es como se llega al MIR.";
  const phase = week ? PHASE_META[week.phase].label.toLowerCase() : "plan";
  return `Estamos en la ${phase}. Te ${pending === 1 ? "queda 1 tarea" : `quedan ${pending} tareas`} para cerrar el día.`;
}

/** Tarjeta del panel MIR: fase y semana del plan, y checklist de hoy. */
export function MirStudyPlanCard({ userId }: { userId: string }) {
  const today = useMirTodayPlan(userId);
  if (!today) {
    return <div className="h-56 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }

  const { plan, week, checklist, reinforceKeys } = today;
  const doneCount = checklist.filter((item) => item.done).length;

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
          <p className="text-sm text-slate-300">{getPlanMessage(today)}</p>
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
        <p className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wide text-slate-400">
          <span>Hoy</span>
          <span>
            {doneCount}/{checklist.length} hechas
          </span>
        </p>
        <Checklist items={checklist} />
      </div>
    </div>
  );
}

/** Página completa del plan MIR (/dashboard/mir/plan). */
export function MirStudyPlanView({ userId }: { userId: string }) {
  const today = useMirTodayPlan(userId);

  if (!today) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-premium-gold border-t-transparent" />
      </div>
    );
  }

  const { plan, week: currentWeek, checklist, mastery, reinforceKeys, todayKey } = today;
  const masteryByKey = new Map(mastery.map((item) => [item.key, item]));

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
              <p className="text-sm leading-relaxed text-slate-200">{getPlanMessage(today)}</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">Hoy</p>
            <Checklist items={checklist} />
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
                <div className="mt-3 flex flex-wrap gap-2">
                  {week.specialtyKeys.map((key) => {
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

"use client";

import { useEffect, useMemo, useState } from "react";
import { Calendar, Check, Flame, Minus, X } from "lucide-react";
import { getUserDemoResults } from "@/lib/results";
import {
  buildPlanPeriodDays,
  countMissedPlanDays,
  countPartialPlanDays,
  countStudiedDays,
  countStudiedStreak,
  PRO_DAILY_MIN_QUESTIONS,
  type DailyHabitDay,
} from "@/lib/training/daily-activity";
import { formatSubscriptionDate } from "@/lib/plans/subscription-display";

type StudyHabitCalendarProps = {
  userId: string;
  planStartedAt?: string | null;
  streakCount?: number;
};

function CalendarCell({ day }: { day: DailyHabitDay }) {
  const studied = day.status === "studied";
  const missed = day.status === "missed";
  const partial = day.status === "partial";
  const pending = day.status === "today_pending";
  const beforePlan = day.status === "before_plan";

  return (
    <div
      className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-center transition-colors ${
        studied
          ? "border-emerald-500/30 bg-emerald-500/10"
          : missed
            ? "border-rose-500/25 bg-rose-500/5"
            : partial || pending
              ? "border-amber-500/30 bg-amber-500/10 ring-1 ring-amber-500/20"
              : beforePlan
                ? "border-white/5 bg-white/[0.02] opacity-50"
                : "border-white/5 bg-white/[0.03]"
      }`}
      title={
        studied
          ? `${day.questionsCount}/${day.minQuestions} — meta cumplida`
          : partial
            ? `${day.questionsCount}/${day.minQuestions} — meta no cumplida`
            : missed
              ? "Día sin actividad"
              : pending
                ? day.questionsCount > 0
                  ? `${day.questionsCount}/${day.minQuestions} hoy`
                  : `Meta: ${day.minQuestions} preguntas`
                : "Antes del inicio del plan"
      }
    >
      <span className="text-[9px] font-bold uppercase tracking-wider text-mq-muted">
        {day.weekdayShort}
      </span>
      <span className="text-sm font-black text-white">{day.dayNumber}</span>
      <div className="flex h-5 w-5 items-center justify-center">
        {studied ? (
          <Check size={14} className="text-emerald-400" strokeWidth={3} />
        ) : missed ? (
          <X size={14} className="text-rose-400" strokeWidth={3} />
        ) : partial ? (
          <Minus size={14} className="text-amber-400" strokeWidth={3} />
        ) : pending && day.questionsCount > 0 ? (
          <span className="text-[8px] font-black text-amber-300">
            {day.questionsCount}/{day.minQuestions}
          </span>
        ) : pending ? (
          <span className="h-2 w-2 rounded-full bg-amber-400" />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        )}
      </div>
    </div>
  );
}

export function StudyHabitCalendar({
  userId,
  planStartedAt,
  streakCount = 0,
}: StudyHabitCalendarProps) {
  const [days, setDays] = useState<DailyHabitDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const results = await getUserDemoResults(userId);
        if (!mounted) return;
        setDays(
          buildPlanPeriodDays({
            results,
            planStartedAt: planStartedAt ?? null,
          }),
        );
      } catch (error) {
        console.error("No se pudo cargar el cronograma de estudio.", error);
        if (mounted) setDays([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId, planStartedAt]);

  const computedStreak = useMemo(() => countStudiedStreak(days), [days]);
  const displayStreak = Math.max(streakCount, computedStreak);
  const studiedCount = useMemo(() => countStudiedDays(days), [days]);
  const missedCount = useMemo(() => countMissedPlanDays(days), [days]);
  const partialCount = useMemo(() => countPartialPlanDays(days), [days]);
  const planStartLabel = formatSubscriptionDate(planStartedAt ?? null);

  return (
    <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
            Cronograma de estudio
          </p>
          <h2 className="text-xl font-bold text-white">Tu constancia en el plan Pro</h2>
          <p className="text-sm text-mq-muted">
            {planStartedAt ? (
              <>
                Desde el <span className="font-medium text-white">{planStartLabel}</span> · meta diaria:{" "}
                <span className="font-medium text-white">{PRO_DAILY_MIN_QUESTIONS} preguntas</span>.
              </>
            ) : (
              <>
                Meta diaria del plan Pro:{" "}
                <span className="font-medium text-white">{PRO_DAILY_MIN_QUESTIONS} preguntas</span>.
              </>
            )}
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-orange-500/25 bg-orange-500/10 px-4 py-3">
          <Flame
            size={22}
            className={displayStreak > 0 ? "text-orange-400" : "text-mq-muted"}
            fill={displayStreak > 0 ? "currentColor" : "none"}
          />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">Racha</p>
            <p className="text-lg font-black text-white">
              {isLoading ? "..." : `${displayStreak} días`}
            </p>
          </div>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-center text-sm sm:grid-cols-4">
        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <dt className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">Meta cumplida</dt>
          <dd className="mt-1 text-lg font-black text-emerald-300">
            {isLoading ? "—" : studiedCount}
          </dd>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <dt className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">Incompleto</dt>
          <dd className="mt-1 text-lg font-black text-amber-300">
            {isLoading ? "—" : partialCount}
          </dd>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <dt className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">Sin actividad</dt>
          <dd className="mt-1 text-lg font-black text-rose-300">
            {isLoading ? "—" : missedCount}
          </dd>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
          <dt className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">En el período</dt>
          <dd className="mt-1 text-lg font-black text-white">
            {isLoading ? "—" : days.filter((d) => d.status !== "before_plan").length}
          </dd>
        </div>
      </dl>

      {isLoading ? (
        <div className="mt-6 grid grid-cols-7 gap-2">
          {Array.from({ length: 14 }).map((_, index) => (
            <div key={index} className="h-16 animate-pulse rounded-xl bg-white/10" />
          ))}
        </div>
      ) : days.length === 0 ? (
        <p className="mt-6 text-sm text-mq-muted">
          Aún no hay historial. Tu primer día con {PRO_DAILY_MIN_QUESTIONS} preguntas aparecerá aquí en
          verde.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-7">
          {days.map((day) => (
            <CalendarCell key={day.dateKey} day={day} />
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-mq-muted">
        <span className="inline-flex items-center gap-1.5">
          <Check size={12} className="text-emerald-400" /> {PRO_DAILY_MIN_QUESTIONS}+ preguntas
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Minus size={12} className="text-amber-400" /> Meta incompleta
        </span>
        <span className="inline-flex items-center gap-1.5">
          <X size={12} className="text-rose-400" /> Sin actividad
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={12} className="text-mq-accent" /> Hoy en progreso
        </span>
      </div>
    </section>
  );
}

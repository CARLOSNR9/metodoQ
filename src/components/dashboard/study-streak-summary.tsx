"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Check, Flame, Minus, X } from "lucide-react";
import { getUserDemoResults } from "@/lib/results";
import {
  buildLastNDays,
  countIncompletePlanDays,
  countStudiedStreak,
  PRO_DAILY_MIN_QUESTIONS,
  type DailyHabitDay,
} from "@/lib/training/daily-activity";
import { formatSubscriptionDate } from "@/lib/plans/subscription-display";

type StudyStreakSummaryProps = {
  userId: string;
  planStartedAt?: string | null;
  streakCount?: number;
};

function DayPill({ day }: { day: DailyHabitDay }) {
  const studied = day.status === "studied";
  const missed = day.status === "missed";
  const partial = day.status === "partial";
  const pending = day.status === "today_pending";

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all ${
          studied
            ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-300"
            : missed
              ? "border-rose-500/30 bg-rose-500/10 text-rose-400"
              : partial || pending
                ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                : "border-white/10 bg-white/[0.03] text-mq-muted"
        }`}
        title={
          studied
            ? `${day.questionsCount}/${day.minQuestions} preguntas — meta cumplida`
            : partial
              ? `${day.questionsCount}/${day.minQuestions} — no alcanzaste la meta`
              : missed
                ? "Sin actividad"
                : pending
                  ? day.questionsCount > 0
                    ? `${day.questionsCount}/${day.minQuestions} hoy — faltan ${day.minQuestions - day.questionsCount}`
                    : `Meta del día: ${day.minQuestions} preguntas`
                  : "Antes del plan"
        }
      >
        {studied ? (
          <Check size={20} strokeWidth={3} />
        ) : missed ? (
          <X size={20} strokeWidth={3} />
        ) : partial ? (
          <Minus size={20} strokeWidth={3} />
        ) : pending && day.questionsCount > 0 ? (
          <span className="text-[10px] font-black leading-none">
            {day.questionsCount}/{day.minQuestions}
          </span>
        ) : (
          <span className="text-xs font-bold">{day.dayNumber}</span>
        )}
      </div>
      <span
        className={`text-[10px] font-bold uppercase tracking-wider ${
          day.isToday ? "text-mq-accent" : "text-mq-muted"
        }`}
      >
        {day.isToday ? "Hoy" : day.weekdayShort}
      </span>
    </div>
  );
}

export function StudyStreakSummary({
  userId,
  planStartedAt,
  streakCount = 0,
}: StudyStreakSummaryProps) {
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
          buildLastNDays({
            results,
            planStartedAt: planStartedAt ?? null,
            n: 5,
          }),
        );
      } catch (error) {
        console.error("No se pudo cargar el hábito de estudio.", error);
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
  const incompleteDays = useMemo(() => countIncompletePlanDays(days), [days]);
  const todayProgress = useMemo(
    () => days.find((day) => day.isToday),
    [days],
  );
  const planStartLabel = formatSubscriptionDate(planStartedAt ?? null);

  return (
    <section className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.08] via-mq-surface to-transparent p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
              displayStreak > 0
                ? "bg-orange-500 text-white shadow-[0_0_24px_rgba(249,115,22,0.35)]"
                : "bg-white/5 text-mq-muted"
            }`}
          >
            <Flame
              size={28}
              className={displayStreak > 0 ? "animate-pulse" : ""}
              fill={displayStreak > 0 ? "currentColor" : "none"}
            />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-300/90">
              Hábito Pro · {PRO_DAILY_MIN_QUESTIONS} preg/día · últimos 5 días
            </p>
            <p className="text-2xl font-black text-white">
              {isLoading ? "..." : `${displayStreak} ${displayStreak === 1 ? "día" : "días"} de racha`}
            </p>
            <p className="mt-1 text-sm text-mq-muted">
              {planStartedAt ? (
                <>
                  Desde el <span className="font-semibold text-white">{planStartLabel}</span>
                  {incompleteDays > 0 ? (
                    <>
                      {" "}
                      ·{" "}
                      <span className="text-rose-300">
                        {incompleteDays} día{incompleteDays === 1 ? "" : "s"} sin cumplir meta
                      </span>
                    </>
                  ) : null}
                </>
              ) : (
                `Responde al menos ${PRO_DAILY_MIN_QUESTIONS} preguntas cada día para mantener tu racha.`
              )}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 sm:justify-center">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-11 w-11 animate-pulse rounded-2xl bg-white/10"
                />
              ))
            : days.map((day) => <DayPill key={day.dateKey} day={day} />)}
        </div>
      </div>

      {!isLoading && todayProgress && todayProgress.questionsCount > 0 && todayProgress.status === "today_pending" && (
        <p className="mt-4 rounded-xl border border-mq-accent/25 bg-mq-accent/10 px-4 py-3 text-sm text-mq-accent">
          Hoy llevas{" "}
          <span className="font-bold text-white">
            {todayProgress.questionsCount}/{PRO_DAILY_MIN_QUESTIONS}
          </span>{" "}
          preguntas. Te faltan{" "}
          <span className="font-bold text-white">
            {PRO_DAILY_MIN_QUESTIONS - todayProgress.questionsCount}
          </span>{" "}
          para cerrar el día.
        </p>
      )}

      {!isLoading && incompleteDays >= 2 && (
        <p className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          Llevas varios días sin cumplir la meta de {PRO_DAILY_MIN_QUESTIONS} preguntas. Retoma hoy para
          no acumular más huecos.
        </p>
      )}

      {!isLoading && displayStreak === 0 && incompleteDays < 2 && !todayProgress?.questionsCount && (
        <p className="mt-4 text-sm text-mq-muted">
          Tu plan Pro exige {PRO_DAILY_MIN_QUESTIONS} preguntas diarias. Entrena hoy para encender la llama.
        </p>
      )}

      <div className="mt-4 flex justify-end">
        <Link
          href="/dashboard/perfil"
          className="text-xs font-bold uppercase tracking-wider text-mq-accent transition-colors hover:text-white"
        >
          Ver cronograma completo →
        </Link>
      </div>
    </section>
  );
}

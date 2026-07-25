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
  dailyTarget?: number;
  streakMinimum?: number;
  isUccMiTrack?: boolean;
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
            ? "border-emerald-200 bg-emerald-50 text-emerald-600"
            : missed
              ? "border-rose-200 bg-rose-50 text-rose-600"
              : partial || pending
                ? "border-amber-200 bg-amber-50 text-amber-600"
                : "border-slate-200 bg-slate-50 text-slate-500"
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
          day.isToday ? "text-mq-accent" : "text-slate-500"
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
  dailyTarget = PRO_DAILY_MIN_QUESTIONS,
  streakMinimum = PRO_DAILY_MIN_QUESTIONS,
  isUccMiTrack = false,
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
            minQuestions: dailyTarget,
            streakMinimum,
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
  }, [userId, planStartedAt, dailyTarget, streakMinimum]);

  const computedStreak = useMemo(() => countStudiedStreak(days), [days]);
  const displayStreak = Math.max(streakCount, computedStreak);
  const incompleteDays = useMemo(() => countIncompletePlanDays(days), [days]);
  const todayProgress = useMemo(
    () => days.find((day) => day.isToday),
    [days],
  );
  const planStartLabel = formatSubscriptionDate(planStartedAt ?? null);
  const habitLabel = isUccMiTrack
    ? `UCC MI · ${dailyTarget} preg/día`
    : `Hábito Pro · ${dailyTarget} preg/día`;

  return (
    <section className="rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.08] via-white to-transparent p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
              displayStreak > 0
                ? "bg-orange-500 text-white shadow-[0_0_24px_rgba(249,115,22,0.35)]"
                : "bg-slate-50 text-slate-500"
            }`}
          >
            <Flame
              size={28}
              className={displayStreak > 0 ? "animate-pulse" : ""}
              fill={displayStreak > 0 ? "currentColor" : "none"}
            />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500/90">
              {habitLabel} · últimos 5 días
            </p>
            <p className="text-2xl font-black text-slate-900">
              {isLoading ? "..." : `${displayStreak} ${displayStreak === 1 ? "día" : "días"} de racha`}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {planStartedAt ? (
                <>
                  Desde el <span className="font-semibold text-slate-900">{planStartLabel}</span>
                  {incompleteDays > 0 ? (
                    <>
                      {" "}
                      ·{" "}
                      <span className="text-rose-500">
                        {incompleteDays} día{incompleteDays === 1 ? "" : "s"} sin cumplir meta
                      </span>
                    </>
                  ) : null}
                </>
              ) : isUccMiTrack ? (
                `Meta diaria ${dailyTarget} preg · racha desde ${streakMinimum} preg.`
              ) : (
                `Responde al menos ${dailyTarget} preguntas cada día para mantener tu racha.`
              )}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 sm:justify-center">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-11 w-11 animate-pulse rounded-2xl bg-slate-100"
                />
              ))
            : days.map((day) => <DayPill key={day.dateKey} day={day} />)}
        </div>
      </div>

      {!isLoading && todayProgress && todayProgress.questionsCount > 0 && todayProgress.status === "today_pending" && (
        <p className="mt-4 rounded-xl border border-mq-accent/25 bg-mq-accent/10 px-4 py-3 text-sm text-mq-accent">
          Hoy llevas{" "}
          <span className="font-bold text-slate-900">
            {todayProgress.questionsCount}/{dailyTarget}
          </span>{" "}
          preguntas. Te faltan{" "}
          <span className="font-bold text-slate-900">
            {dailyTarget - todayProgress.questionsCount}
          </span>{" "}
          para cerrar el día.
        </p>
      )}

      {!isLoading && incompleteDays >= 2 && (
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          Llevas varios días sin cumplir la meta de {dailyTarget} preguntas. Retoma hoy para
          no acumular más huecos.
        </p>
      )}

      {!isLoading && displayStreak === 0 && incompleteDays < 2 && !todayProgress?.questionsCount && (
        <p className="mt-4 text-sm text-slate-500">
          {isUccMiTrack
            ? `Tu misión UCC exige ${dailyTarget} preguntas diarias (~90 min). Entrena hoy para encender la llama.`
            : `Tu plan Pro exige ${dailyTarget} preguntas diarias. Entrena hoy para encender la llama.`}
        </p>
      )}

      <div className="mt-4 flex justify-end">
        <Link
          href="/dashboard/perfil"
          className="text-xs font-bold uppercase tracking-wider text-mq-accent transition-colors hover:text-slate-900"
        >
          Ver cronograma completo →
        </Link>
      </div>
    </section>
  );
}

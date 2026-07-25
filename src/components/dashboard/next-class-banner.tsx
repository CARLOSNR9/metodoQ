"use client";

import Link from "next/link";
import { Calendar, ChevronRight, Clock, Video } from "lucide-react";
import { ClassSessionDetails } from "@/components/dashboard/class-session-details";
import { useClassCountdown } from "@/hooks/use-class-countdown";
import { useStudentClasses } from "@/hooks/use-student-classes";
import { formatClassDate, formatClassTime } from "@/lib/classes/student-classes";

type NextClassBannerProps = {
  userId: string;
};

export function NextClassBanner({ userId }: NextClassBannerProps) {
  const { nextClass, upcoming, loading, error } = useStudentClasses(userId, true);
  const countdown = useClassCountdown(
    nextClass?.classDate ?? null,
    nextClass?.endDate ?? null,
  );

  if (loading) {
    return (
      <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6 h-28" />
    );
  }

  if (error) {
    return null;
  }

  if (!nextClass) {
    return (
      <section className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-mq-accent">
                Mis clases
              </p>
              <p className="mt-1 text-sm text-slate-500">
                No tienes clases programadas por ahora. Revisa el calendario cuando tu profesor
                publique una sesión.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/clases"
            className="inline-flex items-center gap-2 rounded-xl border border-mq-accent/30 bg-mq-accent/10 px-4 py-2 text-sm font-semibold text-mq-accent transition hover:bg-mq-accent/15"
          >
            Ver calendario
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 ${
        nextClass.isLiveNow || countdown.active
          ? "border-mq-accent/50 bg-gradient-to-r from-mq-accent/15 to-transparent shadow-[0_0_30px_-12px_rgba(0,209,255,0.45)]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                nextClass.isLiveNow
                  ? "bg-mq-accent text-mq-accent-foreground"
                  : "bg-mq-accent/10 text-mq-accent"
              }`}
            >
              {nextClass.isLiveNow ? <Video size={22} /> : <Calendar size={22} />}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-bold uppercase tracking-wider text-mq-accent">
                  {nextClass.isLiveNow ? "Clase en vivo ahora" : "Próxima clase"}
                </p>
                {upcoming.length > 1 ? (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                    +{upcoming.length - 1} más
                  </span>
                ) : null}
              </div>
              <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">{nextClass.title}</h2>
              <p className="mt-1 text-sm capitalize text-slate-500">
                {formatClassDate(nextClass.classDate)} · {formatClassTime(nextClass.classDate)} ·{" "}
                {nextClass.duration} min
              </p>
              {nextClass.courseName ? (
                <p className="mt-1 text-xs text-mq-accent/80">Grupo: {nextClass.courseName}</p>
              ) : null}

              {countdown.active && countdown.message ? (
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5">
                  <Clock size={14} className="text-amber-300" />
                  <span className="text-xs font-bold text-amber-200">{countdown.message}</span>
                  {!nextClass.isLiveNow ? (
                    <span className="font-mono text-xs text-amber-100">{countdown.formatted}</span>
                  ) : null}
                </div>
              ) : null}

              <ClassSessionDetails cls={nextClass} />
            </div>
          </div>

          <Link
            href="/dashboard/clases"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-mq-accent/40 hover:text-mq-accent"
          >
            Ver calendario
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Calendar, ChevronRight, ExternalLink, Video } from "lucide-react";
import { useStudentClasses } from "@/hooks/use-student-classes";
import { formatClassDate, formatClassTime } from "@/lib/classes/student-classes";

type NextClassBannerProps = {
  userId: string;
};

export function NextClassBanner({ userId }: NextClassBannerProps) {
  const { nextClass, upcoming, loading, error } = useStudentClasses(userId, true);

  if (loading) {
    return (
      <div className="animate-pulse rounded-2xl border border-mq-border-strong bg-mq-surface p-6 h-28" />
    );
  }

  if (error) {
    return null;
  }

  if (!nextClass) {
    return (
      <section className="rounded-2xl border border-dashed border-mq-border-strong bg-white/[0.02] p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-mq-accent">
                Mis clases
              </p>
              <p className="mt-1 text-sm text-mq-muted">
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
        nextClass.isLiveNow
          ? "border-mq-accent/50 bg-gradient-to-r from-mq-accent/15 to-transparent shadow-[0_0_30px_-12px_rgba(0,209,255,0.45)]"
          : "border-mq-border-strong bg-mq-surface"
      }`}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
              nextClass.isLiveNow ? "bg-mq-accent text-mq-accent-foreground" : "bg-mq-accent/10 text-mq-accent"
            }`}
          >
            {nextClass.isLiveNow ? <Video size={22} /> : <Calendar size={22} />}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-mq-accent">
                {nextClass.isLiveNow ? "Clase en vivo ahora" : "Próxima clase"}
              </p>
              {upcoming.length > 1 ? (
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-mq-muted">
                  +{upcoming.length - 1} más
                </span>
              ) : null}
            </div>
            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">{nextClass.title}</h2>
            <p className="mt-1 text-sm capitalize text-mq-muted">
              {formatClassDate(nextClass.classDate)} · {formatClassTime(nextClass.classDate)} ·{" "}
              {nextClass.duration} min
            </p>
            {nextClass.courseName ? (
              <p className="mt-1 text-xs text-mq-accent/80">Grupo: {nextClass.courseName}</p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={nextClass.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition active:scale-[0.98] ${
              nextClass.isLiveNow
                ? "bg-mq-accent text-mq-accent-foreground hover:brightness-110"
                : "bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            {nextClass.isLiveNow ? "Entrar a la clase" : "Abrir enlace"}
            <ExternalLink size={16} />
          </a>
          <Link
            href="/dashboard/clases"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-mq-border px-5 py-2.5 text-sm font-semibold text-white transition hover:border-mq-accent/40 hover:text-mq-accent"
          >
            Mis clases
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Lock, PlayCircle } from "lucide-react";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { useStudentClasses } from "@/hooks/use-student-classes";
import { hasProFeatures } from "@/lib/plans/access";
import { ClassesCalendar } from "./classes-calendar";
import { ClassSessionDetails } from "./class-session-details";
import { formatClassDate, formatClassTime } from "@/lib/classes/student-classes";

export function StudentClassesView() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading: profileLoading } = useUserProfile();
  const isPro = hasProFeatures(profile?.plan);
  const { upcoming, past, views, loading, error } = useStudentClasses(user?.uid, isPro);

  if (isCheckingAuth || profileLoading) {
    return (
      <section className="space-y-6">
        <div className="h-24 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
        <div className="h-96 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
      </section>
    );
  }

  if (!isPro) {
    return (
      <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mq-accent/10 text-mq-accent">
          <Lock size={24} />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-white">Mis clases en vivo</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-mq-muted">
          Las sesiones en vivo con profesor están disponibles en los planes Pro y Residente.
        </p>
        <Link
          href="/dashboard/planes"
          className="mt-6 inline-flex rounded-xl bg-mq-accent px-6 py-2.5 text-sm font-bold text-mq-accent-foreground hover:brightness-110"
        >
          Ver planes Pro
        </Link>
      </section>
    );
  }

  return (
    <div className="space-y-8 pb-8">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-mq-accent">En vivo</p>
        <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Mis clases</h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Calendario de tus sesiones en vivo, enlaces para unirte y grabaciones de clases pasadas.
        </p>
      </header>

      {error ? (
        <p className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {error}
        </p>
      ) : null}

      {loading ? (
        <div className="h-96 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
      ) : (
        <ClassesCalendar classes={views} />
      )}

      <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-6">
        <h2 className="text-xl font-bold text-white">Próximas sesiones</h2>
        <p className="mt-1 text-sm text-mq-muted">
          {upcoming.length} clase{upcoming.length === 1 ? "" : "s"} programada
          {upcoming.length === 1 ? "" : "s"}.
        </p>

        {upcoming.length === 0 ? (
          <p className="mt-6 text-sm text-mq-muted">
            Cuando tu profesor programe una clase para tu grupo, aparecerá aquí y en el calendario.
          </p>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {upcoming.map((cls) => (
              <article
                key={cls.id}
                className={`rounded-xl border p-5 ${
                  cls.isLiveNow
                    ? "border-mq-accent/50 bg-mq-accent/5"
                    : "border-mq-border bg-white/[0.03]"
                }`}
              >
                <h3 className="text-lg font-bold text-white">{cls.title}</h3>
                <p className="mt-2 text-sm capitalize text-mq-muted">
                  {formatClassDate(cls.classDate)} · {formatClassTime(cls.classDate)}
                </p>
                <p className="mt-1 text-xs text-mq-muted">{cls.duration} minutos</p>
                {cls.courseName ? (
                  <p className="mt-1 text-xs text-mq-accent/80">Grupo: {cls.courseName}</p>
                ) : null}
                <ClassSessionDetails cls={cls} />
              </article>
            ))}
          </div>
        )}
      </section>

      {past.length > 0 ? (
        <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-6">
          <div className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-mq-accent" />
            <h2 className="text-xl font-bold text-white">Clases anteriores</h2>
          </div>
          <ul className="mt-6 space-y-3">
            {past.map((cls) => (
              <li
                key={cls.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div>
                  <p className="font-medium text-white">{cls.title}</p>
                  <p className="text-xs capitalize text-mq-muted">
                    {formatClassDate(cls.classDate)}
                  </p>
                  {cls.description?.trim() ? (
                    <p className="mt-1 text-xs text-mq-muted line-clamp-2">{cls.description}</p>
                  ) : null}
                </div>
                {cls.recordingLink ? (
                  <a
                    href={cls.recordingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15"
                  >
                    Ver grabación
                  </a>
                ) : (
                  <span className="text-xs text-mq-muted">Sin grabación</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

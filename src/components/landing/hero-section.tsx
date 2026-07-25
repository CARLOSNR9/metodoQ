"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { trackClickDemo } from "@/lib/analytics/events";
import { formatUserCount, usePublicStats } from "@/hooks/use-public-stats";
import { DemoVideo } from "./demo-video";

const AVATAR_INITIALS = ["CM", "AG", "LR", "DP"] as const;

export function HeroSection() {
  const { stats, loading } = usePublicStats();
  const userLabel = loading
    ? "médicos preparándose"
    : `${formatUserCount(stats.displayUsers)} médicos registrados`;

  return (
    <section className="relative isolate overflow-hidden border-b border-mq-border/80 lg:min-h-[calc(100vh-5rem)] flex items-center pt-16 lg:pt-0 bg-gradient-to-b from-slate-50 to-white">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 pb-20 pt-8 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-12 xl:gap-16 items-center">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-mq-accent sm:text-xs">
            <span className="flex h-1.5 w-1.5 rounded-full bg-mq-accent animate-pulse" />
            Optimizado para exámenes de residencia en Colombia
          </div>

          <h1 className="mt-8 text-balance text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Asegura tu cupo en la <span className="text-mq-accent">residencia médica</span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
            Diagnóstico gratis en 10 minutos, entrenamiento adaptativo por tema y simulacros tipo examen real.
            Aprende contestando preguntas con retroalimentación inmediata.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-6 lg:items-start">
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <Link
                  href="/demo"
                  onClick={() => trackClickDemo()}
                  className="inline-flex min-h-[3.75rem] items-center justify-center rounded-2xl bg-mq-accent px-6 text-[15px] font-bold text-white shadow-lg shadow-mq-accent/30 transition duration-300 hover:-translate-y-1 hover:brightness-110 active:translate-y-0 w-full sm:w-auto whitespace-nowrap sm:px-8 sm:text-lg"
                >
                  Haz tu diagnóstico gratis
                </Link>
                <Link
                  href="#como-funciona"
                  className="inline-flex min-h-[3.75rem] items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-[15px] font-bold text-slate-700 shadow-sm transition duration-300 hover:bg-slate-50 active:scale-[0.98] w-full sm:w-auto whitespace-nowrap sm:px-8 sm:text-lg"
                >
                  Ver el método en acción
                </Link>
              </div>
              <p className="text-center lg:text-left text-xs font-semibold uppercase tracking-widest text-slate-500">
                10 preguntas · unos 4 minutos · sin tarjeta
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2">
              <div className="flex -space-x-2">
                {AVATAR_INITIALS.map((initials) => (
                  <div
                    key={initials}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white border border-slate-200 bg-mq-accent/10 text-[10px] font-bold text-mq-accent"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-sm font-medium text-slate-500 text-center sm:text-left">
                <span className="text-slate-800 font-semibold">{userLabel}</span>
                <span className="flex items-center justify-center sm:justify-start gap-1.5 text-xs mt-0.5 opacity-80">
                  <Sparkles className="h-3 w-3 text-mq-accent" />
                  {stats.completedSessions > 0
                    ? `${stats.completedSessions} sesiones de entrenamiento completadas`
                    : "Empieza tu diagnóstico hoy"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="mb-6 flex justify-center lg:justify-start">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Mira cómo funciona en segundos
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-mq-accent/10 via-transparent to-teal-500/10 opacity-50 blur-2xl transition duration-500 group-hover:opacity-80" />
            <div className="relative transform transition-transform duration-500 hover:scale-[1.02] shadow-2xl rounded-3xl overflow-hidden border border-slate-200">
              <DemoVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

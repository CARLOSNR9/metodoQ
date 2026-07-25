"use client";

import { Users, Star } from "lucide-react";
import { TRUST_UNIVERSITIES } from "@/lib/brand";
import { formatUserCount, usePublicStats } from "@/hooks/use-public-stats";

export function SocialProofSection() {
  const { stats, loading } = usePublicStats();

  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-mq-accent">
              Credibilidad
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Diseñado para el médico que no tiene tiempo que perder
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {loading
                ? "Comunidad de preparación para residencia médica con entrenamiento medible."
                : `${formatUserCount(stats.displayUsers)} médicos registrados y ${stats.completedSessions} sesiones de entrenamiento registradas en la plataforma.`}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {TRUST_UNIVERSITIES.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mq-accent/10 text-mq-accent">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">Micro-aprendizaje</p>
                  <p className="mt-1 text-slate-600">
                    Sesiones desde 4 minutos. Estudia entre turnos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mq-accent/10 text-mq-accent">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">Cero relleno</p>
                  <p className="mt-1 text-slate-600">
                    Solo los temas que realmente evalúan las universidades colombianas. Retroalimentación al instante.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
              <p className="text-xl font-medium italic text-slate-700">
                &ldquo;El diagnóstico me mostró en 10 minutos qué temas tenía flojos. Dejé de estudiar
                a ciegas y empecé a practicar solo lo que el examen me puede tumbar.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mq-accent/10 border border-mq-accent/20 font-bold text-mq-accent">
                  MR
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Médico en preparación</p>
                  <p className="text-xs text-slate-500">R2 · Objetivo cirugía general</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                DIAGNÓSTICO GRATIS DISPONIBLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

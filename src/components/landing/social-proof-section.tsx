"use client";

import { Users, Star } from "lucide-react";
import { TRUST_UNIVERSITIES } from "@/lib/brand";
import { formatUserCount, usePublicStats } from "@/hooks/use-public-stats";

export function SocialProofSection() {
  const { stats, loading } = usePublicStats();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-mq-accent">
              Credibilidad
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Médicos en Colombia confían en Método Q
            </p>
            <p className="mt-6 text-lg leading-relaxed text-mq-muted">
              {loading
                ? "Comunidad de preparación para residencia médica con entrenamiento medible."
                : `${formatUserCount(stats.displayUsers)} médicos registrados y ${stats.completedSessions} sesiones de entrenamiento registradas en la plataforma.`}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {TRUST_UNIVERSITIES.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-mq-muted"
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
                  <p className="text-lg font-bold text-white">Perfil de debilidades real</p>
                  <p className="mt-1 text-mq-muted">
                    Cada sesión actualiza tus temas fuertes y débiles para enfocar el estudio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mq-accent/10 text-mq-accent">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Simulacros tipo examen</p>
                  <p className="mt-1 text-mq-muted">
                    Practica bajo tiempo con preguntas clínicas y explicación inmediata.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-mq-border bg-mq-surface p-8 shadow-2xl">
              <p className="text-xl font-medium italic text-white/90">
                &ldquo;El diagnóstico me mostró en 10 minutos qué temas tenía flojos. Dejé de estudiar
                a ciegas y empecé a practicar solo lo que el examen me puede tumbar.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mq-accent/20 border border-mq-accent/30 font-bold text-mq-accent">
                  MR
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Médico en preparación</p>
                  <p className="text-xs text-mq-muted">R2 · Objetivo cirugía general</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-mq-border bg-white/[0.02] px-4 py-2 text-xs font-bold text-mq-muted">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                DIAGNÓSTICO GRATIS DISPONIBLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

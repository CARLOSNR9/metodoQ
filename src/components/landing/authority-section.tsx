"use client";

import { Heart, ShieldCheck, Zap } from "lucide-react";

export function AuthoritySection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mq-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-mq-border bg-background/60 p-8 backdrop-blur-xl sm:p-16">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mq-accent/10 text-mq-accent">
              <Zap className="h-6 w-6" />
            </div>
            
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Por qué existe Método Q
            </h2>
            
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-mq-muted">
              <p>
                Método Q nació de una frustración real: el mundo se mueve cada vez más rápido, pero nuestra forma de aprender sigue estancada en métodos lentos y aburridos.
              </p>
              <p>
                Creamos esta herramienta para personas que no tienen tiempo que perder. Estudiantes, profesionales y mentes curiosas que necesitan entender conceptos complejos <span className="font-bold text-white italic">ahora mismo</span>, no dentro de tres horas.
              </p>
              <p>
                Combinamos principios de aprendizaje acelerado con la potencia de la Inteligencia Artificial para darte lo que Google o ChatGPT no te dan: <span className="text-mq-accent font-bold underline decoration-mq-accent/30 underline-offset-4">Claridad Absoluta</span>.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm font-bold text-white">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mq-surface border border-mq-border">
                  <ShieldCheck className="h-5 w-5 text-mq-accent" />
                </div>
                <span>Ciencia del aprendizaje</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-white">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mq-surface border border-mq-border">
                  <Heart className="h-5 w-5 text-mq-accent" />
                </div>
                <span>Enfoque humano</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

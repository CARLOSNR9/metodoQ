"use client";

import { Users, Star, ArrowUpRight } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-mq-accent">
              Credibilidad
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cada vez más personas están aprendiendo con Método Q
            </p>
            <p className="mt-6 text-lg leading-relaxed text-mq-muted">
              No somos solo una herramienta de IA. Somos una comunidad de estudiantes y profesionales que han decidido dejar de perder el tiempo y empezar a entender de verdad.
            </p>
            
            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mq-accent/10 text-mq-accent">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Comunidad en crecimiento</p>
                  <p className="mt-1 text-mq-muted">Usuarios que ya están optimizando sus horas de estudio y obteniendo mejores resultados.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mq-accent/10 text-mq-accent">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Satisfacción real</p>
                  <p className="mt-1 text-mq-muted">La mayoría de nuestros usuarios reporta una mejora inmediata en la comprensión de temas difíciles.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl border border-mq-border bg-mq-surface p-8 shadow-2xl overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-mq-accent opacity-10 transition-transform duration-500 group-hover:scale-150">
                <ArrowUpRight className="h-32 w-32" />
              </div>
              
              <p className="text-xl font-medium italic text-white/90">
                "Método Q me ahorró al menos 2 horas de estudio ayer. Lo que no entendía en 3 links de Google, lo entendí aquí en 10 segundos."
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-mq-accent/20 border border-mq-accent/30 flex items-center justify-center font-bold text-mq-accent">
                  JD
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Usuario de Acceso Anticipado</p>
                  <p className="text-xs text-mq-muted">Estudiante de Ingeniería</p>
                </div>
              </div>
            </div>
            
            {/* Trust badge */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-mq-border bg-white/[0.02] px-4 py-2 text-xs font-bold text-mq-muted">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                PRUEBA GRATUITA DISPONIBLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { DemoVideo } from "./demo-video";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-mq-border/80">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[500px] w-[120%] rounded-[100%] bg-[radial-gradient(ellipse_at_50%_0%,rgb(0_209_255/0.18),transparent_60%)] sm:h-[600px]" />
        <div className="absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/30 bg-mq-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-mq-accent sm:text-xs">
          <span className="flex h-1.5 w-1.5 rounded-full bg-mq-accent animate-pulse" />
          Nuevo 🚀
        </div>

        <h1 className="mt-8 text-balance text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Aprende cualquier tema en <span className="text-mq-accent">minutos</span>, no en horas
        </h1>
        
        <p className="mt-8 max-w-3xl text-balance text-lg font-medium leading-relaxed text-mq-muted sm:text-xl lg:text-2xl">
          Método Q combina inteligencia artificial y una técnica de estudio comprobada para explicarte lo complejo de forma <span className="text-white">simple, clara y rápida</span>.
        </p>

        <div className="mt-12 flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#precios"
              className="inline-flex min-h-[3.75rem] items-center justify-center rounded-2xl bg-mq-accent px-8 text-lg font-bold text-mq-accent-foreground shadow-[0_0_30px_rgba(0,209,255,0.4)] transition duration-300 hover:-translate-y-1 hover:brightness-110 active:translate-y-0 sm:min-w-[16rem]"
            >
              👉 Empieza gratis ahora
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex min-h-[3.75rem] items-center justify-center rounded-2xl border border-mq-border-strong bg-white/[0.04] px-8 text-lg font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white/[0.08] active:scale-[0.98] sm:min-w-[16rem]"
            >
              👉 Ver cómo funciona
            </Link>
          </div>
          
          <div className="flex items-center gap-3 text-sm font-medium text-mq-muted">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-mq-accent" />
              Sin tarjeta
            </span>
            <span className="h-1 w-1 rounded-full bg-mq-border-strong" />
            <span>Acceso inmediato</span>
          </div>
        </div>

        {/* Support Text */}
        <p className="mt-16 text-sm font-bold uppercase tracking-[0.2em] text-mq-muted/60">
          🔥 Mira cómo funciona en menos de 30 segundos
        </p>

        {/* Demo Visual */}
        <DemoVideo />
      </div>
    </section>
  );
}

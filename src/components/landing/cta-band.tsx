"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export type CtaBandProps = {
  title?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  className?: string;
};

export function CtaBand({
  title = "Empieza a aprender diferente desde hoy",
  subtitle = "No necesitas más horas de estudio. Necesitas un mejor método.",
  cta = { label: "👉 Empieza gratis ahora", href: "#precios" },
  className,
}: CtaBandProps) {
  return (
    <aside
      className={`border-t border-mq-border bg-gradient-to-br from-mq-accent/[0.08] via-background to-background ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-8 rounded-[2rem] border border-mq-border-strong bg-background/50 p-8 text-center shadow-[0_24px_80px_-32px_rgb(0_209_255/0.3)] backdrop-blur-sm sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mq-muted sm:text-xl">
              {subtitle}
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <Link
              href={cta.href}
              className="inline-flex min-h-[4rem] items-center justify-center rounded-2xl bg-mq-accent px-10 text-xl font-bold text-mq-accent-foreground shadow-[0_0_30px_rgba(0,209,255,0.4)] transition duration-300 hover:-translate-y-1 hover:brightness-110 active:translate-y-0 min-w-[18rem]"
            >
              {cta.label}
            </Link>
            
            <div className="flex items-center gap-3 text-sm font-bold text-mq-muted">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-mq-accent" />
                Sin tarjeta
              </span>
              <span className="h-1 w-1 rounded-full bg-mq-border-strong" />
              <span>Acceso inmediato</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

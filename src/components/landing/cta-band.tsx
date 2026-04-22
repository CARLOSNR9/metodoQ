"use client";

import Link from "next/link";
import { trackClickDemo } from "@/lib/analytics/events";

export type CtaBandProps = {
  title?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function CtaBand({
  title = "Deja de acumular horas. Empieza a acumular aciertos.",
  subtitle = "Haz 5 preguntas gratis, recibe tu prioridad de estudio y entra hoy mismo al flujo real de Metodo Q.",
  cta = { label: "Haz 5 preguntas gratis", href: "/demo" },
  secondaryCta = { label: "Cómo funciona", href: "#como-funciona" },
  className,
}: CtaBandProps) {
  return (
    <aside
      className={`border-t border-mq-border bg-gradient-to-br from-mq-accent/[0.08] via-background to-background ${className ?? ""}`}
      aria-labelledby="cta-band-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 rounded-2xl border border-mq-border-strong bg-background/50 p-6 shadow-[0_24px_80px_-32px_rgb(0_209_255/0.35)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-8 lg:p-10">
          <div className="max-w-xl">
            <p className="inline-flex rounded-full border border-mq-accent/35 bg-mq-accent/15 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-mq-accent">
              Cupos limitados en sesiones en vivo · acceso inmediato
            </p>
            <h2
              id="cta-band-heading"
              className="mt-4 text-balance text-xl font-semibold leading-snug tracking-tight sm:text-2xl lg:text-[1.65rem] lg:leading-snug"
            >
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mq-muted sm:text-base">
              {subtitle}
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:min-w-[12rem]">
            <Link
              href={cta.href}
              onClick={() => {
                if (cta.href === "/demo") {
                  trackClickDemo();
                }
              }}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-center text-[0.9375rem] font-semibold text-mq-accent-foreground shadow-[0_1px_0_rgb(255_255_255/0.14)_inset,0_12px_40px_-16px_rgb(0_209_255/0.55)] transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_1px_0_rgb(255_255_255/0.18)_inset,0_18px_50px_-14px_rgb(0_209_255/0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent active:translate-y-0"
            >
              {cta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-mq-border bg-transparent px-5 text-sm font-semibold text-foreground/95 transition duration-200 hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { trackClickDemo, trackHeroVariantA, trackHeroVariantB } from "@/lib/analytics/events";

export type HeroCta = {
  label: string;
  href: string;
};

export type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  footer?: ReactNode;
  className?: string;
};

const defaultDescription =
  "Entrena con items tipo MIR, mide lo que fallas en serio y prioriza: menos ruido, más decisiones clínicas acertadas el día del examen.";

export function HeroSection({
  title: propTitle,
  subtitle = "Menos teoría infinita. Más aciertos donde te juegas la plaza.",
  description = defaultDescription,
  primaryCta = { label: "Haz 5 preguntas gratis", href: "/demo" },
  secondaryCta = { label: "Ver el método", href: "#como-funciona" },
  footer,
  className,
}: HeroSectionProps) {
  const defaultVariantA = "Entrena como se evalúa. Entra a residencia.";
  const variantB = "Haz preguntas reales. Mejora tu puntaje.";

  const [title, setTitle] = useState(propTitle ?? defaultVariantA);

  useEffect(() => {
    if (propTitle && propTitle !== defaultVariantA) return;

    let variant = localStorage.getItem("ab_hero_variant");
    if (!variant) {
      variant = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem("ab_hero_variant", variant);
    }

    if (variant === "B") {
      setTitle(variantB);
      trackHeroVariantB();
    } else {
      setTitle(defaultVariantA);
      trackHeroVariantA();
    }
  }, [propTitle]);

  return (
    <section
      className={`relative isolate overflow-hidden border-b border-mq-border/80 ${className ?? ""}`}
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[420px] w-[120%] rounded-[100%] bg-[radial-gradient(ellipse_at_50%_0%,rgb(0_209_255/0.14),transparent_58%)] sm:h-[520px]" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="max-w-2xl">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
            Método Q
          </p>
          <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-xs">
            MIR · preparación activa
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-balance text-[2.125rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl sm:leading-[1.06] lg:text-[3.25rem] lg:leading-[1.05]"
          >
            {title}
          </h1>
          <p className="mt-5 text-lg font-medium leading-snug text-white/90 sm:text-xl sm:leading-snug">
            {subtitle}
          </p>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-mq-muted sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-11 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <Link
            href={primaryCta.href}
            onClick={() => {
              if (primaryCta.href === "/demo") {
                trackClickDemo();
              }
            }}
            className="inline-flex min-h-[3.5rem] w-full items-center justify-center rounded-xl bg-mq-accent px-7 text-[0.9375rem] font-semibold text-mq-accent-foreground shadow-[0_1px_0_rgb(255_255_255/0.14)_inset,0_14px_44px_-18px_rgb(0_209_255/0.55)] transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent active:translate-y-0 sm:w-auto sm:min-w-[13rem]"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex min-h-[3.5rem] w-full items-center justify-center rounded-xl border border-mq-border-strong bg-white/[0.035] px-7 text-[0.9375rem] font-semibold text-foreground backdrop-blur-sm transition duration-200 hover:border-white/22 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent active:scale-[0.99] sm:w-auto sm:min-w-[13rem]"
          >
            {secondaryCta.label}
          </Link>
        </div>

        <p className="mt-10 max-w-lg text-xs leading-relaxed text-mq-muted sm:text-sm">
          Sin instalar nada. Pensado para encajar entre guardias, rotaciones y
          el ritmo real de un médico MIR.
        </p>

        {footer ? (
          <div className="mt-6 text-sm text-mq-muted">{footer}</div>
        ) : null}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { trackClickDemo } from "@/lib/analytics/events";

export type PricingPlan = {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  badge?: string;
};

export type PricingSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  plans?: PricingPlan[];
  guarantee?: string;
  className?: string;
};

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "0 €",
    priceNote: "para validar el método",
    description: "Ideal si quieres medir ritmo y ver tus primeras lagunas sin compromiso.",
    features: [
      "Acceso limitado al banco (para probar flujo real)",
      "Resumen de errores por tema",
      "1 objetivo de estudio priorizado",
    ],
    cta: { label: "Haz 5 preguntas gratis", href: "/demo" },
    badge: "Empieza aquí",
  },
  {
    name: "Pro",
    price: "Consultar",
    priceNote: "facturación flexible",
    description:
      "Para quien ya sabe que el MIR es práctica + priorización, no solo horas delante del PDF.",
    features: [
      "Banco ampliado y sesiones guiadas",
      "Detección y refuerzo de lagunas",
      "Plan sugerido según tus fallos",
      "Sesiones en vivo con medico que ya paso el MIR",
      "Soporte por email",
    ],
    cta: { label: "Hablar por Pro", href: "/register" },
    highlighted: true,
    badge: "Mas elegido · cupos limitados",
  },
];

export function PricingSection({
  id = "precios",
  eyebrow = "Inversión",
  title = "Empieza sin fricción. Escala cuando el método te demuestre valor.",
  lead = "Haz 5 preguntas gratis. Si encaja con tu ritmo (guardias, rotaciones, vida), subes de plan cuando quieras.",
  plans = defaultPlans,
  guarantee = "Si el plan gratuito no te aporta claridad sobre qué estudiar, no tiene sentido pasar a Pro: por eso el entry es real, no una demo vacía.",
  className,
}: PricingSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-t border-mq-border bg-mq-surface ${className ?? ""}`}
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
          {eyebrow}
        </p>
        <h2
          id="pricing-heading"
          className="mt-5 max-w-2xl text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-mq-muted sm:text-lg">
          {lead}
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-8 ${
                plan.highlighted
                  ? "border-mq-accent/40 bg-mq-surface-raised shadow-[0_0_0_1px_rgb(0_209_255/0.15),0_24px_80px_-40px_rgb(0_209_255/0.35)] hover:-translate-y-1"
                  : "border-mq-border bg-background/45 hover:border-white/14"
              }`}
            >
              {plan.badge ? (
                <span className="absolute -top-3 right-5 rounded-full border border-mq-accent/35 bg-mq-accent/15 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-mq-accent">
                  {plan.badge}
                </span>
              ) : null}
              <div className="flex flex-wrap items-end justify-between gap-2 gap-y-1">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="text-right">
                  <p className="text-2xl font-semibold tracking-tight text-mq-accent">
                    {plan.price}
                  </p>
                  {plan.priceNote ? (
                    <p className="text-xs text-mq-muted">{plan.priceNote}</p>
                  ) : null}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mq-muted">
                {plan.description}
              </p>
              <ul className="mt-7 flex flex-col gap-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mq-accent/18 text-mq-accent"
                      aria-hidden
                    >
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="leading-snug text-foreground/92">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.cta.href}
                onClick={() => {
                  if (plan.cta.href === "/demo") {
                    trackClickDemo();
                  }
                }}
                className={`mt-9 inline-flex min-h-14 w-full items-center justify-center rounded-xl px-5 text-[0.9375rem] font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent active:scale-[0.99] ${
                  plan.highlighted
                    ? "bg-mq-accent text-mq-accent-foreground shadow-[0_1px_0_rgb(255_255_255/0.12)_inset] hover:-translate-y-0.5 hover:brightness-110"
                    : "border border-mq-border-strong bg-white/[0.05] text-foreground hover:border-white/22 hover:bg-white/10"
                }`}
              >
                {plan.cta.label}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-pretty text-sm leading-relaxed text-mq-muted sm:text-base">
          {guarantee}
        </p>
      </div>
    </section>
  );
}

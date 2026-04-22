"use client";

import Link from "next/link";
import { trackClickUpgrade } from "@/lib/analytics/events";
import { getFirebaseAuth } from "@/lib/firebase";

const plans = [
  {
    id: "pro",
    name: "PRO",
    isRecommended: true,
    benefits: [
      "Clases en vivo con médico aprobado",
      "Estrategias reales, cero teoría",
      "Resolución de dudas en vivo",
      "Acceso ilimitado a simulacros",
      "Análisis de rendimiento PRO",
    ],
  },
  {
    id: "pro-plus",
    name: "PRO+",
    isRecommended: false,
    benefits: [
      "todo lo anterior",
      "placeholder para mentoria futura",
    ],
  },
];

export default function UpgradePage() {
  const getCurrentUserId = () => {
    try {
      return getFirebaseAuth().currentUser?.uid;
    } catch {
      return undefined;
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-[0_24px_60px_-32px_rgb(0_209_255/0.45)] sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Mejora tu acceso
          </h1>
          <p className="mt-3 text-sm text-mq-muted sm:text-base">
            Elige el plan que mejor se adapta a tu ritmo de entrenamiento en Metodo Q.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {plans.map((plan) => (
              <section
                key={plan.id}
                className={`rounded-2xl border p-5 transition-all duration-200 sm:p-6 ${
                  plan.isRecommended
                    ? "border-mq-accent bg-[#0A1F44] shadow-[0_16px_44px_-24px_rgb(0_209_255/0.75)]"
                    : "border-mq-border-strong bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                  {plan.isRecommended ? (
                    <span className="rounded-full border border-mq-accent/50 bg-mq-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-mq-accent">
                      Recomendado
                    </span>
                  ) : null}
                </div>

                <ul className="mt-5 space-y-2">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-foreground sm:text-base">
                      - {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/checkout?plan=${encodeURIComponent(plan.name)}`}
                  onClick={() => {
                    trackClickUpgrade({ userId: getCurrentUserId() });
                  }}
                  className={`mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 text-sm font-semibold transition duration-150 ${
                    plan.isRecommended
                      ? "bg-mq-accent text-mq-accent-foreground hover:brightness-110"
                      : "border border-mq-border-strong bg-white/[0.03] text-foreground hover:border-white/30 hover:bg-white/[0.07]"
                  }`}
                >
                  Elegir este plan
                </Link>
              </section>
            ))}
          </div>

          <div className="mt-7 flex">
            <Link
              href="/dashboard"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-mq-border-strong bg-white/[0.03] px-6 text-sm font-semibold text-foreground transition duration-150 hover:border-white/30 hover:bg-white/[0.07]"
            >
              Volver al dashboard
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

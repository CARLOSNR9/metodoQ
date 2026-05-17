"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { getFirebaseAuth } from "@/lib/firebase";
import {
  formatCOP,
  getPlanBySlug,
  parseBillingCycle,
  type BillingCycle,
} from "@/lib/plans/config";
import { trackClickUpgrade } from "@/lib/analytics/events";

function CheckoutPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPaying, setIsPaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const planSlug = searchParams.get("plan") ?? "pro";
  const cycle = (parseBillingCycle(searchParams.get("cycle")) ?? 3) as BillingCycle;
  const plan = useMemo(() => getPlanBySlug(planSlug), [planSlug]);

  const price = plan && plan.id !== "FREE" && plan.id !== "RESIDENTE" ? plan.prices[cycle] : null;

  const handleConfirmPayment = async () => {
    if (isPaying || !plan || plan.id === "FREE" || plan.id === "RESIDENTE") {
      return;
    }

    setErrorMessage("");
    setIsPaying(true);

    try {
      const currentUser = getFirebaseAuth().currentUser;
      if (!currentUser) {
        router.push(`/login?redirect=${encodeURIComponent(`/checkout?plan=${planSlug}&cycle=${cycle}`)}`);
        return;
      }

      trackClickUpgrade({ userId: currentUser.uid });

      const idToken = await currentUser.getIdToken();
      const response = await fetch("/api/payments/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ plan: plan.id, cycle }),
      });

      const payload = (await response.json()) as {
        checkoutUrl?: string;
        error?: string;
      };

      if (!response.ok || !payload.checkoutUrl) {
        throw new Error(payload.error ?? "No se pudo iniciar el checkout.");
      }

      window.location.href = payload.checkoutUrl;
    } catch (error) {
      console.error("Error al iniciar checkout.", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No pudimos iniciar el pago. Verifica tu sesión e intenta nuevamente.",
      );
      setIsPaying(false);
    }
  };

  if (!plan || plan.id === "FREE" || plan.id === "RESIDENTE") {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <article className="rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 sm:p-8 text-center">
            <h1 className="text-2xl font-semibold text-white">Plan no disponible para checkout</h1>
            <p className="mt-3 text-sm text-mq-muted">
              {plan?.id === "RESIDENTE"
                ? "El plan Residente requiere postulación. Visita la página de postulación."
                : "Selecciona un plan de pago válido."}
            </p>
            <Link
              href={plan?.id === "RESIDENTE" ? "/residente" : "/dashboard/planes"}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground"
            >
              {plan?.id === "RESIDENTE" ? "Ir a postulación" : "Ver planes"}
            </Link>
          </article>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-[0_24px_60px_-32px_rgb(0_209_255/0.45)] sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Confirmar tu plan
          </h1>
          <p className="mt-3 text-sm text-mq-muted sm:text-base">
            Revisa el resumen y continúa al pago seguro con Stripe.
          </p>

          <section className="mt-6 rounded-2xl border border-mq-border-strong bg-white/[0.03] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-accent">
              Resumen
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Plan {plan.name} · {cycle} {cycle === 1 ? "mes" : "meses"}
            </h2>
            {price && (
              <p className="mt-3 text-lg font-bold text-mq-accent">
                {formatCOP(cycle === 1 ? price.monthly : price.total)}
                <span className="ml-2 text-sm font-normal text-mq-muted">
                  {cycle === 1 ? "cobro mensual recurrente" : "pago único por el período"}
                </span>
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {plan.features.map((benefit) => (
                <li key={benefit} className="text-sm text-foreground">
                  · {benefit}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleConfirmPayment}
              disabled={isPaying}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPaying ? "Redirigiendo a Stripe..." : "Continuar al pago"}
            </button>
            <Link
              href="/dashboard/planes"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-mq-border-strong bg-white/[0.03] px-6 text-sm font-semibold text-foreground transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              Volver a planes
            </Link>
          </div>

          {errorMessage ? (
            <p className="mt-4 rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
              {errorMessage}
            </p>
          ) : null}
        </article>
      </section>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
          <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-sm text-mq-muted">Cargando checkout...</p>
          </section>
        </main>
      }
    >
      <CheckoutPageContent />
    </Suspense>
  );
}

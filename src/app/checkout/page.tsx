"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { getFirebaseAuth } from "@/lib/firebase";

const defaultBenefits = [
  "acceso completo",
  "preguntas ilimitadas",
  "dashboard completo",
];

const planBenefits: Record<string, string[]> = {
  PRO: defaultBenefits,
  "PRO+": [...defaultBenefits, "placeholder para mentoria futura"],
};

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPaying, setIsPaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const selectedPlan = useMemo(() => {
    const rawPlan = searchParams.get("plan");
    return rawPlan === "PRO+" ? "PRO+" : "PRO";
  }, [searchParams]);

  const benefits = planBenefits[selectedPlan];

  const handleConfirmDemoPayment = async () => {
    if (isPaying) {
      return;
    }

    setErrorMessage("");
    setIsPaying(true);

    try {
      const currentUser = getFirebaseAuth().currentUser;
      if (!currentUser) {
        throw new Error("Debes iniciar sesion para continuar con el pago.");
      }

      const idToken = await currentUser.getIdToken();
      const response = await fetch("/api/payments/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ plan: selectedPlan }),
      });

      const payload = (await response.json()) as {
        checkoutUrl?: string;
        error?: string;
      };

      if (!response.ok || !payload.checkoutUrl) {
        throw new Error(payload.error ?? "No se pudo iniciar el checkout.");
      }

      router.push(payload.checkoutUrl);
    } catch (error) {
      console.error("No se pudo actualizar el plan tras el pago demo.", error);
      setErrorMessage(
        "No pudimos iniciar el checkout. Verifica tu sesion e intenta nuevamente.",
      );
      setIsPaying(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-[0_24px_60px_-32px_rgb(0_209_255/0.45)] sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Checkout demo
          </h1>
          <p className="mt-3 text-sm text-mq-muted sm:text-base">
            Revisa tu plan y confirma el pago simulado.
          </p>

          <section className="mt-6 rounded-2xl border border-mq-border-strong bg-white/[0.03] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-accent">
              Resumen del plan
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{selectedPlan}</h2>
            <ul className="mt-4 space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="text-sm text-foreground sm:text-base">
                  - {benefit}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleConfirmDemoPayment}
              disabled={isPaying}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPaying ? "Redirigiendo al checkout..." : "Confirmar pago (demo)"}
            </button>
            <Link
              href="/upgrade"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-mq-border-strong bg-white/[0.03] px-6 text-sm font-semibold text-foreground transition duration-150 hover:border-white/30 hover:bg-white/[0.07]"
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

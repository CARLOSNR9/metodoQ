"use client";

import Link from "next/link";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { trackPayment } from "@/lib/analytics/events";
import { getFirebaseAuth } from "@/lib/firebase";
import {
  getPlanDisplayName,
  parseBillingCycle,
  parsePaidPlanId,
} from "@/lib/plans/config";

function SuccessContent() {
  const searchParams = useSearchParams();
  const planId = parsePaidPlanId(searchParams.get("plan"));
  const cycle = parseBillingCycle(searchParams.get("cycle"));

  useEffect(() => {
    let userId: string | undefined;
    try {
      userId = getFirebaseAuth().currentUser?.uid;
    } catch {
      userId = undefined;
    }
    trackPayment({ userId });
  }, []);

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 text-center shadow-[0_24px_60px_-32px_rgb(0_209_255/0.45)] sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¡Acceso desbloqueado!
          </h1>
          <p className="mt-3 text-sm text-mq-muted sm:text-base">
            {planId ? (
              <>
                Tu plan <strong className="text-white">{getPlanDisplayName(planId)}</strong>
                {cycle ? (
                  <>
                    {" "}
                    por <strong className="text-white">{cycle} {cycle === 1 ? "mes" : "meses"}</strong>
                  </>
                ) : null}{" "}
                está activo. Ya puedes entrenar sin límites.
              </>
            ) : (
              "Tu membresía está activa. Ya puedes entrenar sin límites."
            )}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/dashboard/entrenar"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition hover:brightness-110"
            >
              Empezar a entrenar
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-mq-border-strong bg-white/[0.03] px-6 text-sm font-semibold text-foreground transition hover:border-white/30"
            >
              Ir al dashboard
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[calc(100vh-4rem)] flex-1 items-center justify-center bg-[#0A1F44]">
          <p className="text-mq-muted">Confirmando pago...</p>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

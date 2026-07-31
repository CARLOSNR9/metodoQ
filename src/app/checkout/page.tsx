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
import { Check, ArrowRight, Lock, ShieldAlert } from "lucide-react";

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
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-slate-50">
        <section className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 sm:py-20 flex flex-col items-center">
          <article className="w-full rounded-[2rem] border border-slate-200/60 bg-white p-10 text-center shadow-xl">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <ShieldAlert size={32} className="text-slate-400" />
            </div>
            <h1 className="text-2xl font-black text-slate-900">Plan no disponible</h1>
            <p className="mt-3 text-slate-500 font-medium">
              {plan?.id === "RESIDENTE"
                ? "El plan Residente requiere postulación. Visita la página de postulación para más información."
                : "Has seleccionado un plan de pago inválido o gratuito."}
            </p>
            <Link
              href={plan?.id === "RESIDENTE" ? "/residente" : "/dashboard/planes"}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95"
            >
              {plan?.id === "RESIDENTE" ? "Ir a postulación" : "Ver planes disponibles"}
            </Link>
          </article>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-mq-accent/10 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <section className="relative mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 sm:py-20 flex flex-col items-center">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight sm:text-5xl">
            Comienza tu preparación
          </h1>
          <p className="mt-4 text-slate-500 sm:text-lg max-w-lg mx-auto font-medium">
            Estás a un paso de acceder a la plataforma más avanzada para dominar el examen de residencia.
          </p>
        </div>

        <article className="w-full rounded-[2.5rem] border border-white bg-white/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
          
          {/* Plan Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-8 mb-8 gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent mb-2">
                Resumen de tu selección
              </p>
              <h2 className="text-3xl font-black text-slate-900 leading-none">
                Plan {plan.name}
              </h2>
              <p className="text-slate-500 font-medium mt-2">
                Suscripción por {cycle} {cycle === 1 ? "mes" : "meses"}
              </p>
            </div>
            
            {price && (
              <div className="sm:text-right bg-slate-50/80 p-5 rounded-2xl border border-slate-100/50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Total a pagar
                </p>
                <p className="text-4xl font-black text-mq-accent">
                  {formatCOP(cycle === 1 ? price.monthly : price.total)}
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  {cycle === 1 ? "Cobro mensual recurrente" : "Pago único por el período"}
                </p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="mb-10">
            <h3 className="text-sm font-bold text-slate-900 mb-5 uppercase tracking-wide">¿Qué incluye tu plan?</h3>
            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
              {plan.features.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-100/80 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-emerald-600 font-bold" />
                  </div>
                  <span className="leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={handleConfirmPayment}
              disabled={isPaying}
              className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-mq-accent px-8 py-5 text-lg font-black text-white transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 shadow-[0_20px_40px_-15px_rgba(0,102,255,0.4)]"
            >
              {isPaying ? (
                "Conectando de forma segura..."
              ) : (
                <>
                  Continuar al pago seguro <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            
            <Link
              href="/dashboard/planes"
              className="flex w-full items-center justify-center py-4 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              Cambiar plan o ciclo de facturación
            </Link>
          </div>

          {errorMessage ? (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <span className="text-red-600 font-black">!</span>
              </div>
              <p className="text-sm font-medium text-red-800 leading-relaxed pt-1.5">
                {errorMessage}
              </p>
            </div>
          ) : null}

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wide">
            <Lock size={14} />
            <span>Transacción segura y encriptada por Stripe</span>
          </div>
        </article>
      </section>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-slate-50 items-center justify-center">
          <p className="text-sm font-bold text-slate-400 animate-pulse">Cargando checkout...</p>
        </main>
      }
    >
      <CheckoutPageContent />
    </Suspense>
  );
}

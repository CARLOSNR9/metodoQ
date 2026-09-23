"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getFirebaseAuth } from "@/lib/firebase";
import { trackClickUpgrade } from "@/lib/analytics/events";
import { Check, ArrowRight, Lock } from "lucide-react";

/**
 * Checkout dedicado del módulo MIR (pago único, no ligado a un plan).
 * Mismo patrón visual que /checkout, sin selección de plan/ciclo.
 */
function CheckoutMirContent() {
  const router = useRouter();
  const [isPaying, setIsPaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleConfirmPayment = async () => {
    if (isPaying) return;

    setErrorMessage("");
    setIsPaying(true);

    try {
      const currentUser = getFirebaseAuth().currentUser;
      if (!currentUser) {
        router.push(`/login?redirect=${encodeURIComponent("/checkout-mir")}`);
        return;
      }

      trackClickUpgrade({ userId: currentUser.uid });

      const idToken = await currentUser.getIdToken();
      const response = await fetch("/api/payments/mir-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
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
      console.error("Error al iniciar checkout de MIR.", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No pudimos iniciar el pago. Verifica tu sesión e intenta nuevamente.",
      );
      setIsPaying(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-slate-50">
      <section className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 sm:py-20 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight sm:text-5xl">
            Módulo Simulacro MIR
          </h1>
          <p className="mt-4 text-slate-500 sm:text-lg max-w-lg mx-auto font-medium">
            Pago único, acceso independiente de tu plan actual de Método Q.
          </p>
        </div>

        <article className="w-full rounded-[2.5rem] border border-white bg-white/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
          <div className="mb-10">
            <h3 className="text-sm font-bold text-slate-900 mb-5 uppercase tracking-wide">
              ¿Qué incluye?
            </h3>
            <ul className="grid gap-y-4">
              {[
                "Banco de preguntas de examen MIR",
                "Simulacros cronometrados",
                "Seguimiento de tu progreso por tema",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-100/80 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-emerald-600 font-bold" />
                  </div>
                  <span className="leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

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

          <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wide">
            <Lock size={14} />
            <span>Transacción segura y encriptada por Stripe</span>
          </div>
        </article>
      </section>
    </main>
  );
}

export default function CheckoutMirPage() {
  return <CheckoutMirContent />;
}

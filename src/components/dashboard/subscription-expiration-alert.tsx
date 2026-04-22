"use client";

import { useUserPlan } from "@/hooks/use-user-plan";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SubscriptionExpirationAlert() {
  const { plan, expiresAt, loading } = useUserPlan();
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (expiresAt) {
      const expirationDate = new Date(expiresAt);
      const now = new Date();
      const diffMs = expirationDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      setDaysRemaining(diffDays);
    } else {
      setDaysRemaining(null);
    }
  }, [expiresAt]);

  // Mostrar solo si el plan es PRO/PRO_PLUS y faltan 2 días o menos (pero no ha expirado aún)
  if (loading || plan === "FREE" || !expiresAt || daysRemaining === null || daysRemaining > 2 || daysRemaining < 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-rose-500/50 bg-rose-500/10 p-5 shadow-[0_0_40px_-15px_rgba(244,63,94,0.3)] animate-in fade-in zoom-in duration-300">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-rose-400"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Tu acceso PRO vence pronto</h3>
            <p className="text-sm text-rose-200/80">
              {daysRemaining === 0 ? "Vence hoy mismo." : `Tu suscripción termina en ${daysRemaining} ${daysRemaining === 1 ? 'día' : 'días'}.`} No pierdas tus beneficios.
            </p>
          </div>
        </div>
        
        <Link
          href="/dashboard/perfil"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-rose-500 px-8 text-sm font-bold text-white transition-all duration-200 hover:bg-rose-600 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] active:scale-95 sm:w-auto"
        >
          Renovar ahora
        </Link>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rose-500/10 blur-2xl" />
    </div>
  );
}

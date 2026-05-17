"use client";

import { useUserPlan } from "@/hooks/use-user-plan";
import { hasPaidPlan } from "@/lib/plans/access";
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

  if (
    loading ||
    !hasPaidPlan(plan) ||
    !expiresAt ||
    daysRemaining === null ||
    daysRemaining > 7 ||
    daysRemaining < 0
  ) {
    return null;
  }

  const urgent = daysRemaining <= 2;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-5 animate-in fade-in zoom-in duration-300 ${
        urgent
          ? "border-rose-500/50 bg-rose-500/10 shadow-[0_0_40px_-15px_rgba(244,63,94,0.3)]"
          : "border-mq-accent/30 bg-mq-accent/5"
      }`}
    >
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
              urgent ? "bg-rose-500/20" : "bg-mq-accent/15"
            }`}
          >
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
              className={urgent ? "text-rose-400" : "text-mq-accent"}
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Tu membresía vence pronto</h3>
            <p className={`text-sm ${urgent ? "text-rose-200/80" : "text-mq-muted"}`}>
              {daysRemaining === 0 ? "Vence hoy mismo." : `Tu suscripción termina en ${daysRemaining} ${daysRemaining === 1 ? 'día' : 'días'}.`} No pierdas tus beneficios.
            </p>
          </div>
        </div>
        
        <Link
          href="/dashboard/planes"
          className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-8 text-sm font-bold text-white transition-all duration-200 active:scale-95 sm:w-auto ${
            urgent
              ? "bg-rose-500 hover:bg-rose-600 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]"
              : "bg-mq-accent text-mq-accent-foreground hover:brightness-110"
          }`}
        >
          Renovar ahora
        </Link>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rose-500/10 blur-2xl" />
    </div>
  );
}

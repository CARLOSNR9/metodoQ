"use client";

import { useUserPlan } from "@/hooks/use-user-plan";
import { useEffect, useState } from "react";

const MESSAGES = [
  "Estás mejorando, no te detengas",
  "Cada día te acerca a la residencia",
];

export function MotivationalReminder() {
  const { plan, expiresAt, loading } = useUserPlan();
  const [message, setMessage] = useState("");
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);

  useEffect(() => {
    setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
  }, []);

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

  // Mostrar solo si hay un plan activo, con fecha de expiración, y faltan entre 3 y 14 días
  // Si faltan 2 o menos, se muestra la SubscriptionExpirationAlert (más urgente)
  if (loading || plan === "FREE" || !expiresAt || daysRemaining === null || daysRemaining > 14 || daysRemaining <= 2) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-400"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
            Foco en la meta • {daysRemaining} {daysRemaining === 1 ? 'día' : 'días'} restante{daysRemaining !== 1 ? 's' : ''} de Pro
          </p>
          <p className="mt-1 text-sm font-medium text-white sm:text-base">
            {message}
          </p>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  );
}

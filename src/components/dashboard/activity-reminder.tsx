"use client";

import { useUserPlan } from "@/hooks/use-user-plan";
import { getUserActivityStatus } from "@/lib/auth";

export function ActivityReminder() {
  const { lastActiveAt, loading } = useUserPlan();

  if (loading || !lastActiveAt) return null;

  const status = getUserActivityStatus(lastActiveAt);

  if (status === "activo") return null;

  const config = {
    riesgo: {
      message: "No pierdas el ritmo, vuelve hoy",
      icon: (
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
          className="text-amber-400"
        >
          <path d="M4 14.71V21h6.29l9.66-9.66-6.3-6.3z" />
          <path d="m18.01 4.29 1.7 1.7L18.42 7.28l-1.71-1.71L18.01 4.29z" />
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-200",
      accent: "text-amber-400",
    },
    inactivo: {
      message: "Tu progreso se está enfriando… retoma hoy",
      icon: (
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
          className="text-rose-400"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      ),
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      text: "text-rose-200",
      accent: "text-rose-400",
    },
  }[status];

  if (!config) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${config.border} ${config.bg} p-4 sm:p-5`}
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5`}>
          {config.icon}
        </div>
        <div className="flex-1">
          <p className={`text-xs font-bold uppercase tracking-widest ${config.accent}`}>
            {status === "riesgo" ? "Aviso de ritmo" : "Alerta de inactividad"}
          </p>
          <p className={`mt-1 text-sm font-medium ${config.text} sm:text-base`}>
            {config.message}
          </p>
        </div>
        <div className="hidden sm:block">
          <div className={`h-1.5 w-1.5 rounded-full ${config.accent} animate-pulse`} />
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${config.bg} blur-3xl`} />
    </div>
  );
}

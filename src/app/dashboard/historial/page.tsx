"use client";

import Link from "next/link";
import { AttemptHistory } from "@/components/demo/attempt-history";
import { useAuthGuard } from "@/hooks/use-auth-guard";

export default function HistorialPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");

  if (isCheckingAuth || !user) {
    return (
      <section className="h-48 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Historial</h1>
            <p className="mt-2 text-sm text-mq-muted sm:text-base">
              Todas tus sesiones de entrenamiento, diagnósticos y simulacros.
            </p>
          </div>
          <Link
            href="/dashboard/entrenar"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-accent px-5 text-sm font-semibold text-mq-accent-foreground hover:brightness-110"
          >
            Nueva sesión
          </Link>
        </div>
      </section>

      <AttemptHistory userId={user.uid} maxItems={50} showSessionType />
    </div>
  );
}

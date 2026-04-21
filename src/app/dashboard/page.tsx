"use client";

import { ProgressChart, SummaryCards } from "@/components/dashboard";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");

  if (isCheckingAuth || !user) {
    return (
      <section className="space-y-4">
        <div className="h-24 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-28 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <header>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-mq-muted sm:text-base">
          Bienvenido a tu panel principal. Desde aqui puedes entrenar, revisar tu
          historial y gestionar tu perfil.
        </p>
          </div>
          <Link
            href="/demo"
            className="inline-flex min-h-13 items-center justify-center rounded-xl bg-mq-accent px-6 text-base font-semibold text-mq-accent-foreground shadow-[0_14px_34px_-16px_rgb(0_209_255/0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            Entrenar ahora
          </Link>
        </div>
      </header>

      <SummaryCards userId={user.uid} />
      <ProgressChart userId={user.uid} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mq-border-strong hover:bg-mq-surface-raised">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
            Demo / Entrenar
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Practicar preguntas
          </h2>
          <p className="mt-2 text-sm text-mq-muted">
            Inicia una nueva sesion de entrenamiento para mejorar tu rendimiento.
          </p>
        </article>

        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mq-border-strong hover:bg-mq-surface-raised">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
            Historial
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Resultados recientes
          </h2>
          <p className="mt-2 text-sm text-mq-muted">
            Visualiza tus intentos anteriores y detecta areas de mejora.
          </p>
        </article>

        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mq-border-strong hover:bg-mq-surface-raised sm:col-span-2 xl:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
            Perfil
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            Configuracion de cuenta
          </h2>
          <p className="mt-2 text-sm text-mq-muted">
            Actualiza tus datos personales y preferencias de uso.
          </p>
        </article>
      </div>
    </section>
  );
}

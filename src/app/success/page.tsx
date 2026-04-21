"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 text-center shadow-[0_24px_60px_-32px_rgb(0_209_255/0.45)] sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            !Acceso desbloqueado 🚀!
          </h1>
          <p className="mt-3 text-sm text-mq-muted sm:text-base">
            Ya puedes entrenar sin limites y mejorar tu rendimiento
          </p>

          <div className="mt-7 flex justify-center">
            <Link
              href="/dashboard"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 sm:w-auto"
            >
              Ir al dashboard
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

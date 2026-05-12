"use client";

import { useState } from "react";
import { createUserAction } from "@/app/admin/actions";

export function AdminUserForm() {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await createUserAction(formData);

    setIsPending(false);
    if (result.error) {
      setMessage({ type: "error", text: result.error });
    } else {
      setMessage({ type: "success", text: "Usuario creado exitosamente." });
      (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <section className="mt-8 rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Gestión Manual de Usuarios</h2>
        <p className="mt-1 text-sm text-mq-muted">
          Crea usuarios directamente sin pasar por el flujo de registro público.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
              Nombre Completo
            </label>
            <input
              name="displayName"
              type="text"
              required
              placeholder="Ej: Juan Pérez"
              className="w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white placeholder-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
              Correo Electrónico
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="juan@ejemplo.com"
              className="w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white placeholder-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
              Contraseña Temporal
            </label>
            <input
              name="password"
              type="text"
              required
              placeholder="Min. 6 caracteres"
              className="w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white placeholder-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
              Plan Asignado
            </label>
            <select
              name="plan"
              className="w-full appearance-none rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
            >
              <option value="FREE">FREE</option>
              <option value="PRO">PRO</option>
              <option value="PRO_PLUS">PRO_PLUS</option>
            </select>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center rounded-lg bg-mq-accent px-6 py-3 font-semibold text-[#0A1F44] transition-all hover:bg-mq-accent-hover disabled:opacity-50 sm:w-auto"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Procesando...
              </span>
            ) : (
              "Crear Usuario"
            )}
          </button>
        </div>

        {message && (
          <div
            className={`mt-4 rounded-lg border p-4 ${
              message.type === "success"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                : "border-rose-500/30 bg-rose-500/10 text-rose-200"
            }`}
          >
            <p className="text-sm">{message.text}</p>
          </div>
        )}
      </form>
    </section>
  );
}

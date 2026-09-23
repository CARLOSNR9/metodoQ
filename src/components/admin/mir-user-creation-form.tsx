"use client";

import { useState } from "react";
import { Globe2 } from "lucide-react";
import { createMirUserAction } from "@/app/admin/actions";
import { getFirebaseAuth } from "@/lib/firebase";

/**
 * Creación de cuentas para el módulo MIR: no es un plan FREE/BASICO/PRO/
 * RESIDENTE, no tiene universidad ni especialidad (no aplican a este
 * examen). El usuario creado aquí queda con el módulo MIR completo
 * desbloqueado de inmediato — pensado para cerrar una venta negociada por
 * WhatsApp.
 */
export function MirUserCreationForm() {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(
    null,
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const currentUser = getFirebaseAuth().currentUser;
    if (currentUser) {
      const idToken = await currentUser.getIdToken();
      formData.set("idToken", idToken);
    }

    const result = await createMirUserAction(formData);

    setIsPending(false);
    if (result.error) {
      setMessage({ type: "error", text: result.error });
    } else {
      setMessage({ type: "success", text: "Usuario MIR creado con acceso activo." });
      form.reset();
    }
  }

  return (
    <section className="rounded-xl border border-mq-premium-gold/30 bg-[#0A1F44] p-6 shadow-xl">
      <div className="mb-6">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
          <Globe2 className="h-3.5 w-3.5" />
          Módulo internacional
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white">Crear usuario MIR</h2>
        <p className="mt-1 text-sm text-slate-300">
          Cuenta dedicada al módulo MIR (examen internacional): no usa el sistema de planes
          FREE/BASICO/PRO/RESIDENTE ni universidad/especialidad. Queda con el módulo MIR
          completo desbloqueado de inmediato. Úsalo para cerrar una venta negociada por
          WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Nombre completo
            </label>
            <input
              name="displayName"
              type="text"
              required
              placeholder="Ej: Juan Pérez"
              className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-white placeholder:text-slate-500 outline-none transition-all focus:border-mq-premium-gold focus:ring-1 focus:ring-mq-premium-gold"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Correo electrónico
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="juan@ejemplo.com"
              className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-white placeholder:text-slate-500 outline-none transition-all focus:border-mq-premium-gold focus:ring-1 focus:ring-mq-premium-gold"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Contraseña temporal
          </label>
          <input
            name="password"
            type="text"
            required
            minLength={6}
            placeholder="Mín. 6 caracteres"
            className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-white placeholder:text-slate-500 outline-none transition-all focus:border-mq-premium-gold focus:ring-1 focus:ring-mq-premium-gold"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center rounded-lg bg-mq-premium-gold px-6 py-3 font-semibold text-[#0A1F44] transition-all hover:brightness-110 disabled:opacity-50 sm:w-auto"
          >
            {isPending ? "Procesando..." : "Crear usuario MIR"}
          </button>
        </div>

        {message ? (
          <div
            className={`mt-4 rounded-lg border p-4 ${
              message.type === "success"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                : "border-rose-500/30 bg-rose-500/10 text-rose-200"
            }`}
          >
            <p className="text-sm">{message.text}</p>
          </div>
        ) : null}
      </form>
    </section>
  );
}

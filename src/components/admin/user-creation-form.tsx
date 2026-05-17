"use client";

import { useState } from "react";
import { createUserAction } from "@/app/admin/actions";
import { getFirebaseAuth } from "@/lib/firebase";
import { SelectField } from "@/components/ui/select-field";
import { getRoleLabel, USER_ROLES, type UserRole } from "@/lib/roles";
import type { UserPlan } from "@/lib/auth";

const PLAN_OPTIONS: { value: UserPlan; label: string }[] = [
  { value: "FREE", label: "Gratis (FREE)" },
  { value: "BASICO", label: "Básico" },
  { value: "PRO", label: "Pro" },
  { value: "RESIDENTE", label: "Residente" },
];

const ROLE_OPTIONS: { value: UserRole; label: string }[] = USER_ROLES.map((role) => ({
  value: role,
  label: getRoleLabel(role),
}));

export function AdminUserForm() {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

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

    const result = await createUserAction(formData);

    setIsPending(false);
    if (result.error) {
      setMessage({ type: "error", text: result.error });
    } else {
      setMessage({ type: "success", text: "Usuario creado exitosamente." });
      form.reset();
    }
  }

  return (
    <section className="mt-8 rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Gestión Manual de Usuarios</h2>
        <p className="mt-1 text-sm text-mq-muted">
          Crea usuarios con plan de estudio y rol de acceso (estudiante, profesor o administrador).
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
              Nombre completo
            </label>
            <input
              name="displayName"
              type="text"
              required
              placeholder="Ej: Juan Pérez"
              className="w-full rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2.5 text-white placeholder:text-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
              Correo electrónico
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="juan@ejemplo.com"
              className="w-full rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2.5 text-white placeholder:text-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
              Contraseña temporal
            </label>
            <input
              name="password"
              type="text"
              required
              minLength={6}
              placeholder="Mín. 6 caracteres"
              className="w-full rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2.5 text-white placeholder:text-mq-muted/50 outline-none transition-all focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
            />
          </div>
          <SelectField
            label="Plan asignado"
            name="plan"
            defaultValue="FREE"
            options={PLAN_OPTIONS}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            label="Rol de acceso"
            name="role"
            defaultValue="student"
            options={ROLE_OPTIONS}
          />
          <div className="flex items-end">
            <p className="rounded-lg border border-mq-border/60 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-mq-muted">
              <strong className="text-white">Admin:</strong> panel completo.{" "}
              <strong className="text-white">Moderador:</strong> postulaciones Residente.{" "}
              <strong className="text-white">Profesor:</strong> preguntas y clases.{" "}
              <strong className="text-white">Estudiante:</strong> dashboard de aprendizaje.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center rounded-lg bg-mq-accent px-6 py-3 font-semibold text-[#0A1F44] transition-all hover:brightness-110 disabled:opacity-50 sm:w-auto"
          >
            {isPending ? "Procesando..." : "Crear usuario"}
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

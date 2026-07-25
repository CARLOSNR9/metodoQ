"use client";

import { useState, useTransition } from "react";
import { createClassAction } from "@/app/admin/class-actions";

export function AdminClassForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (formData: FormData) => {
    setMessage("");
    setError("");
    startTransition(async () => {
      const result = await createClassAction(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Clase programada correctamente.");
      }
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white-raised p-6 shadow-xl">
      <h2 className="text-xl font-semibold text-slate-900">Programar clase en vivo</h2>
      <p className="mt-1 text-sm text-slate-500">
        Visible para usuarios con plan Pro o Residente en el dashboard.
      </p>

      <form action={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase text-slate-500">Título</label>
          <input
            name="title"
            required
            placeholder="Estrategia para el examen de cardiología"
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase text-slate-500">Descripción</label>
          <textarea
            name="description"
            required
            rows={3}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 resize-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Fecha</label>
          <input
            name="date"
            type="date"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Hora</label>
          <input
            name="time"
            type="time"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Duración (min)</label>
          <input
            name="duration"
            type="number"
            min={15}
            defaultValue={60}
            required
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Enlace reunión (Meet/Zoom)</label>
          <input
            name="meetingLink"
            type="url"
            required
            placeholder="https://meet.google.com/..."
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase text-slate-500">
            Enlace grabación (opcional, para clases pasadas)
          </label>
          <input
            name="recordingLink"
            type="url"
            placeholder="https://youtube.com/..."
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
          />
        </div>
        <div className="sm:col-span-2 flex items-center gap-4">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-mq-accent px-5 py-2.5 text-sm font-bold text-mq-accent-foreground disabled:opacity-50"
          >
            {isPending ? "Guardando..." : "Publicar clase"}
          </button>
          {message ? <p className="text-sm text-mq-accent">{message}</p> : null}
          {error ? <p className="text-sm text-rose-400">{error}</p> : null}
        </div>
      </form>
    </section>
  );
}

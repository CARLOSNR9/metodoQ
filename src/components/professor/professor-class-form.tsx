"use client";

import { useState, useTransition } from "react";
import { createClassAction } from "@/app/admin/class-actions";
import { getFirebaseAuth } from "@/lib/firebase";
import type { CourseRecord } from "@/lib/courses/types";

type ProfessorClassFormProps = {
  courses: CourseRecord[];
};

export function ProfessorClassForm({ courses }: ProfessorClassFormProps) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [target, setTarget] = useState<"all_pro" | "course">(
    courses.length > 0 ? "course" : "all_pro",
  );

  const handleSubmit = (formData: FormData) => {
    setMessage("");
    setError("");
    startTransition(async () => {
      const token = (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
      formData.set("idToken", token);

      if (target === "course") {
        const courseId = String(formData.get("courseId") ?? "").trim();
        if (!courseId) {
          setError("Selecciona un grupo o elige la opción para todos los Pro.");
          return;
        }
      } else {
        formData.set("courseId", "");
        formData.set("visibility", "all_pro");
      }

      const result = await createClassAction(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Clase programada correctamente.");
      }
    });
  };

  return (
    <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
      <h2 className="text-xl font-semibold text-white">Programar clase en vivo</h2>
      <p className="mt-1 text-sm text-mq-muted">
        Elige un grupo para que solo sus alumnos matriculados la vean, o publícala para
        todos los usuarios Pro y Residente.
      </p>

      <form action={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase text-mq-muted">Destino</label>
          <div className="mt-2 flex flex-wrap gap-3">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-sm text-white">
              <input
                type="radio"
                name="target"
                checked={target === "course"}
                onChange={() => setTarget("course")}
                className="accent-mq-accent"
              />
              Grupo específico
            </label>
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-sm text-white">
              <input
                type="radio"
                name="target"
                checked={target === "all_pro"}
                onChange={() => setTarget("all_pro")}
                className="accent-mq-accent"
              />
              Todos los Pro / Residente
            </label>
          </div>
        </div>

        {target === "course" ? (
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold uppercase text-mq-muted">Grupo</label>
            {courses.length === 0 ? (
              <p className="mt-2 text-sm text-amber-300">
                Crea un grupo primero en &quot;Mis grupos&quot; para programar clases por grupo.
              </p>
            ) : (
              <select
                name="courseId"
                required
                className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2.5 text-white"
              >
                <option value="">Selecciona un grupo</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name} ({course.studentIds.length} alumno
                    {course.studentIds.length === 1 ? "" : "s"})
                  </option>
                ))}
              </select>
            )}
          </div>
        ) : null}

        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase text-mq-muted">Título</label>
          <input
            name="title"
            required
            placeholder="Estrategia para el examen de cardiología"
            className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase text-mq-muted">Descripción</label>
          <textarea
            name="description"
            required
            rows={3}
            className="mt-1 w-full resize-none rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-mq-muted">Fecha</label>
          <input
            name="date"
            type="date"
            required
            className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-mq-muted">Hora</label>
          <input
            name="time"
            type="time"
            required
            className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-mq-muted">Duración (min)</label>
          <input
            name="duration"
            type="number"
            min={15}
            defaultValue={60}
            required
            className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-mq-muted">
            Enlace reunión (Meet/Zoom)
          </label>
          <input
            name="meetingLink"
            type="url"
            required
            placeholder="https://meet.google.com/..."
            className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase text-mq-muted">
            Enlace grabación (opcional)
          </label>
          <input
            name="recordingLink"
            type="url"
            placeholder="https://youtube.com/..."
            className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white"
          />
        </div>
        <div className="flex items-center gap-4 sm:col-span-2">
          <button
            type="submit"
            disabled={isPending || (target === "course" && courses.length === 0)}
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

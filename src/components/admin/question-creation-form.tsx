"use client";

import { useState, useTransition } from "react";
import {
  createQuestionAction,
  seedExtendedQuestionsAction,
  seedQuestionsAction,
} from "@/app/admin/question-actions";

export function QuestionCreationForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (formData: FormData) => {
    setMessage("");
    setError("");
    startTransition(async () => {
      const result = await createQuestionAction(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Pregunta creada correctamente.");
      }
    });
  };

  const handleSeed = () => {
    setMessage("");
    setError("");
    startTransition(async () => {
      const result = await seedQuestionsAction();
      if (result.error) {
        setError(result.error);
      } else {
        setMessage(`Banco inicial cargado: ${result.count ?? 0} preguntas.`);
      }
    });
  };

  const handleSeedExtended = () => {
    setMessage("");
    setError("");
    startTransition(async () => {
      const result = await seedExtendedQuestionsAction();
      if (result.error) {
        setError(result.error);
      } else {
        setMessage(`Banco extendido: ${result.count ?? 0} preguntas nuevas agregadas.`);
      }
    });
  };

  return (
    <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Banco de preguntas</h2>
          <p className="mt-1 text-sm text-mq-muted">Agrega preguntas al catálogo Firestore.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleSeed}
            disabled={isPending}
            className="rounded-lg border border-mq-accent/40 px-4 py-2 text-sm font-semibold text-mq-accent hover:bg-mq-accent/10 disabled:opacity-50"
          >
            Cargar banco inicial
          </button>
          <button
            type="button"
            onClick={handleSeedExtended}
            disabled={isPending}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5 disabled:opacity-50"
          >
            Agregar banco extendido
          </button>
        </div>
      </div>

      <form action={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase text-mq-muted">Tema</label>
          <input name="topic" required className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-mq-muted">Enunciado</label>
          <textarea name="statement" required rows={4} className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white resize-none" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {["A", "B", "C", "D"].map((opt) => (
            <div key={opt}>
              <label className="text-xs font-semibold uppercase text-mq-muted">Opción {opt}</label>
              <input name={`option_${opt}`} required className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white" />
            </div>
          ))}
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-mq-muted">Respuesta correcta</label>
          <select name="correctOptionId" required className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-mq-muted">Explicación</label>
          <textarea name="explanation" required rows={3} className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white resize-none" />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-mq-accent py-3 font-bold text-mq-accent-foreground disabled:opacity-50"
        >
          {isPending ? "Guardando..." : "Agregar pregunta"}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-emerald-400">{message}</p>}
      {error && <p className="mt-4 text-sm text-rose-400">{error}</p>}
    </section>
  );
}

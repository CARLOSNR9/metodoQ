"use client";

import { useState, useTransition } from "react";
import {
  createQuestionAction,
  seedExtendedQuestionsAction,
  seedQuestionsAction,
} from "@/app/admin/question-actions";
import { selectInputClassName } from "@/components/ui/select-field";
import { getFirebaseAuth } from "@/lib/firebase";
import { cn } from "@/lib/utils";

async function withIdToken(formData?: FormData) {
  const fd = formData ?? new FormData();
  const user = getFirebaseAuth().currentUser;
  if (user) {
    fd.set("idToken", await user.getIdToken());
  }
  return fd;
}

export function QuestionCreationForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (formData: FormData) => {
    setMessage("");
    setError("");
    startTransition(async () => {
      await withIdToken(formData);
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
      const result = await seedQuestionsAction(await withIdToken());
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
      const result = await seedExtendedQuestionsAction(await withIdToken());
      if (result.error) {
        setError(result.error);
      } else {
        setMessage(`Banco extendido: ${result.count ?? 0} preguntas nuevas agregadas.`);
      }
    });
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white-raised p-6 shadow-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Banco de preguntas</h2>
          <p className="mt-1 text-sm text-slate-500">Agrega preguntas al catálogo Firestore.</p>
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
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 disabled:opacity-50"
          >
            Agregar banco extendido
          </button>
        </div>
      </div>

      <form action={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Tema</label>
          <input name="topic" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Enunciado</label>
          <textarea name="statement" required rows={4} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 resize-none" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {["A", "B", "C", "D"].map((opt) => (
            <div key={opt}>
              <label className="text-xs font-semibold uppercase text-slate-500">Opción {opt}</label>
              <input name={`option_${opt}`} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900" />
            </div>
          ))}
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Respuesta correcta</label>
          <select name="correctOptionId" required className={cn(selectInputClassName, "mt-1")}>
            <option value="A" className="bg-[#0f2744] text-slate-900">A</option>
            <option value="B" className="bg-[#0f2744] text-slate-900">B</option>
            <option value="C" className="bg-[#0f2744] text-slate-900">C</option>
            <option value="D" className="bg-[#0f2744] text-slate-900">D</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase text-slate-500">Explicación</label>
          <textarea name="explanation" required rows={3} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 resize-none" />
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

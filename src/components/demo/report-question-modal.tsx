"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flag, Send, Loader2 } from "lucide-react";
import { submitStudentQuestionReportAction } from "@/app/actions/student-report-actions";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  questionId: string;
  topic?: string;
  userId?: string | null;
};

const CATEGORIES = [
  { id: "wrong_answer", label: "Respuesta incorrecta", desc: "La opción marcada como correcta no lo es" },
  { id: "bad_feedback", label: "Retroalimentación confusa", desc: "La explicación es incompleta o no se entiende" },
  { id: "outdated", label: "Pregunta desactualizada", desc: "La información médica ya no está vigente" },
  { id: "typo", label: "Error de redacción", desc: "Problemas ortográficos o gramaticales" },
  { id: "other", label: "Otro motivo", desc: "Especifica el motivo en los comentarios" },
];

export function ReportQuestionModal({ isOpen, onClose, questionId, topic, userId }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [comments, setComments] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) return;

    setErrorMsg("");
    startTransition(async () => {
      const selectedLabel = CATEGORIES.find(c => c.id === selectedCategory)?.label || selectedCategory;
      const res = await submitStudentQuestionReportAction({
        questionId,
        category: selectedLabel,
        comments,
        userId: userId ?? null,
        topic,
      });

      if (res.error) {
        setErrorMsg(res.error);
      } else {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setSelectedCategory(null);
          setComments("");
          onClose();
        }, 2000);
      }
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-10 pb-4 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Flag className="h-5 w-5 text-mq-accent" />
                Reportar pregunta
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">¡Gracias por tu reporte!</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Revisaremos la pregunta pronto para seguir mejorando la calidad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-5">
                <p className="mb-4 text-sm text-slate-500">
                  ¿Qué problema encontraste en esta pregunta? Ayúdanos a mejorar el contenido.
                </p>

                <div className="space-y-3">
                  {CATEGORIES.map((cat) => (
                    <label
                      key={cat.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors ${
                        selectedCategory === cat.id
                          ? "border-mq-accent/50 bg-mq-accent/10"
                          : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="report_category"
                        value={cat.id}
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="mt-0.5 shrink-0 appearance-none rounded-full border-2 border-slate-300 bg-transparent p-2 checked:border-mq-accent checked:bg-mq-accent"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{cat.label}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{cat.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="mt-5">
                  <label htmlFor="comments" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Comentarios adicionales (Opcional)
                  </label>
                  <textarea
                    id="comments"
                    rows={3}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Danos más contexto sobre el error..."
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-mq-accent/50 focus:outline-none focus:ring-1 focus:ring-mq-accent/50"
                  />
                </div>

                {errorMsg && (
                  <p className="mt-3 text-sm text-rose-400">{errorMsg}</p>
                )}

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={!selectedCategory || isPending}
                    className="inline-flex items-center gap-2 rounded-xl bg-mq-accent px-5 py-2.5 text-sm font-bold text-mq-accent-foreground transition-colors hover:brightness-110 disabled:opacity-50"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar reporte"
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

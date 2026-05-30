"use client";

import { useState, useTransition } from "react";
import {
  deleteQuestionAction,
  importLocalQuestionAction,
  setQuestionActiveAction,
  updateQuestionAction,
} from "@/app/admin/question-actions";
import { selectInputClassName } from "@/components/ui/select-field";
import { REVIEW_STATUS_LABELS } from "@/lib/questions/review-labels";
import type { QuestionAdminRecord, QuestionReviewStatus } from "@/lib/questions/types";
import { getFirebaseAuth } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const selectOptionClassName = "bg-[#0f2744] text-white";

type Props = {
  question: QuestionAdminRecord;
  onClose: () => void;
  onSaved: () => void;
};

async function appendIdToken(formData: FormData) {
  const user = getFirebaseAuth().currentUser;
  if (user) {
    formData.set("idToken", await user.getIdToken());
  }
}

export function ProfessorQuestionEditor({ question, onClose, onSaved }: Props) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [topic, setTopic] = useState(question.topic);
  const [statement, setStatement] = useState(question.statement);
  const [explanation, setExplanation] = useState(question.explanation);
  const [correctOptionId, setCorrectOptionId] = useState(question.correctOptionId);
  const [options, setOptions] = useState(() =>
    ["A", "B", "C", "D"].map((id) => {
      const found = question.options.find((o) => o.id === id);
      return found?.text ?? "";
    }),
  );
  const [keyPoints, setKeyPoints] = useState(question.keyPoints.join("\n"));
  const [university, setUniversity] = useState(question.university ?? "");
  const [examArea, setExamArea] = useState(question.examArea ?? "");
  const [reviewStatus, setReviewStatus] = useState<QuestionReviewStatus>(
    question.reviewStatus ?? "pending",
  );
  const [reviewNotes, setReviewNotes] = useState(question.reviewNotes ?? "");
  const [theoryUrl, setTheoryUrl] = useState(question.theoryUrl ?? "");
  const [theoryContent, setTheoryContent] = useState(question.theoryContent ?? "");
  const [active, setActive] = useState(question.active !== false);
  const [firestoreId, setFirestoreId] = useState(question.firestoreId);
  const [inFirestore, setInFirestore] = useState(question.inFirestore);

  const handleImport = () => {
    setMessage("");
    setError("");
    startTransition(async () => {
      const formData = new FormData();
      formData.set("questionId", question.id);
      await appendIdToken(formData);
      const result = await importLocalQuestionAction(formData);
      if (result.error) {
        setError(result.error);
        return;
      }
      setFirestoreId(result.firestoreId ?? question.id);
      setInFirestore(true);
      setMessage("Pregunta importada a Firestore. Ya puedes guardar cambios.");
    });
  };

  const handleSave = () => {
    if (!inFirestore) {
      setError("Importa la pregunta a Firestore antes de guardar.");
      return;
    }

    setMessage("");
    setError("");
    startTransition(async () => {
      const formData = new FormData();
      formData.set("firestoreId", firestoreId);
      formData.set("topic", topic);
      formData.set("statement", statement);
      formData.set("explanation", explanation);
      formData.set("correctOptionId", correctOptionId);
      formData.set("reviewStatus", reviewStatus);
      formData.set("reviewNotes", reviewNotes);
      formData.set("theoryUrl", theoryUrl);
      formData.set("theoryContent", theoryContent);
      formData.set("keyPoints", keyPoints);
      formData.set("university", university);
      formData.set("examArea", examArea);
      formData.set("active", active ? "true" : "false");
      for (const id of ["A", "B", "C", "D"] as const) {
        formData.set(`option_${id}`, options[["A", "B", "C", "D"].indexOf(id)]);
      }
      await appendIdToken(formData);

      const result = await updateQuestionAction(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Cambios guardados.");
        onSaved();
      }
    });
  };

  const handleDeactivate = () => {
    if (!inFirestore) return;
    startTransition(async () => {
      const formData = new FormData();
      formData.set("firestoreId", firestoreId);
      formData.set("active", "false");
      await appendIdToken(formData);
      const result = await setQuestionActiveAction(formData);
      if (result.error) setError(result.error);
      else {
        setActive(false);
        setMessage("Pregunta desactivada (no visible para estudiantes).");
        onSaved();
      }
    });
  };

  const handleDelete = () => {
    if (!inFirestore) return;
    if (!window.confirm("¿Eliminar esta pregunta de Firestore de forma permanente?")) return;

    startTransition(async () => {
      const formData = new FormData();
      formData.set("firestoreId", firestoreId);
      await appendIdToken(formData);
      const result = await deleteQuestionAction(formData);
      if (result.error) setError(result.error);
      else {
        onSaved();
        onClose();
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 p-0 sm:p-4">
      <div className="flex h-full w-full max-w-2xl flex-col border-l border-mq-border-strong bg-[#0d2447] shadow-2xl sm:rounded-l-xl">
        <div className="flex items-start justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-mq-muted">
              Revisión editorial
            </p>
            <h2 className="mt-1 text-lg font-semibold text-white">{topic}</h2>
            <p className="mt-1 font-mono text-xs text-mq-muted">{question.id}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-mq-muted hover:bg-white/10 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {!inFirestore && (
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-100">
              Esta pregunta solo existe en el código del proyecto. Impórtala a Firestore para
              editarla y registrar tu revisión.
              <button
                type="button"
                onClick={handleImport}
                disabled={isPending}
                className="mt-3 block rounded-lg bg-amber-500/20 px-4 py-2 font-semibold text-amber-200 hover:bg-amber-500/30 disabled:opacity-50"
              >
                Importar a Firestore
              </button>
            </div>
          )}

          <div>
            <label className="text-xs font-semibold uppercase text-mq-muted">Tema</label>
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={!inFirestore}
              className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-white disabled:opacity-60"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-mq-muted">Caso clínico</label>
            <textarea
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              disabled={!inFirestore}
              rows={6}
              className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white resize-none disabled:opacity-60"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {(["A", "B", "C", "D"] as const).map((id, index) => (
              <div key={id}>
                <label className="text-xs font-semibold uppercase text-mq-muted">
                  Opción {id}
                </label>
                <input
                  value={options[index]}
                  onChange={(e) => {
                    const next = [...options];
                    next[index] = e.target.value;
                    setOptions(next);
                  }}
                  disabled={!inFirestore}
                  className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white disabled:opacity-60"
                />
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase text-mq-muted">
                Respuesta correcta
              </label>
              <select
                value={correctOptionId}
                onChange={(e) => setCorrectOptionId(e.target.value)}
                disabled={!inFirestore}
                className={cn(selectInputClassName, "mt-1 disabled:opacity-60")}
              >
                {["A", "B", "C", "D"].map((id) => (
                  <option key={id} value={id} className={selectOptionClassName}>
                    {id}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-mq-muted">
                Estado de revisión
              </label>
              <select
                value={reviewStatus}
                onChange={(e) => setReviewStatus(e.target.value as QuestionReviewStatus)}
                disabled={!inFirestore}
                className={cn(selectInputClassName, "mt-1 disabled:opacity-60")}
              >
                {(Object.keys(REVIEW_STATUS_LABELS) as QuestionReviewStatus[]).map((status) => (
                  <option key={status} value={status} className={selectOptionClassName}>
                    {REVIEW_STATUS_LABELS[status]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-mq-muted">Explicación</label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              disabled={!inFirestore}
              rows={4}
              className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white resize-none disabled:opacity-60"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-mq-muted">
              Puntos clave (uno por línea)
            </label>
            <textarea
              value={keyPoints}
              onChange={(e) => setKeyPoints(e.target.value)}
              disabled={!inFirestore}
              rows={3}
              className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white resize-none disabled:opacity-60"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-mq-muted">
              Opinión / notas del revisor
            </label>
            <textarea
              value={reviewNotes}
              onChange={(e) => setReviewNotes(e.target.value)}
              disabled={!inFirestore}
              rows={3}
              placeholder="Ej.: distractor B demasiado obvio; ajustar semiología..."
              className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white resize-none disabled:opacity-60"
            />
          </div>

          <div className="rounded-xl border border-mq-accent/20 bg-mq-accent/5 p-4 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase text-mq-accent">
                Píldora de estudio — enlace externo (opcional)
              </label>
              <p className="mt-1 text-xs text-mq-muted leading-relaxed">
                Notion, Drive u otra URL. Si no hay contenido abajo, el estudiante abre este enlace al
                fallar la pregunta.
              </p>
              <input
                type="text"
                value={theoryUrl}
                onChange={(e) => setTheoryUrl(e.target.value)}
                disabled={!inFirestore}
                placeholder="https://… o /teoria/ext-end-01"
                className="mt-2 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white disabled:opacity-60"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-mq-accent">
                Píldora de estudio — texto largo
              </label>
              <p className="mt-1 text-xs text-mq-muted">
                Explicación profunda que el estudiante ve al fallar (o repasar) y puede guardar en{" "}
                <span className="font-semibold text-white">Mi Estudio</span>. Sin URL externa, también
                queda en <span className="font-mono text-white/80">/teoria/{question.id}</span>
              </p>
              <textarea
                value={theoryContent}
                onChange={(e) => setTheoryContent(e.target.value)}
                disabled={!inFirestore}
                rows={8}
                placeholder="Cómo resolver esta pregunta, trampas de examen, fisiopatología extendida…"
                className="mt-2 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white resize-none disabled:opacity-60"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase text-mq-muted">Universidad</label>
              <input
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                disabled={!inFirestore}
                className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white disabled:opacity-60"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-mq-muted">Área examen</label>
              <input
                value={examArea}
                onChange={(e) => setExamArea(e.target.value)}
                disabled={!inFirestore}
                className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-3 py-2 text-sm text-white disabled:opacity-60"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-mq-muted">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              disabled={!inFirestore}
              className="rounded border-mq-border"
            />
            Activa para estudiantes
          </label>

          {question.reviewedAt && (
            <p className="text-xs text-mq-muted">
              Última revisión:{" "}
              {new Date(question.reviewedAt).toLocaleString("es-CO", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          )}
        </div>

        <div className="border-t border-white/10 px-5 py-4 space-y-3">
          {message && <p className="text-sm text-emerald-400">{message}</p>}
          {error && <p className="text-sm text-rose-400">{error}</p>}

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleSave}
              disabled={isPending || !inFirestore}
              className="flex-1 rounded-lg bg-mq-accent py-2.5 text-sm font-bold text-mq-accent-foreground disabled:opacity-50"
            >
              {isPending ? "Guardando..." : "Guardar revisión"}
            </button>
            {inFirestore && (
              <>
                <button
                  type="button"
                  onClick={handleDeactivate}
                  disabled={isPending || !active}
                  className="rounded-lg border border-amber-500/40 px-4 py-2.5 text-sm text-amber-200 hover:bg-amber-500/10 disabled:opacity-50"
                >
                  Desactivar
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isPending}
                  className="rounded-lg border border-rose-500/40 px-4 py-2.5 text-sm text-rose-300 hover:bg-rose-500/10 disabled:opacity-50"
                >
                  Eliminar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

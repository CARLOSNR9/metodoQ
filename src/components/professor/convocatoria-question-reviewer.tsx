"use client";

import { useCallback, useMemo, useState, useTransition } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Pencil,
  RotateCcw,
  Save,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  restoreConvocatoriaQuestionAction,
  saveConvocatoriaQuestionEditAction,
} from "@/app/profesor/convocatorias/actions";
import { getConvocatoriaQuestionNumber } from "@/lib/convocatoria/question-number";
import { applyConvocatoriaOverride } from "@/lib/questions/convocatoria-overrides";
import type {
  ConvocatoriaOverrideMap,
  ConvocatoriaQuestionOverride,
} from "@/lib/questions/convocatoria-overrides";
import type { QuestionOption, TrainingQuestion } from "@/lib/questions/types";
import { getFirebaseAuth } from "@/lib/firebase";
import { cn } from "@/lib/utils";

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

type EditForm = {
  statement: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  keyPoints: string;
};

type Props = {
  editionCode: string;
  editionLabel: string;
  baseQuestions: TrainingQuestion[];
  mergedQuestions: TrainingQuestion[];
  overrides: ConvocatoriaOverrideMap;
};

async function appendIdToken(formData: FormData) {
  const user = getFirebaseAuth().currentUser;
  if (user) {
    formData.set("idToken", await user.getIdToken());
  }
}

function relabelOptions(options: QuestionOption[]): QuestionOption[] {
  return options.map((opt, index) => {
    const label = OPTION_LABELS[index] ?? String(index + 1);
    return { ...opt, id: label, label };
  });
}

function ensureFourOptions(options: QuestionOption[]): QuestionOption[] {
  const padded = [...options];
  while (padded.length < 4) {
    const label = OPTION_LABELS[padded.length];
    padded.push({ id: label, label, text: "" });
  }
  return relabelOptions(padded.slice(0, 4));
}

function questionToForm(question: TrainingQuestion): EditForm {
  return {
    statement: question.statement,
    options: ensureFourOptions(question.options),
    correctOptionId: question.correctOptionId,
    explanation: question.explanation,
    keyPoints: question.keyPoints.join("\n"),
  };
}

function moveOption(
  options: QuestionOption[],
  correctIndex: number,
  moveIndex: number,
  direction: -1 | 1,
): { options: QuestionOption[]; correctIndex: number } {
  const target = moveIndex + direction;
  if (target < 0 || target >= options.length) {
    return { options, correctIndex };
  }
  const copy = [...options];
  [copy[moveIndex], copy[target]] = [copy[target], copy[moveIndex]];

  let newCorrectIndex = correctIndex;
  if (correctIndex === moveIndex) newCorrectIndex = target;
  else if (correctIndex === target) newCorrectIndex = moveIndex;

  return {
    options: relabelOptions(copy),
    correctIndex: newCorrectIndex,
  };
}

function correctIndexFromId(options: QuestionOption[], correctOptionId: string): number {
  const idx = options.findIndex((o) => o.id === correctOptionId);
  return idx >= 0 ? idx : 0;
}

export function ConvocatoriaQuestionReviewer({
  editionCode,
  baseQuestions,
  mergedQuestions: initialMerged,
  overrides: initialOverrides,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<EditForm | null>(null);
  const [overrides, setOverrides] = useState(initialOverrides);
  const [mergedQuestions, setMergedQuestions] = useState(initialMerged);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const total = mergedQuestions.length;
  const currentQuestion = mergedQuestions[currentIndex];
  const baseQuestion = baseQuestions[currentIndex];
  const questionNumber = currentQuestion
    ? getConvocatoriaQuestionNumber(currentQuestion.id)
    : currentIndex + 1;
  const hasOverride = Boolean(currentQuestion && overrides[currentQuestion.id]);

  const editedIds = useMemo(
    () => new Set(Object.keys(overrides)),
    [overrides],
  );

  const syncMerged = useCallback(
    (nextOverrides: ConvocatoriaOverrideMap) => {
      setOverrides(nextOverrides);
      setMergedQuestions(
        baseQuestions.map((q) =>
          applyConvocatoriaOverride(q, nextOverrides[q.id]),
        ),
      );
    },
    [baseQuestions],
  );

  const goTo = (index: number) => {
    if (index < 0 || index >= total) return;
    setCurrentIndex(index);
    setIsEditing(false);
    setForm(null);
    setMessage("");
    setError("");
  };

  const startEdit = () => {
    if (!currentQuestion) return;
    setForm(questionToForm(currentQuestion));
    setIsEditing(true);
    setMessage("");
    setError("");
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setForm(null);
    setError("");
  };

  const handleSave = () => {
    if (!form || !currentQuestion) return;
    setMessage("");
    setError("");

    startTransition(async () => {
      const fd = new FormData();
      fd.set("editionCode", editionCode);
      fd.set("questionId", currentQuestion.id);
      fd.set("statement", form.statement);
      fd.set("correctOptionId", form.correctOptionId);
      fd.set("explanation", form.explanation);
      fd.set("keyPoints", form.keyPoints);
      fd.set("options", JSON.stringify(form.options));
      await appendIdToken(fd);

      const result = await saveConvocatoriaQuestionEditAction(fd);
      if (result.error) {
        setError(result.error);
        return;
      }

      const keyPoints = form.keyPoints
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);

      const override: ConvocatoriaQuestionOverride = {
        statement: form.statement,
        options: form.options,
        correctOptionId: form.correctOptionId,
        explanation: form.explanation,
        keyPoints,
        updatedAt: new Date().toISOString(),
      };

      syncMerged({ ...overrides, [currentQuestion.id]: override });
      setIsEditing(false);
      setForm(null);
      setMessage("Cambios guardados. Los estudiantes verán esta versión de inmediato.");
    });
  };

  const handleRestore = () => {
    if (!currentQuestion) return;
    setMessage("");
    setError("");

    startTransition(async () => {
      const fd = new FormData();
      fd.set("editionCode", editionCode);
      fd.set("questionId", currentQuestion.id);
      await appendIdToken(fd);

      const result = await restoreConvocatoriaQuestionAction(fd);
      if (result.error) {
        setError(result.error);
        return;
      }

      const next = { ...overrides };
      delete next[currentQuestion.id];
      syncMerged(next);
      setIsEditing(false);
      setForm(null);
      setMessage("Restaurada la versión original del código.");
    });
  };

  if (!currentQuestion || !baseQuestion) {
    return (
      <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
        No hay preguntas en esta edición.
      </p>
    );
  }

  const correctIndex = form
    ? correctIndexFromId(form.options, form.correctOptionId)
    : correctIndexFromId(currentQuestion.options, currentQuestion.correctOptionId);

  return (
    <div className={cn("space-y-6", isEditing && "pb-28")}>
      {/* Navegación superior */}
      <div className="flex flex-col gap-4 rounded-2xl border border-mq-border bg-mq-surface-raised/40 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={currentIndex === 0 || isPending}
            onClick={() => goTo(currentIndex - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.08] disabled:opacity-40"
            aria-label="Pregunta anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="min-w-[8rem] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mq-muted">
              Pregunta
            </p>
            <p className="text-lg font-bold text-white">
              {questionNumber}{" "}
              <span className="text-sm font-medium text-mq-muted">/ {total}</span>
            </p>
          </div>
          <button
            type="button"
            disabled={currentIndex >= total - 1 || isPending}
            onClick={() => goTo(currentIndex + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.08] disabled:opacity-40"
            aria-label="Pregunta siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {!isEditing ? (
          <button
            type="button"
            onClick={startEdit}
            disabled={isPending}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-mq-accent px-5 py-2.5 text-sm font-semibold text-mq-accent-foreground shadow-[0_8px_20px_-8px_rgb(0_209_255/0.8)] transition hover:brightness-110"
          >
            <Pencil className="h-4 w-4" />
            Editar pregunta
          </button>
        ) : (
          <span className="rounded-full border border-mq-accent/30 bg-mq-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-mq-accent">
            Modo edición
          </span>
        )}
      </div>

      {/* Grilla de saltos */}
      <div className="rounded-2xl border border-mq-border bg-mq-surface-raised/30 p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-mq-muted">
          Ir a pregunta
        </p>
        <div className="grid grid-cols-10 gap-1.5">
          {mergedQuestions.map((q, idx) => {
            const num = getConvocatoriaQuestionNumber(q.id);
            const isActive = idx === currentIndex;
            const isEdited = editedIds.has(q.id);
            return (
              <button
                key={q.id}
                type="button"
                disabled={isPending}
                onClick={() => goTo(idx)}
                title={`Pregunta ${num}${isEdited ? " (editada)" : ""}`}
                className={cn(
                  "relative flex h-8 items-center justify-center rounded-lg text-xs font-semibold transition",
                  isActive
                    ? "bg-mq-accent text-mq-accent-foreground"
                    : "border border-white/10 bg-white/[0.03] text-mq-muted hover:border-mq-accent/30 hover:text-white",
                )}
              >
                {num}
                {isEdited ? (
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-amber-400" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {message ? (
        <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {message}
        </p>
      ) : null}
      {error ? (
        <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {error}
        </p>
      ) : null}

      {/* Tarjeta principal */}
      <article className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 shadow-[0_24px_60px_-36px_rgb(0_209_255/0.35)] sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {currentQuestion.examArea ? (
            <span className="rounded-full border border-mq-accent/25 bg-mq-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-mq-accent">
              {currentQuestion.examArea}
            </span>
          ) : null}
          {currentQuestion.topic ? (
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-mq-muted">
              {currentQuestion.topic}
            </span>
          ) : null}
          {hasOverride ? (
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-200">
              Editada
            </span>
          ) : null}
        </div>

        {!isEditing || !form ? (
          <ReadMode question={currentQuestion} />
        ) : (
          <EditMode
            form={form}
            correctIndex={correctIndex}
            isPending={isPending}
            onChange={setForm}
            onMoveOption={(moveIndex, direction) => {
              const ci = correctIndexFromId(form.options, form.correctOptionId);
              const result = moveOption(form.options, ci, moveIndex, direction);
              setForm({
                ...form,
                options: result.options,
                correctOptionId: result.options[result.correctIndex]?.id ?? "A",
              });
            }}
          />
        )}
      </article>

      <p className="text-center text-xs text-mq-muted">
        ID: <code className="text-mq-muted/80">{currentQuestion.id}</code>
      </p>

      {isEditing ? (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A1F44]/95 px-4 py-3 shadow-[0_-12px_40px_-12px_rgb(0_0_0/0.5)] backdrop-blur-md md:left-64"
          role="toolbar"
          aria-label="Acciones de edición"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-mq-muted">
              Editando{" "}
              <span className="font-semibold text-white">
                pregunta {questionNumber}
              </span>{" "}
              de {total}
            </p>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <button
                type="button"
                onClick={cancelEdit}
                disabled={isPending}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
              >
                <X className="h-4 w-4" />
                Cancelar
              </button>
              {hasOverride ? (
                <button
                  type="button"
                  onClick={handleRestore}
                  disabled={isPending}
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm font-semibold text-amber-200 transition hover:bg-amber-500/15"
                >
                  <RotateCcw className="h-4 w-4" />
                  Restaurar
                </button>
              ) : null}
              <button
                type="button"
                onClick={handleSave}
                disabled={isPending}
                className="inline-flex min-w-[8.5rem] items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgb(16_185_129/0.6)] transition hover:bg-emerald-400 disabled:opacity-60"
              >
                <Save className="h-4 w-4" />
                {isPending ? "Guardando…" : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ReadMode({ question }: { question: TrainingQuestion }) {
  return (
    <div className="mt-6 space-y-8">
      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-mq-accent">
          Caso clínico
        </h3>
        <p className="mt-3 text-pretty text-base leading-relaxed text-white sm:text-lg">
          {question.statement}
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-mq-accent">
          Opciones de respuesta
        </h3>
        <ul className="mt-4 space-y-3">
          {question.options.map((option) => {
            const isCorrect = option.id === question.correctOptionId;
            return (
              <li
                key={option.id}
                className={cn(
                  "rounded-xl border px-4 py-3.5",
                  isCorrect
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : "border-white/10 bg-white/[0.02]",
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                      isCorrect
                        ? "bg-emerald-500 text-white"
                        : "bg-white/10 text-mq-muted",
                    )}
                  >
                    {option.label}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-relaxed text-white sm:text-base">
                      {option.text}
                    </p>
                    {isCorrect ? (
                      <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Respuesta correcta
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-mq-accent">
          <Sparkles className="h-3.5 w-3.5" />
          Retroalimentación por opción incorrecta
        </h3>
        <p className="mt-1 text-xs text-mq-muted">
          Lo que verá el estudiante al finalizar el simulacro, pregunta por pregunta.
        </p>
        <ul className="mt-4 space-y-3">
          {question.options
            .filter((o) => o.id !== question.correctOptionId)
            .map((option) => (
              <li
                key={option.id}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-rose-300/90">
                  Opción {option.label}
                </p>
                <p className="mt-2 text-sm text-mq-muted line-clamp-2">{option.text}</p>
                {option.distractorProfile ? (
                  <p className="mt-2 text-[10px] font-mono uppercase tracking-wide text-mq-muted/70">
                    {option.distractorProfile}
                  </p>
                ) : null}
                {option.incorrectFeedback ? (
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    {option.incorrectFeedback}
                  </p>
                ) : (
                  <p className="mt-2 text-sm italic text-mq-muted">Sin retroalimentación.</p>
                )}
              </li>
            ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-mq-accent">
          Explicación / Método Q
        </h3>
        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-white/95 sm:text-base">
          {question.explanation}
        </p>
      </section>

      {question.keyPoints.length > 0 ? (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-mq-accent">
            Lo que debes saber
          </h3>
          <ul className="mt-3 space-y-2">
            {question.keyPoints.map((point, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-white/90"
              >
                <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 rotate-[-90deg] text-mq-accent" />
                {point}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

function EditMode({
  form,
  correctIndex,
  isPending,
  onChange,
  onMoveOption,
}: {
  form: EditForm;
  correctIndex: number;
  isPending: boolean;
  onChange: (form: EditForm) => void;
  onMoveOption: (index: number, direction: -1 | 1) => void;
}) {
  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0f2744]/80 px-4 py-3 text-sm text-white placeholder:text-mq-muted/60 focus:border-mq-accent/50 focus:outline-none focus:ring-2 focus:ring-mq-accent/20";
  const labelClass = "text-xs font-semibold uppercase tracking-[0.12em] text-mq-muted";

  return (
    <div className="mt-6 space-y-8">
      <section>
        <label className={labelClass} htmlFor="edit-statement">
          Caso clínico
        </label>
        <textarea
          id="edit-statement"
          rows={6}
          disabled={isPending}
          value={form.statement}
          onChange={(e) => onChange({ ...form, statement: e.target.value })}
          className={`${inputClass} mt-2`}
        />
      </section>

      <section>
        <p className={labelClass}>Opciones de respuesta</p>
        <ul className="mt-3 space-y-4">
          {form.options.map((option, index) => (
            <li
              key={`${option.id}-${index}`}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="inline-flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="correctOption"
                    checked={index === correctIndex}
                    disabled={isPending}
                    onChange={() =>
                      onChange({ ...form, correctOptionId: option.id })
                    }
                    className="h-4 w-4 accent-emerald-500"
                  />
                  <span className="text-sm font-bold text-white">
                    Opción {option.label} — correcta
                  </span>
                </label>
                <div className="flex gap-1">
                  <button
                    type="button"
                    disabled={isPending || index === 0}
                    onClick={() => onMoveOption(index, -1)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-mq-muted hover:text-white disabled:opacity-40"
                    aria-label={`Subir opción ${option.label}`}
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    disabled={isPending || index === form.options.length - 1}
                    onClick={() => onMoveOption(index, 1)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-mq-muted hover:text-white disabled:opacity-40"
                    aria-label={`Bajar opción ${option.label}`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <textarea
                rows={2}
                disabled={isPending}
                value={option.text}
                placeholder="Texto de la opción"
                onChange={(e) => {
                  const options = [...form.options];
                  options[index] = { ...options[index], text: e.target.value };
                  onChange({ ...form, options });
                }}
                className={`${inputClass} mt-3`}
              />
              <input
                type="text"
                disabled={isPending}
                value={option.distractorProfile ?? ""}
                placeholder="Perfil del distractor (opcional, ej. wrong_sequencing_error)"
                onChange={(e) => {
                  const options = [...form.options];
                  const next = { ...options[index] };
                  if (e.target.value.trim()) next.distractorProfile = e.target.value;
                  else delete next.distractorProfile;
                  options[index] = next;
                  onChange({ ...form, options });
                }}
                className={`${inputClass} mt-2 text-xs font-mono`}
              />
              <textarea
                rows={2}
                disabled={isPending}
                value={option.incorrectFeedback ?? ""}
                placeholder="Retroalimentación si el estudiante elige esta opción incorrecta"
                onChange={(e) => {
                  const options = [...form.options];
                  const next = { ...options[index] };
                  if (e.target.value.trim()) next.incorrectFeedback = e.target.value;
                  else delete next.incorrectFeedback;
                  options[index] = next;
                  onChange({ ...form, options });
                }}
                className={`${inputClass} mt-2`}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <label className={labelClass} htmlFor="edit-explanation">
          Explicación / Método Q
        </label>
        <textarea
          id="edit-explanation"
          rows={8}
          disabled={isPending}
          value={form.explanation}
          onChange={(e) => onChange({ ...form, explanation: e.target.value })}
          className={`${inputClass} mt-2`}
        />
      </section>

      <section>
        <label className={labelClass} htmlFor="edit-keypoints">
          Lo que debes saber (una línea por punto)
        </label>
        <textarea
          id="edit-keypoints"
          rows={4}
          disabled={isPending}
          value={form.keyPoints}
          onChange={(e) => onChange({ ...form, keyPoints: e.target.value })}
          placeholder="Cuando veas: …&#10;Debes pensar en: …&#10;Tema: …"
          className={`${inputClass} mt-2`}
        />
      </section>
    </div>
  );
}

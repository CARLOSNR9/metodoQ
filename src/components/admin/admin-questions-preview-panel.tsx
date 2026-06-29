"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Search, X } from "lucide-react";
import { QuestionStudentPreview } from "@/components/admin/question-student-preview";
import type { QuestionAdminRecord } from "@/lib/questions/types";
import { cn } from "@/lib/utils";

type Props = {
  questions: QuestionAdminRecord[];
  reportedQuestionIds?: string[];
};

type CreatedAtSort = "newest" | "oldest";

function getCreatedAtSortKey(question: QuestionAdminRecord, order: CreatedAtSort): number {
  const ms = question.createdAt ? new Date(question.createdAt).getTime() : null;
  if (ms === null || Number.isNaN(ms)) {
    return order === "newest" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  }
  return ms;
}

function formatAdminQuestionDate(iso: string | undefined): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
}

export function AdminQuestionsPreviewPanel({
  questions,
  reportedQuestionIds = [],
}: Props) {
  const [search, setSearch] = useState("");
  const [bankFilter, setBankFilter] = useState<"all" | "dr-q">("dr-q");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [createdAtSort, setCreatedAtSort] = useState<CreatedAtSort>("newest");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return questions.filter((question) => {
      if (bankFilter === "dr-q" && !question.id.startsWith("dr-q-")) {
        return false;
      }
      if (!term) return true;
      const haystack = [
        question.id,
        question.topic,
        question.statement,
        question.examArea ?? "",
        ...(question.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [questions, search, bankFilter]);

  const sorted = useMemo(() => {
    const items = [...filtered];
    items.sort((a, b) => {
      const aKey = getCreatedAtSortKey(a, createdAtSort);
      const bKey = getCreatedAtSortKey(b, createdAtSort);
      return createdAtSort === "newest" ? bKey - aKey : aKey - bKey;
    });
    return items;
  }, [filtered, createdAtSort]);

  const reportedSet = useMemo(() => new Set(reportedQuestionIds), [reportedQuestionIds]);

  const selected =
    sorted.find((question) => question.id === selectedId) ??
    filtered.find((question) => question.id === selectedId) ??
    questions.find((question) => question.id === selectedId) ??
    null;

  return (
    <>
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Vista previa
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Preguntas del banco
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Revisa cómo ve el estudiante cada pregunta, sus opciones, la respuesta correcta y la
          retroalimentación larga tal como quedaría en Mi Estudio — sin entrar al simulador.
        </p>
      </header>

      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mq-muted" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por código (dr-q-91), tema o enunciado..."
            className="w-full rounded-lg border border-mq-border bg-mq-surface py-2.5 pl-10 pr-3 text-sm text-white"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterChip active={bankFilter === "dr-q"} onClick={() => setBankFilter("dr-q")}>
            Dr Q universal
          </FilterChip>
          <FilterChip active={bankFilter === "all"} onClick={() => setBankFilter("all")}>
            Todo el banco
          </FilterChip>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised shadow-xl">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
          <p className="text-sm text-mq-muted">
            {sorted.length} pregunta{sorted.length === 1 ? "" : "s"}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">
              Creadas
            </span>
            <SortArrowButton
              active={createdAtSort === "oldest"}
              onClick={() => setCreatedAtSort("oldest")}
              label="Más antiguas primero"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </SortArrowButton>
            <SortArrowButton
              active={createdAtSort === "newest"}
              onClick={() => setCreatedAtSort("newest")}
              label="Más nuevas primero"
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </SortArrowButton>
          </div>
        </div>

          {sorted.length === 0 ? (
            <p className="px-5 py-10 text-center text-sm text-mq-muted">
              No hay preguntas con este filtro.
            </p>
          ) : (
            <ul className="max-h-[70vh] divide-y divide-white/5 overflow-y-auto">
              {sorted.map((question) => {
                const isActive = selectedId === question.id;
                const hasTheory = Boolean(question.theoryContent?.trim() || question.theoryUrl);

                return (
                  <li key={question.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(question.id)}
                      className={`flex w-full flex-col gap-2 px-5 py-4 text-left transition ${
                        isActive ? "bg-mq-accent/10" : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold text-mq-accent">
                            {question.id}
                          </span>
                          {!hasTheory && (
                            <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-200">
                              Sin píldora
                            </span>
                          )}
                          {reportedSet.has(question.id) && (
                            <span className="rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] font-bold uppercase text-rose-200">
                              Reportada
                            </span>
                          )}
                        </div>
                        <QuestionAdminDates question={question} />
                      </div>
                      <span className="font-medium text-white">{question.topic}</span>
                      <p className="line-clamp-2 text-sm text-mq-muted">{question.statement}</p>
                      <p className="text-xs text-mq-muted/80">
                        Correcta: {question.correctOptionId}
                        {question.examArea ? ` · ${question.examArea}` : ""}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised/60 p-4 sm:p-6">
          {selected ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="absolute right-0 top-0 rounded-lg p-2 text-mq-muted hover:bg-white/10 hover:text-white xl:hidden"
                aria-label="Cerrar vista previa"
              >
                <X className="h-5 w-5" />
              </button>
              <QuestionStudentPreview
                question={selected}
                isReported={reportedSet.has(selected.id)}
              />
            </div>
          ) : (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-6 text-center">
              <p className="text-lg font-semibold text-white">Selecciona una pregunta</p>
              <p className="mt-2 max-w-sm text-sm text-mq-muted">
                Elige un ítem de la lista para ver el enunciado, las opciones, la respuesta
                correcta y la retroalimentación como la vería un estudiante.
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

function QuestionAdminDates({ question }: { question: QuestionAdminRecord }) {
  const created = formatAdminQuestionDate(question.createdAt);
  const updated = formatAdminQuestionDate(question.updatedAt);

  if (!created && !updated) return null;

  return (
    <div className="shrink-0 text-right text-[10px] leading-snug text-mq-muted/75">
      {created ? <p>Creada {created}</p> : null}
      {updated ? <p>Mod. {updated}</p> : null}
    </div>
  );
}

function SortArrowButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-md border transition",
        active
          ? "border-mq-accent/50 bg-mq-accent/15 text-mq-accent"
          : "border-white/10 text-mq-muted hover:border-white/20 hover:text-white",
      )}
    >
      {children}
    </button>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
        active
          ? "bg-mq-accent text-mq-accent-foreground"
          : "border border-white/15 text-mq-muted hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

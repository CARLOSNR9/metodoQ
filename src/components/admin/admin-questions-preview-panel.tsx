"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { QuestionStudentPreview } from "@/components/admin/question-student-preview";
import type { QuestionAdminRecord } from "@/lib/questions/types";

type Props = {
  questions: QuestionAdminRecord[];
};

export function AdminQuestionsPreviewPanel({ questions }: Props) {
  const [search, setSearch] = useState("");
  const [bankFilter, setBankFilter] = useState<"all" | "dr-q">("dr-q");
  const [selectedId, setSelectedId] = useState<string | null>(null);

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

  const selected =
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
          <p className="border-b border-white/10 px-5 py-3 text-sm text-mq-muted">
            {filtered.length} pregunta{filtered.length === 1 ? "" : "s"}
          </p>

          {filtered.length === 0 ? (
            <p className="px-5 py-10 text-center text-sm text-mq-muted">
              No hay preguntas con este filtro.
            </p>
          ) : (
            <ul className="max-h-[70vh] divide-y divide-white/5 overflow-y-auto">
              {filtered.map((question) => {
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
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-mq-accent">
                          {question.id}
                        </span>
                        {!hasTheory && (
                          <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-200">
                            Sin píldora
                          </span>
                        )}
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
              <QuestionStudentPreview question={selected} />
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

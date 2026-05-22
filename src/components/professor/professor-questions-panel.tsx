"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  listQuestionsForReviewAction,
  seedFullQuestionBankAction,
} from "@/app/admin/question-actions";
import { ProfessorQuestionEditor } from "@/components/professor/professor-question-editor";
import { getFirebaseAuth } from "@/lib/firebase";
import {
  REVIEW_STATUS_LABELS,
  REVIEW_STATUS_STYLES,
} from "@/lib/questions/review-labels";
import { normalizeReviewStatus } from "@/lib/questions/review-status";
import type { QuestionAdminRecord, QuestionReviewStatus } from "@/lib/questions/types";
import { ArrowLeft, Search } from "lucide-react";

type FilterKey = "all" | "pending" | "approved" | "flagged" | "inactive" | "local";

type Props = {
  initialQuestions: QuestionAdminRecord[];
};

function countByStatus(questions: QuestionAdminRecord[]) {
  let pending = 0;
  let approved = 0;
  let flagged = 0;
  let inactive = 0;
  let localOnly = 0;

  for (const q of questions) {
    const status = normalizeReviewStatus(q.reviewStatus);
    if (!q.inFirestore) localOnly += 1;
    if (q.active === false) inactive += 1;
    if (status === "pending") pending += 1;
    else if (status === "approved") approved += 1;
    else if (status === "needs_changes" || status === "rejected") flagged += 1;
  }

  return { total: questions.length, pending, approved, flagged, inactive, localOnly };
}

function matchesFilter(q: QuestionAdminRecord, filter: FilterKey): boolean {
  const status = normalizeReviewStatus(q.reviewStatus);
  switch (filter) {
    case "pending":
      return status === "pending";
    case "approved":
      return status === "approved";
    case "flagged":
      return status === "needs_changes" || status === "rejected";
    case "inactive":
      return q.active === false;
    case "local":
      return !q.inFirestore;
    default:
      return true;
  }
}

export function ProfessorQuestionsPanel({ initialQuestions }: Props) {
  const router = useRouter();
  const [questions, setQuestions] = useState(initialQuestions);
  const [filter, setFilter] = useState<FilterKey>("pending");

  useEffect(() => {
    setQuestions(initialQuestions);
  }, [initialQuestions]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<QuestionAdminRecord | null>(null);
  const [isPending, startTransition] = useTransition();
  const [syncMessage, setSyncMessage] = useState("");

  const stats = useMemo(() => countByStatus(questions), [questions]);

  useEffect(() => {
    setSelected(null);
  }, [filter]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return questions.filter((q) => {
      if (!matchesFilter(q, filter)) return false;
      if (!term) return true;
      const haystack = [
        q.topic,
        q.statement,
        q.id,
        q.university ?? "",
        q.examArea ?? "",
        ...(q.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [questions, filter, search]);

  const refreshList = () => {
    startTransition(async () => {
      const result = await listQuestionsForReviewAction();
      if (result.ok) {
        setQuestions(result.questions);
        router.refresh();
      }
    });
  };

  const handleSyncAll = () => {
    setSyncMessage("");
    startTransition(async () => {
      const formData = new FormData();
      const user = getFirebaseAuth().currentUser;
      if (user) {
        formData.set("idToken", await user.getIdToken());
      }
      const result = await seedFullQuestionBankAction(formData);
      if (result.error) {
        setSyncMessage(result.error);
      } else {
        setSyncMessage(
          `Sincronización: ${result.count ?? 0} pregunta(s) nueva(s) en Firestore.`,
        );
        refreshList();
      }
    });
  };

  const filters: { key: FilterKey; label: string; count?: number }[] = [
    { key: "pending", label: "Por revisar", count: stats.pending },
    { key: "all", label: "Todas", count: stats.total },
    { key: "approved", label: "Aprobadas", count: stats.approved },
    { key: "flagged", label: "Con observaciones", count: stats.flagged },
    { key: "local", label: "Solo en código", count: stats.localOnly },
    { key: "inactive", label: "Inactivas", count: stats.inactive },
  ];

  return (
    <>
      <header className="mb-8">
        <Link
          href="/profesor"
          className="inline-flex items-center gap-1 text-sm text-mq-accent hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al panel
        </Link>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Revisión editorial
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Preguntas
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Revisa cada caso clínico del banco: edita, aprueba, marca observaciones o desactiva
          preguntas que no cumplan el estándar. Las pendientes son las que aún no has revisado.
        </p>
      </header>

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total en banco" value={stats.total} />
        <StatCard label="Por revisar" value={stats.pending} highlight />
        <StatCard label="Aprobadas" value={stats.approved} />
        <StatCard label="Solo en código" value={stats.localOnly} />
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mq-muted" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por tema, caso, universidad..."
            className="w-full rounded-lg border border-mq-border bg-mq-surface py-2.5 pl-10 pr-3 text-sm text-white"
          />
        </div>
        <button
          type="button"
          onClick={handleSyncAll}
          disabled={isPending}
          className="rounded-lg border border-mq-accent/40 px-4 py-2.5 text-sm font-semibold text-mq-accent hover:bg-mq-accent/10 disabled:opacity-50"
        >
          Sincronizar banco completo a Firestore
        </button>
      </div>

      {syncMessage && (
        <p className="mb-4 text-sm text-mq-muted">{syncMessage}</p>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              filter === f.key
                ? "bg-mq-accent text-mq-accent-foreground"
                : "border border-white/15 text-mq-muted hover:text-white"
            }`}
          >
            {f.label}
            {f.count !== undefined ? ` (${f.count})` : ""}
          </button>
        ))}
      </div>

      <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised shadow-xl">
        <p className="border-b border-white/10 px-5 py-3 text-sm text-mq-muted">
          {filtered.length} pregunta{filtered.length === 1 ? "" : "s"}
          {isPending ? " · actualizando..." : ""}
        </p>

        {filtered.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-mq-muted">
            No hay preguntas con este filtro.
          </p>
        ) : (
          <ul className="divide-y divide-white/5">
            {filtered.map((q) => (
              <li key={q.firestoreId}>
                <button
                  type="button"
                  onClick={() => setSelected(q)}
                  className="flex w-full flex-col gap-2 px-5 py-4 text-left hover:bg-white/[0.03] sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-white">{q.topic}</span>
                      <StatusBadge status={normalizeReviewStatus(q.reviewStatus)} />
                      {!q.inFirestore && (
                        <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-bold uppercase text-violet-300">
                          Solo código
                        </span>
                      )}
                      {q.active === false && (
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase text-mq-muted">
                          Inactiva
                        </span>
                      )}
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-mq-muted">{q.statement}</p>
                    <p className="mt-1 text-xs text-mq-muted/80">
                      {q.university ? `${q.university} · ` : ""}
                      ID: {q.id}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-mq-accent">
                    Revisar →
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {selected && (
        <ProfessorQuestionEditor
          question={selected}
          onClose={() => setSelected(null)}
          onSaved={refreshList}
        />
      )}
    </>
  );
}

function StatCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? "border-amber-500/30 bg-amber-500/10"
          : "border-mq-border-strong bg-mq-surface-raised/80"
      }`}
    >
      <p className="text-xs uppercase tracking-wider text-mq-muted">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${highlight ? "text-amber-200" : "text-white"}`}>
        {value}
      </p>
    </div>
  );
}

function StatusBadge({ status }: { status: QuestionReviewStatus }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${REVIEW_STATUS_STYLES[status]}`}
    >
      {REVIEW_STATUS_LABELS[status]}
    </span>
  );
}

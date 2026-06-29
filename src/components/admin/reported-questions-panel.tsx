"use client";

import { useMemo, useState, useTransition } from "react";
import { Check, Copy, Flag } from "lucide-react";
import {
  updateQuestionReportStatusAction,
  type QuestionReportStatus,
} from "@/app/admin/question-report-actions";
import { getFirebaseAuth } from "@/lib/firebase";
import type { QuestionReport } from "@/lib/server/question-reports-admin";
import { selectInputClassName } from "@/components/ui/select-field";

type Props = {
  reports: QuestionReport[];
};

const STATUS_OPTIONS: { value: QuestionReportStatus; label: string }[] = [
  { value: "pending", label: "Pendiente" },
  { value: "reviewed", label: "Revisada" },
  { value: "dismissed", label: "Descartada" },
];

export function ReportedQuestionsPanel({ reports }: Props) {
  const [filter, setFilter] = useState<"pending" | "all">("pending");
  const [copied, setCopied] = useState(false);

  const visible = useMemo(() => {
    if (filter === "all") return reports;
    return reports.filter((report) => report.status === "pending");
  }, [filter, reports]);

  const codesList = useMemo(
    () => visible.map((report) => report.questionId).join("\n"),
    [visible],
  );

  const pendingCount = reports.filter((report) => report.status === "pending").length;

  const handleCopy = async () => {
    if (!codesList) return;
    await navigator.clipboard.writeText(codesList);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Calidad de contenido
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Preguntas reportadas
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Preguntas marcadas desde la vista previa por retroalimentación escueta o débil. Copia el
          listado de códigos y envíalo a tu flujo de revisión con IA.
        </p>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <FilterChip active={filter === "pending"} onClick={() => setFilter("pending")}>
          Pendientes ({pendingCount})
        </FilterChip>
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          Todas ({reports.length})
        </FilterChip>
      </div>

      {visible.length === 0 ? (
        <section className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
          <Flag className="mx-auto h-8 w-8 text-mq-muted" />
          <p className="mt-4 text-sm font-semibold text-white">No hay preguntas reportadas</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-mq-muted">
            Desde{" "}
            <span className="font-medium text-white">Vista previa → Nota en Mi Estudio</span> puedes
            pulsar <span className="font-medium text-white">Reportar pregunta</span> cuando la
            retroalimentación sea demasiado breve.
          </p>
        </section>
      ) : (
        <div className="space-y-6">
          <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5 shadow-xl">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-white">Listado de códigos</h2>
                <p className="mt-1 text-sm text-mq-muted">
                  {visible.length} código{visible.length === 1 ? "" : "s"} — uno por línea
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-lg bg-mq-accent px-4 py-2 text-sm font-semibold text-mq-accent-foreground transition hover:opacity-90"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copiado" : "Copiar listado"}
              </button>
            </div>

            <textarea
              readOnly
              value={codesList}
              rows={Math.min(visible.length + 1, 12)}
              className="mt-4 w-full resize-y rounded-lg border border-white/10 bg-black/30 px-4 py-3 font-mono text-sm text-mq-accent focus:outline-none focus:ring-1 focus:ring-mq-accent/50"
              onFocus={(event) => event.target.select()}
            />
          </section>

          <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-white">Detalle</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
                    <th className="pb-3 pr-4">Código</th>
                    <th className="pb-3 pr-4">Tema</th>
                    <th className="pb-3 pr-4">Píldora</th>
                    <th className="pb-3 pr-4">Estado</th>
                    <th className="pb-3">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((report) => (
                    <ReportedQuestionRow key={report.id} report={report} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function ReportedQuestionRow({ report }: { report: QuestionReport }) {
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (status: QuestionReportStatus) => {
    startTransition(async () => {
      const token = await getFirebaseAuth().currentUser?.getIdToken();
      const result = await updateQuestionReportStatusAction(report.questionId, status, token);
      if (result.error) {
        console.error(result.error);
      }
    });
  };

  return (
    <tr className="border-b border-white/5">
      <td className="py-3 pr-4">
        <span className="font-mono text-sm font-bold text-mq-accent">{report.questionId}</span>
      </td>
      <td className="py-3 pr-4 text-mq-muted">{report.topic || "—"}</td>
      <td className="py-3 pr-4 text-mq-muted">
        {report.theoryCharCount != null
          ? `${report.theoryCharCount.toLocaleString("es-CO")} car.`
          : "—"}
      </td>
      <td className="py-3 pr-4">
        <select
          value={report.status}
          disabled={isPending}
          onChange={(event) =>
            handleStatusChange(event.target.value as QuestionReportStatus)
          }
          className={`${selectInputClassName} px-2 py-1 text-xs`}
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#0f2744] text-white">
              {opt.label}
            </option>
          ))}
        </select>
      </td>
      <td className="py-3 text-xs text-mq-muted">
        {new Date(report.createdAt).toLocaleDateString("es-CO")}
      </td>
    </tr>
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

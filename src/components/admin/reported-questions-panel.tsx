"use client";

import { useMemo, useState, useTransition, useEffect } from "react";
import { Check, Copy, Flag, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { updateQuestionReportStatusAction } from "@/app/admin/question-report-actions";
import type { QuestionReportStatus } from "@/lib/server/question-reports-admin";
import { getFirebaseAuth } from "@/lib/firebase";
import type { QuestionReport } from "@/lib/server/question-reports-admin";
import type { QuestionAdminRecord } from "@/lib/questions/types";
import { ProfessorQuestionEditor } from "@/components/professor/professor-question-editor";
import { selectInputClassName } from "@/components/ui/select-field";

type Props = {
  reports: QuestionReport[];
  questions?: QuestionAdminRecord[];
};

const STATUS_OPTIONS: { value: QuestionReportStatus; label: string }[] = [
  { value: "pending", label: "Pendiente" },
  { value: "reviewed", label: "Revisada" },
  { value: "dismissed", label: "Descartada" },
];

export function ReportedQuestionsPanel({ reports, questions = [] }: Props) {
  const [filter, setFilter] = useState<"pending" | "reviewed" | "dismissed" | "all">("pending");
  const [copied, setCopied] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionAdminRecord | null>(null);
  const [selectedReport, setSelectedReport] = useState<QuestionReport | null>(null);
  const [aiPrompt, setAiPrompt] = useState("");
  const router = useRouter();

  const visible = useMemo(() => {
    let list = reports;
    if (filter !== "all") {
      list = reports.filter((report) => report.status === filter);
    }
    
    return [...list].sort((a, b) => {
      if (filter === "reviewed" || filter === "dismissed") {
        const timeA = a.updatedAt ? new Date(a.updatedAt).getTime() : new Date(a.createdAt).getTime();
        const timeB = b.updatedAt ? new Date(b.updatedAt).getTime() : new Date(b.createdAt).getTime();
        if (timeA !== timeB) return timeB - timeA;
      }
      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();
      return timeB - timeA;
    });
  }, [filter, reports]);

  const codesList = useMemo(
    () => visible.map((report) => report.questionId).join("\n"),
    [visible],
  );

  const pendingCount = reports.filter((report) => report.status === "pending").length;
  const reviewedCount = reports.filter((report) => report.status === "reviewed").length;
  const dismissedCount = reports.filter((report) => report.status === "dismissed").length;

  const handleCopy = async () => {
    if (!codesList) return;
    await navigator.clipboard.writeText(codesList);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEdit = (report: QuestionReport) => {
    const q = questions.find((q) => q.id === report.questionId);
    if (q) {
      const reportText = report.reportsList?.map(r => `- ${r.category}: ${r.comments || 'Sin comentarios'}`).join('\n') || 'Sin reportes';
      const prompt = `REPORTE DEL ESTUDIANTE:\n${reportText}\n\nPor favor revisa la pregunta y el reporte del estudiante. Realiza las correcciones necesarias para mejorar la pregunta.`;
      
      setSelectedQuestion(q);
      setSelectedReport(report);
      setAiPrompt(prompt);
    } else {
      alert("No se encontró la información de la pregunta.");
    }
  };

  return (
    <>
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Calidad de contenido
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Preguntas reportadas
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          Preguntas marcadas desde la vista previa por retroalimentación escueta o débil. Copia el
          listado de códigos y envíalo a tu flujo de revisión con IA.
        </p>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <FilterChip active={filter === "pending"} onClick={() => setFilter("pending")}>
          Pendientes ({pendingCount})
        </FilterChip>
        <FilterChip active={filter === "reviewed"} onClick={() => setFilter("reviewed")}>
          Revisadas ({reviewedCount})
        </FilterChip>
        <FilterChip active={filter === "dismissed"} onClick={() => setFilter("dismissed")}>
          Descartadas ({dismissedCount})
        </FilterChip>
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          Todas ({reports.length})
        </FilterChip>
      </div>

      {visible.length === 0 ? (
        <section className="rounded-xl border border-dashed border-white/15 bg-slate-50 p-10 text-center">
          <Flag className="mx-auto h-8 w-8 text-slate-500" />
          <p className="mt-4 text-sm font-semibold text-slate-900">No hay preguntas reportadas</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Desde{" "}
            <span className="font-medium text-slate-900">Vista previa → Nota en Mi Estudio</span> puedes
            pulsar <span className="font-medium text-slate-900">Reportar pregunta</span> cuando la
            retroalimentación sea demasiado breve.
          </p>
        </section>
      ) : (
        <div className="space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white-raised p-5 shadow-xl">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Listado de códigos</h2>
                <p className="mt-1 text-sm text-slate-500">
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
              className="mt-4 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-mq-accent/50"
              onFocus={(event) => event.target.select()}
            />
          </section>

          <section className="rounded-xl border border-slate-200 bg-white-raised p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-slate-900">Detalle</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                    <th className="pb-3 pr-4">Código</th>
                    <th className="pb-3 pr-4">Tema</th>
                    <th className="pb-3 pr-4">Reportes</th>
                    <th className="pb-3 pr-4">Estado</th>
                    <th className="pb-3">Última act.</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((report) => (
                    <ReportedQuestionRow key={report.id} report={report} onEdit={() => handleEdit(report)} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}

      {selectedQuestion && (
        <ProfessorQuestionEditor
          question={selectedQuestion}
          report={selectedReport}
          onClose={() => {
            setSelectedQuestion(null);
            setSelectedReport(null);
          }}
          onSaved={() => router.refresh()}
          copySuffix={aiPrompt}
        />
      )}
    </>
  );
}

import { useRouter } from "next/navigation";

function ReportedQuestionRow({ report, onEdit }: { report: QuestionReport; onEdit?: () => void }) {
  const [isPending, startTransition] = useTransition();
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const reportsCount = report.reportsList?.length || 0;

  const handleStatusChange = async (status: QuestionReportStatus) => {
    const token = await getFirebaseAuth().currentUser?.getIdToken();
    startTransition(async () => {
      try {
        const result = await updateQuestionReportStatusAction(report.questionId, status, token ?? null);
        if (result.error) {
          console.error(result.error);
        } else {
          router.refresh();
        }
      } catch (e) {
        console.error(e);
      }
    });
  };

  const getStatusColor = (status: QuestionReportStatus) => {
    switch (status) {
      case "reviewed":
        return "border-emerald-500/30 bg-emerald-50 text-emerald-700";
      case "dismissed":
        return "border-rose-500/30 bg-rose-50 text-rose-700";
      case "pending":
      default:
        return "border-amber-500/30 bg-amber-50 text-amber-700";
    }
  };

  return (
    <>
      <tr className="border-b border-slate-100">
        <td className="py-3 pr-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-mq-accent">{report.questionId}</span>
            {reportsCount > 0 && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-full bg-slate-50 p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                title="Ver comentarios"
              >
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            )}
          </div>
        </td>
        <td className="py-3 pr-4 text-slate-500">{report.topic || "—"}</td>
        <td className="py-3 pr-4">
          {reportsCount > 0 ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2 py-0.5 text-xs font-semibold text-rose-400">
              <MessageSquare className="h-3 w-3" />
              {reportsCount} reporte{reportsCount > 1 ? "s" : ""}
            </span>
          ) : (
            <span className="text-slate-500">—</span>
          )}
        </td>
        <td className="py-3 pr-4">
          <select
            value={report.status}
            disabled={isPending}
            onChange={(event) =>
              handleStatusChange(event.target.value as QuestionReportStatus)
            }
            className={`${selectInputClassName} px-2 py-1 text-xs border ${getStatusColor(report.status)} focus:border-mq-accent focus:ring-1 focus:ring-mq-accent/50 outline-none rounded-lg transition-colors`}
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white text-slate-900">
                {opt.label}
              </option>
            ))}
          </select>
        </td>
        <td className="py-3 text-xs text-slate-500">
          {(() => {
            const val = report.updatedAt || report.createdAt;
            if (!val) return "—";
            const d = new Date(val);
            return isNaN(d.getTime()) ? "Fecha inválida" : d.toLocaleDateString("es-CO");
          })()}
        </td>
      </tr>
      
      {isExpanded && reportsCount > 0 && (
        <tr className="border-b border-slate-200 bg-slate-50">
          <td colSpan={5} className="p-4">
            <div className="space-y-3 pl-4 border-l-2 border-mq-accent/30">
              {report.reportsList?.map((r, i) => (
                <div key={i} className="rounded-lg bg-slate-50 p-3 text-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-rose-300">{r.category}</span>
                    <span className="text-xs text-slate-500">
                      {(() => {
                        if (!r.createdAt) return "—";
                        const d = new Date(r.createdAt);
                        return isNaN(d.getTime()) ? "Fecha inválida" : d.toLocaleDateString("es-CO");
                      })()}
                    </span>
                  </div>
                  {r.comments ? (
                    <p className="text-slate-900/90">{r.comments}</p>
                  ) : (
                    <p className="text-slate-500 italic">Sin comentarios adicionales</p>
                  )}
                  {(r.userEmail || r.userId) && (
                    <p className="mt-2 text-xs text-slate-500 text-right">
                      {r.userEmail ? r.userEmail : `User ID: ${r.userId}`}
                    </p>
                  )}
                </div>
              ))}
              {onEdit && (
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={onEdit}
                    className="inline-flex items-center gap-2 rounded-lg bg-mq-accent px-4 py-2 text-sm font-semibold text-mq-accent-foreground transition hover:opacity-90"
                  >
                    Editar pregunta
                  </button>
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
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
          : "border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

import { ReportedQuestionsPanel } from "@/components/admin/reported-questions-panel";
import { adminListQuestionReports } from "@/lib/server/question-reports-admin";
import { StaffDataPending } from "@/components/admin/staff-data-pending";
import { requireStaffArea } from "@/lib/server/staff-session";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import type { MirQuestionPreview } from "@/lib/mir/question-reports";

export const dynamic = "force-dynamic";

export default async function AdminMirReportedQuestionsPage() {
  if (!(await requireStaffArea("admin"))) return <StaffDataPending />;

  let reports: Awaited<ReturnType<typeof adminListQuestionReports>> = [];
  let loadError = "";

  try {
    reports = await adminListQuestionReports("all", "mir");
  } catch (error) {
    console.error("admin reported MIR questions", error);
    loadError = "No se pudo cargar el listado de reportes MIR.";
  }

  // Las preguntas MIR viven en el código (src/data/mir-*): se envía al panel
  // solo lo necesario de las reportadas para revisarlas sin salir de la página.
  const reportedIds = new Set(reports.map((report) => report.questionId));
  const previews: Record<string, MirQuestionPreview> = {};
  for (const question of MIR_QUESTIONS) {
    if (!reportedIds.has(question.id)) continue;
    previews[question.id] = {
      statement: question.statement,
      options: question.options.map((option) => ({ label: option.label, text: option.text })),
      correctLabel:
        question.options.find((option) => option.id === question.correctOptionId)?.label ??
        question.correctOptionId,
      explanation: question.explanation,
      imageSrc: question.image?.src,
    };
  }

  return (
    <>
      {loadError ? (
        <p className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          {loadError}
        </p>
      ) : null}
      <ReportedQuestionsPanel reports={reports} variant="mir" mirPreviews={previews} />
    </>
  );
}

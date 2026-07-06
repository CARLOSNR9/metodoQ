import { ReportedQuestionsPanel } from "@/components/admin/reported-questions-panel";
import { adminListQuestionReports } from "@/lib/server/question-reports-admin";

export const dynamic = "force-dynamic";

export default async function ProfessorReportedQuestionsPage() {
  let reports: Awaited<ReturnType<typeof adminListQuestionReports>> = [];
  let loadError = "";

  try {
    reports = await adminListQuestionReports("all");
  } catch (error) {
    console.error("profesor reported questions", error);
    loadError = "No se pudo cargar el listado de preguntas reportadas.";
  }

  return (
    <>
      {loadError ? (
        <p className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          {loadError}
        </p>
      ) : null}
      <ReportedQuestionsPanel reports={reports} />
    </>
  );
}

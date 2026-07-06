import { AdminQuestionsPreviewPanel } from "@/components/admin/admin-questions-preview-panel";
import {
  adminListQuestionsForReview,
  enrichAdminRecordsForPreview,
} from "@/lib/server/questions-admin";
import { adminGetReportedQuestionIds } from "@/lib/server/question-reports-admin";

export const dynamic = "force-dynamic";

export default async function AdminQuestionsPreviewPage() {
  let questions: Awaited<ReturnType<typeof enrichAdminRecordsForPreview>> = [];
  let reportedQuestionIds: string[] = [];
  let loadError = "";

  try {
    const [listed, reportedIds] = await Promise.all([
      adminListQuestionsForReview(),
      adminGetReportedQuestionIds().catch(() => new Set<string>()),
    ]);
    questions = await enrichAdminRecordsForPreview(listed);
    reportedQuestionIds = [...reportedIds];
  } catch (error) {
    console.error("admin questions preview", error);
    loadError =
      "No se pudo cargar el banco. Revisa la conexión con Firestore o usa las preguntas del código local.";
    const { getAllRepositoryQuestions } = await import("@/lib/questions/local-bank");
    const localQuestions = await getAllRepositoryQuestions();
    questions = localQuestions.map((question) => ({
      ...question,
      firestoreId: question.id,
      inFirestore: false,
      active: question.active !== false,
      reviewStatus: question.reviewStatus ?? "pending",
      source: question.source ?? "seed",
    }));
  }

  return (
    <>
      {loadError ? (
        <p className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          {loadError}
        </p>
      ) : null}
      <AdminQuestionsPreviewPanel
        questions={questions}
        reportedQuestionIds={reportedQuestionIds}
      />
    </>
  );
}

import { ProfessorQuestionsPanel } from "@/components/professor/professor-questions-panel";
import { adminListQuestionsForReview } from "@/lib/server/questions-admin";

export const revalidate = 86400; // Caché por 24 horas (se limpia al editar)

export default async function ProfessorQuestionsPage() {
  let questions: Awaited<ReturnType<typeof adminListQuestionsForReview>> = [];
  let loadError = "";

  try {
    questions = await adminListQuestionsForReview();
  } catch (e) {
    console.error("professor questions list", e);
    loadError =
      "No se pudo conectar con Firestore. Revisa las credenciales del servidor o sincroniza más tarde.";
  }

  return (
    <>
      {loadError ? (
        <p className="mb-6 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {loadError}
        </p>
      ) : null}
      <ProfessorQuestionsPanel initialQuestions={questions} />
    </>
  );
}

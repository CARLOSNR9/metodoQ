import { ProfessorGuard } from "@/components/professor/professor-guard";
import { ProfessorQuestionsPanel } from "@/components/professor/professor-questions-panel";
import { adminListQuestionsForReview } from "@/lib/server/questions-admin";

export const dynamic = "force-dynamic";

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
    <ProfessorGuard>
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
        <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          {loadError ? (
            <p className="mb-6 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {loadError}
            </p>
          ) : null}
          <ProfessorQuestionsPanel initialQuestions={questions} />
        </section>
      </main>
    </ProfessorGuard>
  );
}

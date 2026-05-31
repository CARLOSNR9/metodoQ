import { QuestionCreationForm } from "@/components/admin/question-creation-form";
import { PanelSection } from "@/components/admin/panel-section";

export default function ProfessorNewQuestionPage() {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Banco clínico
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Agregar preguntas
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Crea preguntas nuevas o carga los bancos inicial y extendido al catálogo Firestore.
        </p>
      </header>

      <PanelSection
        title="Banco de preguntas"
        description="Las preguntas creadas aquí pasan al flujo de revisión editorial."
        className="mt-10"
      >
        <QuestionCreationForm />
      </PanelSection>
    </>
  );
}

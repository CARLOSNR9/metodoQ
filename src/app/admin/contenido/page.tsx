import { QuestionCreationForm } from "@/components/admin/question-creation-form";
import { AdminClassForm } from "@/components/admin/admin-class-form";
import { AdminClassesPanel } from "@/components/admin/admin-classes-panel";
import { PanelSection } from "@/components/admin/panel-section";

export const dynamic = "force-dynamic";

export default function AdminContentPage() {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Contenido
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Contenido educativo
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          Banco de preguntas y clases en vivo. Los profesores gestionan esto desde su panel;
          aquí queda como respaldo para administradores.
        </p>
      </header>

      <PanelSection
        title="Preguntas y clases"
        description="Crea preguntas para el banco y programa clases en vivo."
        className="mt-10"
      >
        <QuestionCreationForm />
        <AdminClassForm />
        <AdminClassesPanel />
      </PanelSection>
    </>
  );
}

import Link from "next/link";
import { ProfessorGuard } from "@/components/professor/professor-guard";
import { QuestionCreationForm } from "@/components/admin/question-creation-form";
import { AdminClassForm } from "@/components/admin/admin-class-form";
import { AdminClassesPanel } from "@/components/admin/admin-classes-panel";
import { PanelSection } from "@/components/admin/panel-section";
import { adminListQuestionsForReview } from "@/lib/server/questions-admin";
import { ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

const upcomingIdeas = [
  {
    title: "Métricas por clase",
    description: "Asistencia estimada, preguntas más falladas en la sesión y tiempo promedio.",
  },
  {
    title: "Materiales por clase",
    description: "Subir PDFs, slides o enlaces de lectura asociados a cada transmisión.",
  },
  {
    title: "Feedback de estudiantes",
    description: "Encuesta corta post-clase para calidad y ritmo del contenido.",
  },
] as const;

export default async function ProfessorPage() {
  let pendingCount = 0;
  let totalCount = 0;
  try {
    const questions = await adminListQuestionsForReview();
    totalCount = questions.length;
    pendingCount = questions.filter((q) => (q.reviewStatus ?? "pending") === "pending").length;
  } catch {
    /* panel sigue usable sin contadores */
  }

  return (
    <ProfessorGuard>
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
        <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
              Panel docente
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tu espacio de enseñanza
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
              Aquí gestionas lo esencial: preguntas para el banco y clases en vivo. No incluye
              usuarios, ventas ni métricas de negocio (solo administración).
            </p>
          </header>

          <PanelSection
            title="Preguntas"
            description="Revisa y valida todo el banco clínico: edición, aprobación y seguimiento de pendientes."
            className="mt-10"
          >
            <Link
              href="/profesor/preguntas"
              className="flex items-center justify-between rounded-xl border border-mq-accent/35 bg-mq-accent/10 px-5 py-4 transition hover:bg-mq-accent/15"
            >
              <div>
                <p className="text-lg font-semibold text-white">Revisar preguntas</p>
                <p className="mt-1 text-sm text-mq-muted">
                  {totalCount > 0
                    ? `${pendingCount} pendiente${pendingCount === 1 ? "" : "s"} de ${totalCount} en el banco`
                    : "Abre el listado completo para revisión editorial"}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-mq-accent" />
            </Link>
          </PanelSection>

          <PanelSection
            title="Agregar preguntas"
            description="Crea preguntas nuevas o carga los bancos inicial y extendido."
            className="mt-14"
          >
            <QuestionCreationForm />
          </PanelSection>

          <PanelSection
            title="Clases en vivo"
            description="Programa sesiones, enlaces de reunión y grabaciones para estudiantes Pro y Residente."
            className="mt-14"
          >
            <AdminClassForm />
            <AdminClassesPanel />
          </PanelSection>

          <section className="mt-14 rounded-xl border border-dashed border-mq-border-strong bg-white/[0.02] p-6">
            <h2 className="text-lg font-semibold text-white">Próximas funciones sugeridas</h2>
            <p className="mt-1 text-sm text-mq-muted">
              Ideas para ampliar el panel del profesor en siguientes iteraciones.
            </p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {upcomingIdeas.map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-mq-border bg-mq-surface-raised/60 p-4"
                >
                  <p className="text-sm font-semibold text-mq-accent">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-mq-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </ProfessorGuard>
  );
}

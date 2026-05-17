import { ProfessorGuard } from "@/components/professor/professor-guard";
import { QuestionCreationForm } from "@/components/admin/question-creation-form";
import { AdminClassForm } from "@/components/admin/admin-class-form";
import { AdminClassesPanel } from "@/components/admin/admin-classes-panel";

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

export default function ProfessorPage() {
  return (
    <ProfessorGuard>
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
        <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
              Panel docente
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Gestión de contenido
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
              Crea preguntas para el banco y programa tus clases en vivo. No incluye métricas de
              negocio ni gestión de usuarios (solo administradores).
            </p>
          </header>

          <div className="mt-8 space-y-8">
            <QuestionCreationForm />
            <AdminClassForm />
            <AdminClassesPanel />
          </div>

          <section className="mt-10 rounded-xl border border-dashed border-mq-border-strong bg-white/[0.02] p-6">
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

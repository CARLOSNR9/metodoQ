import { AdminClassesPanel } from "@/components/admin/admin-classes-panel";
import { ProfessorClassFormWrapper } from "@/components/professor/professor-class-form-wrapper";

export const dynamic = "force-dynamic";

export default function ProfessorClassesPage() {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Clases en vivo
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Programar clases
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Publica sesiones para un curso específico o para todos los usuarios Pro y Residente.
          Los alumnos matriculados las verán en su panel de clases.
        </p>
      </header>

      <div className="mt-10 space-y-8">
        <ProfessorClassFormWrapper />
        <AdminClassesPanel />
      </div>
    </>
  );
}

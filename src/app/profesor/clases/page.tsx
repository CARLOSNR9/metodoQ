import { ProfessorClassesPanel } from "@/components/professor/professor-classes-panel";
import { ProfessorClassFormWrapper } from "@/components/professor/professor-class-form-wrapper";
import { StaffDataPending } from "@/components/admin/staff-data-pending";
import { requireStaffArea } from "@/lib/server/staff-session";

export const dynamic = "force-dynamic";

export default async function ProfessorClassesPage() {
  if (!(await requireStaffArea("professor"))) return <StaffDataPending />;

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
          Publica sesiones para un grupo específico o para todos los usuarios Pro y Residente.
          Los alumnos matriculados las verán en su panel de clases.
        </p>
      </header>

      <div className="mt-10 space-y-8">
        <ProfessorClassFormWrapper />
        <ProfessorClassesPanel />
      </div>
    </>
  );
}

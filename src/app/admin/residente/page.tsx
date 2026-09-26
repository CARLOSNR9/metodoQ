import { ResidenteApplicationsPanel } from "@/components/admin/residente-applications-panel";
import { PanelSection } from "@/components/admin/panel-section";
import { StaffDataPending } from "@/components/admin/staff-data-pending";
import { requireStaffArea } from "@/lib/server/staff-session";

export const dynamic = "force-dynamic";

export default async function AdminResidentePage() {
  if (!(await requireStaffArea("admin"))) return <StaffDataPending />;

  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Administración
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Plan Residente
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          Revisa postulaciones al Plan Residente, actualiza su estado y activa planes en la
          plataforma.
        </p>
      </header>

      <PanelSection
        title="Postulaciones"
        description="Candidatos al Plan Residente y su estado de revisión."
        className="mt-10"
      >
        <ResidenteApplicationsPanel />
      </PanelSection>
    </>
  );
}

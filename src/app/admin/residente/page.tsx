import { ResidenteApplicationsPanel } from "@/components/admin/residente-applications-panel";
import { PanelSection } from "@/components/admin/panel-section";

export const dynamic = "force-dynamic";

export default function AdminResidentePage() {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Administración
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Plan Residente
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
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

import { ConvocatoriaTrackingTable } from "@/components/admin/convocatoria-tracking-table";
import { PanelSection } from "@/components/admin/panel-section";
import { getAdminConvocatoriaTracking } from "@/lib/server/convocatoria-admin";

export const dynamic = "force-dynamic";

function formatExamDate(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export default async function AdminConvocatoriasPage() {
  const { summary, rows, loadError } = await getAdminConvocatoriaTracking();

  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Seguimiento
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Convocatorias UCC
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Control de quién completó el simulacro oficial por edición, con puntaje y fecha.
          Incluye todos los roles registrados.
        </p>
      </header>

      <PanelSection
        title={`${summary.editionLabel} · ${summary.editionCode}`}
        description={
          summary.examDate
            ? `Fecha de convocatoria: ${formatExamDate(summary.examDate)}. Un intento por usuario.`
            : undefined
        }
        className="mt-10"
      >
        {loadError ? (
          <div
            role="alert"
            className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100"
          >
            {loadError}
          </div>
        ) : (
          <ConvocatoriaTrackingTable summary={summary} rows={rows} />
        )}
      </PanelSection>
    </>
  );
}

import { ManualSalesPanel } from "@/components/admin/manual-sales-panel";
import { PanelSection } from "@/components/admin/panel-section";

export const dynamic = "force-dynamic";

export default function AdminSalesPage() {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Administración
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ventas manuales
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Registra ventas realizadas por negociadores fuera del flujo de Stripe en la web.
        </p>
      </header>

      <PanelSection
        title="Ventas por negociador"
        description="Historial y registro de ventas internas con asignación de plan y universidad."
        className="mt-10"
      >
        <ManualSalesPanel />
      </PanelSection>
    </>
  );
}

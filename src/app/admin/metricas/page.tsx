import { buildAdminAlerts, getAdminMetrics } from "@/lib/server/admin-metrics";
import { FunnelAlerts, MetricCard } from "@/components/admin/metrics-cards";
import { PanelSection } from "@/components/admin/panel-section";

export const dynamic = "force-dynamic";

export default async function AdminMetricsPage() {
  const { metrics, loadError } = await getAdminMetrics();
  const alerts = buildAdminAlerts(metrics);
  const demoFinishRate =
    metrics.demoStartedCount > 0
      ? Math.round((metrics.demosCompletedCount / metrics.demoStartedCount) * 100)
      : 0;
  const paywallClickRate =
    metrics.paywallViewedCount > 0
      ? Math.round((metrics.paywallClickedCount / metrics.paywallViewedCount) * 100)
      : 0;

  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Operación
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Métricas y embudo
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Vista rápida de conversión, demos y señales de fricción en el paywall.
        </p>
      </header>

      {loadError ? (
        <div
          role="alert"
          className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100"
        >
          {loadError}
        </div>
      ) : null}

      <PanelSection title="Resumen" className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard label="Usuarios totales" value={metrics.usersCount} />
          <MetricCard label="Demos completados" value={metrics.demosCompletedCount} />
          <MetricCard label="Conversiones de pago" value={metrics.proConversionsCount} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <MetricCard label="Inicios demo" value={metrics.demoStartedCount} />
          <MetricCard label="Vistas paywall" value={metrics.paywallViewedCount} />
          <MetricCard label="Clicks upgrade" value={metrics.paywallClickedCount} />
          <MetricCard label="Tasa fin (%)" value={demoFinishRate} />
          <MetricCard label="Tasa click (%)" value={paywallClickRate} />
        </div>
        <FunnelAlerts alerts={alerts} />
      </PanelSection>
    </>
  );
}

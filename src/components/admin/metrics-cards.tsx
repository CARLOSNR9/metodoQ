import type { AdminAlertItem } from "@/lib/server/admin-metrics";

export function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <article className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5 shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{value}</p>
    </article>
  );
}

export function FunnelAlerts({ alerts }: { alerts: AdminAlertItem[] }) {
  return (
    <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
      <h3 className="text-lg font-semibold text-white">Alertas de embudo</h3>
      {alerts.length > 0 ? (
        <ul className="mt-6 space-y-4">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4"
            >
              <p className="text-sm font-semibold text-amber-100">{alert.title}</p>
              <p className="mt-1 text-sm text-amber-200/80">{alert.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-sm text-mq-muted">
          Embudo saludable. No hay alertas críticas de fricción.
        </p>
      )}
    </section>
  );
}

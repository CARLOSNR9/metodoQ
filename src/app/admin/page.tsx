import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { AdminUserForm } from "@/components/admin/user-creation-form";
import { AdminGuard } from "@/components/admin/admin-guard";

export const dynamic = "force-dynamic";

type AdminMetrics = {
  usersCount: number;
  demosCompletedCount: number;
  proConversionsCount: number;
  demoStartedCount: number;
  paywallViewedCount: number;
  paywallClickedCount: number;
};

async function getAdminMetrics(): Promise<AdminMetrics> {
  const db = getFirebaseAdminDb();

  const [
    usersSnapshot,
    demosSnapshot,
    proSnapshot,
    proPlusSnapshot,
    demoStartedSnapshot,
    paywallViewedSnapshot,
    paywallClickedSnapshot,
  ] = await Promise.all([
    db.collection("users").get(),
    db.collection("results").get(),
    db.collection("users").where("plan", "==", "PRO").get(),
    db.collection("users").where("plan", "==", "PRO_PLUS").get(),
    db.collection("analytics_events").where("eventName", "==", "start_demo").get(),
    db.collection("analytics_events").where("eventName", "==", "view_paywall").get(),
    db.collection("analytics_events").where("eventName", "==", "click_upgrade").get(),
  ]);

  return {
    usersCount: usersSnapshot.size,
    demosCompletedCount: demosSnapshot.size,
    proConversionsCount: proSnapshot.size + proPlusSnapshot.size,
    demoStartedCount: demoStartedSnapshot.size,
    paywallViewedCount: paywallViewedSnapshot.size,
    paywallClickedCount: paywallClickedSnapshot.size,
  };
}

type AlertItem = {
  id: string;
  title: string;
  description: string;
};

const MIN_SAMPLE_SIZE = 20;
const MIN_DEMO_FINISH_RATE = 0.4;
const MIN_PAYWALL_CLICK_RATE = 0.2;

function buildAlerts(metrics: AdminMetrics): AlertItem[] {
  const alerts: AlertItem[] = [];
  const demoFinishRate =
    metrics.demoStartedCount > 0 ? metrics.demosCompletedCount / metrics.demoStartedCount : 1;
  const paywallClickRate =
    metrics.paywallViewedCount > 0 ? metrics.paywallClickedCount / metrics.paywallViewedCount : 1;

  if (
    metrics.demoStartedCount >= MIN_SAMPLE_SIZE &&
    demoFinishRate < MIN_DEMO_FINISH_RATE
  ) {
    alerts.push({
      id: "demo-dropoff",
      title: "Alerta: alta caida en demo",
      description: `Inicio->fin demo bajo (${Math.round(demoFinishRate * 100)}%).`,
    });
  }

  if (
    metrics.paywallViewedCount >= MIN_SAMPLE_SIZE &&
    paywallClickRate < MIN_PAYWALL_CLICK_RATE
  ) {
    alerts.push({
      id: "paywall-friction",
      title: "Alerta: bajo click en paywall",
      description: `Click en paywall bajo (${Math.round(paywallClickRate * 100)}%).`,
    });
  }

  for (const alert of alerts) {
    console.warn(`[admin-alert] ${alert.title} ${alert.description}`);
  }

  return alerts;
}

function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <article className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5 shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-muted">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{value}</p>
    </article>
  );
}

export default async function AdminPage() {
  const metrics = await getAdminMetrics();
  const alerts = buildAlerts(metrics);
  const demoFinishRate =
    metrics.demoStartedCount > 0
      ? Math.round((metrics.demosCompletedCount / metrics.demoStartedCount) * 100)
      : 0;
  const paywallClickRate =
    metrics.paywallViewedCount > 0
      ? Math.round((metrics.paywallClickedCount / metrics.paywallViewedCount) * 100)
      : 0;

  return (
    <AdminGuard>
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
        <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
                Admin Panel
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Dashboard Estratégico
              </h1>
              <p className="mt-3 text-sm text-mq-muted sm:text-base">
                Métricas de conversión y gestión de usuarios en tiempo real.
              </p>
            </div>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MetricCard label="Usuarios Totales" value={metrics.usersCount} />
            <MetricCard label="Demos Completados" value={metrics.demosCompletedCount} />
            <MetricCard label="Conversiones PRO" value={metrics.proConversionsCount} />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <MetricCard label="Inicios Demo" value={metrics.demoStartedCount} />
            <MetricCard label="Vistas Paywall" value={metrics.paywallViewedCount} />
            <MetricCard label="Clicks Upgrade" value={metrics.paywallClickedCount} />
            <MetricCard label="Tasa Fin (%)" value={demoFinishRate} />
            <MetricCard label="Tasa Click (%)" value={paywallClickRate} />
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <AdminUserForm />
            
            <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-white">Alertas de Embudo</h2>
              {alerts.length > 0 ? (
                <ul className="mt-6 space-y-4">
                  {alerts.map((alert) => (
                    <li
                      key={alert.id}
                      className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-amber-500/20 p-1.5 text-amber-500">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-amber-100">{alert.title}</p>
                          <p className="mt-1 text-sm text-amber-200/80">{alert.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-12 flex flex-col items-center text-center">
                  <div className="rounded-full bg-mq-surface p-4 text-mq-muted">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm text-mq-muted">
                    Embudo saludable. No hay alertas críticas de fricción.
                  </p>
                </div>
              )}
            </section>
          </div>
        </section>
      </main>
    </AdminGuard>
  );
}

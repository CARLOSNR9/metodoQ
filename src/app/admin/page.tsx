import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

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
    <article className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5">
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
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
            Admin
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Dashboard interno
          </h1>
          <p className="mt-3 text-sm text-mq-muted sm:text-base">
            Vista basica de metricas clave desde Firestore.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard label="Numero de usuarios" value={metrics.usersCount} />
          <MetricCard label="Demos completados" value={metrics.demosCompletedCount} />
          <MetricCard label="Conversiones a PRO" value={metrics.proConversionsCount} />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <MetricCard label="Inicio de demo" value={metrics.demoStartedCount} />
          <MetricCard label="Paywall visto" value={metrics.paywallViewedCount} />
          <MetricCard label="Click en paywall/upgrade" value={metrics.paywallClickedCount} />
          <MetricCard label="Tasa fin demo (%)" value={demoFinishRate} />
          <MetricCard label="Tasa click paywall (%)" value={paywallClickRate} />
        </div>

        <section className="mt-8 rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5">
          <h2 className="text-lg font-semibold text-white">Alertas basicas de conversion</h2>
          {alerts.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {alerts.map((alert) => (
                <li
                  key={alert.id}
                  className="rounded-lg border border-amber-300/40 bg-amber-500/10 px-3 py-2"
                >
                  <p className="text-sm font-semibold text-amber-100">{alert.title}</p>
                  <p className="mt-1 text-sm text-amber-200">{alert.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-mq-muted">
              Sin alertas por ahora. Conversion dentro de umbrales o muestra insuficiente.
            </p>
          )}
        </section>
      </section>
    </main>
  );
}

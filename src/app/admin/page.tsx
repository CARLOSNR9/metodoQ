import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { AdminUserForm } from "@/components/admin/user-creation-form";
import { QuestionCreationForm } from "@/components/admin/question-creation-form";
import { ResidenteApplicationsPanel } from "@/components/admin/residente-applications-panel";
import { AdminClassForm } from "@/components/admin/admin-class-form";
import { AdminClassesPanel } from "@/components/admin/admin-classes-panel";
import { AdminGuard } from "@/components/admin/admin-guard";
import { ManualSalesPanel } from "@/components/admin/manual-sales-panel";
import { UsersDirectoryPanel } from "@/components/admin/users-directory-panel";
import { PanelSection } from "@/components/admin/panel-section";

export const dynamic = "force-dynamic";

type AdminMetrics = {
  usersCount: number;
  demosCompletedCount: number;
  proConversionsCount: number;
  demoStartedCount: number;
  paywallViewedCount: number;
  paywallClickedCount: number;
};

const EMPTY_METRICS: AdminMetrics = {
  usersCount: 0,
  demosCompletedCount: 0,
  proConversionsCount: 0,
  demoStartedCount: 0,
  paywallViewedCount: 0,
  paywallClickedCount: 0,
};

async function getAdminMetrics(): Promise<{ metrics: AdminMetrics; loadError: string | null }> {
  try {
    const db = getFirebaseAdminDb();

    const [
      usersSnapshot,
      demosSnapshot,
      proSnapshot,
      basicoSnapshot,
      residenteSnapshot,
      legacyProPlusSnapshot,
      demoStartedSnapshot,
      paywallViewedSnapshot,
      paywallClickedSnapshot,
    ] = await Promise.all([
      db.collection("users").get(),
      db.collection("results").get(),
      db.collection("users").where("plan", "==", "PRO").get(),
      db.collection("users").where("plan", "==", "BASICO").get(),
      db.collection("users").where("plan", "==", "RESIDENTE").get(),
      db.collection("users").where("plan", "==", "PRO_PLUS").get(),
      db.collection("analytics_events").where("eventName", "==", "start_demo").get(),
      db.collection("analytics_events").where("eventName", "==", "view_paywall").get(),
      db.collection("analytics_events").where("eventName", "==", "click_upgrade").get(),
    ]);

    return {
      metrics: {
        usersCount: usersSnapshot.size,
        demosCompletedCount: demosSnapshot.size,
        proConversionsCount:
          proSnapshot.size +
          basicoSnapshot.size +
          residenteSnapshot.size +
          legacyProPlusSnapshot.size,
        demoStartedCount: demoStartedSnapshot.size,
        paywallViewedCount: paywallViewedSnapshot.size,
        paywallClickedCount: paywallClickedSnapshot.size,
      },
      loadError: null,
    };
  } catch (error) {
    console.error("[admin] No se pudieron cargar las métricas.", error);
    const message =
      error instanceof Error && error.message.includes("FIREBASE_ADMIN")
        ? "Configura FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL y FIREBASE_ADMIN_PRIVATE_KEY en Vercel."
        : "No se pudieron cargar las métricas. Revisa la consola de Firebase y las variables de entorno.";
    return { metrics: EMPTY_METRICS, loadError: message };
  }
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

function FunnelAlerts({ alerts }: { alerts: AlertItem[] }) {
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

export default async function AdminPage() {
  const { metrics, loadError } = await getAdminMetrics();
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
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
              Panel de administración
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Control total de Método Q
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
              Gestión de usuarios, ventas internas y operación del negocio. El contenido docente
              (preguntas y clases) queda al final; los profesores usan su panel dedicado.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a href="/profesor" className="font-medium text-mq-accent hover:underline">
                Panel profesor →
              </a>
              <a href="/moderador" className="font-medium text-mq-accent hover:underline">
                Panel moderador →
              </a>
            </div>
          </header>

          {loadError ? (
            <div
              role="alert"
              className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100"
            >
              {loadError}
            </div>
          ) : null}

          {/* 1. Administración — prioridad máxima */}
          <PanelSection
            title="Administración"
            description="Usuarios, planes, ventas por negociador y postulaciones al Plan Residente. Esto es lo primero que debe hacer un administrador."
            className="mt-10"
          >
            <AdminUserForm />
            <UsersDirectoryPanel />
            <ManualSalesPanel />
            <ResidenteApplicationsPanel />
          </PanelSection>

          {/* 2. Métricas del negocio */}
          <PanelSection
            title="Métricas y embudo"
            description="Vista rápida de conversión, demos y señales de fricción en el paywall."
            className="mt-14"
          >
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

          {/* 3. Contenido — mismo que profesor, abajo en admin */}
          <PanelSection
            title="Contenido educativo"
            description="Banco de preguntas y clases en vivo. Los profesores gestionan esto desde /profesor; aquí queda como respaldo para administradores."
            className="mt-14"
          >
            <QuestionCreationForm />
            <AdminClassForm />
            <AdminClassesPanel />
          </PanelSection>
        </section>
      </main>
    </AdminGuard>
  );
}

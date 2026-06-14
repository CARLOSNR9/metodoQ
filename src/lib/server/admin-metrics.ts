import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

export type AdminMetrics = {
  usersCount: number;
  demosCompletedCount: number;
  proConversionsCount: number;
  demoStartedCount: number;
  paywallViewedCount: number;
  paywallClickedCount: number;
};

export type AdminAlertItem = {
  id: string;
  title: string;
  description: string;
};

const EMPTY_METRICS: AdminMetrics = {
  usersCount: 0,
  demosCompletedCount: 0,
  proConversionsCount: 0,
  demoStartedCount: 0,
  paywallViewedCount: 0,
  paywallClickedCount: 0,
};

const MIN_SAMPLE_SIZE = 20;
const MIN_DEMO_FINISH_RATE = 0.4;
const MIN_PAYWALL_CLICK_RATE = 0.2;

export async function getAdminMetrics(): Promise<{
  metrics: AdminMetrics;
  loadError: string | null;
}> {
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

export function buildAdminAlerts(metrics: AdminMetrics): AdminAlertItem[] {
  const alerts: AdminAlertItem[] = [];
  const demoFinishRate =
    metrics.demoStartedCount > 0 ? metrics.demosCompletedCount / metrics.demoStartedCount : 1;
  const paywallClickRate =
    metrics.paywallViewedCount > 0 ? metrics.paywallClickedCount / metrics.paywallViewedCount : 1;

  if (metrics.demoStartedCount >= MIN_SAMPLE_SIZE && demoFinishRate < MIN_DEMO_FINISH_RATE) {
    alerts.push({
      id: "demo-dropoff",
      title: "Alerta: alta caida en demo",
      description: `Inicio->fin demo bajo (${Math.round(demoFinishRate * 100)}%).`,
    });
  }

  if (metrics.paywallViewedCount >= MIN_SAMPLE_SIZE && paywallClickRate < MIN_PAYWALL_CLICK_RATE) {
    alerts.push({
      id: "paywall-friction",
      title: "Alerta: bajo click en paywall",
      description: `Click en paywall bajo (${Math.round(paywallClickRate * 100)}%).`,
    });
  }

  return alerts;
}

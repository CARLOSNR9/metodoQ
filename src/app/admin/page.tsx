import Link from "next/link";
import { buildAdminAlerts, getAdminMetrics } from "@/lib/server/admin-metrics";
import { FunnelAlerts, MetricCard } from "@/components/admin/metrics-cards";

export const dynamic = "force-dynamic";

const quickLinks = [
  {
    title: "Usuarios",
    description: "Crear cuentas, editar roles y gestionar el directorio.",
    href: "/admin/usuarios",
  },
  {
    title: "Ventas manuales",
    description: "Registrar ventas por negociador fuera de Stripe.",
    href: "/admin/ventas",
  },
  {
    title: "Plan Residente",
    description: "Revisar y gestionar postulaciones al plan.",
    href: "/admin/residente",
  },
  {
    title: "Métricas",
    description: "Embudo de conversión, demos y señales de fricción.",
    href: "/admin/metricas",
  },
  {
    title: "Vista previa de preguntas",
    description: "Revisa enunciado, opciones y retroalimentación como la ve el estudiante.",
    href: "/admin/preguntas",
  },
  {
    title: "Contenido",
    description: "Banco de preguntas y clases en vivo.",
    href: "/admin/contenido",
  },
] as const;

export default async function AdminHomePage() {
  const { metrics, loadError } = await getAdminMetrics();
  const alerts = buildAdminAlerts(metrics);

  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Panel de administración
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Control total de Método Q
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          Gestión de usuarios, ventas internas y operación del negocio. Usa el menú lateral
          para navegar entre las secciones.
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

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <MetricCard label="Usuarios totales" value={metrics.usersCount} />
        <MetricCard label="Demos completados" value={metrics.demosCompletedCount} />
        <MetricCard label="Conversiones de pago" value={metrics.proConversionsCount} />
      </div>

      {alerts.length > 0 ? (
        <div className="mt-8">
          <FunnelAlerts alerts={alerts} />
        </div>
      ) : null}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Estado de Convocatorias</h2>
        {metrics.universityStats && metrics.universityStats.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.universityStats.map((stat) => (
              <div key={stat.name} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-900">{stat.name}</p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Estudiantes PRO:</span>
                    <span className="font-bold text-slate-900">{stat.studentsCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Próximo examen:</span>
                    <span className={`font-bold ${stat.nextConvocatoria ? "text-amber-300" : "text-emerald-400"}`}>
                      {stat.nextConvocatoria ? stat.nextConvocatoria : "Sin programación"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-500">No hay estudiantes con plan de pago activos.</p>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Accesos rápidos</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-slate-200 bg-white-raised/60 p-5 transition hover:border-mq-accent/40 hover:bg-white-raised"
            >
              <p className="font-semibold text-slate-900 group-hover:text-mq-accent">{link.title}</p>
              <p className="mt-1 text-sm text-slate-500">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

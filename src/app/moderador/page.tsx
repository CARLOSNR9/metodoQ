import { ModeratorGuard } from "@/components/moderator/moderator-guard";
import { ResidenteApplicationsPanel } from "@/components/admin/residente-applications-panel";

export const dynamic = "force-dynamic";

export default function ModeratorPage() {
  return (
    <ModeratorGuard>
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-slate-50">
        <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
              Soporte · Plan Residente
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Gestión de postulaciones
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
              Revisa candidatos al Plan Residente, actualiza su estado y coordina el contacto.
              La activación del plan en la plataforma la realiza un administrador.
            </p>
          </header>

          <div className="mt-8">
            <ResidenteApplicationsPanel variant="moderator" />
          </div>

          <section className="mt-8 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6">
            <h2 className="text-sm font-semibold text-slate-900">Flujo recomendado</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-500">
              <li>Marca como <strong className="text-slate-900">Contactado</strong> tras la primera llamada o mensaje.</li>
              <li>
                Si cumple requisitos, marca <strong className="text-slate-900">Aprobado</strong> y avisa a un admin para
                activar el plan en Firestore o creación manual de usuario.
              </li>
              <li>Si no califica, usa <strong className="text-slate-900">Rechazado</strong> con nota interna (fuera de la app).</li>
            </ol>
          </section>
        </section>
      </main>
    </ModeratorGuard>
  );
}

import { adminListClasses } from "@/lib/server/classes-admin";
import { AdminClassRow } from "./admin-class-row";

export async function AdminClassesPanel() {
  let classes: Awaited<ReturnType<typeof adminListClasses>> = [];
  try {
    classes = await adminListClasses();
  } catch (e) {
    console.error("admin classes", e);
  }

  const now = Date.now();

  return (
    <section className="rounded-xl border border-slate-200 bg-white-raised p-6 shadow-xl">
      <h2 className="text-xl font-semibold text-slate-900">Clases en vivo</h2>
      <p className="mt-1 text-sm text-slate-500">
        {classes.length} clase{classes.length === 1 ? "" : "s"} en el sistema.
      </p>

      {classes.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">No hay clases programadas. Crea la primera arriba.</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="pb-3 pr-4">Clase</th>
                <th className="pb-3 pr-4">Destino</th>
                <th className="pb-3 pr-4">Fecha</th>
                <th className="pb-3 pr-4">Estado</th>
                <th className="pb-3 pr-4">Enlace</th>
                <th className="pb-3 text-right">Acción</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls) => {
                const endMs = cls.dateIso
                  ? new Date(cls.dateIso).getTime() + cls.duration * 60_000
                  : 0;
                const isPast = endMs > 0 && endMs < now;
                const destination =
                  cls.visibility === "course" && cls.courseName
                    ? cls.courseName
                    : "Todos Pro / Residente";
                return (
                  <AdminClassRow
                    key={cls.id}
                    id={cls.id}
                    title={cls.title}
                    destination={destination}
                    dateIso={cls.dateIso}
                    duration={cls.duration}
                    meetingLink={cls.meetingLink}
                    isPast={isPast}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

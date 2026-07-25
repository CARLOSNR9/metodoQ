import { adminListClasses } from "@/lib/server/classes-admin";
import { getClassAttendanceStats } from "@/lib/server/attendance-admin";
import { ProfessorClassRow } from "./professor-class-row";

export async function ProfessorClassesPanel() {
  let classes: Awaited<ReturnType<typeof adminListClasses>> = [];
  try {
    classes = await adminListClasses();
  } catch (e) {
    console.error("professor classes", e);
  }

  const now = Date.now();
  const attendanceTotals = new Map<string, number>();

  await Promise.all(
    classes.map(async (cls) => {
      try {
        const stats = await getClassAttendanceStats(cls.id);
        attendanceTotals.set(cls.id, stats.total);
      } catch {
        attendanceTotals.set(cls.id, 0);
      }
    }),
  );

  return (
    <section className="rounded-xl border border-slate-200 bg-white-raised p-6 shadow-xl">
      <h2 className="text-xl font-semibold text-slate-900">Clases en vivo</h2>
      <p className="mt-1 text-sm text-slate-500">
        {classes.length} clase{classes.length === 1 ? "" : "s"} en el sistema. Usa{" "}
        <strong className="font-semibold text-slate-900">Pasar lista</strong> para registrar asistencia
        del grupo.
      </p>

      {classes.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">No hay clases programadas. Crea la primera arriba.</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="pb-3 pr-4">Clase</th>
                <th className="pb-3 pr-4">Destino</th>
                <th className="pb-3 pr-4">Fecha</th>
                <th className="pb-3 pr-4">Estado</th>
                <th className="pb-3 pr-4">Asistencia</th>
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
                  <ProfessorClassRow
                    key={cls.id}
                    id={cls.id}
                    title={cls.title}
                    destination={destination}
                    dateIso={cls.dateIso}
                    duration={cls.duration}
                    meetingLink={cls.meetingLink}
                    isPast={isPast}
                    courseId={cls.courseId}
                    attendanceTotal={attendanceTotals.get(cls.id) ?? 0}
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

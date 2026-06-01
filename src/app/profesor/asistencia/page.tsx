import { ProfessorAttendanceOverview } from "@/components/professor/professor-attendance-overview";

export const dynamic = "force-dynamic";

export default function ProfessorAttendancePage() {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Seguimiento
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Control de asistencia
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Consulta quién asistió o faltó a tus clases. Los alumnos con 3 o más faltas quedan
          resaltados para seguimiento.
        </p>
      </header>

      <div className="mt-10">
        <ProfessorAttendanceOverview />
      </div>
    </>
  );
}

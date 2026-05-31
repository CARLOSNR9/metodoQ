import { ProfessorStudentsView } from "@/components/professor/professor-students-view";
import { getProfessorStudentDirectory } from "@/lib/server/professor-users";

export const dynamic = "force-dynamic";

export default async function ProfessorStudentsPage() {
  let students: Awaited<ReturnType<typeof getProfessorStudentDirectory>> = [];

  try {
    students = await getProfessorStudentDirectory();
  } catch (e) {
    console.error("professor students directory", e);
  }

  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Comunidad
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Alumnos
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Consulta estudiantes por plan y matrícalos en tus grupos. Solo Pro y Residente ven
          clases en vivo en su dashboard.
        </p>
      </header>

      <div className="mt-10">
        <ProfessorStudentsView students={students} />
      </div>
    </>
  );
}

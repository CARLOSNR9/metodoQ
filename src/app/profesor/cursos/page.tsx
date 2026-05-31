import { ProfessorCoursesView } from "@/components/professor/professor-courses-view";
import { getProfessorStudentDirectory } from "@/lib/server/professor-users";

export const dynamic = "force-dynamic";

export default async function ProfessorCoursesPage() {
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
          Organización
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Mis grupos
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-mq-muted sm:text-base">
          Crea grupos de enseñanza, matricula alumnos y luego programa clases exclusivas para
          cada grupo.
        </p>
      </header>

      <div className="mt-10">
        <ProfessorCoursesView students={students} />
      </div>
    </>
  );
}

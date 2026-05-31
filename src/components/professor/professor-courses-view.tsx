import { ProfessorCoursesPanel } from "@/components/professor/professor-courses-panel";
import type { ProfessorStudentRow } from "@/lib/server/professor-users";

type ProfessorCoursesViewProps = {
  students: ProfessorStudentRow[];
};

export function ProfessorCoursesView({ students }: ProfessorCoursesViewProps) {
  return <ProfessorCoursesPanel students={students} />;
}

import { ProfessorStudentsPanel } from "@/components/professor/professor-students-panel";
import type { ProfessorStudentRow } from "@/lib/server/professor-users";

type ProfessorStudentsViewProps = {
  students: ProfessorStudentRow[];
};

export function ProfessorStudentsView({ students }: ProfessorStudentsViewProps) {
  return <ProfessorStudentsPanel students={students} />;
}

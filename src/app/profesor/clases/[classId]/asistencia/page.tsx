import { ProfessorClassAttendancePanel } from "@/components/professor/professor-class-attendance-panel";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ classId: string }>;
};

export default async function ProfessorClassAttendancePage({ params }: PageProps) {
  const { classId } = await params;

  return <ProfessorClassAttendancePanel classId={classId} />;
}

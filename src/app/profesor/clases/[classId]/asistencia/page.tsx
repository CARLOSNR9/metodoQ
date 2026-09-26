import { ProfessorClassAttendancePanel } from "@/components/professor/professor-class-attendance-panel";
import { StaffDataPending } from "@/components/admin/staff-data-pending";
import { requireStaffArea } from "@/lib/server/staff-session";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ classId: string }>;
};

export default async function ProfessorClassAttendancePage({ params }: PageProps) {
  if (!(await requireStaffArea("professor"))) return <StaffDataPending />;

  const { classId } = await params;

  return <ProfessorClassAttendancePanel classId={classId} />;
}

import { notFound } from "next/navigation";
import { StudentActivityView } from "@/components/admin/student-activity-view";
import { getAdminStudentActivity } from "@/lib/server/student-activity";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ uid: string }>;
};

export default async function AdminStudentActivityPage({ params }: PageProps) {
  const { uid } = await params;

  let student: Awaited<ReturnType<typeof getAdminStudentActivity>> = null;
  let loadError: string | null = null;

  try {
    student = await getAdminStudentActivity(uid);
  } catch (error) {
    console.error("[admin] student activity", error);
    loadError =
      "No se pudo cargar la actividad del estudiante. Revisa la configuración de Firebase Admin.";
  }

  if (!loadError && !student) {
    notFound();
  }

  return (
    <>
      {loadError ? (
        <div
          role="alert"
          className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100"
        >
          {loadError}
        </div>
      ) : student ? (
        <StudentActivityView student={student} />
      ) : null}
    </>
  );
}

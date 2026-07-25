import { getAdminUserDirectory } from "@/lib/server/users-admin";
import { UsersDirectoryTable } from "@/components/admin/users-directory-table";

export async function UsersDirectoryPanel() {
  let users: Awaited<ReturnType<typeof getAdminUserDirectory>> = [];
  let loadError: string | null = null;

  try {
    users = await getAdminUserDirectory(200);
  } catch (e) {
    console.error("[admin] users directory", e);
    loadError =
      "No se pudo cargar el directorio de usuarios. Verifica el índice createdAt en Firestore.";
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white-raised p-6 shadow-xl">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Directorio de usuarios</h2>
        <p className="mt-1 text-sm text-slate-500">
          Todos los registrados con estado de actividad, racha y preguntas respondidas. Haz clic en
          Actividad para ver el detalle de estudio de cada alumno.
        </p>
      </div>

      {loadError ? (
        <p className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          {loadError}
        </p>
      ) : (
        <div className="mt-6">
          <UsersDirectoryTable users={users} />
        </div>
      )}
    </section>
  );
}

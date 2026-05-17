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
    <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
      <div>
        <h2 className="text-xl font-semibold text-white">Directorio de usuarios</h2>
        <p className="mt-1 text-sm text-mq-muted">
          Todos los registrados: gratis, compras por Stripe en la web y ventas por negociador.
          Usa el buscador por correo o nombre.
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

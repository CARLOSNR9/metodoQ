import { AdminUserForm } from "@/components/admin/user-creation-form";
import { UsersDirectoryPanel } from "@/components/admin/users-directory-panel";
import { PanelSection } from "@/components/admin/panel-section";

export const dynamic = "force-dynamic";

export default function AdminUsersPage() {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Administración
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Gestión de usuarios
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
          Crea cuentas manualmente, asigna roles y planes, y administra el directorio completo
          de usuarios registrados.
        </p>
      </header>

      <PanelSection
        title="Usuarios y planes"
        description="Usuarios, planes y ventas por negociador. Esto es lo primero que debe hacer un administrador."
        className="mt-10"
      >
        <AdminUserForm />
        <UsersDirectoryPanel />
      </PanelSection>
    </>
  );
}

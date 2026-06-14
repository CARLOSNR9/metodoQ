import { AdminGuard } from "@/components/admin/admin-guard";
import { AdminShell } from "@/components/admin/admin-shell";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AdminGuard showHeader={false}>
      <AdminShell>{children}</AdminShell>
    </AdminGuard>
  );
}

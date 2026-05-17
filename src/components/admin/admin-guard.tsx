"use client";

import { StaffGuard } from "@/components/admin/staff-guard";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  return (
    <StaffGuard
      allowedRoles={["admin"]}
      title="Panel de Administración"
      subtitle="Ingresa con una cuenta de administrador"
    >
      {children}
    </StaffGuard>
  );
}

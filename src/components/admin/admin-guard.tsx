"use client";

import { StaffGuard } from "@/components/admin/staff-guard";

type AdminGuardProps = {
  children: React.ReactNode;
  showHeader?: boolean;
};

export function AdminGuard({ children, showHeader = true }: AdminGuardProps) {
  return (
    <StaffGuard
      allowedRoles={["admin"]}
      title="Panel de Administración"
      subtitle="Ingresa con una cuenta de administrador"
      showHeader={showHeader}
    >
      {children}
    </StaffGuard>
  );
}

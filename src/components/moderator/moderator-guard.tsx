"use client";

import { StaffGuard } from "@/components/admin/staff-guard";

export function ModeratorGuard({ children }: { children: React.ReactNode }) {
  return (
    <StaffGuard
      allowedRoles={["moderator"]}
      title="Panel de Moderación"
      subtitle="Ingresa con una cuenta de moderador (soporte y Plan Residente)"
    >
      {children}
    </StaffGuard>
  );
}

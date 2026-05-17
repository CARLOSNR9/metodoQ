"use client";

import { StaffGuard } from "@/components/admin/staff-guard";

export function ProfessorGuard({ children }: { children: React.ReactNode }) {
  return (
    <StaffGuard
      allowedRoles={["professor"]}
      title="Panel del Profesor"
      subtitle="Ingresa con una cuenta de profesor (Doctor Q o equipo docente)"
    >
      {children}
    </StaffGuard>
  );
}

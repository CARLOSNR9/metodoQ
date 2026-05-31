"use client";

import { StaffGuard } from "@/components/admin/staff-guard";

type ProfessorGuardProps = {
  children: React.ReactNode;
  showHeader?: boolean;
};

export function ProfessorGuard({ children, showHeader = true }: ProfessorGuardProps) {
  return (
    <StaffGuard
      allowedRoles={["professor"]}
      title="Panel del Profesor"
      subtitle="Ingresa con una cuenta de profesor (Doctor Q o equipo docente)"
      showHeader={showHeader}
    >
      {children}
    </StaffGuard>
  );
}

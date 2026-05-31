import { ProfessorGuard } from "@/components/professor/professor-guard";
import { ProfessorShell } from "@/components/professor/professor-shell";

export default function ProfessorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProfessorGuard showHeader={false}>
      <ProfessorShell>{children}</ProfessorShell>
    </ProfessorGuard>
  );
}

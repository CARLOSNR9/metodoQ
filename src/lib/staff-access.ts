import {
  canManageResidenteApplications,
  isAdminUser,
  isModeratorUser,
  isProfessorUser,
} from "@/lib/roles";

/**
 * Áreas del panel de staff. La misma regla decide en el cliente (qué interfaz
 * mostrar) y en el servidor (qué datos se renderizan); la que protege los datos
 * es la del servidor.
 */
export type StaffArea = "admin" | "professor" | "moderator" | "residente";

export function canAccessStaffArea(
  area: StaffArea,
  role: string | null | undefined,
  email: string | null | undefined,
): boolean {
  const isAdmin = isAdminUser(role, email);
  switch (area) {
    case "admin":
      return isAdmin;
    // Los administradores pueden entrar a los paneles de staff para supervisión.
    case "professor":
      return isAdmin || isProfessorUser(role);
    case "moderator":
      return isAdmin || isModeratorUser(role);
    case "residente":
      return canManageResidenteApplications(role, email);
  }
}

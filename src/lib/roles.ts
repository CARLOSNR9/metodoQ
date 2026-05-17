export const USER_ROLES = ["student", "professor", "moderator", "admin"] as const;

export type UserRole = (typeof USER_ROLES)[number];

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "admin@gmail.com";

export function normalizeUserRole(
  role: string | null | undefined,
): UserRole {
  if (
    role === "admin" ||
    role === "professor" ||
    role === "moderator"
  ) {
    return role;
  }
  return "student";
}

/** Admin por rol en Firestore o correo legacy configurado en env */
export function isAdminUser(
  role: string | null | undefined,
  email: string | null | undefined,
): boolean {
  if (normalizeUserRole(role) === "admin") {
    return true;
  }
  return Boolean(email && email === ADMIN_EMAIL);
}

export function isProfessorUser(role: string | null | undefined): boolean {
  return normalizeUserRole(role) === "professor";
}

export function isModeratorUser(role: string | null | undefined): boolean {
  return normalizeUserRole(role) === "moderator";
}

export function canManageResidenteApplications(
  role: string | null | undefined,
  email: string | null | undefined,
): boolean {
  return isAdminUser(role, email) || isModeratorUser(role);
}

export function isStaffUser(
  role: string | null | undefined,
  email: string | null | undefined,
): boolean {
  return (
    isAdminUser(role, email) ||
    isProfessorUser(role) ||
    isModeratorUser(role)
  );
}

export function getRoleLabel(role: UserRole): string {
  switch (role) {
    case "admin":
      return "Administrador";
    case "professor":
      return "Profesor";
    case "moderator":
      return "Moderador";
    default:
      return "Estudiante";
  }
}

export type StaffPanelPath = "/admin" | "/moderador" | "/profesor" | "/dashboard";

export function getPostLoginPath(
  role: string | null | undefined,
  email: string | null | undefined,
): StaffPanelPath {
  if (isAdminUser(role, email)) {
    return "/admin";
  }
  if (isModeratorUser(role)) {
    return "/moderador";
  }
  if (isProfessorUser(role)) {
    return "/profesor";
  }
  return "/dashboard";
}

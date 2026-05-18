const DEFAULT_ADMIN_EMAIL = "admin@gmail.com";

/**
 * Convierte el identificador del formulario (correo o alias corto de admin)
 * al email que Firebase Auth espera.
 */
export function resolveLoginIdentifier(identifier: string): string {
  const trimmed = identifier.trim();
  if (!trimmed) {
    return trimmed;
  }

  if (trimmed.includes("@")) {
    return trimmed;
  }

  const adminEmail =
    process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? DEFAULT_ADMIN_EMAIL;
  const adminLocalPart = adminEmail.split("@")[0] ?? "admin";
  const key = trimmed.toLowerCase();

  if (key === "admin" || key === adminLocalPart.toLowerCase()) {
    return adminEmail;
  }

  return trimmed;
}

import type { User } from "firebase/auth";

const ENDPOINT = "/api/auth/staff-session";

/**
 * Asegura la cookie de sesión de staff que necesitan las páginas del panel
 * para renderizar datos en servidor. Devuelve `true` si se acaba de crear
 * (hay que refrescar la página para que el servidor la use).
 */
export async function syncStaffSession(user: User): Promise<boolean> {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken: await user.getIdToken() }),
    });
    if (!response.ok) return false;
    const data = (await response.json()) as { created?: boolean };
    return data.created === true;
  } catch {
    return false;
  }
}

/** Borra la cookie de sesión de staff (al cerrar sesión o perder el acceso). */
export async function clearStaffSession(): Promise<void> {
  try {
    await fetch(ENDPOINT, { method: "DELETE" });
  } catch {
    // Sin red: la cookie caduca sola y el servidor revalida el role en cada petición.
  }
}

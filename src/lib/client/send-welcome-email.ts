import { getFirebaseAuth } from "@/lib/firebase";

/** Envía correo de bienvenida sin bloquear el flujo de auth. */
export async function sendWelcomeEmailIfPossible(displayName?: string | null) {
  try {
    const user = getFirebaseAuth().currentUser;
    if (!user) return;

    const token = await user.getIdToken();
    await fetch("/api/emails/welcome", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ displayName }),
    });
  } catch {
    // No bloquear login/registro
  }
}

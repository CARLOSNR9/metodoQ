import { doc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

/**
 * Progreso de los retos del Dr. Q, guardado en `users/{uid}.drQChallenges`
 * (id del reto → finalización). Módulo ligero, sin el banco de preguntas de
 * los retos, para poder usarlo desde el perfil de usuario.
 */
export type DrQChallengeCompletion = {
  completedAt: string;
  score: number;
  total: number;
};

export type DrQChallengeCompletions = Record<string, DrQChallengeCompletion>;

const LEGACY_FIELD_PREFIX = "drQChallenges.";

function isCompletion(value: unknown): value is DrQChallengeCompletion {
  return typeof value === "object" && value !== null && "completedAt" in value;
}

/**
 * Retos completados a partir del documento del usuario. Las versiones
 * anteriores guardaban cada reto en un campo literal "drQChallenges.<id>"
 * (setDoc no interpreta los puntos como ruta), así que también se leen esos
 * campos; si un reto aparece en ambos sitios, prevalece el mapa anidado.
 */
export function readDrQChallengeCompletions(
  data: Record<string, unknown> | null | undefined,
): DrQChallengeCompletions {
  if (!data) return {};
  const completions: DrQChallengeCompletions = {};
  for (const [field, value] of Object.entries(data)) {
    if (field.startsWith(LEGACY_FIELD_PREFIX) && isCompletion(value)) {
      completions[field.slice(LEGACY_FIELD_PREFIX.length)] = value;
    }
  }
  const nested = data.drQChallenges;
  if (typeof nested === "object" && nested !== null) {
    for (const [challengeId, value] of Object.entries(nested)) {
      if (isCompletion(value)) completions[challengeId] = value;
    }
  }
  return completions;
}

export async function saveDrQChallengeCompletion(
  userId: string,
  challengeId: string,
  completion: DrQChallengeCompletion,
): Promise<void> {
  // Mapa anidado: con merge, Firestore conserva el resto de retos ya guardados.
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    { drQChallenges: { [challengeId]: completion } },
    { merge: true },
  );
}

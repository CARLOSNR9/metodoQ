import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { sanitizeMirRankingAlias } from "@/lib/mir/weekly-ranking";

/**
 * Participación del alumno en el ranking semanal MIR, en su propio documento:
 * `mirRankingOptIn` (se une o no) y `mirRankingAlias` (nombre que ven los demás).
 */
export type MirRankingSettings = { optIn: boolean; alias: string | null };

export async function getMirRankingSettings(userId: string): Promise<MirRankingSettings> {
  try {
    const data = (await getDoc(doc(getFirebaseDb(), "users", userId))).data();
    return { optIn: data?.mirRankingOptIn === true, alias: sanitizeMirRankingAlias(data?.mirRankingAlias) };
  } catch (error) {
    console.error("No se pudo leer la participación en el ranking MIR.", error);
    return { optIn: false, alias: null };
  }
}

export async function saveMirRankingSettings(userId: string, settings: MirRankingSettings): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    { mirRankingOptIn: settings.optIn, mirRankingAlias: sanitizeMirRankingAlias(settings.alias) },
    { merge: true },
  );
}

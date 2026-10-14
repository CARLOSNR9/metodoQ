import { deleteField, doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { MIR_ROADMAP_STEPS } from "@/lib/mir/spain-roadmap";

/**
 * Pasos de «Tu camino a España» que el alumno ha marcado como hechos, en
 * `users/{uid}.mirRoadmap` (id del paso → ISO de cuando lo marcó).
 */
export type MirRoadmapProgress = Record<string, string>;

const KNOWN_STEP_IDS = new Set(MIR_ROADMAP_STEPS.map((step) => step.id));

export async function getMirRoadmapProgress(userId: string): Promise<MirRoadmapProgress> {
  try {
    const raw = (await getDoc(doc(getFirebaseDb(), "users", userId))).data()?.mirRoadmap ?? {};
    return Object.fromEntries(
      Object.entries(raw as Record<string, unknown>).filter(
        ([stepId, doneAt]) => KNOWN_STEP_IDS.has(stepId) && typeof doneAt === "string",
      ),
    ) as MirRoadmapProgress;
  } catch (error) {
    console.error("No se pudo leer «Tu camino a España».", error);
    return {};
  }
}

export async function setMirRoadmapStepDone(userId: string, stepId: string, done: boolean): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    { mirRoadmap: { [stepId]: done ? new Date().toISOString() : deleteField() } },
    { merge: true },
  );
}

import { doc, getDoc, increment, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import type { TrainingQuestion } from "@/lib/questions/types";
import { getMirNet } from "@/lib/training/mir-scoring";

/**
 * Seguridad al responder en la práctica MIR: antes de elegir opción, el
 * alumno puede marcar si está seguro, duda o responde al azar. Al corregir se
 * compara con el resultado («calibración»): fallar estando seguro señala un
 * error de concepto, y acertar al azar, una pregunta que aún no se sabe.
 * El acumulado se guarda en `users/{uid}.mirConfidenceStats`.
 */
export type MirConfidence = "sure" | "doubt" | "guess";

export const MIR_CONFIDENCE_LEVELS: { value: MirConfidence; label: string }[] = [
  { value: "sure", label: "Seguro" },
  { value: "doubt", label: "Dudo" },
  { value: "guess", label: "Al azar" },
];

export type MirConfidenceTally = { answered: number; correct: number };
export type MirConfidenceStats = Record<MirConfidence, MirConfidenceTally>;

/** Con 4 opciones, por debajo de este acierto arriesgar resta netas (1/4 − 3/4 × 1/3 = 0). */
const BREAK_EVEN_ACCURACY = 0.25;
/** Quien dice «seguro» debería acertar al menos esto; si no, se confía de más. */
const SURE_TARGET_ACCURACY = 0.8;
/** Respuestas mínimas en un nivel para dar un consejo sobre él. */
const MIN_FOR_ADVICE = 3;

const emptyStats = (): MirConfidenceStats => ({
  sure: { answered: 0, correct: 0 },
  doubt: { answered: 0, correct: 0 },
  guess: { answered: 0, correct: 0 },
});

export function isMirConfidence(value: unknown): value is MirConfidence {
  return value === "sure" || value === "doubt" || value === "guess";
}

/** Recuento por nivel de las preguntas respondidas que tienen seguridad marcada. */
export function tallyMirConfidence(
  questions: TrainingQuestion[],
  answers: Record<string, string>,
  confidences: Record<string, MirConfidence>,
): MirConfidenceStats {
  const stats = emptyStats();
  for (const question of questions) {
    const given = answers[question.id];
    const level = confidences[question.id];
    if (!given || !level) continue;
    stats[level].answered += 1;
    if (given === question.correctOptionId) stats[level].correct += 1;
  }
  return stats;
}

export function countMirConfidenceAnswers(stats: MirConfidenceStats): number {
  return stats.sure.answered + stats.doubt.answered + stats.guess.answered;
}

/** Netas de un nivel: aciertos − errores / 3. */
export function getMirConfidenceNet(tally: MirConfidenceTally): number {
  return getMirNet(tally.correct, tally.answered - tally.correct);
}

/** Mensaje bajo la corrección cuando la seguridad y el resultado no cuadran. */
export function getMirConfidenceFeedback(level: MirConfidence | undefined, correct: boolean): string | null {
  if (level === "sure" && !correct) {
    return "Estabas seguro y fallaste: suele ser un error de concepto. Repasa bien la explicación.";
  }
  if (level === "guess" && correct) {
    return "Acertaste al azar: cuenta como acierto, pero aún no la sabes. Vuelve a ella.";
  }
  return null;
}

/** Consejo a partir de la calibración (la de un bloque o la acumulada); null si hay pocos datos. */
export function getMirConfidenceAdvice(stats: MirConfidenceStats): string | null {
  const accuracy = (tally: MirConfidenceTally) => tally.correct / tally.answered;
  if (stats.sure.answered >= MIN_FOR_ADVICE && accuracy(stats.sure) < SURE_TARGET_ACCURACY) {
    return "Fallas bastantes de las que das por seguras: antes de marcar, relee el enunciado y descarta opciones.";
  }
  if (stats.guess.answered >= MIN_FOR_ADVICE) {
    return accuracy(stats.guess) > BREAK_EVEN_ACCURACY
      ? "Cuando respondes al azar aciertas más de 1 de cada 4: en el examen, arriesgar en esas te suma netas."
      : "Al azar aciertas 1 de cada 4 o menos: en el examen, si no puedes descartar ninguna opción, déjala en blanco.";
  }
  if (stats.doubt.answered >= MIN_FOR_ADVICE && getMirConfidenceNet(stats.doubt) > 0) {
    return "En las que dudas sumas netas: en el examen, no las dejes en blanco.";
  }
  return null;
}

export async function getMirConfidenceStats(userId: string): Promise<MirConfidenceStats> {
  const stats = emptyStats();
  try {
    const raw = ((await getDoc(doc(getFirebaseDb(), "users", userId))).data()?.mirConfidenceStats ?? {}) as Record<
      string,
      Partial<MirConfidenceTally>
    >;
    for (const { value } of MIR_CONFIDENCE_LEVELS) {
      const answered = Math.max(0, Number(raw[value]?.answered ?? 0));
      stats[value] = { answered, correct: Math.min(answered, Math.max(0, Number(raw[value]?.correct ?? 0))) };
    }
  } catch (error) {
    console.error("No se pudo leer la seguridad MIR.", error);
  }
  return stats;
}

/** Suma un bloque al acumulado del alumno. */
export async function recordMirConfidenceStats(userId: string, session: MirConfidenceStats): Promise<void> {
  const update = Object.fromEntries(
    MIR_CONFIDENCE_LEVELS.filter(({ value }) => session[value].answered > 0).map(({ value }) => [
      value,
      { answered: increment(session[value].answered), correct: increment(session[value].correct) },
    ]),
  );
  if (Object.keys(update).length === 0) return;
  await setDoc(doc(getFirebaseDb(), "users", userId), { mirConfidenceStats: update }, { merge: true });
}

import { doc, getDoc, increment, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { MIR_QUESTIONS, type MirExamAttempt } from "@/lib/training/mir-convocatoria";
import { getMirSpecialties, getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import type { MirAnswerOutcome } from "@/lib/training/mir-review";

/**
 * Mapa de dominio MIR: aciertos y respuestas acumulados por especialidad,
 * guardados en `users/{uid}.mirSpecialtyStats` (especialidad → tally). Se
 * alimenta de la práctica, el repaso y el simulacro. Una pregunta mixta
 * ("REUMATOLOGÍA / NEFROLOGÍA") cuenta para cada una de sus especialidades.
 */
export type MirSpecialtyTally = { answered: number; correct: number };
export type MirSpecialtyStats = Record<string, MirSpecialtyTally>;

export type MirMasteryLevel = "not_started" | "weak" | "progress" | "mastered";

export type MirSpecialtyMastery = {
  key: string;
  label: string;
  questionCount: number;
  answered: number;
  correct: number;
  /** 0-100, null si no ha respondido ninguna. */
  accuracy: number | null;
  level: MirMasteryLevel;
};

/** Por debajo de este % la especialidad está "a reforzar"; desde MASTERED, "dominada". */
export const MIR_MASTERY_WEAK_BELOW = 50;
export const MIR_MASTERY_MASTERED_FROM = 75;
/** Mínimo de respuestas para que el % se considere representativo. */
export const MIR_MASTERY_MIN_ANSWERS = 3;

const QUESTIONS_BY_ID = new Map(MIR_QUESTIONS.map((question) => [question.id, question]));

export function tallyMirOutcomes(outcomes: MirAnswerOutcome[]): MirSpecialtyStats {
  const stats: MirSpecialtyStats = {};
  for (const { questionId, correct } of outcomes) {
    const question = QUESTIONS_BY_ID.get(questionId);
    if (!question) continue;
    for (const key of getQuestionSpecialtyKeys(question)) {
      const tally = (stats[key] ??= { answered: 0, correct: 0 });
      tally.answered += 1;
      if (correct) tally.correct += 1;
    }
  }
  return stats;
}

/** Respuestas del último simulacro, para arrancar el mapa de quien ya lo hizo. */
function outcomesFromAttempt(attempt: MirExamAttempt | undefined): MirAnswerOutcome[] {
  if (!attempt?.answersByQuestionId) return [];
  return Object.entries(attempt.answersByQuestionId).map(([questionId, optionId]) => ({
    questionId,
    correct: QUESTIONS_BY_ID.get(questionId)?.correctOptionId === optionId,
  }));
}

function getStoredAttempts(data: Record<string, unknown>): MirExamAttempt[] {
  const nested = Object.values((data.mirAttempts ?? {}) as Record<string, MirExamAttempt>);
  const legacy = Object.entries(data)
    .filter(([field]) => field.startsWith("mirAttempts."))
    .map(([, value]) => value as MirExamAttempt);
  return [...nested, ...legacy];
}

/** Stats guardadas; si aún no hay, se derivan de los simulacros ya hechos. */
function readStats(data: Record<string, unknown> | undefined): {
  stats: MirSpecialtyStats;
  isStored: boolean;
} {
  if (data?.mirSpecialtyStats) {
    return { stats: data.mirSpecialtyStats as MirSpecialtyStats, isStored: true };
  }
  const outcomes = data ? getStoredAttempts(data).flatMap(outcomesFromAttempt) : [];
  return { stats: tallyMirOutcomes(outcomes), isStored: false };
}

export async function getMirSpecialtyStats(userId: string): Promise<MirSpecialtyStats> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    return readStats(snap.data()).stats;
  } catch (error) {
    console.error("No se pudo leer el mapa de dominio MIR.", error);
    return {};
  }
}

/** Suma las respuestas de una sesión al mapa de dominio. */
export async function recordMirSpecialtyStats(
  userId: string,
  outcomes: MirAnswerOutcome[],
): Promise<void> {
  const sessionStats = tallyMirOutcomes(outcomes);
  if (Object.keys(sessionStats).length === 0) return;

  const userRef = doc(getFirebaseDb(), "users", userId);
  const { stats: baseStats, isStored } = readStats((await getDoc(userRef)).data());

  let update: Record<string, unknown>;
  if (isStored) {
    update = Object.fromEntries(
      Object.entries(sessionStats).map(([key, tally]) => [
        key,
        { answered: increment(tally.answered), correct: increment(tally.correct) },
      ]),
    );
  } else {
    // Primera escritura: se guarda la base derivada de simulacros + esta sesión.
    const merged: MirSpecialtyStats = { ...baseStats };
    for (const [key, tally] of Object.entries(sessionStats)) {
      const base = merged[key] ?? { answered: 0, correct: 0 };
      merged[key] = {
        answered: base.answered + tally.answered,
        correct: base.correct + tally.correct,
      };
    }
    update = merged;
  }

  await setDoc(
    userRef,
    // mirTotalAnswered cuenta cada respuesta una vez (las mixtas suman en varias especialidades).
    { mirSpecialtyStats: update, mirTotalAnswered: increment(outcomes.length) },
    { merge: true },
  );
}

export function getMasteryLevel(answered: number, accuracy: number | null): MirMasteryLevel {
  if (answered === 0 || accuracy === null) return "not_started";
  if (accuracy < MIR_MASTERY_WEAK_BELOW) return "weak";
  if (accuracy >= MIR_MASTERY_MASTERED_FROM) return "mastered";
  return "progress";
}

/** Todas las especialidades del banco con su dominio, en el orden del banco. */
export function buildMirMastery(stats: MirSpecialtyStats): MirSpecialtyMastery[] {
  return getMirSpecialties().map((specialty) => {
    const tally = stats[specialty.key] ?? { answered: 0, correct: 0 };
    const accuracy = tally.answered > 0 ? Math.round((tally.correct / tally.answered) * 100) : null;
    return {
      ...specialty,
      answered: tally.answered,
      correct: tally.correct,
      accuracy,
      level: getMasteryLevel(tally.answered, accuracy),
    };
  });
}

/**
 * Especialidad que más conviene practicar: la de menor % entre las que
 * tienen respuestas suficientes; si no hay, la de menor % con alguna
 * respuesta; si no hay ninguna, la que más preguntas tiene sin empezar.
 */
export function getWeakestSpecialty(mastery: MirSpecialtyMastery[]): MirSpecialtyMastery | null {
  const byAccuracy = (list: MirSpecialtyMastery[]) =>
    [...list].sort(
      (a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0) || b.answered - a.answered,
    )[0];

  const reliable = mastery.filter(
    (item) => item.answered >= MIR_MASTERY_MIN_ANSWERS && item.level !== "mastered",
  );
  if (reliable.length > 0) return byAccuracy(reliable);

  const started = mastery.filter((item) => item.answered > 0 && item.level !== "mastered");
  if (started.length > 0) return byAccuracy(started);

  return mastery.find((item) => item.level === "not_started") ?? null;
}

export function getOverallAccuracy(stats: MirSpecialtyStats): number | null {
  // Suma por especialidad: una pregunta mixta pesa en cada una, como en el mapa.
  let answered = 0;
  let correct = 0;
  for (const tally of Object.values(stats)) {
    answered += tally.answered;
    correct += tally.correct;
  }
  return answered > 0 ? Math.round((correct / answered) * 100) : null;
}

/**
 * Especialidades empezadas y no dominadas, de la que más conviene reforzar
 * a la que menos: primero las que tienen respuestas suficientes.
 */
export function getSpecialtiesToReinforce(mastery: MirSpecialtyMastery[]): string[] {
  return mastery
    .filter((item) => item.answered > 0 && item.level !== "mastered")
    .sort((a, b) => {
      const aReliable = a.answered >= MIR_MASTERY_MIN_ANSWERS ? 0 : 1;
      const bReliable = b.answered >= MIR_MASTERY_MIN_ANSWERS ? 0 : 1;
      return aReliable - bReliable || (a.accuracy ?? 0) - (b.accuracy ?? 0);
    })
    .map((item) => item.key);
}

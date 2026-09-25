import { doc, getDoc, increment, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { buildMirMastery, getMirSpecialtyStats, getWeakestSpecialty } from "@/lib/training/mir-mastery";
import { getMirQuestionsByIds, getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Reto diario de la doctora MIR: 5 preguntas al día, 2 de la especialidad
 * que más conviene reforzar y 3 sorpresa. El reto del día se fija la
 * primera vez que se abre (`users/{uid}.mirDailyChallenge`), así que
 * recargar no cambia las preguntas. Completarlo cuenta para la racha como
 * cualquier sesión de práctica.
 */
export const MIR_DAILY_CHALLENGE_SIZE = 5;
const FOCUS_QUESTIONS = 2;

export type MirDailyChallenge = {
  dateKey: string;
  questionIds: string[];
  /** Especialidad foco del día (clave de `examArea`), si la hay. */
  focusSpecialty: string | null;
  completedAt?: string;
  correct?: number;
  total?: number;
};

export type MirDailyChallengeState = {
  /** Reto de hoy, o null si todavía no se ha abierto. */
  today: MirDailyChallenge | null;
  completedCount: number;
};

/** PRNG determinista (mulberry32) para que el reto del día sea estable. */
function createRandom(seedText: string): () => number {
  let seed = 0;
  for (let i = 0; i < seedText.length; i += 1) {
    seed = (Math.imul(31, seed) + seedText.charCodeAt(i)) | 0;
  }
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Elige las preguntas del reto: hasta 2 de la especialidad foco y el resto sorpresa. */
export function pickMirDailyQuestions(
  seed: string,
  focusSpecialty: string | null,
  questions: TrainingQuestion[] = MIR_QUESTIONS,
): TrainingQuestion[] {
  const random = createRandom(seed);
  const shuffled = seededShuffle(questions, random);
  const focus = focusSpecialty
    ? shuffled
        .filter((question) => getQuestionSpecialtyKeys(question).includes(focusSpecialty))
        .slice(0, FOCUS_QUESTIONS)
    : [];
  const focusIds = new Set(focus.map((question) => question.id));
  const surprise = shuffled
    .filter((question) => !focusIds.has(question.id))
    .slice(0, MIR_DAILY_CHALLENGE_SIZE - focus.length);
  return seededShuffle([...focus, ...surprise], random);
}

function readState(data: Record<string, unknown> | undefined, todayKey: string): MirDailyChallengeState {
  const stored = data?.mirDailyChallenge as MirDailyChallenge | undefined;
  return {
    today: stored?.dateKey === todayKey ? stored : null,
    completedCount: Number(data?.mirDailyChallengesCompleted ?? 0),
  };
}

/** Estado del reto de hoy sin crearlo (para el panel). */
export async function getMirDailyChallengeState(userId: string): Promise<MirDailyChallengeState> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    return readState(snap.data(), getLocalDateKey(new Date()));
  } catch (error) {
    console.error("No se pudo leer el reto diario MIR.", error);
    return { today: null, completedCount: 0 };
  }
}

/** Devuelve el reto de hoy, creándolo y guardándolo si es la primera vez que se abre. */
export async function getOrCreateMirDailyChallenge(
  userId: string,
): Promise<{ challenge: MirDailyChallenge; questions: TrainingQuestion[]; completedCount: number }> {
  const todayKey = getLocalDateKey(new Date());
  const userRef = doc(getFirebaseDb(), "users", userId);
  const state = readState((await getDoc(userRef)).data(), todayKey);

  if (state.today) {
    return {
      challenge: state.today,
      questions: getMirQuestionsByIds(state.today.questionIds),
      completedCount: state.completedCount,
    };
  }

  const focus = getWeakestSpecialty(buildMirMastery(await getMirSpecialtyStats(userId)));
  const focusSpecialty = focus?.key ?? null;
  const questions = pickMirDailyQuestions(`${userId}:${todayKey}`, focusSpecialty);
  const challenge: MirDailyChallenge = {
    dateKey: todayKey,
    questionIds: questions.map((question) => question.id),
    focusSpecialty,
  };

  try {
    await setDoc(userRef, { mirDailyChallenge: challenge }, { merge: true });
  } catch (error) {
    // Sin guardar, el reto sigue siendo jugable; la semilla lo mantiene estable.
    console.error("No se pudo guardar el reto diario MIR.", error);
  }

  return { challenge, questions, completedCount: state.completedCount };
}

/** Marca el reto de hoy como completado (una sola vez por día). */
export async function completeMirDailyChallenge(
  userId: string,
  challenge: MirDailyChallenge,
  correct: number,
  total: number,
): Promise<void> {
  if (challenge.completedAt) return;
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      mirDailyChallenge: { ...challenge, completedAt: new Date().toISOString(), correct, total },
      mirDailyChallengesCompleted: increment(1),
    },
    { merge: true },
  );
}

import { doc, setDoc } from "firebase/firestore";
import { DR_Q_EVAL_1_QUESTIONS } from "@/data/evaluaciones/evaluacion-dr-q";
import { DR_Q_EVAL_2_QUESTIONS } from "@/data/evaluaciones/evaluacion-dr-q-2";
import { getFirebaseDb } from "@/lib/firebase";
import type { TrainingQuestion } from "@/lib/questions/types";

export type DrQChallengeCompletion = {
  completedAt: string;
  score: number;
  total: number;
};

export type DrQChallenge = {
  id: string;
  label: string;
  editionLabel: string;
  href: string;
  questions: TrainingQuestion[];
};

export const DR_Q_CHALLENGES: DrQChallenge[] = [
  {
    id: "eval1",
    label: "Reto #1 del Dr. Q",
    editionLabel: "Primera Evaluación",
    href: "/dashboard/evaluaciones/primera",
    questions: DR_Q_EVAL_1_QUESTIONS,
  },
  {
    id: "eval2",
    label: "Reto #2 del Dr. Q",
    editionLabel: "Segunda Evaluación",
    href: "/dashboard/evaluaciones/segunda",
    questions: DR_Q_EVAL_2_QUESTIONS,
  },
];

type ProfileWithDrQChallenges = {
  drQChallenges?: Record<string, DrQChallengeCompletion>;
};

/** Primer reto sin completar por el usuario, o null si ya los completó todos. */
export function getNextDrQChallenge(
  profile: ProfileWithDrQChallenges | null | undefined,
): DrQChallenge | null {
  const completed = profile?.drQChallenges ?? {};
  return DR_Q_CHALLENGES.find((challenge) => !completed[challenge.id]) ?? null;
}

export async function saveDrQChallengeCompletion(
  userId: string,
  challengeId: string,
  completion: DrQChallengeCompletion,
): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      [`drQChallenges.${challengeId}`]: completion,
    },
    { merge: true },
  );
}

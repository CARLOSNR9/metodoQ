import { doc, getDoc, setDoc } from "firebase/firestore";
import { UCC_CONV_2025_06_21_QUESTIONS } from "@/data/ucc-conv-2025-06-21-questions";
import { getFirebaseDb } from "@/lib/firebase";
import type { TrainingQuestion } from "@/lib/questions/types";

export type UccConvocatoriaEdition = {
  code: string;
  label: string;
  examDate: string;
  questionCount: number;
  minutes: number;
  /** Permanece abierta hasta que exista la siguiente edición. */
  stayOpenUntilNext?: boolean;
  questions: TrainingQuestion[];
};

export type UccConvocatoriaAttempt = {
  editionCode: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  completedAt: string;
};

export type UccConvocatoriaEditionStatus = {
  edition: UccConvocatoriaEdition;
  phase: "upcoming" | "open" | "closed";
  attempt: UccConvocatoriaAttempt | null;
  canStart: boolean;
  opensLabel: string;
  closesLabel: string | null;
};

export const UCC_CONVOCATORIA_EDITIONS: UccConvocatoriaEdition[] = [
  {
    code: "UCC-2025-06-21",
    label: "Edición #1",
    examDate: "2025-06-21",
    questionCount: 100,
    minutes: 180,
    stayOpenUntilNext: true,
    questions: UCC_CONV_2025_06_21_QUESTIONS,
  },
];

function parseLocalDate(dateKey: string): Date {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

function formatEditionDate(dateKey: string): string {
  return new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parseLocalDate(dateKey));
}

function shuffleQuestions<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getConvocatoriaEdition(code: string): UccConvocatoriaEdition | null {
  return UCC_CONVOCATORIA_EDITIONS.find((edition) => edition.code === code) ?? null;
}

export function selectConvocatoriaExamQuestions(edition: UccConvocatoriaEdition): TrainingQuestion[] {
  return shuffleQuestions(edition.questions);
}

export function buildConvocatoriaExamHref(editionCode: string): string {
  const params = new URLSearchParams();
  params.set("mode", "convocatoria");
  params.set("edition", editionCode);
  return `/dashboard/entrenar?${params.toString()}`;
}

function getEditionPhase(
  edition: UccConvocatoriaEdition,
  today: Date,
  editions: UccConvocatoriaEdition[],
): UccConvocatoriaEditionStatus["phase"] {
  const examDay = parseLocalDate(edition.examDate);
  if (today < examDay) return "upcoming";

  const index = editions.findIndex((item) => item.code === edition.code);
  const nextEdition = editions[index + 1];

  if (nextEdition) {
    return today < parseLocalDate(nextEdition.examDate) ? "open" : "closed";
  }

  if (edition.stayOpenUntilNext) return "open";

  return "closed";
}

export async function getConvocatoriaAttempt(
  userId: string,
  editionCode: string,
): Promise<UccConvocatoriaAttempt | null> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const attempts = snap.data()?.convocatoriaAttempts as
      | Record<string, UccConvocatoriaAttempt>
      | undefined;
    return attempts?.[editionCode] ?? null;
  } catch (error) {
    console.error("No se pudo leer el intento de convocatoria.", error);
    return null;
  }
}

export async function saveConvocatoriaAttempt(
  userId: string,
  attempt: UccConvocatoriaAttempt,
): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      [`convocatoriaAttempts.${attempt.editionCode}`]: attempt,
    },
    { merge: true },
  );
}

export function getFeaturedConvocatoriaEdition(): UccConvocatoriaEdition | null {
  return UCC_CONVOCATORIA_EDITIONS[0] ?? null;
}

export function buildConvocatoriaEditionStatus(options: {
  edition: UccConvocatoriaEdition;
  attempt?: UccConvocatoriaAttempt | null;
  today?: Date;
}): UccConvocatoriaEditionStatus {
  const today = options.today ?? new Date();
  const phase = getEditionPhase(options.edition, today, UCC_CONVOCATORIA_EDITIONS);
  const attempt = options.attempt ?? null;
  const nextEdition = UCC_CONVOCATORIA_EDITIONS[
    UCC_CONVOCATORIA_EDITIONS.findIndex((item) => item.code === options.edition.code) + 1
  ];

  const canStart = phase === "open" && !attempt;

  return {
    edition: options.edition,
    phase,
    attempt,
    canStart,
    opensLabel: formatEditionDate(options.edition.examDate),
    closesLabel: nextEdition ? formatEditionDate(nextEdition.examDate) : null,
  };
}

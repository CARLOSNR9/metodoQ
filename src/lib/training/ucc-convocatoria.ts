import { doc, getDoc, setDoc } from "firebase/firestore";
import { UCC_CONV_2025_06_21_QUESTIONS } from "@/data/ucc-conv-2025-06-21-questions";
import { UCC_CONV_2025_07_05_QUESTIONS } from "@/data/ucc-conv-2025-07-05-questions";
import { UCC_CONV_2025_07_19_QUESTIONS } from "@/data/ucc-conv-2025-07-19-questions";
import { UCC_CONV_2026_07_26_QUESTIONS } from "@/data/ucc-conv-2026-07-26-questions";
import { UCC_CONV_2026_08_09_QUESTIONS } from "@/data/ucc-conv-2026-08-09-questions";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserDemoResults } from "@/lib/results";
import type { TrainingQuestion } from "@/lib/questions/types";

export type UccConvocatoriaEdition = {
  code: string;
  label: string;
  examDate: string;
  questionCount: number;
  minutes: number;
  /** Si es true, su fecha no será sobreescrita por el calendario personal. */
  isGlobal?: boolean;
  /** Permanece abierta hasta que exista la siguiente edición. */
  stayOpenUntilNext?: boolean;
  /** Custom duration for the exam window, defaults to 5 days if undefined. */
  daysOpen?: number;
  /** Custom closing date (YYYY-MM-DD). Overrides daysOpen if provided. */
  closingDate?: string;
  questions: TrainingQuestion[];
};

export type UccConvocatoriaAttempt = {
  editionCode: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  completedAt: string;
  sessionQuestionIds?: string[];
  answersByQuestionId?: Record<string, string>;
  resultId?: string;
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
    closingDate: "2026-08-10",
    questions: UCC_CONV_2025_06_21_QUESTIONS,
  },
  {
    code: "UCC-2025-07-05",
    label: "Edición #2",
    examDate: "2025-07-05",
    questionCount: 100,
    minutes: 180,
    stayOpenUntilNext: true,
    closingDate: "2026-08-10",
    questions: UCC_CONV_2025_07_05_QUESTIONS,
  },
  {
    code: "UCC-2025-07-19",
    label: "Edición #3",
    examDate: "2025-07-19",
    questionCount: 100,
    minutes: 180,
    stayOpenUntilNext: true,
    closingDate: "2026-08-10",
    questions: UCC_CONV_2025_07_19_QUESTIONS,
  },
  {
    code: "UCC-2026-07-26",
    label: "Edición #4",
    examDate: "2026-07-26",
    questionCount: 100,
    minutes: 180,
    isGlobal: true,
    stayOpenUntilNext: true,
    daysOpen: 8,
    closingDate: "2026-08-10",
    questions: UCC_CONV_2026_07_26_QUESTIONS,
  },
  {
    code: "UCC-2026-08-09",
    label: "Edición #5",
    examDate: "2026-08-09",
    questionCount: 100,
    minutes: 180,
    isGlobal: true,
    stayOpenUntilNext: false,
    daysOpen: 8,
    closingDate: "2026-08-17",
    questions: UCC_CONV_2026_08_09_QUESTIONS,
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

export function getUserConvocatoriaSchedule(planStartedAtStr: string | null | undefined): UccConvocatoriaEdition[] {
  if (!planStartedAtStr) return UCC_CONVOCATORIA_EDITIONS;

  const planStartedAt = new Date(planStartedAtStr);
  if (isNaN(planStartedAt.getTime())) return UCC_CONVOCATORIA_EDITIONS;

  // S1 = first Sunday strictly after planStartedAt
  const dayOfWeek = planStartedAt.getDay(); // 0 is Sunday
  const daysToS1 = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
  const s1 = new Date(planStartedAt);
  s1.setDate(s1.getDate() + daysToS1);
  s1.setHours(0, 0, 0, 0);

  // S2 = S1 + 7 days (Second Sunday)
  const s2 = new Date(s1);
  s2.setDate(s2.getDate() + 7);

  // Keep track of the index of personalized editions to calculate the 14-day offset correctly
  let personalizedIndex = 0;

  return UCC_CONVOCATORIA_EDITIONS.map((edition) => {
    if (edition.isGlobal) {
      return edition; // Las globales no se ajustan al plan individual
    }
    
    const examDate = new Date(s2);
    examDate.setDate(examDate.getDate() + (personalizedIndex * 14));
    personalizedIndex++;
    
    // Format to YYYY-MM-DD local
    const yyyy = examDate.getFullYear();
    const mm = String(examDate.getMonth() + 1).padStart(2, "0");
    const dd = String(examDate.getDate()).padStart(2, "0");
    
    return {
      ...edition,
      examDate: `${yyyy}-${mm}-${dd}`,
    };
  });
}

export function getConvocatoriaEdition(
  code: string,
  planStartedAt?: string | null,
): UccConvocatoriaEdition | null {
  const schedule = getUserConvocatoriaSchedule(planStartedAt);
  return schedule.find((edition) => edition.code === code) ?? null;
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
): UccConvocatoriaEditionStatus["phase"] {
  // Simulacros publicados permanecen abiertos sin ventana de cierre.
  if (edition.questions.length > 0) return "open";
  return "upcoming";
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

function buildAttemptFromResult(
  editionCode: string,
  result: {
    id: string;
    scorePercentage: number;
    correctAnswers: number;
    wrongAnswers: number;
    fechaIso: string | null;
    sessionQuestionIds?: string[];
    answersByQuestionId?: Record<string, string>;
  },
): UccConvocatoriaAttempt {
  return {
    editionCode,
    scorePercentage: result.scorePercentage,
    correctAnswers: result.correctAnswers,
    wrongAnswers: result.wrongAnswers,
    completedAt: result.fechaIso ?? new Date().toISOString(),
    sessionQuestionIds: result.sessionQuestionIds,
    answersByQuestionId: result.answersByQuestionId,
    resultId: result.id,
  };
}

/** Lee el intento guardado o reconstruye desde historial si falta el registro en perfil. */
export async function resolveConvocatoriaAttempt(
  userId: string,
  editionCode: string,
): Promise<UccConvocatoriaAttempt | null> {
  const stored = await getConvocatoriaAttempt(userId, editionCode);
  const storedNeedsSessionData = stored
    ? !stored.sessionQuestionIds?.length ||
      !stored.answersByQuestionId ||
      Object.keys(stored.answersByQuestionId).length === 0
    : false;

  if (stored && !storedNeedsSessionData) return stored;

  try {
    const results = await getUserDemoResults(userId);
    const match = results.find(
      (item) =>
        item.sessionType === "convocatoria" && item.convocatoriaEdition === editionCode,
    );
    if (!match) return stored ?? null;

    const fromHistory = buildAttemptFromResult(editionCode, match);
    const attempt = stored
      ? {
          ...stored,
          sessionQuestionIds: stored.sessionQuestionIds?.length
            ? stored.sessionQuestionIds
            : fromHistory.sessionQuestionIds,
          answersByQuestionId:
            stored.answersByQuestionId &&
            Object.keys(stored.answersByQuestionId).length > 0
              ? stored.answersByQuestionId
              : fromHistory.answersByQuestionId,
          resultId: stored.resultId ?? fromHistory.resultId,
        }
      : fromHistory;

    void saveConvocatoriaAttempt(userId, attempt).catch((error) => {
      console.error("No se pudo sincronizar el intento de convocatoria.", error);
    });
    return attempt;
  } catch (error) {
    console.error("No se pudo resolver el intento de convocatoria.", error);
    return stored ?? null;
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

export function getFeaturedConvocatoriaEditionForUser(
  planStartedAt: string | null | undefined,
): UccConvocatoriaEdition | null {
  const schedule = getUserConvocatoriaSchedule(planStartedAt);

  for (let i = schedule.length - 1; i >= 0; i--) {
    if (schedule[i].questions.length > 0) return schedule[i];
  }

  return null;
}

export function buildConvocatoriaEditionStatus(options: {
  edition: UccConvocatoriaEdition;
  schedule: UccConvocatoriaEdition[];
  attempt?: UccConvocatoriaAttempt | null;
  today?: Date;
}): UccConvocatoriaEditionStatus {
  const phase = getEditionPhase(options.edition);
  const attempt = options.attempt ?? null;

  const canStart = phase === "open" && !attempt;

  return {
    edition: options.edition,
    phase,
    attempt,
    canStart,
    opensLabel: formatEditionDate(options.edition.examDate),
    closesLabel: null,
  };
}

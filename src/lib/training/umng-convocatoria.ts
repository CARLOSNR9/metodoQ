import { doc, getDoc, setDoc } from "firebase/firestore";
import { UMNG_CONV_2026_07_26_QUESTIONS } from "@/data/umng-conv-2026-07-26-questions";
import { UMNG_CONV_ED2_QUESTIONS } from "@/data/umng-conv-ed2-questions";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserDemoResults } from "@/lib/results";
import type { TrainingQuestion } from "@/lib/questions/types";

export type UmngConvocatoriaEdition = {
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
  questions: TrainingQuestion[];
};

export type UmngConvocatoriaAttempt = {
  editionCode: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  completedAt: string;
  sessionQuestionIds?: string[];
  answersByQuestionId?: Record<string, string>;
  resultId?: string;
};

export type UmngConvocatoriaEditionStatus = {
  edition: UmngConvocatoriaEdition;
  phase: "upcoming" | "open" | "closed";
  attempt: UmngConvocatoriaAttempt | null;
  canStart: boolean;
  opensLabel: string;
  closesLabel: string | null;
};

export const UMNG_CONVOCATORIA_EDITIONS: UmngConvocatoriaEdition[] = [
  {
    code: "UMNG-2026-07-26",
    label: "Edición #1",
    examDate: "2026-07-26",
    questionCount: 100,
    minutes: 120,
    isGlobal: true,
    stayOpenUntilNext: true,
    daysOpen: 14,
    questions: UMNG_CONV_2026_07_26_QUESTIONS,
  },
  {
    code: "UMNG-ED2",
    label: "Edición #2",
    examDate: "2026-08-02",
    questionCount: 100,
    minutes: 120,
    isGlobal: true,
    stayOpenUntilNext: true,
    daysOpen: 7,
    questions: UMNG_CONV_ED2_QUESTIONS,
  },
  {
    code: "UMNG-ED3",
    label: "Edición #3",
    examDate: "",
    questionCount: 100,
    minutes: 120,
    questions: [],
  }
];
function parseLocalDate(dateKey: string): Date {
  if (!dateKey) return new Date(8640000000000000);
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

function formatEditionDate(dateKey: string): string {
  if (!dateKey) return "Fecha por definir";
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

export function getUserConvocatoriaSchedule(planStartedAtStr: string | null | undefined): UmngConvocatoriaEdition[] {
  if (!planStartedAtStr) return UMNG_CONVOCATORIA_EDITIONS;

  const planStartedAt = new Date(planStartedAtStr);
  if (isNaN(planStartedAt.getTime())) return UMNG_CONVOCATORIA_EDITIONS;

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

  return UMNG_CONVOCATORIA_EDITIONS.map((edition) => {
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
): UmngConvocatoriaEdition | null {
  const schedule = getUserConvocatoriaSchedule(planStartedAt);
  return schedule.find((edition) => edition.code === code) ?? null;
}

export function selectConvocatoriaExamQuestions(edition: UmngConvocatoriaEdition): TrainingQuestion[] {
  return shuffleQuestions(edition.questions);
}

export function buildConvocatoriaExamHref(editionCode: string): string {
  const params = new URLSearchParams();
  params.set("mode", "convocatoria");
  params.set("edition", editionCode);
  return `/dashboard/entrenar?${params.toString()}`;
}

function getEditionPhase(
  edition: UmngConvocatoriaEdition,
  today: Date,
  editions: UmngConvocatoriaEdition[],
): UmngConvocatoriaEditionStatus["phase"] {
  const examDay = parseLocalDate(edition.examDate);
  if (today < examDay) return "upcoming";

  // El examen permanece abierto por un espacio de X días
  const closingDay = new Date(examDay);
  closingDay.setDate(closingDay.getDate() + (edition.daysOpen ?? 5));

  if (today < closingDay) {
    return "open";
  }

  return "closed";
}

export async function getConvocatoriaAttempt(
  userId: string,
  editionCode: string,
): Promise<UmngConvocatoriaAttempt | null> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const attempts = snap.data()?.convocatoriaAttempts as
      | Record<string, UmngConvocatoriaAttempt>
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
): UmngConvocatoriaAttempt {
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
): Promise<UmngConvocatoriaAttempt | null> {
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
  attempt: UmngConvocatoriaAttempt,
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
): UmngConvocatoriaEdition | null {
  const schedule = getUserConvocatoriaSchedule(planStartedAt);
  const today = new Date();

  // Encontramos la primera edición cuya *siguiente* edición aún no ha abierto.
  for (let i = 0; i < schedule.length; i++) {
    const nextEdition = schedule[i + 1];
    if (!nextEdition || today < parseLocalDate(nextEdition.examDate)) {
      return schedule[i];
    }
  }

  return schedule[schedule.length - 1] ?? null;
}

export function buildConvocatoriaEditionStatus(options: {
  edition: UmngConvocatoriaEdition;
  schedule: UmngConvocatoriaEdition[];
  attempt?: UmngConvocatoriaAttempt | null;
  today?: Date;
}): UmngConvocatoriaEditionStatus {
  const today = options.today ?? new Date();
  const schedule = options.schedule;
  const phase = getEditionPhase(options.edition, today, schedule);
  const attempt = options.attempt ?? null;

  const canStart = phase === "open" && !attempt;

  // Calculamos la fecha de cierre
  const examDay = parseLocalDate(options.edition.examDate);
  const closingDay = new Date(examDay);
  closingDay.setDate(closingDay.getDate() + (options.edition.daysOpen ?? 5));
  
  // Format to local date string (e.g. YYYY-MM-DD)
  const yyyy = closingDay.getFullYear();
  const mm = String(closingDay.getMonth() + 1).padStart(2, "0");
  const dd = String(closingDay.getDate()).padStart(2, "0");

  return {
    edition: options.edition,
    phase,
    attempt,
    canStart,
    opensLabel: formatEditionDate(options.edition.examDate),
    closesLabel: formatEditionDate(`${yyyy}-${mm}-${dd}`),
  };
}

import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Progreso de un simulacro MIR a medio hacer, para retomarlo otro día en la
 * misma pregunta. Son 200+ preguntas: el estudiante puede hacerlo por tramos
 * (el reloj solo corre mientras el simulacro está abierto).
 *
 * Se guarda en localStorage (inmediato) y en Firestore en
 * users/{uid}/examDrafts/mir_<edición>, para seguir desde otro dispositivo.
 * `kind: "mir"` hace que el banner genérico de exam-draft.ts lo ignore.
 */
export const MIR_EXAM_DRAFT_VERSION = 1;
export const MIR_EXAM_DRAFT_MAX_AGE_MS = 60 * 24 * 60 * 60 * 1000;
const LOCAL_PREFIX = "mq-mir-exam-draft:v1";
const REMOTE_LOAD_TIMEOUT_MS = 5000;

export type MirExamDraft = {
  version: typeof MIR_EXAM_DRAFT_VERSION;
  kind: "mir";
  userId: string;
  editionCode: string;
  questionIds: string[];
  /** Orden de las opciones tal como se mostraron (se barajan al empezar). */
  optionOrderByQuestionId: Record<string, string[]>;
  answersByQuestionId: Record<string, string>;
  doubtQuestionIds: string[];
  currentQuestionIndex: number;
  secondsLeft: number;
  startedAt: string;
  updatedAt: string;
};

type BuildMirExamDraftInput = {
  userId: string;
  editionCode: string;
  questions: TrainingQuestion[];
  answersByQuestionId: Record<string, string>;
  doubts: Iterable<string>;
  currentQuestionIndex: number;
  secondsLeft: number;
  startedAt: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string" && item.length > 0);
}

export function buildMirExamDraft(input: BuildMirExamDraftInput, now = new Date()): MirExamDraft {
  const optionOrderByQuestionId: Record<string, string[]> = {};
  for (const question of input.questions) {
    optionOrderByQuestionId[question.id] = question.options.map((option) => option.id);
  }
  return {
    version: MIR_EXAM_DRAFT_VERSION,
    kind: "mir",
    userId: input.userId,
    editionCode: input.editionCode,
    questionIds: input.questions.map((question) => question.id),
    optionOrderByQuestionId,
    answersByQuestionId: { ...input.answersByQuestionId },
    doubtQuestionIds: [...input.doubts],
    currentQuestionIndex: input.currentQuestionIndex,
    secondsLeft: Math.max(0, Math.floor(input.secondsLeft)),
    startedAt: input.startedAt,
    updatedAt: now.toISOString(),
  };
}

export function parseMirExamDraft(raw: unknown): MirExamDraft | null {
  if (!isRecord(raw)) return null;
  if (raw.version !== MIR_EXAM_DRAFT_VERSION || raw.kind !== "mir") return null;
  if (typeof raw.userId !== "string" || raw.userId.length === 0) return null;
  if (typeof raw.editionCode !== "string" || raw.editionCode.length === 0) return null;
  if (!isStringArray(raw.questionIds) || raw.questionIds.length === 0) return null;
  if (typeof raw.startedAt !== "string" || typeof raw.updatedAt !== "string") return null;
  const currentQuestionIndex = Number(raw.currentQuestionIndex);
  const secondsLeft = Number(raw.secondsLeft);
  if (!Number.isFinite(currentQuestionIndex) || currentQuestionIndex < 0) return null;
  if (!Number.isFinite(secondsLeft) || secondsLeft <= 0) return null;

  const answersByQuestionId: Record<string, string> = {};
  if (isRecord(raw.answersByQuestionId)) {
    for (const [questionId, optionId] of Object.entries(raw.answersByQuestionId)) {
      if (typeof optionId === "string" && optionId.length > 0) answersByQuestionId[questionId] = optionId;
    }
  }
  const optionOrderByQuestionId: Record<string, string[]> = {};
  if (isRecord(raw.optionOrderByQuestionId)) {
    for (const [questionId, order] of Object.entries(raw.optionOrderByQuestionId)) {
      if (isStringArray(order)) optionOrderByQuestionId[questionId] = order;
    }
  }

  return {
    version: MIR_EXAM_DRAFT_VERSION,
    kind: "mir",
    userId: raw.userId,
    editionCode: raw.editionCode,
    questionIds: raw.questionIds,
    optionOrderByQuestionId,
    answersByQuestionId,
    doubtQuestionIds: isStringArray(raw.doubtQuestionIds) ? raw.doubtQuestionIds : [],
    currentQuestionIndex: Math.min(Math.floor(currentQuestionIndex), raw.questionIds.length - 1),
    secondsLeft: Math.floor(secondsLeft),
    startedAt: raw.startedAt,
    updatedAt: raw.updatedAt,
  };
}

export function isMirExamDraftStale(draft: MirExamDraft, now = Date.now()): boolean {
  const updated = Date.parse(draft.updatedAt);
  if (Number.isNaN(updated)) return true;
  return now - updated > MIR_EXAM_DRAFT_MAX_AGE_MS;
}

export function pickNewerMirExamDraft(a: MirExamDraft | null, b: MirExamDraft | null): MirExamDraft | null {
  if (!a) return b;
  if (!b) return a;
  return Date.parse(a.updatedAt) >= Date.parse(b.updatedAt) ? a : b;
}

/**
 * Reconstruye las preguntas del simulacro guardado, en el mismo orden y con
 * las opciones como se vieron. Devuelve null si alguna pregunta ya no existe
 * en el banco de la edición (el borrador deja de ser válido).
 */
export function restoreMirExamQuestions(
  bank: TrainingQuestion[],
  draft: MirExamDraft,
): TrainingQuestion[] | null {
  const byId = new Map(bank.map((question) => [question.id, question]));
  const restored: TrainingQuestion[] = [];
  for (const questionId of draft.questionIds) {
    const question = byId.get(questionId);
    if (!question) return null;
    const order = draft.optionOrderByQuestionId[questionId];
    const optionsById = new Map(question.options.map((option) => [option.id, option]));
    const sameOptions =
      order && order.length === question.options.length && order.every((optionId) => optionsById.has(optionId));
    if (!sameOptions || question.officialExam) {
      restored.push(question);
      continue;
    }
    restored.push({
      ...question,
      options: order.map((optionId, index) => ({
        ...optionsById.get(optionId)!,
        label: String.fromCharCode(65 + index),
      })),
    });
  }
  return restored;
}

function localKey(userId: string, editionCode: string): string {
  return `${LOCAL_PREFIX}:${userId}:${editionCode}`;
}

function draftDoc(userId: string, editionCode: string) {
  const docId = `mir_${editionCode}`.replace(/[/#[\]]/g, "_");
  return doc(getFirebaseDb(), "users", userId, "examDrafts", docId);
}

export function saveMirExamDraftLocal(draft: MirExamDraft) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(localKey(draft.userId, draft.editionCode), JSON.stringify(draft));
  } catch {
    /* quota / modo privado */
  }
}

function loadMirExamDraftLocal(userId: string, editionCode: string): MirExamDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(localKey(userId, editionCode));
    if (!raw) return null;
    const draft = parseMirExamDraft(JSON.parse(raw));
    if (!draft || draft.userId !== userId || draft.editionCode !== editionCode || isMirExamDraftStale(draft)) {
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

async function loadMirExamDraftRemote(userId: string, editionCode: string): Promise<MirExamDraft | null> {
  try {
    const snap = await getDoc(draftDoc(userId, editionCode));
    if (!snap.exists()) return null;
    const draft = parseMirExamDraft(snap.data());
    if (!draft || draft.userId !== userId || draft.editionCode !== editionCode || isMirExamDraftStale(draft)) {
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

/** El más reciente entre este navegador y la cuenta (puede haber avanzado en otro dispositivo). */
export async function loadMirExamDraft(userId: string, editionCode: string): Promise<MirExamDraft | null> {
  const local = loadMirExamDraftLocal(userId, editionCode);
  // Sin conexión no se bloquea el botón de empezar: basta con el guardado local.
  const remote = await Promise.race([
    loadMirExamDraftRemote(userId, editionCode),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), REMOTE_LOAD_TIMEOUT_MS)),
  ]);
  return pickNewerMirExamDraft(local, remote);
}

export async function saveMirExamDraftRemote(draft: MirExamDraft): Promise<void> {
  try {
    await setDoc(draftDoc(draft.userId, draft.editionCode), draft);
  } catch {
    /* reglas / sin conexión: queda el guardado local */
  }
}

export async function clearMirExamDraft(userId: string, editionCode: string): Promise<void> {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(localKey(userId, editionCode));
    } catch {
      /* ignore */
    }
  }
  try {
    await deleteDoc(draftDoc(userId, editionCode));
  } catch {
    /* ignore */
  }
}

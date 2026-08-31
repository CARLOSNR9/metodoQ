import { collection, deleteDoc, doc, getDocs, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

export const EXAM_DRAFT_VERSION = 1;
export const EXAM_DRAFT_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const LOCAL_PREFIX = "mq-exam-draft:v1";

export type ExamDraftKind = "simulacro" | "convocatoria";

export type ExamDraftIdentity = {
  kind: ExamDraftKind;
  editionCode?: string | null;
  isUccSimulacro?: boolean;
  count?: number | null;
  minutes?: number | null;
};

export type ExamDraft = {
  version: typeof EXAM_DRAFT_VERSION;
  userId: string;
  kind: ExamDraftKind;
  identityKey: string;
  questionIds: string[];
  answersByQuestionId: Record<string, string>;
  currentQuestionIndex: number;
  elapsedSeconds: number;
  responseTimes: number[];
  startedAt: string;
  updatedAt: string;
  editionCode?: string | null;
  isUccSimulacro?: boolean;
  count?: number | null;
  minutes?: number | null;
};

type CreateExamDraftInput = {
  userId: string;
  identity: ExamDraftIdentity;
  questionIds: string[];
  answersByQuestionId: Record<string, string>;
  currentQuestionIndex: number;
  elapsedSeconds: number;
  responseTimes: number[];
  startedAt?: string;
};

let remoteSaveTimer: ReturnType<typeof setTimeout> | null = null;
let pendingRemoteDraft: ExamDraft | null = null;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function buildExamDraftIdentityKey(identity: ExamDraftIdentity): string {
  if (identity.kind === "convocatoria") {
    return `convocatoria:${identity.editionCode ?? "unknown"}`;
  }
  const track = identity.isUccSimulacro ? "ucc" : "std";
  const count = identity.count ?? "auto";
  const minutes = identity.minutes ?? "auto";
  return `simulacro:${track}:${count}:${minutes}`;
}

export function getExamDraftStorageKey(userId: string, identity: ExamDraftIdentity): string {
  return `${LOCAL_PREFIX}:${userId}:${buildExamDraftIdentityKey(identity)}`;
}

function toDraftDocId(identity: ExamDraftIdentity): string {
  return buildExamDraftIdentityKey(identity).replace(/[/#\[\]]/g, "_");
}

function examDraftDoc(userId: string, identity: ExamDraftIdentity) {
  return doc(getFirebaseDb(), "users", userId, "examDrafts", toDraftDocId(identity));
}

export function parseExamDraft(raw: unknown): ExamDraft | null {
  if (!isRecord(raw)) return null;
  if (raw.version !== EXAM_DRAFT_VERSION) return null;
  if (typeof raw.userId !== "string" || raw.userId.length === 0) return null;
  if (raw.kind !== "simulacro" && raw.kind !== "convocatoria") return null;
  if (typeof raw.identityKey !== "string" || raw.identityKey.length === 0) return null;
  if (!Array.isArray(raw.questionIds) || raw.questionIds.length === 0) return null;
  if (!raw.questionIds.every((id) => typeof id === "string" && id.length > 0)) return null;
  if (!isRecord(raw.answersByQuestionId)) return null;
  const answersByQuestionId: Record<string, string> = {};
  for (const [questionId, optionId] of Object.entries(raw.answersByQuestionId)) {
    if (typeof optionId !== "string" || optionId.length === 0) continue;
    answersByQuestionId[questionId] = optionId;
  }
  const currentQuestionIndex = Number(raw.currentQuestionIndex);
  const elapsedSeconds = Number(raw.elapsedSeconds);
  if (!Number.isFinite(currentQuestionIndex) || currentQuestionIndex < 0) return null;
  if (!Number.isFinite(elapsedSeconds) || elapsedSeconds < 0) return null;
  if (typeof raw.startedAt !== "string" || typeof raw.updatedAt !== "string") return null;
  const responseTimes = Array.isArray(raw.responseTimes)
    ? raw.responseTimes.filter((value): value is number => typeof value === "number" && Number.isFinite(value))
    : [];

  return {
    version: EXAM_DRAFT_VERSION,
    userId: raw.userId,
    kind: raw.kind,
    identityKey: raw.identityKey,
    questionIds: raw.questionIds,
    answersByQuestionId,
    currentQuestionIndex: Math.floor(currentQuestionIndex),
    elapsedSeconds: Math.floor(elapsedSeconds),
    responseTimes,
    startedAt: raw.startedAt,
    updatedAt: raw.updatedAt,
    editionCode: typeof raw.editionCode === "string" ? raw.editionCode : null,
    isUccSimulacro: raw.isUccSimulacro === true,
    count: typeof raw.count === "number" ? raw.count : null,
    minutes: typeof raw.minutes === "number" ? raw.minutes : null,
  };
}

export function isExamDraftStale(draft: ExamDraft, now = Date.now()): boolean {
  const updated = Date.parse(draft.updatedAt);
  if (Number.isNaN(updated)) return true;
  return now - updated > EXAM_DRAFT_MAX_AGE_MS;
}

export function pickNewerExamDraft(
  a: ExamDraft | null,
  b: ExamDraft | null,
): ExamDraft | null {
  if (!a) return b;
  if (!b) return a;
  const aTime = Date.parse(a.updatedAt);
  const bTime = Date.parse(b.updatedAt);
  if (Number.isNaN(aTime)) return b;
  if (Number.isNaN(bTime)) return a;
  return aTime >= bTime ? a : b;
}

export function createExamDraft(input: CreateExamDraftInput): ExamDraft {
  const now = new Date().toISOString();
  return {
    version: EXAM_DRAFT_VERSION,
    userId: input.userId,
    kind: input.identity.kind,
    identityKey: buildExamDraftIdentityKey(input.identity),
    questionIds: input.questionIds,
    answersByQuestionId: input.answersByQuestionId,
    currentQuestionIndex: input.currentQuestionIndex,
    elapsedSeconds: input.elapsedSeconds,
    responseTimes: input.responseTimes,
    startedAt: input.startedAt ?? now,
    updatedAt: now,
    editionCode: input.identity.editionCode ?? null,
    isUccSimulacro: input.identity.isUccSimulacro === true,
    count: input.identity.count ?? input.questionIds.length,
    minutes: input.identity.minutes ?? null,
  };
}

export function getExamDraftAnsweredCount(draft: ExamDraft): number {
  return Object.keys(draft.answersByQuestionId).length;
}

export function loadExamDraftLocal(
  userId: string,
  identity: ExamDraftIdentity,
): ExamDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(getExamDraftStorageKey(userId, identity));
    if (!raw) return null;
    const draft = parseExamDraft(JSON.parse(raw));
    if (!draft || draft.userId !== userId) return null;
    if (isExamDraftStale(draft)) {
      localStorage.removeItem(getExamDraftStorageKey(userId, identity));
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

export function saveExamDraftLocal(draft: ExamDraft) {
  if (typeof window === "undefined") return;
  try {
    const identity: ExamDraftIdentity = {
      kind: draft.kind,
      editionCode: draft.editionCode,
      isUccSimulacro: draft.isUccSimulacro,
      count: draft.count,
      minutes: draft.minutes,
    };
    localStorage.setItem(getExamDraftStorageKey(draft.userId, identity), JSON.stringify(draft));
  } catch {
    /* quota / private mode */
  }
}

export function clearExamDraftLocal(userId: string, identity: ExamDraftIdentity) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(getExamDraftStorageKey(userId, identity));
  } catch {
    /* ignore */
  }
}

export async function loadExamDraftRemote(
  userId: string,
  identity: ExamDraftIdentity,
): Promise<ExamDraft | null> {
  try {
    const snap = await getDoc(examDraftDoc(userId, identity));
    if (!snap.exists()) return null;
    const draft = parseExamDraft(snap.data());
    if (!draft || draft.userId !== userId || isExamDraftStale(draft)) {
      if (draft && isExamDraftStale(draft)) {
        await deleteDoc(examDraftDoc(userId, identity)).catch(() => undefined);
      }
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

export async function saveExamDraftRemote(draft: ExamDraft): Promise<void> {
  try {
    const identity: ExamDraftIdentity = {
      kind: draft.kind,
      editionCode: draft.editionCode,
      isUccSimulacro: draft.isUccSimulacro,
      count: draft.count,
      minutes: draft.minutes,
    };
    await setDoc(examDraftDoc(draft.userId, identity), draft);
  } catch {
    /* rules / offline */
  }
}

export async function clearExamDraftRemote(
  userId: string,
  identity: ExamDraftIdentity,
): Promise<void> {
  try {
    await deleteDoc(examDraftDoc(userId, identity));
  } catch {
    /* ignore */
  }
}

export function scheduleExamDraftRemoteSave(draft: ExamDraft, delayMs = 2500) {
  pendingRemoteDraft = draft;
  if (remoteSaveTimer) clearTimeout(remoteSaveTimer);
  remoteSaveTimer = setTimeout(() => {
    const next = pendingRemoteDraft;
    remoteSaveTimer = null;
    pendingRemoteDraft = null;
    if (next) void saveExamDraftRemote(next);
  }, delayMs);
}

export function flushExamDraftRemoteSave(draft?: ExamDraft) {
  const next = draft ?? pendingRemoteDraft;
  if (remoteSaveTimer) {
    clearTimeout(remoteSaveTimer);
    remoteSaveTimer = null;
  }
  pendingRemoteDraft = null;
  if (next) void saveExamDraftRemote(next);
}

export function getExamDraftResumeHref(draft: ExamDraft): string {
  const params = new URLSearchParams();
  if (draft.kind === "convocatoria" && draft.editionCode) {
    params.set("mode", "convocatoria");
    params.set("edition", draft.editionCode);
    params.set("resume", "1");
    return `/dashboard/entrenar?${params.toString()}`;
  }
  params.set("mode", "simulacro");
  params.set("resume", "1");
  if (draft.isUccSimulacro) {
    params.set("ucc", "1");
    if (draft.count) params.set("count", String(draft.count));
    if (draft.minutes) params.set("minutes", String(draft.minutes));
  }
  return `/dashboard/entrenar?${params.toString()}`;
}

export function listExamDraftsLocal(userId: string): ExamDraft[] {
  if (typeof window === "undefined") return [];
  const prefix = `${LOCAL_PREFIX}:${userId}:`;
  const drafts: ExamDraft[] = [];
  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(prefix)) continue;
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const draft = parseExamDraft(JSON.parse(raw));
      if (!draft || draft.userId !== userId || isExamDraftStale(draft)) {
        if (draft && isExamDraftStale(draft)) {
          localStorage.removeItem(key);
        }
        continue;
      }
      drafts.push(draft);
    }
  } catch {
    return drafts;
  }
  return drafts.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
}

export async function listExamDraftsRemote(userId: string): Promise<ExamDraft[]> {
  try {
    const snap = await getDocs(collection(getFirebaseDb(), "users", userId, "examDrafts"));
    const drafts: ExamDraft[] = [];
    for (const item of snap.docs) {
      const draft = parseExamDraft(item.data());
      if (!draft || draft.userId !== userId || isExamDraftStale(draft)) {
        if (draft && isExamDraftStale(draft)) {
          await deleteDoc(item.ref).catch(() => undefined);
        }
        continue;
      }
      drafts.push(draft);
    }
    return drafts.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
  } catch {
    return [];
  }
}

export function pickLatestExamDraft(drafts: ExamDraft[]): ExamDraft | null {
  return drafts.reduce<ExamDraft | null>((latest, draft) => pickNewerExamDraft(latest, draft), null);
}

export async function clearExamDraft(userId: string, identity: ExamDraftIdentity) {
  if (remoteSaveTimer) {
    clearTimeout(remoteSaveTimer);
    remoteSaveTimer = null;
  }
  pendingRemoteDraft = null;
  clearExamDraftLocal(userId, identity);
  await clearExamDraftRemote(userId, identity);
}

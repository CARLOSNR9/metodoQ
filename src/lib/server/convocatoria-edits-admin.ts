import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { getConvocatoriaQuestionBank } from "@/lib/questions/convocatoria-bank";
import {
  mergeConvocatoriaBank,
  type ConvocatoriaOverrideMap,
  type ConvocatoriaQuestionOverride,
} from "@/lib/questions/convocatoria-overrides";
import type { QuestionOption, TrainingQuestion } from "@/lib/questions/types";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

const ROOT_COLLECTION = "convocatoriaEdits";
const QUESTIONS_SUBCOLLECTION = "questions";

function editionOverridesRef(editionCode: string) {
  return getFirebaseAdminDb()
    .collection(ROOT_COLLECTION)
    .doc(editionCode)
    .collection(QUESTIONS_SUBCOLLECTION);
}

function normalizeOptions(value: unknown): QuestionOption[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const options: QuestionOption[] = [];
  for (const raw of value) {
    if (!raw || typeof raw !== "object") continue;
    const record = raw as Record<string, unknown>;
    const id = String(record.id ?? "").trim();
    const text = String(record.text ?? "").trim();
    if (!id) continue;
    const option: QuestionOption = {
      id,
      label: String(record.label ?? id).trim() || id,
      text,
    };
    const distractorProfile = String(record.distractorProfile ?? "").trim();
    if (distractorProfile) option.distractorProfile = distractorProfile;
    const incorrectFeedback = String(record.incorrectFeedback ?? "").trim();
    if (incorrectFeedback) option.incorrectFeedback = incorrectFeedback;
    options.push(option);
  }
  return options.length > 0 ? options : undefined;
}

function mapDocToOverride(
  data: Record<string, unknown>,
): ConvocatoriaQuestionOverride {
  const updatedAt = data.updatedAt;
  let updatedAtIso: string | undefined;
  if (updatedAt instanceof Timestamp) {
    updatedAtIso = updatedAt.toDate().toISOString();
  } else if (typeof updatedAt === "string") {
    updatedAtIso = updatedAt;
  }

  const keyPoints = Array.isArray(data.keyPoints)
    ? data.keyPoints.map((k) => String(k)).filter(Boolean)
    : undefined;

  return {
    statement:
      typeof data.statement === "string" ? data.statement : undefined,
    options: normalizeOptions(data.options),
    correctOptionId:
      typeof data.correctOptionId === "string"
        ? data.correctOptionId
        : undefined,
    explanation:
      typeof data.explanation === "string" ? data.explanation : undefined,
    keyPoints,
    updatedAt: updatedAtIso,
    updatedBy: typeof data.updatedBy === "string" ? data.updatedBy : undefined,
  };
}

/** Todas las correcciones guardadas para una edición, indexadas por id de pregunta. */
export async function adminListConvocatoriaOverrides(
  editionCode: string,
): Promise<ConvocatoriaOverrideMap> {
  const snap = await editionOverridesRef(editionCode).get();
  const overrides: ConvocatoriaOverrideMap = {};
  for (const doc of snap.docs) {
    overrides[doc.id] = mapDocToOverride(doc.data());
  }
  return overrides;
}

export type ConvocatoriaOverrideInput = {
  statement: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  keyPoints: string[];
};

/** Crea o actualiza la corrección de una pregunta (merge). */
export async function adminSaveConvocatoriaOverride(
  editionCode: string,
  questionId: string,
  input: ConvocatoriaOverrideInput,
  editorUid: string,
): Promise<void> {
  const options = normalizeOptions(input.options) ?? [];
  await editionOverridesRef(editionCode)
    .doc(questionId)
    .set(
      {
        statement: input.statement,
        options,
        correctOptionId: input.correctOptionId,
        explanation: input.explanation,
        keyPoints: input.keyPoints,
        updatedAt: FieldValue.serverTimestamp(),
        updatedBy: editorUid,
      },
      { merge: true },
    );
}

/** Elimina la corrección: la pregunta vuelve a su versión original del código. */
export async function adminDeleteConvocatoriaOverride(
  editionCode: string,
  questionId: string,
): Promise<void> {
  await editionOverridesRef(editionCode).doc(questionId).delete();
}

/** Banco base del código con las correcciones del profesor ya aplicadas. */
export async function adminGetMergedConvocatoriaBank(
  editionCode: string,
): Promise<TrainingQuestion[]> {
  const base = getConvocatoriaQuestionBank(editionCode);
  if (base.length === 0) return [];
  const overrides = await adminListConvocatoriaOverrides(editionCode);
  return mergeConvocatoriaBank(base, overrides);
}

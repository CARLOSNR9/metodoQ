import { Timestamp } from "firebase-admin/firestore";
import { getKnownConvocatoriaEditionCodes } from "@/lib/questions/convocatoria-bank";
import {
  mergeConvocatoriaBank,
  type ConvocatoriaOverrideMap,
  type ConvocatoriaQuestionOverride,
} from "@/lib/questions/convocatoria-overrides";
import type { QuestionOption, TrainingQuestion } from "@/lib/questions/types";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

/**
 * Correcciones editoriales de preguntas del banco en código, unificadas por id.
 *
 * Hay dos lugares donde el equipo corrige una pregunta:
 * - `convocatoriaEdits/{edición}/questions/{id}`: revisor de convocatorias del
 *   profesor (por edición).
 * - `questions/{id}`: editor que se abre desde «Preguntas reportadas».
 *
 * Una misma pregunta aparece en varias ediciones (los simulacros Univalle y
 * UdeA reutilizan preguntas UCC/UMNG) y en el repaso posterior al examen. Antes
 * cada corrección solo se veía en el lugar exacto donde se guardó; aquí se
 * fusionan todas por id de pregunta (gana la más reciente) para que el
 * estudiante vea la versión corregida en cualquier simulacro y en su repaso.
 */

const CACHE_TTL_MS = 60_000;
let editionEditsCache: { at: number; map: ConvocatoriaOverrideMap } | null = null;

function toIso(value: unknown): string | undefined {
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (typeof value === "string") return value;
  return undefined;
}

function normalizeOptions(value: unknown): QuestionOption[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const options: QuestionOption[] = [];
  for (const raw of value) {
    if (!raw || typeof raw !== "object") continue;
    const record = raw as Record<string, unknown>;
    const id = String(record.id ?? "").trim();
    if (!id) continue;
    const option: QuestionOption = {
      id,
      label: String(record.label ?? id).trim() || id,
      text: String(record.text ?? "").trim(),
    };
    const distractorProfile = String(record.distractorProfile ?? "").trim();
    if (distractorProfile) option.distractorProfile = distractorProfile;
    const incorrectFeedback = String(record.incorrectFeedback ?? "").trim();
    if (incorrectFeedback) option.incorrectFeedback = incorrectFeedback;
    options.push(option);
  }
  return options.length > 0 ? options : undefined;
}

function mapDocToOverride(data: Record<string, unknown>): ConvocatoriaQuestionOverride {
  const keyPoints = Array.isArray(data.keyPoints)
    ? data.keyPoints.map((k) => String(k)).filter(Boolean)
    : undefined;
  const statement = typeof data.statement === "string" && data.statement.trim() ? data.statement : undefined;
  const explanation =
    typeof data.explanation === "string" && data.explanation.trim() ? data.explanation : undefined;
  const options = normalizeOptions(data.options);
  const correctOptionId =
    typeof data.correctOptionId === "string" &&
    (options ?? []).some((o) => o.id === data.correctOptionId)
      ? data.correctOptionId
      : undefined;

  return {
    statement,
    options,
    // Solo se acepta una respuesta correcta que exista entre las opciones corregidas.
    correctOptionId: options ? correctOptionId : undefined,
    explanation,
    keyPoints: keyPoints && keyPoints.length > 0 ? keyPoints : undefined,
    updatedAt: toIso(data.updatedAt),
    updatedBy: typeof data.updatedBy === "string" ? data.updatedBy : undefined,
  };
}

function isNewer(a: ConvocatoriaQuestionOverride, b: ConvocatoriaQuestionOverride | undefined) {
  if (!b) return true;
  return (a.updatedAt ?? "") > (b.updatedAt ?? "");
}

/** Todas las correcciones del revisor de convocatorias, de todas las ediciones. */
export async function adminListAllEditionEdits(): Promise<ConvocatoriaOverrideMap> {
  if (editionEditsCache && Date.now() - editionEditsCache.at < CACHE_TTL_MS) {
    return editionEditsCache.map;
  }
  const db = getFirebaseAdminDb();
  const snaps = await Promise.all(
    getKnownConvocatoriaEditionCodes().map((code) =>
      db.collection("convocatoriaEdits").doc(code).collection("questions").get(),
    ),
  );
  const map: ConvocatoriaOverrideMap = {};
  for (const snap of snaps) {
    for (const doc of snap.docs) {
      const override = mapDocToOverride(doc.data());
      if (isNewer(override, map[doc.id])) map[doc.id] = override;
    }
  }
  editionEditsCache = { at: Date.now(), map };
  return map;
}

/**
 * Ediciones hechas desde «Preguntas reportadas» (colección `questions`). Solo
 * cuentan los documentos que alguien guardó desde el editor (tienen
 * `updatedAt`); una copia importada sin editar no es una corrección.
 */
async function getReportEditorEdits(ids: string[]): Promise<ConvocatoriaOverrideMap> {
  const db = getFirebaseAdminDb();
  const map: ConvocatoriaOverrideMap = {};
  const unique = [...new Set(ids.filter(Boolean))];
  for (let i = 0; i < unique.length; i += 300) {
    const refs = unique.slice(i, i + 300).map((id) => db.collection("questions").doc(id));
    if (refs.length === 0) continue;
    const docs = await db.getAll(...refs);
    for (const doc of docs) {
      if (!doc.exists) continue;
      const data = doc.data() as Record<string, unknown>;
      if (!data.updatedAt) continue;
      map[doc.id] = mapDocToOverride(data);
    }
  }
  return map;
}

/** Corrección vigente (la más reciente de cualquier origen) para cada id pedido. */
export async function adminGetQuestionCorrections(
  ids: string[],
): Promise<ConvocatoriaOverrideMap> {
  const [editionEdits, reportEdits] = await Promise.all([
    adminListAllEditionEdits(),
    getReportEditorEdits(ids),
  ]);
  const result: ConvocatoriaOverrideMap = {};
  for (const id of ids) {
    const fromEdition = editionEdits[id];
    const fromReports = reportEdits[id];
    const winner =
      fromEdition && fromReports
        ? isNewer(fromReports, fromEdition)
          ? fromReports
          : fromEdition
        : (fromEdition ?? fromReports);
    if (winner) result[id] = winner;
  }
  return result;
}

/** Aplica las correcciones vigentes a una lista de preguntas del código. */
export async function adminApplyQuestionCorrections(
  questions: TrainingQuestion[],
): Promise<{ questions: TrainingQuestion[]; corrections: ConvocatoriaOverrideMap }> {
  const corrections = await adminGetQuestionCorrections(questions.map((q) => q.id));
  return { questions: mergeConvocatoriaBank(questions, corrections), corrections };
}

/** Tras guardar o restaurar, fuerza a releer las correcciones en este servidor. */
export function invalidateQuestionCorrectionsCache() {
  editionEditsCache = null;
}

/** Borra la corrección de una pregunta en todas las ediciones de convocatoria. */
export async function adminDeleteQuestionEditionEdits(questionId: string): Promise<void> {
  const db = getFirebaseAdminDb();
  await Promise.all(
    getKnownConvocatoriaEditionCodes().map((code) =>
      db.collection("convocatoriaEdits").doc(code).collection("questions").doc(questionId).delete(),
    ),
  );
  invalidateQuestionCorrectionsCache();
}

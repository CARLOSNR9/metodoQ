import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { MIR_OFICIAL_2025_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2025-lote-1-questions";
import { MIR_OFICIAL_2025_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2025-lote-2-questions";
import { MIR_OFICIAL_2024_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2024-lote-1-questions";
import { MIR_OFICIAL_2024_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2024-lote-2-questions";
import { MIR_OFICIAL_2023_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2023-lote-1-questions";
import { MIR_OFICIAL_2023_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2023-lote-2-questions";
import { MIR_OFICIAL_2022_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2022-lote-1-questions";
import { MIR_OFICIAL_2022_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2022-lote-2-questions";
import { MIR_OFICIAL_2021_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2021-lote-1-questions";
import { MIR_OFICIAL_2021_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2021-lote-2-questions";
import { MIR_OFICIAL_2020_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2020-lote-1-questions";
import { MIR_OFICIAL_2020_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2020-lote-2-questions";
import { MIR_OFICIAL_2019_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2019-lote-1-questions";
import { MIR_OFICIAL_2019_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2019-lote-2-questions";
import { MIR_OFICIAL_2018_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2018-lote-1-questions";
import { MIR_OFICIAL_2018_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2018-lote-2-questions";
import { MIR_OFICIAL_2017_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2017-lote-1-questions";
import { MIR_OFICIAL_2017_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2017-lote-2-questions";
import { MIR_OFICIAL_2016_LOTE_1_QUESTIONS } from "@/data/mir-oficial-2016-lote-1-questions";
import { MIR_OFICIAL_2016_LOTE_2_QUESTIONS } from "@/data/mir-oficial-2016-lote-2-questions";
import { MIR_OFICIAL_COMPLEMENTARIAS_QUESTIONS } from "@/data/mir-oficial-complementarias-questions";
import { MIR_OFICIAL_RECUPERADAS_QUESTIONS } from "@/data/mir-oficial-recuperadas-questions";
import { MIR_EXAM_DATE } from "@/lib/mir/config";
import { shuffleMirQuestionsOptions } from "@/lib/training/mir-options";
import type { TrainingQuestion } from "@/lib/questions/types";

/** Preguntas oficiales sin imagen de un año que quedaron fuera de sus lotes principales. */
const complementariasDe = (year: number): TrainingQuestion[] =>
  [
    ...MIR_OFICIAL_COMPLEMENTARIAS_QUESTIONS,
    ...MIR_OFICIAL_RECUPERADAS_QUESTIONS,
  ].filter((q) => q.officialExam?.year === year);

/** MIR 2025 oficial: las 183 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2025_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2025_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2025_LOTE_2_QUESTIONS,
  ...complementariasDe(2025),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2024 oficial: las 182 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2024_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2024_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2024_LOTE_2_QUESTIONS,
  ...complementariasDe(2024),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2023 oficial: las 181 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2023_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2023_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2023_LOTE_2_QUESTIONS,
  ...complementariasDe(2023),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2022 oficial: las 183 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2022_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2022_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2022_LOTE_2_QUESTIONS,
  ...complementariasDe(2022),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2021 oficial: las 158 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2021_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2021_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2021_LOTE_2_QUESTIONS,
  ...complementariasDe(2021),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2020 oficial: las 155 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2020_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2020_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2020_LOTE_2_QUESTIONS,
  ...complementariasDe(2020),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2019 oficial: las 197 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2019_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2019_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2019_LOTE_2_QUESTIONS,
  ...complementariasDe(2019),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2018 oficial: las 199 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2018_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2018_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2018_LOTE_2_QUESTIONS,
  ...complementariasDe(2018),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2017 oficial: las 202 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2017_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2017_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2017_LOTE_2_QUESTIONS,
  ...complementariasDe(2017),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** MIR 2016 oficial: las 202 preguntas sin imagen del examen (incluidas las de reserva). */
const MIR_OFICIAL_2016_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2016_LOTE_1_QUESTIONS,
  ...MIR_OFICIAL_2016_LOTE_2_QUESTIONS,
  ...complementariasDe(2016),
].sort((a, b) => (a.officialExam?.number ?? 0) - (b.officialExam?.number ?? 0));

/** Preguntas literales de exámenes MIR oficiales, con su año y número (se amplía por lotes). */
export const MIR_OFFICIAL_QUESTIONS: TrainingQuestion[] = [
  ...MIR_OFICIAL_2025_QUESTIONS,
  ...MIR_OFICIAL_2024_QUESTIONS,
  ...MIR_OFICIAL_2023_QUESTIONS,
  ...MIR_OFICIAL_2022_QUESTIONS,
  ...MIR_OFICIAL_2021_QUESTIONS,
  ...MIR_OFICIAL_2020_QUESTIONS,
  ...MIR_OFICIAL_2019_QUESTIONS,
  ...MIR_OFICIAL_2018_QUESTIONS,
  ...MIR_OFICIAL_2017_QUESTIONS,
  ...MIR_OFICIAL_2016_QUESTIONS,
];

/**
 * Banco completo de preguntas del módulo MIR: solo preguntas de exámenes
 * oficiales. Las 200 preguntas propias de Método Q (src/data/mir-2026-*)
 * se retiraron del banco a petición del equipo médico; los ficheros se
 * conservan por si hubiera que recuperar alguna.
 */
export const MIR_QUESTIONS: TrainingQuestion[] = MIR_OFFICIAL_QUESTIONS;

/** Preguntas de cada simulacro mixto (el completo es la suma de los dos). */
const MIXED_SIMULACRO_SIZE = 100;

/** FNV-1a de 32 bits: un orden «aleatorio» pero estable entre despliegues y dispositivos. */
function stableHash(text: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  // Mezcla final (fmix32 de MurmurHash3): FNV solo reparte mal ids casi iguales.
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0xc2b2ae35);
  hash ^= hash >>> 16;
  return hash >>> 0;
}

const byStableHash = (salt: string) => (a: TrainingQuestion, b: TrainingQuestion) =>
  stableHash(`${salt}:${a.id}`) - stableHash(`${salt}:${b.id}`) || a.id.localeCompare(b.id);

/**
 * Dos simulacros de `MIXED_SIMULACRO_SIZE` preguntas oficiales, sin repetir
 * entre ellos, con el mismo reparto por especialidad que el conjunto de los
 * exámenes oficiales (método del mayor resto). Se excluyen las preguntas
 * anuladas por el Ministerio. La selección es determinista: solo cambia si
 * cambia el banco oficial.
 */
function buildMixedSimulacros(pool: TrainingQuestion[]): [TrainingQuestion[], TrainingQuestion[]] {
  const eligible = pool.filter((question) => !question.tags?.includes("anulada"));
  const total = Math.min(MIXED_SIMULACRO_SIZE * 2, eligible.length);
  const byArea = new Map<string, TrainingQuestion[]>();
  for (const question of eligible) {
    const area = (question.examArea ?? "").split("/")[0].trim();
    byArea.set(area, [...(byArea.get(area) ?? []), question]);
  }
  const areas = [...byArea.keys()].sort((a, b) => a.localeCompare(b, "es"));
  const exact = new Map(areas.map((area) => [area, (byArea.get(area)!.length * total) / eligible.length]));
  const quota = new Map(areas.map((area) => [area, Math.floor(exact.get(area)!)]));
  let remaining = total - [...quota.values()].reduce((sum, value) => sum + value, 0);
  for (const area of [...areas].sort(
    (a, b) => exact.get(b)! - quota.get(b)! - (exact.get(a)! - quota.get(a)!) || a.localeCompare(b, "es"),
  )) {
    if (remaining <= 0) break;
    quota.set(area, quota.get(area)! + 1);
    remaining -= 1;
  }
  const selected = areas.flatMap((area) =>
    [...byArea.get(area)!].sort(byStableHash("seleccion")).slice(0, quota.get(area)),
  );
  const first = selected.filter((_, index) => index % 2 === 0).sort(byStableHash("simulacro-1"));
  const second = selected.filter((_, index) => index % 2 === 1).sort(byStableHash("simulacro-2"));
  return [first, second];
}

const [MIR_SIMULACRO_1_QUESTIONS, MIR_SIMULACRO_2_QUESTIONS] = buildMixedSimulacros(MIR_OFFICIAL_QUESTIONS);

/**
 * Modelo del módulo "Simulacro MIR". Sigue el mismo patrón que las
 * convocatorias UCC/UMNG (src/lib/training/ucc-convocatoria.ts), pero sin
 * la ventana personalizada por plan: el acceso aquí lo controla la compra
 * (ver src/lib/mir/access.ts), no la fecha de inicio del plan mensual.
 */
export type MirExamEdition = {
  code: string;
  label: string;
  description: string;
  /** Fecha objetivo de estudio o de la convocatoria real (YYYY-MM-DD). */
  examDate: string | null;
  questionCount: number;
  minutes: number;
  questions: TrainingQuestion[];
};

export type MirExamAttempt = {
  editionCode: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  completedAt: string;
  sessionQuestionIds?: string[];
  answersByQuestionId?: Record<string, string>;
  resultId?: string;
};

/** Ritmo real del MIR: 4 h 30 min para 210 preguntas (200 + 10 de reserva). */
function getMirExamMinutes(questionCount: number): number {
  return Math.round(questionCount * (270 / 210));
}

function buildEdition(
  code: string,
  label: string,
  description: string,
  questions: TrainingQuestion[],
): MirExamEdition {
  return {
    code,
    label,
    description,
    examDate: MIR_EXAM_DATE,
    questionCount: questions.length,
    minutes: getMirExamMinutes(questions.length),
    questions,
  };
}

/**
 * Simulacros 1, 2 y completo: preguntas oficiales de todas las convocatorias
 * mezcladas, con el reparto por especialidad del MIR (ver buildMixedSimulacros).
 * Usan códigos nuevos para no mezclar sus intentos con los de los antiguos
 * simulacros de preguntas propias. "MIR 2025/…/2016 oficial" usan los
 * exámenes oficiales de cada año. Las ediciones sin preguntas no se muestran.
 */
export const MIR_EXAM_EDITIONS: MirExamEdition[] = [
  buildEdition(
    "MIR-MIXTO-1",
    "Simulacro 1",
    "100 preguntas oficiales de 2016 a 2025, mezcladas con el reparto por especialidad del MIR.",
    MIR_SIMULACRO_1_QUESTIONS,
  ),
  buildEdition(
    "MIR-MIXTO-2",
    "Simulacro 2",
    "Otras 100 preguntas oficiales distintas, con el mismo reparto por especialidad.",
    MIR_SIMULACRO_2_QUESTIONS,
  ),
  buildEdition(
    "MIR-MIXTO-COMPLETO",
    "Simulacro completo",
    "Las 200 preguntas de los simulacros 1 y 2 en una sola sesión, como el examen real.",
    [...MIR_SIMULACRO_1_QUESTIONS, ...MIR_SIMULACRO_2_QUESTIONS],
  ),
  buildEdition(
    "MIR-2025-OFICIAL-1",
    "MIR 2025 oficial",
    "Las preguntas reales del examen MIR 2025 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2025_QUESTIONS,
  ),
  buildEdition(
    "MIR-2024-OFICIAL",
    "MIR 2024 oficial",
    "Las preguntas reales del examen MIR 2024 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2024_QUESTIONS,
  ),
  buildEdition(
    "MIR-2023-OFICIAL",
    "MIR 2023 oficial",
    "Las preguntas reales del examen MIR 2023 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2023_QUESTIONS,
  ),
  buildEdition(
    "MIR-2022-OFICIAL",
    "MIR 2022 oficial",
    "Las preguntas reales del examen MIR 2022 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2022_QUESTIONS,
  ),
  buildEdition(
    "MIR-2021-OFICIAL",
    "MIR 2021 oficial",
    "Las preguntas reales del examen MIR 2021 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2021_QUESTIONS,
  ),
  buildEdition(
    "MIR-2020-OFICIAL",
    "MIR 2020 oficial",
    "Las preguntas reales del examen MIR 2020 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2020_QUESTIONS,
  ),
  buildEdition(
    "MIR-2019-OFICIAL",
    "MIR 2019 oficial",
    "Las preguntas reales del examen MIR 2019 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2019_QUESTIONS,
  ),
  buildEdition(
    "MIR-2018-OFICIAL",
    "MIR 2018 oficial",
    "Las preguntas reales del examen MIR 2018 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2018_QUESTIONS,
  ),
  buildEdition(
    "MIR-2017-OFICIAL",
    "MIR 2017 oficial",
    "Las preguntas reales del examen MIR 2017 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2017_QUESTIONS,
  ),
  buildEdition(
    "MIR-2016-OFICIAL",
    "MIR 2016 oficial",
    "Las preguntas reales del examen MIR 2016 (sin imágenes), tal cual salieron, con explicación de cada una.",
    MIR_OFICIAL_2016_QUESTIONS,
  ),
].filter((edition) => edition.questions.length > 0);

function shuffleQuestions<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getMirEdition(code: string): MirExamEdition | null {
  return MIR_EXAM_EDITIONS.find((edition) => edition.code === code) ?? null;
}

export function selectMirExamQuestions(edition: MirExamEdition): TrainingQuestion[] {
  return shuffleMirQuestionsOptions(shuffleQuestions(edition.questions));
}

/** Pantalla del simulacro con la edición ya elegida. */
export function buildMirSimulacroHref(editionCode: string): string {
  return `/dashboard/mir/simulacro?edicion=${encodeURIComponent(editionCode)}`;
}

export function buildMirExamHref(editionCode: string): string {
  const params = new URLSearchParams();
  params.set("mode", "mir");
  params.set("edition", editionCode);
  return `/dashboard/entrenar?${params.toString()}`;
}

export async function getMirAttempt(
  userId: string,
  editionCode: string,
): Promise<MirExamAttempt | null> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const data = snap.data();
    const attempts = data?.mirAttempts as Record<string, MirExamAttempt> | undefined;
    // Intentos antiguos quedaron en un campo literal "mirAttempts.<code>" (setDoc no
    // interpreta los puntos como ruta anidada); se siguen leyendo como respaldo.
    const legacyAttempt = data?.[`mirAttempts.${editionCode}`] as MirExamAttempt | undefined;
    return attempts?.[editionCode] ?? legacyAttempt ?? null;
  } catch (error) {
    console.error("No se pudo leer el intento del simulacro MIR.", error);
    return null;
  }
}

/** Resumen de cada simulacro entregado, para ver la evolución de la nota. */
export type MirAttemptLogEntry = {
  editionCode: string;
  correct: number;
  wrong: number;
  total: number;
  completedAt: string;
};

function toLogEntry(attempt: MirExamAttempt): MirAttemptLogEntry {
  const edition = getMirEdition(attempt.editionCode);
  return {
    editionCode: attempt.editionCode,
    correct: attempt.correctAnswers,
    wrong: attempt.wrongAnswers,
    total: attempt.sessionQuestionIds?.length ?? edition?.questionCount ?? 0,
    completedAt: attempt.completedAt,
  };
}

/** Guarda el intento como último de su edición y lo añade al registro de intentos. */
export async function saveMirAttempt(userId: string, attempt: MirExamAttempt): Promise<void> {
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      mirAttempts: { [attempt.editionCode]: attempt },
      mirAttemptLog: arrayUnion(toLogEntry(attempt)),
    },
    { merge: true },
  );
}

/**
 * Intentos de simulacro del más antiguo al más reciente. Quien entregó
 * simulacros antes de existir el registro ve al menos su último intento de
 * cada edición.
 */
export async function getMirAttemptLog(userId: string): Promise<MirAttemptLogEntry[]> {
  try {
    const data = (await getDoc(doc(getFirebaseDb(), "users", userId))).data();
    const log = Array.isArray(data?.mirAttemptLog) ? (data.mirAttemptLog as MirAttemptLogEntry[]) : [];
    const logged = new Set(log.map((entry) => `${entry.editionCode}|${entry.completedAt}`));
    const legacyAttempts = Object.entries(data ?? {})
      .filter(([field]) => field.startsWith("mirAttempts."))
      .map(([, value]) => value as MirExamAttempt);
    const latest = [...Object.values((data?.mirAttempts ?? {}) as Record<string, MirExamAttempt>), ...legacyAttempts]
      .map(toLogEntry)
      .filter((entry) => !logged.has(`${entry.editionCode}|${entry.completedAt}`));
    return [...log, ...latest].sort((a, b) => a.completedAt.localeCompare(b.completedAt));
  } catch (error) {
    console.error("No se pudo leer el registro de simulacros MIR.", error);
    return [];
  }
}

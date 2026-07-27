import { enrichQuestionsWithTheoryPills } from "@/lib/questions/enrich-theory-pills";
import type { TrainingQuestion } from "./types";

/** Cache en memoria — las preguntas se cargan solo una vez y se reutilizan. */
let localBankCache: TrainingQuestion[] | null = null;
let allRepositoryCache: TrainingQuestion[] | null = null;

function mergeQuestionsById(sources: TrainingQuestion[][]): TrainingQuestion[] {
  const byId = new Map<string, TrainingQuestion>();
  for (const list of sources) {
    for (const q of list) {
      byId.set(q.id, q);
    }
  }
  return enrichQuestionsWithTheoryPills(Array.from(byId.values()));
}

/**
 * Carga lazy de las fuentes de preguntas principales (entrenamiento).
 * Usa dynamic imports para evitar cargar ~2 MB de datos en el bundle principal.
 */
async function loadTrainingSources(): Promise<TrainingQuestion[][]> {
  const [
    { FALLBACK_QUESTIONS },
    { EXTENDED_QUESTIONS },
    { DR_Q_UNIVERSAL_QUESTIONS },
    { DR_Q_MULTISPECIALTY_QUESTIONS },
    { DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS },
    { DR_Q_BANCO_GENERAL_276_325_QUESTIONS },
    { DR_Q_COEXAM_QUESTIONS },
    { DR_Q_COEXAM_EXTENSION_326_345_QUESTIONS },
    { DR_Q_COEXAM_EXTENSION_346_355_QUESTIONS },
    { DR_Q_COEXAM_EXTENSION_356_380_QUESTIONS },
    { DR_Q_COEXAM_EXTENSION_381_410_QUESTIONS },
    { DR_Q_COEXAM_EXTENSION_411_420_QUESTIONS },
    { UDEA_DIAGNOSTIC_QUESTIONS },
    { UNAL_DIAGNOSTIC_QUESTIONS },
    { UCC_PASTO_DIAGNOSTIC_QUESTIONS },
    { UCC_PASTO_PRO_QUESTIONS },
    { UMNG_DIAGNOSTIC_QUESTIONS },
  ] = await Promise.all([
    import("@/data/fallback-questions"),
    import("@/data/extended-questions"),
    import("@/data/dr-q-universal-questions"),
    import("@/data/dr-q-multispecialty-questions"),
    import("@/data/dr-q-hematologia-banco-general-questions"),
    import("@/data/dr-q-banco-general-276-325-questions"),
    import("@/data/dr-q-coexam-questions"),
    import("@/data/dr-q-coexam-extension-326-345-questions"),
    import("@/data/dr-q-coexam-extension-346-355-questions"),
    import("@/data/dr-q-coexam-extension-356-380-questions"),
    import("@/data/dr-q-coexam-extension-381-410-questions"),
    import("@/data/dr-q-coexam-extension-411-420-questions"),
    import("@/data/udea-diagnostico-questions"),
    import("@/data/unal-diagnostico-questions"),
    import("@/data/ucc-pasto-diagnostico-questions"),
    import("@/data/ucc-pasto-pro-questions"),
    import("@/data/umng-diagnostico-questions"),
  ]);

  return [
    FALLBACK_QUESTIONS,
    EXTENDED_QUESTIONS,
    DR_Q_UNIVERSAL_QUESTIONS,
    DR_Q_MULTISPECIALTY_QUESTIONS,
    DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS,
    DR_Q_BANCO_GENERAL_276_325_QUESTIONS,
    DR_Q_COEXAM_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_326_345_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_346_355_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_356_380_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_381_410_QUESTIONS,
    DR_Q_COEXAM_EXTENSION_411_420_QUESTIONS,
    UDEA_DIAGNOSTIC_QUESTIONS,
    UNAL_DIAGNOSTIC_QUESTIONS,
    UCC_PASTO_DIAGNOSTIC_QUESTIONS,
    UCC_PASTO_PRO_QUESTIONS,
    UMNG_DIAGNOSTIC_QUESTIONS,
  ];
}

/** Banco local para entrenamiento cuando Firestore no está disponible o está vacío. */
export async function getLocalQuestionBank(): Promise<TrainingQuestion[]> {
  if (process.env.NODE_ENV === "production" && localBankCache) return localBankCache;
  const sources = await loadTrainingSources();
  const bank = mergeQuestionsById(sources);
  if (process.env.NODE_ENV === "production") {
    localBankCache = bank;
  }
  return bank;
}

/** Todas las preguntas definidas en el repositorio (revisión editorial). */
export async function getAllRepositoryQuestions(): Promise<TrainingQuestion[]> {
  if (process.env.NODE_ENV === "production" && allRepositoryCache) return allRepositoryCache;

  const trainingSources = await loadTrainingSources();

  const [
    { DAILY_CHALLENGES },
    { UCC_CONV_2025_06_21_QUESTIONS },
    { UCC_CONV_2025_07_05_QUESTIONS },
    { UCC_CONV_2025_07_19_QUESTIONS },
    { UCC_CONV_2026_07_26_QUESTIONS },
  ] = await Promise.all([
    import("@/data/daily-challenges"),
    import("@/data/ucc-conv-2025-06-21-questions"),
    import("@/data/ucc-conv-2025-07-05-questions"),
    import("@/data/ucc-conv-2025-07-19-questions"),
    import("@/data/ucc-conv-2026-07-26-questions"),
  ]);

  const allQuestions = mergeQuestionsById([
    ...trainingSources,
    UCC_CONV_2025_06_21_QUESTIONS,
    UCC_CONV_2025_07_05_QUESTIONS,
    UCC_CONV_2025_07_19_QUESTIONS,
    UCC_CONV_2026_07_26_QUESTIONS,
    DAILY_CHALLENGES,
  ]);
  
  if (process.env.NODE_ENV === "production") {
    allRepositoryCache = allQuestions;
  }
  
  return allQuestions;
}

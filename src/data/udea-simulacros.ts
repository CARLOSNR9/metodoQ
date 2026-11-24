import { UDEA_EXAMEN_REAL_QUESTIONS } from "@/data/udea";
import { UCC_CONV_2025_07_05_QUESTIONS } from "@/data/ucc-conv-2025-07-05-questions";
import { UCC_CONV_2026_08_09_QUESTIONS } from "@/data/ucc-conv-2026-08-09-questions";
import { UCC_CONV_2026_08_23_QUESTIONS } from "@/data/ucc-conv-2026-08-23-questions";
import { UCC_CONV_2026_09_06_QUESTIONS } from "@/data/ucc-conv-2026-09-06-questions";
import { UCC_CONV_2026_09_20_QUESTIONS } from "@/data/ucc-conv-2026-09-20-questions";
import { UMNG_CONV_ED2_QUESTIONS } from "@/data/umng-conv-ed2-questions";
import { UMNG_CONV_ED3_QUESTIONS } from "@/data/umng-conv-ed3-questions";
import { UMNG_CONV_ED4_QUESTIONS } from "@/data/umng-conv-ed4-questions";
import { UMNG_CONV_ED5_QUESTIONS } from "@/data/umng-conv-ed5-questions";
import { UMNG_CONV_ED6_QUESTIONS } from "@/data/umng-conv-ed6-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Simulacros UdeA (examen de admisión a posgrados clínicos, igual para todas
 * las especialidades: medicina general).
 *
 * - Simulacro #1 = el examen REAL de la UdeA (70 preguntas, material entregado
 *   a Método Q por la universidad), en el orden del cuadernillo.
 * - Simulacros #2–#6 = 70 preguntas con la misma mezcla de áreas: 45 de un
 *   banco UMNG (cirugía, trauma, ginecobstetricia, urgencias, toxicología) y 25
 *   de un banco UCC (medicina interna y pediatría). Se excluyen las preguntas
 *   cuyo texto visible (enunciado, opciones, explicación) menciona otra
 *   universidad u hospital, o cuyo caso ocurre en otra ciudad; las elegidas se
 *   rotulan como UdeA. Selección determinista para que el
 *   repaso posterior siempre encuentre cada ítem.
 */
export const UDEA_SIMULACRO_QUESTION_COUNT = 70;
const UMNG_PER_SIMULACRO = 45;
const UCC_PER_SIMULACRO = 25;

/** Ciudades/zonas de otras sedes en el enunciado (el caso debe sentirse propio). */
const FOREIGN_PLACE =
  /pasto|nari[ñn]o|bogot[áa]|ipiales|tumaco|\bcali\b|valle del cauca/i;

/** Otras universidades u hospitales en cualquier texto que ve el estudiante. */
const FOREIGN_INSTITUTION =
  /cooperativa|\bucc\b|\bumng\b|nueva granada|hospital militar|\bhmc\b|univalle|universidad del valle|universidad nacional|\bunal\b|javeriana|rosario/i;

function visibleText(question: TrainingQuestion): string {
  return [
    question.statement,
    question.explanation,
    ...question.options.map((option) => `${option.text} ${option.incorrectFeedback ?? ""}`),
    ...(question.keyPoints ?? []),
    question.topic,
    question.examArea ?? "",
  ].join(" ");
}

function isPortable(question: TrainingQuestion): boolean {
  return (
    question.options.length === 4 &&
    !FOREIGN_PLACE.test(question.statement) &&
    !FOREIGN_INSTITUTION.test(visibleText(question))
  );
}

/** Copia rotulada como UdeA (el ID se conserva para correcciones y reportes). */
function asUdea(question: TrainingQuestion): TrainingQuestion {
  return {
    ...question,
    university: "UdeA",
    tags: ["udea", "simulacro", ...(question.tags ?? []).filter((tag) => !/^(ucc|umng)$/i.test(tag))],
  };
}

/** Toma `count` preguntas repartidas uniformemente a lo largo del banco. */
function pickSpread(bank: TrainingQuestion[], count: number): TrainingQuestion[] {
  const pool = bank.filter(isPortable);
  if (pool.length <= count) return pool;
  const step = pool.length / count;
  const picked: TrainingQuestion[] = [];
  for (let i = 0; i < count; i += 1) {
    picked.push(pool[Math.floor(i * step)]);
  }
  return picked;
}

function compose(umng: TrainingQuestion[], ucc: TrainingQuestion[]): TrainingQuestion[] {
  return [...pickSpread(umng, UMNG_PER_SIMULACRO), ...pickSpread(ucc, UCC_PER_SIMULACRO)].map(asUdea);
}

export const UDEA_SIMULACRO_1_QUESTIONS = UDEA_EXAMEN_REAL_QUESTIONS;
export const UDEA_SIMULACRO_2_QUESTIONS = compose(UMNG_CONV_ED2_QUESTIONS, UCC_CONV_2026_08_09_QUESTIONS);
export const UDEA_SIMULACRO_3_QUESTIONS = compose(UMNG_CONV_ED3_QUESTIONS, UCC_CONV_2026_08_23_QUESTIONS);
export const UDEA_SIMULACRO_4_QUESTIONS = compose(UMNG_CONV_ED4_QUESTIONS, UCC_CONV_2026_09_06_QUESTIONS);
export const UDEA_SIMULACRO_5_QUESTIONS = compose(UMNG_CONV_ED5_QUESTIONS, UCC_CONV_2026_09_20_QUESTIONS);
export const UDEA_SIMULACRO_6_QUESTIONS = compose(UMNG_CONV_ED6_QUESTIONS, UCC_CONV_2025_07_05_QUESTIONS);

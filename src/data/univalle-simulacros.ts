import { UCC_CONV_2025_07_05_QUESTIONS } from "@/data/ucc-conv-2025-07-05-questions";
import { UCC_CONV_2026_07_26_QUESTIONS } from "@/data/ucc-conv-2026-07-26-questions";
import { UCC_CONV_2026_08_09_QUESTIONS } from "@/data/ucc-conv-2026-08-09-questions";
import { UCC_CONV_2026_08_23_QUESTIONS } from "@/data/ucc-conv-2026-08-23-questions";
import { UCC_CONV_2026_09_06_QUESTIONS } from "@/data/ucc-conv-2026-09-06-questions";
import { UCC_CONV_2026_09_20_QUESTIONS } from "@/data/ucc-conv-2026-09-20-questions";
import { UMNG_CONV_2026_07_26_QUESTIONS } from "@/data/umng-conv-2026-07-26-questions";
import { UMNG_CONV_ED2_QUESTIONS } from "@/data/umng-conv-ed2-questions";
import { UMNG_CONV_ED3_QUESTIONS } from "@/data/umng-conv-ed3-questions";
import { UMNG_CONV_ED4_QUESTIONS } from "@/data/umng-conv-ed4-questions";
import { UMNG_CONV_ED5_QUESTIONS } from "@/data/umng-conv-ed5-questions";
import { UMNG_CONV_ED6_QUESTIONS } from "@/data/umng-conv-ed6-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Simulacros Univalle (examen único de medicina general).
 *
 * El examen de Posgrados Clínicos de la Universidad del Valle es el mismo para
 * todas las especialidades y evalúa medicina general. Cada simulacro mezcla:
 * - 65 preguntas de un banco UMNG (cobertura amplia: cirugía, trauma,
 *   ginecobstetricia, urgencias, toxicología, tropical, ética), y
 * - 35 preguntas de un banco UCC (medicina interna y pediatría en profundidad).
 *
 * Se excluyen enunciados que mencionan otra universidad, hospital o ciudad para
 * que el simulacro se sienta propio. La selección es determinista (mismas
 * preguntas para todos), así el repaso posterior siempre encuentra cada ítem.
 */
const UMNG_PER_SIMULACRO = 65;
const UCC_PER_SIMULACRO = 35;

const FOREIGN_CONTEXT =
  /pasto|nari[ñn]o|cooperativa|\bucc\b|\bumng\b|militar|nueva granada|\bhmc\b|bogot[áa]|ipiales|tumaco/i;

function isPortable(question: TrainingQuestion): boolean {
  return question.options.length === 4 && !FOREIGN_CONTEXT.test(question.statement);
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
  return [...pickSpread(umng, UMNG_PER_SIMULACRO), ...pickSpread(ucc, UCC_PER_SIMULACRO)];
}

export const UNIVALLE_SIMULACRO_1_QUESTIONS = compose(
  UMNG_CONV_2026_07_26_QUESTIONS,
  UCC_CONV_2026_07_26_QUESTIONS,
);
export const UNIVALLE_SIMULACRO_2_QUESTIONS = compose(
  UMNG_CONV_ED2_QUESTIONS,
  UCC_CONV_2026_08_09_QUESTIONS,
);
export const UNIVALLE_SIMULACRO_3_QUESTIONS = compose(
  UMNG_CONV_ED3_QUESTIONS,
  UCC_CONV_2026_08_23_QUESTIONS,
);
export const UNIVALLE_SIMULACRO_4_QUESTIONS = compose(
  UMNG_CONV_ED4_QUESTIONS,
  UCC_CONV_2026_09_06_QUESTIONS,
);
export const UNIVALLE_SIMULACRO_5_QUESTIONS = compose(
  UMNG_CONV_ED5_QUESTIONS,
  UCC_CONV_2026_09_20_QUESTIONS,
);
export const UNIVALLE_SIMULACRO_6_QUESTIONS = compose(
  UMNG_CONV_ED6_QUESTIONS,
  UCC_CONV_2025_07_05_QUESTIONS,
);

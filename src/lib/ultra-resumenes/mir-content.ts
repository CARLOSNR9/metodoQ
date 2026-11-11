import type { UltraEntry } from "./types";

/**
 * Contenido propio de los ultra resúmenes MIR por especialidad (temas por
 * rentabilidad y fichas). Generado por scripts/ultra-resumenes/build_mir.py.
 */
export type MirUltraContent = {
  slug: string;
  title: string;
  /** Especialidades del banco (examArea) que entran en esta categoría. */
  keys: string[];
  /** Preguntas MIR del periodo repartidas entre los temas. */
  total: number;
  period: string;
  cardCount: number;
  topicCount: number;
  load: () => Promise<UltraEntry[]>;
};

export const MIR_ULTRA_CONTENT: MirUltraContent[] = [
  { slug: "neumologia", title: "Neumología y cirugía torácica", keys: ["NEUMOLOGÍA"], total: 143, period: "2016-2026", cardCount: 54, topicCount: 18, load: () => import("@/data/ultra-resumenes/mir/neumologia").then((m) => m.ENTRIES) },
];

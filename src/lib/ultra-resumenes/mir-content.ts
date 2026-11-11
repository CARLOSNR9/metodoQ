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
  { slug: "cardiologia", title: "Cardiología y cirugía cardiovascular", keys: ["CARDIOLOGÍA", "CIRUGÍA VASCULAR"], total: 187, period: "2016-2026", cardCount: 57, topicCount: 17, load: () => import("@/data/ultra-resumenes/mir/cardiologia").then((m) => m.ENTRIES) },
  { slug: "digestivo", title: "Digestivo y cirugía general", keys: ["APARATO DIGESTIVO", "CIRUGÍA GENERAL"], total: 237, period: "2016-2026", cardCount: 48, topicCount: 22, load: () => import("@/data/ultra-resumenes/mir/digestivo").then((m) => m.ENTRIES) },
  { slug: "endocrinologia", title: "Endocrinología", keys: ["ENDOCRINOLOGÍA"], total: 141, period: "2016-2026", cardCount: 37, topicCount: 10, load: () => import("@/data/ultra-resumenes/mir/endocrinologia").then((m) => m.ENTRIES) },
  { slug: "infecciosas", title: "Enfermedades infecciosas y microbiología", keys: ["ENFERMEDADES INFECCIOSAS"], total: 161, period: "2016-2026", cardCount: 33, topicCount: 14, load: () => import("@/data/ultra-resumenes/mir/infecciosas").then((m) => m.ENTRIES) },
  { slug: "neumologia", title: "Neumología y cirugía torácica", keys: ["NEUMOLOGÍA"], total: 143, period: "2016-2026", cardCount: 54, topicCount: 18, load: () => import("@/data/ultra-resumenes/mir/neumologia").then((m) => m.ENTRIES) },
];

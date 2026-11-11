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
  { slug: "dermatologia", title: "Dermatología", keys: ["DERMATOLOGÍA"], total: 59, period: "2016-2026", cardCount: 10, topicCount: 6, load: () => import("@/data/ultra-resumenes/mir/dermatologia").then((m) => m.ENTRIES) },
  { slug: "digestivo", title: "Digestivo y cirugía general", keys: ["APARATO DIGESTIVO", "CIRUGÍA GENERAL"], total: 237, period: "2016-2026", cardCount: 49, topicCount: 23, load: () => import("@/data/ultra-resumenes/mir/digestivo").then((m) => m.ENTRIES) },
  { slug: "endocrinologia", title: "Endocrinología", keys: ["ENDOCRINOLOGÍA"], total: 141, period: "2016-2026", cardCount: 37, topicCount: 10, load: () => import("@/data/ultra-resumenes/mir/endocrinologia").then((m) => m.ENTRIES) },
  { slug: "estadistica", title: "Estadística y epidemiología", keys: ["ESTADÍSTICA Y EPIDEMIOLOGÍA"], total: 108, period: "2016-2026", cardCount: 9, topicCount: 6, load: () => import("@/data/ultra-resumenes/mir/estadistica").then((m) => m.ENTRIES) },
  { slug: "ginecologia", title: "Ginecología y obstetricia", keys: ["GINECOLOGÍA", "OBSTETRICIA"], total: 133, period: "2016-2026", cardCount: 33, topicCount: 16, load: () => import("@/data/ultra-resumenes/mir/ginecologia").then((m) => m.ENTRIES) },
  { slug: "hematologia", title: "Hematología", keys: ["HEMATOLOGÍA"], total: 89, period: "2016-2026", cardCount: 23, topicCount: 11, load: () => import("@/data/ultra-resumenes/mir/hematologia").then((m) => m.ENTRIES) },
  { slug: "infecciosas", title: "Enfermedades infecciosas y microbiología", keys: ["ENFERMEDADES INFECCIOSAS"], total: 161, period: "2016-2026", cardCount: 33, topicCount: 14, load: () => import("@/data/ultra-resumenes/mir/infecciosas").then((m) => m.ENTRIES) },
  { slug: "inmunologia", title: "Inmunología", keys: ["INMUNOLOGÍA"], total: 50, period: "2016-2026", cardCount: 6, topicCount: 3, load: () => import("@/data/ultra-resumenes/mir/inmunologia").then((m) => m.ENTRIES) },
  { slug: "miscelanea", title: "Bioética, geriatría, paliativos y ciencias básicas", keys: ["BIOÉTICA Y LEGISLACIÓN", "GERIATRÍA", "CUIDADOS PALIATIVOS", "FARMACOLOGÍA", "GENÉTICA", "MEDICINA INTENSIVA", "MEDICINA PREVENTIVA"], total: 219, period: "2016-2026", cardCount: 15, topicCount: 8, load: () => import("@/data/ultra-resumenes/mir/miscelanea").then((m) => m.ENTRIES) },
  { slug: "nefrologia", title: "Nefrología", keys: ["NEFROLOGÍA"], total: 102, period: "2016-2026", cardCount: 14, topicCount: 8, load: () => import("@/data/ultra-resumenes/mir/nefrologia").then((m) => m.ENTRIES) },
  { slug: "neumologia", title: "Neumología y cirugía torácica", keys: ["NEUMOLOGÍA"], total: 143, period: "2016-2026", cardCount: 54, topicCount: 18, load: () => import("@/data/ultra-resumenes/mir/neumologia").then((m) => m.ENTRIES) },
  { slug: "neurologia", title: "Neurología y neurocirugía", keys: ["NEUROLOGÍA"], total: 153, period: "2016-2026", cardCount: 34, topicCount: 10, load: () => import("@/data/ultra-resumenes/mir/neurologia").then((m) => m.ENTRIES) },
  { slug: "oftalmologia", title: "Oftalmología", keys: ["OFTALMOLOGÍA"], total: 37, period: "2016-2026", cardCount: 7, topicCount: 3, load: () => import("@/data/ultra-resumenes/mir/oftalmologia").then((m) => m.ENTRIES) },
  { slug: "otorrinolaringologia", title: "Otorrinolaringología", keys: ["OTORRINOLARINGOLOGÍA"], total: 68, period: "2016-2026", cardCount: 10, topicCount: 5, load: () => import("@/data/ultra-resumenes/mir/otorrinolaringologia").then((m) => m.ENTRIES) },
  { slug: "pediatria", title: "Pediatría", keys: ["PEDIATRÍA"], total: 104, period: "2016-2026", cardCount: 19, topicCount: 8, load: () => import("@/data/ultra-resumenes/mir/pediatria").then((m) => m.ENTRIES) },
  { slug: "psiquiatria", title: "Psiquiatría", keys: ["PSIQUIATRÍA"], total: 97, period: "2016-2026", cardCount: 17, topicCount: 8, load: () => import("@/data/ultra-resumenes/mir/psiquiatria").then((m) => m.ENTRIES) },
  { slug: "reumatologia", title: "Reumatología", keys: ["REUMATOLOGÍA"], total: 107, period: "2016-2026", cardCount: 19, topicCount: 10, load: () => import("@/data/ultra-resumenes/mir/reumatologia").then((m) => m.ENTRIES) },
  { slug: "traumatologia", title: "Traumatología y cirugía ortopédica", keys: ["TRAUMATOLOGÍA"], total: 108, period: "2016-2026", cardCount: 14, topicCount: 10, load: () => import("@/data/ultra-resumenes/mir/traumatologia").then((m) => m.ENTRIES) },
  { slug: "urologia", title: "Urología", keys: ["UROLOGÍA"], total: 57, period: "2016-2026", cardCount: 11, topicCount: 8, load: () => import("@/data/ultra-resumenes/mir/urologia").then((m) => m.ENTRIES) },
];

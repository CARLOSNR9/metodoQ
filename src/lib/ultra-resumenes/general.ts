import type { UltraCategory } from "./types";

/**
 * Ultra resúmenes del Método Q general (exámenes de residencia en Colombia,
 * sirve para cualquier universidad y especialidad). Cada categoría carga sus
 * fichas bajo demanda para no inflar el panel.
 *
 * El nivel es una prioridad orientativa: las cuatro áreas troncales
 * (medicina interna, pediatría, ginecología y obstetricia, cirugía) y
 * urgencias concentran la mayor parte de los exámenes colombianos.
 */
export const GENERAL_ULTRA_CATEGORIES: UltraCategory[] = [
  { slug: "cardiologia", title: "Cardiología y vascular", group: "Medicina interna", level: 1, cardCount: 46, load: () => import("@/data/ultra-resumenes/general/cardiologia").then((m) => m.ENTRIES) },
  { slug: "neumologia", title: "Neumología", group: "Medicina interna", level: 1, cardCount: 23, load: () => import("@/data/ultra-resumenes/general/neumologia").then((m) => m.ENTRIES) },
  { slug: "nefrologia", title: "Nefrología y medio interno", group: "Medicina interna", level: 1, cardCount: 31, load: () => import("@/data/ultra-resumenes/general/nefrologia").then((m) => m.ENTRIES) },
  { slug: "endocrinologia", title: "Endocrinología y metabolismo", group: "Medicina interna", level: 1, cardCount: 33, load: () => import("@/data/ultra-resumenes/general/endocrinologia").then((m) => m.ENTRIES) },
  { slug: "gastroenterologia", title: "Gastroenterología y hepatología", group: "Medicina interna", level: 1, cardCount: 16, load: () => import("@/data/ultra-resumenes/general/gastroenterologia").then((m) => m.ENTRIES) },
  { slug: "infectologia", title: "Infectología y medicina tropical", group: "Medicina interna", level: 1, cardCount: 36, load: () => import("@/data/ultra-resumenes/general/infectologia").then((m) => m.ENTRIES) },
  { slug: "hematologia", title: "Hematología y coagulación", group: "Medicina interna", level: 1, cardCount: 37, load: () => import("@/data/ultra-resumenes/general/hematologia").then((m) => m.ENTRIES) },
  { slug: "reumatologia", title: "Reumatología", group: "Medicina interna", level: 1, cardCount: 22, load: () => import("@/data/ultra-resumenes/general/reumatologia").then((m) => m.ENTRIES) },
  { slug: "otros-interna", title: "Otros temas de medicina interna", group: "Medicina interna", level: 2, cardCount: 7, load: () => import("@/data/ultra-resumenes/general/otros-interna").then((m) => m.ENTRIES) },
  { slug: "pediatria", title: "Pediatría", group: "Áreas troncales", level: 1, cardCount: 130, load: () => import("@/data/ultra-resumenes/general/pediatria").then((m) => m.ENTRIES) },
  { slug: "ginecologia-obstetricia", title: "Ginecología y obstetricia", group: "Áreas troncales", level: 1, cardCount: 119, load: () => import("@/data/ultra-resumenes/general/ginecologia-obstetricia").then((m) => m.ENTRIES) },
  { slug: "cirugia", title: "Cirugía general", group: "Áreas troncales", level: 1, cardCount: 74, load: () => import("@/data/ultra-resumenes/general/cirugia").then((m) => m.ENTRIES) },
  { slug: "urgencias", title: "Urgencias", group: "Áreas troncales", level: 1, cardCount: 70, load: () => import("@/data/ultra-resumenes/general/urgencias").then((m) => m.ENTRIES) },
  { slug: "neurologia", title: "Neurología y neurocirugía", group: "Especialidades", level: 2, cardCount: 80, load: () => import("@/data/ultra-resumenes/general/neurologia").then((m) => m.ENTRIES) },
  { slug: "psiquiatria", title: "Psiquiatría", group: "Especialidades", level: 2, cardCount: 25, load: () => import("@/data/ultra-resumenes/general/psiquiatria").then((m) => m.ENTRIES) },
  { slug: "ortopedia", title: "Ortopedia y traumatología", group: "Especialidades", level: 2, cardCount: 72, load: () => import("@/data/ultra-resumenes/general/ortopedia").then((m) => m.ENTRIES) },
  { slug: "epidemiologia", title: "Epidemiología y salud pública", group: "Especialidades", level: 2, cardCount: 13, load: () => import("@/data/ultra-resumenes/general/epidemiologia").then((m) => m.ENTRIES) },
  { slug: "dermatologia", title: "Dermatología", group: "Especialidades menores", level: 3, cardCount: 47, load: () => import("@/data/ultra-resumenes/general/dermatologia").then((m) => m.ENTRIES) },
  { slug: "otorrinolaringologia", title: "Otorrinolaringología", group: "Especialidades menores", level: 3, cardCount: 32, load: () => import("@/data/ultra-resumenes/general/otorrinolaringologia").then((m) => m.ENTRIES) },
  { slug: "oftalmologia", title: "Oftalmología", group: "Especialidades menores", level: 3, cardCount: 36, load: () => import("@/data/ultra-resumenes/general/oftalmologia").then((m) => m.ENTRIES) },
  { slug: "urologia", title: "Urología", group: "Especialidades menores", level: 3, cardCount: 23, load: () => import("@/data/ultra-resumenes/general/urologia").then((m) => m.ENTRIES) },
  { slug: "ciencias-basicas", title: "Ciencias básicas", group: "Especialidades menores", level: 3, cardCount: 17, load: () => import("@/data/ultra-resumenes/general/ciencias-basicas").then((m) => m.ENTRIES) },
  { slug: "cirugia-plastica", title: "Cirugía plástica", group: "Especialidades menores", level: 4, cardCount: 12, load: () => import("@/data/ultra-resumenes/general/cirugia-plastica").then((m) => m.ENTRIES) },
  { slug: "medicina-deporte", title: "Medicina del deporte", group: "Especialidades menores", level: 4, cardCount: 8, load: () => import("@/data/ultra-resumenes/general/medicina-deporte").then((m) => m.ENTRIES) },
];

export const GENERAL_ULTRA_GROUP_ORDER = [
  "Medicina interna",
  "Áreas troncales",
  "Especialidades",
  "Especialidades menores",
];

/**
 * Ultra resúmenes: fichas cortas de lo más rentable para el examen,
 * organizadas por categoría y nivel de rentabilidad. Los usa el módulo
 * general de Método Q (Colombia) y el módulo MIR.
 */

/** 1 = imprescindible … 5 = marginal. */
export type UltraLevel = 1 | 2 | 3 | 4 | 5;

export type UltraCard = {
  kind: "card";
  /** Estable entre despliegues: es la clave del progreso del estudiante. */
  id: string;
  title: string;
  points: string[];
  /** Etiqueta corta destacada (p. ej. "Preguntado 3 veces"). */
  badge?: string;
  /** Línea secundaria (p. ej. "MIR 2019 · 2023"). */
  meta?: string;
};

/** Separador dentro de una categoría (p. ej. "Síndrome nefrítico"). */
export type UltraHeading = {
  kind: "heading";
  id: string;
  title: string;
  /** Rentabilidad del bloque que abre (p. ej. un tema MIR). */
  level?: UltraLevel;
  /** Línea secundaria (p. ej. "22 preguntas MIR 2016-2026"). */
  meta?: string;
};

export type UltraEntry = UltraCard | UltraHeading;

export type UltraStat = { value: string; label: string };

export type UltraCategory = {
  slug: string;
  title: string;
  /** Agrupa las categorías en la portada (p. ej. "Medicina interna"). */
  group: string;
  level: UltraLevel;
  cardCount: number;
  /** Cifras destacadas en la cabecera de la categoría. */
  stats?: UltraStat[];
  load: () => Promise<UltraEntry[]>;
};

export const ULTRA_LEVEL_LABELS: Record<UltraLevel, string> = {
  1: "Imprescindible",
  2: "Muy rentable",
  3: "Rentable",
  4: "Repaso rápido",
  5: "Marginal",
};

export function isUltraCard(entry: UltraEntry): entry is UltraCard {
  return entry.kind === "card";
}

import { MIR_OFFICIAL_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { formatSpecialtyLabel, getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import type { TrainingQuestion } from "@/lib/questions/types";
import { MIR_ULTRA_CONTENT, type MirUltraContent } from "./mir-content";
import type { UltraCard, UltraCategory, UltraEntry, UltraLevel } from "./types";

/**
 * Ultra resúmenes MIR. Cada especialidad combina:
 * - el contenido propio por temas ordenados por rentabilidad (mir-content),
 * - y los puntos clave de las preguntas oficiales del banco, agrupados por
 *   tema y ordenados de más a menos preguntado.
 * El nivel y las cifras de cada especialidad se calculan con los exámenes
 * oficiales del banco.
 */

/** Umbrales de preguntas por convocatoria para cada nivel (1 → 4; el resto es 5). */
export const MIR_LEVEL_THRESHOLDS: [number, number, number, number] = [12, 8, 5, 3];

export function getMirLevel(perConvocatoria: number): UltraLevel {
  const [l1, l2, l3, l4] = MIR_LEVEL_THRESHOLDS;
  if (perConvocatoria >= l1) return 1;
  if (perConvocatoria >= l2) return 2;
  if (perConvocatoria >= l3) return 3;
  if (perConvocatoria >= l4) return 4;
  return 5;
}

/** "INSUFICIENCIA CARDIACA: TRATAMIENTO" → "INSUFICIENCIA CARDIACA". */
export function getTopicBase(topic: string): string {
  const base = topic.split(/[:(]/)[0].trim();
  return base || topic.trim();
}

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatYears(years: number[]): string {
  return `MIR ${[...new Set(years)].sort((a, b) => a - b).join(" · ")}`;
}

export type MirUltraSpecialty = UltraCategory & {
  /** Especialidades del banco que forman la categoría. */
  keys: string[];
  questionCount: number;
  perConvocatoria: number;
  /** Parte del examen (0-1). */
  share: number;
  topicCount: number;
  /** Temas preguntados en dos o más convocatorias/preguntas. */
  repeatedTopicCount: number;
  cards: UltraCard[];
};

export type MirUltraSummary = {
  specialties: MirUltraSpecialty[];
  questionCount: number;
  years: number[];
  /** Parte del examen que cae en cada nivel (0-1) y cuántas especialidades lo forman. */
  levels: { level: UltraLevel; share: number; perConvocatoria: number; specialtyCount: number }[];
};

function buildCards(specialtySlug: string, questions: TrainingQuestion[]): { cards: UltraCard[]; repeated: number } {
  // Se agrupa por el slug del tema para unir variantes de mayúsculas o tildes.
  const groups = new Map<string, TrainingQuestion[]>();
  for (const question of questions) {
    const key = slugify(getTopicBase(question.topic));
    const list = groups.get(key) ?? [];
    list.push(question);
    groups.set(key, list);
  }

  const sorted = [...groups.entries()].sort((a, b) => {
    const latest = (list: TrainingQuestion[]) => Math.max(...list.map((q) => q.officialExam?.year ?? 0));
    return b[1].length - a[1].length || latest(b[1]) - latest(a[1]) || a[0].localeCompare(b[0], "es");
  });

  const cards = sorted.map(([key, list]): UltraCard => {
    const base = getTopicBase(list[0].topic);
    const points: string[] = [];
    const seen = new Set<string>();
    for (const question of list) {
      for (const point of question.keyPoints) {
        const key = point.trim().toLowerCase();
        if (!key || seen.has(key)) continue;
        seen.add(key);
        points.push(point.trim());
      }
    }
    const years = list.map((q) => q.officialExam?.year).filter((year): year is number => Boolean(year));
    return {
      kind: "card",
      id: `mir-${specialtySlug}-${key}`,
      title: formatSpecialtyLabel(base),
      points,
      badge: list.length >= 2 ? `Preguntado ${list.length} veces` : undefined,
      meta: years.length > 0 ? formatYears(years) : undefined,
    };
  });

  return { cards, repeated: sorted.filter(([, list]) => list.length >= 2).length };
}

/** Título del separador que da paso a las fichas de preguntas oficiales. */
export const MIR_BANK_SECTION_TITLE = "Repaso con preguntas oficiales";

export function buildMirUltraSummary(
  questions: TrainingQuestion[] = MIR_OFFICIAL_QUESTIONS,
  content: MirUltraContent[] = MIR_ULTRA_CONTENT,
): MirUltraSummary {
  const contentByKey = new Map(content.flatMap((item) => item.keys.map((key) => [key, item] as const)));
  const valid = questions.filter((question) => !question.tags?.includes("anulada") && question.keyPoints.length > 0);
  const years = [...new Set(valid.map((q) => q.officialExam?.year).filter((y): y is number => Boolean(y)))].sort();
  const convocatorias = Math.max(years.length, 1);

  const bySpecialty = new Map<string, TrainingQuestion[]>();
  for (const question of valid) {
    const primary = getQuestionSpecialtyKeys(question)[0];
    if (!primary) continue;
    const groupKey = contentByKey.get(primary)?.slug ?? primary;
    const list = bySpecialty.get(groupKey) ?? [];
    list.push(question);
    bySpecialty.set(groupKey, list);
  }
  const total = [...bySpecialty.values()].reduce((sum, list) => sum + list.length, 0) || 1;

  const specialties = [...bySpecialty.entries()]
    .map(([groupKey, list]): MirUltraSpecialty => {
      const own = content.find((item) => item.slug === groupKey);
      const slug = own?.slug ?? slugify(groupKey);
      const perConvocatoria = list.length / convocatorias;
      const level = getMirLevel(perConvocatoria);
      const { cards, repeated } = buildCards(slug, list);
      const bankSection: UltraEntry[] = [{ kind: "heading", id: `mir-${slug}-banco`, title: MIR_BANK_SECTION_TITLE }, ...cards];
      return {
        slug,
        keys: own?.keys ?? [groupKey],
        title: own?.title ?? formatSpecialtyLabel(groupKey),
        group: "",
        level,
        cardCount: cards.length + (own?.cardCount ?? 0),
        questionCount: list.length,
        perConvocatoria,
        share: list.length / total,
        topicCount: cards.length,
        repeatedTopicCount: repeated,
        cards,
        stats: [
          { value: String(list.length), label: `preguntas analizadas en ${convocatorias} convocatorias (${years[0]}-${years[years.length - 1]})` },
          { value: perConvocatoria.toLocaleString("es", { maximumFractionDigits: 1, minimumFractionDigits: 1 }), label: "preguntas de media por convocatoria" },
          { value: `${((list.length / total) * 100).toLocaleString("es", { maximumFractionDigits: 1, minimumFractionDigits: 1 })} %`, label: "del examen MIR" },
          own
            ? { value: String(own.topicCount), label: "temas ordenados por rentabilidad, de más a menos preguntados" }
            : { value: String(repeated), label: "temas que ya se han preguntado más de una vez" },
        ],
        load: async () => (own ? [...(await own.load()), ...bankSection] : cards),
      };
    })
    .sort((a, b) => b.questionCount - a.questionCount || a.title.localeCompare(b.title, "es"));

  for (const specialty of specialties) specialty.group = `Nivel ${specialty.level}`;

  const levels = ([1, 2, 3, 4, 5] as UltraLevel[]).map((level) => {
    const inLevel = specialties.filter((s) => s.level === level);
    const count = inLevel.reduce((sum, s) => sum + s.questionCount, 0);
    return {
      level,
      share: count / total,
      perConvocatoria: count / convocatorias,
      specialtyCount: inLevel.length,
    };
  });

  return { specialties, questionCount: total, years, levels };
}

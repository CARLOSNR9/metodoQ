import { MIR_OFFICIAL_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { formatSpecialtyLabel, getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import type { TrainingQuestion } from "@/lib/questions/types";
import { MIR_ULTRA_CONTENT, type MirUltraContent } from "./mir-content";
import { MIR_OFFICIAL_ALIASES, MIR_OFFICIAL_PLACEMENTS } from "./mir-placements";
import type { UltraCard, UltraCategory, UltraEntry, UltraLevel } from "./types";

/**
 * Ultra resúmenes MIR. Cada especialidad combina:
 * - el contenido propio por temas ordenados por rentabilidad (mir-content),
 * - y los puntos clave de las preguntas oficiales del banco, agrupados por
 *   tema, ordenados de más a menos preguntado y colocados debajo de la ficha
 *   propia que tratan (placeOfficialCards).
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

const TOPIC_STOPWORDS = new Set(["de", "del", "la", "las", "el", "los", "y", "e", "o", "en", "por", "a", "al", "con", "un", "una"]);
const TOPIC_SYNONYMS: Record<string, string> = {
  seudotrombocitopenia: "pseudotrombopenia",
  trombocitopenia: "trombopenia",
};
const TOPIC_ALIASES = new Map(Object.entries(MIR_OFFICIAL_ALIASES).map(([alias, canonical]) => [slugify(alias), slugify(canonical)]));

/**
 * Clave de un tema para unir variantes: sin artículos ni plurales, con
 * sinónimos y alias ("Comités de Ética Asistencial" = "Comité de ética asistencial").
 */
export function getTopicKey(topic: string): string {
  const slug = slugify(topic);
  const resolved = TOPIC_ALIASES.get(slug) ?? slug;
  return resolved
    .split("-")
    .filter((word) => word && !TOPIC_STOPWORDS.has(word))
    .map((word) => TOPIC_SYNONYMS[word] ?? word)
    .map((word) => (word.length > 4 && word.endsWith("s") ? word.slice(0, -1) : word))
    .sort()
    .join(" ");
}

const WORD = /[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*/gu;

/**
 * Cómo se escribe cada palabra a mitad de frase en los puntos clave
 * ("lynch" → "Lynch", "vih" → "VIH"). Sirve para recuperar las mayúsculas de
 * los temas del banco, que vienen en mayúsculas.
 */
export function buildCasingDictionary(texts: string[]): Map<string, string> {
  const counts = new Map<string, Map<string, number>>();
  for (const text of texts) {
    for (const match of text.matchAll(WORD)) {
      const index = match.index ?? 0;
      const before = text.slice(0, index).trimEnd();
      if (before === "" || /[.!?]$/.test(before)) continue; // inicio de frase
      const word = match[0];
      const lower = word.toLocaleLowerCase("es");
      const forms = counts.get(lower) ?? new Map<string, number>();
      forms.set(word, (forms.get(word) ?? 0) + 1);
      counts.set(lower, forms);
    }
  }
  const dictionary = new Map<string, string>();
  for (const [lower, forms] of counts) {
    const lowerCount = forms.get(lower) ?? 0;
    let best = lower;
    let bestCount = 0;
    for (const [form, count] of forms) {
      if (form !== lower && count > bestCount) {
        best = form;
        bestCount = count;
      }
    }
    // Si la palabra también se escribe en minúscula, la mayúscula tiene que dominar con claridad.
    if (bestCount > 2 * lowerCount) dictionary.set(lower, best);
  }
  return dictionary;
}

/**
 * Mayúsculas que el diccionario no puede deducir porque la palabra también
 * existe en minúscula ("graves", la preposición "a"…).
 */
const TITLE_FIXES: [RegExp, (match: string) => string][] = [
  // "tipo a", "hemofilia a", "inmunoglobulina a"… → letra en mayúscula.
  [/\b(tipo|hemofilia|inmunoglobulina|vitamina|hepatitis|grupo|clase) [a-z]\b/gi, (m) => m.slice(0, -1) + m.slice(-1).toUpperCase()],
  [/\bamiloidosis al\b/gi, () => "amiloidosis AL"],
  [/\benfermedad de graves\b/gi, () => "enfermedad de Graves"],
  [/\bclasificación asa\b/gi, () => "clasificación ASA"],
  [/\bpregunta pico\b/gi, () => "pregunta PICO"],
  [/\bisglt2\b/gi, () => "iSGLT2"],
  [/\b5 aes\b/gi, () => "5 A"],
  [/\bsistema nacional de salud\b/gi, () => "Sistema Nacional de Salud"],
];

/** Respeta la mayúscula inicial del título si el arreglo empieza en la primera letra. */
function keepInitial(original: string, fixed: string): string {
  const first = original.charAt(0);
  return first === first.toLocaleUpperCase("es") && first !== first.toLocaleLowerCase("es")
    ? fixed.charAt(0).toLocaleUpperCase("es") + fixed.slice(1)
    : fixed;
}

/** "SÍNDROME DE LYNCH" → "Síndrome de Lynch" con el diccionario de mayúsculas. */
export function formatTopicTitle(topic: string, casing: Map<string, string>): string {
  const sentence = TITLE_FIXES.reduce(
    (text, [pattern, replace]) => text.replace(pattern, (match) => keepInitial(match, replace(match))),
    formatSpecialtyLabel(topic),
  );
  return sentence.replace(WORD, (word, offset: number) => {
    const known = casing.get(word.toLocaleLowerCase("es"));
    if (!known) return word;
    // La primera palabra ya va con mayúscula inicial; solo se cambia si es una sigla.
    if (offset === 0 && known !== known.toLocaleUpperCase("es")) return word;
    return known;
  });
}

function pointTokens(point: string): Set<string> {
  return new Set(slugify(point).split("-").filter((word) => word.length >= 3));
}

/** Quita los puntos que repiten casi por completo otro anterior. */
export function dedupePoints(points: string[]): string[] {
  const kept: { point: string; tokens: Set<string> }[] = [];
  for (const point of points) {
    const tokens = pointTokens(point);
    const repeated = kept.some((other) => {
      const [small, large] = tokens.size <= other.tokens.size ? [tokens, other.tokens] : [other.tokens, tokens];
      if (small.size < 4) return false;
      let shared = 0;
      for (const token of small) if (large.has(token)) shared += 1;
      return shared / small.size >= 0.75;
    });
    if (!repeated) kept.push({ point, tokens });
  }
  return kept.map((item) => item.point);
}

function buildCards(
  specialtySlug: string,
  questions: TrainingQuestion[],
  casing: Map<string, string>,
): { cards: UltraCard[]; repeated: number } {
  // Se agrupa por tema normalizado para unir variantes ("Comité"/"Comités",
  // "Trombopenia"/"Trombocitopenia", alias de mir-placements…). La ficha
  // conserva el slug de la variante más preguntada, que es la clave del progreso.
  const byTopic = new Map<string, TrainingQuestion[]>();
  for (const question of questions) {
    const topicKey = getTopicKey(getTopicBase(question.topic));
    const list = byTopic.get(topicKey) ?? [];
    list.push(question);
    byTopic.set(topicKey, list);
  }
  const groups = new Map<string, TrainingQuestion[]>();
  for (const list of byTopic.values()) {
    const variants = new Map<string, number>();
    for (const question of list) {
      const variant = slugify(getTopicBase(question.topic));
      variants.set(variant, (variants.get(variant) ?? 0) + 1);
    }
    const [key] = [...variants.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0];
    groups.set(
      key,
      [...list].sort((a, b) => Number(slugify(getTopicBase(b.topic)) === key) - Number(slugify(getTopicBase(a.topic)) === key)),
    );
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
      title: formatTopicTitle(base, casing),
      points: dedupePoints(points),
      official: true,
      badge: list.length >= 2 ? `Preguntado ${list.length} veces` : undefined,
      meta: years.length > 0 ? formatYears(years) : undefined,
    };
  });

  return { cards, repeated: sorted.filter(([, list]) => list.length >= 2).length };
}

/** Título del separador con las preguntas oficiales que no encajan en ninguna ficha propia. */
export const MIR_BANK_SECTION_TITLE = "Otras preguntas oficiales";

/** Puntuación mínima para colocar una ficha de preguntas oficiales bajo una ficha propia. */
export const MIR_LINK_MIN_SCORE = 22;

const LINK_STOPWORDS = new Set(
  (
    "para como esta este estos estas pero sobre entre desde hasta tras cuando donde porque tambien solo mas menos " +
    "todo todos toda todas otro otra otros otras cada sino segun puede pueden suele tiene tienen hace hacer siempre " +
    "nunca mismo misma muy bien primera primer primero segundo tipo tipos caso casos forma formas parte inicial casi " +
    "frente ante bajo alto alta altos altas mayor menor anos dias tratamiento diagnostico clinica sindrome enfermedad " +
    "paciente pacientes riesgo causa causas indicado indicada indicacion eleccion prueba pruebas cuadro asociado " +
    "asociada grave graves agudo aguda cronica cronico frecuente frecuentes"
  ).split(" "),
);

/** Raíces de las palabras con contenido ("hereditarios" → "heredit"). */
function linkTokens(text: string): string[] {
  return slugify(text)
    .split("-")
    .filter((word) => word.length >= 4 && !LINK_STOPWORDS.has(word))
    .map((word) => word.slice(0, 7));
}

function addTokens(bag: Map<string, number>, text: string, weight: number, cap = Infinity) {
  for (const token of linkTokens(text)) bag.set(token, Math.min(cap, (bag.get(token) ?? 0) + weight));
}

function normalizePlacements(placements: Record<string, string | null> = {}): Map<string, string | null> {
  return new Map(Object.entries(placements).map(([official, target]) => [getTopicKey(official), target === null ? null : slugify(target)]));
}

/**
 * Coloca cada ficha de preguntas oficiales justo debajo de la ficha propia
 * que trata su tema (p. ej. "Síndrome de Lynch" bajo "Pólipos y síndromes
 * hereditarios"). Manda la colocación manual (mir-placements); si no la hay,
 * se empareja por palabras compartidas, pesando más los títulos y las
 * palabras raras dentro de la especialidad. Las que no alcanzan el mínimo
 * van al final, en su propio apartado.
 */
export function placeOfficialCards(
  ownEntries: UltraEntry[],
  officialCards: UltraCard[],
  slug = "mir",
  minScore = MIR_LINK_MIN_SCORE,
  placements: Record<string, string | null> = {},
): UltraEntry[] {
  const manual = normalizePlacements(placements);
  const own: { card: UltraCard; bag: Map<string, number> }[] = [];
  const ownBySlug = new Map<string, UltraCard>();
  let heading = "";
  for (const entry of ownEntries) {
    if (entry.kind === "heading") {
      heading = entry.title;
      continue;
    }
    const bag = new Map<string, number>();
    addTokens(bag, `${entry.title} ${heading}`, 3);
    addTokens(bag, entry.points.join(" "), 1);
    own.push({ card: entry, bag });
    if (!ownBySlug.has(slugify(entry.title))) ownBySlug.set(slugify(entry.title), entry);
  }

  const documentFrequency = new Map<string, number>();
  for (const { bag } of own) for (const token of bag.keys()) documentFrequency.set(token, (documentFrequency.get(token) ?? 0) + 1);
  const idf = (token: string) => Math.log(1 + own.length / (documentFrequency.get(token) ?? own.length));

  function bestMatch(official: UltraCard): UltraCard | null {
    const bag = new Map<string, number>();
    addTokens(bag, official.title, 3);
    addTokens(bag, official.points.join(" "), 1, 2);
    let best: UltraCard | null = null;
    let bestScore = 0;
    for (const candidate of own) {
      let score = 0;
      for (const [token, weight] of bag) {
        const ownWeight = candidate.bag.get(token);
        if (ownWeight) score += weight * Math.min(3, ownWeight) * idf(token);
      }
      if (score > bestScore) {
        bestScore = score;
        best = candidate.card;
      }
    }
    return best && bestScore >= minScore ? best : null;
  }

  const linked = new Map<string, UltraCard[]>();
  const unlinked: UltraCard[] = [];
  for (const official of officialCards) {
    // Se busca por el título visible y por el tema original (el id), por si
    // el arreglo de mayúsculas cambió alguna palabra ("5 aes" → "5 A").
    const key = [getTopicKey(official.title), getTopicKey(official.id.replace(`mir-${slug}-`, ""))].find((k) => manual.has(k)) ?? "";
    const target = manual.has(key) ? (manual.get(key) === null ? null : (ownBySlug.get(manual.get(key)!) ?? null)) : bestMatch(official);
    if (target) {
      const list = linked.get(target.id) ?? [];
      list.push({ ...official, official: true, linkedTo: target.id });
      linked.set(target.id, list);
    } else {
      unlinked.push({ ...official, official: true, linkedTo: undefined });
    }
  }

  const result: UltraEntry[] = [];
  for (const entry of ownEntries) {
    result.push(entry);
    if (entry.kind === "card") result.push(...(linked.get(entry.id) ?? []));
  }
  if (unlinked.length > 0) {
    result.push({ kind: "heading", id: `mir-${slug}-banco`, title: MIR_BANK_SECTION_TITLE }, ...unlinked);
  }
  return result;
}

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
  const casing = buildCasingDictionary(
    questions.flatMap((question) => [
      ...question.keyPoints,
      question.statement ?? "",
      question.explanation ?? "",
      ...(question.options ?? []).map((option) => option.text ?? ""),
    ]),
  );
  const total = [...bySpecialty.values()].reduce((sum, list) => sum + list.length, 0) || 1;

  const specialties = [...bySpecialty.entries()]
    .map(([groupKey, list]): MirUltraSpecialty => {
      const own = content.find((item) => item.slug === groupKey);
      const slug = own?.slug ?? slugify(groupKey);
      const perConvocatoria = list.length / convocatorias;
      const level = getMirLevel(perConvocatoria);
      const { cards, repeated } = buildCards(slug, list, casing);
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
        load: async () => (own ? placeOfficialCards(await own.load(), cards, slug, MIR_LINK_MIN_SCORE, MIR_OFFICIAL_PLACEMENTS[slug]) : cards),
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

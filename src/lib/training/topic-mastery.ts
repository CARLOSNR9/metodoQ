/**
 * Mapa de dominio del Método Q normal: agrupa `users/{uid}.topicStats`
 * (tema → aciertos/fallos, ya guardado en cada sesión) en áreas clínicas.
 * Los temas del banco vienen con mayúsculas, tildes y subtemas distintos
 * ("CARDIOLOGÍA", "Cardiología", "CARDIOLOGÍA PEDIÁTRICA"…), así que se
 * normalizan y se asignan por palabras clave. No escribe nada nuevo.
 */
export type TopicMasteryLevel = "not_started" | "weak" | "progress" | "mastered";

export type TopicArea = {
  key: string;
  label: string;
  /** Texto para `/dashboard/entrenar?topic=`, que filtra por coincidencia parcial. */
  practiceTopic: string;
};

export type TopicAreaMastery = TopicArea & {
  answered: number;
  correct: number;
  /** 0-100, null si no ha respondido ninguna. */
  accuracy: number | null;
  level: TopicMasteryLevel;
};

type TopicStatLike = { correct?: number; wrong?: number };

/** Por debajo de este % el área está "a reforzar"; desde MASTERED, "dominada". */
export const TOPIC_MASTERY_WEAK_BELOW = 50;
export const TOPIC_MASTERY_MASTERED_FROM = 75;
/** Mínimo de respuestas para que el % se considere representativo. */
export const TOPIC_MASTERY_MIN_ANSWERS = 3;

const OTHER_AREA: TopicArea = { key: "otras", label: "Otras áreas", practiceTopic: "" };

/** Áreas en orden de peso aproximado en los exámenes de residencia. */
export const TOPIC_AREAS: TopicArea[] = [
  { key: "medicina-interna", label: "Medicina Interna", practiceTopic: "medicina interna" },
  { key: "ginecologia", label: "Ginecología y Obstetricia", practiceTopic: "ginecolog" },
  { key: "pediatria", label: "Pediatría", practiceTopic: "pediatr" },
  { key: "cirugia", label: "Cirugía", practiceTopic: "cirug" },
  { key: "salud-publica", label: "Salud Pública", practiceTopic: "salud pública" },
  { key: "cardiologia", label: "Cardiología", practiceTopic: "cardiolog" },
  { key: "hematologia", label: "Hematología", practiceTopic: "hematolog" },
  { key: "psiquiatria", label: "Psiquiatría", practiceTopic: "psiquiatr" },
  { key: "neurologia", label: "Neurología", practiceTopic: "neurolog" },
  { key: "urgencias", label: "Urgencias y Toxicología", practiceTopic: "urgencias" },
  { key: "gastroenterologia", label: "Gastroenterología", practiceTopic: "gastroenterolog" },
  { key: "neumologia", label: "Neumología", practiceTopic: "neumolog" },
  { key: "endocrinologia", label: "Endocrinología", practiceTopic: "endocrinolog" },
  { key: "nefrologia", label: "Nefrología", practiceTopic: "nefrolog" },
  { key: "infectologia", label: "Infectología", practiceTopic: "infectolog" },
  { key: "inmunologia", label: "Inmunología y Alergias", practiceTopic: "inmunolog" },
  { key: "reumatologia", label: "Reumatología", practiceTopic: "reumatolog" },
  { key: "ortopedia", label: "Ortopedia", practiceTopic: "ortopedia" },
  { key: "geriatria", label: "Geriatría", practiceTopic: "geriatr" },
  { key: "dermatologia", label: "Dermatología", practiceTopic: "dermatolog" },
  { key: "oftalmologia", label: "Oftalmología", practiceTopic: "oftalmolog" },
  { key: "urologia", label: "Urología", practiceTopic: "urolog" },
  { key: "oncologia", label: "Oncología", practiceTopic: "oncolog" },
  { key: "ciencias-basicas", label: "Ciencias Básicas", practiceTopic: "ciencias básicas" },
];

const AREAS_BY_KEY = new Map(TOPIC_AREAS.map((area) => [area.key, area]));

/**
 * Reglas en orden: las más específicas primero (p. ej. "cardiología
 * pediátrica" es Pediatría y "fisiología renal" es Ciencias Básicas).
 */
const AREA_RULES: Array<[RegExp, string]> = [
  [/pediatr|neonat|desarrollo y lenguaje/, "pediatria"],
  [/ginecolog|obstetric|planificacion familiar/, "ginecologia"],
  [/ortopedia|traumatolog/, "ortopedia"],
  [/cirugia|neurocirugia|trauma|atls|quemadura/, "cirugia"],
  [/ciencias basicas|bioquimica|farmacolog|fisiologia|neuroanatomia|anatomia|genetica|embriolog/, "ciencias-basicas"],
  [/salud publica|atencion primaria|epidemiolog|medicina preventiva|bioestadistica/, "salud-publica"],
  [/urgencias|toxicolog/, "urgencias"],
  [/cardiolog/, "cardiologia"],
  [/hematolog/, "hematologia"],
  [/psiquiatr/, "psiquiatria"],
  [/neurolog/, "neurologia"],
  [/gastroenterolog|hepatolog/, "gastroenterologia"],
  [/neumolog/, "neumologia"],
  [/endocrinolog/, "endocrinologia"],
  [/nefrolog/, "nefrologia"],
  [/infectolog/, "infectologia"],
  [/inmunolog|alergolog/, "inmunologia"],
  [/reumatolog/, "reumatologia"],
  [/geriatr/, "geriatria"],
  [/dermatolog/, "dermatologia"],
  [/oftalmolog/, "oftalmologia"],
  [/urolog/, "urologia"],
  [/oncolog/, "oncologia"],
  [/medicina interna|semiologia/, "medicina-interna"],
];

function normalizeTopic(topic: string): string {
  return topic
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

/** Área clínica de un tema del banco ("otras" si no encaja en ninguna). */
export function getTopicAreaKey(topic: string): string {
  const normalized = normalizeTopic(topic);
  for (const [pattern, key] of AREA_RULES) {
    if (pattern.test(normalized)) return key;
  }
  return OTHER_AREA.key;
}

export function getTopicMasteryLevel(answered: number, accuracy: number | null): TopicMasteryLevel {
  if (answered === 0 || accuracy === null) return "not_started";
  if (accuracy < TOPIC_MASTERY_WEAK_BELOW) return "weak";
  if (accuracy >= TOPIC_MASTERY_MASTERED_FROM) return "mastered";
  return "progress";
}

/**
 * Todas las áreas con su dominio, en el orden de `TOPIC_AREAS`. "Otras
 * áreas" solo aparece si tiene respuestas.
 */
export function buildTopicMastery(
  topicStats: Record<string, TopicStatLike> | null | undefined,
): TopicAreaMastery[] {
  const tallies = new Map<string, { answered: number; correct: number }>();
  for (const [topic, stat] of Object.entries(topicStats ?? {})) {
    const correct = Math.max(0, stat?.correct ?? 0);
    const wrong = Math.max(0, stat?.wrong ?? 0);
    if (correct + wrong === 0) continue;
    const key = getTopicAreaKey(topic);
    const tally = tallies.get(key) ?? { answered: 0, correct: 0 };
    tally.answered += correct + wrong;
    tally.correct += correct;
    tallies.set(key, tally);
  }

  const areas = tallies.has(OTHER_AREA.key) ? [...TOPIC_AREAS, OTHER_AREA] : TOPIC_AREAS;
  return areas.map((area) => {
    const tally = tallies.get(area.key) ?? { answered: 0, correct: 0 };
    const accuracy = tally.answered > 0 ? Math.round((tally.correct / tally.answered) * 100) : null;
    return {
      ...(AREAS_BY_KEY.get(area.key) ?? area),
      answered: tally.answered,
      correct: tally.correct,
      accuracy,
      level: getTopicMasteryLevel(tally.answered, accuracy),
    };
  });
}

export function getTopicOverallAccuracy(mastery: TopicAreaMastery[]): number | null {
  let answered = 0;
  let correct = 0;
  for (const item of mastery) {
    answered += item.answered;
    correct += item.correct;
  }
  return answered > 0 ? Math.round((correct / answered) * 100) : null;
}

/**
 * Área que más conviene practicar: la de menor % entre las que tienen
 * respuestas suficientes; si no hay, la de menor % con alguna respuesta; si
 * no hay ninguna, la primera sin empezar (las de más peso van primero).
 */
export function getWeakestTopicArea(mastery: TopicAreaMastery[]): TopicAreaMastery | null {
  const practicable = mastery.filter((item) => item.key !== OTHER_AREA.key);
  const byAccuracy = (list: TopicAreaMastery[]) =>
    [...list].sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0) || b.answered - a.answered)[0];

  const reliable = practicable.filter(
    (item) => item.answered >= TOPIC_MASTERY_MIN_ANSWERS && item.level !== "mastered",
  );
  if (reliable.length > 0) return byAccuracy(reliable);

  const started = practicable.filter((item) => item.answered > 0 && item.level !== "mastered");
  if (started.length > 0) return byAccuracy(started);

  return practicable.find((item) => item.level === "not_started") ?? null;
}

export function buildTopicPracticeHref(area: TopicArea): string {
  if (!area.practiceTopic) return "/dashboard/entrenar";
  return `/dashboard/entrenar?topic=${encodeURIComponent(area.practiceTopic)}`;
}

import { describe, expect, it } from "vitest";
import { GENERAL_ULTRA_CATEGORIES, GENERAL_ULTRA_GROUP_ORDER } from "@/lib/ultra-resumenes/general";
import { MIR_BANK_SECTION_TITLE, buildMirUltraSummary, getMirLevel, getTopicBase, placeOfficialCards } from "@/lib/ultra-resumenes/mir";
import { MIR_ULTRA_CONTENT } from "@/lib/ultra-resumenes/mir-content";
import { MIR_OFFICIAL_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import { isUltraCard, type UltraEntry } from "@/lib/ultra-resumenes/types";
import type { TrainingQuestion } from "@/lib/questions/types";

describe("ultra resúmenes generales", () => {
  it("cada categoría carga tantas fichas como declara, con id único y contenido", async () => {
    const ids = new Set<string>();
    for (const category of GENERAL_ULTRA_CATEGORIES) {
      const entries: UltraEntry[] = await category.load();
      const cards = entries.filter(isUltraCard);
      expect(cards.length, category.slug).toBe(category.cardCount);
      expect(GENERAL_ULTRA_GROUP_ORDER).toContain(category.group);
      for (const entry of entries) {
        expect(ids.has(entry.id), entry.id).toBe(false);
        ids.add(entry.id);
        expect(entry.title.trim().length).toBeGreaterThan(1);
        if (isUltraCard(entry)) expect(entry.points.length, entry.id).toBeGreaterThan(0);
      }
    }
    expect(ids.size).toBeGreaterThan(1000);
  });

  it("los slugs de categoría no se repiten", () => {
    const slugs = GENERAL_ULTRA_CATEGORIES.map((category) => category.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

function question(id: string, examArea: string, topic: string, year: number, keyPoints: string[], tags: string[] = []): TrainingQuestion {
  return {
    id,
    university: "MIR (España)",
    examArea,
    topic,
    difficulty: "medium",
    tags: ["mir", ...tags],
    officialExam: { year, number: 1 },
    statement: "",
    options: [],
    correctOptionId: "1",
    explanation: "",
    keyPoints,
  } as unknown as TrainingQuestion;
}

describe("ultra resúmenes MIR", () => {
  it("asigna el nivel según las preguntas por convocatoria", () => {
    expect(getMirLevel(13)).toBe(1);
    expect(getMirLevel(9)).toBe(2);
    expect(getMirLevel(5)).toBe(3);
    expect(getMirLevel(3.2)).toBe(4);
    expect(getMirLevel(1)).toBe(5);
  });

  it("agrupa por tema base, ordena por repetición y descarta anuladas", () => {
    expect(getTopicBase("INSUFICIENCIA CARDIACA: TRATAMIENTO")).toBe("INSUFICIENCIA CARDIACA");
    const summary = buildMirUltraSummary([
      question("a", "CARDIOLOGÍA", "ESTENOSIS AÓRTICA", 2020, ["Punto 1"]),
      question("b", "CARDIOLOGÍA", "INSUFICIENCIA CARDIACA: IECA", 2021, ["Punto 2", "Punto 3"]),
      question("c", "CARDIOLOGÍA / NEFROLOGÍA", "INSUFICIENCIA CARDIACA (AGUDA)", 2022, ["punto 2", "Punto 4"]),
      question("d", "NEFROLOGÍA", "NEFROPATÍA IGA", 2022, ["Punto 5"], ["anulada"]),
    ], []);
    expect(summary.questionCount).toBe(3);
    expect(summary.specialties).toHaveLength(1);
    const [cardio] = summary.specialties;
    expect(cardio.cards[0].title).toBe("Insuficiencia cardiaca");
    expect(cardio.cards[0].points).toEqual(["Punto 2", "Punto 3", "Punto 4"]);
    expect(cardio.cards[0].badge).toBe("Preguntado 2 veces");
    expect(cardio.cards[0].meta).toBe("MIR 2021 · 2022");
    expect(cardio.repeatedTopicCount).toBe(1);
    expect(summary.levels.reduce((sum, level) => sum + level.share, 0)).toBeCloseTo(1);
  });

  it("con el banco real genera ids únicos y cubre todas las preguntas válidas", () => {
    const summary = buildMirUltraSummary();
    const ids = summary.specialties.flatMap((s) => s.cards.map((card) => card.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(summary.specialties.reduce((sum, s) => sum + s.questionCount, 0)).toBe(summary.questionCount);
    expect(summary.specialties.some((s) => s.level === 1)).toBe(true);
  });
});

describe("contenido propio de los ultra resúmenes MIR", () => {
  it("cada especialidad del banco tiene su contenido por temas", () => {
    const covered = new Set(MIR_ULTRA_CONTENT.flatMap((item) => item.keys));
    const bankKeys = new Set(MIR_OFFICIAL_QUESTIONS.map((q) => getQuestionSpecialtyKeys(q)[0]).filter(Boolean));
    for (const key of bankKeys) expect(covered.has(key), key).toBe(true);
  });

  it("los temas suman las preguntas declaradas y las fichas tienen contenido", async () => {
    const ids = new Set<string>();
    for (const item of MIR_ULTRA_CONTENT) {
      const entries = await item.load();
      const cards = entries.filter(isUltraCard);
      expect(cards.length, item.slug).toBe(item.cardCount);
      const total = entries.reduce((sum, entry) => {
        if (entry.kind !== "heading") return sum;
        const match = entry.meta?.match(/^(\d+) pregunta/);
        return sum + (match ? Number(match[1]) : 0);
      }, 0);
      expect(total, item.slug).toBe(item.total);
      for (const entry of entries) {
        expect(ids.has(entry.id), entry.id).toBe(false);
        ids.add(entry.id);
        if (entry.kind === "heading") expect(entry.level, entry.id).toBeGreaterThan(0);
        else expect(entry.points.length, entry.id).toBeGreaterThan(0);
      }
    }
  });

  it("cada categoría MIR coloca las preguntas oficiales debajo de la ficha de su tema", async () => {
    const summary = buildMirUltraSummary();
    for (const specialty of summary.specialties) {
      const entries = await specialty.load();
      expect(entries[0].kind, specialty.slug).toBe("heading");
      expect(entries.filter(isUltraCard), specialty.slug).toHaveLength(specialty.cardCount);
      const bankIndex = entries.findIndex((entry) => entry.kind === "heading" && entry.title === MIR_BANK_SECTION_TITLE);
      entries.forEach((entry, index) => {
        if (!isUltraCard(entry) || !entry.official) return;
        // Va tras una ficha (propia u otra oficial de la misma ficha), nunca tras un separador ni al final.
        expect(entries[index - 1].kind, entry.id).toBe("card");
        if (bankIndex >= 0) expect(index, entry.id).toBeLessThan(bankIndex);
      });
      expect(entries.filter((entry) => isUltraCard(entry) && entry.official).length, specialty.slug).toBeGreaterThan(0);
    }

    const digestivo = summary.specialties.find((s) => s.slug === "digestivo")!;
    const entries = await digestivo.load();
    const parentOf = (title: string) => {
      let parent = "";
      for (const entry of entries) {
        if (isUltraCard(entry) && !entry.official) parent = entry.title;
        if (isUltraCard(entry) && entry.official && entry.title.toLowerCase() === title.toLowerCase()) return parent;
      }
      return null;
    };
    expect(parentOf("Síndrome de lynch")).toBe("Pólipos y síndromes hereditarios");
    expect(parentOf("Poliposis adenomatosa familiar")).toBe("Pólipos y síndromes hereditarios");
    expect(parentOf("Hernia inguinal")).toBe("Hernias");
  });

  it("deja al final las preguntas oficiales que no encajan con ninguna ficha", () => {
    const entries = placeOfficialCards(
      [
        { kind: "heading", id: "h", title: "Tumores de colon", level: 1 },
        { kind: "card", id: "polipos", title: "Pólipos y síndromes hereditarios", points: ["Síndrome de Lynch: inestabilidad de microsatélites, colon derecho."] },
        { kind: "card", id: "hernias", title: "Hernias", points: ["Hernia inguinal indirecta: la más frecuente."] },
      ],
      [
        { kind: "card", id: "b1", title: "Síndrome de Lynch", points: ["Lynch: genes de reparación, microsatélites, colon derecho."] },
        { kind: "card", id: "b2", title: "Metaanálisis", points: ["Combina estudios."] },
      ],
      "x",
      1,
    );
    expect(entries.map((entry) => entry.id)).toEqual(["h", "polipos", "b1", "hernias", "mir-x-banco", "b2"]);
    expect(entries[2]).toMatchObject({ official: true });
  });
});

import { describe, expect, it } from "vitest";
import { getLocalQuestionBank } from "@/lib/questions/local-bank";
import {
  buildTopicMastery,
  buildTopicPracticeHref,
  getTopicAreaKey,
  getTopicOverallAccuracy,
  getWeakestTopicArea,
} from "@/lib/training/topic-mastery";

describe("getTopicAreaKey", () => {
  it("agrupa variantes de mayúsculas, tildes y subtemas", () => {
    expect(getTopicAreaKey("CARDIOLOGÍA")).toBe("cardiologia");
    expect(getTopicAreaKey("Cardiología")).toBe("cardiologia");
    expect(getTopicAreaKey("CARDIOLOGÍA PEDIÁTRICA")).toBe("pediatria");
    expect(getTopicAreaKey("Ginecología")).toBe("ginecologia");
    expect(getTopicAreaKey("EMBRIOLOGÍA Y OBSTETRICIA")).toBe("ginecologia");
    expect(getTopicAreaKey("ORTOPEDIA Y TRAUMATOLOGÍA")).toBe("ortopedia");
    expect(getTopicAreaKey("Trauma - ATLS")).toBe("cirugia");
    expect(getTopicAreaKey("FISIOLOGÍA RENAL")).toBe("ciencias-basicas");
    expect(getTopicAreaKey("Atención Primaria en Salud")).toBe("salud-publica");
    expect(getTopicAreaKey("Semiología")).toBe("medicina-interna");
    expect(getTopicAreaKey("Tema inventado")).toBe("otras");
  });

  it("asigna un área a todos los temas del banco", async () => {
    const questions = await getLocalQuestionBank();
    const unmapped = [...new Set(questions.map((question) => question.topic))].filter(
      (topic) => getTopicAreaKey(topic) === "otras",
    );
    expect(unmapped).toEqual([]);
  });
});

describe("buildTopicMastery", () => {
  const mastery = buildTopicMastery({
    CARDIOLOGÍA: { correct: 3, wrong: 1 },
    Cardiología: { correct: 1, wrong: 0 },
    PEDIATRÍA: { correct: 1, wrong: 3 },
    Neurología: { correct: 1, wrong: 1 },
  });
  const byKey = new Map(mastery.map((item) => [item.key, item]));

  it("suma las variantes en una sola área y calcula el nivel", () => {
    expect(byKey.get("cardiologia")).toMatchObject({ answered: 5, correct: 4, accuracy: 80, level: "mastered" });
    expect(byKey.get("pediatria")).toMatchObject({ answered: 4, accuracy: 25, level: "weak" });
    expect(byKey.get("neurologia")).toMatchObject({ accuracy: 50, level: "progress" });
    expect(byKey.get("urologia")).toMatchObject({ answered: 0, accuracy: null, level: "not_started" });
    expect(byKey.has("otras")).toBe(false);
  });

  it("calcula el acierto global y el área más débil", () => {
    expect(getTopicOverallAccuracy(mastery)).toBe(55);
    expect(getWeakestTopicArea(mastery)?.key).toBe("pediatria");
  });

  it("sin datos sugiere la primera área sin empezar", () => {
    const empty = buildTopicMastery(undefined);
    expect(getTopicOverallAccuracy(empty)).toBeNull();
    expect(getWeakestTopicArea(empty)?.key).toBe("medicina-interna");
  });

  it("enlaza al entrenamiento filtrado por el área", () => {
    expect(buildTopicPracticeHref(byKey.get("pediatria")!)).toBe("/dashboard/entrenar?topic=pediatr");
  });
});

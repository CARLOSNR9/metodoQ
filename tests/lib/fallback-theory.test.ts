import { describe, expect, it } from "vitest";
import { buildFallbackTheoryContent } from "@/lib/questions/fallback-theory";

describe("buildFallbackTheoryContent", () => {
  it("arma la píldora con explicación, puntos clave y distractores", () => {
    const content = buildFallbackTheoryContent({
      explanation: "La respuesta es B porque...",
      keyPoints: ["Punto uno", "  "],
      options: [
        { id: "A", label: "A", incorrectFeedback: "A no aplica." },
        { id: "B", label: "B", incorrectFeedback: "No debería salir." },
        { id: "C", label: "C" },
      ],
      correctOptionId: "B",
    });

    expect(content).toBe(
      [
        "EXPLICACIÓN DEL PROFE BY DR Q.\n\nLa respuesta es B porque...",
        "### Puntos clave\n• Punto uno",
        "### ¿Por qué fallan las otras opciones?\n• Opción A: A no aplica.",
      ].join("\n\n"),
    );
  });

  it("no arma nada sin explicación", () => {
    expect(buildFallbackTheoryContent({ explanation: "  ", keyPoints: ["x"] })).toBeUndefined();
  });
});

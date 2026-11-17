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
        "EXPLICACIÓN DEL PROFE BY DR Q.\nLa respuesta es B porque...",
        "### Puntos clave\n• Punto uno",
        "### ¿Por qué fallan las otras opciones?\n• Opción A: A no aplica.",
      ].join("\n\n"),
    );
  });

  it("no arma nada sin explicación", () => {
    expect(buildFallbackTheoryContent({ explanation: "  ", keyPoints: ["x"] })).toBeUndefined();
  });
});

import { formatExplanationForTheory } from "@/lib/questions/fallback-theory";

describe("formatExplanationForTheory", () => {
  it("convierte las marcas del banco en bloques sin asteriscos", () => {
    const text = formatExplanationForTheory(
      "Enfermedad: X.\n\n**Trampa del examen:** creer Y.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, haz Z.",
    );
    expect(text).not.toContain("**");
    expect(text).toContain("Trampa del examen: creer Y.");
    expect(text).toContain("EXPLICACIÓN DEL PROFE BY DR Q.\nDoc, haz Z.");
    expect(text.startsWith("Enfermedad: X.")).toBe(true);
  });

  it("sin sección del profe, la explicación va dentro de su encabezado (no queda vacío)", () => {
    expect(formatExplanationForTheory("Texto **clave** simple.")).toBe(
      "EXPLICACIÓN DEL PROFE BY DR Q.\nTexto clave simple.",
    );
  });
});

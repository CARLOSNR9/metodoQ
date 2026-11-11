import { describe, expect, it } from "vitest";
import { getInitials, getPublishedTestimonials, TESTIMONIALS } from "@/lib/testimonials";

describe("testimonios", () => {
  it("solo publica los que tienen reseña", () => {
    expect(
      getPublishedTestimonials([
        { id: "a", name: "A", quote: "Me sirvió mucho." },
        { id: "b", name: "B", quote: "   " },
        { id: "c", name: "C" },
      ]).map((t) => t.id),
    ).toEqual(["a"]);
  });

  it("ids únicos", () => {
    expect(new Set(TESTIMONIALS.map((t) => t.id)).size).toBe(TESTIMONIALS.length);
  });

  it("iniciales sin artículos ni títulos", () => {
    expect(getInitials("El Churros")).toBe("C");
    expect(getInitials("Dra. Elizabeth Gómez")).toBe("EG");
  });
});

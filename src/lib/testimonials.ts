/**
 * Testimonios reales de la landing (sección "#testimonios").
 *
 * Solo se publican testimonios reales y autorizados por la persona.
 * Un testimonio sin `quote` no se muestra; si ninguno tiene texto, la
 * sección completa se oculta.
 *
 * Fotos: guardarlas en `public/testimonios/` (cuadradas, ~400×400 px,
 * JPG o WebP) y poner aquí la ruta, p. ej. "/testimonios/churros.jpg".
 * Sin foto se muestran las iniciales.
 */
export type Testimonial = {
  id: string;
  name: string;
  /** Rol o resultado corto, p. ej. "Residente de Medicina Interna · UdeA". */
  role?: string;
  /** Reseña corta (1-3 frases), tal como la escribió la persona. */
  quote?: string;
  photo?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { id: "churros", name: "El Churros" },
  { id: "carlos", name: "Carlos" },
  { id: "elizabeth", name: "Elizabeth" },
];

export function getPublishedTestimonials(list: Testimonial[] = TESTIMONIALS): Testimonial[] {
  return list.filter((t) => Boolean(t.quote?.trim()));
}

export function getInitials(name: string): string {
  const words = name
    .replace(/^(el|la|dr\.?|dra\.?)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  return words
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

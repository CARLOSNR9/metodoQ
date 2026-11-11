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
  {
    id: "churros",
    name: "El Churros",
    role: "Autor de las fichas Ultra resúmenes",
    quote:
      "Mis fichas nacieron de mi propia preparación. Verlas organizadas por rentabilidad y explicadas para que cualquiera las entienda es justo lo que me hubiera gustado tener cuando empecé.",
  },
  {
    id: "carlos",
    name: "Carlos",
    role: "Fundador de Método Q",
    quote:
      "Creé Método Q porque estudiar para la residencia no debería depender de tener tiempo de sobra. Aquí cada pregunta y cada ficha están pensadas para que avances entre turnos sin perder el foco.",
  },
  {
    id: "elizabeth",
    name: "Elizabeth",
    role: "Médica · Preparación para residencia",
    quote:
      "Lo que más me sirvió fue saber qué estudiar primero. Con los ultra resúmenes repaso en minutos lo que más cae y llego a los simulacros con más seguridad.",
  },
  {
    id: "juan-jose",
    name: "Dr. Juan José",
    // Pendiente: texto y rol aprobados por el Dr. Juan José.
  },
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

/** Renderiza los fragmentos `**negrita**` de enunciados y explicaciones MIR. */
export function renderWithBold(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/** Etiqueta "MIR 2025 · Pregunta 85" para las preguntas literales de un examen oficial. */
export function MirOfficialBadge({ officialExam }: { officialExam?: { year: number; number: number } }) {
  if (!officialExam) return null;
  return (
    <span className="inline-flex items-center rounded-full border border-mq-premium-gold/40 bg-mq-premium-gold/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-mq-premium-gold">
      MIR {officialExam.year} · Pregunta {officialExam.number}
    </span>
  );
}

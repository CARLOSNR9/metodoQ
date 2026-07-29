export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  items?: FAQItem[];
  className?: string;
};

const defaultItems: FAQItem[] = [
  {
    question: "¿Qué es Método Q y cómo me ayuda a pasar el examen?",
    answer: "Método Q es una plataforma inteligente que evalúa tu nivel de conocimiento, detecta tus puntos débiles y crea un plan de estudio personalizado. Con nuestra IA y simulacros reales, optimizamos tu preparación para asegurar tu ingreso a la especialidad médica.",
  },
  {
    question: "¿Sirve para el examen de cualquier universidad?",
    answer: "¡Sí! Contamos con un amplio banco de preguntas basadas en los exámenes de admisión de las mejores universidades del país (UdeA, Nacional, Javeriana, Univalle, etc.) y cubrimos todas las especialidades médicas.",
  },
  {
    question: "¿Puedo probar la plataforma antes de pagar?",
    answer: "Por supuesto. Puedes registrarte y realizar un diagnóstico inicial de forma gratuita para conocer tus fortalezas y debilidades, todo sin necesidad de ingresar tu tarjeta de crédito.",
  },
  {
    question: "¿En qué se diferencia de los cursos tradicionales?",
    answer: "A diferencia de los cursos tradicionales donde todos estudian lo mismo, Método Q adapta el temario diariamente a tus necesidades. Así inviertes tu tiempo en lo que realmente te falta por aprender, aumentando drásticamente tus probabilidades de aprobar.",
  },
  {
    question: "¿Puedo estudiar desde mi celular en los turnos?",
    answer: "Sí, la plataforma está 100% optimizada para dispositivos móviles. Podrás resolver micro-simulacros, revisar perlas clínicas y ver tu progreso en cualquier momento que tengas disponible.",
  },
];

export function FAQSection({
  id = "faq",
  eyebrow = "FAQ",
  title = "Preguntas frecuentes",
  items = defaultItems,
  className,
}: FAQSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-t border-mq-border ${className ?? ""}`}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
          {eyebrow}
        </p>
        <h2
          id="faq-heading"
          className="mt-5 max-w-2xl text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-12 divide-y divide-mq-border rounded-2xl border border-mq-border bg-mq-surface/70">
          {items.map((item) => (
            <details
              key={item.question}
              className="group px-4 py-0 transition-colors open:bg-white/[0.02] sm:px-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-medium leading-snug text-foreground transition duration-200 hover:text-white sm:py-5 sm:text-lg">
                <span className="pr-2">{item.question}</span>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mq-border bg-background/50 text-mq-muted transition duration-200 group-open:rotate-45 group-open:border-mq-accent/40 group-open:text-mq-accent"
                  aria-hidden
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-2 text-pretty text-sm leading-relaxed text-mq-muted sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

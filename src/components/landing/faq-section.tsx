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
    question: "¿Esto reemplaza a un curso o a mis apuntes?",
    answer:
      "No sustituye tu criterio ni tu bibliografía: te ayuda a entrenar el examen con preguntas y a priorizar qué estudiar cuando el tiempo es el cuello de botella.",
  },
  {
    question: "¿Voy a tener tiempo entre guardias y rotaciones?",
    answer:
      "Está pensado para sesiones cortas y de alta señal: practicas, recibes feedback y sabes el siguiente paso sin rearmar un plan desde cero cada semana.",
  },
  {
    question: "¿Cómo sé qué estoy fallando de verdad?",
    answer:
      "Al responder, el sistema agrupa patrones (temas y tipos de error). La idea es simple: menos repetición inútil, más repetición sobre lo que te puede costar la pregunta.",
  },
  {
    question: "¿Puedo cancelar un plan de pago?",
    answer:
      "Sí. Si activas un plan Pro, podrás cancelarlo según las condiciones vigentes en el momento de la compra; conservas acceso hasta el fin del periodo pagado.",
  },
];

export function FAQSection({
  id = "faq",
  eyebrow = "Objeciones frecuentes",
  title = "Respuestas claras. Sin marketing vacío.",
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

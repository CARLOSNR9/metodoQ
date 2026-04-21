export type HowItWorksStep = {
  title: string;
  description: string;
};

export type HowItWorksSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  steps?: HowItWorksStep[];
  className?: string;
};

const defaultSteps: HowItWorksStep[] = [
  {
    title: "Respondes preguntas tipo MIR",
    description:
      "Simulas el examen con el ritmo real: lectura, descarte y decisión bajo presión.",
  },
  {
    title: "Aislamos el patrón del fallo",
    description:
      "No solo “mal”: agrupamos temas y tipos de error para que veas el mapa, no el ruido.",
  },
  {
    title: "Te decimos qué estudiar después",
    description:
      "Prioridad clara: lo que más te resta probabilidad de acierto, primero.",
  },
  {
    title: "Repites el ciclo hasta fijar",
    description:
      "Microciclos de práctica + refuerzo hasta que el concepto quede estable.",
  },
];

export function HowItWorksSection({
  id = "como-funciona",
  eyebrow = "El método",
  title = "Cuatro pasos. Un objetivo: que entrenes como se examina.",
  steps = defaultSteps,
  className,
}: HowItWorksSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-t border-mq-border bg-mq-surface ${className ?? ""}`}
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
          {eyebrow}
        </p>
        <h2
          id="how-heading"
          className="mt-5 max-w-[22rem] text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:max-w-3xl sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>

        <ol className="relative mt-14 space-y-0 sm:mt-16">
          {steps.map((step, index) => {
            const n = index + 1;
            const isLast = index === steps.length - 1;
            return (
              <li key={step.title} className="relative flex gap-5 sm:gap-8">
                <div className="relative flex w-8 shrink-0 flex-col items-center sm:w-10">
                  {!isLast ? (
                    <span
                      className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/28 to-transparent"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-[1] flex h-8 w-8 items-center justify-center rounded-full bg-mq-accent text-xs font-bold text-mq-accent-foreground shadow-[0_0_0_4px_rgb(10_31_68)] ring-1 ring-mq-accent/40 transition duration-200 sm:h-10 sm:w-10 sm:text-sm">
                    {n}
                  </span>
                </div>
                <div className="pb-12 sm:pb-14">
                  <h3 className="text-lg font-semibold sm:text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-pretty text-base leading-relaxed text-mq-muted sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

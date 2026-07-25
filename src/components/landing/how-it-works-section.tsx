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
    title: "1. Diagnóstico",
    description:
      "Identifica tus debilidades en 10 minutos con una prueba inicial.",
  },
  {
    title: "2. Entrenamiento Adaptativo",
    description:
      "Responde preguntas tipo examen con retroalimentación inmediata, enfocándote solo en lo que necesitas mejorar.",
  },
  {
    title: "3. Simulacros Reales",
    description:
      "Mídete contra el tiempo en condiciones idénticas al examen de admisión.",
  },
];

export function HowItWorksSection({
  id = "como-funciona",
  eyebrow = "El método",
  title = "El camino directo a tu especialidad",
  steps = defaultSteps,
  className,
}: HowItWorksSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-t border-slate-200 bg-white ${className ?? ""}`}
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
          {eyebrow}
        </p>
        <h2
          id="how-heading"
          className="mt-5 max-w-[22rem] text-balance text-2xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:max-w-3xl sm:text-3xl lg:text-4xl"
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
                      className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-slate-200 to-transparent"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-[1] flex h-8 w-8 items-center justify-center rounded-full bg-mq-accent text-xs font-bold text-white shadow-[0_0_0_4px_white] ring-1 ring-slate-200 transition duration-200 sm:h-10 sm:w-10 sm:text-sm">
                    {n}
                  </span>
                </div>
                <div className="pb-12 sm:pb-14 pt-1 sm:pt-2">
                  <h3 className="text-lg font-bold text-slate-800 sm:text-xl">{step.title.replace(/^\d+\.\s/, '')}</h3>
                  <p className="mt-2 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
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

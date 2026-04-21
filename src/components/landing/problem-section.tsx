export type ProblemSectionProps = {
  eyebrow?: string;
  title?: string;
  pains?: string[];
  closingLine?: string;
  className?: string;
};

const defaultPains = [
  "Ves clase tras clase… y en el test te falla lo mismo: no es falta de esfuerzo, es falta de diagnóstico.",
  "Tu tiempo es oro (guardias, rotaciones, vida): si no priorizas, estudias “mucho” y mejoras poco.",
  "Sin datos, repites temas que ya dominas y dejas huecos donde te pueden tumbar la plaza.",
  "La ansiedad no es flojera: es incertidumbre. Y sin un plan claro, se dispara.",
];

export function ProblemSection({
  eyebrow = "Si te suena esto",
  title = "No es que no estudies lo suficiente. Es que no estás entrenando lo correcto.",
  pains = defaultPains,
  closingLine = "No necesitas estudiar más. Necesitas estudiar mejor.",
  className,
}: ProblemSectionProps) {
  return (
    <section
      className={`border-t border-mq-border bg-mq-surface ${className ?? ""}`}
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
          {eyebrow}
        </p>
        <h2
          id="problem-heading"
          className="mt-5 max-w-[22rem] text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:max-w-3xl sm:text-3xl sm:leading-[1.12] lg:text-4xl lg:leading-[1.1]"
        >
          {title}
        </h2>

        <ul className="mt-12 space-y-4 sm:space-y-5">
          {pains.map((pain, i) => (
            <li
              key={`${i}-${pain.slice(0, 24)}`}
              className="group flex gap-4 rounded-2xl border border-mq-border bg-background/40 p-4 transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/14 hover:bg-background/55 sm:p-6"
            >
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/12 text-xs font-bold text-red-300 ring-1 ring-red-400/25"
                aria-hidden
              >
                −
              </span>
              <p className="text-base font-medium leading-relaxed text-white/92 sm:text-[1.0625rem]">
                {pain}
              </p>
            </li>
          ))}
        </ul>

        <figure className="mt-14 rounded-2xl border border-mq-accent/30 bg-mq-accent/[0.07] px-6 py-7 sm:px-9 sm:py-9">
          <blockquote className="text-balance text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl sm:leading-snug">
            {closingLine}
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

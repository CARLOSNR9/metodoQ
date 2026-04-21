export type DifferentiatorRow = {
  label: string;
  others: string;
  metodoQ: string;
};

export type DifferentiatorSectionProps = {
  eyebrow?: string;
  title?: string;
  rows?: DifferentiatorRow[];
  leftTitle?: string;
  rightTitle?: string;
  className?: string;
};

const defaultRows: DifferentiatorRow[] = [
  {
    label: "Enfoque",
    others: "Mucha teoría y poca práctica “tipo examen”.",
    metodoQ: "Sesiones de preguntas + feedback accionable desde el día 1.",
  },
  {
    label: "Diagnóstico",
    others: "Tú interpretas si vas bien (a ojo).",
    metodoQ: "Priorización por lagunas reales, no por sensación.",
  },
  {
    label: "Plan",
    others: "Una ruta genérica para todos.",
    metodoQ: "Siguiente paso según tus fallos, no según el calendario.",
  },
  {
    label: "Resultado",
    others: "Horas estudiadas como métrica.",
    metodoQ: "Mejora medible en lo que te puede tumbar preguntas.",
  },
];

export function DifferentiatorSection({
  eyebrow = "Comparativa",
  title = "Cursos tradicionales vs Método Q",
  rows = defaultRows,
  leftTitle = "Otros cursos",
  rightTitle = "Método Q",
  className,
}: DifferentiatorSectionProps) {
  return (
    <section
      className={`border-t border-mq-border ${className ?? ""}`}
      aria-labelledby="diff-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
          {eyebrow}
        </p>
        <h2
          id="diff-heading"
          className="mt-5 max-w-[22rem] text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:max-w-3xl sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-12 hidden gap-4 sm:grid sm:grid-cols-2 lg:gap-6">
          <div className="rounded-2xl border border-mq-border bg-mq-surface px-4 py-3.5 text-center text-sm font-semibold text-mq-muted">
            {leftTitle}
          </div>
          <div className="rounded-2xl border border-mq-accent/35 bg-mq-accent/[0.08] px-4 py-3.5 text-center text-sm font-semibold text-mq-accent">
            {rightTitle}
          </div>
        </div>

        <div className="mt-5 space-y-6 sm:mt-6 lg:space-y-8">
          {rows.map((row) => (
            <div key={row.label}>
              <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-mq-muted sm:mb-4 sm:text-xs">
                {row.label}
              </p>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-6">
                <div className="flex flex-col gap-2 rounded-2xl border border-mq-border bg-background/40 p-4 transition duration-200 hover:border-white/12 sm:p-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-mq-muted sm:hidden">
                    {leftTitle}
                  </p>
                  <div className="flex gap-3">
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/55"
                      aria-hidden
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                    <p className="text-sm leading-relaxed text-mq-muted sm:text-base">
                      {row.others}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-2xl border border-mq-accent/28 bg-mq-accent/[0.06] p-4 transition duration-200 hover:border-mq-accent/45 sm:p-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-mq-accent sm:hidden">
                    {rightTitle}
                  </p>
                  <div className="flex gap-3">
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mq-accent/22 text-mq-accent"
                      aria-hidden
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-white/95 sm:text-base">
                      {row.metodoQ}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

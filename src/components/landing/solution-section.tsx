import Link from "next/link";

export type SolutionSectionProps = {
  eyebrow?: string;
  title?: string;
  lead?: string;
  notTraditional?: string;
  bullets?: string[];
  /** Mostrar CTA secundario hacia precios (refuerzo de conversión). @default true */
  showCta?: boolean;
  cta?: { label: string; href: string };
  className?: string;
};

const defaultBullets = [
  "Entender temas complejos rápidamente",
  "Ahorrar horas de estudio",
  "Aprender a tu ritmo",
  "Explicaciones claras y sin relleno",
];

export function SolutionSection({
  eyebrow = "La Solución",
  title = "Aquí es donde entra Método Q",
  lead = "Método Q transforma cualquier tema en explicaciones simples, directas y fáciles de entender usando inteligencia artificial.",
  notTraditional = "No es otro curso largo y aburrido. Es una herramienta inteligente diseñada para darte claridad inmediata sobre lo que realmente importa.",
  bullets = defaultBullets,
  showCta = true,
  cta = { label: "Empieza gratis", href: "#precios" },
  className,
}: SolutionSectionProps) {
  return (
    <section
      className={`border-t border-mq-border ${className ?? ""}`}
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
          {eyebrow}
        </p>
        <h2
          id="solution-heading"
          className="mt-5 max-w-[22rem] text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:max-w-3xl sm:text-3xl sm:leading-[1.12] lg:text-4xl"
        >
          {title}
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-mq-muted sm:text-lg">
          {lead}
        </p>

        <p className="mt-9 max-w-2xl rounded-2xl border border-dashed border-mq-border-strong bg-mq-surface px-5 py-5 text-base font-medium leading-relaxed text-white/90 sm:px-7 sm:py-6 sm:text-lg">
          {notTraditional}
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-mq-border bg-mq-surface/90 p-5 transition duration-200 hover:border-white/12 hover:bg-mq-surface"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mq-accent/18 text-mq-accent"
                aria-hidden
              >
                <svg
                  className="h-3.5 w-3.5"
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
              <span className="text-[0.9375rem] font-medium leading-snug sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {showCta ? (
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={cta.href}
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-xl bg-mq-accent px-7 text-[0.9375rem] font-semibold text-mq-accent-foreground shadow-[0_1px_0_rgb(255_255_255/0.12)_inset] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:w-auto sm:min-w-[12.5rem]"
            >
              {cta.label}
            </Link>
            <p className="text-center text-xs text-mq-muted sm:text-left sm:text-sm">
              Sin tarjeta para empezar en el plan gratuito.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

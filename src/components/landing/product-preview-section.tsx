import Link from "next/link";

export type ProductPreviewSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  className?: string;
};

export function ProductPreviewSection({
  id = "producto",
  eyebrow = "Producto",
  title = "Asi se ve Metodo Q",
  lead = "No es teoria pasiva: respondes, recibes feedback accionable y sabes exactamente que estudiar despues de cada sesion.",
  className,
}: ProductPreviewSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-t border-mq-border bg-background ${className ?? ""}`}
      aria-labelledby="product-preview-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mq-accent sm:text-xs">
          {eyebrow}
        </p>
        <h2
          id="product-preview-heading"
          className="mt-5 max-w-2xl text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-mq-muted sm:text-lg">
          {lead}
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-mq-border bg-white/[0.02] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-accent">
              1. Pregunta MIR
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">
              Mujer de 28 anos con fiebre, dolor pleuritico y disnea de inicio
              subagudo. Cual es la prueba inicial mas util para confirmar
              embolia pulmonar?
            </p>
            <ul className="mt-4 space-y-2 text-sm text-mq-muted">
              <li>A) TAC toracico sin contraste</li>
              <li>B) Dimero D + probabilidad clinica</li>
              <li>C) Radiografia de torax</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-mq-border bg-white/[0.02] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-accent">
              2. Tu respuesta
            </p>
            <div className="mt-4 rounded-xl border border-mq-border-strong bg-background/70 p-4">
              <p className="text-sm text-foreground/90">Seleccionaste: A)</p>
              <p className="mt-2 text-sm font-semibold text-rose-300">
                Resultado: Incorrecta
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-mq-muted">
              Detectamos un patron: dudas en algoritmo diagnostico de
              tromboembolismo.
            </p>
          </article>

          <article className="rounded-2xl border border-mq-border bg-white/[0.02] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-accent">
              3. Feedback accionable
            </p>
            <div className="mt-4 rounded-xl border border-mq-accent/35 bg-mq-accent/10 p-4">
              <p className="text-sm font-semibold text-mq-accent">
                Siguiente objetivo recomendado
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                Repasar algoritmo Wells + uso de Dimero D en paciente de bajo y
                moderado riesgo.
              </p>
            </div>
            <Link
              href="/register"
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-mq-accent px-4 text-sm font-semibold text-mq-accent-foreground transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent"
            >
              Probar este flujo gratis
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

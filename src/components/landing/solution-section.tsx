import { motion } from "framer-motion";

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
  "🎯 Practicas como el día del examen",
  "🧠 Detectamos exactamente en qué fallas",
  "⚡ Estudias solo lo que necesitas",
  "📈 Mejoras medibles en cada sesión",
];

export function SolutionSection({
  eyebrow = "La Solución",
  title = "Así es como empiezas a mejorar de verdad.",
  lead = "Te entrenamos con preguntas reales y te mostramos exactamente en qué estás fallando.",
  notTraditional = "No es otro curso. Es entrenamiento real para el examen.",
  bullets = defaultBullets,
  showCta = true,
  cta = { label: "Haz tu diagnóstico gratis", href: "/login" },
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

        {/* Visual Demo / Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative rounded-3xl border border-mq-border-strong bg-[#0B1221] p-1 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden">
             {/* Mockup Header */}
             <div className="flex items-center gap-2 px-4 py-3 border-b border-mq-border/30 bg-mq-surface/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
                <span className="ml-2 text-[10px] font-medium tracking-widest uppercase text-mq-muted">Simulador Método Q — Beta</span>
             </div>
             
             {/* Mockup Content */}
             <div className="p-6 sm:p-10">
                <div className="mb-8">
                  <div className="inline-flex items-center px-2.5 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded-md bg-mq-accent/10 text-mq-accent border border-mq-accent/20">
                    🩺 Cardiología / Urgencias
                  </div>
                  <h4 className="text-lg font-bold text-white leading-snug sm:text-xl">
                    Paciente de 45 años con dolor torácico opresivo de 30 min de evolución... ¿Cuál es la conducta inicial más adecuada?
                  </h4>
                </div>
                
                <div className="grid gap-3 mb-10">
                  <div className="p-4 rounded-xl border border-mq-border bg-mq-surface/40 text-sm text-white/60">
                    A) Realizar ecocardiograma transtorácico
                  </div>
                  <div className="p-4 rounded-xl border border-mq-accent/50 bg-mq-accent/10 text-sm font-bold text-white flex items-center justify-between ring-1 ring-mq-accent/30 shadow-[0_0_20px_-10px_rgba(0,209,255,0.3)]">
                    B) Toma de ECG de 12 derivaciones
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mq-accent text-mq-accent-foreground text-[10px]">✓</span>
                  </div>
                </div>

                {/* AI Feedback Mockup */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative rounded-2xl bg-mq-surface border border-mq-border-strong p-6 shadow-xl"
                >
                  <div className="absolute -left-1 top-6 w-1 h-12 bg-mq-accent rounded-full" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mq-accent to-blue-600 flex items-center justify-center text-xs font-black text-white shadow-lg">Q</div>
                    <span className="text-[11px] font-black text-mq-accent uppercase tracking-[0.2em]">Feedback Inteligente</span>
                  </div>
                  <p className="text-sm text-mq-muted leading-relaxed">
                    <span className="text-white font-bold">¡Correcto!</span> En sospecha de síndrome coronario agudo, el ECG debe realizarse e interpretarse en los primeros <span className="text-mq-accent font-bold">10 minutos</span>. Priorizar otros estudios es el error #1 en el examen Nacional.
                  </p>
                </motion.div>
             </div>
          </div>
        </motion.div>

        {showCta ? (
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              href={cta.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-xl bg-mq-accent px-7 text-[0.9375rem] font-bold text-mq-accent-foreground shadow-[0_0_40px_-10px_rgb(0_209_255/0.5)] transition duration-200 hover:brightness-110 sm:w-auto sm:min-w-[15rem]"
            >
              {cta.label}
            </motion.a>
            <p className="text-center text-xs text-mq-muted sm:text-left sm:text-sm">
              Sin tarjeta para empezar en el plan gratuito.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

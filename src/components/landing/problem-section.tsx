"use client";

export type ProblemSectionProps = {
  eyebrow?: string;
  title?: string;
  pains?: string[];
  closingLine?: string;
  className?: string;
};

const defaultPains = [
  "😫 Te sientes frustrado porque has intentado pasar a la residencia y no lo has logrado",
  "📹 Los cursos tradicionales son videos interminables y aburridos que no retienes",
  "📚 Lees y lees... pero al llegar al examen no sabes cómo contestar las preguntas",
];

import { motion } from "framer-motion";

export function ProblemSection({
  eyebrow = "LA REALIDAD",
  title = "El problema no es que no estudies. Es que estás estudiando mal.",
  pains = defaultPains,
  closingLine = "No te falta inteligencia. Te falta el sistema correcto.",
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
        <motion.h2
          id="problem-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 max-w-[22rem] text-balance text-2xl font-bold leading-[1.15] tracking-tight sm:max-w-3xl sm:text-4xl sm:leading-[1.12] lg:text-5xl lg:leading-[1.1] text-white"
        >
          {title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-lg font-medium text-red-400/90"
        >
          Si te pasa esto… no es casualidad.
        </motion.p>

        <ul className="mt-6 space-y-4 sm:space-y-5">
          {pains.map((pain, i) => (
            <motion.li
              key={`${i}-${pain.slice(0, 24)}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group flex gap-4 rounded-2xl border border-mq-border bg-background/40 p-5 transition-all duration-300 hover:border-mq-accent/30 hover:bg-mq-accent/[0.03] hover:shadow-[0_0_30px_-10px_rgba(0,209,255,0.15)] sm:p-6"
            >
              <p className="text-base font-medium leading-relaxed text-white/90 sm:text-[1.125rem]">
                {pain}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.figure 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-14 rounded-2xl border border-mq-accent/30 bg-mq-accent/[0.07] px-6 py-7 sm:px-9 sm:py-9 shadow-[0_0_50px_-12px_rgba(0,209,255,0.2)]"
        >
          <blockquote className="text-balance text-xl font-bold leading-snug tracking-tight text-white sm:text-3xl sm:leading-snug">
            {closingLine}
          </blockquote>
        </motion.figure>
      </div>
    </section>
  );
}

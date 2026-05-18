"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Target } from "lucide-react";

export function UccPastoInsightCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-mq-accent/25 bg-gradient-to-br from-mq-accent/10 via-transparent to-purple-500/5 p-6 sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-mq-accent/30 bg-mq-accent/10 px-3 py-1"
      >
        <Target size={14} className="text-mq-accent" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
          Examen UCC Pasto · Medicina Interna
        </span>
      </motion.div>

      <h2 className="text-xl font-black text-white sm:text-2xl">
        Tu examen en una mirada
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mq-muted">
        100 preguntas en 3 horas (≈1,8 min/pregunta), estilo MIR: saber y descartar. La IA prioriza
        lo que más pesa en tu convocatoria.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Ciencias clínicas", pct: "50%", detail: "MI, GO, cirugía, pediatría, básicas" },
          { label: "Epidemiología", pct: "30%", detail: "Diseños, OR/RR, validez diagnóstica" },
          { label: "Res. 3280", pct: "10%", detail: "RIAS, tamizajes, cursos de vida" },
          { label: "Lectura crítica", pct: "10%", detail: "Guías y abstracts científicos" },
        ].map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-2xl font-black text-mq-accent">{item.pct}</p>
            <p className="mt-1 text-xs font-bold text-white">{item.label}</p>
            <p className="mt-1 text-[11px] leading-snug text-mq-muted">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mt-5 flex flex-wrap items-center gap-4 text-[11px] font-medium text-mq-muted"
      >
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} className="text-mq-accent" />
          180 min · ritmo de simulacro
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BookOpen size={14} className="text-mq-accent" />
          Basado en tu experiencia y cohortes UCC
        </span>
      </motion.div>
    </motion.section>
  );
}

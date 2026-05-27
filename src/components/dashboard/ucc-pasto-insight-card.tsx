"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Target, AlertTriangle } from "lucide-react";

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
        className="mb-5 flex flex-wrap items-center gap-2"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/30 bg-mq-accent/10 px-3 py-1">
          <Target size={14} className="text-mq-accent" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
            Examen UCC Pasto · Medicina Interna
          </span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1">
          <AlertTriangle size={14} className="text-rose-400" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300">
            Percentil 75 = mínimo para evaluar HV
          </span>
        </div>
      </motion.div>

      <h2 className="text-xl font-black text-white sm:text-2xl">
        Tu examen en una mirada
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mq-muted">
        100–200 preguntas en 3–4 horas (≈1,8 min/pregunta). Res. Rectoral 108/2022:
        la prueba escrita vale hasta 40/60 pts en Fase I. Solo el percentil 75+ pasa a
        hoja de vida.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Ciencias básicas",
            pct: "20%",
            detail: "Farmaco, inmunología, fisiología, bioquímica",
          },
          {
            label: "Clínica del adulto",
            pct: "50%",
            detail: "Cardio, infecto, neumo, neuro, nefro, endocrino",
          },
          {
            label: "APS y urgencias",
            pct: "20%",
            detail: "Epidemiología, Res. 3280, toxicología, MBE",
          },
          {
            label: "Comprensión lectora",
            pct: "10%",
            detail: "Abstracts, deontología, lectura crítica",
          },
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
          3 cupos/semestre · 12 preseleccionados por cohorte
        </span>
      </motion.div>
    </motion.section>
  );
}

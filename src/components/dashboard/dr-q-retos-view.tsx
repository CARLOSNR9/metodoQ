"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Stethoscope } from "lucide-react";
import { DR_Q_CHALLENGES, type DrQChallengeCompletion } from "@/lib/dr-q-challenges";

type DrQRetosViewProps = {
  drQChallenges?: Record<string, DrQChallengeCompletion>;
};

export function DrQRetosView({ drQChallenges }: DrQRetosViewProps) {
  const completed = drQChallenges ?? {};

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-mq-accent">
          Casos con perlas de examen
        </p>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Retos del Dr. Q
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Casos clínicos con la explicación del Profe by Dr. Q. Cada reto queda disponible
          para repasarlo cuantas veces quieras después de completarlo.
        </p>
      </header>

      <div className="grid gap-5">
        {DR_Q_CHALLENGES.map((challenge) => {
          const completion = completed[challenge.id];
          const isCompleted = Boolean(completion);

          return (
            <motion.article
              key={challenge.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-slate-200 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${
                        isCompleted
                          ? "border-blue-200 bg-blue-50 text-blue-700"
                          : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {isCompleted ? "Completada" : "Disponible"}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      {challenge.label}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-slate-900">{challenge.editionLabel}</h2>
                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <Stethoscope size={14} className="text-mq-accent" />
                      {challenge.questions.length} preguntas con retroalimentación
                    </p>
                  </div>

                  {completion ? (
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                      <CheckCircle2 size={16} />
                      {completion.score} de {completion.total} correctas
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:min-w-[220px]">
                  <Link
                    href={challenge.href}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 text-sm font-black text-slate-950 transition hover:bg-yellow-300"
                  >
                    {isCompleted ? "Repasar reto" : "Abrir evaluación"}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

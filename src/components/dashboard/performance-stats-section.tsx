"use client";

import { BarChart3 } from "lucide-react";
import { SummaryCards } from "./summary-cards";
import { AccumulatedStats } from "./accumulated-stats";

type PerformanceStatsSectionProps = {
  userId: string;
};

/**
 * SummaryCards y AccumulatedStats mostraban métricas complementarias
 * (mejor puntaje/promedio/último intento vs. total de preguntas/mejora/días
 * activos) como dos secciones sueltas sin encabezado. Se agrupan aquí bajo
 * un único título para que se lean como un solo bloque de "tu progreso".
 */
export function PerformanceStatsSection({ userId }: PerformanceStatsSectionProps) {
  return (
    <section className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
          <BarChart3 size={18} />
        </div>
        <h2 className="text-lg font-bold text-slate-900">Tu progreso en números</h2>
      </div>
      <SummaryCards userId={userId} />
      <AccumulatedStats userId={userId} />
    </section>
  );
}

"use client";

import { Globe2 } from "lucide-react";
import { MIR_EXAM_EDITIONS } from "@/lib/training/mir-convocatoria";

type MirDashboardViewProps = {
  userId: string;
};

/**
 * Vista del dashboard del módulo MIR. Tema oscuro/dorado deliberadamente
 * distinto del resto del dashboard, para señalar que es un módulo aparte
 * (examen internacional, no una universidad colombiana).
 */
export function MirDashboardView({ userId }: MirDashboardViewProps) {
  // TODO(contenido): usar userId para leer intentos guardados (ver getMirAttempt) una vez haya banco de preguntas.
  void userId;
  const hasContent = MIR_EXAM_EDITIONS.some((edition) => edition.questions.length > 0);

  return (
    <div className="space-y-6 rounded-[2rem] bg-[#0A1F44] p-6 sm:p-8">
      <header>
        <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
          <Globe2 className="h-3.5 w-3.5" />
          Módulo internacional
        </p>
        <h1 className="mt-1 text-2xl font-black text-white">Simulacro MIR</h1>
      </header>

      {hasContent ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {MIR_EXAM_EDITIONS.map((edition) => (
            <article
              key={edition.code}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-lg font-bold text-white">{edition.label}</h2>
              <p className="mt-1 text-sm text-slate-300">
                {edition.questionCount} preguntas · {edition.minutes} min
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-white/20 bg-white/[0.02] p-10 text-center">
          <p className="text-sm font-semibold text-slate-300">
            Tu acceso al módulo MIR está activo. El banco de preguntas se está
            cargando y estará disponible aquí en los próximos días.
          </p>
        </div>
      )}
    </div>
  );
}

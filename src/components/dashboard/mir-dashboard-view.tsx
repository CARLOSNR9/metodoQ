"use client";

import { MIR_EXAM_EDITIONS } from "@/lib/training/mir-convocatoria";

type MirDashboardViewProps = {
  userId: string;
};

/**
 * Vista del dashboard del módulo MIR. Placeholder hasta que exista banco de
 * preguntas propio (ver TODO en mir-convocatoria.ts); mismo estilo visual
 * que el resto de Método Q.
 */
export function MirDashboardView({ userId }: MirDashboardViewProps) {
  // TODO(contenido): usar userId para leer intentos guardados (ver getMirAttempt) una vez haya banco de preguntas.
  void userId;
  const hasContent = MIR_EXAM_EDITIONS.some((edition) => edition.questions.length > 0);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
          Módulo MIR
        </p>
        <h1 className="text-2xl font-black text-slate-900">Simulacro MIR</h1>
      </header>

      {hasContent ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {MIR_EXAM_EDITIONS.map((edition) => (
            <article
              key={edition.code}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-900">{edition.label}</h2>
              <p className="mt-1 text-sm text-slate-500">
                {edition.questionCount} preguntas · {edition.minutes} min
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/60 p-10 text-center">
          <p className="text-sm font-semibold text-slate-500">
            Tu acceso al módulo MIR está activo. El banco de preguntas se está
            cargando y estará disponible aquí en los próximos días.
          </p>
        </div>
      )}
    </div>
  );
}

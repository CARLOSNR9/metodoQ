"use client";

import { CheckCircle2, XCircle, ChevronRight, Sparkles } from "lucide-react";

export function QuizMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] overflow-hidden rounded-[2.5rem] border-[8px] border-mq-surface bg-background p-1 shadow-2xl ring-1 ring-mq-border/50">
      {/* Phone Notch/Status Bar Area */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
        <div className="h-4 w-24 rounded-b-xl bg-mq-surface"></div>
      </div>

      <div className="relative flex h-[650px] w-full flex-col rounded-[2rem] bg-[#0f172a] overflow-hidden">
        {/* Header - Progress */}
        <div className="p-6 pt-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-mq-muted uppercase tracking-wider">Pregunta 3 de 10</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-6 rounded-full bg-mq-accent"></div>
              <div className="h-1.5 w-6 rounded-full bg-mq-accent"></div>
              <div className="h-1.5 w-6 rounded-full bg-mq-accent"></div>
              <div className="h-1.5 w-6 rounded-full bg-mq-surface-raised"></div>
            </div>
          </div>

          {/* Question */}
          <h3 className="text-xl font-bold leading-snug text-white">
            ¿Cuál es el principal beneficio de utilizar el Método Q frente a la lectura tradicional?
          </h3>
        </div>

        {/* Options */}
        <div className="flex-1 px-6 space-y-3">
          {/* Option 1: Incorrect */}
          <div className="group relative flex cursor-not-allowed items-center justify-between rounded-2xl border border-red-500/30 bg-red-500/10 p-4 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                <XCircle className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-white/80 line-through">Memorizar datos exactos rápidamente.</span>
            </div>
          </div>

          {/* Option 2: Correct & Selected */}
          <div className="relative flex cursor-pointer items-center justify-between rounded-2xl border border-emerald-500/50 bg-emerald-500/15 p-4 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-white">Comprender conceptos complejos simplificados.</span>
            </div>
            <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg animate-bounce">
              <Sparkles className="h-3 w-3" />
            </div>
          </div>

          {/* Option 3: Default */}
          <div className="relative flex cursor-not-allowed items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-4 opacity-50 transition-all">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20">
                <span className="text-xs text-white/50">C</span>
              </div>
              <span className="text-sm font-medium text-white/60">Sustituir por completo a los profesores.</span>
            </div>
          </div>
        </div>

        {/* Feedback Card (Bottom overlay) */}
        <div className="absolute bottom-0 inset-x-0 translate-y-0 rounded-t-3xl border-t border-emerald-500/20 bg-emerald-950/80 p-6 backdrop-blur-xl transition-transform duration-500">
          <div className="mb-4 flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-emerald-500/20 p-1.5 text-emerald-400">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-base font-bold text-emerald-400">¡Exacto!</h4>
              <p className="mt-1 text-sm leading-relaxed text-emerald-100/80">
                El Método Q no busca que memorices, sino que <strong>entiendas la lógica</strong> detrás de cada concepto usando analogías que tu cerebro ya conoce.
              </p>
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 active:scale-[0.98]">
            Siguiente Pregunta
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Decorative ambient light */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-emerald-500/20 blur-[60px] opacity-50"></div>
    </div>
  );
}

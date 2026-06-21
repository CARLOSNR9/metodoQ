"use client";

import { AlertTriangle } from "lucide-react";

type ExamFocusWarningModalProps = {
  open: boolean;
  leaveCount: number;
  onDismiss: () => void;
};

export function ExamFocusWarningModal({
  open,
  leaveCount,
  onDismiss,
}: ExamFocusWarningModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-[#020817]/90 px-4 backdrop-blur-md"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="exam-focus-warning-title"
    >
      <div className="w-full max-w-lg rounded-3xl border border-amber-500/30 bg-[#06132B] p-6 shadow-[0_28px_80px_-28px_rgba(245,158,11,0.35)] sm:p-8">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20">
          <AlertTriangle size={28} aria-hidden />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
          Aviso del examen
        </p>
        <h2
          id="exam-focus-warning-title"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          Permanece en esta pestaña
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#DCE7FA] sm:text-base">
          Detectamos que saliste del examen. Para mantener la integridad de la
          convocatoria, evita cambiar de pestaña, minimizar la ventana o consultar
          fuentes externas mientras respondes.
        </p>
        <p className="mt-3 text-sm text-amber-100/90">
          {leaveCount === 1
            ? "Este es un recordatorio amable: concéntrate aquí hasta terminar."
            : `Llevas ${leaveCount} salidas registradas durante este intento. Sigue el examen sin interrupciones.`}
        </p>

        <button
          type="button"
          onClick={onDismiss}
          className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent px-5 text-base font-bold text-mq-accent-foreground transition hover:brightness-110"
        >
          Entendido, continuar examen
        </button>
      </div>
    </div>
  );
}

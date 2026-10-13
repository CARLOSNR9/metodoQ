"use client";

import { useState } from "react";
import { Flag } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";
import { ReportQuestionModal } from "@/components/demo/report-question-modal";
import { MIR_REPORT_CATEGORIES, describeMirQuestion } from "@/lib/mir/question-reports";

/**
 * Botón «Reportar» de cada pregunta MIR: abre el formulario de reporte
 * (respuesta incorrecta, pregunta mal planteada, etc.). Los reportes llegan
 * al panel de admin «Reportes MIR».
 */
export function MirReportQuestionButton({ question }: { question: TrainingQuestion }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        title="Reportar un error en esta pregunta"
        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-bold text-slate-400 transition hover:border-rose-400/50 hover:text-rose-300"
      >
        <Flag className="h-3 w-3" />
        Reportar
      </button>
      <ReportQuestionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        questionId={question.id}
        topic={describeMirQuestion(question)}
        categories={MIR_REPORT_CATEGORIES}
      />
    </>
  );
}

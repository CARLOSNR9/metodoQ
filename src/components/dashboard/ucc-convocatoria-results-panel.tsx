"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { buildUccRadarFromSession } from "@/lib/diagnostic/ucc-exam-blueprint";
import { getUmngRepasoInsights } from "@/lib/diagnostic/exam-blueprint";
import { getConvocatoriaTrack, getConvocatoriaTrackLabel } from "@/lib/training/convocatorias";
import type { TrainingQuestion } from "@/lib/questions/types";

type UccConvocatoriaResultsPanelProps = {
  correctAnswers: number;
  totalQuestions: number;
  sessionQuestions: TrainingQuestion[];
  answersByQuestionId: Record<string, string>;
  /** Código de la edición (UCC-…, UMNG-…, UDEA-…) para rotular con la universidad correcta. */
  editionCode?: string | null;
};

export function UccConvocatoriaResultsPanel({
  correctAnswers,
  totalQuestions,
  sessionQuestions,
  answersByQuestionId,
  editionCode = null,
}: UccConvocatoriaResultsPanelProps) {
  const isUcc = getConvocatoriaTrack(editionCode) === "UCC";
  const trackLabel = getConvocatoriaTrackLabel(editionCode);
  const radarData = isUcc
    ? buildUccRadarFromSession(sessionQuestions, answersByQuestionId)
    : getUmngRepasoInsights(sessionQuestions, answersByQuestionId).axes
        .filter((axis) => axis.correct + axis.wrong > 0)
        .map((axis) => ({ subject: axis.label, A: axis.percentage, fullMark: 100 }));
  const hasRadarValues = radarData.some((point) => point.A > 0);

  return (
    <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div className="mb-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          {isUcc ? "Resultado tipo convocatoria UCC" : `Resultado del simulacro ${trackLabel}`}
        </p>
        <p className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
          {correctAnswers}
          <span className="text-2xl text-slate-500">/{totalQuestions}</span>
        </p>
        <p className="mt-2 text-sm text-slate-500">
          {isUcc
            ? "aciertos · calificación sugerida (UCC no publica escala oficial)"
            : "aciertos"}
        </p>
      </div>

      {hasRadarValues ? (
        <div className="mx-auto h-72 w-full max-w-md">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#cbd5e1" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 600 }}
              />
              <Radar
                dataKey="A"
                stroke="#00d1ff"
                fill="#00d1ff"
                fillOpacity={0.25}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      ) : null}
    </section>
  );
}

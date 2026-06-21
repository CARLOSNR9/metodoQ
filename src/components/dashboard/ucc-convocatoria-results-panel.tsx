"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { buildUccRadarFromSession } from "@/lib/diagnostic/ucc-exam-blueprint";
import type { TrainingQuestion } from "@/lib/questions/types";

type UccConvocatoriaResultsPanelProps = {
  correctAnswers: number;
  totalQuestions: number;
  sessionQuestions: TrainingQuestion[];
  answersByQuestionId: Record<string, string>;
};

export function UccConvocatoriaResultsPanel({
  correctAnswers,
  totalQuestions,
  sessionQuestions,
  answersByQuestionId,
}: UccConvocatoriaResultsPanelProps) {
  const radarData = buildUccRadarFromSession(sessionQuestions, answersByQuestionId);
  const hasRadarValues = radarData.some((point) => point.A > 0);

  return (
    <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <div className="mb-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-mq-muted">
          Resultado tipo convocatoria UCC
        </p>
        <p className="mt-3 text-4xl font-black text-white sm:text-5xl">
          {correctAnswers}
          <span className="text-2xl text-mq-muted">/{totalQuestions}</span>
        </p>
        <p className="mt-2 text-sm text-mq-muted">
          aciertos · calificación sugerida (UCC no publica escala oficial)
        </p>
      </div>

      {hasRadarValues ? (
        <div className="mx-auto h-72 w-full max-w-md">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.08)" />
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

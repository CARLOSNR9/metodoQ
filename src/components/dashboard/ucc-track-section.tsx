"use client";

import { Compass } from "lucide-react";
import { UccPercentileTrackerCard } from "./ucc-percentile-tracker-card";
import { UccWeeklySimulacroCard } from "./ucc-weekly-simulacro-card";
import { UccPhase2SimulatorCard } from "./ucc-phase2-simulator-card";
import { UccPastoInsightCard } from "./ucc-pasto-insight-card";

type UccTrackSectionProps = {
  userId: string;
  planStartedAt?: string | null;
  cumulativeScore: number;
  totalQuestions: number;
  totalCorrect: number;
  totalWrong: number;
  correctTopics: Record<string, number>;
  wrongTopics: Record<string, number>;
  uccPhase2Progress: Parameters<typeof UccPhase2SimulatorCard>[0]["uccPhase2Progress"];
};

/**
 * Las 4 tarjetas exclusivas de la ruta UCC (percentil, simulacro semanal,
 * simulador fase 2, insight Pasto) se mostraban intercaladas con el resto
 * del dashboard, sumando a la sensación de "demasiadas cosas". Aquí se
 * agrupan en un solo espacio con encabezado propio.
 */
export function UccTrackSection({
  userId,
  planStartedAt,
  cumulativeScore,
  totalQuestions,
  totalCorrect,
  totalWrong,
  correctTopics,
  wrongTopics,
  uccPhase2Progress,
}: UccTrackSectionProps) {
  return (
    <section className="space-y-5 rounded-[1.75rem] border border-mq-accent/20 bg-mq-accent/[0.03] p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-mq-accent/15 text-mq-accent">
          <Compass size={18} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">Tu ruta UCC</h2>
          <p className="text-xs text-slate-500">Percentil, simulacros y avance específico para la Cooperativa</p>
        </div>
      </div>

      <UccPercentileTrackerCard
        cumulativeScore={cumulativeScore}
        totalQuestions={totalQuestions}
        planStartedAt={planStartedAt}
        correctTopics={correctTopics}
        wrongTopics={wrongTopics}
      />
      <UccWeeklySimulacroCard userId={userId} planStartedAt={planStartedAt} />
      <UccPhase2SimulatorCard
        userId={userId}
        cumulativeScore={cumulativeScore}
        uccPhase2Progress={uccPhase2Progress}
      />
      <UccPastoInsightCard
        totalQuestions={totalQuestions}
        totalCorrect={totalCorrect}
        totalWrong={totalWrong}
        correctTopics={correctTopics}
        wrongTopics={wrongTopics}
      />
    </section>
  );
}

"use client";

import { useMemo } from "react";
import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { UltraResumenesView } from "@/components/ultra-resumenes/ultra-resumenes-view";
import { buildMirUltraSummary, type MirUltraSummary } from "@/lib/ultra-resumenes/mir";
import { ULTRA_LEVEL_LABELS } from "@/lib/ultra-resumenes/types";

const LEVEL_BARS = ["bg-lime-400", "bg-lime-200", "bg-sky-300", "bg-fuchsia-300", "bg-slate-400"];

function formatPercent(share: number): string {
  return `${(share * 100).toLocaleString("es", { maximumFractionDigits: 1, minimumFractionDigits: 1 })} %`;
}

function MirExamSplit({ summary }: { summary: MirUltraSummary }) {
  const convocatorias = summary.years.length;
  const level1 = summary.levels[0];
  const level1Specialties = summary.specialties.filter((s) => s.level === 1).length;
  const repeated = summary.specialties.reduce((sum, s) => sum + s.repeatedTopicCount, 0);

  return (
    <section className="space-y-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#5b1650] via-[#3b1150] to-[#0A1F44] p-6 text-white sm:p-8">
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">
        Reparto real del examen por niveles de rentabilidad
      </p>
      <div className="flex h-4 overflow-hidden rounded-sm">
        {summary.levels.map((level) =>
          level.share > 0 ? (
            <div
              key={level.level}
              className={LEVEL_BARS[level.level - 1]}
              style={{ width: `${level.share * 100}%` }}
              title={`Nivel ${level.level}: ${formatPercent(level.share)}`}
            />
          ) : null,
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4 sm:grid-cols-5">
        {summary.levels.map((level) => (
          <div key={level.level}>
            <p className="text-sm font-black">Nivel {level.level}</p>
            <p className="text-[11px] text-white/70">
              {ULTRA_LEVEL_LABELS[level.level]} · {level.specialtyCount} esp.
            </p>
            <p className="mt-1 text-lg font-black text-lime-300">{formatPercent(level.share)}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: summary.questionCount.toLocaleString("es"), label: `preguntas oficiales analizadas en ${convocatorias} convocatorias (${summary.years[0]}-${summary.years[convocatorias - 1]})` },
          { value: (summary.questionCount / Math.max(convocatorias, 1)).toLocaleString("es", { maximumFractionDigits: 0 }), label: "preguntas de media por convocatoria en nuestro banco" },
          { value: String(level1Specialties), label: `especialidades concentran el ${Math.round(level1.share * 100)} % del examen` },
          { value: repeated.toLocaleString("es"), label: "temas que ya han caído más de una vez" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white/10 p-4">
            <p className="text-3xl font-black text-lime-300">{stat.value}</p>
            <p className="mt-1 text-xs leading-snug text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MirUltraResumenesPage() {
  const summary = useMemo(() => buildMirUltraSummary(), []);

  return (
    <MirAccessGate>
      {(userId) => (
        <UltraResumenesView
          userId={userId}
          variant="mir"
          progressField="mirUltraResumenes"
          eyebrow="Ultra resúmenes MIR"
          title="Estudia primero lo que más cae en el MIR"
          description="Cada especialidad tiene su nivel de rentabilidad calculado con los exámenes oficiales, y dentro de ella los temas van de más a menos preguntados. Lee las fichas, márcalas como dominadas y repásalas en modo tarjetas."
          categories={summary.specialties}
          groupOrder={["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4", "Nivel 5"]}
          groupDescriptions={{
            "Nivel 1": `${ULTRA_LEVEL_LABELS[1]}: 12 o más preguntas por convocatoria.`,
            "Nivel 2": `${ULTRA_LEVEL_LABELS[2]}: de 8 a 12 preguntas por convocatoria.`,
            "Nivel 3": `${ULTRA_LEVEL_LABELS[3]}: de 5 a 8 preguntas por convocatoria.`,
            "Nivel 4": `${ULTRA_LEVEL_LABELS[4]}: de 3 a 5 preguntas por convocatoria.`,
            "Nivel 5": `${ULTRA_LEVEL_LABELS[5]}: menos de 3 preguntas por convocatoria.`,
          }}
          hero={<MirExamSplit summary={summary} />}
          footnote="Fuente: exámenes MIR oficiales del Ministerio de Sanidad incluidos en el banco de Método Q (sin preguntas anuladas). Puntos clave de redacción propia de Método Q."
        />
      )}
    </MirAccessGate>
  );
}

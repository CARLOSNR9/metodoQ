"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Lock,
  MessageSquare,
  Mic,
  Save,
  Unlock,
  Users,
} from "lucide-react";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserDemoResults } from "@/lib/results";
import {
  averageScores,
  scoreInterviewAnswer,
  scorePsychometricAnswer,
  UCC_INTERVIEW_SCENARIOS,
  UCC_PSYCHOMETRIC_ITEMS,
  UCC_PHASE2_COMPETENCY_LABELS,
  type UccPhase2Competency,
} from "@/data/ucc-phase2-scenarios";
import { isUccPhase2Unlocked } from "@/lib/training/ucc-weekly-simulacro";

type UccPhase2Progress = {
  interviewScores?: number[];
  psychometricScores?: number[];
  scenariosCompleted?: string[];
  lastInterviewScore?: number;
  lastPsychometricScore?: number;
};

type UccPhase2SimulatorCardProps = {
  userId: string;
  cumulativeScore: number;
  uccPhase2Progress?: UccPhase2Progress | null;
};

type TabId = "interview" | "psychometric";

export function UccPhase2SimulatorCard({
  userId,
  cumulativeScore,
  uccPhase2Progress,
}: UccPhase2SimulatorCardProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [checkingUnlock, setCheckingUnlock] = useState(true);
  const [tab, setTab] = useState<TabId>("interview");
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [psyIndex, setPsyIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState<UccPhase2Progress>(
    uccPhase2Progress ?? {},
  );
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function check() {
      setCheckingUnlock(true);
      try {
        const results = await getUserDemoResults(userId);
        if (!mounted) return;
        setUnlocked(isUccPhase2Unlocked({ cumulativeScore, results }));
      } finally {
        if (mounted) setCheckingUnlock(false);
      }
    }
    void check();
    return () => {
      mounted = false;
    };
  }, [userId, cumulativeScore]);

  useEffect(() => {
    setProgress(uccPhase2Progress ?? {});
  }, [uccPhase2Progress]);

  const scenario = UCC_INTERVIEW_SCENARIOS[scenarioIndex];
  const psyItem = UCC_PSYCHOMETRIC_ITEMS[psyIndex];

  const interviewAvg = useMemo(
    () => averageScores(progress.interviewScores ?? []),
    [progress.interviewScores],
  );
  const psychometricAvg = useMemo(
    () => averageScores(progress.psychometricScores ?? []),
    [progress.psychometricScores],
  );

  const saveProgress = useCallback(
    async (next: UccPhase2Progress) => {
      setIsSaving(true);
      try {
        await setDoc(
          doc(getFirebaseDb(), "users", userId),
          { uccPhase2Progress: next },
          { merge: true },
        );
        setProgress(next);
        setSaved(true);
      } catch (error) {
        console.error("No se pudo guardar progreso Fase II.", error);
      } finally {
        setIsSaving(false);
      }
    },
    [userId],
  );

  const handleInterviewSubmit = () => {
    if (!selectedOption || !scenario) return;
    const score = scoreInterviewAnswer(scenario, selectedOption);
    const next: UccPhase2Progress = {
      ...progress,
      interviewScores: [...(progress.interviewScores ?? []), score],
      scenariosCompleted: [...(progress.scenariosCompleted ?? []), scenario.id],
      lastInterviewScore: score,
    };
    setShowFeedback(true);
    void saveProgress(next);
  };

  const handlePsychometricSubmit = () => {
    if (!selectedOption || !psyItem) return;
    const score = scorePsychometricAnswer(psyItem, selectedOption);
    const next: UccPhase2Progress = {
      ...progress,
      psychometricScores: [...(progress.psychometricScores ?? []), score],
      lastPsychometricScore: score,
    };
    setShowFeedback(true);
    void saveProgress(next);
  };

  const nextScenario = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setScenarioIndex((i) => (i + 1) % UCC_INTERVIEW_SCENARIOS.length);
  };

  const nextPsychometric = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setPsyIndex((i) => (i + 1) % UCC_PSYCHOMETRIC_ITEMS.length);
  };

  if (checkingUnlock) {
    return (
      <div className="h-48 animate-pulse rounded-[2rem] border border-slate-200 bg-white/[0.03]" />
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.06] via-mq-surface to-transparent p-6 sm:p-8"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1">
            {unlocked ? (
              <Unlock size={14} className="text-indigo-300" />
            ) : (
              <Lock size={14} className="text-amber-400" />
            )}
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
              Fase II · Entrevista + psicotécnica
            </span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">Simulador de preselección</h2>
          <p className="mt-1 text-sm text-slate-500">
            20 pts de entrevista · diagnóstico psicotécnico obligatorio en UCC Pasto.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          <div className="rounded-xl border border-slate-200 bg-white/[0.04] px-3 py-2">
            <p className="text-slate-500">Entrevista</p>
            <p className="font-black text-slate-900">{interviewAvg || "—"}%</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white/[0.04] px-3 py-2">
            <p className="text-slate-500">Psicotécnica</p>
            <p className="font-black text-slate-900">{psychometricAvg || "—"}%</p>
          </div>
        </div>
      </div>

      {!unlocked ? (
        <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-5">
          <div className="flex items-start gap-3">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <div className="space-y-2">
              <p className="font-bold text-slate-900">Fase II bloqueada</p>
              <p className="text-sm text-amber-100">
                Se habilita cuando tu promedio acumulado o tus simulacros superen{" "}
                <span className="font-bold text-slate-900">50%</span>. Estás en{" "}
                <span className="font-bold text-slate-900">{Math.round(cumulativeScore)}%</span>.
                Sigue con la misión diaria y los simulacros semanales.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-5 flex gap-2">
            {(
              [
                { id: "interview" as const, label: "Entrevista conductual", icon: Mic },
                { id: "psychometric" as const, label: "Psicotécnica", icon: Brain },
              ] as const
            ).map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setTab(id);
                  setSelectedOption(null);
                  setShowFeedback(false);
                }}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-bold transition ${
                  tab === id
                    ? "border-indigo-400/40 bg-indigo-500/20 text-indigo-100"
                    : "border-slate-200 bg-white/[0.03] text-slate-500 hover:text-slate-900"
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {tab === "interview" && scenario ? (
              <motion.div
                key={`int-${scenario.id}`}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="space-y-4"
              >
                <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider">
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-indigo-200">
                    {UCC_PHASE2_COMPETENCY_LABELS[scenario.competency as UccPhase2Competency]}
                  </span>
                  <span className="text-slate-500">{scenario.setting}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-900">{scenario.prompt}</p>
                <ul className="space-y-2">
                  {scenario.options.map((opt) => (
                    <li key={opt.id}>
                      <button
                        type="button"
                        disabled={showFeedback}
                        onClick={() => setSelectedOption(opt.id)}
                        className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                          selectedOption === opt.id
                            ? "border-indigo-400/50 bg-indigo-500/15 text-white"
                            : "border-slate-200 bg-white/[0.03] text-slate-500 hover:border-slate-300 hover:text-slate-900"
                        } ${showFeedback && opt.id === scenario.bestOptionId ? "ring-1 ring-emerald-500/50" : ""}`}
                      >
                        <span className="font-bold text-indigo-300">{opt.id}.</span> {opt.text}
                      </button>
                    </li>
                  ))}
                </ul>
                {showFeedback && selectedOption && (
                  <div className="rounded-xl border border-slate-200 bg-white/[0.04] p-4 text-sm text-slate-500">
                    {
                      scenario.options.find((o) => o.id === selectedOption)?.feedback
                    }
                    <p className="mt-2 text-xs text-indigo-200">{scenario.debrief}</p>
                  </div>
                )}
                <div className="flex gap-3">
                  {!showFeedback ? (
                    <button
                      type="button"
                      disabled={!selectedOption}
                      onClick={handleInterviewSubmit}
                      className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-indigo-500/30 text-sm font-bold text-indigo-100 disabled:opacity-40"
                    >
                      Evaluar respuesta
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={nextScenario}
                      className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-900"
                    >
                      Siguiente escenario
                    </button>
                  )}
                </div>
              </motion.div>
            ) : psyItem ? (
              <motion.div
                key={`psy-${psyItem.id}`}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="space-y-4"
              >
                <p className="text-sm leading-relaxed text-slate-900">{psyItem.stem}</p>
                <ul className="space-y-2">
                  {psyItem.options.map((opt) => (
                    <li key={opt.id}>
                      <button
                        type="button"
                        disabled={showFeedback}
                        onClick={() => setSelectedOption(opt.id)}
                        className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                          selectedOption === opt.id
                            ? "border-indigo-400/50 bg-indigo-500/15 text-white"
                            : "border-slate-200 bg-white/[0.03] text-slate-500 hover:border-slate-300"
                        }`}
                      >
                        {opt.text}
                      </button>
                    </li>
                  ))}
                </ul>
                {showFeedback && (
                  <p className="rounded-xl border border-slate-200 bg-white/[0.04] p-4 text-sm text-slate-500">
                    {psyItem.explanation}
                  </p>
                )}
                <div className="flex gap-3">
                  {!showFeedback ? (
                    <button
                      type="button"
                      disabled={!selectedOption}
                      onClick={handlePsychometricSubmit}
                      className="inline-flex h-11 flex-1 items-center justify-center rounded-xl bg-indigo-500/30 text-sm font-bold text-indigo-100 disabled:opacity-40"
                    >
                      Registrar respuesta
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={nextPsychometric}
                      className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-900"
                    >
                      Siguiente ítem
                    </button>
                  )}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} />
              Panel: psicólogo + especialistas UCC
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageSquare size={14} />
              {saved ? "Progreso guardado" : isSaving ? "Guardando…" : ""}
              {!saved && !isSaving && (
                <button
                  type="button"
                  onClick={() => void saveProgress(progress)}
                  className="inline-flex items-center gap-1 text-indigo-300 hover:text-slate-900"
                >
                  <Save size={12} /> Guardar
                </button>
              )}
            </span>
          </div>
        </>
      )}
    </motion.section>
  );
}

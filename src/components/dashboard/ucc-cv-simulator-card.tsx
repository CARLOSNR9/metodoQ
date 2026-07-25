"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { AlertTriangle, Briefcase, CheckCircle2, GraduationCap, Save } from "lucide-react";
import { getFirebaseDb } from "@/lib/firebase";
import {
  EMPTY_UCC_CV_INPUT,
  parseUccCvFromProfile,
  scoreUccCv,
  type UccCvInput,
} from "@/lib/diagnostic/ucc-cv-scorer";

type UccCvSimulatorCardProps = {
  userId: string;
  uccCvProfile?: Partial<UccCvInput> | null;
};

function NumberField({
  label,
  hint,
  value,
  max,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  max?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-bold text-slate-900">{label}</span>
      {hint ? <span className="block text-[10px] text-slate-500">{hint}</span> : null}
      <input
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Math.max(0, parseInt(e.target.value, 10) || 0))}
        className="w-full rounded-xl border border-slate-200 bg-white/[0.04] px-3 py-2 text-sm text-slate-900 outline-none focus:border-mq-accent/40"
      />
    </label>
  );
}

function ToggleField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/[0.03] px-4 py-3">
      <span className="text-sm font-medium text-slate-900">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 accent-mq-accent"
      />
    </label>
  );
}

export function UccCvSimulatorCard({ userId, uccCvProfile }: UccCvSimulatorCardProps) {
  const [input, setInput] = useState<UccCvInput>(() =>
    parseUccCvFromProfile(uccCvProfile),
  );
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setInput(parseUccCvFromProfile(uccCvProfile));
  }, [uccCvProfile]);

  const assessment = useMemo(() => scoreUccCv(input), [input]);

  const update = useCallback(<K extends keyof UccCvInput>(key: K, value: UccCvInput[K]) => {
    setInput((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await setDoc(
        doc(getFirebaseDb(), "users", userId),
        { uccCvProfile: input },
        { merge: true },
      );
      setSaved(true);
    } catch (error) {
      console.error("No se pudo guardar la hoja de vida.", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.06] via-mq-surface to-transparent p-6 sm:p-8"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1">
            <Briefcase size={14} className="text-purple-300" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">
              Simulador HV · Fase I UCC
            </span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">Tu hoja de vida (baremo oficial)</h2>
          <p className="mt-1 max-w-xl text-sm text-slate-500">
            Máximo 20 pts. Solo se evalúa si superas P75 en la prueba escrita.
          </p>
        </div>
        <div
          className={`rounded-2xl border px-5 py-3 text-center ${
            assessment.isCompetitive
              ? "border-emerald-500/30 bg-emerald-500/10"
              : "border-amber-500/30 bg-amber-500/10"
          }`}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Proyección HV
          </p>
          <p className="text-3xl font-black text-slate-900">
            {assessment.total}/{assessment.maxTotal}
          </p>
          <p className="text-xs text-slate-500">puntos</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900">
            <GraduationCap size={16} className="text-purple-300" />
            Antecedentes académicos
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <NumberField
              label="Años experiencia MG"
              hint="1 pt/año · máx. 3"
              value={input.yearsExperience}
              max={10}
              onChange={(v) => update("yearsExperience", v)}
            />
            <NumberField
              label="Menciones internacionales"
              hint="3 pts c/u · máx. 3"
              value={input.internationalMentions}
              max={3}
              onChange={(v) => update("internationalMentions", v)}
            />
            <NumberField
              label="Publicaciones Publindex B/C"
              hint="3 pts c/u"
              value={input.publicationsBC}
              onChange={(v) => update("publicationsBC", v)}
            />
            <NumberField
              label="Publicaciones Publindex A1/A2"
              hint="5 pts c/u"
              value={input.publicationsA}
              onChange={(v) => update("publicationsA", v)}
            />
            <NumberField
              label="Ponencias ISSN"
              hint="3 pts c/u"
              value={input.oralPresentationsISSN}
              onChange={(v) => update("oralPresentationsISSN", v)}
            />
            <NumberField
              label="Ponencias Scopus"
              hint="5 pts c/u"
              value={input.oralPresentationsScopus}
              onChange={(v) => update("oralPresentationsScopus", v)}
            />
          </div>
          <div className="space-y-2">
            <ToggleField
              label="Especialización previa en salud (+1 pt)"
              checked={input.hasHealthSpecialization}
              onChange={(v) => update("hasHealthSpecialization", v)}
            />
            <ToggleField
              label="Maestría (+2 pts)"
              checked={input.hasMasters}
              onChange={(v) => update("hasMasters", v)}
            />
            <ToggleField
              label="Doctorado en ciencias de la salud (+20 pts)"
              checked={input.hasDoctorate}
              onChange={(v) => update("hasDoctorate", v)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
            Desglose de puntaje
          </h3>
          <dl className="space-y-2 text-sm">
            {[
              { label: "Experiencia laboral", value: assessment.experience, max: 3 },
              { label: "Menciones académicas", value: assessment.mentions, max: 3 },
              { label: "Publicaciones y ponencias", value: assessment.publications, max: 8 },
              { label: "Otros títulos", value: assessment.otherDegrees, max: 20 },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
              >
                <dt className="text-slate-500">{row.label}</dt>
                <dd className="font-black text-slate-900">
                  {row.value}/{row.max}
                </dd>
              </div>
            ))}
          </dl>

          {assessment.needsImprovement && (
            <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
              <p className="text-sm text-amber-100">
                Proyección &lt;10 pts. Fortalece investigación o ponencias antes de la
                convocatoria.
              </p>
            </div>
          )}

          <ul className="space-y-2">
            {assessment.recommendations.map((rec) => (
              <li
                key={rec}
                className="flex items-start gap-2 text-xs leading-relaxed text-slate-500"
              >
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-mq-accent" />
                {rec}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => void handleSave()}
            disabled={isSaving}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-purple-500/20 text-sm font-bold text-purple-100 transition hover:bg-purple-500/30 disabled:opacity-50"
          >
            <Save size={16} />
            {isSaving ? "Guardando…" : saved ? "Guardado ✓" : "Guardar mi HV"}
          </button>
        </div>
      </div>
    </motion.section>
  );
}

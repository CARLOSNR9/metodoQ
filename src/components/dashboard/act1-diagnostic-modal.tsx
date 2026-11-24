"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, ArrowRight, Zap, ChevronRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  resolveSpecialtyFromProfile,
  resolveUniversityFromProfile,
} from "@/lib/diagnostic/resolve-profile-target";
import {
  getEffectiveGoalSpecialty,
  hasCalibratedLearningTrack,
} from "@/lib/diagnostic/ucc-pasto-track";
import {
  getEffectiveGoalSpecialtyUMNG,
} from "@/lib/diagnostic/umng-track";
import {
  isUccPastoUniversity,
  isUdeaUniversity,
  isUnalUniversity,
  isUmngUniversity,
  isUnivalleUniversity,
} from "@/lib/diagnostic/university-match";

interface Act1DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

type Step = "config" | "intro";

const specialties = [
  { name: "Pediatría", regularSpots: 11, totalSpots: 12 },
  { name: "Medicina Interna", regularSpots: 8, totalSpots: 10 },
  { name: "Anestesiología y Reanimación", regularSpots: 6, totalSpots: 8 },
  { name: "Obstetricia y Ginecología", regularSpots: 6, totalSpots: 7 },
  { name: "Cirugía General", regularSpots: 5, totalSpots: 6 },
  { name: "Ortopedia y Traumatología", regularSpots: 5, totalSpots: 6 },
  { name: "Psiquiatría", regularSpots: 5, totalSpots: 6 },
  { name: "Radiología e Imágenes Diagnósticas", regularSpots: 5, totalSpots: 6 },
  { name: "Medicina del Deporte", regularSpots: 5, totalSpots: 6 },
  { name: "Neurología Clínica", regularSpots: 3, totalSpots: 4 },
  { name: "Otorrinolaringología", regularSpots: 3, totalSpots: 4 },
  { name: "Dermatología", regularSpots: 2, totalSpots: 3 },
  { name: "Urología", regularSpots: 2, totalSpots: 3 },
  { name: "Cirugía Plástica", regularSpots: 2, totalSpots: 2 },
  { name: "Oftalmología", regularSpots: 1, totalSpots: 2 },
  { name: "Neurocirugía", regularSpots: 1, totalSpots: 2 },
];

const universities = [
  "Universidad Nacional de Colombia (UNAL)",
  "Universidad de Antioquia (UdeA)",
  "Universidad Cooperativa (Pasto)",
  "Universidad Militar Nueva Granada (UMNG)",
  "Universidad del Valle (Univalle)",
  "Pontificia Universidad Javeriana",
  "Universidad del Rosario",
  "Universidad de los Andes",
  "Otra",
];

function findSpecialtyByName(name: string) {
  return specialties.find((s) => s.name === name) ?? specialties[1];
}

export function Act1DiagnosticModal({ isOpen, onClose, user }: Act1DiagnosticModalProps) {
  const router = useRouter();
  const profileUniversity = user?.goalUniversity as string | undefined;
  const profileSpecialty = user?.goalSpecialty as string | undefined;
  
  // Resolvemos especialidad efectiva dependiendo de si es UMNG o UCC
  const effectiveSpecialty = isUmngUniversity(resolveUniversityFromProfile(profileUniversity))
    ? getEffectiveGoalSpecialtyUMNG(profileUniversity, profileSpecialty)
    : getEffectiveGoalSpecialty(profileUniversity, profileSpecialty);
    
  const skipConfigStep = hasCalibratedLearningTrack(profileUniversity, profileSpecialty);

  const [step, setStep] = useState<Step>(skipConfigStep ? "intro" : "config");
  const [selectedUniversity, setSelectedUniversity] = useState(() =>
    resolveUniversityFromProfile(profileUniversity),
  );
  const [selectedSpecialty, setSelectedSpecialty] = useState(() =>
    findSpecialtyByName(effectiveSpecialty),
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsTransitioning(false);
      return;
    }

    const university = resolveUniversityFromProfile(profileUniversity);
    const specialtyName = isUmngUniversity(university)
      ? getEffectiveGoalSpecialtyUMNG(profileUniversity, profileSpecialty)
      : getEffectiveGoalSpecialty(profileUniversity, profileSpecialty);
      
    setSelectedUniversity(university);
    setSelectedSpecialty(findSpecialtyByName(specialtyName));
    setStep(hasCalibratedLearningTrack(profileUniversity, profileSpecialty) ? "intro" : "config");
  }, [isOpen, profileUniversity, profileSpecialty]);


  const readyQuote = isUdeaUniversity(selectedUniversity)
    ? "Doc, en la UdeA todas las especialidades clínicas presentan el mismo examen de medicina general: casos clínicos largos y normas del Ministerio de Salud. Estas 10 preguntas miden tu punto de partida."
    : isUnalUniversity(selectedUniversity)
      ? "Doc, en la UNAL no gana quien más sabe, sino quien mejor aplica bajo presión. Este diagnóstico de 10 preguntas definirá tu hoja de ruta."
      : isUccPastoUniversity(selectedUniversity)
        ? "Doc, en la UCC Pasto el 30% del examen es epidemiología y otro 10% es Res. 3280. Estas 10 preguntas calibran exactamente esa estructura — estilo MIR, saber y descartar."
        : isUnivalleUniversity(selectedUniversity)
          ? "Doc, en Univalle todos los aspirantes presentan el mismo examen de medicina general, sin importar la especialidad. Estas 10 preguntas miden tu punto de partida en todas las áreas."
        : isUmngUniversity(selectedUniversity)
          ? "Doc, en el HMC y la UMNG, el examen es de resistencia. La excelencia clínica debe ir de la mano con la resiliencia psicológica. Prepárate para el rigor."
          : "Doc, este diagnóstico de 10 preguntas calibrará tu preparación para la especialidad elegida.";

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === "config") setStep("intro");
  };

  const handleStart = () => {
    setIsTransitioning(true);
    // Redirigir al diagnóstico real con parámetros
    setTimeout(() => {
      router.push(`/dashboard/diagnostico?source=act1&university=${encodeURIComponent(selectedUniversity)}&specialty=${encodeURIComponent(selectedSpecialty.name)}`);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-xl overflow-hidden bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.9)]"
      >
        {/* Glow Decorativo */}
        <div className="absolute top-0 w-full h-40 opacity-30 -z-10 bg-gradient-to-b from-mq-accent/40 to-transparent" />
        
        <div className="p-8 sm:p-12">
          <AnimatePresence mode="wait">
            {step === "config" && (
              <motion.div
                key="config"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1">
                    <Zap size={14} className="text-mq-accent animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
                      Tu meta
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 leading-tight">
                    ¿A qué universidad y especialidad <span className="text-mq-accent">te presentas</span>?
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {skipConfigStep
                      ? "Usaremos la universidad y especialidad de tu registro. Revisa que sean correctas antes de continuar."
                      : "Así adaptamos las preguntas y tu ruta de estudio al examen al que te presentas."}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500/60 px-2">Institución Objetivo</label>
                    <div className="grid grid-cols-1 gap-2">
                      {(universities.includes(selectedUniversity as (typeof universities)[number])
                        ? universities
                        : [selectedUniversity, ...universities]
                      )
                        .slice(0, 4)
                        .map((uni) => (
                        <button
                          key={uni}
                          onClick={() => setSelectedUniversity(uni)}
                          className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                            selectedUniversity === uni 
                              ? "bg-mq-accent/10 border-mq-accent text-white" 
                              : "bg-white/[0.03] border-white/5 text-slate-500 hover:bg-slate-100"
                          }`}
                        >
                          <span className="font-bold text-sm">{uni}</span>
                          {selectedUniversity === uni && <ChevronRight size={16} className="text-mq-accent" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500/60 px-2">Especialidad a la que aspiras</label>
                    <div className="max-h-[200px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 space-y-2">
                      {specialties.map((spec) => (
                        <button
                          key={spec.name}
                          onClick={() => setSelectedSpecialty(spec)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                            selectedSpecialty.name === spec.name 
                              ? "bg-mq-accent/10 border-mq-accent text-white" 
                              : "bg-white/[0.03] border-white/5 text-slate-500 hover:bg-slate-100"
                          }`}
                        >
                          <span className="font-bold text-sm text-left">{spec.name}</span>
                          {selectedSpecialty.name === spec.name && <ChevronRight size={16} className="text-mq-accent" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full h-16 flex items-center justify-center gap-3 rounded-2xl bg-mq-accent font-black text-mq-accent-foreground transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(0,209,255,0.5)]"
                >
                  Continuar <ArrowRight size={20} />
                </button>
              </motion.div>
            )}

            {step === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-4 py-1">
                    <Target size={14} className="text-mq-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
                      Diagnóstico inicial
                    </span>
                  </div>
                  <h2 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                    10 preguntas para conocer tu punto de partida
                  </h2>
                  <p className="text-sm text-slate-500">
                    <span className="font-bold text-slate-900">{selectedUniversity}</span>
                    {" · "}
                    <span className="font-bold text-mq-accent">{selectedSpecialty.name}</span>
                  </p>
                  {skipConfigStep ? (
                    <p className="text-[11px] text-slate-500/80">
                      Tomado de tu perfil. Si no es correcto, avísale a tu asesor de Método Q.
                    </p>
                  ) : null}
                </div>

                {isUnivalleUniversity(selectedUniversity) ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1 rounded-[2rem] border border-slate-100 bg-slate-50 p-5 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Examen</p>
                      <p className="text-2xl font-black text-mq-accent">Único</p>
                      <p className="text-[10px] text-slate-500">Medicina general, igual para todas las especialidades</p>
                    </div>
                    <div className="space-y-1 rounded-[2rem] border border-slate-100 bg-slate-50 p-5 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Peso del examen</p>
                      <p className="text-2xl font-black text-mq-accent">≈95%</p>
                      <p className="text-[10px] text-slate-500">Más inglés (≈5%). Cupos: según la convocatoria oficial</p>
                    </div>
                  </div>
                ) : null}

                <ul className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mq-accent" />
                    {isUnivalleUniversity(selectedUniversity)
                      ? "10 preguntas de medicina general, sin límite de tiempo."
                      : "10 preguntas tipo examen, sin límite de tiempo."}
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mq-accent" />
                    Después de cada respuesta verás la explicación y la trampa del examen.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mq-accent" />
                    El resultado orienta tu plan de estudio; no predice tu admisión.
                  </li>
                </ul>

                <div className="space-y-2 rounded-3xl border border-mq-accent/20 bg-mq-accent/10 p-6 text-center">
                  <p className="text-sm font-medium leading-relaxed text-slate-900">{`"${readyQuote}"`}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-mq-accent">— Dr. Q</p>
                </div>

                <button
                  onClick={handleStart}
                  disabled={isTransitioning}
                  className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-mq-accent font-black text-mq-accent-foreground shadow-[0_20px_40px_-10px_rgba(0,209,255,0.4)] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  Empezar diagnóstico <ArrowRight size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Botón de cerrar discreto */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ChevronRight className="rotate-90" />
        </button>
      </motion.div>

      {/* Efecto de transición a pantalla completa */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[200] bg-mq-background flex flex-col items-center justify-center space-y-4"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-20 w-20 border-4 border-t-mq-accent border-r-mq-accent/30 border-b-mq-accent/10 border-l-mq-accent/5 rounded-full" 
            />
            <p className="text-mq-accent font-black tracking-[0.2em] animate-pulse">Preparando tus preguntas…</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

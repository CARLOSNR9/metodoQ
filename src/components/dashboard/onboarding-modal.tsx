"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOnboarding, OnboardingData } from "@/hooks/use-onboarding";
import { isUccPastoUniversity } from "@/lib/diagnostic/university-match";
import Image from "next/image";
import { universitySpecialties, defaultSpecialties } from "@/data/university-specialties";
import { Loader2, Target } from "lucide-react";

interface OnboardingModalProps {
  userId: string | undefined;
}

type Step = "welcome" | "university" | "specialty" | "experience" | "courses" | "transition";

const universities = [
  "Universidad de Antioquia (UdeA)",
  "Universidad de Caldas",
  "Universidad del Valle (Univalle)",
  "Universidad Nacional de Colombia",
  "MIR (España)",
  "Residencia Perú",
  "ENARM (México)",
  "Pontificia Universidad Javeriana",
  "Universidad El Bosque",
  "Fundación Universitaria Sanitas",
  "Universidad del Rosario",
  "Universidad Militar Nueva Granada",
  "FUCS",
  "Universidad Pontificia Bolivariana (UPB)",
  "Universidad CES",
  "Universidad Icesi",
  "Universidad Industrial de Santander (UIS)",
  "Universidad de Cartagena",
  "Universidad del Sinú (Unisinu)",
  "Universidad del Norte (Uninorte)",
  "Universidad Cooperativa (Pasto)",
  "Otra",
];



export function OnboardingModal({ userId }: OnboardingModalProps) {
  const { needsOnboarding, loading, completeOnboarding } = useOnboarding(userId);
  const [step, setStep] = useState<Step>("welcome");
  const [data, setData] = useState<OnboardingData>({});
  const [isSaving, setIsSaving] = useState(false);
  const [selectionFeedback, setSelectionFeedback] = useState<string | null>(null);

  if (loading || !needsOnboarding) return null;

  const currentSpecialties = data.goalUniversity 
    ? (universitySpecialties[data.goalUniversity] || defaultSpecialties) 
    : defaultSpecialties;

  const handleNext = (nextStep: Step, newData?: Partial<OnboardingData>) => {
    if (newData) {
      setData((prev) => ({ ...prev, ...newData }));
      
      // Si seleccionó universidad, mostrar feedback antes de pasar al siguiente
      if (newData.goalUniversity) {
        setSelectionFeedback(`Perfecto. Entrenarás con formato tipo ${newData.goalUniversity}`);
        setTimeout(() => {
          setSelectionFeedback(null);
          setStep(nextStep);
        }, 1500);
        return;
      }
    }
    setStep(nextStep);
  };

  const handleComplete = async () => {
    setIsSaving(true);
    try {
      await completeOnboarding(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md overflow-hidden bg-white border border-slate-200 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)]"
      >
        {/* Glow effect */}
        <div className="absolute top-0 w-full h-32 opacity-20 -z-10 bg-gradient-to-b from-mq-accent to-transparent" />

        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === "welcome" && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-40 h-40 mb-6 group">
                  {/* Efecto de aura/brillo detrás del personaje */}
                  <div className="absolute inset-0 bg-mq-accent/20 rounded-full blur-3xl animate-pulse group-hover:bg-mq-accent/30 transition-colors duration-500" />
                  
                  <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/drq.png"
                      alt="Dr. Q Asistente Inteligente"
                      fill
                      priority
                      className="object-contain drop-shadow-[0_10px_30px_rgba(0,209,255,0.4)]"
                    />
                  </div>
                </div>
                
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">
                  Bienvenido a Método Q 👋
                </h2>
                <p className="mb-10 text-base leading-relaxed text-slate-500">
                  Vamos a personalizar tu entrenamiento en menos de 30 segundos.
                </p>
                
                <button
                  onClick={() => handleNext("university")}
                  className="w-full py-4 text-base font-bold transition-all duration-200 rounded-2xl bg-mq-accent text-mq-accent-foreground hover:brightness-110 active:scale-95 shadow-[0_0_40px_-10px_rgb(0_209_255/0.5)]"
                >
                  Comenzar entrenamiento
                </button>
              </motion.div>
            )}

            {step === "university" && (
              <motion.div
                key="university"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  ¿A qué universidad quieres aplicar?
                </h3>
                <p className="mb-6 text-sm text-slate-500">
                  Selecciona tu objetivo. Adaptamos el entrenamiento a ese examen.
                </p>

                <div className="relative">
                  <AnimatePresence>
                    {selectionFeedback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm border border-mq-accent/30"
                      >
                        <p className="px-6 text-center text-sm font-bold text-mq-accent">
                          {selectionFeedback}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid max-h-[340px] grid-cols-2 gap-3 pr-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10">
                    {universities.map((uni) => (
                      <button
                        key={uni}
                        disabled={!!selectionFeedback}
                        onClick={() => {
                          const patch: Partial<OnboardingData> = { goalUniversity: uni };
                          if (isUccPastoUniversity(uni)) {
                            patch.goalSpecialty = "Medicina Interna";
                            handleNext("experience", patch);
                          } else {
                            handleNext("specialty", patch);
                          }
                        }}
                        className="p-4 text-sm font-semibold transition-all border text-left text-slate-900 rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95 disabled:opacity-50"
                      >
                        {uni}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === "specialty" && (
              <motion.div
                key="specialty"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  ¿Qué especialidad buscas?
                </h3>
                <p className="mb-6 text-sm text-slate-500">
                  Selecciona la especialidad para personalizar tu experiencia.
                </p>

                <div className="grid max-h-[340px] grid-cols-1 gap-3 pr-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10">
                  {currentSpecialties.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => handleNext("experience", { goalSpecialty: spec })}
                      className="p-4 text-sm font-semibold transition-all border text-left text-slate-900 rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  ¿Has presentado el examen antes?
                </h3>
                <p className="mb-6 text-sm text-slate-500">
                  Para ajustar el nivel de dificultad inicial.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleNext("courses", { attemptedExam: true })}
                    className="p-5 text-base font-semibold transition-all border text-left text-slate-900 rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
                  >
                    Sí, ya lo he presentado
                  </button>
                  <button
                    onClick={() => handleNext("courses", { attemptedExam: false })}
                    className="p-5 text-base font-semibold transition-all border text-left text-slate-900 rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
                  >
                    No, es mi primera vez
                  </button>
                </div>
              </motion.div>
            )}

            {step === "courses" && (
              <motion.div
                key="courses"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  ¿Has usado cursos antes?
                </h3>
                <p className="mb-6 text-sm text-slate-500">
                  Nos ayuda a entender tu base teórica.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleNext("transition", { usedCourses: true })}
                    className="p-5 text-base font-semibold transition-all border text-left text-slate-900 rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
                  >
                    Sí, he tomado cursos
                  </button>
                  <button
                    onClick={() => handleNext("transition", { usedCourses: false })}
                    className="p-5 text-base font-semibold transition-all border text-left text-slate-900 rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
                  >
                    No, estudio por mi cuenta
                  </button>
                </div>
              </motion.div>
            )}

            {step === "transition" && (
              <motion.div
                key="transition"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="relative mb-8">
                  <Loader2 size={80} className="text-mq-accent animate-spin opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target size={40} className="text-mq-accent animate-pulse" />
                  </div>
                </div>
                
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  Calibrando motor...
                </h3>
                <p className="mb-10 text-sm text-slate-500 max-w-[280px]">
                  Adaptando las preguntas para <span className="font-bold text-slate-900">{data.goalUniversity || "tu universidad"}</span> en la especialidad de <span className="font-bold text-slate-900">{data.goalSpecialty || "tu elección"}</span>.
                </p>

                <div className="w-full flex items-center gap-3 px-2 mb-8">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="h-full bg-mq-accent" 
                    />
                  </div>
                </div>

                <button
                  onClick={handleComplete}
                  disabled={isSaving}
                  className="w-full py-4 flex items-center justify-center gap-3 text-base font-bold transition-all duration-200 rounded-2xl bg-mq-accent text-mq-accent-foreground hover:brightness-110 active:scale-95 shadow-[0_0_40px_-10px_rgb(0_209_255/0.5)] disabled:opacity-70 disabled:cursor-wait"
                >
                  {isSaving ? "Iniciando..." : "Ir a las 10 preguntas"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

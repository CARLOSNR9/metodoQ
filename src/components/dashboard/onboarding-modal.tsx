"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOnboarding, OnboardingData } from "@/hooks/use-onboarding";
import Image from "next/image";

interface OnboardingModalProps {
  userId: string | undefined;
}

type Step = "welcome" | "university" | "experience" | "courses" | "transition";

const universities = [
  "UNAM",
  "IPN",
  "UAM",
  "UANL",
  "UdeG",
  "BUAP",
  "Otra",
];

export function OnboardingModal({ userId }: OnboardingModalProps) {
  const { needsOnboarding, loading, completeOnboarding } = useOnboarding(userId);
  const [step, setStep] = useState<Step>("welcome");
  const [data, setData] = useState<OnboardingData>({});
  const [isSaving, setIsSaving] = useState(false);

  if (loading || !needsOnboarding) return null;

  const handleNext = (nextStep: Step, newData?: Partial<OnboardingData>) => {
    if (newData) {
      setData((prev) => ({ ...prev, ...newData }));
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
        className="relative w-full max-w-md overflow-hidden bg-mq-surface border border-mq-border-strong rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)]"
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
                <div className="relative flex items-center justify-center w-24 h-24 mb-8 border border-white/10 rounded-full shadow-lg bg-white/5 backdrop-blur-sm shadow-cyan-500/20">
                  {/* Q Assistant Icon Concept */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse" />
                  <span className="text-4xl font-black tracking-tighter text-transparent bg-gradient-to-br from-white to-white/60 bg-clip-text">
                    Q.
                  </span>
                  <div className="absolute w-3 h-3 rounded-full bottom-2 right-4 shadow-[0_0_12px_rgba(250,204,21,0.8)] bg-[var(--mq-yellow)]" />
                </div>
                
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-white">
                  Bienvenido a Método Q 👋
                </h2>
                <p className="mb-10 text-base leading-relaxed text-mq-muted">
                  Vamos a personalizar tu entrenamiento en menos de 30 segundos.
                </p>
                
                <button
                  onClick={() => handleNext("university")}
                  className="w-full py-4 text-base font-bold transition-all duration-200 rounded-2xl bg-mq-accent text-mq-accent-foreground hover:brightness-110 active:scale-95 shadow-[0_0_40px_-10px_rgb(0_209_255/0.5)]"
                >
                  Comenzar
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
                <h3 className="mb-2 text-xl font-bold text-white">
                  ¿A qué universidad quieres aplicar?
                </h3>
                <p className="mb-6 text-sm text-mq-muted">
                  Adaptaremos las simulaciones a su formato.
                </p>

                <div className="grid max-h-[300px] grid-cols-2 gap-3 pr-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10">
                  {universities.map((uni) => (
                    <button
                      key={uni}
                      onClick={() => handleNext("experience", { goalUniversity: uni })}
                      className="p-4 text-sm font-semibold transition-all border text-left text-white rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
                    >
                      {uni}
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
                <h3 className="mb-2 text-xl font-bold text-white">
                  ¿Has presentado el examen antes?
                </h3>
                <p className="mb-6 text-sm text-mq-muted">
                  Para ajustar el nivel de dificultad inicial.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleNext("courses", { attemptedExam: true })}
                    className="p-5 text-base font-semibold transition-all border text-left text-white rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
                  >
                    Sí, ya lo he presentado
                  </button>
                  <button
                    onClick={() => handleNext("courses", { attemptedExam: false })}
                    className="p-5 text-base font-semibold transition-all border text-left text-white rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
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
                <h3 className="mb-2 text-xl font-bold text-white">
                  ¿Has usado cursos antes?
                </h3>
                <p className="mb-6 text-sm text-mq-muted">
                  Nos ayuda a entender tu base teórica.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleNext("transition", { usedCourses: true })}
                    className="p-5 text-base font-semibold transition-all border text-left text-white rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
                  >
                    Sí, he tomado cursos
                  </button>
                  <button
                    onClick={() => handleNext("transition", { usedCourses: false })}
                    className="p-5 text-base font-semibold transition-all border text-left text-white rounded-xl bg-white/[0.03] border-white/5 hover:border-mq-accent/50 hover:bg-mq-accent/10 active:scale-95"
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
                className="flex flex-col items-center text-center py-6"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Perfecto.
                </h3>
                <p className="mb-10 text-base text-mq-muted">
                  Ya sabemos cómo ayudarte.
                </p>

                <button
                  onClick={handleComplete}
                  disabled={isSaving}
                  className="w-full py-4 text-base font-bold transition-all duration-200 rounded-2xl bg-mq-accent text-mq-accent-foreground hover:brightness-110 active:scale-95 shadow-[0_0_40px_-10px_rgb(0_209_255/0.5)] disabled:opacity-70 disabled:cursor-wait"
                >
                  {isSaving ? "Guardando..." : "Comenzar entrenamiento"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

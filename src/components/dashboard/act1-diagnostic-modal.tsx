"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, 
  ArrowRight, 
  ShieldAlert, 
  Zap, 
  ChevronRight, 
  AlertCircle,
  Users,
  Trophy,
  Loader2
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Act1DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

type Step = "config" | "anxiety" | "loading" | "ready";

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
  { name: "Cirugía Plástica", regularSpots: 3, totalSpots: 4 },
  { name: "Otorrinolaringología", regularSpots: 3, totalSpots: 4 },
  { name: "Dermatología", regularSpots: 2, totalSpots: 3 },
  { name: "Urología", regularSpots: 2, totalSpots: 3 },
  { name: "Oftalmología", regularSpots: 1, totalSpots: 2 },
  { name: "Neurocirugía", regularSpots: 1, totalSpots: 2 },
];

const universities = [
  "Universidad Nacional de Colombia (UNAL)",
  "Universidad de Antioquia (UdeA)",
  "Pontificia Universidad Javeriana",
  "Universidad del Rosario",
  "Universidad de los Andes",
  "Otra",
];

export function Act1DiagnosticModal({ isOpen, onClose, user }: Act1DiagnosticModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("config");
  const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[1]); // Medicina Interna default
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === "config") {
      setStep("anxiety");
    } else if (step === "anxiety") {
      setStep("loading");
      setTimeout(() => setStep("ready"), 3000);
    }
  };

  const handleStart = () => {
    setIsTransitioning(true);
    // Redirigir al diagnóstico real con parámetros
    setTimeout(() => {
      router.push(`/demo?source=act1&university=${encodeURIComponent(selectedUniversity)}&specialty=${encodeURIComponent(selectedSpecialty.name)}`);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-xl overflow-hidden bg-mq-surface border border-mq-border-strong rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.9)]"
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
                      Configuración del Motor Predictivo
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-white leading-tight">
                    Calibra tu <span className="text-mq-accent italic">Escenario de Realidad</span>
                  </h2>
                  <p className="text-mq-muted text-sm leading-relaxed">
                    Para calcular tus probabilidades reales de ingreso, necesitamos saber contra qué estándar vas a competir.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-mq-muted/60 px-2">Institución Objetivo</label>
                    <div className="grid grid-cols-1 gap-2">
                      {universities.slice(0, 3).map((uni) => (
                        <button
                          key={uni}
                          onClick={() => setSelectedUniversity(uni)}
                          className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                            selectedUniversity === uni 
                              ? "bg-mq-accent/10 border-mq-accent text-white" 
                              : "bg-white/[0.03] border-white/5 text-mq-muted hover:bg-white/[0.05]"
                          }`}
                        >
                          <span className="font-bold text-sm">{uni}</span>
                          {selectedUniversity === uni && <ChevronRight size={16} className="text-mq-accent" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-mq-muted/60 px-2">Especialidad a la que aspiras</label>
                    <div className="max-h-[200px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 space-y-2">
                      {specialties.map((spec) => (
                        <button
                          key={spec.name}
                          onClick={() => setSelectedSpecialty(spec)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                            selectedSpecialty.name === spec.name 
                              ? "bg-mq-accent/10 border-mq-accent text-white" 
                              : "bg-white/[0.03] border-white/5 text-mq-muted hover:bg-white/[0.05]"
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
                  Continuar a Calibración <ArrowRight size={20} />
                </button>
              </motion.div>
            )}

            {step === "anxiety" && (
              <motion.div
                key="anxiety"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="space-y-8"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <ShieldAlert size={32} className="text-red-500 animate-pulse" />
                  </div>
                  <h2 className="text-2xl font-black text-white">Choque de Realidad Estandarizado</h2>
                  <p className="text-mq-muted text-sm">Escenario proyectado para 2025 en la <span className="text-white font-bold">{selectedUniversity}</span></p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.03] border border-white/5 p-6 rounded-[2rem] text-center space-y-1">
                    <p className="text-[10px] font-bold text-mq-muted uppercase tracking-widest">Cupos Regulares</p>
                    <p className="text-4xl font-black text-mq-accent">{selectedSpecialty.regularSpots}</p>
                    <p className="text-[10px] text-mq-muted">Para todo el país</p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 p-6 rounded-[2rem] text-center space-y-1">
                    <p className="text-[10px] font-bold text-mq-muted uppercase tracking-widest">Dificultad Est.</p>
                    <p className="text-4xl font-black text-red-500">9.8/10</p>
                    <p className="text-[10px] text-mq-muted">Nivel de Exclusión</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6 space-y-4">
                  <div className="flex gap-4 items-start">
                    <AlertCircle className="text-red-400 shrink-0 mt-1" size={20} />
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-red-100">Dato Crítico:</p>
                      <p className="text-sm text-red-100/70 leading-relaxed italic">
                        "En {selectedSpecialty.name}, la brecha entre el admitido y el rechazado es de apenas <span className="text-red-400 font-bold">1.2 puntos estandarizados</span>. El 40% del examen será específico de tu área y el Listening de Inglés tiene límite de 2 reproducciones."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                   <div className="flex items-center gap-3 px-2">
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2 }}
                          className="h-full bg-mq-accent" 
                        />
                      </div>
                      <span className="text-[10px] font-black text-mq-accent uppercase whitespace-nowrap">Calibrando Motor...</span>
                   </div>
                   
                   <button
                    onClick={handleNext}
                    className="w-full h-16 flex items-center justify-center gap-3 rounded-2xl bg-red-500 font-black text-white transition-all hover:bg-red-600 active:scale-95 shadow-[0_0_40px_-10px_rgba(239,68,68,0.5)]"
                  >
                    Aceptar el Reto e Iniciar <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 flex flex-col items-center justify-center space-y-8"
              >
                <div className="relative">
                  <Loader2 size={80} className="text-mq-accent animate-spin opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target size={40} className="text-mq-accent animate-pulse" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-white">Inyectando Variables...</h3>
                  <p className="text-mq-muted text-sm max-w-[280px] mx-auto">
                    Cargando banco de preguntas específico para <span className="text-white font-bold">{selectedSpecialty.name}</span>.
                  </p>
                </div>
                <div className="grid grid-cols-1 w-full gap-2">
                  {[
                    "Cargando Casos Clínicos UNAL",
                    "Sincronizando Módulo de Listening",
                    "Ajustando Curva de Estandarización",
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.5 }}
                      className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-mq-accent animate-ping" />
                      <span className="text-[10px] font-bold text-mq-muted uppercase tracking-widest">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "ready" && (
              <motion.div
                key="ready"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8 py-4"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-24 h-24 rounded-full bg-mq-accent/20 border-2 border-mq-accent flex items-center justify-center shadow-[0_0_50px_-10px_rgba(0,209,255,0.6)]">
                    <Trophy size={48} className="text-mq-accent" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-black text-white italic">¡ESTÁS LISTO!</h2>
                    <p className="text-mq-muted">El motor ha sido calibrado con éxito.</p>
                  </div>
                </div>

                <div className="bg-mq-accent/10 border border-mq-accent/20 rounded-3xl p-8 text-center space-y-4">
                  <p className="text-sm leading-relaxed text-white font-medium">
                    "Doc, recuerda: En la UNAL no gana quien más sabe, sino quien mejor aplica bajo presión. Este diagnóstico de 15 minutos definirá tu hoja de ruta."
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-mq-accent font-black">- DR. Q</p>
                </div>

                <button
                  onClick={handleStart}
                  disabled={isTransitioning}
                  className="w-full h-20 flex flex-col items-center justify-center rounded-[2rem] bg-mq-accent font-black text-mq-accent-foreground transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,209,255,0.4)] disabled:opacity-50"
                >
                  <span className="text-xl">INICIAR DIAGNÓSTICO</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Modo de Alta Presión Activado</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Botón de cerrar discreto */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-mq-muted hover:text-white transition-colors"
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
            <p className="text-mq-accent font-black tracking-[0.5em] animate-pulse">MODO KIOSKO ACTIVADO</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

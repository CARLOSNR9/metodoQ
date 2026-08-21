"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight, Stethoscope, Lightbulb, AlertTriangle, Crown, Sparkles, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import type { TrainingQuestion } from "@/lib/questions/types";

interface QuizDrQProps {
  questions: TrainingQuestion[];
}

export function QuizDrQ({ questions }: QuizDrQProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentIndex];

  const handleSelect = (id: string) => {
    if (showExplanation) return;
    setSelectedOptionId(id);
    const isCorrect = id === question.correctOptionId;
    if (isCorrect) setScore((prev) => prev + 1);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const parseTheoryContent = (text: string) => {
    return text.replace("EXPLICACIÓN DEL PROFE BY DR Q", "").trim();
  };

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-2xl rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center shadow-2xl"
      >
        <Crown className="mx-auto mb-6 h-20 w-20 text-yellow-400" />
        <h2 className="mb-4 text-4xl font-black text-white">¡Reto Completado!</h2>
        <p className="mb-8 text-xl text-slate-300">
          Has completado la Primera Evaluación del Dr. Q.
        </p>
        <div className="mb-10 inline-block rounded-3xl bg-white/10 px-8 py-6 backdrop-blur-md">
          <p className="text-6xl font-black text-yellow-400">
            {Math.round((score / questions.length) * 100)}%
          </p>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-slate-400">
            {score} de {questions.length} correctas
          </p>
        </div>
        <div>
          <button
            onClick={() => router.push("/dashboard")}
            className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-yellow-300 active:scale-95"
          >
            Volver al Panel
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-yellow-400 shadow-lg">
            <Stethoscope size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              El Reto del Dr. Q
            </h1>
            <p className="text-sm font-medium text-slate-500">
              Primera Evaluación • {question.examArea}
            </p>
          </div>
        </div>
        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
          Pregunta {currentIndex + 1} de {questions.length}
        </div>
      </div>

      {/* QUESTION CARD */}
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10"
      >
        <div className="prose prose-slate max-w-none mb-10">
          <p className="text-xl font-semibold leading-relaxed text-slate-800 whitespace-pre-wrap">
            {question.statement}
          </p>
        </div>

        <div className="space-y-4">
          {question.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const isCorrect = opt.id === question.correctOptionId;
            
            let statusClass = "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700";
            let Icon = null;
            
            if (showExplanation) {
              if (isCorrect) {
                statusClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
                Icon = CheckCircle2;
              } else if (isSelected && !isCorrect) {
                statusClass = "border-red-500 bg-red-50 text-red-900";
                Icon = XCircle;
              } else {
                statusClass = "border-slate-100 bg-slate-50 text-slate-400 opacity-50";
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={showExplanation}
                className={`flex w-full items-start gap-4 rounded-2xl border-2 p-5 text-left transition-all ${statusClass} ${!showExplanation ? "active:scale-[0.99]" : ""}`}
              >
                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold ${showExplanation && isCorrect ? "bg-emerald-500 text-white" : showExplanation && isSelected && !isCorrect ? "bg-red-500 text-white" : "bg-slate-100 text-slate-600"}`}>
                  {opt.label}
                </div>
                <div className="flex-1 pt-1 font-medium leading-relaxed">
                  {opt.text}
                </div>
                {Icon && (
                  <Icon className={`h-6 w-6 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* EXPLANATION AREA */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-10 overflow-hidden"
            >
              {/* DR Q SPECIAL EXPLANATION */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-slate-900">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="text-xl font-black text-yellow-400 uppercase tracking-widest">
                      Explicación del Profe by Dr. Q
                    </h3>
                  </div>
                  
                  <div className="space-y-1 max-w-none text-slate-100">
                    {parseTheoryContent(question.theoryContent || question.explanation).split('\\n').map((line, idx) => {
                      if (!line.trim()) return <div key={idx} className="h-4" />;
                      
                      const isTrampa = line.toLowerCase().includes("trampa");
                      const isPerla = line.toLowerCase().includes("perla") || line.toLowerCase().includes("oro");
                      const isList = line.trim().startsWith("•") || line.trim().startsWith("-");
                      const hasCross = line.includes("❌");
                      const hasCheck = line.includes("✅");
                      
                      let Icon = null;
                      if (isTrampa) Icon = <AlertTriangle className="inline-block mr-2 text-red-400 mb-1" size={18} />;
                      else if (isPerla) Icon = <Lightbulb className="inline-block mr-2 text-yellow-400 mb-1" size={18} />;

                      if (line.startsWith("¿") || line.includes("?")) {
                        return (
                          <h3 key={idx} className="flex items-center text-lg font-bold text-white mt-8 mb-3 border-b border-white/10 pb-2">
                            {Icon || <BookOpen className="inline-block mr-2 text-yellow-400 mb-1" size={18} />}
                            {line}
                          </h3>
                        );
                      }

                      if (line.startsWith("**") && line.endsWith("**")) {
                        return <h3 key={idx} className="text-xl font-bold text-yellow-400 mt-8 mb-3">{line.replace(/\\*\\*/g, '')}</h3>;
                      }

                      if (isList) {
                        return (
                          <div key={idx} className="flex items-start gap-3 ml-2 mb-2 text-slate-200">
                            <span className="text-yellow-400 font-bold mt-0.5 text-lg leading-none">•</span>
                            <span className="flex-1 leading-relaxed">{line.replace(/^[•-]/, '').trim()}</span>
                          </div>
                        );
                      }

                      if (hasCross) {
                        return (
                          <div key={idx} className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-3 text-red-200 leading-relaxed font-medium">
                            {line}
                          </div>
                        );
                      }

                      if (hasCheck) {
                        return (
                          <div key={idx} className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-3 text-emerald-200 leading-relaxed font-medium">
                            {line}
                          </div>
                        );
                      }

                      // Check for short, bold-like statements that don't have markdown but are short
                      if (line.length > 0 && line.length < 40 && !line.includes(":") && !line.includes(".") && (line.toLowerCase() === line.toLowerCase().toUpperCase() || line.match(/^[A-Z][A-Za-z ]+$/))) {
                          return (
                              <h4 key={idx} className="text-yellow-400 font-bold mt-6 mb-2 text-base">
                                  {line}
                              </h4>
                          );
                      }

                      return (
                        <p key={idx} className="mb-3 text-slate-300 leading-relaxed">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  className="mq-premium-glow group flex items-center gap-2 rounded-2xl bg-yellow-400 px-8 py-4 text-base font-black text-slate-900 transition-all hover:-translate-y-1 hover:brightness-110 active:scale-95"
                >
                  <span>Siguiente Pregunta</span>
                  <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

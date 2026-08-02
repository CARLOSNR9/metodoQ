"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Check, Play, Settings2, BookOpen, Brain, Zap, Target } from "lucide-react";
import type { TrainingQuestion } from "@/lib/questions/types";

interface CustomTrainingCreatorProps {
  questionBank: TrainingQuestion[];
  isFreePlan?: boolean;
  onLimitExceeded?: () => void;
  onStart: (config: { topics: string[]; count: number; difficulty?: string; source?: string }) => void;
}

export function CustomTrainingCreator({ questionBank, isFreePlan, onLimitExceeded, onStart }: CustomTrainingCreatorProps) {
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(new Set());
  const [count, setCount] = useState<number>(isFreePlan ? 15 : 50);
  const [difficulty, setDifficulty] = useState<string>("all");
  const [source, setSource] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");

  // Agrupar preguntas por área y tema
  const groupedTopics = useMemo(() => {
    const groups: Record<string, Set<string>> = {};
    questionBank.forEach((q) => {
      const area = q.examArea || "General";
      const topic = q.topic || "Sin clasificar";
      if (!groups[area]) groups[area] = new Set();
      groups[area].add(topic);
    });
    
    return Object.entries(groups).map(([area, topics]) => ({
      area,
      topics: Array.from(topics).sort(),
    })).sort((a, b) => a.area.localeCompare(b.area));
  }, [questionBank]);

  const toggleArea = (area: string) => {
    const newExpanded = new Set(expandedAreas);
    if (newExpanded.has(area)) newExpanded.delete(area);
    else newExpanded.add(area);
    setExpandedAreas(newExpanded);
  };

  const toggleTopic = (topic: string) => {
    const newSelected = new Set(selectedTopics);
    if (newSelected.has(topic)) newSelected.delete(topic);
    else newSelected.add(topic);
    setSelectedTopics(newSelected);
  };

  const toggleAllInArea = (area: string, topics: string[]) => {
    const newSelected = new Set(selectedTopics);
    const allSelected = topics.every((t) => newSelected.has(t));
    
    if (allSelected) {
      topics.forEach((t) => newSelected.delete(t));
    } else {
      topics.forEach((t) => newSelected.add(t));
    }
    setSelectedTopics(newSelected);
  };

  const availableQuestionsCount = useMemo(() => {
    let filtered = questionBank;
    
    if (selectedTopics.size > 0) {
      filtered = filtered.filter(q => selectedTopics.has(q.topic));
    }
    
    if (difficulty !== "all") {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }
    
    if (source !== "all") {
      filtered = filtered.filter(q => q.source === source);
    }
    
    return filtered.length;
  }, [questionBank, selectedTopics, difficulty, source]);

  const handleStart = () => {
    onStart({
      topics: Array.from(selectedTopics),
      count: Math.min(count, availableQuestionsCount),
      difficulty: difficulty !== "all" ? difficulty : undefined,
      source: source !== "all" ? source : undefined,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Panel Izquierdo: Selección de Temas */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-mq-accent/10 rounded-lg">
              <BookOpen size={20} className="text-mq-accent" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Temas a repasar</h3>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden h-[400px] overflow-y-auto">
            {groupedTopics.map((group) => {
              const isExpanded = expandedAreas.has(group.area);
              const selectedCount = group.topics.filter(t => selectedTopics.has(t)).length;
              const allSelected = selectedCount === group.topics.length && group.topics.length > 0;
              const someSelected = selectedCount > 0 && !allSelected;

              return (
                <div key={group.area} className="border-b border-slate-200 last:border-0">
                  <div className="flex items-center justify-between p-4 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 flex-1">
                      <button 
                        onClick={() => toggleArea(group.area)}
                        className="p-1 hover:bg-slate-200 rounded-md transition-colors text-slate-500"
                      >
                        {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                      </button>
                      <button 
                        onClick={() => toggleAllInArea(group.area, group.topics)}
                        className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${allSelected ? 'bg-mq-accent border-mq-accent' : someSelected ? 'bg-mq-accent/50 border-mq-accent' : 'border-slate-300 hover:border-mq-accent'}`}
                      >
                        {allSelected && <Check size={14} className="text-white" />}
                        {someSelected && <div className="h-2 w-2 rounded-sm bg-white" />}
                      </button>
                      <span className="font-semibold text-slate-700 cursor-pointer" onClick={() => toggleArea(group.area)}>
                        {group.area}
                      </span>
                    </div>
                    {selectedCount > 0 && (
                      <span className="text-xs font-bold bg-mq-accent/20 text-mq-accent px-2 py-1 rounded-full">
                        {selectedCount}/{group.topics.length}
                      </span>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-100/50"
                      >
                        <div className="p-2 pl-12 space-y-1">
                          {group.topics.map((topic) => {
                            const isSelected = selectedTopics.has(topic);
                            return (
                              <button
                                key={topic}
                                onClick={() => toggleTopic(topic)}
                                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${isSelected ? 'bg-mq-accent/10 text-mq-accent' : 'hover:bg-slate-200 text-slate-500'}`}
                              >
                                <div className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${isSelected ? 'bg-mq-accent border-mq-accent' : 'border-slate-300 bg-white'}`}>
                                  {isSelected && <Check size={12} className="text-white" />}
                                </div>
                                <span className="text-sm">{topic}</span>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Panel Derecho: Configuración Adicional */}
        <div className="w-full md:w-80 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-mq-accent/10 rounded-lg">
              <Settings2 size={20} className="text-mq-accent" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Filtros</h3>
          </div>

          <div className="space-y-5 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            {/* Dificultad */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dificultad</label>
              <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200">
                {[
                  { id: 'all', label: 'Todas' },
                  { id: 'easy', label: 'Fácil' },
                  { id: 'medium', label: 'Media' },
                  { id: 'hard', label: 'Difícil' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setDifficulty(opt.id)}
                    className={`flex-1 text-xs font-semibold py-1.5 rounded-md transition-all ${difficulty === opt.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Estado */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mi Rendimiento</label>
              <select 
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm text-slate-700 outline-none focus:border-mq-accent transition-colors"
              >
                <option value="all">Cualquier estado</option>
                <option value="new">Solo nuevas (no vistas)</option>
                <option value="failed">Que he fallado</option>
              </select>
            </div>

            {/* Cantidad */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Preguntas</label>
                <span className="text-2xl font-black text-mq-accent">{count}</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="100" 
                step="5"
                value={count}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (isFreePlan && val > 15) {
                    setCount(15);
                    if (onLimitExceeded) onLimitExceeded();
                  } else {
                    setCount(val);
                  }
                }}
                className="w-full accent-mq-accent h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-xs text-slate-500 text-right">
                Disponibles: <span className="font-bold text-slate-700">{availableQuestionsCount}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4 border-t border-slate-200">
        <button
          onClick={handleStart}
          disabled={availableQuestionsCount === 0 || count > availableQuestionsCount}
          className="mq-premium-glow group flex h-14 w-full md:w-auto items-center justify-center gap-3 rounded-xl bg-mq-accent px-10 text-base font-black text-mq-accent-foreground transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {availableQuestionsCount === 0 ? "NO HAY PREGUNTAS" : "COMENZAR SIMULACRO"}
          <Play size={18} className="fill-current" />
        </button>
      </div>
    </div>
  );
}

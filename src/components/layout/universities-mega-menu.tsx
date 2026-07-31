"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, Stethoscope, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import {
  universitySpecialties,
  getUniversitiesBySpecialty,
  getAllSpecialties,
} from "@/data/university-specialties";

export function UniversitiesMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"universities" | "specialties">("universities");
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const universities = Object.keys(universitySpecialties).sort();
  const specialties = getAllSpecialties();
  const universitiesBySpecialty = getUniversitiesBySpecialty();

  useEffect(() => {
    if (universities.length > 0 && !selectedUniversity) {
      setSelectedUniversity(universities[0]);
    }
    if (specialties.length > 0 && !selectedSpecialty) {
      setSelectedSpecialty(specialties[0]);
    }
  }, [universities, specialties, selectedUniversity, selectedSpecialty]);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`flex items-center gap-1 transition duration-200 ${isOpen ? 'text-mq-accent' : 'hover:text-mq-accent'}`}
      >
        Universidades
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-mq-accent' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-4 z-50 w-[700px]"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
              {/* Header / Tabs */}
              <div className="flex border-b border-slate-100 bg-slate-50/50 p-2 gap-2">
                <button
                  onClick={() => setActiveTab("universities")}
                  className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all ${
                    activeTab === "universities" 
                      ? "bg-white text-mq-accent shadow-sm ring-1 ring-slate-200/50" 
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                  }`}
                >
                  <GraduationCap size={18} />
                  Por Universidad
                </button>
                <button
                  onClick={() => setActiveTab("specialties")}
                  className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all ${
                    activeTab === "specialties" 
                      ? "bg-white text-mq-accent shadow-sm ring-1 ring-slate-200/50" 
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                  }`}
                >
                  <Stethoscope size={18} />
                  Por Especialidad
                </button>
              </div>

              {/* Content Area */}
              <div className="flex h-[380px]">
                {/* Sidebar List */}
                <div className="w-1/3 border-r border-slate-100 bg-slate-50/30 overflow-y-auto p-2 scrollbar-thin">
                  <div className="flex flex-col gap-1">
                    {activeTab === "universities" ? (
                      universities.map(uni => (
                        <button
                          key={uni}
                          onClick={() => setSelectedUniversity(uni)}
                          className={`text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                            selectedUniversity === uni
                              ? "bg-mq-accent/10 text-mq-accent"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          {uni}
                        </button>
                      ))
                    ) : (
                      specialties.map(spec => (
                        <button
                          key={spec}
                          onClick={() => setSelectedSpecialty(spec)}
                          className={`text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                            selectedSpecialty === spec
                              ? "bg-mq-accent/10 text-mq-accent"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          {spec}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Detail View */}
                <div className="w-2/3 p-6 bg-white overflow-y-auto relative scrollbar-thin">
                  
                  {activeTab === "universities" && selectedUniversity && (
                    <motion.div
                      key={selectedUniversity}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pb-2"
                    >
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                        <div className="h-10 w-10 rounded-full bg-mq-accent/10 flex items-center justify-center text-mq-accent">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-800 leading-tight">
                            {selectedUniversity}
                          </h3>
                          <p className="text-sm text-slate-500">
                            Especialidades que preparamos
                          </p>
                        </div>
                      </div>
                      
                      {universitySpecialties[selectedUniversity]?.length > 0 ? (
                        <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                          {universitySpecialties[selectedUniversity].sort().map((spec) => (
                            <li key={spec} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="leading-tight">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-sm text-slate-500 italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                          Pronto agregaremos las especialidades para esta universidad.
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "specialties" && selectedSpecialty && (
                    <motion.div
                      key={selectedSpecialty}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pb-2"
                    >
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                        <div className="h-10 w-10 rounded-full bg-mq-accent/10 flex items-center justify-center text-mq-accent">
                          <Stethoscope size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-800 leading-tight">
                            {selectedSpecialty}
                          </h3>
                          <p className="text-sm text-slate-500">
                            Universidades que ofrecen esta especialidad
                          </p>
                        </div>
                      </div>
                      
                      {universitiesBySpecialty[selectedSpecialty]?.length > 0 ? (
                        <ul className="grid grid-cols-1 gap-y-3 gap-x-4">
                          {universitiesBySpecialty[selectedSpecialty].sort().map((uni) => (
                            <li key={uni} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="leading-tight">{uni}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-sm text-slate-500 italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                          Actualmente no tenemos registradas universidades para esta especialidad.
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  {/* Call to action at bottom */}
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Link 
                      href="/demo" 
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-between bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all group shadow-md"
                    >
                      Empezar a prepararme
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

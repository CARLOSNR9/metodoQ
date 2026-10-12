"use client";

import { Users, Star } from "lucide-react";
import { TRUST_UNIVERSITIES } from "@/lib/brand";
import { formatUserCount, usePublicStats } from "@/hooks/use-public-stats";
import { motion } from "framer-motion";

export function SocialProofSection() {
  const { stats, loading } = usePublicStats();

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute -left-[10%] top-[20%] w-[40%] h-[50%] rounded-full bg-blue-100/50 blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-6">
              Credibilidad
            </div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Diseñado para el médico que <span className="text-blue-600">no tiene tiempo que perder</span>
            </h2>
            <p className="mt-6 text-[1.1rem] leading-relaxed text-slate-500 font-medium">
              {loading
                ? "Comunidad de preparación para residencia médica con entrenamiento medible."
                : `${formatUserCount(stats.displayUsers)} médicos registrados y ${stats.completedSessions} sesiones de entrenamiento registradas en la plataforma.`}
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 shadow-sm">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">Micro-aprendizaje</p>
                  <p className="mt-1 text-sm font-medium text-slate-500 leading-relaxed">
                    Sesiones desde 4 minutos. Estudia entre turnos y aprovecha cada momento libre sin abrumarte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 shadow-sm">
                  <Star className="h-6 w-6 fill-blue-600/20" />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">Cero relleno</p>
                  <p className="mt-1 text-sm font-medium text-slate-500 leading-relaxed">
                    Solo los temas que realmente evalúan las universidades colombianas. Retroalimentación al instante.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Universidades preparadas</p>
              <div className="flex flex-wrap gap-2">
                {TRUST_UNIVERSITIES.map((name) => (
                  <span
                    key={name}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-500 shadow-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

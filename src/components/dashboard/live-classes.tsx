"use client";

import { useEffect, useState } from "react";
import { getClasses } from "@/lib/classes/service";
import { Class } from "@/lib/classes/types";
import { useUserPlan } from "@/hooks/use-user-plan";
import { Calendar, ExternalLink, Lock } from "lucide-react";

export function LiveClasses() {
  const { plan, loading: isLoadingPlan } = useUserPlan();
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);

  const isPro = plan === "PRO" || plan === "PRO_PLUS";

  useEffect(() => {
    async function fetchClasses() {
      if (!isPro) {
        setLoading(false);
        return;
      }
      try {
        const data = await getClasses(true); // Ordenadas por fecha ascendente
        const now = new Date();
        
        // Filtrar solo las que NO han terminado (Clase actual o futura)
        const upcoming = data.filter(cls => {
          const classDate = cls.date.toDate();
          const endTime = new Date(classDate.getTime() + (cls.duration * 60000));
          return endTime > now;
        });
        
        setClasses(upcoming);
      } catch (err) {
        console.error("Error al cargar clases próximas:", err);
      } finally {
        setLoading(false);
      }
    }

    if (!isLoadingPlan) {
      fetchClasses();
    }
  }, [isPro, isLoadingPlan]);

  if (isLoadingPlan || (loading && isPro)) {
    return (
      <div className="animate-pulse rounded-2xl border border-mq-border-strong bg-mq-surface p-6 h-40" />
    );
  }

  return (
    <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-6 shadow-sm overflow-hidden relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-mq-accent" />
          <h2 className="text-xl font-bold text-white">Próximas clases</h2>
        </div>
        {!isPro && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent bg-mq-accent/10 px-2 py-1 rounded">
            Exclusivo PRO
          </span>
        )}
      </div>
      <p className="text-sm text-mq-muted mb-6">
        Clases en vivo con médico que ya aprobó el examen. Resuelve tus dudas en tiempo real.
      </p>

      {!isPro ? (
        <div className="flex flex-col items-center justify-center py-8 text-center bg-white/[0.02] rounded-xl border border-dashed border-mq-border">
          <div className="bg-mq-accent/10 p-3 rounded-full mb-4">
            <Lock className="w-6 h-6 text-mq-accent" />
          </div>
          <p className="text-lg font-semibold text-white">Disponible en plan PRO</p>
          <div className="space-y-1 mt-2 mb-4 px-6">
            <p className="text-sm text-mq-muted font-medium">Aprende estrategias reales, no teoría.</p>
            <p className="text-xs text-mq-muted">Desbloquea el acceso a sesiones en vivo con expertos que ya superaron el reto.</p>
          </div>
          <button 
            onClick={() => window.location.href = '/dashboard/perfil'}
            className="inline-flex items-center justify-center rounded-xl bg-mq-accent px-6 py-2.5 text-sm font-bold text-mq-accent-foreground transition duration-150 hover:brightness-110"
          >
            Mejorar ahora
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {classes.length === 0 ? (
            <p className="text-mq-muted text-sm py-4 col-span-full text-center">
              No hay clases programadas próximamente.
            </p>
          ) : (
            classes.map((cls) => {
              const classDate = cls.date.toDate();
              const now = new Date();
              const endTime = new Date(classDate.getTime() + (cls.duration * 60000));
              const isLiveNow = now >= classDate && now <= endTime;

              return (
                <div 
                  key={cls.id} 
                  className={`group relative rounded-xl border bg-white/[0.03] p-5 transition-all duration-300 hover:bg-white/[0.05] ${
                    isLiveNow 
                      ? "border-mq-accent/60 shadow-[0_0_20px_-10px_rgba(0,209,255,0.3)]" 
                      : "border-mq-border hover:border-mq-accent/40"
                  }`}
                >
                  {isLiveNow && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">En vivo</span>
                    </div>
                  )}

                  <h3 className="font-bold text-white text-lg line-clamp-1 mb-1 pr-16">
                    {cls.title}
                  </h3>
                  <div className="text-xs text-mq-muted flex items-center gap-1.5 mb-4">
                    <span className="capitalize">
                      {classDate.toLocaleDateString("es-ES", { weekday: 'long', day: 'numeric', month: 'short' })}
                    </span>
                    <span className="opacity-30">•</span>
                    <span>
                      {classDate.toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  
                  <a 
                    href={cls.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full font-bold py-2.5 px-4 rounded-lg text-sm transition-all active:scale-[0.97] ${
                      isLiveNow 
                        ? "bg-mq-accent text-mq-accent-foreground shadow-lg shadow-mq-accent/20 hover:brightness-110" 
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    Unirse ahora
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )
            })
          )}
        </div>
      )}
    </section>
  );
}

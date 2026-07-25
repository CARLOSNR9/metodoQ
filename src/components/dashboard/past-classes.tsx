"use client";

import { useEffect, useState } from "react";
import { getClasses } from "@/lib/classes/service";
import { isClassVisibleToStudent, Class } from "@/lib/classes/types";
import { getEnrolledCourseIds } from "@/lib/courses/service";
import { useUserPlan } from "@/hooks/use-user-plan";
import { hasProFeatures } from "@/lib/plans/access";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { History, PlayCircle } from "lucide-react";

export function PastClasses() {
  const { plan, loading: isLoadingPlan } = useUserPlan();
  const { user } = useAuthGuard("/login");
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);

  const isPro = hasProFeatures(plan);

  useEffect(() => {
    async function fetchPastClasses() {
      if (!isPro || !user?.uid) {
        setLoading(false);
        return;
      }
      try {
        const [data, enrolledCourseIds] = await Promise.all([
          getClasses(false),
          getEnrolledCourseIds(user.uid),
        ]);
        const now = new Date();

        const past = data.filter((cls) => {
          if (!isClassVisibleToStudent(cls, enrolledCourseIds)) {
            return false;
          }
          const classDate = cls.date.toDate();
          const endTime = new Date(classDate.getTime() + cls.duration * 60000);
          return endTime < now;
        });

        setClasses(past);
      } catch (err) {
        console.error("Error al cargar clases pasadas:", err);
      } finally {
        setLoading(false);
      }
    }

    if (!isLoadingPlan) {
      fetchPastClasses();
    }
  }, [isPro, isLoadingPlan, user?.uid]);

  // Si no hay grabaciones y es PRO, no mostramos la sección
  if (isLoadingPlan || (isPro && classes.length === 0 && !loading)) {
    return null;
  }

  if (loading && isPro) {
    return (
      <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6 h-32" />
    );
  }

  if (!isPro) {
    return (
      <section className="space-y-4 opacity-75">
        <div className="flex items-center gap-2 px-1">
          <History className="w-5 h-5 text-slate-500" />
          <h2 className="text-xl font-bold text-slate-900">Clases pasadas (80+ horas)</h2>
        </div>
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-sm text-slate-500">Accede a la biblioteca completa de clases estratégicas.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 px-1">
        <History className="w-5 h-5 text-slate-500" />
        <h2 className="text-xl font-bold text-slate-900">Clases pasadas</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {classes.map((cls) => {
          const classDate = cls.date.toDate();
          return (
            <div 
              key={cls.id} 
              className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:bg-white/[0.04]"
            >
              <h3 className="font-semibold text-slate-900 text-sm line-clamp-1 mb-1">
                {cls.title}
              </h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-3">
                {classDate.toLocaleDateString("es-ES", { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
              
              {cls.recordingLink ? (
                <a 
                  href={cls.recordingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-slate-50 text-slate-900 hover:bg-slate-100 font-bold py-2 px-3 rounded-lg text-xs transition-all border border-slate-200"
                >
                  <PlayCircle className="w-3.5 h-3.5 text-mq-accent" />
                  Ver grabación
                </a>
              ) : (
                <div className="text-[10px] text-slate-500 italic text-center py-2 bg-white/[0.01] rounded border border-white/[0.05]">
                  Grabación no disponible
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

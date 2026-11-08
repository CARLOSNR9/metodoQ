"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { hasPaidPlan } from "@/lib/plans/access";
import { GENERAL_ULTRA_CATEGORIES, GENERAL_ULTRA_GROUP_ORDER } from "@/lib/ultra-resumenes/general";
import { UltraResumenesView } from "@/components/ultra-resumenes/ultra-resumenes-view";

const GROUP_DESCRIPTIONS: Record<string, string> = {
  "Medicina interna": "El bloque que más pesa en casi todos los exámenes de residencia.",
  "Áreas troncales": "Pediatría, ginecología y obstetricia, cirugía y urgencias: la otra mitad del examen.",
  Especialidades: "Preguntas fijas en cada convocatoria; repásalas después de las troncales.",
  "Especialidades menores": "Pocas preguntas por examen: lectura rápida para no dejar puntos fáciles.",
};

export default function UltraResumenesPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading } = useUserProfile();

  if (isCheckingAuth || loading) {
    return (
      <div className="flex min-h-[320px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <UltraResumenesView
      userId={user.uid}
      variant="default"
      progressField="ultraResumenes"
      eyebrow="Ultra resúmenes Q"
      title="Lo más rentable para tu examen, en fichas"
      description="Frases cortas para aprender de memoria, organizadas por especialidad y prioridad. Estudia unas 10 fichas por la mañana y otras 10 por la tarde, márcalas como dominadas y repásalas en modo tarjetas. Sirve para cualquier universidad y especialidad."
      categories={GENERAL_ULTRA_CATEGORIES}
      groupOrder={GENERAL_ULTRA_GROUP_ORDER}
      groupDescriptions={GROUP_DESCRIPTIONS}
      locked={!hasPaidPlan(profile?.plan)}
      footnote="Nivel de prioridad orientativo según el peso habitual de cada área en los exámenes de residencia en Colombia. Verifica dosis y conductas con la guía vigente de tu institución."
    />
  );
}

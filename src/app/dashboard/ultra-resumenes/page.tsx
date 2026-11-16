"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { hasPaidPlan } from "@/lib/plans/access";
import { GENERAL_ULTRA_CATEGORIES, GENERAL_ULTRA_GROUP_ORDER } from "@/lib/ultra-resumenes/general";
import { UltraResumenesView } from "@/components/ultra-resumenes/ultra-resumenes-view";
import { isDermatologiaSpecialty } from "@/lib/diagnostic/university-match";

const GROUP_DESCRIPTIONS: Record<string, string> = {
  "Medicina interna": "El bloque que más pesa en casi todos los exámenes de residencia.",
  "Áreas troncales": "Pediatría, ginecología y obstetricia, cirugía y urgencias: la otra mitad del examen.",
  Especialidades: "Preguntas fijas en cada convocatoria; repásalas después de las troncales.",
  "Especialidades menores": "Pocas preguntas por examen: lectura rápida para no dejar puntos fáciles.",
};

export default function UltraResumenesPage() {
  return (
    <Suspense fallback={null}>
      <UltraResumenesContent />
    </Suspense>
  );
}

function UltraResumenesContent() {
  // `?categoria=` abre una categoría; el enlace del menú (sin parámetro)
  // vuelve siempre a la vista general.
  const initialSlug = useSearchParams().get("categoria");
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

  const specialtyNote = isDermatologiaSpecialty(profile?.goalSpecialty)
    ? " Tu especialidad, Dermatología, está en «Especialidades menores»: pesa poco en el examen general, pero dominarla te prepara para la entrevista."
    : "";

  return (
    <UltraResumenesView
      key={initialSlug ?? "general"}
      userId={user.uid}
      variant="default"
      progressField="ultraResumenes"
      eyebrow="Ultra resúmenes Q"
      title="Lo más rentable para tu examen, en fichas"
      description={`Frases cortas para aprender de memoria, organizadas por especialidad y prioridad. Estudia unas 10 fichas por la mañana y otras 10 por la tarde, márcalas como dominadas y repásalas en modo tarjetas. Sirve para cualquier universidad y especialidad.${specialtyNote}`}
      categories={GENERAL_ULTRA_CATEGORIES}
      groupOrder={GENERAL_ULTRA_GROUP_ORDER}
      groupDescriptions={GROUP_DESCRIPTIONS}
      locked={!hasPaidPlan(profile?.plan)}
      initialSlug={initialSlug}
      footnote="Nivel de prioridad orientativo según el peso habitual de cada área en los exámenes de residencia en Colombia. Verifica dosis y conductas con la guía vigente de tu institución."
    />
  );
}

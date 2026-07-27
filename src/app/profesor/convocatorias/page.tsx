import Link from "next/link";
import { ChevronRight, ClipboardCheck } from "lucide-react";
import { PanelSection } from "@/components/admin/panel-section";
import {
  adminListConvocatoriaOverrides,
} from "@/lib/server/convocatoria-edits-admin";
import { UCC_CONVOCATORIA_EDITIONS } from "@/lib/training/convocatorias";

export const dynamic = "force-dynamic";

export default async function ProfessorConvocatoriasPage() {
  const editions = await Promise.all(
    UCC_CONVOCATORIA_EDITIONS.map(async (edition) => {
      let editedCount = 0;
      try {
        const overrides = await adminListConvocatoriaOverrides(edition.code);
        editedCount = Object.keys(overrides).length;
      } catch {
        /* panel usable sin contadores */
      }
      return { ...edition, editedCount };
    }),
  );

  return (
    <PanelSection
      title="Revisar convocatorias"
      description="Explora y edita pregunta por pregunta cada simulacro oficial UCC. Los cambios se publican de inmediato para los estudiantes; puedes restaurar la versión original del código cuando lo necesites."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {editions.map((edition) => (
          <li key={edition.code}>
            <Link
              href={`/profesor/convocatorias/${edition.code}`}
              className="group flex h-full flex-col rounded-2xl border border-mq-border bg-mq-surface-raised/60 p-6 transition hover:border-mq-accent/40 hover:bg-mq-accent/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mq-accent/15 text-mq-accent">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-mq-muted transition group-hover:translate-x-0.5 group-hover:text-mq-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{edition.label}</h3>
              <p className="mt-1 text-sm text-mq-muted">
                {edition.questionCount} preguntas · {edition.minutes} min
              </p>
              <p className="mt-3 text-xs font-medium text-mq-muted">
                {edition.editedCount > 0
                  ? `${edition.editedCount} pregunta${edition.editedCount === 1 ? "" : "s"} editada${edition.editedCount === 1 ? "" : "s"}`
                  : "Sin correcciones guardadas"}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </PanelSection>
  );
}

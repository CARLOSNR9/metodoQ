import Link from "next/link";
import { ChevronRight, ClipboardCheck } from "lucide-react";
import { PanelSection } from "@/components/admin/panel-section";
import { getConvocatoriaQuestionBank } from "@/lib/questions/convocatoria-bank";
import type { ConvocatoriaOverrideMap } from "@/lib/questions/convocatoria-overrides";
import { adminListAllEditionEdits } from "@/lib/server/question-corrections-admin";
import {
  UCC_CONVOCATORIA_EDITIONS,
  UDEA_CONVOCATORIA_EDITIONS,
  UMNG_CONVOCATORIA_EDITIONS,
  UNIVALLE_CONVOCATORIA_EDITIONS,
} from "@/lib/training/convocatorias";
import { StaffDataPending } from "@/components/admin/staff-data-pending";
import { requireStaffArea } from "@/lib/server/staff-session";

export const dynamic = "force-dynamic";

type EditionCard = { code: string; label: string; questionCount: number; minutes: number };

const GROUPS: { title: string; editions: EditionCard[] }[] = [
  { title: "Univalle", editions: UNIVALLE_CONVOCATORIA_EDITIONS },
  { title: "UCC", editions: UCC_CONVOCATORIA_EDITIONS },
  { title: "UMNG", editions: UMNG_CONVOCATORIA_EDITIONS },
  { title: "UdeA", editions: UDEA_CONVOCATORIA_EDITIONS },
];

export default async function ProfessorConvocatoriasPage() {
  if (!(await requireStaffArea("professor"))) return <StaffDataPending />;

  let edits: ConvocatoriaOverrideMap = {};
  try {
    edits = await adminListAllEditionEdits();
  } catch {
    /* panel usable sin contadores */
  }

  // Una corrección se guarda por pregunta y aplica en cada simulacro que la
  // incluye, así que el contador cuenta las preguntas corregidas de la edición.
  const countEdited = (code: string) =>
    getConvocatoriaQuestionBank(code).filter((q) => Boolean(edits[q.id])).length;

  return (
    <PanelSection
      title="Revisar convocatorias"
      description="Explora y edita pregunta por pregunta cada simulacro. Los cambios se publican de inmediato para los estudiantes, en todos los simulacros que comparten la pregunta y en su repaso; puedes restaurar la versión original del código cuando lo necesites."
    >
      <div className="space-y-10">
        {GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-mq-accent">
              {group.title}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {group.editions.map((edition) => {
                const editedCount = countEdited(edition.code);
                return (
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
                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {group.title} · {edition.label}
                      </h3>
                      <p className="mt-1 text-sm text-mq-muted">
                        {edition.questionCount} preguntas · {edition.minutes} min
                      </p>
                      <p className="mt-3 text-xs font-medium text-mq-muted">
                        {editedCount > 0
                          ? `${editedCount} pregunta${editedCount === 1 ? "" : "s"} corregida${editedCount === 1 ? "" : "s"}`
                          : "Sin correcciones guardadas"}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </PanelSection>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ConvocatoriaQuestionReviewer } from "@/components/professor/convocatoria-question-reviewer";
import { getConvocatoriaQuestionBank } from "@/lib/questions/convocatoria-bank";
import { mergeConvocatoriaBank } from "@/lib/questions/convocatoria-overrides";
import { sortConvocatoriaQuestions } from "@/lib/convocatoria/question-number";
import { adminListConvocatoriaOverrides } from "@/lib/server/convocatoria-edits-admin";
import { getConvocatoriaEdition } from "@/lib/training/ucc-convocatoria";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ editionCode: string }>;
};

export default async function ProfessorConvocatoriaEditionPage({ params }: PageProps) {
  const { editionCode } = await params;
  const edition = getConvocatoriaEdition(editionCode);
  if (!edition) notFound();

  const baseQuestions = sortConvocatoriaQuestions(
    getConvocatoriaQuestionBank(editionCode),
  );
  if (baseQuestions.length === 0) notFound();

  let overrides = {};
  try {
    overrides = await adminListConvocatoriaOverrides(editionCode);
  } catch (e) {
    console.error("convocatoria overrides load", e);
  }

  const mergedQuestions = mergeConvocatoriaBank(baseQuestions, overrides);

  return (
    <div className="-mx-2 max-w-none sm:-mx-4">
      <Link
        href="/profesor/convocatorias"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-mq-muted transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a simulacros
      </Link>

      <header className="mb-8 border-b border-mq-border-strong pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
          Revisor de convocatoria
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {edition.label}
        </h1>
        <p className="mt-2 text-sm text-mq-muted">
          {edition.questionCount} preguntas · Simulacro UCC · Los estudiantes ven la retroalimentación
          al finalizar las 100 preguntas; aquí puedes revisarla y ajustarla pregunta por pregunta.
        </p>
      </header>

      <ConvocatoriaQuestionReviewer
        editionCode={edition.code}
        editionLabel={edition.label}
        baseQuestions={baseQuestions}
        mergedQuestions={mergedQuestions}
        overrides={overrides}
      />
    </div>
  );
}

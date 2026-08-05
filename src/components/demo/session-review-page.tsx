"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ConvocatoriaRepasoPanel } from "@/components/dashboard/convocatoria-repaso-panel";
import { UccConvocatoriaResultsPanel } from "@/components/dashboard/ucc-convocatoria-results-panel";
import { SessionQuestionReview } from "@/components/demo/session-question-review";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import {
  getDemoResultById,
  getSessionTypeLabel,
  type DemoResultItem,
} from "@/lib/results";
import { hasSessionReviewData, resolveSessionQuestions } from "@/lib/session-review";
import type { TrainingQuestion } from "@/lib/questions/types";
import { getConvocatoriaEdition } from "@/lib/training/convocatorias";

type SessionReviewPageProps = {
  resultId: string;
};

export default function SessionReviewPage({ resultId }: SessionReviewPageProps) {
  const searchParams = useSearchParams();
  const defaultFilter = searchParams.get("filter") === "wrong" ? "wrong" : "all";
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const [result, setResult] = useState<DemoResultItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!user) return;
    const userId = user.uid;

    let mounted = true;

    async function loadResult() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const item = await getDemoResultById(userId, resultId);
        if (!mounted) return;
        setResult(item);
        if (!item) {
          setErrorMessage("No encontramos este intento o no tienes permiso para verlo.");
        } else if (
          !hasSessionReviewData(item.sessionQuestionIds, item.answersByQuestionId)
        ) {
          setErrorMessage(
            "Este intento no tiene retroalimentación guardada. Solo las sesiones nuevas incluyen revisión detallada.",
          );
        }
      } catch (error) {
        console.error("Error al cargar la revisión de sesión:", error);
        if (!mounted) return;
        setErrorMessage("No se pudo cargar la retroalimentación de esta sesión.");
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void loadResult();
    return () => {
      mounted = false;
    };
  }, [resultId, user]);

  const [sessionQuestions, setSessionQuestions] = useState<TrainingQuestion[]>([]);

  useEffect(() => {
    if (!result?.sessionQuestionIds) {
      setSessionQuestions([]);
      return;
    }
    resolveSessionQuestions(result.sessionQuestionIds).then(setSessionQuestions);
  }, [result?.sessionQuestionIds]);

  const isConvocatoria = result?.sessionType === "convocatoria";
  const convocatoriaEdition = result?.convocatoriaEdition
    ? getConvocatoriaEdition(result.convocatoriaEdition)
    : null;
  const backHref = isConvocatoria ? "/dashboard/convocatorias" : "/dashboard/historial";
  const backLabel = isConvocatoria ? "Volver a simulacros" : "Volver al historial";

  if (isCheckingAuth || !user) {
    return (
      <section className="h-48 animate-pulse rounded-2xl border border-slate-200 bg-white/[0.04]" />
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-mq-accent hover:brightness-110"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <h1 className="mt-4 text-2xl font-semibold text-slate-900">
          {isConvocatoria
            ? `Retroalimentación · ${convocatoriaEdition?.label ?? "Convocatoria UCC"}`
            : "Retroalimentación del intento"}
        </h1>
        {result ? (
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>{result.fechaLabel}</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mq-accent">
              {getSessionTypeLabel(result.sessionType)}
            </span>
            <span className="font-semibold text-slate-900">{result.scorePercentage}%</span>
            <span>
              {result.correctAnswers} correctas · {result.wrongAnswers} incorrectas
            </span>
          </div>
        ) : null}
      </section>

      {isLoading ? (
        <section className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-white/[0.04]" />
      ) : errorMessage ? (
        <section className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-5 text-sm text-rose-100">
          {errorMessage}
        </section>
      ) : result && sessionQuestions.length > 0 && result.answersByQuestionId ? (
        <>
          {isConvocatoria ? (
            <>
              <UccConvocatoriaResultsPanel
                correctAnswers={result.correctAnswers}
                totalQuestions={sessionQuestions.length}
                sessionQuestions={sessionQuestions}
                answersByQuestionId={result.answersByQuestionId}
              />
              {convocatoriaEdition ? (
                <ConvocatoriaRepasoPanel
                  attempt={{
                    editionCode: convocatoriaEdition.code,
                    scorePercentage: result.scorePercentage,
                    correctAnswers: result.correctAnswers,
                    wrongAnswers: result.wrongAnswers,
                    completedAt: result.fechaIso ?? new Date().toISOString(),
                    sessionQuestionIds: result.sessionQuestionIds,
                    answersByQuestionId: result.answersByQuestionId,
                    resultId,
                  }}
                  questionCount={convocatoriaEdition.questionCount}
                  insightsOnly
                  track={convocatoriaEdition.code.startsWith("UMNG") ? "UMNG" : "UCC"}
                />
              ) : null}
            </>
          ) : null}
          <SessionQuestionReview
            sessionQuestions={sessionQuestions}
            answersByQuestionId={result.answersByQuestionId}
            savedResultId={resultId}
            title={`Retroalimentación de ${sessionQuestions.length} preguntas`}
            className="mt-0"
            defaultFilter={defaultFilter}
          />
        </>
      ) : null}
    </div>
  );
}

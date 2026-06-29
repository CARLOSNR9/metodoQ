"use client";

import { useMemo, useState } from "react";
import { BookOpen, ClipboardList, Eye } from "lucide-react";
import { QuestionCard } from "@/components/demo/question-card";
import { ReportQuestionButton } from "@/components/admin/report-question-button";
import { TheoryContent } from "@/components/study/theory-content";
import type { QuestionAdminRecord } from "@/lib/questions/types";
import { cn } from "@/lib/utils";

type PreviewTab = "training" | "study-note";

type QuestionStudentPreviewProps = {
  question: QuestionAdminRecord;
  className?: string;
  isReported?: boolean;
};

function firstWrongOptionId(question: QuestionAdminRecord): string {
  const wrong = question.options.find((option) => option.id !== question.correctOptionId);
  return wrong?.id ?? "A";
}

export function QuestionStudentPreview({
  question,
  className,
  isReported = false,
}: QuestionStudentPreviewProps) {
  const [tab, setTab] = useState<PreviewTab>("training");
  const [answerMode, setAnswerMode] = useState<"correct" | "incorrect">("correct");

  const previewOptionId = useMemo(() => {
    return answerMode === "correct"
      ? question.correctOptionId
      : firstWrongOptionId(question);
  }, [answerMode, question]);

  const trimmedTheory = question.theoryContent?.trim();
  const correctLabel =
    question.options.find((option) => option.id === question.correctOptionId)?.label ??
    question.correctOptionId;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-mq-accent">
              <Eye className="h-3.5 w-3.5" />
              Vista previa estudiante
            </p>
            <h3 className="mt-2 text-lg font-bold text-white">{question.topic}</h3>
            {question.examArea ? (
              <p className="mt-1 text-sm text-mq-muted">{question.examArea}</p>
            ) : null}
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="rounded-lg border border-mq-accent/30 bg-mq-accent/10 px-3 py-2 text-right">
              <p className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">
                Código
              </p>
              <p className="font-mono text-sm font-bold text-mq-accent">{question.id}</p>
            </div>
            <ReportQuestionButton
              questionId={question.id}
              topic={question.topic}
              theoryCharCount={trimmedTheory ? trimmedTheory.length : null}
              initiallyReported={isReported}
              variant="compact"
            />
          </div>
        </div>

        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">
              Respuesta correcta
            </dt>
            <dd className="mt-1 text-sm font-semibold text-emerald-300">
              Opción {correctLabel}
            </dd>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-mq-muted">
              Píldora de teoría
            </dt>
            <dd className="mt-1 text-sm text-white">
              {trimmedTheory
                ? `${trimmedTheory.length.toLocaleString("es-CO")} caracteres`
                : question.theoryUrl
                  ? "Enlace externo"
                  : "Sin contenido"}
            </dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-wrap gap-2">
        <TabButton active={tab === "training"} onClick={() => setTab("training")}>
          Entrenamiento
        </TabButton>
        <TabButton active={tab === "study-note"} onClick={() => setTab("study-note")}>
          Nota en Mi Estudio
        </TabButton>
      </div>

      {tab === "training" ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <AnswerModeButton
              active={answerMode === "correct"}
              onClick={() => setAnswerMode("correct")}
              tone="success"
            >
              Simular acierto
            </AnswerModeButton>
            <AnswerModeButton
              active={answerMode === "incorrect"}
              onClick={() => setAnswerMode("incorrect")}
              tone="error"
            >
              Simular error
            </AnswerModeButton>
          </div>

          <QuestionCard
            key={`${question.id}-${previewOptionId}`}
            questionId={question.id}
            topic={question.topic}
            question={question.statement}
            options={question.options}
            correctOptionId={question.correctOptionId}
            explanation={question.explanation}
            keyPoints={question.keyPoints}
            theoryContent={question.theoryContent}
            theoryHref={question.theoryUrl ?? `/teoria/${question.id}`}
            examAreaLabel={question.examArea ?? question.topic}
            defaultSelectedOptionId={previewOptionId}
          />
        </div>
      ) : (
        <StudyNotePreview
          question={question}
          theoryContent={trimmedTheory}
          isReported={isReported}
        />
      )}
    </div>
  );
}

function StudyNotePreview({
  question,
  theoryContent,
  isReported = false,
}: {
  question: QuestionAdminRecord;
  theoryContent?: string;
  isReported?: boolean;
}) {
  if (!theoryContent) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
        <BookOpen className="mx-auto h-8 w-8 text-mq-muted" />
        <p className="mt-4 text-sm font-semibold text-white">
          Esta pregunta no tiene píldora de teoría en texto
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-mq-muted">
          El estudiante no podría guardar una nota de estudio desde la retroalimentación. Solo
          vería la explicación corta del entrenamiento.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#071428] shadow-[0_32px_120px_-24px_rgb(0_209_255/0.25)]">
      <div className="border-b border-white/10 bg-gradient-to-br from-mq-accent/15 via-transparent to-indigo-500/10 px-5 py-5 sm:px-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-mq-accent">
            Mi Estudio · nota guardada
          </p>
          <ReportQuestionButton
            questionId={question.id}
            topic={question.topic}
            theoryCharCount={theoryContent.length}
            initiallyReported={isReported}
          />
        </div>
        <h4 className="mt-2 text-xl font-black text-white">{question.topic}</h4>
        {question.examArea ? (
          <p className="mt-1 text-sm text-mq-muted">{question.examArea}</p>
        ) : null}
        <p className="mt-3 font-mono text-xs text-mq-muted">{question.id}</p>
      </div>

      <div className="px-5 py-5 sm:px-7">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-mq-muted" />
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-mq-muted">
              Caso clínico
            </p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            {question.statement}
          </p>
        </div>

        <div className="mt-6">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-mq-accent" />
            <p className="text-sm font-bold text-white">Lectura para el examen</p>
          </div>
          <TheoryContent content={theoryContent} />
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#050f22]/95 px-5 py-4 text-center text-xs text-mq-muted sm:px-7">
        Así se vería la nota si el estudiante pulsa{" "}
        <span className="font-semibold text-white">Agregar a Mi Estudio</span>.
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-xs font-bold transition",
        active
          ? "bg-mq-accent text-mq-accent-foreground"
          : "border border-white/15 text-mq-muted hover:text-white",
      )}
    >
      {children}
    </button>
  );
}

function AnswerModeButton({
  active,
  onClick,
  tone,
  children,
}: {
  active: boolean;
  onClick: () => void;
  tone: "success" | "error";
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-lg px-3 py-1.5 text-xs font-semibold transition",
        active && tone === "success" && "bg-emerald-500/20 text-emerald-200",
        active && tone === "error" && "bg-rose-500/20 text-rose-200",
        !active && "border border-white/10 text-mq-muted hover:text-white",
      )}
    >
      {children}
    </button>
  );
}

"use client";

import { useState, useTransition } from "react";
import { AlertTriangle, Check, Flag } from "lucide-react";
import { reportQuestionAction } from "@/app/admin/question-report-actions";
import { getFirebaseAuth } from "@/lib/firebase";
import { cn } from "@/lib/utils";

type ReportQuestionButtonProps = {
  questionId: string;
  topic: string;
  theoryCharCount: number | null;
  initiallyReported?: boolean;
  className?: string;
  variant?: "default" | "compact";
};

export function ReportQuestionButton({
  questionId,
  topic,
  theoryCharCount,
  initiallyReported = false,
  className,
  variant = "default",
}: ReportQuestionButtonProps) {
  const [isReported, setIsReported] = useState(initiallyReported);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleReport = () => {
    if (isReported || isPending) return;

    startTransition(async () => {
      setError(null);
      const token = await getFirebaseAuth().currentUser?.getIdToken();
      const result = await reportQuestionAction(questionId, topic, theoryCharCount, token);

      if (result.error) {
        setError(result.error);
        return;
      }

      setIsReported(true);
    });
  };

  if (isReported) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
          variant === "compact" ? "px-2.5 py-1 text-[10px] font-bold" : "px-3 py-1.5 text-xs font-semibold",
          className,
        )}
      >
        <Check className={variant === "compact" ? "h-3 w-3" : "h-3.5 w-3.5"} />
        Reportada
      </span>
    );
  }

  return (
    <div className={cn("flex flex-col items-end gap-1", className)}>
      <button
        type="button"
        onClick={handleReport}
        disabled={isPending}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 font-semibold text-amber-100 transition hover:bg-amber-500/20 disabled:opacity-60",
          variant === "compact" ? "px-2.5 py-1 text-[10px] font-bold" : "px-3 py-1.5 text-xs",
        )}
      >
        <Flag className={variant === "compact" ? "h-3 w-3" : "h-3.5 w-3.5"} />
        {isPending ? "Reportando…" : "Reportar pregunta"}
      </button>
      {error ? (
        <p className="flex items-center gap-1 text-[10px] text-rose-300">
          <AlertTriangle className="h-3 w-3" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

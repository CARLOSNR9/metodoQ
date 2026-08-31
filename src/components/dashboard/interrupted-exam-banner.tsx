"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import {
  getExamDraftAnsweredCount,
  getExamDraftResumeHref,
  listExamDraftsLocal,
  listExamDraftsRemote,
  pickLatestExamDraft,
  pickNewerExamDraft,
  type ExamDraft,
} from "@/lib/training/exam-draft";

type InterruptedExamBannerProps = {
  userId: string;
};

export function InterruptedExamBanner({ userId }: InterruptedExamBannerProps) {
  const [draft, setDraft] = useState<ExamDraft | null>(null);

  useEffect(() => {
    const local = pickLatestExamDraft(listExamDraftsLocal(userId));
    if (local) setDraft(local);

    let cancelled = false;
    void listExamDraftsRemote(userId).then((remote) => {
      if (cancelled) return;
      const best = pickNewerExamDraft(local, pickLatestExamDraft(remote));
      setDraft(best);
    });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (!draft) return null;

  const answered = getExamDraftAnsweredCount(draft);
  const total = draft.questionIds.length;
  const current = Math.min(draft.currentQuestionIndex + 1, total);
  const label = draft.kind === "convocatoria" ? "simulacro de convocatoria" : "simulacro";

  return (
    <div className="rounded-2xl border border-mq-accent/30 bg-mq-accent/5 px-4 py-3 sm:px-5">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
        Progreso guardado
      </p>
      <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-700">
          Tienes un {label} interrumpido en la pregunta {current} de {total}
          {answered > 0 ? ` · ${answered} respondida${answered === 1 ? "" : "s"}` : ""}.
        </p>
        <Link
          href={getExamDraftResumeHref(draft)}
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-mq-accent px-4 text-sm font-black text-mq-accent-foreground transition hover:brightness-110"
        >
          Continuar
          <RotateCcw size={14} />
        </Link>
      </div>
    </div>
  );
}

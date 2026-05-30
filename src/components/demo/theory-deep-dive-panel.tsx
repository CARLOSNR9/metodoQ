"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Bookmark, BookmarkCheck, Loader2, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  isStudyNoteSaved,
  removeStudyNote,
  saveStudyNote,
} from "@/lib/study/saved-notes";

type TheoryDeepDivePanelProps = {
  open: boolean;
  onClose: () => void;
  questionId: string;
  topic: string;
  statement: string;
  theoryContent: string;
  examArea?: string;
  userId?: string | null;
};

export function TheoryDeepDivePanel({
  open,
  onClose,
  questionId,
  topic,
  statement,
  theoryContent,
  examArea,
  userId,
}: TheoryDeepDivePanelProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isCheckingSaved, setIsCheckingSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!open || !userId) {
      setIsSaved(false);
      return;
    }

    let cancelled = false;
    setIsCheckingSaved(true);

    isStudyNoteSaved(userId, questionId)
      .then((saved) => {
        if (!cancelled) setIsSaved(saved);
      })
      .finally(() => {
        if (!cancelled) setIsCheckingSaved(false);
      });

    return () => {
      cancelled = true;
    };
  }, [open, userId, questionId]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const handleToggleSave = async () => {
    if (!userId || isSaving) return;

    setIsSaving(true);
    try {
      if (isSaved) {
        await removeStudyNote(userId, questionId);
        setIsSaved(false);
      } else {
        await saveStudyNote(userId, {
          questionId,
          topic,
          statement,
          theoryContent,
          examArea,
        });
        setIsSaved(true);
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Cerrar explicación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="theory-deep-dive-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-[#0A1F44] shadow-[0_24px_80px_-24px_rgb(0_209_255/0.35)] sm:rounded-3xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
                  <BookOpen className="h-3.5 w-3.5" />
                  Píldora de teoría
                </p>
                <h2
                  id="theory-deep-dive-title"
                  className="mt-1 text-lg font-black text-white sm:text-xl"
                >
                  {topic}
                </h2>
                {examArea ? (
                  <p className="mt-1 text-xs text-mq-muted">{examArea}</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-mq-muted transition hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-6">
              <p className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-300">
                {statement}
              </p>
              <div className="mt-5 whitespace-pre-wrap text-base leading-relaxed text-slate-200">
                {theoryContent}
              </div>
            </div>

            <div className="border-t border-white/10 px-5 py-4 sm:px-6">
              {userId ? (
                <button
                  type="button"
                  onClick={handleToggleSave}
                  disabled={isSaving || isCheckingSaved}
                  className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold transition ${
                    isSaved
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15"
                      : "bg-mq-accent text-mq-accent-foreground hover:opacity-90"
                  }`}
                >
                  {isSaving || isCheckingSaved ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : isSaved ? (
                    <BookmarkCheck className="h-4 w-4" />
                  ) : (
                    <Bookmark className="h-4 w-4" />
                  )}
                  {isSaved ? "Guardada en mi Estudio" : "Agregar a mi Estudio"}
                </button>
              ) : (
                <p className="text-center text-xs text-mq-muted">
                  Inicia sesión para guardar esta nota en tu tablero de Estudio.
                </p>
              )}
              {userId && isSaved ? (
                <Link
                  href="/dashboard/estudio"
                  className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-white/10 text-sm font-semibold text-mq-muted transition hover:border-mq-accent/30 hover:text-white"
                >
                  Ir a mi tablero
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Loader2,
  StickyNote,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
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

function TheoryContent({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        const lines = block.split("\n");
        const isBulletBlock = lines.every(
          (line) => line.trim().startsWith("-") || line.trim() === "",
        );

        if (isBulletBlock) {
          return (
            <ul key={index} className="space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              {lines
                .filter((line) => line.trim())
                .map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-[15px] leading-relaxed text-slate-200"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mq-accent" />
                    {line.replace(/^\-\s*/, "")}
                  </li>
                ))}
            </ul>
          );
        }

        const isShortHeader =
          block.length < 90 && !block.includes("\n") && block.endsWith(":");

        if (isShortHeader) {
          return (
            <h3
              key={index}
              className="pt-1 text-xs font-black uppercase tracking-[0.16em] text-mq-accent"
            >
              {block.replace(/:$/, "")}
            </h3>
          );
        }

        return (
          <p key={index} className="text-[15px] leading-7 text-slate-200">
            {block}
          </p>
        );
      })}
    </div>
  );
}

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
  const [mounted, setMounted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCheckingSaved, setIsCheckingSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    if (!open) {
      setSaveMessage(null);
      return;
    }

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
    setSaveMessage(null);

    try {
      if (isSaved) {
        await removeStudyNote(userId, questionId);
        setIsSaved(false);
        setSaveMessage("Nota quitada de Mi Estudio.");
      } else {
        await saveStudyNote(userId, {
          questionId,
          topic,
          statement,
          theoryContent,
          examArea,
        });
        setIsSaved(true);
        setSaveMessage("Guardada en Mi Estudio. Puedes leerla cuando quieras.");
      }
    } catch {
      setSaveMessage("No se pudo guardar. Revisa tu conexión e intenta de nuevo.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Cerrar explicación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020817]/75 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="theory-deep-dive-title"
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[2rem] border border-white/10 bg-[#071428] shadow-[0_32px_120px_-24px_rgb(0_209_255/0.35)] sm:rounded-[2rem]"
          >
            <div className="relative overflow-hidden border-b border-white/10 px-5 py-5 sm:px-7">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mq-accent/15 via-transparent to-indigo-500/10" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/25 bg-mq-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-mq-accent">
                    <Sparkles className="h-3 w-3" />
                    Píldora de teoría
                  </div>
                  <h2
                    id="theory-deep-dive-title"
                    className="mt-3 text-xl font-black text-white sm:text-2xl"
                  >
                    {topic}
                  </h2>
                  {examArea ? (
                    <p className="mt-1 text-sm text-mq-muted">{examArea}</p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mq-muted transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-mq-muted">
                  Pregunta
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {statement}
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

            <div className="border-t border-white/10 bg-[#050f22]/95 px-5 py-4 backdrop-blur-md sm:px-7">
              {saveMessage ? (
                <p
                  className={`mb-3 text-center text-xs font-medium ${
                    saveMessage.includes("No se pudo")
                      ? "text-rose-300"
                      : "text-emerald-300"
                  }`}
                >
                  {saveMessage}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                {userId ? (
                  <>
                    <button
                      type="button"
                      onClick={handleToggleSave}
                      disabled={isSaving || isCheckingSaved}
                      className={`inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-black transition ${
                        isSaved
                          ? "border border-emerald-400/30 bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/20"
                          : "bg-mq-accent text-mq-accent-foreground shadow-[0_12px_30px_-12px_rgb(0_209_255/0.8)] hover:opacity-95"
                      }`}
                    >
                      {isSaving || isCheckingSaved ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : isSaved ? (
                        <BookmarkCheck className="h-4 w-4" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                      {isSaved ? "Guardada en Mi Estudio" : "Agregar a Mi Estudio"}
                    </button>

                    {isSaved ? (
                      <Link
                        href="/dashboard/estudio"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 text-sm font-bold text-white transition hover:border-mq-accent/30 hover:bg-white/5"
                      >
                        <StickyNote className="h-4 w-4 text-mq-accent" />
                        Ver tablero
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 px-5 text-sm font-semibold text-mq-muted transition hover:bg-white/5 hover:text-white sm:min-w-[140px]"
                      >
                        Cerrar
                      </button>
                    )}
                  </>
                ) : (
                  <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-mq-muted">
                    Inicia sesión para guardar esta nota en{" "}
                    <span className="font-semibold text-white">Mi Estudio</span>.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ClipboardList,
  Loader2,
  StickyNote,
  Trash2,
  X,
} from "lucide-react";
import { TheoryContent } from "@/components/study/theory-content";
import { removeStudyNote, subscribeStudyNotes, type StudyNote } from "@/lib/study/saved-notes";
import { getExamAreaLabel, getStudyNoteTheme } from "@/lib/study/study-note-theme";

type StudyNotesBoardProps = {
  userId: string;
};

function formatSavedDate(iso: string | null) {
  if (!iso) return "Recién guardada";
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

function StudyNoteCard({
  note,
  index,
  removingId,
  onOpen,
  onRemove,
}: {
  note: StudyNote;
  index: number;
  removingId: string | null;
  onOpen: () => void;
  onRemove: () => void;
}) {
  const theme = getStudyNoteTheme(note.topic, note.examArea);
  const Icon = theme.icon;
  const specialty = getExamAreaLabel(note.examArea);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-white/[0.03] p-5 text-left transition hover:bg-slate-100 ${theme.cardBorder} ${theme.cardGlow}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80 ${theme.cardGradient}`}
      />
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/[0.03] blur-2xl transition group-hover:bg-slate-100" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${theme.iconBg}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <span
              className={`inline-flex max-w-[140px] truncate rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${theme.badgeClass}`}
            >
              {specialty}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-[10px] font-semibold text-slate-500">
              {formatSavedDate(note.savedAt)}
            </span>
            <button
              type="button"
              aria-label="Eliminar nota"
              disabled={removingId === note.questionId}
              onClick={(event) => {
                event.stopPropagation();
                onRemove();
              }}
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-transparent text-slate-500 opacity-70 transition hover:border-rose-500/30 hover:bg-rose-500/10 hover:text-rose-200 hover:opacity-100 disabled:opacity-50 group-hover:opacity-100"
            >
              {removingId === note.questionId ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Trash2 className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        <h3 className="mt-4 line-clamp-2 text-base font-black text-slate-900">
          {note.topic}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
          {note.statement}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/8 pt-4">
          <p className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${theme.accentClass}`}>
            <BookOpen className="h-3.5 w-3.5" />
            Leer nota
          </p>
          <span className="rounded-lg bg-white/[0.04] px-2 py-1 text-[10px] font-semibold text-slate-500">
            Píldora
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function StudyNoteModal({
  note,
  removingId,
  onClose,
  onRemove,
}: {
  note: StudyNote;
  removingId: string | null;
  onClose: () => void;
  onRemove: () => void;
}) {
  const theme = getStudyNoteTheme(note.topic, note.examArea);
  const Icon = theme.icon;
  const specialty = getExamAreaLabel(note.examArea);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <motion.button
        type="button"
        aria-label="Cerrar nota"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#020817]/75 backdrop-blur-md"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="relative z-10 flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[2rem] border border-slate-200 bg-[#071428] shadow-[0_32px_120px_-24px_rgb(0_209_255/0.25)] sm:rounded-[2rem]"
      >
        <div className="relative overflow-hidden border-b border-slate-200 px-5 py-5 sm:px-7">
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90 ${theme.cardGradient}`} />
          <div className="relative flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
                  Mi estudio
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.12em] ${theme.badgeClass}`}
                >
                  <Icon className="h-3 w-3" />
                  {specialty}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-black text-slate-900 sm:text-2xl">
                {note.topic}
              </h2>
              {note.examArea ? (
                <p className="mt-1 text-sm text-slate-500">{note.examArea}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-7">
          <div className="rounded-2xl border border-slate-200 bg-white/[0.04] p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-slate-500" />
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                Caso clínico
              </p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              {note.statement}
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className={`h-4 w-4 ${theme.accentClass}`} />
              <p className="text-sm font-bold text-slate-900">Lectura para el examen</p>
            </div>
            <TheoryContent content={note.theoryContent} />
          </div>
        </div>

        <div className="border-t border-slate-200 bg-[#050f22]/95 px-5 py-4 backdrop-blur-md sm:px-7">
          <button
            type="button"
            onClick={onRemove}
            disabled={removingId === note.questionId}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl border border-rose-500/25 bg-rose-500/10 text-sm font-bold text-rose-200 transition hover:bg-rose-500/15"
          >
            {removingId === note.questionId ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
            Quitar de mi Estudio
          </button>
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}

export function StudyNotesBoard({ userId }: StudyNotesBoardProps) {
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState<StudyNote | null>(null);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeStudyNotes(
      userId,
      (items) => {
        setNotes(items);
        setSelectedNote((current) =>
          current
            ? items.find((note) => note.questionId === current.questionId) ?? null
            : null,
        );
        setLoading(false);
      },
      () => {
        setNotes([]);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, [userId]);

  const handleRemove = async (questionId: string) => {
    setRemovingId(questionId);
    try {
      await removeStudyNote(userId, questionId);
      setNotes((prev) => prev.filter((note) => note.questionId !== questionId));
      if (selectedNote?.questionId === questionId) {
        setSelectedNote(null);
      }
    } finally {
      setRemovingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
        <Loader2 className="h-8 w-8 animate-spin text-mq-accent" />
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-slate-50 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-mq-accent/10 text-mq-accent">
          <StickyNote className="h-7 w-7" />
        </div>
        <h2 className="mt-5 text-lg font-bold text-slate-900">Tu tablero está vacío</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-500">
          Cuando falles una pregunta con píldora de teoría, ábrela y pulsa{" "}
          <span className="font-semibold text-slate-900">Agregar a mi Estudio</span>{" "}
          para leerla después.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {notes.map((note, index) => (
          <StudyNoteCard
            key={note.questionId}
            note={note}
            index={index}
            removingId={removingId}
            onOpen={() => setSelectedNote(note)}
            onRemove={() => void handleRemove(note.questionId)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {mounted && selectedNote ? (
          <StudyNoteModal
            key={selectedNote.questionId}
            note={selectedNote}
            removingId={removingId}
            onClose={() => setSelectedNote(null)}
            onRemove={() => void handleRemove(selectedNote.questionId)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

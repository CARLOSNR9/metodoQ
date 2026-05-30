"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Loader2,
  StickyNote,
  Trash2,
  X,
} from "lucide-react";
import { removeStudyNote, subscribeStudyNotes, type StudyNote } from "@/lib/study/saved-notes";

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

export function StudyNotesBoard({ userId }: StudyNotesBoardProps) {
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState<StudyNote | null>(null);
  const [removingId, setRemovingId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeStudyNotes(
      userId,
      (items) => {
        setNotes(items);
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
      <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
        <Loader2 className="h-8 w-8 animate-spin text-mq-accent" />
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-mq-accent/10 text-mq-accent">
          <StickyNote className="h-7 w-7" />
        </div>
        <h2 className="mt-5 text-lg font-bold text-white">Tu tablero está vacío</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-mq-muted">
          Cuando falles una pregunta con píldora de teoría, ábrela y pulsa{" "}
          <span className="font-semibold text-white">Agregar a mi Estudio</span>{" "}
          para leerla después.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {notes.map((note, index) => (
          <motion.button
            key={note.questionId}
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            onClick={() => setSelectedNote(note)}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-mq-accent/30 hover:bg-white/[0.05]"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-mq-accent">
                {note.examArea ?? "Tema clave"}
              </p>
              <span className="text-[10px] font-semibold text-mq-muted">
                {formatSavedDate(note.savedAt)}
              </span>
            </div>
            <h3 className="mt-3 line-clamp-2 text-base font-bold text-white">
              {note.topic}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mq-muted">
              {note.statement}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-mq-accent">
              <BookOpen className="h-3.5 w-3.5" />
              Leer nota
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedNote ? (
          <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
            <motion.button
              type="button"
              aria-label="Cerrar nota"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNote(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-[#0A1F44] sm:rounded-3xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
                    Mi estudio
                  </p>
                  <h2 className="mt-1 text-lg font-black text-white sm:text-xl">
                    {selectedNote.topic}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedNote(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-mq-muted transition hover:bg-white/5 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="overflow-y-auto px-5 py-5 sm:px-6">
                <p className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-300">
                  {selectedNote.statement}
                </p>
                <div className="mt-5 whitespace-pre-wrap text-base leading-relaxed text-slate-200">
                  {selectedNote.theoryContent}
                </div>
              </div>

              <div className="border-t border-white/10 px-5 py-4 sm:px-6">
                <button
                  type="button"
                  onClick={() => handleRemove(selectedNote.questionId)}
                  disabled={removingId === selectedNote.questionId}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-rose-500/25 bg-rose-500/10 text-sm font-bold text-rose-200 transition hover:bg-rose-500/15"
                >
                  {removingId === selectedNote.questionId ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                  Quitar de mi Estudio
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

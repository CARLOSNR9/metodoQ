import { doc, updateDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getTheoryContentForQuestion } from "@/lib/questions/enrich-theory-pills";
import type { StudyNote } from "@/lib/study/saved-notes";

function studyNoteDoc(userId: string, questionId: string) {
  return doc(getFirebaseDb(), "users", userId, "studyNotes", questionId);
}

async function patchStudyNoteTheoryContent(
  userId: string,
  questionId: string,
  theoryContent: string,
): Promise<void> {
  await updateDoc(studyNoteDoc(userId, questionId), { theoryContent });
}

function resolveFreshTheoryContent(note: StudyNote): string | undefined {
  return getTheoryContentForQuestion(note.questionId, note.statement);
}

import { getAllRepositoryQuestions } from "@/lib/questions/local-bank";

/** Aplica la píldora vigente del repositorio sin escribir en Firestore. */
export async function enrichStudyNoteLocally(note: StudyNote): Promise<StudyNote> {
  await getAllRepositoryQuestions(); // Ensure theory index is built
  const fresh = resolveFreshTheoryContent(note);
  if (!fresh || fresh === note.theoryContent.trim()) {
    return note;
  }

  return { ...note, theoryContent: fresh };
}

export async function enrichStudyNotesLocally(notes: StudyNote[]): Promise<StudyNote[]> {
  return Promise.all(notes.map(enrichStudyNoteLocally));
}

/** Persiste en Firestore solo las notas cuya teoría quedó desactualizada. */
export async function persistStudyNotesReEnrichment(
  userId: string,
  storedNotes: StudyNote[],
  enrichedNotes: StudyNote[],
): Promise<number> {
  const patches = enrichedNotes
    .map((enriched, index) => {
      const stored = storedNotes[index];
      if (!stored || enriched.theoryContent === stored.theoryContent) {
        return null;
      }

      return patchStudyNoteTheoryContent(
        userId,
        enriched.questionId,
        enriched.theoryContent,
      );
    })
    .filter((patch): patch is Promise<void> => patch !== null);

  if (patches.length === 0) {
    return 0;
  }

  await Promise.all(patches);
  return patches.length;
}

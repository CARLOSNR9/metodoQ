import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  type Unsubscribe,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

export type StudyNote = {
  questionId: string;
  topic: string;
  statement: string;
  theoryContent: string;
  examArea?: string;
  savedAt: string | null;
};

export type SaveStudyNoteInput = {
  questionId: string;
  topic: string;
  statement: string;
  theoryContent: string;
  examArea?: string;
};

function studyNotesCollection(userId: string) {
  return collection(getFirebaseDb(), "users", userId, "studyNotes");
}

function studyNoteDoc(userId: string, questionId: string) {
  return doc(getFirebaseDb(), "users", userId, "studyNotes", questionId);
}

export async function isStudyNoteSaved(
  userId: string,
  questionId: string,
): Promise<boolean> {
  const snap = await getDoc(studyNoteDoc(userId, questionId));
  return snap.exists();
}

export async function saveStudyNote(
  userId: string,
  input: SaveStudyNoteInput,
): Promise<void> {
  await setDoc(studyNoteDoc(userId, input.questionId), {
    questionId: input.questionId,
    topic: input.topic,
    statement: input.statement,
    theoryContent: input.theoryContent,
    examArea: input.examArea ?? null,
    savedAt: serverTimestamp(),
  });
}

export async function removeStudyNote(
  userId: string,
  questionId: string,
): Promise<void> {
  await deleteDoc(studyNoteDoc(userId, questionId));
}

function mapStudyNoteDoc(docSnap: { id: string; data: () => Record<string, unknown> }): StudyNote {
  const data = docSnap.data();
  const savedAtRaw = data.savedAt;
  const savedAt =
    savedAtRaw && typeof (savedAtRaw as { toDate?: () => Date }).toDate === "function"
      ? (savedAtRaw as { toDate: () => Date }).toDate().toISOString()
      : typeof savedAtRaw === "string"
        ? savedAtRaw
        : null;

  return {
    questionId: String(data.questionId ?? docSnap.id),
    topic: String(data.topic ?? "Tema"),
    statement: String(data.statement ?? ""),
    theoryContent: String(data.theoryContent ?? ""),
    examArea: data.examArea ? String(data.examArea) : undefined,
    savedAt,
  };
}

export async function getStudyNotes(userId: string): Promise<StudyNote[]> {
  const q = query(studyNotesCollection(userId), orderBy("savedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(mapStudyNoteDoc);
}

export function subscribeStudyNotes(
  userId: string,
  onChange: (notes: StudyNote[]) => void,
  onError?: (error: Error) => void,
): Unsubscribe {
  const q = query(studyNotesCollection(userId), orderBy("savedAt", "desc"));

  return onSnapshot(
    q,
    (snapshot) => onChange(snapshot.docs.map(mapStudyNoteDoc)),
    (error) => onError?.(error),
  );
}

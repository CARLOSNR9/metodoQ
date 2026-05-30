"use client";

import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirebaseDb } from "@/lib/firebase";

export function useStudyNotesCount(userId: string | undefined) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!userId) {
      setCount(0);
      return;
    }

    const notesRef = collection(getFirebaseDb(), "users", userId, "studyNotes");

    return onSnapshot(
      notesRef,
      (snapshot) => setCount(snapshot.size),
      () => setCount(0),
    );
  }, [userId]);

  return count;
}

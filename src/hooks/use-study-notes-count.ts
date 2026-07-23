"use client";

import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirebaseDb } from "@/lib/firebase";

export function useStudyNotesCount(userId: string | undefined) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!userId) {
      setCount(0);
      return;
    }

    let isMounted = true;
    const notesRef = collection(getFirebaseDb(), "users", userId, "studyNotes");
    
    getCountFromServer(notesRef).then((snapshot) => {
      if (isMounted) {
        setCount(snapshot.data().count);
      }
    }).catch(err => {
      console.error("Error fetching study notes count:", err);
      if (isMounted) setCount(0);
    });

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return count;
}

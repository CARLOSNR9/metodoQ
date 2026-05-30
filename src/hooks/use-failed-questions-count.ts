"use client";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";

export function useFailedQuestionsCount(userId: string | undefined) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!userId) {
      setCount(0);
      return;
    }

    const todayKey = getLocalDateKey(new Date());
    const failedQuery = query(
      collection(getFirebaseDb(), "failedQuestions"),
      where("userId", "==", userId),
      where("dateKey", "==", todayKey),
    );

    return onSnapshot(
      failedQuery,
      (snapshot) => {
        const pending = snapshot.docs.filter((docItem) => docItem.data().resolved !== true);
        setCount(pending.length);
      },
      () => setCount(0),
    );
  }, [userId]);

  return count;
}

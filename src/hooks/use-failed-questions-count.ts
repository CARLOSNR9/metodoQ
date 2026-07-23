"use client";

import { collection, getDocs, query, where } from "firebase/firestore";
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

    let isMounted = true;
    const todayKey = getLocalDateKey(new Date());
    const failedQuery = query(
      collection(getFirebaseDb(), "failedQuestions"),
      where("userId", "==", userId),
      where("dateKey", "==", todayKey),
    );

    getDocs(failedQuery).then((snapshot) => {
      if (isMounted) {
        const pending = snapshot.docs.filter((docItem) => docItem.data().resolved !== true);
        setCount(pending.length);
      }
    }).catch(err => {
      console.error("Error fetching failed questions count:", err);
      if (isMounted) setCount(0);
    });
    
    return () => {
      isMounted = false;
    };
  }, [userId]);

  return count;
}

"use client";

import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import type { UserPlan } from "@/lib/auth";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";

interface UserPlanDocument {
  plan?: UserPlan;
}

export function useUserPlan() {
  const [plan, setPlan] = useState<UserPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), async (user) => {
      if (!isMounted) {
        return;
      }

      if (!user) {
        setPlan(null);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const userRef = doc(getFirebaseDb(), "users", user.uid);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data() as UserPlanDocument | undefined;
        setPlan(userData?.plan ?? "FREE");
      } catch (error) {
        console.error("No se pudo obtener el plan del usuario.", error);
        setPlan("FREE");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  return { plan, loading };
}

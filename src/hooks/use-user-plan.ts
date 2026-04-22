"use client";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import type { UserPlan } from "@/lib/auth";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";

interface UserPlanDocument {
  plan?: UserPlan;
  planExpiresAt?: string | null;
  lastActiveAt?: any;
}

export function useUserPlan() {
  const [plan, setPlan] = useState<UserPlan | null>(null);
  const [lastActiveAt, setLastActiveAt] = useState<any>(null);
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
        
        let currentPlan = userData?.plan ?? "FREE";
        const expiresAt = userData?.planExpiresAt;

        // Verificar si el plan ha expirado
        if (expiresAt && new Date(expiresAt) < new Date()) {
          await updateDoc(userRef, {
            plan: "FREE",
            planStartedAt: null,
            planExpiresAt: null,
          });
          currentPlan = "FREE";
        }

        setPlan(currentPlan);
        setLastActiveAt(userData?.lastActiveAt || null);
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

  const [expiresAt, setExpiresAt] = useState<string | null>(null);

  useEffect(() => {
    if (!getFirebaseAuth().currentUser) return;
    const userRef = doc(getFirebaseDb(), "users", getFirebaseAuth().currentUser!.uid);
    getDoc(userRef).then(snap => {
      if (snap.exists()) {
        setExpiresAt(snap.data().planExpiresAt || null);
      }
    });
  }, [plan]);

  return { plan, loading, expiresAt, lastActiveAt };
}

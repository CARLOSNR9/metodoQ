"use client";

import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  getAdminStudentPreviewExpiresAt,
  getAdminStudentPreviewPlan,
} from "@/lib/admin/student-preview";
import type { UserPlan } from "@/lib/auth";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";

interface UserPlanDocument {
  role?: string;
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
        
        const role = userData?.role;
        let currentPlan = getAdminStudentPreviewPlan(
          role,
          user.email,
          userData?.plan ?? "FREE",
        ) as UserPlan;
        const expiresAt = getAdminStudentPreviewExpiresAt(
          role,
          user.email,
          userData?.planExpiresAt ?? null,
        );

        // Verificar si el plan ha expirado — la mutación ocurre en el servidor
        if (
          expiresAt &&
          new Date(expiresAt) < new Date() &&
          currentPlan === (userData?.plan ?? "FREE")
        ) {
          try {
            const idToken = await user.getIdToken();
            const res = await fetch("/api/expire-plan", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${idToken}`,
              },
            });
            const result = await res.json();
            if (result.expired) {
              currentPlan = "FREE";
            }
          } catch (err) {
            console.warn("No se pudo verificar expiración de plan en el servidor:", err);
            // Mostrar como FREE localmente si expiró, aunque el server no haya respondido
            currentPlan = "FREE";
          }
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
    getDoc(userRef).then((snap) => {
      if (!snap.exists()) return;
      const data = snap.data();
      setExpiresAt(
        getAdminStudentPreviewExpiresAt(
          data.role as string | undefined,
          getFirebaseAuth().currentUser?.email ?? null,
          data.planExpiresAt || null,
        ),
      );
    });
  }, [plan]);

  return { plan, loading, expiresAt, lastActiveAt };
}

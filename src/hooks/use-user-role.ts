"use client";

import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { isAdminUser, normalizeUserRole, type UserRole } from "@/lib/roles";

export function useUserRole() {
  const [role, setRole] = useState<UserRole>("student");
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeDoc: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(getFirebaseAuth(), (user) => {
      if (unsubscribeDoc) {
        unsubscribeDoc();
        unsubscribeDoc = null;
      }

      if (!user) {
        setRole("student");
        setEmail(null);
        setLoading(false);
        return;
      }

      setEmail(user.email);
      setLoading(true);

      const userRef = doc(getFirebaseDb(), "users", user.uid);
      unsubscribeDoc = onSnapshot(
        userRef,
        (snap) => {
          const storedRole = snap.exists()
            ? normalizeUserRole(snap.data().role as string | undefined)
            : "student";
          setRole(storedRole);
          setLoading(false);
        },
        () => {
          setRole("student");
          setLoading(false);
        },
      );
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeDoc) {
        unsubscribeDoc();
      }
    };
  }, []);

  const isAdmin = isAdminUser(role, email);

  return { role, email, loading, isAdmin };
}

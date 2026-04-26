"use client";

import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName?: string;
  photoURL?: string;
  goalUniversity?: string;
  attemptedExam?: boolean;
  usedCourses?: boolean;
  onboardingCompleted?: boolean;
  plan?: string;
  planExpiresAt?: string | null;
  createdAt?: any;
}

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeSnapshot: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(getFirebaseAuth(), (user) => {
      if (!user) {
        setProfile(null);
        setLoading(false);
        if (unsubscribeSnapshot) unsubscribeSnapshot();
        return;
      }

      const userRef = doc(getFirebaseDb(), "users", user.uid);
      
      // Usamos onSnapshot para que los cambios (como completar onboarding) se reflejen en tiempo real
      unsubscribeSnapshot = onSnapshot(userRef, (docSnap) => {
        if (docSnap.exists()) {
          setProfile({
            uid: user.uid,
            email: user.email,
            ...docSnap.data()
          } as UserProfile);
        } else {
          // Si el documento no existe todavía (nuevo registro), ponemos data básica
          setProfile({
            uid: user.uid,
            email: user.email,
          } as UserProfile);
        }
        setLoading(false);
      }, (error) => {
        console.error("Error al escuchar perfil de usuario:", error);
        setLoading(false);
      });
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeSnapshot) unsubscribeSnapshot();
    };
  }, []);

  return { profile, loading };
}

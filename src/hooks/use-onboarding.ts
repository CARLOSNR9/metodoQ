"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

export interface OnboardingData {
  goalUniversity?: string;
  attemptedExam?: boolean;
  usedCourses?: boolean;
  onboardingCompleted?: boolean;
}

export function useOnboarding(userId: string | undefined) {
  const [needsOnboarding, setNeedsOnboarding] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const checkOnboardingStatus = async () => {
      try {
        const userDocRef = doc(getFirebaseDb(), "users", userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          // Si el campo no existe (usuarios antiguos) o es falso (usuarios nuevos)
          if (data.onboardingCompleted === false) {
            setNeedsOnboarding(true);
          } else if (data.onboardingCompleted === undefined) {
            // Usuarios antiguos que no pasaron por onboarding, los marcamos como completados
            // para no molestar, o también se puede forzar el onboarding para todos.
            // Según la regla del CEO "Detección de primer ingreso" -> es para usuarios nuevos.
            await updateDoc(userDocRef, { onboardingCompleted: true });
            setNeedsOnboarding(false);
          } else {
            setNeedsOnboarding(false);
          }
        }
      } catch (error) {
        console.error("Error al revisar estado de onboarding:", error);
      } finally {
        setLoading(false);
      }
    };

    checkOnboardingStatus();
  }, [userId]);

  const completeOnboarding = async (data: OnboardingData) => {
    if (!userId) return;
    
    try {
      const userDocRef = doc(getFirebaseDb(), "users", userId);
      await updateDoc(userDocRef, {
        ...data,
        onboardingCompleted: true,
      });
      setNeedsOnboarding(false);
    } catch (error) {
      console.error("Error al guardar datos de onboarding:", error);
      throw error;
    }
  };

  return { needsOnboarding, loading, completeOnboarding };
}

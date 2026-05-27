"use client";

import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { applyDemoStudentProfileEnhancements } from "@/lib/demo/demo-student-profiles";
import type { ManualSaleInfo } from "@/lib/plans/subscription-display";
import type { UccCvInput } from "@/lib/diagnostic/ucc-cv-scorer";

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName?: string;
  photoURL?: string;
  goalUniversity?: string;
  goalSpecialty?: string;
  attemptedExam?: boolean;
  usedCourses?: boolean;
  onboardingCompleted?: boolean;
  plan?: string;
  planStartedAt?: string | null;
  planExpiresAt?: string | null;
  planBillingCycle?: number | null;
  manualSale?: ManualSaleInfo | null;
  streakCount?: number;
  streakLastTrainingDate?: string | null;
  emailOptIn?: boolean;
  browserNudgeOptIn?: boolean;
  createdAt?: unknown;
  attemptsCount?: number;
  cumulativeScore?: number | null;
  lastScore?: number | null;
  lastSessionScore?: number | null;
  totalQuestionsAnswered?: number;
  topicStats?: Record<string, { correct: number; wrong: number }>;
  strengths?: string[];
  weaknesses?: string[];
  avgResponseTime?: number;
  totalCorrectAnswers?: number;
  uccCvProfile?: Partial<UccCvInput>;
  uccPhase2Progress?: {
    interviewScores?: number[];
    psychometricScores?: number[];
    scenariosCompleted?: string[];
    lastInterviewScore?: number;
    lastPsychometricScore?: number;
  };
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
        const base: UserProfile = docSnap.exists()
          ? ({
              uid: user.uid,
              email: user.email,
              ...docSnap.data(),
            } as UserProfile)
          : ({
              uid: user.uid,
              email: user.email,
            } as UserProfile);

        setProfile(
          applyDemoStudentProfileEnhancements(
            base,
            user.email ?? base.email,
          ),
        );
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

"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useUserProfile } from "@/hooks/use-user-profile";
import { DR_Q_EVAL_2_QUESTIONS } from "@/data/evaluaciones/evaluacion-dr-q-2";
import { QuizDrQ } from "@/components/dr-q-eval/quiz-dr-q";

export default function DrQEvaluacionSegundaPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const { profile, loading: isLoadingProfile } = useUserProfile();

  if (isCheckingAuth || isLoadingProfile || !user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-yellow-400" />
      </div>
    );
  }

  // Only Pro users or admin should access this ideally, but we'll render it if they are authenticated.
  // In a real app we would protect this with plan checks.

  return (
    <div className="min-h-[80vh] py-8">
      <QuizDrQ
        questions={DR_Q_EVAL_2_QUESTIONS}
        challengeId="eval2"
        userId={user.uid}
        editionLabel="Segunda Evaluación"
      />
    </div>
  );
}

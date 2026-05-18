export type QuestionOption = {
  id: string;
  label: string;
  text: string;
  /** Etiqueta psicométrica del distractor (solo opciones incorrectas). */
  distractorProfile?: string;
  /** Retroalimentación si el usuario elige esta opción incorrecta. */
  incorrectFeedback?: string;
};

export type TrainingQuestion = {
  id: string;
  topic: string;
  statement: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  keyPoints: string[];
  difficulty?: "easy" | "medium" | "hard";
  tags?: string[];
  active?: boolean;
  /** Área del examen UdeA (blueprint). */
  examArea?: string;
  university?: string;
};

export type TrainingMode = "training" | "diagnostico" | "simulacro" | "daily-pill";

export type SessionType = "training" | "diagnostico" | "simulacro" | "daily-pill";

export type QuestionOption = {
  id: string;
  label: string;
  text: string;
  /** Etiqueta psicométrica del distractor (solo opciones incorrectas). */
  distractorProfile?: string;
  /** Retroalimentación si el usuario elige esta opción incorrecta. */
  incorrectFeedback?: string;
};

/** Estado de revisión editorial por el profesor. */
export type QuestionReviewStatus =
  | "pending"
  | "approved"
  | "needs_changes"
  | "rejected";

export type QuestionSource = "seed" | "manual" | "ai" | "import";

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
  reviewStatus?: QuestionReviewStatus;
  reviewNotes?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  source?: QuestionSource;
  /** Enlace a teoría completa (Notion, Drive, etc.) o ruta interna `/teoria/...`. */
  theoryUrl?: string;
  /** Contenido largo de teoría; si no hay `theoryUrl`, se expone en `/teoria/[id]`. */
  theoryContent?: string;
};

/** Pregunta en el panel de revisión (Firestore y/o banco en código). */
export type QuestionAdminRecord = TrainingQuestion & {
  firestoreId: string;
  inFirestore: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type TrainingMode = "training" | "diagnostico" | "simulacro" | "daily-pill";

export type SessionType = "training" | "diagnostico" | "simulacro" | "daily-pill";

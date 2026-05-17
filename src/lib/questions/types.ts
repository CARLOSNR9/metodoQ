export type QuestionOption = {
  id: string;
  label: string;
  text: string;
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
};

export type TrainingMode = "training" | "diagnostico" | "simulacro" | "daily-pill";

export type SessionType = "training" | "diagnostico" | "simulacro" | "daily-pill";

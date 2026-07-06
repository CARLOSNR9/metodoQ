"use server";

import { FieldValue } from "firebase-admin/firestore";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

export type StudentReportInput = {
  questionId: string;
  category: string;
  comments: string;
  userId: string | null;
  topic?: string;
};

export async function submitStudentQuestionReportAction(input: StudentReportInput) {
  const trimmedId = input.questionId.trim();
  if (!trimmedId) {
    return { error: "Código de pregunta no válido." };
  }

  const now = new Date().toISOString();
  const ref = getFirebaseAdminDb().collection("question_reports").doc(trimmedId);

  try {
    const studentReport = {
      userId: input.userId,
      category: input.category,
      comments: input.comments,
      createdAt: now,
    };

    // Use set with merge: true to create if it doesn't exist, and update if it does.
    await ref.set(
      {
        questionId: trimmedId,
        topic: input.topic || "Sin tema",
        status: "pending", // Re-open the report if it was dismissed/reviewed
        updatedAt: now,
        reportsList: FieldValue.arrayUnion(studentReport),
      },
      { merge: true },
    );

    return { success: true };
  } catch (e) {
    console.error("Error submitting student report:", e);
    return { error: "No se pudo reportar la pregunta." };
  }
}

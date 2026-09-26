"use server";

import { FieldValue } from "firebase-admin/firestore";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";

export type StudentReportInput = {
  questionId: string;
  category: string;
  comments: string;
  topic?: string;
  /**
   * ID token de Firebase del alumno (opcional: los visitantes del demo pueden
   * reportar de forma anónima). El usuario del reporte sale SIEMPRE del token
   * verificado en servidor, nunca de un uid enviado por el cliente.
   */
  idToken?: string | null;
};

/** IDs de pregunta: alfanuméricos con . _ : - (sin "/" para no salir de la colección). */
const QUESTION_ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,149}$/;
const MAX_CATEGORY_LENGTH = 100;
const MAX_COMMENTS_LENGTH = 2000;
const MAX_TOPIC_LENGTH = 200;

export async function submitStudentQuestionReportAction(input: StudentReportInput) {
  const trimmedId = String(input.questionId ?? "").trim();
  if (!QUESTION_ID_PATTERN.test(trimmedId)) {
    return { error: "Código de pregunta no válido." };
  }

  const category = String(input.category ?? "").trim().slice(0, MAX_CATEGORY_LENGTH);
  if (!category) {
    return { error: "Selecciona un motivo." };
  }
  const comments = String(input.comments ?? "").slice(0, MAX_COMMENTS_LENGTH);
  const topic = String(input.topic ?? "").trim().slice(0, MAX_TOPIC_LENGTH);

  let userId: string | null = null;
  let userEmail: string | null = null;
  if (input.idToken) {
    try {
      const decoded = await getFirebaseAdminAuth().verifyIdToken(input.idToken);
      userId = decoded.uid;
      userEmail = decoded.email ?? null;
    } catch {
      return { error: "Tu sesión ha caducado. Recarga la página e inténtalo de nuevo." };
    }
  }

  const now = new Date().toISOString();
  const ref = getFirebaseAdminDb().collection("question_reports").doc(trimmedId);

  try {
    const studentReport = {
      userId,
      userEmail,
      category,
      comments,
      createdAt: now,
    };

    const docSnap = await ref.get();
    if (!docSnap.exists) {
      await ref.set({
        questionId: trimmedId,
        topic: topic || "Sin tema",
        status: "pending",
        createdAt: now,
        updatedAt: now,
        reportsList: [studentReport],
      });
    } else {
      await ref.update({
        status: "pending",
        updatedAt: now,
        reportsList: FieldValue.arrayUnion(studentReport),
      });
    }

    return { success: true };
  } catch (e) {
    console.error("Error submitting student report:", e);
    return { error: "No se pudo reportar la pregunta." };
  }
}

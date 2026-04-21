import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

type SaveDemoResultInput = {
  userId: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
};

export type DemoResultItem = {
  id: string;
  scorePercentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  fechaLabel: string;
};

export async function saveDemoResult({
  userId,
  scorePercentage,
  correctAnswers,
  wrongAnswers,
}: SaveDemoResultInput) {
  const db = getFirebaseDb();

  return addDoc(collection(db, "results"), {
    userId,
    scorePercentage,
    correctAnswers,
    wrongAnswers,
    fecha: serverTimestamp(),
  });
}

export async function getUserDemoResults(userId: string): Promise<DemoResultItem[]> {
  const db = getFirebaseDb();
  const resultsQuery = query(
    collection(db, "results"),
    where("userId", "==", userId),
    orderBy("fecha", "desc"),
  );

  const snapshot = await getDocs(resultsQuery);

  return snapshot.docs.map((docItem) => {
    const data = docItem.data() as {
      scorePercentage?: number;
      correctAnswers?: number;
      wrongAnswers?: number;
      fecha?: { toDate?: () => Date };
    };

    const date = data.fecha?.toDate ? data.fecha.toDate() : null;

    return {
      id: docItem.id,
      scorePercentage: data.scorePercentage ?? 0,
      correctAnswers: data.correctAnswers ?? 0,
      wrongAnswers: data.wrongAnswers ?? 0,
      fechaLabel: date
        ? new Intl.DateTimeFormat("es-ES", {
            dateStyle: "short",
            timeStyle: "short",
          }).format(date)
        : "Fecha no disponible",
    };
  });
}

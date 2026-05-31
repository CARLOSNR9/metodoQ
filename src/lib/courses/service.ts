import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

const COLLECTION = "courses";

export async function getEnrolledCourseIds(userId: string): Promise<string[]> {
  if (!userId) return [];

  const db = getFirebaseDb();
  const coursesQuery = query(
    collection(db, COLLECTION),
    where("studentIds", "array-contains", userId),
  );

  const snap = await getDocs(coursesQuery);
  return snap.docs
    .filter((doc) => doc.data().isActive !== false)
    .map((doc) => doc.id);
}

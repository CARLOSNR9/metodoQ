import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  Timestamp,
  serverTimestamp 
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { Class } from "./types";

const COLLECTION_NAME = "classes";

/**
 * Crea una nueva clase en Firestore.
 */
export async function createClass(classData: Omit<Class, "id" | "createdAt">) {
  const db = getFirebaseDb();
  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    ...classData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

/**
 * Obtiene todas las clases ordenadas por fecha.
 * @param ascending - Si es true, ordena de la más antigua a la más reciente.
 */
export async function getClasses(ascending: boolean = true) {
  const db = getFirebaseDb();
  const classesQuery = query(
    collection(db, COLLECTION_NAME),
    orderBy("date", ascending ? "asc" : "desc")
  );
  
  const querySnapshot = await getDocs(classesQuery);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Class));
}

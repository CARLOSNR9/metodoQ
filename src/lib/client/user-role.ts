import { doc, getDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { normalizeUserRole, type UserRole } from "@/lib/roles";

export async function fetchUserRole(uid: string): Promise<UserRole> {
  const snap = await getDoc(doc(getFirebaseDb(), "users", uid));
  if (!snap.exists()) {
    return "student";
  }
  return normalizeUserRole(snap.data().role as string | undefined);
}

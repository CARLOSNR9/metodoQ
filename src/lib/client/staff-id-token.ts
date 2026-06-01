import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

export async function getStaffIdToken(): Promise<string> {
  const auth = getFirebaseAuth();

  if (auth.currentUser) {
    return (await auth.currentUser.getIdToken()) ?? "";
  }

  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      unsubscribe();
      if (!user) {
        resolve("");
        return;
      }
      resolve((await user.getIdToken()) ?? "");
    });
  });
}

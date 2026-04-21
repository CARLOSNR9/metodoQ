import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";

export type UserPlan = "FREE" | "PRO" | "PRO_PLUS";

export interface UserDocument {
  uid: string;
  email: string;
  plan: UserPlan;
  createdAt: ReturnType<typeof serverTimestamp>;
  streakCount: number;
  streakLastTrainingDate: string | null;
  strengths: string[];
  weaknesses: string[];
  avgResponseTime: number;
  lastScore: number | null;
  attemptsCount: number;
  topicStats: Record<string, { correct: number; wrong: number }>;
}

export async function loginWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
}

export async function registerWithEmail(email: string, password: string) {
  const credential = await createUserWithEmailAndPassword(
    getFirebaseAuth(),
    email,
    password,
  );

  const userDocRef = doc(getFirebaseDb(), "users", credential.user.uid);
  const userDoc: UserDocument = {
    uid: credential.user.uid,
    email: credential.user.email ?? email,
    plan: "FREE",
    createdAt: serverTimestamp(),
    streakCount: 0,
    streakLastTrainingDate: null,
    strengths: [],
    weaknesses: [],
    avgResponseTime: 0,
    lastScore: null,
    attemptsCount: 0,
    topicStats: {},
  };

  await setDoc(userDocRef, userDoc, { merge: true });
  return credential;
}

export async function logoutUser() {
  return signOut(getFirebaseAuth());
}

export async function activateProPlanForCurrentUser() {
  const auth = getFirebaseAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("No hay usuario autenticado para actualizar el plan.");
  }

  const userDocRef = doc(getFirebaseDb(), "users", currentUser.uid);
  await setDoc(
    userDocRef,
    {
      plan: "PRO",
      planActivatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

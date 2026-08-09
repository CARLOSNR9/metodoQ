import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getCountFromServer,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { resolveLoginIdentifier } from "@/lib/resolve-login-identifier";

export type UserPlan = "FREE" | "BASICO" | "PRO" | "RESIDENTE";

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
  lastSessionScore?: number | null;
  cumulativeScore?: number | null;
  totalCorrectAnswers?: number;
  totalQuestionsAnswered?: number;
  attemptsCount: number;
  topicStats: Record<string, { correct: number; wrong: number }>;
  referralCode: string;
  referredBy: string | null;
  planStartedAt: string | null;
  planExpiresAt: string | null;
  planBillingCycle?: number | null;
  manualSale?: {
    negotiatedPriceCOP: number;
    listPriceCOP: number;
    negotiatorName: string | null;
    notes: string | null;
    recordedAt: string;
    recordedByUid: string;
  } | null;
  emailOptIn: boolean;
  lastActiveAt: ReturnType<typeof serverTimestamp> | null;
  achievements: string[];
  onboardingCompleted?: boolean;
  requiresPasswordChange?: boolean;
  goalUniversity?: string;
  goalSpecialty?: string;
  attemptedExam?: boolean;
  usedCourses?: boolean;
  role?: "student" | "professor" | "moderator" | "admin";
}

export function generateReferralCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Factory para crear el documento inicial de un usuario nuevo.
 * Fuente única de verdad — cualquier campo nuevo se agrega aquí.
 */
export function createDefaultUserDoc(
  uid: string,
  email: string,
  options?: { referredByCode?: string | null },
): UserDocument {
  return {
    uid,
    email,
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
    referralCode: generateReferralCode(),
    referredBy: options?.referredByCode || null,
    planStartedAt: null,
    planExpiresAt: null,
    emailOptIn: true,
    lastActiveAt: serverTimestamp(),
    achievements: [],
    onboardingCompleted: false,
    role: "student",
  };
}

export async function loginWithEmail(email: string, password: string) {
  const resolvedEmail = resolveLoginIdentifier(email);
  const auth = getFirebaseAuth();
  const { setPersistence, browserSessionPersistence } = await import("firebase/auth");
  await setPersistence(auth, browserSessionPersistence);
  
  return signInWithEmailAndPassword(
    auth,
    resolvedEmail,
    password,
  );
}

export async function loginWithGoogle(): Promise<{
  credential: Awaited<ReturnType<typeof signInWithPopup>>;
  isNewUser: boolean;
}> {
  const provider = new GoogleAuthProvider();
  const auth = getFirebaseAuth();
  const { setPersistence, browserSessionPersistence } = await import("firebase/auth");
  await setPersistence(auth, browserSessionPersistence);
  
  const credential = await signInWithPopup(auth, provider);
  const user = credential.user;

  // Validar configuración básica antes de proceder
  const db = getFirebaseDb();
  if (!db) {
    throw new Error("Firestore no está inicializado. Verifica tus variables de entorno.");
  }

  // Verificar si el documento del usuario ya existe en Firestore
  const userDocRef = doc(db, "users", user.uid);
  let userDocSnap;
  
  try {
    userDocSnap = await getDoc(userDocRef);
  } catch (error: any) {
    console.error("Error al obtener documento de usuario en Firestore:", error);
    // Si falla por red, el mensaje suele contener 'offline'
    throw error;
  }

  const isNewUser = !userDocSnap.exists();

  if (isNewUser) {
    const newUserDoc = createDefaultUserDoc(user.uid, user.email ?? "");
    try {
      await setDoc(userDocRef, newUserDoc);
    } catch (error: any) {
      console.error("Error al crear nuevo documento de usuario en Firestore:", error);
      throw error;
    }
  } else {
    // Si existe, actualizar última actividad
    try {
      await updateDoc(userDocRef, {
        lastActiveAt: serverTimestamp(),
      });
    } catch (error: any) {
      console.warn("No se pudo actualizar lastActiveAt, pero el login fue exitoso:", error);
      // No bloqueamos el login si solo falla el update de actividad
    }
  }

  return { credential, isNewUser };
}

export async function loginWithFacebook(): Promise<{
  credential: Awaited<ReturnType<typeof signInWithPopup>>;
  isNewUser: boolean;
}> {
  const provider = new FacebookAuthProvider();
  const auth = getFirebaseAuth();
  const { setPersistence, browserSessionPersistence } = await import("firebase/auth");
  await setPersistence(auth, browserSessionPersistence);
  
  const credential = await signInWithPopup(auth, provider);
  const user = credential.user;

  const userDocRef = doc(getFirebaseDb(), "users", user.uid);
  const userDocSnap = await getDoc(userDocRef);
  const isNewUser = !userDocSnap.exists();

  if (isNewUser) {
    const newUserDoc = createDefaultUserDoc(user.uid, user.email ?? "");
    await setDoc(userDocRef, newUserDoc);
  } else {
    await updateDoc(userDocRef, {
      lastActiveAt: serverTimestamp(),
    });
  }

  return { credential, isNewUser };
}

export async function registerWithEmail(
  email: string,
  password: string,
  referredByCode?: string | null,
) {
  const auth = getFirebaseAuth();
  const { setPersistence, browserSessionPersistence } = await import("firebase/auth");
  await setPersistence(auth, browserSessionPersistence);
  
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const userDocRef = doc(getFirebaseDb(), "users", credential.user.uid);
  const userDoc = createDefaultUserDoc(
    credential.user.uid,
    credential.user.email ?? email,
    { referredByCode },
  );

  await setDoc(userDocRef, userDoc, { merge: true });

  // Procesar recompensa de referido en el servidor (evita que el cliente modifique plan)
  if (referredByCode) {
    try {
      const idToken = await credential.user.getIdToken();
      await fetch("/api/referral-reward", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ referralCode: referredByCode }),
      });
    } catch (e) {
      console.error("Error al procesar recompensa de referido:", e);
    }
  }

  return credential;
}

export async function logoutUser() {
  const { clearPomodoroAutostart, clearPomodoroPersisted } = await import(
    "@/lib/study/pomodoro-session"
  );
  const uid = getFirebaseAuth().currentUser?.uid;
  clearPomodoroAutostart();
  clearPomodoroPersisted(uid);
  clearPomodoroPersisted();
  return signOut(getFirebaseAuth());
}

// REMOVED: activateProPlanForCurrentUser — plan activation must happen server-side
// via Stripe webhook or Admin SDK only. See /api/payments/webhook/route.ts.

// REMOVED: updateUserSubscription — same reason. Use admin panel or Stripe webhook.

export async function getReferralCount(referralCode: string) {
  const usersRef = collection(getFirebaseDb(), "users");
  const q = query(usersRef, where("referredBy", "==", referralCode));
  const snapshot = await getCountFromServer(q);
  return snapshot.data().count;
}

export async function updateLastActiveDate(userId: string) {
  const userDocRef = doc(getFirebaseDb(), "users", userId);
  await updateDoc(userDocRef, {
    lastActiveAt: serverTimestamp(),
  });
}

import {
  resolveActivityStatus,
  type ActivityStatus,
} from "@/lib/activity-status";

export type { ActivityStatus };

export function getUserActivityStatus(lastActiveAt: unknown): ActivityStatus {
  return resolveActivityStatus(
    lastActiveAt as Parameters<typeof resolveActivityStatus>[0],
  );
}

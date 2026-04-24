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
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { trackRewardUnlocked } from "@/lib/analytics/events";

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
  referralCode: string;
  referredBy: string | null;
  planStartedAt: string | null;
  planExpiresAt: string | null;
  lastActiveAt: ReturnType<typeof serverTimestamp> | null;
  achievements: string[];
}

export function generateReferralCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function loginWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const credential = await signInWithPopup(getFirebaseAuth(), provider);
  const user = credential.user;

  // Verificar si el documento del usuario ya existe en Firestore
  const userDocRef = doc(getFirebaseDb(), "users", user.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    // Si no existe, crear perfil inicial similar al de email
    const newUserDoc: UserDocument = {
      uid: user.uid,
      email: user.email ?? "",
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
      referredBy: null, // Podría extenderse para detectar referral en Google login también
      planStartedAt: null,
      planExpiresAt: null,
      lastActiveAt: serverTimestamp(),
      achievements: [],
    };
    await setDoc(userDocRef, newUserDoc);
  } else {
    // Si existe, actualizar última actividad
    await updateDoc(userDocRef, {
      lastActiveAt: serverTimestamp(),
    });
  }

  return credential;
}

export async function loginWithFacebook() {
  const provider = new FacebookAuthProvider();
  const credential = await signInWithPopup(getFirebaseAuth(), provider);
  const user = credential.user;

  const userDocRef = doc(getFirebaseDb(), "users", user.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const newUserDoc: UserDocument = {
      uid: user.uid,
      email: user.email ?? "",
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
      referredBy: null,
      planStartedAt: null,
      planExpiresAt: null,
      lastActiveAt: serverTimestamp(),
      achievements: [],
    };
    await setDoc(userDocRef, newUserDoc);
  } else {
    await updateDoc(userDocRef, {
      lastActiveAt: serverTimestamp(),
    });
  }

  return credential;
}

export async function registerWithEmail(
  email: string,
  password: string,
  referredByCode?: string | null,
) {
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
    referralCode: generateReferralCode(),
    referredBy: referredByCode || null,
    planStartedAt: null,
    planExpiresAt: null,
    lastActiveAt: serverTimestamp(),
    achievements: [],
  };

  await setDoc(userDocRef, userDoc, { merge: true });

  // Lógica de recompensa para el referente
  if (referredByCode) {
    try {
      const usersRef = collection(getFirebaseDb(), "users");
      
      // Contar cuántos referidos tiene ahora el referente
      const referralQuery = query(usersRef, where("referredBy", "==", referredByCode));
      const referrerSnap = await getCountFromServer(referralQuery);
      const count = referrerSnap.data().count;

      // Si llegó exactamente a 3, darle 7 días de PRO
      if (count === 3) {
        const q = query(usersRef, where("referralCode", "==", referredByCode));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const referrerDoc = querySnapshot.docs[0];
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 7);

          await updateDoc(referrerDoc.ref, {
            plan: "PRO",
            planExpiresAt: expirationDate.toISOString(),
          });

          trackRewardUnlocked({ userId: referrerDoc.id, rewardType: "PRO_7_DAYS" });
        }
      }
    } catch (e) {
      console.error("Error al procesar recompensa:", e);
    }
  }

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
      planStartedAt: new Date().toISOString(),
      planExpiresAt: null, // O definir una fecha si es necesario
    },
    { merge: true },
  );
}

export async function updateUserSubscription(
  userId: string,
  plan: UserPlan,
  durationDays: number | null = null,
) {
  const userRef = doc(getFirebaseDb(), "users", userId);
  const now = new Date();
  const startDate = now.toISOString();
  let endDate: string | null = null;

  if (durationDays) {
    const end = new Date(now);
    end.setDate(end.getDate() + durationDays);
    endDate = end.toISOString();
  }

  await updateDoc(userRef, {
    plan,
    planStartedAt: startDate,
    planExpiresAt: endDate,
  });
}

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

export type ActivityStatus = "activo" | "riesgo" | "inactivo";

export function getUserActivityStatus(lastActiveAt: any): ActivityStatus {
  if (!lastActiveAt) return "inactivo";

  const lastActiveDate =
    typeof lastActiveAt.toDate === "function" ? lastActiveAt.toDate() : new Date(lastActiveAt);
  const now = new Date();
  const diffInMs = now.getTime() - lastActiveDate.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays >= 5) return "inactivo";
  if (diffInDays >= 2) return "riesgo";
  return "activo";
}

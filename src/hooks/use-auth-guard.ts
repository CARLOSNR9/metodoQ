"use client";

import { onAuthStateChanged, type User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getFirebaseAuth } from "@/lib/firebase";

export function useAuthGuard(redirectTo = "/login") {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    try {
      unsubscribe = onAuthStateChanged(getFirebaseAuth(), (currentUser) => {
        if (!currentUser) {
          setUser(null);
          setIsCheckingAuth(false);
          router.replace(redirectTo);
          return;
        }

        setUser(currentUser);
        setIsCheckingAuth(false);
      });
    } catch (error) {
      // Evita crash total de la ruta cuando Firebase no inicializa en runtime.
      console.error("No se pudo inicializar Firebase Auth.", error);
      setUser(null);
      setIsCheckingAuth(false);
      router.replace(redirectTo);
    }

    return () => {
      unsubscribe?.();
    };
  }, [redirectTo, router]);

  return { user, isCheckingAuth };
}

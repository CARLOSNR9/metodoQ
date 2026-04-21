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
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setIsCheckingAuth(false);
        router.replace(redirectTo);
        return;
      }

      setUser(currentUser);
      setIsCheckingAuth(false);
    });

    return unsubscribe;
  }, [redirectTo, router]);

  return { user, isCheckingAuth };
}

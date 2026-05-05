"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getReferralCount, generateReferralCode } from "@/lib/auth";

export function useReferralStats(userId: string | undefined) {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [referralCount, setReferralCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    async function fetchStats() {
      setLoading(true);
      try {
        const db = getFirebaseDb();
        const userRef = doc(db, "users", userId!);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          const data = userSnap.data();
          let code = data.referralCode;
          
          // AUTO-REPARACIÓN: Si el usuario no tiene código, lo generamos ahora
          if (!code) {
            code = generateReferralCode();
            await updateDoc(userRef, { referralCode: code });
            console.log("Referral code generated and saved for user:", userId);
          }

          setReferralCode(code);
          
          if (code) {
            const count = await getReferralCount(code);
            setReferralCount(count);
          }
        }
      } catch (error) {
        console.error("Error fetching referral stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [userId]);

  return { referralCode, referralCount, loading };
}


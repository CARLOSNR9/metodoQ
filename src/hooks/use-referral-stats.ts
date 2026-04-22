"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getReferralCount } from "@/lib/auth";

export function useReferralStats(userId: string | undefined) {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [referralCount, setReferralCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    async function fetchStats() {
      setLoading(true);
      try {
        const userRef = doc(getFirebaseDb(), "users", userId!);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          const data = userSnap.data();
          const code = data.referralCode;
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

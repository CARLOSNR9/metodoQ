"use client";

import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, limit, orderBy, deleteDoc, doc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
type AchievementNotificationProps = {
  userId: string;
};

export function AchievementNotification({ userId }: AchievementNotificationProps) {
  const [notification, setNotification] = useState<{ id: string; message: string } | null>(null);

  useEffect(() => {
    if (!userId) return;

    const db = getFirebaseDb();
    const q = query(
      collection(db, "notifications"),
      where("userId", "==", userId),
      where("type", "==", "ACHIEVEMENT"),
      where("read", "==", false),
      orderBy("createdAt", "desc"),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docItem = snapshot.docs[0];
        setNotification({ id: docItem.id, message: docItem.data().message });
      } else {
        setNotification(null);
      }
    });

    return () => unsubscribe();
  }, [userId]);

  const dismiss = async () => {
    if (!notification) return;
    try {
      // Marcamos como leído o borramos
      await deleteDoc(doc(getFirebaseDb(), "notifications", notification.id));
      setNotification(null);
    } catch (error) {
      console.error("Error dismiss notification:", error);
    }
  };

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[90%] -translate-x-1/2 animate-in fade-in slide-in-from-bottom-10 sm:right-6 sm:left-auto sm:w-80 sm:translate-x-0">
      <div className="relative overflow-hidden rounded-2xl border border-mq-accent/30 bg-[#0A1F44]/90 p-4 shadow-[0_20px_50px_-20px_rgba(0,209,255,0.5)] backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mq-accent/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-mq-accent"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-mq-accent">
              Logro desbloqueado
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {notification.message}
            </p>
          </div>
          <button 
            onClick={dismiss}
            className="rounded-lg p-1 text-mq-muted transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        
        {/* Animated background glow */}
        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-mq-accent/10 blur-2xl" />
      </div>
    </div>
  );
}

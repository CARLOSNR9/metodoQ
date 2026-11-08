"use client";

import { useCallback, useEffect, useState } from "react";
import { FieldPath, deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

/**
 * Fichas que el estudiante marcó como dominadas, en su documento de usuario:
 * `users/{uid}.{field}` = { cardId: fecha ISO }. Un campo por módulo para que
 * el progreso del general y el del MIR no se mezclen.
 */
export type UltraProgressField = "ultraResumenes" | "mirUltraResumenes";
export type UltraMastered = Record<string, string>;

export async function getUltraMastered(userId: string, field: UltraProgressField): Promise<UltraMastered> {
  const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
  return (snap.data()?.[field] ?? {}) as UltraMastered;
}

export async function setUltraMastered(
  userId: string,
  field: UltraProgressField,
  cardId: string,
  mastered: boolean,
): Promise<void> {
  const ref = doc(getFirebaseDb(), "users", userId);
  if (mastered) {
    await setDoc(ref, { [field]: { [cardId]: new Date().toISOString() } }, { merge: true });
  } else {
    await updateDoc(ref, new FieldPath(field, cardId), deleteField());
  }
}

/** Progreso con actualización optimista (si falla el guardado, se revierte). */
export function useUltraProgress(userId: string | null, field: UltraProgressField) {
  const [mastered, setMastered] = useState<UltraMastered | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    getUltraMastered(userId, field)
      .then((loaded) => {
        if (!cancelled) setMastered(loaded);
      })
      .catch((loadError) => {
        console.error("No se pudo leer el progreso de los ultra resúmenes.", loadError);
        if (!cancelled) setMastered({});
      });
    return () => {
      cancelled = true;
    };
  }, [userId, field]);

  const toggle = useCallback(
    async (cardId: string, value: boolean) => {
      if (!userId) return;
      setError(null);
      setMastered((current) => {
        const next = { ...(current ?? {}) };
        if (value) next[cardId] = new Date().toISOString();
        else delete next[cardId];
        return next;
      });
      try {
        await setUltraMastered(userId, field, cardId, value);
      } catch (saveError) {
        console.error("No se pudo guardar la ficha.", saveError);
        setError("No se pudo guardar. Revisa tu conexión e inténtalo de nuevo.");
        setMastered((current) => {
          const next = { ...(current ?? {}) };
          if (value) delete next[cardId];
          else next[cardId] = new Date().toISOString();
          return next;
        });
      }
    },
    [userId, field],
  );

  return { mastered, toggle, error };
}

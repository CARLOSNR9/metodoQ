"use server";

import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { hasMirAccess, type MirAccessInfo } from "@/lib/mir/access";
import {
  buildMirWeeklyRanking,
  getWeekDateKeys,
  isValidDateKey,
  type MirRankingEntry,
} from "@/lib/mir/weekly-ranking";

export type MirWeeklyRankingResult =
  | { error: string }
  | { joined: false; activeCount: number }
  | { joined: true; top: MirRankingEntry[]; me: MirRankingEntry | null; activeCount: number };

/**
 * Ranking semanal MIR. Solo para alumnos con acceso MIR vigente; quien no se
 * ha unido solo ve cuántos participan (para ver el ranking hay que estar en
 * él). `mondayKey` es el lunes de la semana en la hora local del alumno, la
 * misma con la que se guarda `mirAnsweredByDay`.
 */
export async function getMirWeeklyRankingAction(input: {
  idToken: string;
  mondayKey: string;
}): Promise<MirWeeklyRankingResult> {
  let callerUid: string;
  try {
    callerUid = (await getFirebaseAdminAuth().verifyIdToken(String(input?.idToken ?? ""), true)).uid;
  } catch {
    return { error: "Tu sesión ha caducado. Recarga la página e inténtalo de nuevo." };
  }

  if (!isValidDateKey(input?.mondayKey)) {
    return { error: "Semana no válida." };
  }

  try {
    const db = getFirebaseAdminDb();
    const caller = (await db.collection("users").doc(callerUid).get()).data() ?? {};
    if (!hasMirAccess(caller.mirAccess as MirAccessInfo)) {
      return { error: "El ranking es para alumnos del módulo MIR." };
    }

    const snapshot = await db.collection("users").where("mirRankingOptIn", "==", true).get();
    const participants = snapshot.docs
      .map((userDoc) => ({ uid: userDoc.id, data: userDoc.data() }))
      .filter(({ data }) => hasMirAccess(data.mirAccess as MirAccessInfo))
      .map(({ uid, data }) => ({ uid, alias: data.mirRankingAlias, answeredByDay: data.mirAnsweredByDay }));

    const ranking = buildMirWeeklyRanking(participants, callerUid, getWeekDateKeys(input.mondayKey));
    if (caller.mirRankingOptIn !== true) {
      return { joined: false, activeCount: ranking.activeCount };
    }
    return { joined: true, ...ranking };
  } catch (error) {
    console.error("No se pudo calcular el ranking semanal MIR.", error);
    return { error: "No se pudo cargar el ranking. Inténtalo más tarde." };
  }
}

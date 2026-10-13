import { beforeEach, describe, expect, it, vi } from "vitest";
import { resetFakeFirebase, store, verifyCalls } from "./fake-firebase";

vi.mock("@/lib/server/firebase-admin", async () => (await import("./fake-firebase")).fakeFirebaseAdmin);

const { getMirWeeklyRankingAction } = await import("@/app/actions/mir-ranking-actions");

const MIR_ACCESS = { active: true, purchasedAt: "2026-09-01", expiresAt: null };
const monday = "2026-10-12";

function addUser(uid: string, data: Record<string, unknown>) {
  store.users[uid] = { ...store.users[uid], ...data };
}

beforeEach(() => {
  resetFakeFirebase();
  addUser("student-uid", { mirAccess: MIR_ACCESS, mirRankingOptIn: true, mirRankingAlias: "Yo", mirAnsweredByDay: { [monday]: 12 } });
  addUser("other-1", { email: "otro@example.com", mirAccess: MIR_ACCESS, mirRankingOptIn: true, mirRankingAlias: "Rival", mirAnsweredByDay: { [monday]: 30 } });
  addUser("hidden", { mirAccess: MIR_ACCESS, mirRankingOptIn: false, mirRankingAlias: "Oculto", mirAnsweredByDay: { [monday]: 99 } });
  addUser("expired", { mirAccess: { active: false, purchasedAt: null, expiresAt: null }, mirRankingOptIn: true, mirRankingAlias: "Vencido", mirAnsweredByDay: { [monday]: 80 } });
});

describe("getMirWeeklyRankingAction", () => {
  it("rechaza sin token o con token inválido, comprobando revocación", async () => {
    expect(await getMirWeeklyRankingAction({ idToken: "", mondayKey: monday })).toHaveProperty("error");
    expect(await getMirWeeklyRankingAction({ idToken: "tok-forged", mondayKey: monday })).toHaveProperty("error");
    expect(await getMirWeeklyRankingAction({ idToken: "tok-revoked", mondayKey: monday })).toHaveProperty("error");
    expect(verifyCalls.every((call) => call.checkRevoked === true)).toBe(true);
  });

  it("rechaza a quien no tiene acceso MIR y fechas no válidas", async () => {
    expect(await getMirWeeklyRankingAction({ idToken: "tok-prof", mondayKey: monday })).toHaveProperty("error");
    expect(await getMirWeeklyRankingAction({ idToken: "tok-student", mondayKey: "../x" })).toHaveProperty("error");
  });

  it("solo incluye a quien se unió y tiene acceso vigente, sin uid ni correo", async () => {
    const result = await getMirWeeklyRankingAction({ idToken: "tok-student", mondayKey: monday });
    expect(result).toMatchObject({ joined: true, activeCount: 2 });
    if (!("joined" in result) || !result.joined) throw new Error("esperaba ranking");
    expect(result.top.map((entry) => entry.alias)).toEqual(["Rival", "Yo"]);
    expect(result.me).toMatchObject({ rank: 2, isMe: true });
    const json = JSON.stringify(result);
    for (const leaked of ["other-1", "student-uid", "otro@example.com", "Oculto", "Vencido"]) {
      expect(json).not.toContain(leaked);
    }
  });

  it("quien no se ha unido solo ve cuántos compiten", async () => {
    addUser("student-uid", { mirRankingOptIn: false });
    const result = await getMirWeeklyRankingAction({ idToken: "tok-student", mondayKey: monday });
    expect(result).toEqual({ joined: false, activeCount: 1 });
  });
});

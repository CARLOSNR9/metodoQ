import { beforeEach, describe, expect, it, vi } from "vitest";
import { TOKENS, authCreationTimes, resetFakeFirebase, store, verifyCalls } from "./fake-firebase";

vi.mock("@/lib/server/firebase-admin", async () => (await import("./fake-firebase")).fakeFirebaseAdmin);

const { POST } = await import("@/app/api/referral-reward/route");
const { hasActivePaidPlan, REWARD_DAYS } = await import("@/lib/server/referrals");

const CODE = "ABC123";
const DAY_MS = 24 * 60 * 60 * 1000;
let accountSeq = 0;

/** Referente con el código CODE (estudiante FREE salvo que se indique otra cosa). */
function createReferrer(data: Record<string, unknown> = {}) {
  store.users["referrer-uid"] = { role: "student", plan: "FREE", referralCode: CODE, ...data };
}

/** Cuenta nueva (o antigua) que se registró indicando `referredBy`. */
function createAccount({
  referredBy = CODE,
  ageMs = 0,
  uid = `new-${++accountSeq}`,
}: { referredBy?: string | null; ageMs?: number; uid?: string } = {}) {
  const token = `tok-${uid}`;
  TOKENS[token] = { uid, email: `${uid}@example.com` };
  authCreationTimes[uid] = new Date(Date.now() - ageMs).toUTCString();
  store.users[uid] = { role: "student", plan: "FREE", referralCode: `Z${accountSeq}`.padEnd(6, "0"), referredBy };
  return token;
}

async function claim(token: string | null, body: unknown = { referralCode: CODE }) {
  const response = await POST(
    new Request("https://metodoq.test/api/referral-reward", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    }),
  );
  return { status: response.status, body: (await response.json()) as Record<string, unknown> };
}

const referrer = () => store.users["referrer-uid"];
const rewardDoc = () => store.referral_rewards?.["referrer-uid"];

beforeEach(() => {
  resetFakeFirebase();
});

describe("POST /api/referral-reward: autenticación", () => {
  it("exige un ID token válido y no revocado", async () => {
    createReferrer();
    expect((await claim(null)).status).toBe(401);
    expect((await claim("tok-forged")).status).toBe(401);
    expect((await claim("tok-revoked")).status).toBe(401);
    const token = createAccount();
    await claim(token);
    expect(verifyCalls.at(-1)).toEqual({ token, checkRevoked: true });
  });

  it("no revela el uid del referente", async () => {
    createReferrer();
    for (let i = 0; i < 3; i++) {
      const { body } = await claim(createAccount());
      expect(body).not.toHaveProperty("referrerId");
    }
  });
});

describe("recompensa de referidos", () => {
  it("con 3 referidos nuevos y válidos, el referente FREE recibe PRO una vez", async () => {
    createReferrer();
    const before = Date.now();
    expect((await claim(createAccount())).body).toEqual({ recorded: true, rewarded: false });
    expect((await claim(createAccount())).body).toEqual({ recorded: true, rewarded: false });
    expect((await claim(createAccount())).body).toEqual({ recorded: true, rewarded: true });

    expect(referrer().plan).toBe("PRO");
    const expires = new Date(String(referrer().planExpiresAt)).getTime();
    expect(expires - before).toBeGreaterThanOrEqual(REWARD_DAYS * DAY_MS - 1000);
    expect(expires - before).toBeLessThanOrEqual(REWARD_DAYS * DAY_MS + 60_000);
    expect(rewardDoc()).toMatchObject({ count: 3, rewardDays: REWARD_DAYS });
  });

  it("es idempotente: la misma cuenta referida cuenta una sola vez", async () => {
    createReferrer();
    const token = createAccount();
    expect((await claim(token)).body).toEqual({ recorded: true, rewarded: false });
    for (let i = 0; i < 5; i++) {
      expect((await claim(token)).body).toEqual({ recorded: true, rewarded: false });
    }
    expect(rewardDoc()).toMatchObject({ count: 1 });
    expect(referrer().plan).toBe("FREE");
  });

  it("la recompensa se concede una sola vez por referente", async () => {
    createReferrer();
    for (let i = 0; i < 3; i++) await claim(createAccount());
    const firstExpiry = referrer().planExpiresAt;

    // Caduca el PRO de la recompensa y llegan más referidos: no se vuelve a conceder.
    store.users["referrer-uid"] = { ...referrer(), plan: "FREE", planExpiresAt: null };
    for (let i = 0; i < 3; i++) {
      expect((await claim(createAccount())).body).toEqual({ recorded: true, rewarded: false });
    }
    expect(referrer().plan).toBe("FREE");
    expect(rewardDoc()).toMatchObject({ count: 6 });
    expect(firstExpiry).toBeTruthy();
  });

  it("no cuenta cuentas antiguas aunque se pongan el campo referredBy", async () => {
    createReferrer();
    for (let i = 0; i < 3; i++) {
      const { body } = await claim(createAccount({ ageMs: 2 * DAY_MS }));
      expect(body).toMatchObject({ recorded: false });
    }
    expect(referrer().plan).toBe("FREE");
    expect(rewardDoc()).toBeUndefined();
  });

  it("no cuenta el campo referredBy escrito por el cliente sin pasar por el servidor", async () => {
    createReferrer();
    // Tres cuentas con referredBy = CODE que nunca registraron el referido en servidor.
    createAccount();
    createAccount();
    createAccount();
    // Una cuarta sí lo registra: el recuento es 1, no 4.
    expect((await claim(createAccount())).body).toEqual({ recorded: true, rewarded: false });
    expect(rewardDoc()).toMatchObject({ count: 1 });
    expect(referrer().plan).toBe("FREE");
  });

  it("exige que el registro indique ese código", async () => {
    createReferrer();
    const { body } = await claim(createAccount({ referredBy: null }));
    expect(body).toMatchObject({ recorded: false });
    const other = await claim(createAccount({ referredBy: "OTHER1" }));
    expect(other.body).toMatchObject({ recorded: false });
    expect(rewardDoc()).toBeUndefined();
  });

  it("impide referirse a uno mismo", async () => {
    const token = createAccount({ uid: "self-uid" });
    store.users["self-uid"].referralCode = CODE;
    const { body } = await claim(token);
    expect(body).toMatchObject({ recorded: false });
    expect(store.referrals ?? {}).toEqual({});
  });

  it.each([
    ["formato inválido", { referralCode: "abc" }],
    ["sin código", {}],
    ["código inexistente", { referralCode: "ZZZ999" }],
  ])("rechaza %s", async (_label, body) => {
    createReferrer();
    const { status } = await claim(createAccount(), body);
    expect(status).toBe(400);
    expect(store.referrals ?? {}).toEqual({});
  });

  it("rechaza un código ambiguo (compartido por dos usuarios)", async () => {
    createReferrer();
    store.users["twin-uid"] = { role: "student", plan: "FREE", referralCode: CODE };
    expect((await claim(createAccount())).status).toBe(400);
  });
});

describe("la recompensa no recorta ni sustituye un plan de pago", () => {
  it.each([
    ["PRO que vence en 30 días", { plan: "PRO", planExpiresAt: new Date(Date.now() + 30 * DAY_MS).toISOString() }],
    ["RESIDENTE sin fecha de fin", { plan: "RESIDENTE", planExpiresAt: null }],
    ["BASICO que vence en 60 días", { plan: "BASICO", planExpiresAt: new Date(Date.now() + 60 * DAY_MS).toISOString() }],
  ])("deja intacto un %s", async (_label, plan) => {
    createReferrer(plan);
    const before = { ...referrer() };
    for (let i = 0; i < 3; i++) {
      expect((await claim(createAccount())).body).toEqual({ recorded: true, rewarded: false });
    }
    expect(referrer()).toEqual(before);
    // No se consume: queda pendiente para cuando no tenga un plan de pago vigente.
    expect(rewardDoc()).not.toHaveProperty("rewardedAt");
  });

  it("concede la recompensa con un referido posterior si el plan de pago ya venció", async () => {
    createReferrer({ plan: "PRO", planExpiresAt: new Date(Date.now() + 30 * DAY_MS).toISOString() });
    for (let i = 0; i < 3; i++) await claim(createAccount());
    store.users["referrer-uid"] = { ...referrer(), planExpiresAt: new Date(Date.now() - DAY_MS).toISOString() };
    expect((await claim(createAccount())).body).toEqual({ recorded: true, rewarded: true });
    expect(referrer().plan).toBe("PRO");
  });

  it("no cambia el plan de cuentas de staff", async () => {
    createReferrer({ role: "professor" });
    for (let i = 0; i < 3; i++) await claim(createAccount());
    expect(referrer().plan).toBe("FREE");
    expect(referrer()).not.toHaveProperty("planExpiresAt");
  });
});

describe("hasActivePaidPlan", () => {
  const now = new Date("2026-09-26T12:00:00Z");
  it.each([
    [{ plan: "FREE" }, false],
    [{}, false],
    [{ plan: "PRO", planExpiresAt: "2026-09-25T00:00:00Z" }, false],
    [{ plan: "PRO", planExpiresAt: "2026-10-25T00:00:00Z" }, true],
    [{ plan: "PRO", planExpiresAt: null }, true],
    [{ plan: "PRO", planExpiresAt: "no es una fecha" }, true],
  ])("%j → %s", (user, expected) => {
    expect(hasActivePaidPlan(user, now)).toBe(expected);
  });
});

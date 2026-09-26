import { beforeEach, describe, expect, it, vi } from "vitest";

const setDocMock = vi.fn<(...args: unknown[]) => Promise<void>>(async () => undefined);
vi.mock("firebase/firestore", () => ({
  doc: (_db: unknown, ...path: string[]) => ({ path: path.join("/") }),
  setDoc: (...args: unknown[]) => setDocMock(...args),
}));
vi.mock("@/lib/firebase", () => ({ getFirebaseDb: () => ({}) }));

const { readDrQChallengeCompletions, saveDrQChallengeCompletion } = await import(
  "@/lib/dr-q-challenge-progress"
);
const { getNextDrQChallenge } = await import("@/lib/dr-q-challenges");

const completion = (score: number) => ({ completedAt: "2026-09-01T10:00:00.000Z", score, total: 10 });

beforeEach(() => setDocMock.mockClear());

describe("saveDrQChallengeCompletion", () => {
  it("guarda el reto como mapa anidado, no como campo con puntos", async () => {
    await saveDrQChallengeCompletion("luisa", "eval1", completion(7));
    expect(setDocMock).toHaveBeenCalledWith(
      { path: "users/luisa" },
      { drQChallenges: { eval1: completion(7) } },
      { merge: true },
    );
    const payload = setDocMock.mock.calls[0][1] as Record<string, unknown>;
    expect(Object.keys(payload).some((key) => key.includes("."))).toBe(false);
  });
});

describe("readDrQChallengeCompletions", () => {
  it("lee el mapa anidado", () => {
    expect(readDrQChallengeCompletions({ drQChallenges: { eval1: completion(7) } })).toEqual({
      eval1: completion(7),
    });
  });

  it("recupera los retos guardados con el formato antiguo (campo literal con puntos)", () => {
    expect(readDrQChallengeCompletions({ "drQChallenges.eval1": completion(6) })).toEqual({
      eval1: completion(6),
    });
  });

  it("combina ambos formatos y da prioridad al anidado", () => {
    const data = {
      "drQChallenges.eval1": completion(5),
      "drQChallenges.eval2": completion(4),
      drQChallenges: { eval1: completion(9) },
    };
    expect(readDrQChallengeCompletions(data)).toEqual({ eval1: completion(9), eval2: completion(4) });
  });

  it("ignora campos que no son finalizaciones", () => {
    expect(readDrQChallengeCompletions(undefined)).toEqual({});
    expect(readDrQChallengeCompletions({ drQChallenges: { eval1: "x" }, "drQChallenges.eval2": 3 })).toEqual({});
  });
});

describe("getNextDrQChallenge con datos del perfil", () => {
  it("con el reto 1 guardado en formato antiguo, el siguiente es el reto 2", () => {
    const drQChallenges = readDrQChallengeCompletions({ "drQChallenges.eval1": completion(7) });
    expect(getNextDrQChallenge({ drQChallenges })?.id).toBe("eval2");
  });

  it("con ambos retos completados no quedan retos pendientes", () => {
    const drQChallenges = readDrQChallengeCompletions({
      drQChallenges: { eval1: completion(7), eval2: completion(8) },
    });
    expect(getNextDrQChallenge({ drQChallenges })).toBeNull();
  });
});

import { describe, expect, it } from "vitest";
import {
  MIR_RANKING_MAX_PER_DAY,
  buildMirWeeklyRanking,
  getDefaultMirRankingAlias,
  getWeekDateKeys,
  getWeekTotal,
  isValidDateKey,
  sanitizeMirRankingAlias,
} from "@/lib/mir/weekly-ranking";

const week = getWeekDateKeys("2026-10-12");

describe("semana y fechas", () => {
  it("arma los 7 días desde el lunes, cruzando de mes", () => {
    expect(getWeekDateKeys("2026-10-26")).toEqual([
      "2026-10-26", "2026-10-27", "2026-10-28", "2026-10-29", "2026-10-30", "2026-10-31", "2026-11-01",
    ]);
  });

  it("valida claves de fecha reales", () => {
    expect(isValidDateKey("2026-10-12")).toBe(true);
    expect(isValidDateKey("2026-02-30")).toBe(false);
    expect(isValidDateKey("12/10/2026")).toBe(false);
    expect(isValidDateKey(undefined)).toBe(false);
  });
});

describe("alias", () => {
  it("limpia símbolos, espacios y longitud", () => {
    expect(sanitizeMirRankingAlias("  Dra.   Ana_Gómez  ")).toBe("Dra. Ana_Gómez");
    expect(sanitizeMirRankingAlias("<script>alert(1)</script>")).toBe("scriptalert1script");
    expect(sanitizeMirRankingAlias("x")).toBeNull();
    expect(sanitizeMirRankingAlias(42)).toBeNull();
    expect(sanitizeMirRankingAlias("a".repeat(40))).toHaveLength(24);
  });

  it("el alias por defecto es estable y no contiene el uid", () => {
    expect(getDefaultMirRankingAlias("uid-123")).toBe(getDefaultMirRankingAlias("uid-123"));
    expect(getDefaultMirRankingAlias("uid-123")).toMatch(/^Residente \d{4}$/);
  });
});

describe("buildMirWeeklyRanking", () => {
  it("suma solo la semana, acota cada día y descarta valores raros", () => {
    expect(getWeekTotal({ "2026-10-12": 30, "2026-10-13": "20", "2026-10-11": 99 }, week)).toBe(50);
    expect(getWeekTotal({ "2026-10-12": 99999, "2026-10-13": -5, "2026-10-14": "x" }, week)).toBe(MIR_RANKING_MAX_PER_DAY);
    expect(getWeekTotal(null, week)).toBe(0);
  });

  it("ordena, empata en el puesto, marca al que consulta y omite a quien no suma", () => {
    const ranking = buildMirWeeklyRanking(
      [
        { uid: "a", alias: "Ana", answeredByDay: { "2026-10-12": 40 } },
        { uid: "b", alias: "Beto", answeredByDay: { "2026-10-13": 60 } },
        { uid: "c", alias: "Caro", answeredByDay: { "2026-10-14": 40 } },
        { uid: "d", alias: "Dani", answeredByDay: { "2026-10-15": 10 } },
        { uid: "e", alias: "Eva", answeredByDay: {} },
      ],
      "d",
      week,
      3,
    );
    expect(ranking.top.map((entry) => [entry.rank, entry.alias, entry.total])).toEqual([
      [1, "Beto", 60],
      [2, "Ana", 40],
      [2, "Caro", 40],
    ]);
    expect(ranking.me).toEqual({ rank: 4, alias: "Dani", total: 10, isMe: true });
    expect(ranking.activeCount).toBe(4);
  });

  it("nunca devuelve el uid y usa el alias por defecto si el suyo no es válido", () => {
    const ranking = buildMirWeeklyRanking([{ uid: "secret-uid", alias: "!", answeredByDay: { "2026-10-12": 5 } }], "x", week);
    expect(JSON.stringify(ranking)).not.toContain("secret-uid");
    expect(ranking.top[0].alias).toBe(getDefaultMirRankingAlias("secret-uid"));
    expect(ranking.me).toBeNull();
  });
});

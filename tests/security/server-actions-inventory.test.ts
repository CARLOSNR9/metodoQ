import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Cada función exportada de un archivo "use server" es un endpoint público.
 * Este test obliga a que cada una verifique al usuario en servidor, salvo las
 * públicas a propósito, que deben figurar aquí con su motivo.
 */
const PUBLIC_ACTIONS: Record<string, string> = {
  getConvocatoriaBankAction:
    "Simulacro del estudiante: el banco base ya viaja en el JS del cliente; solo añade correcciones editoriales.",
};

const AUTH_CHECK = /verifyStaffCaller\(|verifyIdToken\(|\brequire[A-Z]\w*\(/;
const SRC = path.resolve(__dirname, "../../src");

function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return listFiles(full);
    return /\.(ts|tsx)$/.test(name) ? [full] : [];
  });
}

function exportedActions(source: string): Array<{ name: string; body: string }> {
  const starts = [...source.matchAll(/^export\s+(?:async\s+)?function\s+(\w+)/gm)];
  return starts.map((match, index) => ({
    name: match[1],
    body: source.slice(match.index, starts[index + 1]?.index ?? source.length),
  }));
}

const serverActionFiles = listFiles(SRC).filter((file) =>
  /^\s*["']use server["']/.test(readFileSync(file, "utf8")),
);

describe("inventario de server actions", () => {
  it("encuentra los archivos de server actions", () => {
    expect(serverActionFiles.length).toBeGreaterThan(5);
  });

  const actions = serverActionFiles.flatMap((file) =>
    exportedActions(readFileSync(file, "utf8")).map((action) => ({
      ...action,
      file: path.relative(SRC, file),
    })),
  );

  it.each(actions.map((action) => [`${action.file} → ${action.name}`, action] as const))(
    "%s verifica al usuario en servidor o es pública a propósito",
    (_label, action) => {
      if (action.name in PUBLIC_ACTIONS) return;
      expect(action.body).toMatch(AUTH_CHECK);
    },
  );
});

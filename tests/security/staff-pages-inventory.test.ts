import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Las páginas de servidor de /admin y /profesor, y los componentes de servidor
 * del panel que cargan datos con el Admin SDK, deben comprobar la sesión de
 * staff en servidor (`requireStaffArea`) antes de renderizar datos: los guards
 * de cliente no impiden que el HTML/RSC llegue al navegador.
 */
const SRC = path.resolve(__dirname, "../../src");

/** Páginas exentas, con su motivo. */
const EXEMPT_PAGES: Record<string, string> = {
  "app/moderador/page.tsx":
    "Contiene su propio guard de cliente (formulario de login); sus datos vienen de ResidenteApplicationsPanel, que se protege a sí mismo.",
};

function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return listFiles(full);
    return /\.(ts|tsx)$/.test(name) ? [full] : [];
  });
}

const isClientModule = (source: string) => /^\s*["']use client["']/.test(source);
/** Importa código (no solo tipos) del servidor. */
const importsServerCode = (source: string) =>
  /^import\s+(?!type\b)[^;]*from\s+["']@\/lib\/server\//m.test(source);

const relative = (file: string) => path.relative(SRC, file);

const staffPages = ["app/admin", "app/profesor", "app/moderador"]
  .flatMap((dir) => listFiles(path.join(SRC, dir)))
  .filter((file) => file.endsWith("page.tsx"))
  .filter((file) => !isClientModule(readFileSync(file, "utf8")));

const staffDataComponents = ["components/admin", "components/professor", "components/moderator"]
  .flatMap((dir) => {
    try {
      return listFiles(path.join(SRC, dir));
    } catch {
      return [];
    }
  })
  .filter((file) => {
    const source = readFileSync(file, "utf8");
    return !isClientModule(source) && importsServerCode(source);
  });

describe("inventario de páginas de staff", () => {
  it("encuentra las páginas y los paneles con datos", () => {
    expect(staffPages.length).toBeGreaterThan(15);
    expect(staffDataComponents.length).toBeGreaterThanOrEqual(5);
  });

  it.each(staffPages.map((file) => [relative(file), file] as const))(
    "%s comprueba la sesión de staff en servidor",
    (name, file) => {
      if (name in EXEMPT_PAGES) return;
      expect(readFileSync(file, "utf8")).toMatch(/await requireStaffArea\(/);
    },
  );

  it.each(staffDataComponents.map((file) => [relative(file), file] as const))(
    "%s comprueba la sesión antes de cargar datos",
    (_name, file) => {
      expect(readFileSync(file, "utf8")).toMatch(/await requireStaffArea\(/);
    },
  );
});

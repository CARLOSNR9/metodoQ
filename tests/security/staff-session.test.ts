import { beforeEach, describe, expect, it, vi } from "vitest";
import { resetFakeFirebase, sessionCookieFor, verifyCalls } from "./fake-firebase";

/** Cookies de la petición simulada (lo que `cookies()` de next/headers devolvería). */
const requestCookies = new Map<string, string>();
const setCookieCalls: Array<{ name: string; value: string; options: Record<string, unknown> }> = [];

vi.mock("@/lib/server/firebase-admin", async () => (await import("./fake-firebase")).fakeFirebaseAdmin);
vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => (requestCookies.has(name) ? { name, value: requestCookies.get(name) } : undefined),
    set: (name: string, value: string, options: Record<string, unknown>) => {
      setCookieCalls.push({ name, value, options });
      requestCookies.set(name, value);
    },
    delete: (name: string) => {
      requestCookies.delete(name);
    },
  }),
}));
vi.mock("@/lib/server/admin-metrics", () => ({
  getAdminMetrics: vi.fn(async () => ({ metrics: { usersCount: 7 }, loadError: null })),
  buildAdminAlerts: vi.fn(() => []),
}));
vi.mock("@/lib/server/student-activity", () => ({
  getAdminStudentActivity: vi.fn(async () => ({ uid: "student-uid" })),
}));
vi.mock("@/lib/server/professor-users", () => ({
  getProfessorStudentDirectory: vi.fn(async () => []),
}));
vi.mock("@/lib/server/users-admin", () => ({
  getAdminUserDirectory: vi.fn(async () => []),
}));

const { canAccessStaffArea } = await import("@/lib/staff-access");
const { STAFF_SESSION_COOKIE, requireStaffArea } = await import("@/lib/server/staff-session");
const { POST, DELETE } = await import("@/app/api/auth/staff-session/route");
const { StaffDataPending } = await import("@/components/admin/staff-data-pending");
const { getAdminMetrics } = await import("@/lib/server/admin-metrics");
const { getAdminStudentActivity } = await import("@/lib/server/student-activity");
const { getProfessorStudentDirectory } = await import("@/lib/server/professor-users");
const { getAdminUserDirectory } = await import("@/lib/server/users-admin");
const AdminHomePage = (await import("@/app/admin/page")).default;
const AdminStudentActivityPage = (await import("@/app/admin/usuarios/[uid]/page")).default;
const ProfessorStudentsPage = (await import("@/app/profesor/alumnos/page")).default;
const { UsersDirectoryPanel } = await import("@/components/admin/users-directory-panel");
const { ResidenteApplicationsPanel } = await import("@/components/admin/residente-applications-panel");

function signInWith(token: string | null) {
  requestCookies.clear();
  if (token) requestCookies.set(STAFF_SESSION_COOKIE, sessionCookieFor(token));
}

function sessionRequest(body: unknown, headers: Record<string, string> = {}) {
  return new Request("https://metodoq.test/api/auth/staff-session", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://metodoq.test",
      host: "metodoq.test",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

function isPending(element: unknown) {
  return (element as { type?: unknown })?.type === StaffDataPending;
}

beforeEach(() => {
  resetFakeFirebase();
  requestCookies.clear();
  setCookieCalls.length = 0;
  vi.clearAllMocks();
});

describe("canAccessStaffArea", () => {
  const cases: Array<[string, string | null, string | null, Record<string, boolean>]> = [
    ["admin por role", "admin", "boss@example.com", { admin: true, professor: true, moderator: true, residente: true }],
    ["admin legacy (transición)", "student", "admin@gmail.com", { admin: true, professor: true, moderator: true, residente: true }],
    ["profesor", "professor", "p@example.com", { admin: false, professor: true, moderator: false, residente: false }],
    ["moderador", "moderator", "m@example.com", { admin: false, professor: false, moderator: true, residente: true }],
    ["estudiante", "student", "s@example.com", { admin: false, professor: false, moderator: false, residente: false }],
    ["sin role", null, null, { admin: false, professor: false, moderator: false, residente: false }],
  ];
  it.each(cases)("%s", (_label, role, email, expected) => {
    for (const [area, allowed] of Object.entries(expected)) {
      expect(canAccessStaffArea(area as never, role, email), area).toBe(allowed);
    }
  });
});

describe("requireStaffArea", () => {
  it("sin cookie no hay sesión", async () => {
    expect(await requireStaffArea("admin")).toBeNull();
  });

  it("rechaza cookies falsificadas o revocadas", async () => {
    requestCookies.set(STAFF_SESSION_COOKIE, "tok-admin");
    expect(await requireStaffArea("admin")).toBeNull();
    signInWith("tok-revoked");
    expect(await requireStaffArea("admin")).toBeNull();
  });

  it("verifica la cookie comprobando la revocación", async () => {
    signInWith("tok-admin");
    await requireStaffArea("admin");
    expect(verifyCalls).toContainEqual({ token: sessionCookieFor("tok-admin"), checkRevoked: true });
  });

  it("aplica el role leído en servidor a cada área", async () => {
    signInWith("tok-prof");
    expect(await requireStaffArea("professor")).toMatchObject({ uid: "prof-uid", role: "professor" });
    expect(await requireStaffArea("admin")).toBeNull();
    signInWith("tok-student");
    expect(await requireStaffArea("professor")).toBeNull();
  });

  it("mantiene el admin legacy durante la transición", async () => {
    signInWith("tok-legacy");
    expect(await requireStaffArea("admin")).toMatchObject({ uid: "legacy-uid" });
  });
});

describe("POST /api/auth/staff-session", () => {
  it("rechaza peticiones de otro origen", async () => {
    const response = await POST(sessionRequest({ idToken: "tok-admin" }, { origin: "https://evil.test" }));
    expect(response.status).toBe(403);
    expect(setCookieCalls).toHaveLength(0);
  });

  it("rechaza peticiones sin cabecera Origin", async () => {
    const request = new Request("https://metodoq.test/api/auth/staff-session", {
      method: "POST",
      headers: { host: "metodoq.test" },
      body: JSON.stringify({ idToken: "tok-admin" }),
    });
    expect((await POST(request)).status).toBe(403);
  });

  it.each([
    ["sin token", {}, 401],
    ["token falso", { idToken: "tok-forged" }, 401],
    ["token revocado", { idToken: "tok-revoked" }, 401],
    ["estudiante", { idToken: "tok-student" }, 403],
  ])("no crea sesión: %s", async (_label, body, status) => {
    requestCookies.set(STAFF_SESSION_COOKIE, sessionCookieFor("tok-admin"));
    const response = await POST(sessionRequest(body));
    expect(response.status).toBe(status);
    expect(setCookieCalls).toHaveLength(0);
    // Además borra cualquier sesión previa del navegador.
    if (status !== 401 || "idToken" in body) {
      expect(requestCookies.has(STAFF_SESSION_COOKIE)).toBe(false);
    }
  });

  it.each([
    ["admin legacy", "tok-legacy"],
    ["admin por role", "tok-admin"],
    ["profesor", "tok-prof"],
    ["moderador", "tok-mod"],
  ])("crea una cookie httpOnly para %s", async (_label, token) => {
    const response = await POST(sessionRequest({ idToken: token }));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true, created: true });
    expect(setCookieCalls).toEqual([
      {
        name: STAFF_SESSION_COOKIE,
        value: sessionCookieFor(token),
        options: expect.objectContaining({ httpOnly: true, sameSite: "lax", path: "/", maxAge: 8 * 60 * 60 }),
      },
    ]);
  });

  it("no vuelve a crearla si ya hay una sesión válida del mismo usuario", async () => {
    signInWith("tok-admin");
    const response = await POST(sessionRequest({ idToken: "tok-admin" }));
    expect(await response.json()).toEqual({ ok: true, created: false });
    expect(setCookieCalls).toHaveLength(0);
  });

  it("la sustituye si la sesión previa es de otro usuario", async () => {
    signInWith("tok-prof");
    const response = await POST(sessionRequest({ idToken: "tok-admin" }));
    expect(await response.json()).toEqual({ ok: true, created: true });
    expect(requestCookies.get(STAFF_SESSION_COOKIE)).toBe(sessionCookieFor("tok-admin"));
  });

  it("DELETE borra la sesión", async () => {
    signInWith("tok-admin");
    expect((await DELETE()).status).toBe(200);
    expect(requestCookies.has(STAFF_SESSION_COOKIE)).toBe(false);
  });
});

describe("páginas y paneles con datos del Admin SDK", () => {
  it.each([null, "tok-forged", "tok-student", "tok-prof", "tok-mod", "tok-revoked"])(
    "/admin no carga ni renderiza métricas con la sesión %s",
    async (token) => {
      signInWith(token);
      expect(isPending(await AdminHomePage())).toBe(true);
      expect(getAdminMetrics).not.toHaveBeenCalled();
    },
  );

  it.each(["tok-legacy", "tok-admin"])("/admin renderiza métricas con %s", async (token) => {
    signInWith(token);
    expect(isPending(await AdminHomePage())).toBe(false);
    expect(getAdminMetrics).toHaveBeenCalledOnce();
  });

  it("/admin/usuarios/[uid] no carga la actividad sin sesión de admin", async () => {
    const params = Promise.resolve({ uid: "student-uid" });
    signInWith("tok-prof");
    expect(isPending(await AdminStudentActivityPage({ params }))).toBe(true);
    expect(getAdminStudentActivity).not.toHaveBeenCalled();

    signInWith("tok-admin");
    await AdminStudentActivityPage({ params });
    expect(getAdminStudentActivity).toHaveBeenCalledWith("student-uid");
  });

  it("/profesor/alumnos exige profesor o admin", async () => {
    for (const token of [null, "tok-student", "tok-mod"]) {
      signInWith(token);
      expect(isPending(await ProfessorStudentsPage())).toBe(true);
    }
    expect(getProfessorStudentDirectory).not.toHaveBeenCalled();

    signInWith("tok-prof");
    expect(isPending(await ProfessorStudentsPage())).toBe(false);
    signInWith("tok-legacy");
    expect(isPending(await ProfessorStudentsPage())).toBe(false);
    expect(getProfessorStudentDirectory).toHaveBeenCalledTimes(2);
  });

  it("el directorio de usuarios se protege también a nivel de panel", async () => {
    signInWith("tok-prof");
    expect(isPending(await UsersDirectoryPanel())).toBe(true);
    expect(getAdminUserDirectory).not.toHaveBeenCalled();
  });

  it("las postulaciones Residente son para admin y moderador", async () => {
    signInWith("tok-prof");
    expect(isPending(await ResidenteApplicationsPanel({ variant: "moderator" }))).toBe(true);
    signInWith("tok-mod");
    expect(isPending(await ResidenteApplicationsPanel({ variant: "moderator" }))).toBe(false);
  });
});

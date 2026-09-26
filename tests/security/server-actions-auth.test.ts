import { beforeEach, describe, expect, it, vi } from "vitest";
import { resetFakeFirebase, store, verifyCalls } from "./fake-firebase";

vi.mock("@/lib/server/firebase-admin", async () => (await import("./fake-firebase")).fakeFirebaseAdmin);
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("@/lib/server/classes-admin", () => ({
  adminCreateClass: vi.fn(async () => "class-1"),
  adminDeleteClass: vi.fn(async () => undefined),
}));
vi.mock("@/lib/server/courses-admin", () => ({
  professorGetCourse: vi.fn(async (courseId: string, uid: string) =>
    courseId === "course-of-prof" && uid === "prof-uid" ? { id: courseId, name: "Grupo A" } : null,
  ),
}));
vi.mock("@/lib/server/questions-admin", () => ({
  adminListQuestionsForReview: vi.fn(async () => [{ id: "q1" }]),
}));
vi.mock("@/lib/server/convocatoria-edits-admin", () => ({
  adminListConvocatoriaOverrides: vi.fn(async () => ({ q1: { stem: "corregida" } })),
}));
vi.mock("@/lib/server/email/send", () => ({
  sendResidenteApplicationEmails: vi.fn(async () => undefined),
}));

const { verifyStaffCaller } = await import("@/lib/server/verify-staff");
const { createClassAction, deleteClassAction } = await import("@/app/admin/class-actions");
const { listQuestionsForReviewAction } = await import("@/app/admin/question-actions");
const { listConvocatoriaOverridesAction } = await import("@/app/profesor/convocatorias/actions");
const { submitStudentQuestionReportAction } = await import("@/app/actions/student-report-actions");
const { submitResidenteApplicationAction } = await import("@/app/residente/actions");
const { adminCreateClass, adminDeleteClass } = await import("@/lib/server/classes-admin");
const { adminListQuestionsForReview } = await import("@/lib/server/questions-admin");
const { adminListConvocatoriaOverrides } = await import("@/lib/server/convocatoria-edits-admin");

/** Quien NO debe poder gestionar clases ni preguntas. */
const UNAUTHORIZED = [
  ["sin token", null],
  ["token inválido", "tok-forged"],
  ["token revocado", "tok-revoked"],
  ["estudiante", "tok-student"],
  ["moderador", "tok-mod"],
] as const;

/** Quien SÍ puede: incluye el admin legacy, que debe seguir funcionando. */
const COURSE_MANAGERS = [
  ["admin legacy (admin@gmail.com)", "tok-legacy"],
  ["admin por role", "tok-admin"],
  ["profesor", "tok-prof"],
] as const;

function classForm(fields: Record<string, string | null>) {
  const formData = new FormData();
  const defaults: Record<string, string> = {
    title: "Clase",
    description: "Descripción",
    date: "2026-10-01",
    time: "18:00",
    duration: "60",
    meetingLink: "https://meet.example.com/abc",
  };
  for (const [key, value] of Object.entries({ ...defaults, ...fields })) {
    if (value !== null) formData.set(key, value);
  }
  return formData;
}

beforeEach(() => {
  resetFakeFirebase();
  vi.clearAllMocks();
});

describe("verifyStaffCaller", () => {
  it("exige comprobar la revocación del token", async () => {
    await verifyStaffCaller("tok-admin");
    expect(verifyCalls).toEqual([{ token: "tok-admin", checkRevoked: true }]);
  });

  it("rechaza tokens ausentes, inválidos o revocados", async () => {
    expect((await verifyStaffCaller(null)).ok).toBe(false);
    expect((await verifyStaffCaller("tok-forged")).ok).toBe(false);
    expect((await verifyStaffCaller("tok-revoked")).ok).toBe(false);
  });

  it("toma el role del documento del uid verificado", async () => {
    const student = await verifyStaffCaller("tok-student");
    expect(student).toMatchObject({ ok: true, uid: "student-uid", role: "student", isAdmin: false });
    const admin = await verifyStaffCaller("tok-admin");
    expect(admin).toMatchObject({ ok: true, uid: "admin-uid", role: "admin", isAdmin: true });
  });

  it("mantiene temporalmente el admin legacy por email (transición)", async () => {
    const legacy = await verifyStaffCaller("tok-legacy");
    expect(legacy).toMatchObject({ ok: true, uid: "legacy-uid", role: "student", isAdmin: true });
  });
});

describe("createClassAction", () => {
  it.each(UNAUTHORIZED)("rechaza %s en clases para todos los Pro", async (_label, token) => {
    const result = await createClassAction(classForm({ idToken: token, visibility: "all_pro" }));
    expect(result).toHaveProperty("error");
    expect(adminCreateClass).not.toHaveBeenCalled();
  });

  it.each(UNAUTHORIZED)("rechaza %s en clases por grupo", async (_label, token) => {
    const result = await createClassAction(classForm({ idToken: token, courseId: "course-of-prof" }));
    expect(result).toHaveProperty("error");
    expect(adminCreateClass).not.toHaveBeenCalled();
  });

  it("valida la autorización antes que los campos del formulario", async () => {
    const result = await createClassAction(classForm({ idToken: null, title: "" }));
    expect(result).toEqual({ error: "Sesión no válida. Vuelve a iniciar sesión." });
  });

  it.each(COURSE_MANAGERS)("permite a %s crear una clase para todos los Pro", async (_label, token) => {
    const result = await createClassAction(classForm({ idToken: token, visibility: "all_pro" }));
    expect(result).toEqual({ success: true });
    expect(adminCreateClass).toHaveBeenCalledWith(
      expect.objectContaining({ visibility: "all_pro", courseId: null }),
    );
  });

  it("solo vincula un grupo si pertenece al profesor autenticado", async () => {
    const own = await createClassAction(classForm({ idToken: "tok-prof", courseId: "course-of-prof" }));
    expect(own).toEqual({ success: true });
    expect(adminCreateClass).toHaveBeenCalledWith(
      expect.objectContaining({ professorId: "prof-uid", courseId: "course-of-prof", visibility: "course" }),
    );

    vi.mocked(adminCreateClass).mockClear();
    const foreign = await createClassAction(classForm({ idToken: "tok-admin", courseId: "course-of-prof" }));
    expect(foreign).toHaveProperty("error");
    expect(adminCreateClass).not.toHaveBeenCalled();
  });
});

describe("deleteClassAction", () => {
  it.each(UNAUTHORIZED)("rechaza %s", async (_label, token) => {
    const result = await deleteClassAction("class-1", token);
    expect(result).toHaveProperty("error");
    expect(adminDeleteClass).not.toHaveBeenCalled();
  });

  it.each(COURSE_MANAGERS)("permite a %s", async (_label, token) => {
    expect(await deleteClassAction("class-1", token)).toEqual({ success: true });
    expect(adminDeleteClass).toHaveBeenCalledWith("class-1");
  });
});

describe("listQuestionsForReviewAction", () => {
  it.each(UNAUTHORIZED)("no devuelve el banco a %s", async (_label, token) => {
    const result = await listQuestionsForReviewAction(token);
    expect(result.ok).toBe(false);
    expect(result).not.toHaveProperty("questions");
    expect(adminListQuestionsForReview).not.toHaveBeenCalled();
  });

  it.each(COURSE_MANAGERS)("devuelve el banco a %s", async (_label, token) => {
    const result = await listQuestionsForReviewAction(token);
    expect(result).toEqual({ ok: true, questions: [{ id: "q1" }] });
  });
});

describe("listConvocatoriaOverridesAction", () => {
  it.each(UNAUTHORIZED)("no devuelve correcciones a %s", async (_label, token) => {
    const result = await listConvocatoriaOverridesAction("mir-2024", token);
    expect(result).toMatchObject({ ok: false, overrides: {} });
    expect(adminListConvocatoriaOverrides).not.toHaveBeenCalled();
  });

  it.each(COURSE_MANAGERS)("devuelve correcciones a %s", async (_label, token) => {
    const result = await listConvocatoriaOverridesAction("mir-2024", token);
    expect(result).toEqual({ ok: true, overrides: { q1: { stem: "corregida" } } });
  });
});

describe("submitStudentQuestionReportAction", () => {
  const base = { questionId: "q-123", category: "Respuesta incorrecta", comments: "La B es la buena" };
  const reportsOf = (id: string) =>
    (store.question_reports?.[id]?.reportsList ?? []) as Array<Record<string, unknown>>;

  it("toma el alumno del token verificado, no del cliente", async () => {
    const forged = { ...base, idToken: "tok-student", userId: "admin-uid" } as never;
    expect(await submitStudentQuestionReportAction(forged)).toEqual({ success: true });
    expect(reportsOf("q-123")[0]).toMatchObject({
      userId: "student-uid",
      userEmail: "student@example.com",
    });
  });

  it("sin token el reporte es anónimo aunque el cliente envíe un uid", async () => {
    const forged = { ...base, userId: "admin-uid" } as never;
    expect(await submitStudentQuestionReportAction(forged)).toEqual({ success: true });
    expect(reportsOf("q-123")[0]).toMatchObject({ userId: null, userEmail: null });
  });

  it("rechaza un token inválido sin escribir nada", async () => {
    const result = await submitStudentQuestionReportAction({ ...base, idToken: "tok-forged" });
    expect(result).toHaveProperty("error");
    expect(store.question_reports?.["q-123"]).toBeUndefined();
  });

  it.each(["", "a/b", "../users", "__x__", "x".repeat(151)])(
    "rechaza el id de pregunta %j",
    async (questionId) => {
      const result = await submitStudentQuestionReportAction({ ...base, questionId });
      expect(result).toEqual({ error: "Código de pregunta no válido." });
      expect(Object.keys(store.question_reports ?? {})).toHaveLength(0);
    },
  );

  it("limita la longitud de los comentarios", async () => {
    await submitStudentQuestionReportAction({ ...base, comments: "x".repeat(5000) });
    expect(String(reportsOf("q-123")[0].comments)).toHaveLength(2000);
  });
});

describe("submitResidenteApplicationAction", () => {
  const base = {
    name: "Ana",
    email: "ana@example.com",
    phone: "600000000",
    university: "UCC",
    message: "",
  };
  const applications = () => Object.values(store.residente_applications ?? {});

  it("ignora un uid enviado por el cliente", async () => {
    const forged = { ...base, userId: "admin-uid" } as never;
    expect(await submitResidenteApplicationAction(forged)).toEqual({ success: true });
    expect(applications()[0]).toMatchObject({ userId: null });
  });

  it("toma el uid del token verificado", async () => {
    await submitResidenteApplicationAction({ ...base, idToken: "tok-student" });
    expect(applications()[0]).toMatchObject({ userId: "student-uid" });
  });

  it("rechaza un token inválido sin guardar la postulación", async () => {
    const result = await submitResidenteApplicationAction({ ...base, idToken: "tok-forged" });
    expect(result).toHaveProperty("error");
    expect(applications()).toHaveLength(0);
  });
});

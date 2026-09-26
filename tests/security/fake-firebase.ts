/**
 * Doble en memoria de `@/lib/server/firebase-admin` para los tests de
 * autorización: tokens conocidos → usuario decodificado, y una colección
 * `users` con los roles. Nunca usa credenciales ni red.
 */
type DecodedToken = { uid: string; email?: string };

export const TOKENS: Record<string, DecodedToken> = {
  // Admin legacy: autorizado solo por el email (su documento no tiene role).
  "tok-legacy": { uid: "legacy-uid", email: "admin@gmail.com" },
  "tok-admin": { uid: "admin-uid", email: "boss@example.com" },
  "tok-prof": { uid: "prof-uid", email: "prof@example.com" },
  "tok-mod": { uid: "mod-uid", email: "mod@example.com" },
  "tok-student": { uid: "student-uid", email: "student@example.com" },
  // Válido en firma, pero la cuenta está desactivada o su sesión fue revocada.
  "tok-revoked": { uid: "revoked-uid", email: "revoked@example.com" },
};

const INITIAL_DOCS: Record<string, Record<string, Record<string, unknown>>> = {
  users: {
    "legacy-uid": {},
    "admin-uid": { role: "admin" },
    "prof-uid": { role: "professor" },
    "mod-uid": { role: "moderator" },
    "student-uid": { role: "student", email: "student@example.com" },
    "revoked-uid": { role: "admin" },
  },
};

export const store: Record<string, Record<string, Record<string, unknown>>> = {};
export const verifyCalls: Array<{ token: string; checkRevoked: boolean | undefined }> = [];

export function resetFakeFirebase() {
  for (const key of Object.keys(store)) delete store[key];
  for (const [name, docs] of Object.entries(INITIAL_DOCS)) {
    store[name] = Object.fromEntries(
      Object.entries(docs).map(([id, data]) => [id, { ...data }]),
    );
  }
  verifyCalls.length = 0;
}

async function verifyIdToken(token: string, checkRevoked?: boolean): Promise<DecodedToken> {
  verifyCalls.push({ token, checkRevoked });
  const decoded = TOKENS[token];
  if (!decoded) throw new Error("auth/argument-error");
  if (token === "tok-revoked" && checkRevoked) throw new Error("auth/id-token-revoked");
  return decoded;
}

/** Cookie de sesión simulada: "session:<token>", válida mientras el token lo sea. */
const SESSION_PREFIX = "session:";

async function createSessionCookie(idToken: string, options: { expiresIn: number }) {
  if (!TOKENS[idToken]) throw new Error("auth/invalid-id-token");
  if (!(options.expiresIn >= 5 * 60 * 1000 && options.expiresIn <= 14 * 24 * 60 * 60 * 1000)) {
    throw new Error("auth/invalid-session-cookie-duration");
  }
  return `${SESSION_PREFIX}${idToken}`;
}

async function verifySessionCookie(cookie: string, checkRevoked?: boolean): Promise<DecodedToken> {
  verifyCalls.push({ token: cookie, checkRevoked });
  const token = cookie.startsWith(SESSION_PREFIX) ? cookie.slice(SESSION_PREFIX.length) : "";
  const decoded = TOKENS[token];
  if (!decoded) throw new Error("auth/argument-error");
  if (token === "tok-revoked" && checkRevoked) throw new Error("auth/session-cookie-revoked");
  return decoded;
}

export function sessionCookieFor(token: string) {
  return `${SESSION_PREFIX}${token}`;
}

let autoId = 0;

function docRef(collection: string, id: string) {
  const docs = () => (store[collection] ??= {});
  return {
    id,
    async get() {
      const data = docs()[id];
      return { exists: data !== undefined, id, data: () => data };
    },
    async set(data: Record<string, unknown>) {
      docs()[id] = { ...data };
    },
    async update(data: Record<string, unknown>) {
      if (!docs()[id]) throw new Error("not-found");
      docs()[id] = { ...docs()[id], ...data };
    },
  };
}

function query(collection: string) {
  const self = {
    orderBy: () => self,
    where: () => self,
    limit: () => self,
    async get() {
      const docs = Object.entries(store[collection] ?? {}).map(([id, data]) => ({
        id,
        data: () => data,
      }));
      return { docs, empty: docs.length === 0, size: docs.length };
    },
  };
  return self;
}

export const fakeFirebaseAdmin = {
  getFirebaseAdminAuth: () => ({ verifyIdToken, createSessionCookie, verifySessionCookie }),
  getFirebaseAdminDb: () => ({
    collection: (name: string) => ({
      doc: (id: string) => docRef(name, id),
      // Consultas: devuelven todos los documentos (sin filtrar); basta para estos tests.
      orderBy: () => query(name),
      where: () => query(name),
      limit: () => query(name),
      async add(data: Record<string, unknown>) {
        const id = `auto-${++autoId}`;
        (store[name] ??= {})[id] = { ...data };
        return { id };
      },
    }),
  }),
};

resetFakeFirebase();

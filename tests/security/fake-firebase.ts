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
  for (const key of Object.keys(authCreationTimes)) delete authCreationTimes[key];
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

/** Fecha de creación de las cuentas en Auth (por defecto, «ahora»). */
export const authCreationTimes: Record<string, string> = {};

async function getUser(uid: string) {
  const known = Object.values(TOKENS).some((decoded) => decoded.uid === uid);
  if (!known) throw new Error("auth/user-not-found");
  return { uid, metadata: { creationTime: authCreationTimes[uid] ?? new Date().toUTCString() } };
}

type Data = Record<string, unknown>;
type DocRef = ReturnType<typeof docRef>;
type Query = ReturnType<typeof query>;

function docRef(collection: string, id: string) {
  const docs = () => (store[collection] ??= {});
  const ref = {
    id,
    collection,
    async get() {
      const data = docs()[id];
      return { exists: data !== undefined, id, ref, data: () => data };
    },
    async create(data: Data) {
      if (docs()[id]) throw new Error("already-exists");
      docs()[id] = { ...data };
    },
    async set(data: Data, options?: { merge?: boolean }) {
      docs()[id] = options?.merge ? { ...docs()[id], ...data } : { ...data };
    },
    async update(data: Data) {
      if (!docs()[id]) throw new Error("not-found");
      docs()[id] = { ...docs()[id], ...data };
    },
  };
  return ref;
}

/** Consulta simulada: admite where(campo, "==", valor) y limit; orderBy no ordena. */
function query(collection: string, filters: Array<[string, unknown]> = [], max = Infinity) {
  const self = {
    isQuery: true as const,
    orderBy: () => self,
    where: (field: string, _op: string, value: unknown) =>
      query(collection, [...filters, [field, value]], max),
    limit: (n: number) => query(collection, filters, n),
    async get() {
      const docs = Object.entries(store[collection] ?? {})
        .filter(([, data]) => filters.every(([field, value]) => data[field] === value))
        .slice(0, max)
        .map(([id, data]) => ({ id, ref: docRef(collection, id), data: () => data }));
      return { docs, empty: docs.length === 0, size: docs.length };
    },
  };
  return self;
}

/** Transacción simulada: lecturas directas; escrituras aplicadas al final, en orden. */
async function runTransaction<T>(fn: (tx: unknown) => Promise<T>): Promise<T> {
  const writes: Array<() => Promise<void>> = [];
  const tx = {
    get: (target: DocRef | Query) => target.get(),
    create: (ref: DocRef, data: Data) => void writes.push(() => ref.create(data)),
    set: (ref: DocRef, data: Data, options?: { merge?: boolean }) =>
      void writes.push(() => ref.set(data, options)),
    update: (ref: DocRef, data: Data) => void writes.push(() => ref.update(data)),
  };
  const result = await fn(tx);
  for (const write of writes) await write();
  return result;
}

export const fakeFirebaseAdmin = {
  getFirebaseAdminAuth: () => ({ verifyIdToken, createSessionCookie, verifySessionCookie, getUser }),
  getFirebaseAdminDb: () => ({
    runTransaction,
    collection: (name: string) => ({
      doc: (id: string) => docRef(name, id),
      orderBy: () => query(name),
      where: (field: string, op: string, value: unknown) => query(name).where(field, op, value),
      limit: (n: number) => query(name).limit(n),
      async add(data: Data) {
        const id = `auto-${++autoId}`;
        (store[name] ??= {})[id] = { ...data };
        return { id };
      },
    }),
  }),
};

resetFakeFirebase();

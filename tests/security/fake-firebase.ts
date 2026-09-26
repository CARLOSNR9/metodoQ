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

export const fakeFirebaseAdmin = {
  getFirebaseAdminAuth: () => ({ verifyIdToken }),
  getFirebaseAdminDb: () => ({
    collection: (name: string) => ({
      doc: (id: string) => docRef(name, id),
      async add(data: Record<string, unknown>) {
        const id = `auto-${++autoId}`;
        (store[name] ??= {})[id] = { ...data };
        return { id };
      },
    }),
  }),
};

resetFakeFirebase();

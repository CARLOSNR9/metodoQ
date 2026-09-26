#!/usr/bin/env node
/**
 * Auditoría de SOLO LECTURA de cuentas con privilegios en `users`.
 *
 * Contexto: hasta el despliegue de las reglas de Firestore del 26-09-2026,
 * un cliente podía crear su propio documento `users/{uid}` con cualquier
 * campo (plan de pago, role admin, datos de pago, mirAccess) y activarse
 * `mirAccess` en cualquier momento. Este script lista las cuentas con
 * `role` de staff, `plan` distinto de FREE o `mirAccess.active == true`, y
 * cruza cada privilegio con fuentes que el cliente NO podía falsificar:
 * Firebase Auth, la colección `manual_sales` (solo escribible por el
 * servidor) y, opcionalmente, la API de Stripe.
 *
 * No escribe, actualiza ni borra nada en Firestore, Auth ni Stripe.
 *
 * Uso (desde la raíz del proyecto, con las credenciales del Admin SDK):
 *   node --env-file=.env.local scripts/audit-privileged-users.mjs [--stripe]
 *
 * Variables:
 *   FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL,
 *   FIREBASE_ADMIN_PRIVATE_KEY  (las mismas que usa el servidor)
 *   STRIPE_SECRET_KEY           (solo con --stripe; lecturas de sesiones y suscripciones)
 *   AUDIT_TRUSTED_ADMIN_EMAILS  (opcional: emails de admins legítimos, separados por comas)
 *   NEXT_PUBLIC_ADMIN_EMAIL     (el email «admin legacy» que usa la app)
 *
 * Salida: tabla por consola y, en audit-output/ (ignorado por git), un JSON
 * y un CSV con el detalle de cada cuenta. Contienen datos personales: no los
 * subas al repositorio ni los compartas.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { cert, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { Timestamp, getFirestore } from "firebase-admin/firestore";

const PAID_PLANS = new Set(["BASICO", "PRO", "RESIDENTE"]);
const STAFF_ROLES = new Set(["admin", "moderator", "professor"]);
const MIR_PRODUCT_CODE = "MIR_SIMULACRO";
const LEGACY_DEFAULT_ADMIN_EMAIL = "admin@gmail.com";

const useStripe = process.argv.includes("--stripe");

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Falta la variable ${name}. Ejecuta con: node --env-file=.env.local scripts/audit-privileged-users.mjs`);
    process.exit(1);
  }
  return value;
}

const projectId = requireEnv("FIREBASE_ADMIN_PROJECT_ID");
initializeApp({
  credential: cert({
    projectId,
    clientEmail: requireEnv("FIREBASE_ADMIN_CLIENT_EMAIL"),
    privateKey: requireEnv("FIREBASE_ADMIN_PRIVATE_KEY").replace(/\\n/g, "\n"),
  }),
});
const db = getFirestore();
const auth = getAuth();

const legacyAdminEmail = (process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? LEGACY_DEFAULT_ADMIN_EMAIL).toLowerCase();
const trustedAdminEmails = new Set(
  (process.env.AUDIT_TRUSTED_ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean),
);

let stripe = null;
if (useStripe) {
  const key = requireEnv("STRIPE_SECRET_KEY");
  const { default: Stripe } = await import("stripe");
  stripe = new Stripe(key);
}

function toIso(value) {
  if (!value) return null;
  if (value instanceof Timestamp) return value.toDate().toISOString();
  if (typeof value === "string") return value;
  if (typeof value?.toDate === "function") return value.toDate().toISOString();
  return String(value);
}

function describeCreatedAtField(value) {
  if (value instanceof Timestamp) return "Timestamp (alta desde la app)";
  if (typeof value === "string") return "texto ISO (alta desde el panel de admin)";
  if (value == null) return "ausente";
  return typeof value;
}

async function fetchAuthUsers(uids) {
  const byUid = new Map();
  for (let i = 0; i < uids.length; i += 100) {
    const result = await auth.getUsers(uids.slice(i, i + 100).map((uid) => ({ uid })));
    for (const user of result.users) byUid.set(user.uid, user);
  }
  return byUid;
}

async function checkStripeSession(sessionId, uid) {
  if (!stripe || !sessionId) return null;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return {
      id: sessionId,
      paymentStatus: session.payment_status,
      status: session.status,
      metadataUid: session.metadata?.uid ?? null,
      uidMatches: session.metadata?.uid === uid,
      product: session.metadata?.product ?? null,
      plan: session.metadata?.plan ?? null,
      created: new Date(session.created * 1000).toISOString(),
      livemode: session.livemode,
    };
  } catch (error) {
    return { id: sessionId, error: error?.message ?? String(error) };
  }
}

async function checkStripeSubscription(subscriptionId, uid) {
  if (!stripe || !subscriptionId) return null;
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    return {
      id: subscriptionId,
      status: subscription.status,
      metadataUid: subscription.metadata?.uid ?? null,
      uidMatches: subscription.metadata?.uid === uid,
      plan: subscription.metadata?.plan ?? null,
      livemode: subscription.livemode,
    };
  } catch (error) {
    return { id: subscriptionId, error: error?.message ?? String(error) };
  }
}

function isPaidAndOwned(check) {
  return Boolean(check && !check.error && check.paymentStatus === "paid" && check.uidMatches);
}

console.log(`\nAuditoría de solo lectura · proyecto ${projectId}${useStripe ? " · con verificación en Stripe" : ""}\n`);

const [usersSnap, manualSalesSnap] = await Promise.all([
  db.collection("users").get(),
  db.collection("manual_sales").get(),
]);

const manualSalesByUser = new Map();
for (const sale of manualSalesSnap.docs) {
  const data = sale.data();
  const list = manualSalesByUser.get(data.userId) ?? [];
  list.push({ id: sale.id, createdByUid: data.createdByUid ?? null, createdAt: toIso(data.createdAt), plan: data.plan ?? null });
  manualSalesByUser.set(data.userId, list);
}

const allUsers = usersSnap.docs.map((snap) => ({ uid: snap.id, snap, data: snap.data() }));
const staffUids = new Set(
  allUsers.filter(({ data }) => STAFF_ROLES.has(data.role)).map(({ uid }) => uid),
);

const PROTECTED_WITHOUT_PRIVILEGE = [
  "planStartedAt", "planExpiresAt", "planBillingCycle", "planActivatedAt", "manualSale",
  "lastPaymentStatus", "lastPaymentProvider", "billingCycleMonths",
  "stripeCheckoutSessionId", "stripeCustomerId", "stripeSubscriptionId",
];

// Cuenta que ocupa el email «admin legacy» (isAdminUser la trata como admin sin mirar el rol).
let legacyAdminAccount = null;
try {
  const legacy = await auth.getUserByEmail(legacyAdminEmail);
  legacyAdminAccount = {
    uid: legacy.uid,
    email: legacy.email,
    emailVerified: legacy.emailVerified,
    created: legacy.metadata.creationTime,
    lastSignIn: legacy.metadata.lastSignInTime,
    providers: legacy.providerData.map((provider) => provider.providerId),
  };
} catch {
  legacyAdminAccount = null;
}

const flagged = allUsers.filter(({ uid, data }) => {
  const plan = data.plan ?? "FREE";
  const hasLeftovers = PROTECTED_WITHOUT_PRIVILEGE.some((field) => data[field] != null);
  return (
    STAFF_ROLES.has(data.role) ||
    plan !== "FREE" ||
    data.mirAccess?.active === true ||
    hasLeftovers ||
    uid === legacyAdminAccount?.uid
  );
});

const authByUid = await fetchAuthUsers(flagged.map(({ uid }) => uid));

const rows = [];
for (const { uid, snap, data } of flagged) {
  const authUser = authByUid.get(uid);
  const email = (authUser?.email ?? data.email ?? "").toLowerCase();
  const plan = data.plan ?? "FREE";
  const reasons = [];
  let severity = 0; // 0 OK · 1 REVISAR · 2 SOSPECHOSO
  const raise = (level, reason) => {
    severity = Math.max(severity, level);
    reasons.push(reason);
  };

  const createdFromApp = data.createdAt instanceof Timestamp;
  const sales = manualSalesByUser.get(uid) ?? [];
  const saleRecorders = [
    ...new Set([...sales.map((sale) => sale.createdByUid), data.manualSale?.recordedByUid ?? null].filter(Boolean)),
  ];

  const planSession = await checkStripeSession(data.stripeCheckoutSessionId, uid);
  const planSubscription = await checkStripeSubscription(data.stripeSubscriptionId, uid);
  const mirSession = await checkStripeSession(data.mirAccess?.stripeCheckoutSessionId, uid);

  // --- Rol ---
  if (data.role === "admin") {
    if (trustedAdminEmails.has(email)) {
      reasons.push("Admin incluido en AUDIT_TRUSTED_ADMIN_EMAILS.");
    } else {
      raise(2, "role admin no incluido en la lista de admins de confianza: confirma que lo asignaste tú.");
    }
  } else if (data.role === "moderator" || data.role === "professor") {
    raise(1, `role ${data.role}: sin registro de quién lo asignó; confirma que es personal real.`);
  }
  if (!authUser) raise(1, "Documento sin cuenta en Firebase Auth.");

  // --- Plan ---
  if (PAID_PLANS.has(plan)) {
    const stripePaid = isPaidAndOwned(planSession) || Boolean(planSubscription && !planSubscription.error && planSubscription.uidMatches);
    if (stripePaid) {
      reasons.push("Plan respaldado por Stripe (pago verificado y metadata.uid coincide).");
    } else if (sales.length > 0) {
      reasons.push(`Plan con ${sales.length} registro(s) en manual_sales.`);
    } else if (data.stripeCheckoutSessionId || data.stripeSubscriptionId) {
      raise(stripe ? 2 : 1, stripe
        ? "Tiene IDs de Stripe pero no se pudo verificar un pago suyo en Stripe."
        : "Tiene IDs de Stripe: vuelve a ejecutar con --stripe para verificar el pago.");
    } else if (data.manualSale) {
      raise(2, "manualSale en el perfil pero SIN documento en manual_sales (el cliente podía escribir ese campo al crear la cuenta).");
    } else {
      raise(2, `Plan ${plan} sin pago en Stripe ni venta manual registrada.`);
    }
  } else if (plan !== "FREE") {
    raise(2, `Valor de plan desconocido: ${JSON.stringify(plan)}.`);
  }

  // --- Acceso MIR ---
  if (data.mirAccess?.active === true) {
    if (isPaidAndOwned(mirSession) && mirSession.product === MIR_PRODUCT_CODE) {
      reasons.push("mirAccess respaldado por un pago MIR verificado en Stripe.");
    } else if (data.mirAccess?.stripeCheckoutSessionId) {
      raise(stripe ? 2 : 1, stripe
        ? "mirAccess con ID de Stripe no verificable como pago MIR suyo."
        : "mirAccess con ID de Stripe: ejecuta con --stripe para verificarlo.");
    } else if (!createdFromApp && data.requiresPasswordChange !== undefined) {
      raise(1, "mirAccess sin pago en Stripe; la cuenta parece creada desde el panel («Crear usuario MIR»): confirma que fue un alta tuya.");
    } else {
      raise(2, "mirAccess activo sin pago en Stripe en una cuenta creada desde la app: posible autoactivación.");
    }
  }

  // --- Quién concedió el privilegio ---
  for (const recorderUid of saleRecorders) {
    const recorder = allUsers.find((user) => user.uid === recorderUid);
    const recorderEmail = (recorder?.data.email ?? "").toLowerCase();
    if (!staffUids.has(recorderUid)) {
      raise(2, `Venta manual registrada por ${recorderUid}, que no es staff.`);
    } else if (recorder?.data.role === "admin" && !trustedAdminEmails.has(recorderEmail)) {
      raise(2, `Venta manual registrada por un admin fuera de la lista de confianza (${recorderEmail || recorderUid}).`);
    }
  }

  // --- Campos protegidos sin privilegio (posibles restos de una manipulación) ---
  if (plan === "FREE" && !STAFF_ROLES.has(data.role) && data.mirAccess?.active !== true) {
    const leftovers = PROTECTED_WITHOUT_PRIVILEGE.filter((field) => data[field] != null);
    if (leftovers.length > 0) {
      raise(1, `Cuenta FREE con campos protegidos rellenos: ${leftovers.join(", ")} (puede ser un plan vencido o cancelado; revisa).`);
    }
  }

  if (legacyAdminAccount?.uid === uid) {
    if (trustedAdminEmails.has(email)) {
      reasons.push("Usa el email admin legacy (la app la trata como admin sin mirar su rol) y está en la lista de confianza.");
    } else {
      raise(2, `Usa el email admin legacy: la app la trata como admin sin mirar su rol${authUser?.emailVerified ? "" : " y su email NO está verificado"}. Confirma que es tuya.`);
    }
  }

  rows.push({
    veredicto: ["OK", "REVISAR", "SOSPECHOSO"][severity],
    uid,
    email: authUser?.email ?? data.email ?? null,
    emailVerificado: authUser?.emailVerified ?? null,
    proveedores: authUser ? authUser.providerData.map((provider) => provider.providerId).join(" ") : null,
    cuentaDeshabilitada: authUser?.disabled ?? null,
    altaAuth: authUser?.metadata.creationTime ?? null,
    ultimoAcceso: authUser?.metadata.lastSignInTime ?? null,
    docCreadoFirestore: snap.createTime?.toDate().toISOString() ?? null,
    docActualizadoFirestore: snap.updateTime?.toDate().toISOString() ?? null,
    createdAtCampo: toIso(data.createdAt),
    origenAlta: describeCreatedAtField(data.createdAt),
    role: data.role ?? null,
    plan,
    planStartedAt: toIso(data.planStartedAt),
    planExpiresAt: toIso(data.planExpiresAt),
    planBillingCycle: data.planBillingCycle ?? data.billingCycleMonths ?? null,
    planActivatedAt: toIso(data.planActivatedAt),
    lastPaymentStatus: data.lastPaymentStatus ?? null,
    lastPaymentProvider: data.lastPaymentProvider ?? null,
    stripeCheckoutSessionId: data.stripeCheckoutSessionId ?? null,
    stripeCustomerId: data.stripeCustomerId ?? null,
    stripeSubscriptionId: data.stripeSubscriptionId ?? null,
    manualSale: data.manualSale ?? null,
    ventasManuales: sales,
    mirAccess: data.mirAccess ?? null,
    requiresPasswordChange: data.requiresPasswordChange ?? null,
    stripePlanSesion: planSession,
    stripeSuscripcion: planSubscription,
    stripeMirSesion: mirSession,
    motivos: reasons,
  });
}

const order = { SOSPECHOSO: 0, REVISAR: 1, OK: 2 };
rows.sort((a, b) => order[a.veredicto] - order[b.veredicto] || String(a.altaAuth).localeCompare(String(b.altaAuth)));

console.table(
  rows.map((row) => ({
    veredicto: row.veredicto,
    uid: row.uid,
    email: row.email,
    alta: row.altaAuth,
    role: row.role,
    plan: row.plan,
    mir: row.mirAccess?.active === true ? "sí" : "",
    origen: row.origenAlta,
  })),
);
for (const row of rows.filter((item) => item.veredicto !== "OK")) {
  console.log(`\n[${row.veredicto}] ${row.email ?? "(sin email)"} · ${row.uid}`);
  for (const reason of row.motivos) console.log(`  - ${reason}`);
}

console.log("\nEmail admin legacy (isAdminUser lo trata como admin sin mirar el rol):");
console.log(`  NEXT_PUBLIC_ADMIN_EMAIL ${process.env.NEXT_PUBLIC_ADMIN_EMAIL ? "definida" : `NO definida → se usa «${LEGACY_DEFAULT_ADMIN_EMAIL}»`}: ${legacyAdminEmail}`);
console.log(legacyAdminAccount
  ? `  Cuenta registrada con ese email: ${JSON.stringify(legacyAdminAccount)}`
  : "  Ninguna cuenta registrada con ese email (cualquiera podría registrarlo y obtener acceso admin).");

const outDir = join(process.cwd(), "audit-output");
mkdirSync(outDir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const jsonPath = join(outDir, `usuarios-privilegiados-${stamp}.json`);
writeFileSync(
  jsonPath,
  JSON.stringify({ proyecto: projectId, generado: new Date().toISOString(), totalUsuarios: allUsers.length, legacyAdminEmail, legacyAdminAccount, cuentas: rows }, null, 2),
);

const csvColumns = ["veredicto", "uid", "email", "emailVerificado", "proveedores", "altaAuth", "ultimoAcceso", "docCreadoFirestore", "origenAlta", "role", "plan", "planStartedAt", "planExpiresAt", "planActivatedAt", "lastPaymentProvider", "stripeCheckoutSessionId", "stripeSubscriptionId", "mirActivo", "mirPurchasedAt", "mirStripeSession", "ventasManuales", "motivos"];
const csvCell = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
const csv = [
  csvColumns.join(","),
  ...rows.map((row) =>
    [
      row.veredicto, row.uid, row.email, row.emailVerificado, row.proveedores, row.altaAuth, row.ultimoAcceso,
      row.docCreadoFirestore, row.origenAlta, row.role, row.plan, row.planStartedAt, row.planExpiresAt,
      row.planActivatedAt, row.lastPaymentProvider, row.stripeCheckoutSessionId, row.stripeSubscriptionId,
      row.mirAccess?.active === true ? "sí" : "", row.mirAccess?.purchasedAt ?? "", row.mirAccess?.stripeCheckoutSessionId ?? "",
      row.ventasManuales.length, row.motivos.join(" | "),
    ].map(csvCell).join(","),
  ),
].join("\n");
const csvPath = join(outDir, `usuarios-privilegiados-${stamp}.csv`);
writeFileSync(csvPath, csv);

const counts = rows.reduce((acc, row) => ({ ...acc, [row.veredicto]: (acc[row.veredicto] ?? 0) + 1 }), {});
console.log(`\n${allUsers.length} usuarios revisados · ${rows.length} con privilegios o campos protegidos · ${JSON.stringify(counts)}`);
console.log(`Detalle: ${jsonPath}\n        ${csvPath}`);
console.log("No se ha modificado ningún dato.\n");

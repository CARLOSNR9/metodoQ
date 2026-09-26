// Los tests nunca usan credenciales reales: Firebase Admin se sustituye por un doble
// en memoria (tests/security/fake-firebase.ts). También se ignora un posible email
// admin del entorno para probar el valor por defecto de la app.
for (const key of [
  "NEXT_PUBLIC_ADMIN_EMAIL",
  "FIREBASE_ADMIN_PROJECT_ID",
  "FIREBASE_ADMIN_CLIENT_EMAIL",
  "FIREBASE_ADMIN_PRIVATE_KEY",
]) {
  delete process.env[key];
}

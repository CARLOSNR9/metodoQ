# Seguridad: trabajo pendiente

Estado tras PR-S1 (protección de server actions) y PR-S2 (páginas de staff
protegidas en servidor). Este documento recoge lo que queda abierto a
propósito, para revisarlo después.

## Hecho en PR-S1

- `createClassAction` (todos los caminos) y `deleteClassAction` exigen profesor o admin verificado en servidor.
- `listQuestionsForReviewAction` y `listConvocatoriaOverridesAction` exigen `canManageQuestions`.
- `submitStudentQuestionReportAction` y `submitResidenteApplicationAction` toman el usuario del ID token verificado, nunca de un `userId` enviado por el cliente.
- `verifyStaffCaller` verifica el token con `checkRevoked`.
- Tests: `npm test` (`tests/security/`), incluido un inventario que falla si una server action exportada no verifica al usuario.

## Hecho en PR-S2

- Las páginas de servidor de `/admin/*` y `/profesor/*`, y los paneles de servidor que cargan datos (directorio de usuarios, ventas, clases, postulaciones Residente), llaman a `requireStaffArea` antes de leer nada con el Admin SDK. Sin sesión de staff válida renderizan solo `StaffDataPending`, sin datos.
- Sesión de staff en servidor: cookie de sesión de Firebase httpOnly (`mq_staff_session`, 8 h), creada por `POST /api/auth/staff-session` solo para cuentas de staff, a partir de un ID token verificado con `checkRevoked` y desde el propio origen. El role se lee de Firestore en cada petición.
- `StaffGuard` crea la sesión al entrar al panel y la borra al perder el acceso o sin usuario; `logoutUser` también la borra.
- `/moderador`: el guard vive en la propia página; sus datos vienen de `ResidenteApplicationsPanel`, que se protege a sí mismo.
- Tests: `tests/security/staff-session.test.ts` y un inventario (`staff-pages-inventory.test.ts`) que falla si una página o panel de staff con datos no comprueba la sesión.

## Pendiente

1. **Borrado de clases por profesores.** Un profesor puede borrar cualquier clase, no solo las propias (comportamiento previo, sin cambios en PR-S1). Valorar restringirlo a `professorId === uid` para profesores; el admin, cualquiera.
2. **PR-S2 en producción: verificación pendiente.** Comprobar tras el despliegue que la cuenta de servicio de Firebase Admin puede crear cookies de sesión (`createSessionCookie`) y que, sin sesión, `view-source` de las páginas de `/admin` y `/profesor` no contiene datos.
3. **PR-S3: `/api/referral-reward`.** Manipulable con cuentas falsas (`referredBy` no está validado en servidor), puede recortar un plan de pago existente y no es idempotente.
4. **Migración del admin legacy: NO ha comenzado.** `admin@gmail.com` sigue siendo admin por email (`ADMIN_EMAIL` / `NEXT_PUBLIC_ADMIN_EMAIL`) y no debe retirarse hasta que exista, se pruebe y se audite un admin por `role`.

## Otros puntos conocidos (menores)

- La sesión de staff no exige un inicio de sesión reciente (`auth_time`): se crea a partir de cualquier ID token válido no revocado. Cerrar sesión en otro dispositivo no invalida la cookie (dura 8 h); revocar las sesiones de la cuenta en Firebase sí.
- No hay `proxy.ts`: el formulario de login del panel vive en las propias rutas `/admin` y `/profesor`, así que la protección está en cada página y panel.
- `getConvocatoriaBankAction` es pública a propósito (simulacro del alumno; el banco base ya está en el JS del cliente).
- `submitResidenteApplicationAction` puede usarse para enviar el correo de confirmación a direcciones ajenas: necesita límite de peticiones o captcha.
- `/api/internal-analytics` acepta eventos sin autenticación.

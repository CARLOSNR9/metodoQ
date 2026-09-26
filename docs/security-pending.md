# Seguridad: trabajo pendiente

Estado tras PR-S1 (protección de server actions), PR-S2 (páginas de staff
protegidas en servidor) y PR-S3 (recompensa de referidos). Este documento
recoge lo que queda abierto a propósito, para revisarlo después.

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

## Hecho en PR-S3

- `/api/referral-reward` ya no cuenta el campo `referredBy` (lo escribe el cliente). Cada referido se registra en servidor una sola vez por cuenta referida (`referrals/{referredUid}`), en una transacción; el recuento y la recompensa viven en `referral_rewards/{referrerUid}`. Ambas colecciones son solo de servidor por la regla por defecto de Firestore (sin cambios en `firestore.rules`).
- Solo cuentan cuentas recién creadas (menos de 1 h en Auth) cuyo registro indica ese código; se rechazan la autorreferencia y los códigos inexistentes o ambiguos.
- La recompensa (7 días de PRO al llegar a 3 referidos) se concede una sola vez por referente y nunca toca un plan de pago vigente ni cuentas de staff; si el referente tiene un plan de pago vigente, queda pendiente para un referido posterior.
- El ID token se verifica con `checkRevoked` y la respuesta ya no revela el uid del referente.
- Tests: `tests/security/referral-reward.test.ts`.

## Pendiente

1. **Borrado de clases por profesores.** Un profesor puede borrar cualquier clase, no solo las propias (comportamiento previo, sin cambios en PR-S1). Valorar restringirlo a `professorId === uid` para profesores; el admin, cualquiera.
2. **PR-S2 en producción: verificación pendiente.** Comprobar tras el despliegue que la cuenta de servicio de Firebase Admin puede crear cookies de sesión (`createSessionCookie`) y que, sin sesión, `view-source` de las páginas de `/admin` y `/profesor` no contiene datos.
3. **Referidos: riesgo residual con cuentas falsas.** El registro con email no exige verificar el correo, así que tres cuentas nuevas falsas siguen pudiendo dar, una sola vez, 7 días de PRO a un referente FREE. Para cerrarlo haría falta exigir email verificado (hoy la app no tiene flujo de verificación).
4. **Migración del admin legacy: NO ha comenzado.** `admin@gmail.com` sigue siendo admin por email (`ADMIN_EMAIL` / `NEXT_PUBLIC_ADMIN_EMAIL`) y no debe retirarse hasta que exista, se pruebe y se audite un admin por `role`.

## Otros puntos conocidos (menores)

- La sesión de staff no exige un inicio de sesión reciente (`auth_time`): se crea a partir de cualquier ID token válido no revocado. Cerrar sesión en otro dispositivo no invalida la cookie (dura 8 h); revocar las sesiones de la cuenta en Firebase sí.
- No hay `proxy.ts`: el formulario de login del panel vive en las propias rutas `/admin` y `/profesor`, así que la protección está en cada página y panel.
- Referidos: el contador de la tarjeta de referidos del dashboard (`getReferralCount`) sigue leyendo el campo `referredBy` desde el cliente, y las reglas no permiten esa consulta sobre `users`, así que no refleja el recuento del servidor. El registro con Google/Facebook no aplica el código de referido. Los referentes premiados con el sistema anterior no tienen registro en `referral_rewards` y podrían recibir la recompensa una vez más.
- `getConvocatoriaBankAction` es pública a propósito (simulacro del alumno; el banco base ya está en el JS del cliente).
- `submitResidenteApplicationAction` puede usarse para enviar el correo de confirmación a direcciones ajenas: necesita límite de peticiones o captcha.
- `/api/internal-analytics` acepta eventos sin autenticación.

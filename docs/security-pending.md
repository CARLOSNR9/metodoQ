# Seguridad: trabajo pendiente

Estado tras PR-S1 (protección de server actions). Este documento recoge lo que
queda abierto a propósito, para revisarlo después.

## Hecho en PR-S1

- `createClassAction` (todos los caminos) y `deleteClassAction` exigen profesor o admin verificado en servidor.
- `listQuestionsForReviewAction` y `listConvocatoriaOverridesAction` exigen `canManageQuestions`.
- `submitStudentQuestionReportAction` y `submitResidenteApplicationAction` toman el usuario del ID token verificado, nunca de un `userId` enviado por el cliente.
- `verifyStaffCaller` verifica el token con `checkRevoked`.
- Tests: `npm test` (`tests/security/`), incluido un inventario que falla si una server action exportada no verifica al usuario.

## Pendiente

1. **Borrado de clases por profesores.** Un profesor puede borrar cualquier clase, no solo las propias (comportamiento previo, sin cambios en PR-S1). Valorar restringirlo a `professorId === uid` para profesores; el admin, cualquiera.
2. **PR-S2: páginas server-side de `/admin`, `/profesor` y `/moderador`.** Cargan datos con el Admin SDK y solo las protege un guard de cliente, así que esos datos pueden viajar en el HTML/RSC a usuarios no autorizados. Requiere sesión verificable en servidor (cookie de sesión de Firebase + `requireStaff` en cada página y función de datos).
3. **PR-S3: `/api/referral-reward`.** Manipulable con cuentas falsas (`referredBy` no está validado en servidor), puede recortar un plan de pago existente y no es idempotente.
4. **Migración del admin legacy: NO ha comenzado.** `admin@gmail.com` sigue siendo admin por email (`ADMIN_EMAIL` / `NEXT_PUBLIC_ADMIN_EMAIL`) y no debe retirarse hasta que exista, se pruebe y se audite un admin por `role`.

## Otros puntos conocidos (menores)

- `getConvocatoriaBankAction` es pública a propósito (simulacro del alumno; el banco base ya está en el JS del cliente).
- `submitResidenteApplicationAction` puede usarse para enviar el correo de confirmación a direcciones ajenas: necesita límite de peticiones o captcha.
- `/api/internal-analytics` acepta eventos sin autenticación.

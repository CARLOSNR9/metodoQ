# Integracion base de pagos (Stripe)

Esta base deja el flujo listo para pagos reales sin exponer secretos en frontend.

## Flujo implementado

1. Usuario elige plan en `/upgrade`.
2. Frontend llama `POST /api/payments/checkout-session` con Firebase ID token.
3. Backend verifica usuario, crea sesion de Stripe Checkout y devuelve `checkoutUrl`.
4. Frontend redirige a Stripe Checkout.
5. Stripe llama `POST /api/payments/webhook` al confirmar pago.
6. Webhook actualiza `users/{uid}` en Firestore (`plan` y `planActivatedAt`).

## Variables de entorno

Copiar `.env.example` a `.env.local` y completar:

- `NEXT_PUBLIC_APP_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_ID_PRO`
- `STRIPE_PRICE_ID_PRO_PLUS`
- `FIREBASE_ADMIN_PROJECT_ID`
- `FIREBASE_ADMIN_CLIENT_EMAIL`
- `FIREBASE_ADMIN_PRIVATE_KEY`

## Endpoints creados

- `POST /api/payments/checkout-session`
  - Seguridad: valida Firebase ID token en backend.
  - Crea sesion de pago en Stripe.

- `POST /api/payments/webhook`
  - Seguridad: valida firma `stripe-signature`.
  - Confirma pago y actualiza plan en Firestore.

## Pruebas locales sugeridas

1. Ejecutar app: `npm run dev`
2. Exponer webhook local con Stripe CLI:
   - `stripe listen --forward-to localhost:3000/api/payments/webhook`
3. Actualizar `STRIPE_WEBHOOK_SECRET` con el valor de Stripe CLI.
4. Probar flujo desde `/upgrade` y confirmar que se actualiza `users/{uid}`.

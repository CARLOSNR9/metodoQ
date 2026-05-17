# Pagos y planes (Fase A — Método Q)

## Modelo unificado de planes

| Plan Firestore | Slug URL | Checkout Stripe |
|----------------|----------|-----------------|
| `FREE` | `free` | No |
| `BASICO` | `basico` | Sí |
| `PRO` | `pro` | Sí |
| `RESIDENTE` | `residente` | Postulación en `/residente` |

Configuración central: `src/lib/plans/config.ts`

## Flujo de compra

1. Usuario elige plan en landing (`#precios`) o `/dashboard/planes`.
2. CTA redirige a `/checkout?plan=pro&cycle=3` (requiere sesión; si no, va a registro).
3. `POST /api/payments/checkout-session` con `{ plan: "PRO", cycle: 3 }` y Firebase ID token.
4. Stripe Checkout (suscripción si `cycle=1`, pago único si `cycle=3|6`).
5. Webhook `checkout.session.completed` / `invoice.paid` activa plan en `users/{uid}` con `planExpiresAt`.

## Variables de entorno

Copiar `.env.example` a `.env.local` y crear en Stripe Dashboard:

- Productos: **Básico** y **Pro**
- Por cada producto, 3 precios:
  - **1 mes**: recurring monthly → `STRIPE_PRICE_*_1M`
  - **3 meses**: one-time → `STRIPE_PRICE_*_3M`
  - **6 meses**: one-time → `STRIPE_PRICE_*_6M`

## Pruebas locales

```bash
npm run dev
stripe listen --forward-to localhost:3000/api/payments/webhook
# Copiar whsec_... a STRIPE_WEBHOOK_SECRET
```

Probar: registro → `/dashboard/planes` → Pro 3 meses → pagar con tarjeta test → verificar Firestore `plan`, `planExpiresAt`.

## Plan Residente

Formulario en `/residente` guarda en colección `residente_applications`. El equipo activa manualmente el plan en admin o Firestore.

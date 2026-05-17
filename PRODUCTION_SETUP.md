# Guía de producción — Método Q

Checklist para lanzar la plataforma con pagos, preguntas, emails y clases en vivo.

## 1. Variables de entorno

Copia `.env.example` a `.env.local` (desarrollo) y configura en Vercel/hosting (producción).

| Grupo | Variables clave |
|-------|-----------------|
| App | `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_ADMIN_EMAIL` |
| Firebase cliente | `NEXT_PUBLIC_FIREBASE_*` |
| Firebase Admin | `FIREBASE_ADMIN_*` |
| Stripe | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_*` |
| Email | `RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_NOTIFICATION_EMAIL`, `CRON_SECRET` |
| Soporte | `NEXT_PUBLIC_WHATSAPP_NUMBER` |

Ver también: [PAYMENTS_SETUP.md](./PAYMENTS_SETUP.md), [EMAIL_SETUP.md](./EMAIL_SETUP.md).

## 2. Firebase

### Authentication
- Habilitar Email/Password y Google (opcional Facebook).
- Dominios autorizados: `localhost`, tu dominio de producción.

### Firestore
1. Despliega reglas desde `firestore.rules`:
   ```bash
   firebase deploy --only firestore:rules
   ```
2. Índices recomendados (consola Firebase → Firestore → Índices):
   - `questions`: `active` Ascending
   - `results`: `userId` Ascending + `fecha` Descending
   - `classes`: `date` Ascending / Descending
   - `analytics_events`: `eventName` Ascending

### Banco de preguntas inicial
1. Inicia sesión como admin → `/admin`
2. **Cargar banco inicial** (12 preguntas)
3. **Agregar banco extendido** (+10 preguntas)

## 3. Stripe

1. Crea productos/precios para Básico y Pro (ciclos 1, 3 y 6 meses).
2. Configura webhook apuntando a:
   ```
   https://tu-dominio.com/api/payments/webhook
   ```
   Eventos: `checkout.session.completed`, `invoice.paid`, `customer.subscription.deleted`
3. Activa cupones en el Dashboard si usas promociones (checkout ya tiene `allow_promotion_codes`).

## 4. Resend (correos)

1. Verifica tu dominio en Resend.
2. Configura `EMAIL_FROM` con ese dominio.
3. Prueba registro y un pago de prueba en modo test.

## 5. Cron de recordatorios

En Vercel, `vercel.json` programa el cron diario. Asegúrate de tener `CRON_SECRET` en el proyecto.

Prueba manual:
```bash
curl -H "Authorization: Bearer TU_CRON_SECRET" \
  https://tu-dominio.com/api/cron/engagement-emails
```

## 6. Clases en vivo (Pro / Residente)

1. En `/admin` → **Programar clase en vivo**
2. Usuarios Pro/Residente ven la clase en el dashboard
3. Tras la sesión, edita la clase y agrega **enlace de grabación** (o crea una nueva con fecha pasada + grabación)

## 7. Plan Residente

- Postulaciones en `/residente` → panel admin con estados
- Activación manual del plan desde **Crear usuario** en admin o actualizando Firestore

## 8. Verificación pre-lanzamiento

- [ ] Registro → diagnóstico gratis → paywall
- [ ] Checkout Básico/Pro → webhook activa plan
- [ ] Simulacro bloqueado en FREE, disponible en Básico+
- [ ] Historial muestra sesiones
- [ ] Email de bienvenida y confirmación de pago
- [ ] Landing sin textos “demo” o placeholders genéricos
- [ ] Admin: preguntas, clases y postulaciones operativos

## 9. Build

```bash
npm run build
npm start
```

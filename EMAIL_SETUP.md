# Configuración de correos (Fase D)

Método Q usa [Resend](https://resend.com) para correos transaccionales y recordatorios.

## Variables de entorno

```env
RESEND_API_KEY=re_xxxx
EMAIL_FROM=Método Q <onboarding@tudominio.com>
ADMIN_NOTIFICATION_EMAIL=admin@tudominio.com
CRON_SECRET=un-secreto-largo-aleatorio
```

- **EMAIL_FROM**: debe usar un dominio verificado en Resend.
- **ADMIN_NOTIFICATION_EMAIL**: recibe alertas de nuevas postulaciones al Plan Residente.

## Correos que se envían

| Evento | Destinatario |
|--------|----------------|
| Registro | Usuario (bienvenida) |
| Pago Stripe exitoso | Usuario (confirmación de plan) |
| Postulación Residente | Usuario + admin |
| Cron diario | Usuarios con plan por vencer (≤3 días) o racha en riesgo |

## Cron de engagement

Llama una vez al día (recomendado 9:00 AM Colombia):

```bash
curl -H "Authorization: Bearer TU_CRON_SECRET" \
  https://tu-dominio.com/api/cron/engagement-emails
```

En Vercel, puedes añadir en `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/engagement-emails",
      "schedule": "0 14 * * *"
    }
  ]
}
```

`14:00 UTC` ≈ 9:00 AM COT (ajusta según horario de verano).

## Preferencias del usuario

En `/dashboard/perfil` el usuario puede desactivar recordatorios (`emailOptIn: false`). Los correos transaccionales de pago y postulación se envían igual.

## Banco de preguntas extendido

En `/admin` → **Agregar banco extendido** carga 10 preguntas adicionales (IDs `ext-*`) sin duplicar las existentes.

## Desarrollo local

Sin `RESEND_API_KEY`, la app funciona con normalidad; los envíos se omiten (`skipped: true` en logs).

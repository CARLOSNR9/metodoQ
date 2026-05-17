import { getAppUrl } from "./client";

function layout(title: string, body: string) {
  const appUrl = getAppUrl();
  return `
<!DOCTYPE html>
<html lang="es">
<body style="font-family:system-ui,sans-serif;background:#0A1F44;color:#e2e8f0;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#111827;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px">
    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#00D1FF">Método Q</p>
    <h1 style="margin:0 0 16px;font-size:22px;color:#fff">${title}</h1>
    ${body}
    <p style="margin:24px 0 0;font-size:12px;color:#94a3b8">
      <a href="${appUrl}" style="color:#00D1FF">Abrir Método Q</a>
    </p>
  </div>
</body>
</html>`;
}

export function welcomeEmail(displayName?: string) {
  const name = displayName?.trim() || "Doc";
  const html = layout(
    "Bienvenido a Método Q",
    `<p style="color:#cbd5e1;line-height:1.6">Hola ${name}, tu cuenta está lista. Haz tu diagnóstico gratis de 10 preguntas y descubre en qué temas debes enfocarte para la residencia médica.</p>
     <p style="margin-top:16px"><a href="${getAppUrl()}/dashboard/entrenar" style="display:inline-block;background:#00D1FF;color:#0A1F44;font-weight:700;padding:12px 20px;border-radius:10px;text-decoration:none">Empezar diagnóstico</a></p>`,
  );
  return {
    subject: "Bienvenido a Método Q — tu diagnóstico te espera",
    html,
    text: `Hola ${name}, tu cuenta en Método Q está lista. Entra a ${getAppUrl()}/dashboard/entrenar para empezar.`,
  };
}

export function paymentConfirmationEmail(planName: string, cycleMonths: number, expiresAt: string) {
  const expiry = new Date(expiresAt).toLocaleDateString("es-CO", {
    dateStyle: "long",
  });
  const html = layout(
    "Pago confirmado",
    `<p style="color:#cbd5e1;line-height:1.6">Tu plan <strong style="color:#fff">${planName}</strong> (${cycleMonths} ${cycleMonths === 1 ? "mes" : "meses"}) está activo hasta el <strong style="color:#fff">${expiry}</strong>.</p>
     <p style="color:#cbd5e1">Ya puedes usar simulacros, entrenamiento adaptativo y todo lo incluido en tu membresía.</p>`,
  );
  return {
    subject: `Método Q — Plan ${planName} activado`,
    html,
    text: `Plan ${planName} activo hasta ${expiry}. Entrena en ${getAppUrl()}/dashboard/entrenar`,
  };
}

export function planExpiryReminderEmail(planName: string, daysRemaining: number) {
  const html = layout(
    "Tu membresía vence pronto",
    `<p style="color:#cbd5e1;line-height:1.6">Tu plan <strong style="color:#fff">${planName}</strong> vence en <strong style="color:#fff">${daysRemaining} día${daysRemaining === 1 ? "" : "s"}</strong>. Renueva para no perder acceso a simulacros y tu historial.</p>
     <p style="margin-top:16px"><a href="${getAppUrl()}/dashboard/planes" style="display:inline-block;background:#00D1FF;color:#0A1F44;font-weight:700;padding:12px 20px;border-radius:10px;text-decoration:none">Renovar plan</a></p>`,
  );
  return {
    subject: `Método Q — Tu plan vence en ${daysRemaining} días`,
    html,
    text: `Renueva tu plan ${planName} en ${getAppUrl()}/dashboard/planes`,
  };
}

export function streakReminderEmail(streakCount: number) {
  const html = layout(
    "No pierdas tu racha",
    `<p style="color:#cbd5e1;line-height:1.6">Llevas <strong style="color:#fff">${streakCount} días</strong> de racha. Entrena hoy con al menos una sesión para mantenerla.</p>
     <p style="margin-top:16px"><a href="${getAppUrl()}/dashboard/entrenar" style="display:inline-block;background:#00D1FF;color:#0A1F44;font-weight:700;padding:12px 20px;border-radius:10px;text-decoration:none">Entrenar ahora</a></p>`,
  );
  return {
    subject: "Método Q — Tu racha de estudio te espera",
    html,
    text: `Mantén tu racha de ${streakCount} días: ${getAppUrl()}/dashboard/entrenar`,
  };
}

export function residenteApplicationUserEmail(name: string) {
  const html = layout(
    "Postulación recibida",
    `<p style="color:#cbd5e1;line-height:1.6">Hola ${name}, recibimos tu postulación al Plan Residente. El equipo médico te contactará en menos de 48 horas.</p>`,
  );
  return {
    subject: "Método Q — Postulación Plan Residente recibida",
    html,
    text: `Hola ${name}, recibimos tu postulación al Plan Residente.`,
  };
}

export function residenteApplicationAdminEmail(input: {
  name: string;
  email: string;
  phone: string;
  university: string;
  message: string;
}) {
  const html = layout(
    "Nueva postulación Residente",
    `<ul style="color:#cbd5e1;line-height:1.8;padding-left:18px">
      <li><strong>Nombre:</strong> ${input.name}</li>
      <li><strong>Email:</strong> ${input.email}</li>
      <li><strong>WhatsApp:</strong> ${input.phone}</li>
      <li><strong>Universidad:</strong> ${input.university}</li>
      <li><strong>Mensaje:</strong> ${input.message || "—"}</li>
    </ul>`,
  );
  return {
    subject: `Nueva postulación Residente — ${input.name}`,
    html,
    text: `Postulación de ${input.name} (${input.email})`,
  };
}

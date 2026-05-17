export type SendEmailInput = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
};

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

export async function sendEmail(input: SendEmailInput): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    return { ok: false, error: "Email no configurado (RESEND_API_KEY / EMAIL_FROM)." };
  }

  const to = Array.isArray(input.to) ? input.to : [input.to];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: input.subject,
        html: input.html,
        text: input.text,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Resend error:", response.status, body);
      return { ok: false, error: "No se pudo enviar el correo." };
    }

    return { ok: true };
  } catch (error) {
    console.error("sendEmail", error);
    return { ok: false, error: "Error de red al enviar correo." };
  }
}

export function getAdminNotificationEmail(): string | null {
  return (
    process.env.ADMIN_NOTIFICATION_EMAIL ??
    process.env.NEXT_PUBLIC_ADMIN_EMAIL ??
    null
  );
}

export function getAppUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
}

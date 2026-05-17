type StripeLikeError = {
  type?: string;
  message?: string;
};

function isStripeError(error: unknown): error is StripeLikeError {
  return (
    typeof error === "object" &&
    error !== null &&
    "type" in error &&
    typeof (error as StripeLikeError).type === "string" &&
    (error as StripeLikeError).type!.startsWith("Stripe")
  );
}

/** Mensaje seguro para el cliente; no expone secretos. */
export function getSafeCheckoutErrorMessage(error: unknown): string {
  if (isStripeError(error)) {
    const message = error.message ?? "";

    if (message.includes("No such price")) {
      return "El ID de precio de Stripe no existe o no coincide con el modo test/live. Revisa las variables STRIPE_PRICE_* en Vercel.";
    }

    if (
      message.toLowerCase().includes("recurring") ||
      message.toLowerCase().includes("subscription") ||
      message.toLowerCase().includes("one time")
    ) {
      return "El precio en Stripe no coincide con el tipo de cobro (1 mes = suscripción; 3/6 meses = pago único). Revisa el producto en el Dashboard de Stripe.";
    }

    if (error.type === "StripeAuthenticationError") {
      return "La clave secreta de Stripe no es válida. Revisa STRIPE_SECRET_KEY en Vercel.";
    }

    return `Error de Stripe: ${message}`;
  }

  if (error instanceof Error) {
    const msg = error.message;

    if (msg.includes("FIREBASE_ADMIN") || msg.includes("Faltan variables FIREBASE_ADMIN")) {
      return "El servidor no puede verificar tu sesión (Firebase Admin sin configurar).";
    }

    if (msg.includes("STRIPE_SECRET_KEY")) {
      return "Pagos no configurados en el servidor (falta STRIPE_SECRET_KEY).";
    }

    if (
      msg.includes("id-token-expired") ||
      msg.includes("ID token has expired") ||
      msg.includes("id-token-revoked")
    ) {
      return "Tu sesión expiró. Cierra sesión, vuelve a entrar e intenta de nuevo.";
    }

    if (msg.includes("Decoding Firebase ID token failed") || msg.includes("invalid")) {
      return "No se pudo validar tu sesión. Vuelve a iniciar sesión e intenta de nuevo.";
    }
  }

  return "No se pudo iniciar el proceso de pago.";
}

type FriendlyMessage = {
  title: string;
  subtitle: string;
  emoji: string;
};

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

function hourBand(hour: number): "night" | "early" | "morning" | "midday" | "afternoon" | "evening" {
  if (hour >= 22 || hour < 5) return "night";
  if (hour < 8) return "early";
  if (hour < 12) return "morning";
  if (hour < 14) return "midday";
  if (hour < 18) return "afternoon";
  return "evening";
}

const BREAK_BY_BAND: Record<ReturnType<typeof hourBand>, FriendlyMessage[]> = {
  night: [
    {
      emoji: "🌙",
      title: "Mi doctora, ¿será que ya salió la luna?",
      subtitle: "Mira por la ventana un minuto — o el semáforo de la esquina, a veces también ilumina.",
    },
    {
      emoji: "✨",
      title: "Pausa nocturna: recarga neuronas",
      subtitle: "Estira el cuello, respira hondo y vuelve con calma. Tu cerebro te lo agradece.",
    },
    {
      emoji: "☕",
      title: "¿Té o café de medianoche?",
      subtitle: "Solo si no te roba el sueño después. Diez minutos, sin culpa.",
    },
  ],
  early: [
    {
      emoji: "🌅",
      title: "¡Buenos días, doctora!",
      subtitle: "Es momento de un desayuno ligero — tu cerebro ya trabajó media hora en grande.",
    },
    {
      emoji: "🥐",
      title: "Momento de desayunar",
      subtitle: "Algo rápido y rico. Diez minutos para ti, luego seguimos con todo.",
    },
  ],
  morning: [
    {
      emoji: "☀️",
      title: "¡Es momento de ir a ver al sol!",
      subtitle: "Sal un ratito: si llueve, mira la ventana; si no, un poco de luz real.",
    },
    {
      emoji: "☕",
      title: "Momento de tomar un café",
      subtitle: "Diez minutos para la taza perfecta. Sin prisa, con aroma.",
    },
    {
      emoji: "🐾",
      title: "Momento de pasear a tu mascota",
      subtitle: "O saludar a la planta del balcón — también cuenta como terapia.",
    },
    {
      emoji: "🪟",
      title: "Mira qué hace el clima",
      subtitle: "Abre la ventana: sol, nubes o lluvia — tu cabeza necesita otro paisaje.",
    },
  ],
  midday: [
    {
      emoji: "🍽️",
      title: "Hora de almorzar algo ligero",
      subtitle: "No hace falta banquete: hidrátate y come un poco. Diez minutos bien usados.",
    },
    {
      emoji: "💧",
      title: "Momento de refrescarte",
      subtitle: "Agua, cara al agua fría, estirar piernas. Vuelves como nueva.",
    },
    {
      emoji: "☀️",
      title: "El sol del mediodía te espera",
      subtitle: "Cinco pasos afuera — o a la ventana si el calor es de locos.",
    },
  ],
  afternoon: [
    {
      emoji: "☕",
      title: "¿Un cafecito de la tarde?",
      subtitle: "Diez minutos para recargar. Tu próximo bloque de estudio te lo agradecerá.",
    },
    {
      emoji: "🚶",
      title: "Camina un poco",
      subtitle: "Alrededor de la casa, al patio, a la tienda. Mueve las piernas, descansa la mente.",
    },
    {
      emoji: "🐾",
      title: "Tu mascota (o tú) merece un paseo",
      subtitle: "Diez minutos de aire fresco. El tablero de notas puede esperar.",
    },
  ],
  evening: [
    {
      emoji: "🌆",
      title: "Mira cómo cae la tarde",
      subtitle: "Un respiro a la ventana: el cielo cambia de color y tú también.",
    },
    {
      emoji: "🍎",
      title: "Snack de tarde",
      subtitle: "Fruta, agua, algo rico. Diez minutos sin pantalla si puedes.",
    },
    {
      emoji: "🌙",
      title: "¿Ya asoma la luna?",
      subtitle: "Un vistazo al cielo — a veces aparece antes de lo que crees.",
    },
  ],
};

const RESUME_MESSAGES: FriendlyMessage[] = [
  {
    emoji: "💪",
    title: "¡Listo! Recárgate y sigue practicando",
    subtitle: "Tu siguiente bloque de 50 minutos empieza cuando tú digas. Tú mandas.",
  },
  {
    emoji: "📚",
    title: "De vuelta al estudio, doctora",
    subtitle: "Ya descansaste. Ahora a repasar esas píldoras con cabeza fresca.",
  },
  {
    emoji: "🎯",
    title: "Siguiente ronda — tú puedes",
    subtitle: "Cada bloque suma. Pulsa cuando estés lista y arrancamos.",
  },
];

const SESSION_COMPLETE: FriendlyMessage = {
  emoji: "🏆",
  title: "¡Tres horas de foco! Eres una máquina",
  subtitle:
    "Completaste 3 ciclos de 50 + 10 minutos. Celebra un poco — te lo ganaste de verdad.",
};

export function getBreakMessage(now = new Date()): FriendlyMessage {
  return pickRandom(BREAK_BY_BAND[hourBand(now.getHours())]);
}

export function getStudyResumeMessage(): FriendlyMessage {
  return pickRandom(RESUME_MESSAGES);
}

export function getSessionCompleteMessage(): FriendlyMessage {
  return SESSION_COMPLETE;
}

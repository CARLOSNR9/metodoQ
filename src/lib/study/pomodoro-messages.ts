import {
  POMODORO_BREAK_MINUTES,
  POMODORO_CYCLES,
  POMODORO_STUDY_MINUTES,
} from "@/lib/study/pomodoro-config";

/** Duraciones de la sesión, para que los textos no den cifras equivocadas. */
export type PomodoroDurations = {
  studyMinutes: number;
  breakMinutes: number;
  cycles: number;
};

const DEFAULT_DURATIONS: PomodoroDurations = {
  studyMinutes: POMODORO_STUDY_MINUTES,
  breakMinutes: POMODORO_BREAK_MINUTES,
  cycles: POMODORO_CYCLES,
};

/** Los textos están escritos para 50 + 10 min; se ajustan a la sesión real. */
function withDurations(message: FriendlyMessage, durations: PomodoroDurations): FriendlyMessage {
  const adjust = (text: string) => {
    let result = text;
    if (durations.studyMinutes !== 50) {
      result = result.replace(/\b50 minutos\b/g, `${durations.studyMinutes} minutos`);
    }
    if (durations.breakMinutes !== 10) {
      result = result.replace(/\bDiez minutos\b/g, `${durations.breakMinutes} minutos`);
    }
    return result;
  };
  return { ...message, title: adjust(message.title), subtitle: adjust(message.subtitle) };
}

function formatFocusTime(totalMinutes: number): string {
  if (totalMinutes % 60 === 0) {
    const hours = totalMinutes / 60;
    return hours === 1 ? "Una hora" : hours === 3 ? "Tres horas" : `${hours} horas`;
  }
  if (totalMinutes < 60) return `${totalMinutes} minutos`;
  return `${Math.floor(totalMinutes / 60)} h ${totalMinutes % 60} min`;
}

type FriendlyMessage = {
  title: string;
  subtitle: string;
  emoji: string;
};

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

function docLabel(greetingName?: string): string {
  const trimmed = greetingName?.trim();
  return trimmed && trimmed !== "Doc" ? trimmed : "Doc";
}

function hourBand(hour: number): "night" | "early" | "morning" | "midday" | "afternoon" | "evening" {
  if (hour >= 22 || hour < 5) return "night";
  if (hour < 8) return "early";
  if (hour < 12) return "morning";
  if (hour < 14) return "midday";
  if (hour < 18) return "afternoon";
  return "evening";
}

function buildBreakMessages(name: string): Record<ReturnType<typeof hourBand>, FriendlyMessage[]> {
  return {
    night: [
      {
        emoji: "🌙",
        title: `${name}, ¿será que ya salió la luna?`,
        subtitle: "Mira por la ventana un minuto — o el semáforo de la esquina, a veces también ilumina.",
      },
      {
        emoji: "✨",
        title: `${name}, pausa nocturna: recarga neuronas`,
        subtitle: "Estira el cuello, respira hondo y vuelve con calma. Tu cerebro te lo agradece.",
      },
      {
        emoji: "☕",
        title: `${name}, ¿té o café de medianoche?`,
        subtitle: "Solo si no te roba el sueño después. Diez minutos, sin culpa.",
      },
    ],
    early: [
      {
        emoji: "🌅",
        title: `¡Buenos días, ${name}!`,
        subtitle: "Es momento de un desayuno ligero — tu cerebro ya trabajó 50 minutos en grande.",
      },
      {
        emoji: "🥐",
        title: `${name}, momento de desayunar`,
        subtitle: "Algo rápido y rico. Diez minutos para ti, luego seguimos con todo.",
      },
    ],
    morning: [
      {
        emoji: "☀️",
        title: `${name}, ¡es momento de ir a ver al sol!`,
        subtitle: "Sal un ratito: si llueve, mira la ventana; si no, un poco de luz real.",
      },
      {
        emoji: "☕",
        title: `${name}, momento de tomar un café`,
        subtitle: "Diez minutos para la taza perfecta. Sin prisa, con aroma.",
      },
      {
        emoji: "🐾",
        title: `${name}, momento de pasear a tu mascota`,
        subtitle: "O saludar a la planta del balcón — también cuenta como terapia.",
      },
      {
        emoji: "🪟",
        title: `${name}, mira qué hace el clima`,
        subtitle: "Abre la ventana: sol, nubes o lluvia — tu cabeza necesita otro paisaje.",
      },
    ],
    midday: [
      {
        emoji: "🍽️",
        title: `${name}, hora de almorzar algo ligero`,
        subtitle: "No hace falta banquete: hidrátate y come un poco. Diez minutos bien usados.",
      },
      {
        emoji: "💧",
        title: `${name}, momento de refrescarte`,
        subtitle: "Agua, cara al agua fría, estirar piernas. Vuelves como nueva.",
      },
      {
        emoji: "☀️",
        title: `${name}, el sol del mediodía te espera`,
        subtitle: "Cinco pasos afuera — o a la ventana si el calor es de locos.",
      },
    ],
    afternoon: [
      {
        emoji: "☕",
        title: `${name}, ¿un cafecito de la tarde?`,
        subtitle: "Diez minutos para recargar. Tu próximo bloque de estudio te lo agradecerá.",
      },
      {
        emoji: "🚶",
        title: `${name}, camina un poco`,
        subtitle: "Alrededor de la casa, al patio, a la tienda. Mueve las piernas, descansa la mente.",
      },
      {
        emoji: "🐾",
        title: `${name}, tu mascota (o tú) merece un paseo`,
        subtitle: "Diez minutos de aire fresco. El tablero de notas puede esperar.",
      },
    ],
    evening: [
      {
        emoji: "🌆",
        title: `${name}, mira cómo cae la tarde`,
        subtitle: "Un respiro a la ventana: el cielo cambia de color y tú también.",
      },
      {
        emoji: "🍎",
        title: `${name}, snack de tarde`,
        subtitle: "Fruta, agua, algo rico. Diez minutos sin pantalla si puedes.",
      },
      {
        emoji: "🌙",
        title: `${name}, ¿ya asoma la luna?`,
        subtitle: "Un vistazo al cielo — a veces aparece antes de lo que crees.",
      },
    ],
  };
}

function buildResumeMessages(name: string): FriendlyMessage[] {
  return [
    {
      emoji: "💪",
      title: `¡Listo, ${name}! Recárgate y sigue practicando`,
      subtitle: "Tu siguiente bloque de 50 minutos empieza cuando tú digas. Tú mandas.",
    },
    {
      emoji: "📚",
      title: `De vuelta al estudio, ${name}`,
      subtitle: "Ya descansaste. Ahora a repasar esas píldoras con cabeza fresca.",
    },
    {
      emoji: "🎯",
      title: `${name}, siguiente ronda — tú puedes`,
      subtitle: "Cada bloque suma. Pulsa cuando estés listo y arrancamos.",
    },
  ];
}

export function getBreakMessage(
  now = new Date(),
  greetingName?: string,
  durations: PomodoroDurations = DEFAULT_DURATIONS,
): FriendlyMessage {
  const name = docLabel(greetingName);
  const messages = buildBreakMessages(name);
  return withDurations(pickRandom(messages[hourBand(now.getHours())]), durations);
}

export function getStudyResumeMessage(
  greetingName?: string,
  durations: PomodoroDurations = DEFAULT_DURATIONS,
): FriendlyMessage {
  const name = docLabel(greetingName);
  return withDurations(pickRandom(buildResumeMessages(name)), durations);
}

export function getSessionCompleteMessage(
  greetingName?: string,
  durations: PomodoroDurations = DEFAULT_DURATIONS,
): FriendlyMessage {
  const name = docLabel(greetingName);
  const { studyMinutes, breakMinutes, cycles } = durations;
  const totalMinutes = cycles * (studyMinutes + breakMinutes);
  return {
    emoji: "🏆",
    title: `¡${formatFocusTime(totalMinutes)} de foco, ${name}! Eres una máquina`,
    subtitle: `Completaste ${cycles} ciclos de ${studyMinutes} + ${breakMinutes} minutos. Celebra un poco — te lo ganaste de verdad.`,
  };
}

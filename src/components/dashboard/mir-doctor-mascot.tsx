import { useId } from "react";

type MirDoctorMascotProps = {
  className?: string;
};

const NAVY = "#0A1F44";
const GOLD = "#F5B324";
const COAT_LINE = "#CBD5E1";

/**
 * Versión "doctora" de la mascota MIR para el mensaje de bienvenida: cuerpo
 * de cuerpo entero con pelo de llama, bata blanca, estetoscopio y un brazo
 * saludando. Dibujada a mano en SVG para mantener el tema oscuro/dorado.
 */
export function MirDoctorMascot({ className }: MirDoctorMascotProps) {
  // Ids únicos por instancia para que los degradados no choquen con otros SVG.
  const uid = useId().replace(/:/g, "");
  const hairId = `mirDoctorHair-${uid}`;
  const skinId = `mirDoctorSkin-${uid}`;

  return (
    <svg viewBox="0 0 160 220" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={hairId} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="55%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FFF1B8" />
        </linearGradient>
        <linearGradient id={skinId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFEFB0" />
          <stop offset="100%" stopColor="#FFC940" />
        </linearGradient>
      </defs>

      {/* Piernas y pies. */}
      <path d="M66 180 L64 204 M94 180 L96 204" stroke={GOLD} strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="59" cy="206" rx="10" ry="4.5" fill={GOLD} />
      <ellipse cx="101" cy="206" rx="10" ry="4.5" fill={GOLD} />

      {/* Pelo de llama. */}
      <path
        d="M40 88 C32 66 38 48 50 36 C50 48 56 54 62 56 C58 38 68 20 84 8 C80 26 88 38 96 42 C96 30 104 22 114 18 C108 32 112 44 118 52 C124 46 128 40 130 32 C136 54 130 74 120 88 Z"
        fill={`url(#${hairId})`}
      />

      {/* Cuerpo y brillo. */}
      <path
        d="M80 46 C108 46 122 64 122 96 L122 158 C122 174 108 184 80 184 C52 184 38 174 38 158 L38 96 C38 64 52 46 80 46 Z"
        fill={`url(#${skinId})`}
      />
      <path
        d="M104 58 C112 66 116 76 116 88"
        fill="none"
        stroke="#FFF6D0"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Brazo izquierdo en reposo y brazo derecho saludando (manga blanca de la bata). */}
      <path d="M42 134 L32 156" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" />
      <path d="M32 156 L28 174" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />
      <circle cx="28" cy="176" r="6" fill={GOLD} />
      <path d="M118 134 L132 120" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" />
      <path d="M132 120 L140 100" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />
      <circle cx="141" cy="96" r="6.5" fill={GOLD} />

      {/* Bata con cuello en V, solapas, botones, bolsillo con bolígrafos y cruz médica. */}
      <path
        d="M38 132 C48 124 62 122 70 124 L80 150 L90 124 C98 122 112 124 122 132 L122 158 C122 174 108 184 80 184 C52 184 38 174 38 158 Z"
        fill="#FFFFFF"
      />
      <path d="M70 124 L80 150 L90 124 C86 122 74 122 70 124 Z" fill="#2563EB" />
      <path
        d="M70 124 L76 140 L68 146 M90 124 L84 140 L92 146"
        fill="none"
        stroke={COAT_LINE}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M80 150 L80 183" stroke={COAT_LINE} strokeWidth="2" />
      <circle cx="86" cy="160" r="1.8" fill="#94A3B8" />
      <circle cx="86" cy="172" r="1.8" fill="#94A3B8" />
      <rect x="46" y="152" width="18" height="13" rx="2" fill="none" stroke={COAT_LINE} strokeWidth="2" />
      <path d="M51 148 L51 156 M57 147 L57 156" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M98 152 h6 v-6 h6 v6 h6 v6 h-6 v6 h-6 v-6 h-6 Z" fill="#EF4444" />

      {/* Estetoscopio. */}
      <path
        d="M66 124 C62 142 68 152 76 154 M94 124 C98 142 92 152 84 154"
        fill="none"
        stroke={NAVY}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M76 154 C80 156 82 160 82 166 C82 172 78 174 74 172"
        fill="none"
        stroke={NAVY}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="70" cy="172" r="5.5" fill={COAT_LINE} stroke={NAVY} strokeWidth="3" />

      {/* Cara: cejas, ojos grandes, mejillas y sonrisa. */}
      <path
        d="M56 70 Q66 64 74 70 M86 70 Q94 64 104 70"
        fill="none"
        stroke={NAVY}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <ellipse cx="66" cy="88" rx="10" ry="12" fill="#FFFFFF" />
      <ellipse cx="94" cy="88" rx="10" ry="12" fill="#FFFFFF" />
      <circle cx="68" cy="90" r="6.5" fill={NAVY} />
      <circle cx="96" cy="90" r="6.5" fill={NAVY} />
      <circle cx="70" cy="87" r="2.2" fill="#FFFFFF" />
      <circle cx="98" cy="87" r="2.2" fill="#FFFFFF" />
      <ellipse cx="54" cy="106" rx="7" ry="4.5" fill="#F5896B" opacity="0.5" />
      <ellipse cx="106" cy="106" rx="7" ry="4.5" fill="#F5896B" opacity="0.5" />
      <path
        d="M70 108 Q82 118 94 106"
        fill="none"
        stroke={NAVY}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

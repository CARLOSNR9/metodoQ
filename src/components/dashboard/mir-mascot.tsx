import { useId } from "react";

type MirMascotProps = {
  /** "wave": saluda con un brazo arriba (celebración). "read": sostiene un libro abierto. */
  pose?: "wave" | "read";
  className?: string;
};

const NAVY = "#0A1F44";
const GOLD = "#F5B324";
const BLUSH = "#F5896B";

/**
 * Mascota original del módulo MIR: un "duendecillo" dorado con forma de
 * llama, ligado visualmente a la racha (🔥) del módulo. Dibujado a mano en
 * SVG (sin depender de assets externos) para mantener el tema oscuro/dorado
 * consistente en cualquier tamaño.
 */
export function MirMascot({ pose = "wave", className }: MirMascotProps) {
  // Un id por instancia: si dos mascotas comparten id de degradado y la
  // primera está oculta (display:none), la segunda se queda sin relleno.
  const gradientId = `mirMascotBody-${useId().replace(/:/g, "")}`;
  const eyeY = pose === "read" ? 104 : 110;

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE58A" />
          <stop offset="100%" stopColor={GOLD} />
        </linearGradient>
      </defs>

      {pose === "wave" ? (
        <>
          {/* Brazo izquierdo levantado saludando y brazo derecho en reposo (detrás del cuerpo). */}
          <path d="M46 118 C34 108 28 92 26 74" fill="none" stroke={NAVY} strokeWidth="18" strokeLinecap="round" />
          <path d="M46 118 C34 108 28 92 26 74" fill="none" stroke={GOLD} strokeWidth="10" strokeLinecap="round" />
          <path d="M154 136 C164 144 168 152 166 162" fill="none" stroke={NAVY} strokeWidth="18" strokeLinecap="round" />
          <path d="M154 136 C164 144 168 152 166 162" fill="none" stroke={GOLD} strokeWidth="10" strokeLinecap="round" />
          <circle cx="26" cy="70" r="11" fill={GOLD} stroke={NAVY} strokeWidth="4" />
          <circle cx="166" cy="164" r="10" fill={GOLD} stroke={NAVY} strokeWidth="4" />
        </>
      ) : null}

      {/* Cuerpo en forma de llama con la punta ondulada y un brillo. */}
      <path
        d="M100 16 C112 34 106 44 118 58 C140 82 160 100 160 128 C160 162 134 184 100 184 C66 184 40 162 40 128 C40 100 58 80 74 64 C86 52 96 40 100 16 Z"
        fill={`url(#${gradientId})`}
        stroke={NAVY}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M100 60 C110 76 122 90 122 108"
        fill="none"
        stroke="#FFF6D0"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Ojos y mejillas. */}
      <ellipse cx="80" cy={eyeY} rx="8" ry="11" fill={NAVY} />
      <ellipse cx="120" cy={eyeY} rx="8" ry="11" fill={NAVY} />
      <circle cx="83" cy={eyeY - 4} r="3" fill="#FFFFFF" />
      <circle cx="123" cy={eyeY - 4} r="3" fill="#FFFFFF" />
      <ellipse cx="66" cy={eyeY + 16} rx="8" ry="5" fill={BLUSH} opacity="0.55" />
      <ellipse cx="134" cy={eyeY + 16} rx="8" ry="5" fill={BLUSH} opacity="0.55" />

      {pose === "read" ? (
        <>
          <path
            d="M90 122 Q100 130 110 122"
            fill="none"
            stroke={NAVY}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Libro abierto sostenido con ambas manos, por debajo de la cara. */}
          <path
            d="M100 146 C88 140 72 139 58 142 L58 176 C72 173 88 174 100 180 C112 174 128 173 142 176 L142 142 C128 139 112 140 100 146 Z"
            fill="#1E4E9C"
            stroke={NAVY}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M100 146 C89 141 76 140 64 142 L64 170 C76 168 89 169 100 174 Z" fill="#FFFFFF" />
          <path d="M100 146 C111 141 124 140 136 142 L136 170 C124 168 111 169 100 174 Z" fill="#F4F1E8" />
          <path d="M100 146 L100 176" stroke={NAVY} strokeWidth="3" />
          <path
            d="M72 151 L92 153 M72 158 L92 160 M108 153 L128 151 M108 160 L128 158"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="56" cy="158" r="9" fill={GOLD} stroke={NAVY} strokeWidth="4" />
          <circle cx="144" cy="158" r="9" fill={GOLD} stroke={NAVY} strokeWidth="4" />
        </>
      ) : (
        <>
          <path
            d="M84 132 Q100 148 116 132 Z"
            fill={NAVY}
            stroke={NAVY}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M92 139 Q100 144 108 139"
            fill="none"
            stroke={BLUSH}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Destellos de celebración. */}
          <path d="M48 30 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 Z" fill="#FFE58A" />
          <circle cx="168" cy="58" r="4" fill="#FFE58A" />
          <circle cx="178" cy="80" r="2.5" fill="#FFE58A" />
        </>
      )}
    </svg>
  );
}

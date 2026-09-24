type MirMascotProps = {
  /** "wave": saluda con un brazo arriba (celebración). "read": sostiene un libro. */
  pose?: "wave" | "read";
  className?: string;
};

/**
 * Mascota original del módulo MIR: un "duendecillo" dorado con forma de
 * llama, ligado visualmente a la racha (🔥) del módulo. Dibujado a mano en
 * SVG (sin depender de assets externos) para mantener el tema oscuro/dorado
 * consistente en cualquier tamaño.
 */
export function MirMascot({ pose = "wave", className }: MirMascotProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mirMascotBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE58A" />
          <stop offset="100%" stopColor="#F5B324" />
        </linearGradient>
      </defs>

      {pose === "wave" ? (
        <>
          <path
            d="M52 96 C40 102 32 110 30 118 C28 126 34 130 42 126 C48 123 54 116 58 108 Z"
            fill="#F5B324"
          />
          <path
            d="M148 92 C162 90 176 92 184 98 C192 104 188 112 178 112 C168 112 156 106 148 100 Z"
            fill="#F5B324"
          />
        </>
      ) : (
        <>
          <path
            d="M56 118 C48 128 46 140 50 148 C54 156 62 154 66 144 C69 136 68 124 64 114 Z"
            fill="#F5B324"
          />
          <path
            d="M144 118 C152 128 154 140 150 148 C146 156 138 154 134 144 C131 136 132 124 136 114 Z"
            fill="#F5B324"
          />
        </>
      )}

      <path
        d="M100 14 C132 46 158 78 158 114 C158 152 132 178 100 178 C68 178 42 152 42 114 C42 78 68 46 100 14 Z"
        fill="url(#mirMascotBody)"
        stroke="#0A1F44"
        strokeWidth="4"
      />

      <ellipse cx="76" cy="110" rx="9" ry="12" fill="#0A1F44" />
      <ellipse cx="124" cy="110" rx="9" ry="12" fill="#0A1F44" />
      <circle cx="79" cy="105" r="2.5" fill="#FFFFFF" />
      <circle cx="127" cy="105" r="2.5" fill="#FFFFFF" />

      <ellipse cx="66" cy="128" rx="8" ry="5" fill="#F5896B" opacity="0.55" />
      <ellipse cx="134" cy="128" rx="8" ry="5" fill="#F5896B" opacity="0.55" />

      {pose === "read" ? (
        <>
          <rect x="78" y="128" width="44" height="32" rx="4" fill="#0A1F44" />
          <rect x="82" y="132" width="36" height="24" rx="2" fill="#FFFFFF" />
          <line x1="100" y1="132" x2="100" y2="156" stroke="#0A1F44" strokeWidth="2" />
        </>
      ) : (
        <path
          d="M84 138 Q100 150 116 138"
          fill="none"
          stroke="#0A1F44"
          strokeWidth="4"
          strokeLinecap="round"
        />
      )}

      {pose === "wave" ? (
        <>
          <circle cx="34" cy="70" r="4" fill="#FFE58A" />
          <circle cx="168" cy="60" r="3" fill="#FFE58A" />
          <circle cx="152" cy="40" r="2.5" fill="#FFE58A" />
        </>
      ) : null}
    </svg>
  );
}

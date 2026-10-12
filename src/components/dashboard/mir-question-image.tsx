"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import type { QuestionImage } from "@/lib/questions/types";

/**
 * Imagen de una pregunta MIR «de imagen». Se ve dentro de la tarjeta y, al
 * tocarla, a pantalla completa sobre fondo negro (en el móvil se puede
 * ampliar con los dedos). `compact` la reduce para los repasos.
 */
export function MirQuestionImage({
  image,
  number,
  compact = false,
}: {
  image: QuestionImage;
  /** Número de la imagen en el cuadernillo oficial. */
  number?: number;
  compact?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const caption = number ? `Imagen ${number}` : "Imagen";

  return (
    <figure className={compact ? "mt-3" : "mt-4"}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-black"
        aria-label={`Ampliar ${caption.toLowerCase()}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 768px) 100vw, 720px"
          className={`mx-auto h-auto w-auto max-w-full object-contain ${compact ? "max-h-56" : "max-h-[26rem]"}`}
        />
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white opacity-90 group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" />
          Ampliar
        </span>
      </button>
      <figcaption className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        {caption}
      </figcaption>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Cerrar imagen"
          >
            <X className="h-5 w-5" />
          </button>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="100vw"
            className="h-auto max-h-full w-auto max-w-full touch-pinch-zoom object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </figure>
  );
}

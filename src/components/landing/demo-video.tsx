"use client";

import { Play, Sparkles } from "lucide-react";

export function DemoVideo() {
  return (
    <div className="relative mt-12 w-full max-w-5xl overflow-hidden rounded-2xl border border-mq-border bg-mq-surface p-2 shadow-2xl lg:mt-16">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-xl">
        {/* Placeholder for Video/GIF */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="group relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-mq-accent shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(0,209,255,0.6)]">
            <Play className="ml-1 h-8 w-8 fill-mq-accent-foreground text-mq-accent-foreground" />
            
            {/* Pulsing ring */}
            <div className="absolute inset-0 animate-ping rounded-full bg-mq-accent opacity-20" />
          </div>
          
          <div className="mt-8 flex flex-col gap-2">
            <p className="text-lg font-bold text-white sm:text-xl">
              Mira cómo funciona en 20 segundos
            </p>
            <p className="text-sm text-mq-muted max-w-md">
              Escribe cualquier tema complejo y observa cómo la IA de Método Q lo simplifica al instante.
            </p>
          </div>
        </div>

        {/* Fake UI elements to simulate product */}
        <div className="absolute bottom-6 left-6 right-6 hidden h-32 flex-col gap-3 rounded-lg border border-mq-border bg-background/40 p-4 backdrop-blur-md sm:flex">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-mq-accent animate-pulse" />
            <div className="h-3 w-48 rounded-full bg-white/10" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full rounded-full bg-white/5" />
            <div className="h-3 w-3/4 rounded-full bg-white/5" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full bg-mq-accent/10 blur-[80px]" />
      <div className="absolute -right-10 -bottom-10 -z-10 h-40 w-40 rounded-full bg-mq-accent/10 blur-[80px]" />
    </div>
  );
}

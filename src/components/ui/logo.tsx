import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-bold tracking-tighter ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-mq-accent shadow-[0_0_15px_rgba(0,209,255,0.4)] sm:h-9 sm:w-9">
        <span className="text-xl text-mq-accent-foreground sm:text-2xl">Q</span>
        <div className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white]" />
      </div>
      <span className="text-lg text-white sm:text-xl">
        Método<span className="text-mq-accent">Q</span>
      </span>
    </div>
  );
}

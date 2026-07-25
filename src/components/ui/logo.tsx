import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Tipografía pura para resolución perfecta */}
      <div className="flex items-baseline font-bold tracking-tight">
        <span className="text-[1.35rem] sm:text-[1.7rem] text-slate-900 leading-none">
          Método
        </span>
        <span className="text-[1.5rem] sm:text-[2rem] text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 leading-none">
          Q
        </span>
      </div>
    </div>
  );
}

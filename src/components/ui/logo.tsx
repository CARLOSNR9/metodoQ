import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo principal (Horizontal con fondo transparente/oscuro) */}
      <img 
        src="/logo-full.png" 
        alt="Método Q" 
        className="h-8 sm:h-10 w-auto object-contain"
      />
    </div>
  );
}

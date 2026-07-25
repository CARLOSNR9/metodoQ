"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type ThemeSelectOption = {
  value: string;
  label: string;
};

type ThemeSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: ThemeSelectOption[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  required?: boolean;
};

export function ThemeSelect({
  value,
  onChange,
  options,
  placeholder = "Seleccionar",
  className,
  disabled,
  name,
  required,
}: ThemeSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      {name ? <input type="hidden" name={name} value={value} required={required} /> : null}

      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200",
          "bg-white px-3 py-2.5 text-left text-sm outline-none transition-colors",
          "hover:border-mq-accent/40 focus:border-mq-accent focus:ring-1 focus:ring-mq-accent",
          "disabled:cursor-not-allowed disabled:opacity-50",
        )}
      >
        <span className={selected ? "font-medium text-slate-900" : "text-slate-500"}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          size={16}
          className={cn("shrink-0 text-slate-500 transition-transform", open && "rotate-180")}
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-30 mt-1 max-h-56 w-full overflow-y-auto rounded-lg border border-slate-200 bg-[#0f2744] py-1 shadow-2xl"
        >
          {options.length === 0 ? (
            <li className="px-3 py-2.5 text-sm text-slate-500">Sin opciones</li>
          ) : (
            options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li key={option.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "w-full px-3 py-2.5 text-left text-sm transition-colors",
                      isSelected
                        ? "bg-mq-accent/15 font-semibold text-mq-accent"
                        : "text-slate-900 hover:bg-white/[0.06]",
                    )}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })
          )}
        </ul>
      ) : null}
    </div>
  );
}

import type { ChangeEventHandler } from "react";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  name: string;
  options: SelectOption[];
  defaultValue?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  className?: string;
};

export const selectInputClassName = cn(
  "w-full cursor-pointer appearance-none rounded-lg border border-slate-200",
  "bg-white px-4 py-2.5 text-sm font-medium text-slate-900",
  "outline-none transition-all",
  "focus:border-mq-accent focus:ring-1 focus:ring-mq-accent"
);

export function SelectField({
  label,
  name,
  options,
  defaultValue,
  value,
  onChange,
  required,
  className,
}: SelectFieldProps) {
  const isControlled = value !== undefined;

  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <select
        name={name}
        {...(isControlled
          ? { value, onChange }
          : { defaultValue })}
        required={required}
        className={selectInputClassName}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-white text-slate-900"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}


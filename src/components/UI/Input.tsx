import React from "react";

interface InputProps {
  value: number | string;
  onChange: (value: number | string) => void;
  type?: string;
  placeholder?: string;
  min?: number;
  className?: string;
}

export default function Input({
  value,
  onChange,
  type = "text",
  placeholder = "",
  min,
  className = "",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      min={min}
      placeholder={placeholder}
      className={`w-full px-3 py-2 rounded bg-teal-50 text-teal-900 ${className}`}
      onChange={e =>
        type === "number"
          ? onChange(Number(e.target.value))
          : onChange(e.target.value)
      }
    />
  );
}
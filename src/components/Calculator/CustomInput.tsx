import React from "react";

interface CustomInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function CustomInput({ value, onChange }: CustomInputProps) {
  return (
    <input
      type="number"
      min={0}
      className="col-span-3 px-3 py-2 rounded bg-teal-50 text-teal-900 mt-2"
      placeholder="Custom"
      value={value > 0 && ![5, 10, 15, 25, 50].includes(value) ? value : ""}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}
import React from "react";

interface TipButtonProps {
  value: number;
  isActive: boolean;
  onSelect: (value: number) => void;
}

export default function TipButton({ value, isActive, onSelect }: TipButtonProps) {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-lg font-mono text-base transition-colors duration-150
        ${isActive ? "bg-cyan-600 text-white" : "bg-cyan-900 text-cyan-200 hover:bg-cyan-700"}
      `}
      onClick={() => onSelect(value)}
      aria-pressed={isActive}
    >
      {value}%
    </button>
  );
}
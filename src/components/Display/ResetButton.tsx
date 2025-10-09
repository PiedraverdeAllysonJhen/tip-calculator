import React from "react";

interface ResetButtonProps {
  onClick: () => void;
}

export default function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <button
      type="button"
      className="bg-teal-500 text-white py-2 px-6 rounded font-mono mt-4"
      onClick={onClick}
    >
      RESET
    </button>
  );
}
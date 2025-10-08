import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-teal-500 text-white py-2 px-4 rounded font-mono transition-colors hover:bg-teal-600 ${className}`}
    >
      {children}
    </button>
  );
}
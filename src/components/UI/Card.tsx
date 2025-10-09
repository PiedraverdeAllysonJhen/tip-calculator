import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-xl shadow-lg p-8 bg-white ${className}`}>
      {children}
    </div>
  );
}
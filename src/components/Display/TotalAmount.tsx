import React from "react";

interface TotalAmountProps {
  value: number;
}

export default function TotalAmount({ value }: TotalAmountProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-mono">Total</span>
      <span className="text-3xl font-mono">${value.toFixed(2)}</span>
    </div>
  );
}
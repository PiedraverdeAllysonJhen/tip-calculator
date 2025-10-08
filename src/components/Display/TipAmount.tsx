import React from "react";

interface TipAmountProps {
  value: number;
}

export default function TipAmount({ value }: TipAmountProps) {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="font-mono">Tip Amount</span>
      <span className="text-3xl font-mono">${value.toFixed(2)}</span>
    </div>
  );
}
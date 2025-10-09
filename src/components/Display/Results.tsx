import React from "react";
import ResetButton from "@/components/Display/ResetButton";

interface ResultsProps {
  tipAmount: number;
  totalAmount: number;
  onReset: () => void;
}

export default function Results({ tipAmount, totalAmount, onReset }: ResultsProps) {
  return (
    <div className="bg-teal-900 rounded-xl p-8 flex flex-col gap-6 text-teal-100 w-full max-w-md justify-between">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono">
            Tip Amount
            <br />
            <span className="text-xs text-teal-300">/ person</span>
          </span>
          <span className="text-3xl font-mono">${tipAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-mono">
            Total
            <br />
            <span className="text-xs text-teal-300">/ person</span>
          </span>
          <span className="text-3xl font-mono">${totalAmount.toFixed(2)}</span>
        </div>
      </div>
      <ResetButton onClick={onReset} />
    </div>
  );
}
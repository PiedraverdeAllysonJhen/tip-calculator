import React from "react";

interface BillInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function BillInput({ value, onChange }: BillInputProps) {
  return (
    <div>
      <label className="block text-base md:text-lg font-mono mb-2 text-teal-800">
        Bill
      </label>
      <div className="flex items-center">
        <span className="text-teal-400 font-mono mr-2">$</span>
        <input
          type="number"
          min={0}
          className="w-full px-3 py-2 rounded bg-teal-50 text-teal-900"
          value={value === 0 ? "" : value}
          onChange={e => {
            const val = e.target.value.replace(/^0+/, "");
            onChange(val === "" ? 0 : Number(val));
          }}
          placeholder="Enter bill amount"
        />
      </div>
    </div>
  );
}
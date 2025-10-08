import React from "react";
import TipButton from "./TipButton";
import CustomInput from "./CustomInput";

interface TipSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const tipOptions = [5, 10, 15, 25, 50];

export default function TipSelector({ value, onChange }: TipSelectorProps) {
  return (
    <div>
      <label className="block text-base md:text-lg font-mono mb-2 text-teal-800">Select Tip %</label>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {tipOptions.map(percent => (
          <TipButton
            key={percent}
            value={percent}
            isActive={value === percent}
            onSelect={onChange}
          />
        ))}
        <CustomInput value={value} onChange={onChange} />
      </div>
    </div>
  );
}
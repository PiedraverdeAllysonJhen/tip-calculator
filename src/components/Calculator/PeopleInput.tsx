import React from "react";

interface PeopleInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function PeopleInput({ value, onChange }: PeopleInputProps) {
  return (
    <div>
       <label className="block text-base md:text-lg font-mono mb-2 text-teal-800">Number of People</label>
      <input
        type="number"
        min={1}
        className="w-full px-3 py-2 rounded bg-teal-50 text-teal-900"
        value={value === 0 ? "" : value}
        onChange={e => {
          const val = e.target.value.replace(/^0+/, "");
          onChange(val === "" ? 0 : Number(val));
        }}
        placeholder="Enter number of people"
      />
    </div>
  );
}
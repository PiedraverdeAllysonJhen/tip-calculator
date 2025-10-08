import React from "react";
import BillInput from "@/components/Calculator/BillInput";
import PeopleInput from "@/components/Calculator/PeopleInput";
import TipSelector from "@/components/Calculator/TipSelector";
import type { CalculatorFormValues } from "@/types/form";

interface CalculatorFormProps {
  values: CalculatorFormValues;
  onChange: (field: keyof CalculatorFormValues, value: number) => void;
}

export default function CalculatorForm({ values, onChange }: CalculatorFormProps) {
  return (
    <form className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 w-full max-w-md">
      <BillInput value={values.bill} onChange={val => onChange("bill", val)} />
      <TipSelector value={values.tip} onChange={val => onChange("tip", val)} />
      <PeopleInput value={values.people} onChange={val => onChange("people", val)} />
    </form>
  );
}
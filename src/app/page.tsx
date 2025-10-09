"use client";
import React, { useState } from "react";
import CalculatorForm from "@/components/Calculator/CalculatorForm";
import Results from "@/components/Display/Results";
import type { CalculatorFormValues } from "@/types/form";
import { calculateTip, calculateTotal, calculatePerPerson } from "@/utils/math";

export default function Home() {
  const [values, setValues] = useState<CalculatorFormValues>({
    bill: 0,
    tip: 0,
    people: 1,
  });
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  React.useEffect(() => {
    const tip = calculateTip(values.bill, values.tip);
    const total = calculateTotal(values.bill, tip);
    setTipAmount(calculatePerPerson(tip, values.people));
    setTotalAmount(calculatePerPerson(total, values.people));
  }, [values]);

  const handleChange = (field: keyof CalculatorFormValues, value: number) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setValues({ bill: 0, tip: 0, people: 1 });
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-teal-100">
      <div className="text-center mb-12 font-mono tracking-widest text-teal-900 text-2xl">
        <span>SPLI</span>
        <br />
        <span>TTER</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl p-6 md:p-12 shadow-2xl w-full max-w-4xl">
        <CalculatorForm
          values={values}
          onChange={handleChange}
        />
        <Results
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          onReset={handleReset}
        />
      </div>
    </main>
  );
}

import { useMemo } from "react";

export function useTipCalculator(bill: number, tipPercent: number, people: number) {
  return useMemo(() => {
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const tipPerPerson = people > 0 ? tipAmount / people : 0;
    const totalPerPerson = people > 0 ? total / people : 0;
    return { tipAmount, total, tipPerPerson, totalPerPerson };
  }, [bill, tipPercent, people]);
}
function calculateTip(bill: number, tipPercent: number) {
  return bill * (tipPercent / 100);
}

function calculateTotal(bill: number, tipAmount: number) {
  return bill + tipAmount;
}

function calculatePerPerson(amount: number, people: number) {
  return people > 0 ? amount / people : 0;
}


export { calculateTip, calculateTotal, calculatePerPerson };

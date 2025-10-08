import { useState } from "react";

export function useInput<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const onChange = (newValue: T) => setValue(newValue);
  return { value, onChange, setValue };
}
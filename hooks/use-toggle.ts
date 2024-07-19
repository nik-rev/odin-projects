import { useCallback, useState } from "react";

export function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((previousValue) => !previousValue);
  }, []);

  return [value, toggle] as const;
}

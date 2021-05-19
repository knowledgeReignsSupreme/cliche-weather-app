import { useEffect, useState } from 'react';

export function useDebounce(value) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!value) return;

    const debounceHandler = setTimeout(() => setDebouncedValue(value), 500);

    return () => clearTimeout(debounceHandler);
  }, [value]);
  return debouncedValue;
}

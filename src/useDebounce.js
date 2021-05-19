import { useEffect, useState } from 'react';

export function useDebounce(value) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (!value && isDirty) return;

    setIsDirty(false);

    const debounceHandler = setTimeout(() => setDebouncedValue(value), 500);

    return () => clearTimeout(debounceHandler);
  }, [value, isDirty]);
  return debouncedValue;
}

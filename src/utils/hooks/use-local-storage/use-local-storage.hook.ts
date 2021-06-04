import { useState, Dispatch, SetStateAction } from 'react';

import { tryParseJSON } from '../../functions/try-parse-json/try-parse-json.function';

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? tryParseJSON(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  // TODO - fix any
  return [storedValue, setValue as any];
};

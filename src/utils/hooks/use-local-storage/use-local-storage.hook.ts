import { useState } from 'react';

import { tryParseJSON } from '@utils/functions';
import { storageFactory } from '@infrastructure/persistence';

export const useLocalStorage = <T>(key: string, initialValue?: T): [T, (value: T) => void] => {
  const localStorageFactory = storageFactory(() => window.localStorage);

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorageFactory.getItem(key);

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
      localStorageFactory.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

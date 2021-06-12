import { useState } from 'react';

import { tryParseJSON } from '@utils';
import { storageFactory } from '@infrastructure/persistence';

export function useLocalStorage<T>(key: string, initialValue?: T): [T, (value: T) => void] {
  const localStorageFactory = storageFactory(() => window.localStorage);

  const [storedValue, setStoredValue] = useState(getInitialStoredValue);

  function getInitialStoredValue() {
    const item = localStorageFactory.getItem(key);

    return item ? tryParseJSON(item) : initialValue;
  }

  function setValue(value: T) {
    setStoredValue(value);

    localStorageFactory.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

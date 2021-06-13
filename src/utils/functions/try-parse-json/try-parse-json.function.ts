import { isString } from '..';

export function tryParseJSON<T = any>(jsonString: string): T | null {
  if (!isString(jsonString)) {
    return null;
  }

  try {
    const result = JSON.parse(jsonString);

    if (result) {
      return result;
    }
  } catch {
    return null;
  }

  return null;
}

export function tryParseJSON<T = any>(jsonString: string): T | null {
  if (typeof jsonString != 'string') {
    return null;
  }

  try {
    const result = JSON.parse(jsonString);

    if (result && typeof result == 'object') {
      return result;
    }
  } catch {
    return null;
  }

  return null;
}

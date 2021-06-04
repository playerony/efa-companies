export const tryParseJSON = <T = any>(jsonString: string): T | null => {
  if (!jsonString) {
    return null;
  }

  try {
    const result = JSON.parse(jsonString);

    if (result && typeof result === 'object') {
      return result;
    }
  } catch {
    return null;
  }

  return null;
};

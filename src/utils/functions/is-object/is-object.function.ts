export const isObject = (obj: unknown): boolean =>
  typeof obj == 'object' && obj === Object(obj) && !Array.isArray(obj);

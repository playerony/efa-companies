export const isObject = (obj: any): boolean =>
  typeof obj == 'object' && obj === Object(obj) && !Array.isArray(obj);

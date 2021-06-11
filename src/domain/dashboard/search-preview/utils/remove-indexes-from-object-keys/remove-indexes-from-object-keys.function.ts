import { isObject } from '..';

export const removeIndexesFromObjectKeys = (obj: any) => {
  if (!isObject(obj)) {
    return null;
  }

  const keys = Object.keys(obj);

  if (keys.length == 0) {
    return {};
  }

  return keys.reduce<{ [key: string]: any }>((result, _key) => {
    const value = obj[_key];
    const trimmedKey = _key.trim();
    const spaceIndex = trimmedKey.indexOf(' ');
    const keyLength = _key.length;
    const newKey = trimmedKey.substring(spaceIndex + 1, keyLength);

    if (result[newKey] === undefined) {
      return { ...result, [newKey]: value };
    }

    return result;
  }, {});
};

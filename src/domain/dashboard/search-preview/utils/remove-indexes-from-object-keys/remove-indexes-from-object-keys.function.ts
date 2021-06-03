export const removeIndexesFromObjectKeys = (obj: any) => {
  const keys = Object.keys(obj);

  return keys.reduce((result, _key) => {
    const value = obj[_key];
    const trimmedKey = _key.trim();
    const spaceIndex = trimmedKey.indexOf(' ');
    const keyLength = _key.length;
    const newKey = trimmedKey.substring(spaceIndex + 1, keyLength);

    return { ...result, [newKey]: value };
  }, {});
};

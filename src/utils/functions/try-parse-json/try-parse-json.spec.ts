import { tryParseJSON } from '..';
import { functionImportTest } from '../../tests';

describe('tryParseJSON Function', () => {
  functionImportTest(tryParseJSON);

  it('should return null when provided jsonString is a falsy value', () => {
    expect(tryParseJSON('')).toBeNull();

    // @ts-ignore
    expect(tryParseJSON(null)).toBeNull();

    // @ts-ignore
    expect(tryParseJSON(undefined)).toBeNull();
  });

  it('should return null when passed json string is invalid', () => {
    expect(tryParseJSON('123')).toBeNull();
  });

  it('should return object when passed json string is valid', () => {
    const data = { test: 'test' };

    expect(tryParseJSON(JSON.stringify(data))).toEqual(data);
  });
});

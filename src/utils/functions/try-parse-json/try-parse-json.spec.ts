import { tryParseJSON } from '..';
import { functionImportTest } from '../../tests';

describe('tryParseJSON Function', () => {
  functionImportTest(tryParseJSON);

  it('should return null when provided parameter is not a string value', () => {
    expect(tryParseJSON('')).toBeNull();

    // @ts-ignore
    expect(tryParseJSON(null)).toBeNull();

    // @ts-ignore
    expect(tryParseJSON(undefined)).toBeNull();
  });

  it("should return null when passed parameter can't be parsed", () => {
    expect(tryParseJSON('123')).toBeNull();
  });

  it('should return object when passed parameter can be parsed', () => {
    const data = { test: 'test' };

    expect(tryParseJSON(JSON.stringify(data))).toEqual(data);
  });
});

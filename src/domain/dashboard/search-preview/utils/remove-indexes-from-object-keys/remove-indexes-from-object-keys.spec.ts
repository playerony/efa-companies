import { functionImportTest } from '@utils';
import { removeIndexesFromObjectKeys } from './remove-indexes-from-object-keys.function';

describe('removeIndexesFromObjectKeys Function', () => {
  functionImportTest(removeIndexesFromObjectKeys);

  it('should return null when provided parameter is not an object', () => {
    expect(removeIndexesFromObjectKeys([])).toBeNull();
    expect(removeIndexesFromObjectKeys('')).toBeNull();
    expect(removeIndexesFromObjectKeys(NaN)).toBeNull();
    expect(removeIndexesFromObjectKeys(null)).toBeNull();
    expect(removeIndexesFromObjectKeys(true)).toBeNull();
    expect(removeIndexesFromObjectKeys('123')).toBeNull();
    expect(removeIndexesFromObjectKeys(undefined)).toBeNull();
  });

  it('should return empty object when passed one is also empty', () => {
    expect(removeIndexesFromObjectKeys({})).toEqual({});
  });

  it('should remove indexes from keys', () => {
    const input = {
      test: 'test',
      '1. Test1': 'test1',
      '2. Tes2': 'test2',
    };

    const expectations = {
      test: 'test',
      Test1: 'test1',
      Tes2: 'test2',
    };

    expect(removeIndexesFromObjectKeys(input)).toEqual(expectations);
  });

  it('should ignore next key value with the same key', () => {
    const input = {
      '1. test': 'test1',
      '2. test': 'test2',
      '3. test': 'test3',
      '4. test': 'test4',
      '5. test': 'test5',
    };

    const expectations = {
      test: 'test1',
    };

    expect(removeIndexesFromObjectKeys(input)).toEqual(expectations);
  });
});

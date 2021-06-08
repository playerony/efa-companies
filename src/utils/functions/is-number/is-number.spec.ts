import { isNumber } from './is-number.function';
import { functionImportTest } from '@utils/tests';

describe('isNumber Function', () => {
  functionImportTest(isNumber);

  it('should return false when provided parameter is not a number value', () => {
    expect(isNumber({})).toBeFalsy();
    expect(isNumber('123')).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber([1, 2, 3])).toBeFalsy();
    expect(isNumber(new Date())).toBeFalsy();
  });

  it('should return true when provided parameter is a number value', () => {
    expect(isNumber(-500)).toBeTruthy();
    expect(isNumber(500)).toBeTruthy();
  });
});

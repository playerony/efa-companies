import { numberFormatter } from './number-formatter.function';

import { functionImportTest } from '@utils/tests';

describe('numberFormatter Function', () => {
  functionImportTest(numberFormatter);

  it('should return null when passed value is not a number', () => {
    // @ts-ignore
    expect(numberFormatter('')).toBeNull();

    // @ts-ignore
    expect(numberFormatter([])).toBeNull();

    // @ts-ignore
    expect(numberFormatter(() => {})).toBeNull();

    // @ts-ignore
    expect(numberFormatter(false)).toBeNull();
  });

  it("should return passed value when it' too small", () => {
    expect(numberFormatter(1)).toEqual(1);
    expect(numberFormatter(69)).toEqual(69);
    expect(numberFormatter(312)).toEqual(312);
  });

  it('should format passed value', () => {
    expect(numberFormatter(1000)).toEqual('1 thousand');
    expect(numberFormatter(1270)).toEqual('1 thousand');
    expect(numberFormatter(358_000)).toEqual('358 thousand');
    expect(numberFormatter(1_100_000)).toEqual('1 million');
    expect(numberFormatter(1_919_000)).toEqual('2 million');
    expect(numberFormatter(710_919_000_000_000_000_000_000)).toEqual('711 sextillion');
  });

  it('should set custom digits', () => {
    expect(numberFormatter(710_919_123_000_000_000_000_000, 10)).toEqual('710.919123 sextillion');
  });
});

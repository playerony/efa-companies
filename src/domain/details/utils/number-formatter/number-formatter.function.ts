import { slice, reverse, compose, find } from 'ramda';

import { isNumber } from '@utils';
import { Lookup } from './number-formatter.type';

const lookup: Lookup[] = [
  { value: 1e3, symbol: 'thousand' },
  { value: 1e6, symbol: 'million' },
  { value: 1e9, symbol: 'billion' },
  { value: 1e12, symbol: 'trillion' },
  { value: 1e15, symbol: 'quadrillion' },
  { value: 1e18, symbol: 'quintillion' },
  { value: 1e21, symbol: 'sextillion' },
  { value: 1e24, symbol: 'septillion' },
];

const byValue = (value: number) => (_item: Lookup) => value >= _item.value;

const findLookupByValue = (value: number): Lookup | undefined =>
  compose<Lookup[], Lookup[], Lookup[], Lookup | undefined>(
    find(byValue(value)),
    slice(0, Infinity),
    reverse,
  )(lookup);

const replaceZerosAndDots = /\.0+$|(\.[0-9]*[1-9])0+$/;

export function numberFormatter(value: number, digits: number = 0): string | number | null {
  if (!isNumber(value)) {
    return null;
  }

  const item = findLookupByValue(value);

  if (!item) {
    return value;
  }

  const prefixNumber = value / item.value;
  const fixedPrefix = prefixNumber.toFixed(digits);
  const formattedPrefix = fixedPrefix.replace(replaceZerosAndDots, '$1');

  return `${formattedPrefix} ${item.symbol}`;
}

import { useGet } from '@utils';

const makeApiUrl = (symbol: string): string =>
  `/query?function=OVERVIEW&symbol=${symbol}&apikey=demo`;

export const useDetails = <T>(symbol: string) => useGet<T>(makeApiUrl(symbol));

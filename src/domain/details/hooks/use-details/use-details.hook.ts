import { useGet } from '@utils/hooks';

const makeApiUrl = (symbol: string): string =>
  `/query?function=OVERVIEW&symbol=${symbol}&apikey=demo`;

export const useDetails = <T>(symbol: string) => useGet<T>(makeApiUrl(symbol));

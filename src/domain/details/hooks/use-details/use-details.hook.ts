import { useGet } from '@utils';

const apiKey = process.env.REACT_APP_API_KEY || 'demo';

const makeApiUrl = (symbol: string): string =>
  `/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

export const useDetails = <T>(symbol: string) => useGet<T>(makeApiUrl(symbol));

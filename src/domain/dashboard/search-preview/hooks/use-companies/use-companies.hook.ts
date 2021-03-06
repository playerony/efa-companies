import { Company } from '@domain/dashboard';

import { useGet, isObject } from '@utils';
import { removeIndexesFromObjectKeys } from '../../utils';

const apiKey = process.env.REACT_APP_API_KEY || 'demo';

const makeApiUrl = (companyName: string): string =>
  `/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${apiKey}`;

const formatResult = (results: any): Company[] | null => {
  if (!isObject(results)) {
    return null;
  }

  if (!Array.isArray(results.bestMatches)) {
    return null;
  }

  return results.bestMatches.map(removeIndexesFromObjectKeys);
};

export const useCompanies = (companyName: string) => {
  const { results, hasError, isLoading } = useGet(makeApiUrl(companyName));

  const formattedResult = formatResult(results);

  return { results: formattedResult, hasError, isLoading };
};

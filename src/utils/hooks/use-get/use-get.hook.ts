import { useEffect } from 'react';
import { AxiosResponse } from 'axios';

import { State } from './use-get.types';

import { useSetState } from '@utils';
import { axiosInstance } from '@infrastructure';

export const useGet = <ResultsType>(url: string = ''): State<ResultsType> => {
  const [state, setState] = useSetState<State<ResultsType>>({
    results: null,
    hasError: false,
    isLoading: false,
  });

  useEffect(() => {
    let didCancel = false;

    const get = async () => {
      if (url) {
        setState({
          isLoading: true,
          hasError: false,
        });

        try {
          const response: AxiosResponse<ResultsType> = await axiosInstance.get(url);

          if (!didCancel && response?.status === 200) {
            setState({
              hasError: false,
              isLoading: false,
              results: response.data,
            });
          } else {
            throw new Error('Status is not 200');
          }
        } catch (error) {
          if (!didCancel) {
            setState({
              hasError: true,
              isLoading: false,
            });
          }
        }
      }
    };

    get();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return state;
};

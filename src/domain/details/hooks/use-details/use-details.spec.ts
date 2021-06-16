import { renderHook } from '@testing-library/react-hooks';

import { functionImportTest } from '@utils';
import { useDetails } from './use-details.hook';

jest.mock('@utils', () => {
  const originalModule = jest.requireActual('@utils');

  return {
    __esModule: true,
    ...originalModule,
    useGet: jest.fn().mockImplementation((parameter) => parameter),
  };
});

describe('useDetails Hook', () => {
  functionImportTest(useDetails);

  it('should call useGet hook with proper url', () => {
    const { result } = renderHook(() => useDetails('test_symbol'));

    expect(result.current).toEqual(
      '/query?function=OVERVIEW&symbol=test_symbol&apikey=super_secure_apikey',
    );
  });

  it('should take an apikey from enviroment variables', () => {
    const { result } = renderHook(() => useDetails('test_apikey'));

    expect(result.current).toEqual(
      '/query?function=OVERVIEW&symbol=test_apikey&apikey=super_secure_apikey',
    );
  });
});

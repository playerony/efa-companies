import { renderHook } from '@testing-library/react-hooks';

import { functionImportTest } from '@utils';

const useGetMock = jest.fn().mockImplementation((parameter) => parameter);

jest.doMock('@utils', () => {
  const originalModule = jest.requireActual('@utils');

  return {
    __esModule: true,
    ...originalModule,
    useGet: useGetMock,
  };
});

const { useCompanies } = require('./use-companies.hook');

describe('useCompanies Hook', () => {
  functionImportTest(useCompanies);

  it('should call useGet hook with proper url', () => {
    renderHook(() => useCompanies('company_name'));

    expect(useGetMock).toHaveBeenCalledWith(
      '/query?function=SYMBOL_SEARCH&keywords=company_name&apikey=super_secure_apikey',
    );
  });
});

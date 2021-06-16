import { getColumns } from './get-columns.function';

import { functionImportTest } from '@utils';

describe('getColumns Function', () => {
  functionImportTest(getColumns);

  it('should return an array which represents each table column', () => {
    const onRemove = jest.fn();
    const columns = getColumns({ onRemove });

    expect(columns).toMatchSnapshot();
  });
});

import { renderHook } from '@testing-library/react-hooks';

import { useDebounce } from './use-debounce.hook';

describe('useDebounce Hook', () => {
  it('should return updated value after some time', async () => {
    const { result, rerender, waitFor } = renderHook((value) => useDebounce(value, 300), {
      initialProps: 'base phrase',
    });

    expect(result.current).toEqual('base phrase');

    rerender('new phrase');

    await waitFor(() => {
      expect(result.current).toEqual('new phrase');
    });
  });
});

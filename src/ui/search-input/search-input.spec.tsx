import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppProvider } from '@application/context';
import { SearchInput } from './search-input.component';
import { SearchInputProps } from './search-input.types';

const wrapComponent = (props: SearchInputProps = {}) =>
  render(
    <AppProvider>
      <SearchInput {...props} />
    </AppProvider>,
  );

describe('<SearchInput /> Component', () => {
  it('render and type something', async () => {
    const { container } = wrapComponent();

    const input = container.getElementsByTagName('input')[0];
    if (!input) {
      return;
    }

    await fireEvent.mouseDown(input);
    await userEvent.type(input, 'test');

    expect(input.value).toEqual('test');
  });
});

import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchInput } from './search-input.component';

import { curryWrapComponent } from '@utils/tests';

const wrapComponent = curryWrapComponent(SearchInput)({});

describe('<SearchInput /> Component', () => {
  it('render and type something', async () => {
    const { container } = wrapComponent({});

    const input = container.getElementsByTagName('input')[0];
    if (!input) {
      return;
    }

    await fireEvent.mouseDown(input);
    await userEvent.type(input, 'test');

    expect(input.value).toEqual('test');
  });
});

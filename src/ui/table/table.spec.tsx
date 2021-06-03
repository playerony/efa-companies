import { render } from '@testing-library/react';

import { Table } from './table.component';
import { AppProvider } from '@application/context';

const wrapComponent = (props = {}) =>
  render(
    <AppProvider>
      <Table {...props} />
    </AppProvider>,
  );

describe('<Table /> Component', () => {
  it('should render', async () => {
    const utils = wrapComponent();
    const tableElements = utils.container.getElementsByTagName('table');
    expect(tableElements.length).toEqual(1);
  });
});

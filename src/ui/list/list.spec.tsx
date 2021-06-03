import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { List } from './list.component';
import { AppProvider } from '@application/context';

const wrapComponent = (children: string | ReactNode) =>
  render(
    <AppProvider>
      <List>{children}</List>
    </AppProvider>,
  );

describe('<List /> Component', () => {
  it('should render with proper children', async () => {
    const children = <li>test</li>;

    const utils = wrapComponent(children);
    const itemListRecords = utils.container.getElementsByTagName('li');
    expect(itemListRecords.length).toEqual(1);
  });
});

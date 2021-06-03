import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { ListItem } from './list-item.component';
import { AppProvider } from '@application/context';

const wrapComponent = (children: string | ReactNode) =>
  render(
    <AppProvider>
      <ListItem>{children}</ListItem>
    </AppProvider>,
  );

describe('<ListItem /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test tabel';

    const utils = wrapComponent(label);
    const itemListRecords = utils.container.getElementsByTagName('li');
    expect(itemListRecords.length).toEqual(1);
  });
});

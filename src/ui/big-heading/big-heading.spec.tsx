import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { AppProvider } from '@application/context';
import { BigHeading } from './big-heading.component';

const wrapComponent = (children: string | ReactNode) =>
  render(
    <AppProvider>
      <BigHeading>{children}</BigHeading>
    </AppProvider>,
  );

describe('<BigHeading /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test label';

    const { getByText } = wrapComponent(label);
    expect(getByText(label)).toBeInTheDocument();
  });
});

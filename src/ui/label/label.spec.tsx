import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { Label } from './label.component';
import { AppProvider } from '@application/context';

const wrapComponent = (children: string | ReactNode) =>
  render(
    <AppProvider>
      <Label>{children}</Label>
    </AppProvider>,
  );

describe('<Label /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test label';

    const { getByText } = wrapComponent(label);
    expect(getByText(label)).toBeInTheDocument();
  });
});

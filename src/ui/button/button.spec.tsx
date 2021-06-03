import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { Button } from './button.component';
import { AppProvider } from '@application/context';

const wrapComponent = (children: string | ReactNode) =>
  render(
    <AppProvider>
      <Button>{children}</Button>
    </AppProvider>,
  );

describe('<Button /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test button';

    const { getByText } = wrapComponent(label);
    expect(getByText(label)).toBeInTheDocument();
  });
});

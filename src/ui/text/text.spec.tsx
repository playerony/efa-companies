import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { Text } from './text.component';
import { AppProvider } from '@application/context';

const wrapComponent = (children: string | ReactNode) =>
  render(
    <AppProvider>
      <Text>{children}</Text>
    </AppProvider>,
  );

describe('<Text /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test text';

    const { getByText } = wrapComponent(label);
    expect(getByText(label)).toBeInTheDocument();
  });
});

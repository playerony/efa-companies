import { ComponentType } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

import { AppProvider } from '@application/context';

export const curryWrapComponent =
  <ComponentProps,>(Component: ComponentType<ComponentProps>) =>
  (memoryRouterProps: MemoryRouterProps) =>
  (componentProps: ComponentProps) =>
    render(
      <MemoryRouter {...memoryRouterProps}>
        <AppProvider>
          <Component {...componentProps} />
        </AppProvider>
      </MemoryRouter>,
    );

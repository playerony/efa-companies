import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProviderProps } from './theme-provider.types';
import { theme, ResetStyles, GlobalStyles } from '@infrastructure/styles';

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={theme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);

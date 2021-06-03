import { AppProviderProps } from './app-provider.types';
import { ThemeProvider } from '../theme-provider/theme-provider.component';

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => (
  <ThemeProvider>{children}</ThemeProvider>
);

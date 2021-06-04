import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from '../context';
import { AppRoutes } from '../routing/app-routing';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </BrowserRouter>
);

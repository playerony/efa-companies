import { BrowserRouter } from 'react-router-dom';

import { NavBar } from '@domain/nav/nav.component';

import { AppProvider } from '../context';
import { AppRoutes } from '../routing/app-routing';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <AppProvider>
      <NavBar />
      <AppRoutes />
    </AppProvider>
  </BrowserRouter>
);

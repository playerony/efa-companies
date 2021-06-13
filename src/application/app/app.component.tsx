import { BrowserRouter } from 'react-router-dom';

import { Navbar } from '@domain/navbar';

import { AppProvider } from '../context';
import { PlainBackground } from '../layout';
import { AppRoutes } from '../routing/app-routing';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <AppProvider>
      <PlainBackground>
        <Navbar />
        <AppRoutes />
      </PlainBackground>
    </AppProvider>
  </BrowserRouter>
);

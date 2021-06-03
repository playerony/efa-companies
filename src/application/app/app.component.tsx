import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from '../context';
import { DashboardPage } from '../pages/dashboard-page/dashboard-page.component';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <AppProvider>
      <DashboardPage />
    </AppProvider>
  </BrowserRouter>
);

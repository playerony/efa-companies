import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from '../context';

import { Button, BigHeading, SearchInput } from '@ui';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <AppProvider>
      <BigHeading>big heading</BigHeading>
      <Button>test</Button>
      <SearchInput placeholder="xD" />
    </AppProvider>
  </BrowserRouter>
);

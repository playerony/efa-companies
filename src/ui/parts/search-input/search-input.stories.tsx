import { storiesOf } from '@storybook/react';

import { SearchInput } from './search-input.component';

storiesOf('Design System/ui/SearchInput', module).add('default', () => (
  <SearchInput placeholder="Search input..." />
));

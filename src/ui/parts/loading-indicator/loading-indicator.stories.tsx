import { storiesOf } from '@storybook/react';

import { Empty } from '..';
import { LoadingIndicator } from './loading-indicator.component';

storiesOf('Design System/ui/LoadingIndicator', module).add('default', () => (
  <LoadingIndicator spinning>
    <Empty />
  </LoadingIndicator>
));

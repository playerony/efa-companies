import { storiesOf } from '@storybook/react';

import { List, ListItem } from '@ui';

storiesOf('Design System/ui/List', module).add('default', () => (
  <List>
    <ListItem>first list item</ListItem>
    <ListItem>second list item</ListItem>
  </List>
));

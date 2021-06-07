import { storiesOf } from '@storybook/react';

import { List } from './list.component';
import { ListItem } from '../list-item/list-item.component';

storiesOf('Design System/ui/List', module).add('default', () => (
  <List>
    <ListItem>first list item</ListItem>
    <ListItem>second list item</ListItem>
  </List>
));

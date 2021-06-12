import { curryWrapComponent } from '@utils';
import { ListItem } from './list-item.component';

const wrapComponent = curryWrapComponent(ListItem)({});

describe('<ListItem /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test tabel';

    const utils = wrapComponent({ children: label });
    const itemListRecords = utils.container.getElementsByTagName('li');

    expect(itemListRecords.length).toEqual(1);
  });
});

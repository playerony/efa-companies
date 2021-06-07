import { ListItem } from './list-item.component';
import { curryWrapComponent } from '@utils/tests';

const wrapComponent = curryWrapComponent(ListItem)({});

describe('<ListItem /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test tabel';

    const utils = wrapComponent({ children: label });
    const itemListRecords = utils.container.getElementsByTagName('li');

    expect(itemListRecords.length).toEqual(1);
  });
});

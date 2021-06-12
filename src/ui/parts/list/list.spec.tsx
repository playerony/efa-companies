import { List } from './list.component';
import { curryWrapComponent } from '@utils';

const wrapComponent = curryWrapComponent(List)({});

describe('<List /> Component', () => {
  it('should render with proper children', async () => {
    const children = <li>test</li>;

    const utils = wrapComponent({ children });
    const itemListRecords = utils.container.getElementsByTagName('li');

    expect(itemListRecords.length).toEqual(1);
  });
});

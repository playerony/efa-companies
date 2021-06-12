import { Table } from './table.component';
import { curryWrapComponent } from '@utils';

const wrapComponent = curryWrapComponent(Table)({});

describe('<Table /> Component', () => {
  it('should render', async () => {
    const utils = wrapComponent({});

    const tableElements = utils.container.getElementsByTagName('table');
    expect(tableElements.length).toEqual(1);
  });
});

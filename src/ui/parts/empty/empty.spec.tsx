import { Empty } from './empty.component';
import { curryWrapComponent } from '@utils/tests';

const wrapComponent = curryWrapComponent(Empty)({});

describe('<Empty /> Component', () => {
  it('should render with proper children', async () => {
    const { getByText } = wrapComponent({});
    expect(getByText('No Data')).toBeInTheDocument();
  });
});

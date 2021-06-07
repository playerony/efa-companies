import { Label } from './label.component';
import { curryWrapComponent } from '@utils/tests';

const wrapComponent = curryWrapComponent(Label)({});

describe('<Label /> Component', () => {
  it('should render with proper children', async () => {
    const children = 'test label';

    const { getByText } = wrapComponent({ children });
    expect(getByText(children)).toBeInTheDocument();
  });
});

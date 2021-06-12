import { Button } from './button.component';
import { curryWrapComponent } from '@utils';

const wrapComponent = curryWrapComponent(Button)({});

describe('<Button /> Component', () => {
  it('should render with proper children', async () => {
    const children = 'test button';

    const { getByText } = wrapComponent({ children });
    expect(getByText(children)).toBeInTheDocument();
  });
});

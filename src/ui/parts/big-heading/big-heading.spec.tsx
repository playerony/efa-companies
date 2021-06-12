import { curryWrapComponent } from '@utils';
import { BigHeading } from './big-heading.component';

const wrapComponent = curryWrapComponent(BigHeading)({});

describe('<BigHeading /> Component', () => {
  it('should render with proper children', async () => {
    const children = 'test label';

    const { getByText } = wrapComponent({ children });
    expect(getByText(children)).toBeInTheDocument();
  });
});

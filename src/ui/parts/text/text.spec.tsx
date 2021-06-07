import { Text } from './text.component';
import { curryWrapComponent } from '@utils/tests';

const wrapComponent = curryWrapComponent(Text)({});

describe('<Text /> Component', () => {
  it('should render with proper children', async () => {
    const label = 'test text';

    const { getByText } = wrapComponent({ children: label });
    expect(getByText(label)).toBeInTheDocument();
  });
});

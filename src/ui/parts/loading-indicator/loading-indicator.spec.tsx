import { curryWrapComponent } from '@utils';
import { LoadingIndicator } from './loading-indicator.component';

const wrapComponent = curryWrapComponent(LoadingIndicator)({});

describe('<LoadingIndicator /> Component', () => {
  test('should render without crashing', () => {
    const { container } = wrapComponent({});

    expect(container).toBeInTheDocument();
  });
});

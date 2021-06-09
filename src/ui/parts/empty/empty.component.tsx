import { Empty as AntdEmpty } from 'antd';
import { FunctionComponent } from 'react';

import { EmptyProps } from './empty.types';

export const Empty: FunctionComponent<EmptyProps> = (props) => (
  <AntdEmpty image={AntdEmpty.PRESENTED_IMAGE_SIMPLE} {...props} />
);

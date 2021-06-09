import { Spin } from 'antd';
import { FunctionComponent } from 'react';

import S from './loading-indicator.styles';
import { LoadingIndicatorProps } from './loading-indicator.types';

export const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = (props) => {
  const indicatorIcon = <S.StyledIcon spin />;

  return <Spin delay={100} indicator={indicatorIcon} {...props} />;
};

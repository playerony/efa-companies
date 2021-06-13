import { FunctionComponent } from 'react';

import S from './loader.styles';
import { LoadingIndicator } from '@ui';

export const Loader: FunctionComponent = () => (
  <LoadingIndicator spinning>
    <S.StyledContent />
  </LoadingIndicator>
);

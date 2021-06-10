import { FunctionComponent } from 'react';

import { LoadingIndicator } from '@ui/parts';

import S from './loader.styles';

export const Loader: FunctionComponent = () => (
  <LoadingIndicator spinning>
    <S.StyledContent />
  </LoadingIndicator>
);

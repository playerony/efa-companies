import { BigHeading } from '@ui/parts';
import { CenterBlock } from './layout';

import { ErrorProps } from './error.types';

export const Error = ({ code }: ErrorProps): JSX.Element => (
  <CenterBlock>
    <BigHeading>{code}</BigHeading>
  </CenterBlock>
);

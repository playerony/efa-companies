import styled from 'styled-components';

import { Empty, Label } from '@ui';
import { respondTo } from '@infrastructure';

const StyledLabel = styled(Label)`
  padding-top: ${({ theme }) => theme.spacing.medium};

  ${({ theme }) => respondTo.small`
    padding-top: ${theme.spacing.base};
  `}

  ${({ theme }) => respondTo.mobile`
    padding-top: ${theme.spacing.medium};
  `}
`;

const StyledEmpty = styled(Empty)`
  padding-top: ${({ theme }) => theme.spacing.small};
`;

const S = {
  StyledEmpty,
  StyledLabel,
};

export default S;

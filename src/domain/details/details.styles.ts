import styled from 'styled-components';

import { respondTo } from '@infrastructure';

const StyledTextWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.small};

    ${({ theme }) => respondTo.mobile`
      margin-top: ${theme.spacing.xsmall};
    `}
  }
`;

const S = {
  StyledTextWrapper,
};

export default S;

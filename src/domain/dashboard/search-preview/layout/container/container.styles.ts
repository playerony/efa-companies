import styled from 'styled-components';

import { Label } from '@ui/parts';

import { respondTo } from '@infrastructure/styles/mixins';

const StyledContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};

  ${Label}:nth-of-type(2) {
    padding-top: ${({ theme }) => theme.spacing.medium};
  }

  ${({ theme }) => respondTo.mobile`
    padding: ${theme.spacing.small};
  `}
`;

const S = {
  StyledContainer,
};

export default S;

import styled from 'styled-components';

import { Label } from '@ui';

const StyledContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};

  ${Label}:nth-of-type(2) {
    padding-top: ${({ theme }) => theme.spacing.medium};
  }
`;

const S = {
  StyledContainer,
};

export default S;

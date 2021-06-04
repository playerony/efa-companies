import styled from 'styled-components';

import { respondTo } from '@infrastructure/styles/mixins';

const StyledContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};

  ${({ theme }) => respondTo.mobile`
    padding: ${theme.spacing.small};
  `}
`;

const S = {
  StyledContainer,
};

export default S;

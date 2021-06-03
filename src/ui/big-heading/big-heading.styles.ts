import styled from 'styled-components';

import { respondTo } from '@infrastructure/styles/mixins';

const StyledBigHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ theme }) => respondTo.xmobile`
    font-size: ${theme.fontSize.big};
  `}
`;

const S = {
  StyledBigHeading,
};

export default S;

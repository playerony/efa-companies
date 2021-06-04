import styled from 'styled-components';

import { respondTo } from '@infrastructure/styles/mixins';

const StyledBigHeading = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 1.1;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ theme }) => respondTo.xmobile`
    font-size: ${theme.fontSize.medium};
  `}
`;

const S = {
  StyledBigHeading,
};

export default S;

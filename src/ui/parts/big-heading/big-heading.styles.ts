import styled, { css } from 'styled-components';

import { respondTo } from '@infrastructure/styles/mixins';
import { StyledBigHeadingProps } from './big-heading.types';

const StyledBigHeading = styled.h1<StyledBigHeadingProps>`
  margin: 0;
  padding: 0;
  line-height: 1.1;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}

  ${({ theme }) => respondTo.xmobile`
    font-size: ${theme.fontSize.medium};
  `}
`;

const S = {
  StyledBigHeading,
};

export default S;

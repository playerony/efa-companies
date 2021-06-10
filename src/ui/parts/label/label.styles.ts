import styled, { css } from 'styled-components';

import { StyledLabelProps } from './label.types';
import { respondTo } from '@infrastructure/styles/mixins';

const StyledLabel = styled.label<StyledLabelProps>`
  margin: 0;
  padding: 0;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.small};

  ${({ theme, strong }) =>
    css`
      font-weight: ${strong === true ? theme.fontWeight.bold : theme.fontWeight.normal};
    `}

  ${({ sameLine }) =>
    sameLine &&
    css`
      display: contents;
    `}

  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}
  
  ${({ theme }) => respondTo.xmobile`
    font-size: ${theme.fontSize.xsmall};
  `}
`;

const S = {
  StyledLabel,
};

export default S;

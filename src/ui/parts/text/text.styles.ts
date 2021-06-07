import styled from 'styled-components';

const StyledText = styled.p`
  hyphens: auto;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
`;

const S = {
  StyledText,
};

export default S;

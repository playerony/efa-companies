import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  flex: 1 1;
  flex-grow: 0;
  display: flex;
  flex-shrink: 0
  padding: ${({ theme }) => theme.spacing.medium};
`;

const S = {
  StyledFlexContainer,
};

export default S;

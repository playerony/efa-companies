import styled from 'styled-components';

const StyledContainer = styled.div`
  & > :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`;

const S = {
  StyledContainer,
};

export default S;

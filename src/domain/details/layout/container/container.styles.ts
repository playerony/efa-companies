import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};

  & > :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`;

const S = {
  StyledContainer,
};

export default S;

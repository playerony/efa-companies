import styled from 'styled-components';

const StyledNav = styled.nav`
  &&& {
    color: ${({ theme }) => theme.color.black};
    padding: ${({ theme }) => theme.spacing.small};
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
  }
`;

const S = {
  StyledNav,
};

export default S;

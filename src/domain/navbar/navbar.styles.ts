import styled from 'styled-components';

const StyledNavbar = styled.nav`
  color: ${({ theme }) => theme.color.black};
  padding: ${({ theme }) => theme.spacing.small};
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
`;

const S = {
  StyledNavbar,
};

export default S;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    color: ${({ theme }) => theme.color.fontPrimary};
    font-size: ${({ theme }) => theme.fontSize.regular};
    background-color: ${({ theme }) => theme.color.white};
  }
`;

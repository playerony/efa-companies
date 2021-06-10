import styled from 'styled-components';

const StyledPlainBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.background};
`;

const S = {
  StyledPlainBackground,
};

export default S;
